// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    // Note: In this project we decided to put our logic for creating the 
    // Product collection and its nodes in a plugin @ /sources/products/index.js
    // We could have put that logic here and not used a plugin. Your choice.
    // I suppose it helps in readability this way to have logic in seperate
    // file.
       

  });
  

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
