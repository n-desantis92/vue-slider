var app = new Vue({
    el: "#app",

    data: {
      img: [
        {
        url: "img/re-leone.jpg",
        alt: "leone"
      },
        {
        url: "img/mare-cocktail.jpg",
        alt: "mare-cocktail"
      },
        {
        url: "img/marte.jpeg",
        alt: "marte"
      },
        {
        url: "img/nemo.jpg",
        alt: "nemo"
      }
    ]
    },

  });

console.log(app.img.url);
