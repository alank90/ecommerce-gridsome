<template>
  <Layout>
    <section class="products">
      <ProductPreview
        v-for="edge in groomedFurnitureBase"
        :key="edge.node.id"
        :product="edge.node"
        class="product"
      />
    </section>

    <Pager :info="$page.allProduct.pageInfo" class="product-navigation" />
  </Layout>
</template>

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
  computed: {
    // Check for any empty rows in Furniture base and remove them
    groomedFurnitureBase: function() {
      return this.$page.allProduct.edges.filter(record => {
        return record.node.images.length > 0;
      });
    }
  }
};
</script>

<page-query>
  # Write your query or mutation here
  query Products($page: Int) {
    allProduct(perPage: 6, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          path
          content
          cost
          images {
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
</page-query>

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
  max-height: 190px;
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
