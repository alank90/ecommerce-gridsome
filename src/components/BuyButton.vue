<template>
  <button
    class="snipcart-add-item"
    :data-item-id="product.id"
    :data-item-name="product.title"
    :data-item-description="excerpt"
    :data-item-image="image.url"
    :data-item-price="product.fields.Unit_cost"
    :data-item-url="'https://ecommerce-gridsome.netlify.com' + $props.product.path"
  >
    <slot>Buy for {{ itemCost }}</slot>
  </button>
</template>

<script>
function makeExcerpt(str, len) {
  let words = str.substr(0, len).split(" ");
  return words.slice(0, words.length - 1).join(" ") + "…";
}

export default {
  name: "BuyButton",
  props: ["product"],
  data() {
    return {
      excerpt: makeExcerpt(this.product.content, 125),
      image: this.product.images[0].thumbnails
        ? {
            name: this.product.title,
            url: this.product.images[0].thumbnails.large.url
          }
        : null
    };
  },
  computed: {
    itemCost: function() {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
      });

      return formatter.format(this.product.fields.Unit_cost);
    }
  }
};
</script>

<style scoped>
button {
  background-color: #e3e3e3;
  border: 0;
  font-family: inherit;
  font-size: inherit;
  border-radius: 0.2em;
  padding: 0.4em;
}
button:hover {
  background-color: hsla(152, 65%, 80%, 1);
  cursor: pointer;
}
</style>