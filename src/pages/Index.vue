<template>
  <Layout>
    <section class="products">
      <ProductPreview
        v-for="edge in $page.allProduct.edges"
        :key="edge.node.id"
        :product="edge.node"
        class="product"
      />
    </section>
  </Layout>
</template>

<page-query>
  # Write your query or mutation here
  query Products {
    allProduct {
      edges {
        node {
          id
          title
          path
          price
          content
          fields {
            Images {
              thumbnails {
                large {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
</page-query>


<script>
import { Pager } from "gridsome";
import ProductPreview from "../components/ProductPreview";

export default {
  metaInfo: {
    titleTemplate: "Snipcart's Furniture Store"
  },
  components: {
    Pager,
    ProductPreview
  },
  data: function() {
    return {
      product: {}
    };
  }
};
</script>



<style>
.product-navigation {
  display: flex;
  justify-content: center;
  flex: 0 1 auto;
}
.product-navigation a {
  box-sizing: border-box;
  width: 2em;
  background-color: #e3e3e3;
  color: black;
  font-weight: bold;
  margin: 0.5em;
  text-align: center;
  text-decoration: none;
  border-radius: 0.2em;
}
.product-navigation a.active {
  font-weight: normal;
  background-color: hsla(152, 65%, 80%, 1);
}
.products {
  display: flex;
  flex-wrap: wrap;
}
.products figure,
.products img {
  width: 100%;
  margin: 0;
}
.products a {
  color: inherit;
}
.products .product {
  display: block;
  width: 10em;
  margin: 1em;
}
.product button {
  width: 100%;
}
</style>
