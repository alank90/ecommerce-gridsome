// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Ecommerce & Gridsome",
  plugins: [
    {
      use: "~/src/sources/products",
      options: {
        apiKey: "keyYQ7BudA9eJkhDN",
        base: "appP23Y0dQxf4473p"
      }
    },
  ],
  templates: {
    Product: "/products/:slug" // Set route for Product collection
  }
};
