$(function () {

    $(window).scroll(function () {
        let the_top = $(document).scrollTop();
        let the_width = $('body').width();
        let fadeInUp = $(document).scrollTop();
        let back_top = $(document).scrollTop();
        if (the_top > 50) {
            $('.fixed__navbar').addClass('is-active');
            $('.logotype').attr("src", "src/img/logo-dark.png");
        }
        else if (the_width > 884) {
            $('.fixed__navbar').removeClass('is-active');
            $('.logotype').attr("src", "src/img/logo.png");
        }
        if (fadeInUp > 175) {
            $('.about__img').addClass('fade-in-up');
        } else {
            $('.about__img').removeClass('fade-in-up');
        }
        if (back_top > 300) {
            $('.back-to-top').addClass('back-to-top-is-visible');
        } else {
            $('.back-to-top').removeClass('back-to-top-is-visible');
        }
    });

    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
    });
    $('.work__client').slick({
        slidesToShow: 5,
        autoplaySpeed: 5000,
        slidesToScroll: 5,
        responsive: [
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
        ]
    });
    
    //Плавний перехід по навігації \/
    $(".fixed__navbar, .back-top").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    //accordion start
    let accordion = (function (element) {
        let _getItem = function (elements, className) { // функция для получения элемента с указанным классом
          let element = undefined;
          elements.forEach(function (item) {
            if (item.classList.contains(className)) {
              element = item;
            }
          });
          return element;
        };
        return function () {
          let _mainElement = {}, // .accordion
            _items = {}, // .accordion-item
            _contents = {}; // .accordion-item-content 
          let _actionClick = function (e) {
            if (!e.target.classList.contains('accordion-item-header')) { // прекращаем выполнение функции если кликнули не по заголовку
              return;
            }
            e.preventDefault(); // отменям стандартное действие
            // получаем необходимые данные
            let header = e.target,
              item = header.parentElement,
              itemActive = _getItem(_items, 'show');
            if (itemActive === undefined) { // добавляем класс show к элементу (в зависимости от выбранного заголовка)
              item.classList.add('show');
            } else {
              // удаляем класс show у ткущего элемента
              itemActive.classList.remove('show');
              // если следующая вкладка не равна активной
              if (itemActive !== item) {
                // добавляем класс show к элементу (в зависимости от выбранного заголовка)
                item.classList.add('show');
              }
            }
          },
          _setupListeners = function () {
            // добавим к элементу аккордиона обработчик события click
            _mainElement.addEventListener('click', _actionClick);
          };
      
          return {
            init: function (element) {
              _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
              _items = _mainElement.querySelectorAll('.accordion-item');
              _setupListeners();
            }
          }
        }
      })();
      let accordion1 = accordion();
      accordion1.init('#accordion');
      //acconrion end

    function classFunction() {
        if ($('body').width() < 884) {
            $('.fixed__navbar').addClass('is-active');
            $('.logotype').attr("src", "src/img/logo-dark.png");
        }
        else {
            $('.fixed__navbar').removeClass('is-active');
            $('.logotype').attr("src", "src/img/logo.png");
        }
    }

    classFunction();
    $(window).resize(classFunction);

    $('.hamburger').on('click', function () {
        $('.navbar').toggleClass("navbar_active"); //slidetoggle don't work correct
    });


});
