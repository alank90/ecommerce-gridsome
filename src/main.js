// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isServer }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  head.link.push({
    rel: "stylesheet",
    href: "https://cdn.snipcart.com/themes/v3.0.4/default/snipcart.css"
  });

  head.script.push({
    type: "text/javascript",
    src: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js",
    body: true
  });

  head.script.push({
    type: "text/javascript",
    src: "https://cdn.snipcart.com/themes/v3.0.4/default/snipcart.js",
    body: true,

    // snipcart's attributes
    id: "snipcart",
    "data-api-key": "OThmOGEyOTctMGMyNC00NjUwLTg1ZTMtYjIwYjg4YWYzZGE4NjM3MTE1MDIxOTU3OTAwODk0"
  });

  head.titleTemplate = "%s – Snipcart's Furniture Store";
} // end export main.js
