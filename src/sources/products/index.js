/* jshint esversion:9 */

/* 
Server API (https://gridsome.org/docs/server-api/)
  Create a gridsome.server.js at root in your project or plugin in order to use the 
Server API. The file must export a function that will receive an API which allows 
it to hook into various parts of Gridsome. The second argument is options from the
plugin entry in gridsome.config.js.

    index.js will be loaded instead if no gridsome.server.js file is found. As is
    the case in this project.


The Data Store API (https://gridsome.org/docs/data-store-api/)
  Lets you insert your own data into the GraphQL data layer. You will 
then be able to access it through GraphQL in your components. Use this API if you want 
to build a custom data source connection or a plugin.

Schema API (https://gridsome.org/docs/schema-api/)
  This API lets you define your own schema types to have persisted fields.
Gridsome generates the GraphQL schema for metadata and collections based on the
data which is discovered on startup. That's great for simple projects but will 
often lead to errors with for example missing fields because content has been 
removed in an external source. This API lets you define your own schema types to 
have persisted fields.

The Schema API can be used in the loadSource and createSchema hooks.
*/

const Airtable = require("airtable");

// This is the Server API. Must export a function.
module.exports = function(api, opts) {
  const base = new Airtable({ apiKey: opts.apiKey }).base(opts.base);
  
  // api.loadSource(fn) is from the Gridsome Server API
  api.loadSource(async store => {
    // actions.addCollections(options) is from the Gridsome Data Store API
    console.log("Im in index.js");
    const contentType = store.addCollection({
      typeName: "Product"      
    });
     
    // From the Gridsome Schema API (deprecated use addSchemaTypes )
    contentType.addSchemaField("price", ({ graphql }) => ({
      type: graphql.GraphQLFloat,
      resolve(node) {
        return node.fields.unitCost;
      }
    }));

    await base("Furniture")
      .select()
      .eachPage((records, fetchNextPage) => {
        records.forEach(record => {
          const item = record._rawJson;
         

          // collection.addNode(options) is also from the Gridsome Data Store Api
          contentType.addNode({
            id: item.id,
            title: item.fields.Name,
            fields: item.fields,
            content: item.fields.Description
          });
        });
        fetchNextPage();
      });
  });
};
