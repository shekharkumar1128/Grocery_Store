let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
    {
        searchForm.classList.toggle('active');
        shopping.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
    }



let shopping = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>
    {
        shopping.classList.toggle('active');
        searchForm.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
    }



let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
    {
        loginForm.classList.toggle('active');
        searchForm.classList.remove('active');
        shopping.classList.remove('active');
        navbar.classList.remove('active');
    }



let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>
    {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        shopping.classList.remove('active');
        loginForm.classList.remove('active');
    }




window.onscroll = () =>
    {
        searchForm.classList.remove('active');
        shopping.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
    }




    var swiper = new Swiper(".product-slider", {
        loop:true,
        spaceBetween: 20,
        autoplay: {
            delay: 7500,
            disableonInteraction: false,
        },

        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });





      var swiper = new Swiper(".Review-slider", {
        loop:true,
        spaceBetween: 20,
        autoplay: {
            delay: 7500,
            disableonInteraction: false,
        },

        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });