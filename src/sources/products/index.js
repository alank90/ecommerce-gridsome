/* jshint esversion:9 */

const Airtable = requie("airtable");

module.exports = function(api, opts) {
  const base = new Airtable({ apikey: opts.apiKey }).base(opts.base);

  api.loadSource(async store => {
    const contentType = store.addContentType({
      typeName: "Product",
      route: "/products/:slug"
    });
  });

  
};
