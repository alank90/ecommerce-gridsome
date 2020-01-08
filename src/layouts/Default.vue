<template>
  <div class="layout">
    <header class="header">
      <g-link :to="{ name: 'home' }" class="home-btn">Furniture Store</g-link>
      <button class="snipcart-checkout">Goto Shopping Cart</button>
    </header>
    <section class="content">
      <slot />
    </section>
    <footer>
      <p>
        Made with a few ☕️ at
        <a href="https://snipcart.com/">Snipcart</a>
      </p>
      <p>
        Read our
        <a
          href="https://snipcart.com/blog/vuejs-graphql-airtable-example"
        >blog post on Gridsome and Airtable</a> or go see
        <a href="https://github.com/snipcart/snipcart-gridsome-airtable">the demo's repo</a>
      </p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
html,
body,
.layout {
  margin: 0;
  min-height: 100vh;
}
.layout {
  max-width: 600px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}
.home-btn {
  text-decoration: none;
  color: #4cba86;
  font-size: 3rem;
  line-height: 4rem;
  font-weight: 600;
}
.home-btn:before {
  background-image: url("/logo.png");
  content: "";
  width: 2.8rem;
  height: 2.5rem;
  display: inline-block;
  background-position: center;
  position: relative;
  top: 2px;
}
button.snipcart-checkout {
  font-size: 1.1rem;
  background-color: #9df1ca52;
  border-radius: 5px;
  font-weight: 400;
  margin-right: -10%;
  line-height: 1.8rem;
  cursor: pointer;
}
.nav__link {
  margin-left: 20px;
}
a {
  text-decoration: none;
  color: #4cba86;
}
</style>
