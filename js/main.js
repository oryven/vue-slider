var carouselVue = new Vue ({

    el: "#container",

    data: {

        slidesActive: 0,

        slides: [

            {
                image: "img/01.jpg",
                title: "Svezia",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
            },

            {
                image: "img/02.jpg",
                title: "Svizzera",
                text: "Lorem ipsum."
            },

            {
                image: "img/03.jpg",
                title: "Gran Bretagna",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.."

            },

            {
                image: "img/04.jpg",
                title: "Germania",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."

            },

            {
                image: "img/05.jpg",
                title: "Paradise",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."

            }

        ]

    },

    methods: {

        next: function(){

            if(this.slidesActive === this.slides.length -1){

                this.slidesActive = 0;


            } else {

                this.slidesActive++

            }

        },

        prev: function(){

            if(this.slidesActive === 0){

                this.slidesActive = this.slides.length -1;

            } else {

                this.slidesActive--;

            }

        }

    }

});