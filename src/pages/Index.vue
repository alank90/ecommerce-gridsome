<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Ecommerce</h1>
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    titleTemplate: "Snipcart's Furniture Store"
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
