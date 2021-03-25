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
      ],
      imgIndex: 0,
    },
    methods: {
      nextImg: function () {
        this.imgIndex++;
        if (this.imgIndex == this.img.length) {
          this.imgIndex = 0;
        }
      },
      prevImg: function () {
        this.imgIndex--;
        if (this.imgIndex < 0 ) {
          this.imgIndex = this.img.length - 1;
        }
      }
    }


  });
