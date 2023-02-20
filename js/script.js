window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  const elements = header.querySelectorAll("*");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    elements.forEach(element => {
      element.classList.add("dark");
    });
  } else {
    header.classList.remove("scrolled");
    elements.forEach(element => {
      element.classList.remove("dark");
    });
  }
});

$(document).ready(function(){
  $('.nav__button').click(function(event) {
    $('.nav').toggleClass('nav__active');
    $(this).toggleClass('nav__button_active');
    event.stopPropagation(); // предотвращение распространения события клика
  });

  $('.header__menu_item').click(function(event) {
    $('.nav').removeClass('nav__active');
    $('.nav__button').removeClass('nav__button_active');
    event.stopPropagation(); // предотвращение распространения события клика
  });

  if ($('.nav').length) {
    $(document).click(function(event) {
      // Проверяем, что клик был сделан не по меню .nav и не по кнопке .nav__button
      if (!$(event.target).closest('.nav').length && !$(event.target).hasClass('nav__button')) {
        $('.nav').removeClass('nav__active');
        $('.nav__button').removeClass('nav__button_active');
      }
    });
  }
  
  $('.carousel__inner').slick({
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'ease-in-out',
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-left.png" alt="left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-right.png" alt="right"></button>',
    responsive: [
      {
        breakpoint: 787,
        settings: {
        arrows: false
        }
      },
    ]
  });
  

  $('ul.catalog__tabs').on('click', 'li:not(catalog__tab_active)', function() {
    $(this)
    .addClass('catalog__tab_active')
    .siblings()
    .removeClass('catalog__tab_active')
    .closest('div.container')
    .find('div.catalog__content')
    .removeClass('catalog__content_active')
    .eq($(this).index()).addClass('catalog__content_active');
    });

  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__front').eq(i).toggleClass('catalog-item__front_active');
        $('.catalog-item__turn').eq(i).toggleClass('catalog-item__turn_active');
      });
    });
  }

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // При клике на кнопку с классом "open-modal"
  $('[data-modal="open-modal"]').on('click', function() {
    // Открыть модальное окно с классом "modal"
    $('.overlay, #consultation').fadeIn();
  });
  
  // При клике на кнопку с классом "close-modal" или на крестик
  $('.modal__close').on('click', function() {
    // Закрыть модальное окно с классом "modal"
    $('.overlay, .modal').fadeOut();
  });

  $('.button_catalog').each(function(i) {
    $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn();
    });
  });

  $('.buy').on('click', function() {
    $('.modal').hide();
    $('.modal_mini').fadeIn();
  });
});