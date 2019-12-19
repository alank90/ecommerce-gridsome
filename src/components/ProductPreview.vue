<template>
  <article>
    <g-link :to="product.path">
      <figure v-if="image">
        <img :srcset="image.url" :alt="image.name" />
      </figure>

      <h2>{{ product.title }}</h2>
    </g-link>

    <p class="btn-line">
      <BuyButton :product="product" />
    </p>
    <p>{{ excerpt }}</p>
  </article>
</template>

<script>
import BuyButton from "./BuyButton";

function makeExcerpt(str, len) {
  let words = str.substr(0, len).split(" ");
  return words.slice(0, words.length - 1).join(" ") + "...";
}

export default {
  name: "ProductPreview",
  props: ["product"],
  components: {
    BuyButton
  },
  data() {
    return {
      excerpt: makeExcerpt(this.product.content, 125),
      image: this.product.fields.Images[0].thumbnails
        ? {
            name: this.product.title,
            url: this.product.fields.Images[0].thumbnails.large.url
          }
        : null
    };
  }
};
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
}
figure {
  height: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
}
h2 {
  font-size: 1em;
}
.btn-line {
  margin: 0;
}
</style>