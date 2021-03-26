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
      autoplay: null,
    },

    mounted: function () {
      this.autoplay = setInterval(this.nextImg,2000);

      const ancora = this;

      this.handler = function (e) {
        if (e.which === 37) {
          ancora.clickPrevImg();
        }else if (e.which === 39) {
          ancora.clickNextImg();
        }
      }
      window.addEventListener("keydown",this.handler )

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
      },
      // bulletImg:function (i) {
      //   this.imgIndex = i;
      // },
      clickNextImg: function () {
        this.nextImg();
        clearInterval(this.autoplay);
      },
      clickPrevImg: function () {
        this.prevImg();
        clearInterval(this.autoplay);
      }
    }


  });
