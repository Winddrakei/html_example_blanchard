function closeDropDown() { // закрытие выпадающего меню
  document.querySelectorAll('.nav-btn__dropdown.visible').forEach(el => {
    el.classList.remove('visible');
    el.querySelectorAll('.nav-btn__dropdown-link').forEach(elem => {
      elem.tabIndex = -1;
    });
    el.parentNode.classList.remove('visible');
  });
}

function closeBurgerMenu() { // закрытие бургер-меню
  document.querySelector('.burger-menu').classList.remove('open');
  // document.body.style.overflow = '';
  document.querySelector('header').style.display = '';
  document.querySelector('main').style.display = '';
  document.querySelector('footer').style.display = '';
}

function openBurgerMenu() { // открытие бургер-меню
  document.querySelector('.burger-menu').classList.add('open');
  // document.body.style.overflow = 'hidden';
  document.querySelector('header').style.display = 'none';
  document.querySelector('main').style.display = 'none';
  document.querySelector('footer').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {

  // Смена фона в hero
  const hero = document.querySelector('.hero');
  const heroLimit = +hero.dataset.counts;
  const heroChangeInterval = setInterval(() => {
    const heroImage = +hero.dataset.image;
    let heroNewImage = heroImage + 1;
    if (heroNewImage > heroLimit) {
      heroNewImage = 1;
    }
    hero.dataset.image = heroNewImage;
  }, 5000);

  
  // Бургер-меню
  document.querySelector('.main-menu__burger--btn').addEventListener('click', el => {
    openBurgerMenu();
  });
  document.querySelector('.burger-menu__btn--close').addEventListener('click', el => {
    closeBurgerMenu();
  });
  const burgerMenuNavBtn = document.querySelector('.burger-menu__nav-btn');
  burgerMenuNavBtn.querySelectorAll('.nav-btn__link').forEach(elem => {
    elem.addEventListener('click', el => {
      closeBurgerMenu();
    });
  });
  

  // Меню поиска
  const findInputWrap = document.querySelector('.main-menu');
  document.querySelector('.main-menu__find').addEventListener('click', el => {
    findInputWrap.classList.remove('hidden-more');
  });
  document.querySelector('.main-menu__input--close').addEventListener('click', el => {
    findInputWrap.classList.add('hidden-more');
  });


  // Смена деятеля в catalogs
  document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
      const steep = e.currentTarget.dataset.steep;
      document.querySelectorAll('.tabs-nav__btn').forEach(function(btn) {
        btn.classList.remove('tabs-nav__btn--active');
      });
      e.currentTarget.classList.add('tabs-nav__btn--active');
      document.querySelectorAll('.tabs-item').forEach(function(tabsBtn) {
        tabsBtn.classList.remove('tabs-item--active');
      });
      let newTab = document.querySelector(`[data-target="${steep}"]`);
      if (!newTab) {
        newTab = document.querySelector(`[data-target="tab-no"]`);
      }
      newTab.classList.add('tabs-item--active');
      const img = newTab.querySelector('.more-left__figure');
      img.className = '';
      img.classList.add('more-left__figure', 'steep__figure--active');
    });
  });


  // Инициализация Choice.js
  const element = document.querySelector('.js-choice');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    sorter: () => {},
  });


  // Инициализация Swiper
  const swiper = new Swiper('.swiper.swiper-1', {
    initialSlide: 0,
    pagination: {
      el: '.swiper-buttons__pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next.swiper-1',
      prevEl: '.swiper-button-prev.swiper-1',
    },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      769: {
        spaceBetween: 38,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1025: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1281: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    }
  });

  const swiperEvents = new Swiper('.swiper.swiper-2', {
    initialSlide: 0,
    navigation: {
      nextEl: '.swiper-button-next.swiper-2',
      prevEl: '.swiper-button-prev.swiper-2'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 0,
      },
      769: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 35,
      },
      1025: {
        slidesPerGroup: 2,
        slidesPerView: 3,
        spaceBetween: 27,
      },
      1281: {
        slidesPerGroup: 1,
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
  });

  const swiperProjects = new Swiper('.swiper.swiper-3', {
    initialSlide: 0,
    navigation: {
      nextEl: '.swiper-button-next.swiper-3',
      prevEl: '.swiper-button-prev.swiper-3',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      769: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 34,
      },
      1025: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 50,
      },
      1281: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 50,
      },
    }
  });


  // Аккордеон
  const acc = new Accordion('.accordion-container');
  acc.open(0);


  // Яндекс-карта
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.76037676315512, 37.61487249333192],
      zoom: 14,
      controls: []
    });
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: '',
      balloonContent: ''
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-point.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [0, 0]
    }),
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  }


  // Инициализация tippy.js
  tippy('[data-tippy-content]');


  // Модальное окно
  function closeModal() { // закрытие модального окна
    modalWrap.classList.remove('is-active');
    // document.body.style.overflow = '';
  }

  const modalWrap = document.querySelector('.modal__wrapper');
  modalWrap.addEventListener('click', () => {
    closeModal();
  });
  const closeModalBtn = document.querySelector('.panel__close--btn');
  closeModalBtn.addEventListener('click', () => {
    closeModal();
  });

  const slideClick = document.querySelectorAll('.gallery__slide').forEach(el => {
    el.addEventListener('click', act => {
      modalWrap.classList.add('is-active');
      const slideImage = el.dataset.image;
      // document.body.style.overflow = 'hidden';
      const panelImage = document.querySelector('.panel__image');
      panelImage.dataset.image = slideImage;
      const panelText = document.querySelector(`.panel__text--art[data-art="${slideImage}"]`);
      document.querySelector('.panel__text--art.visible').classList.remove('visible');
      panelText.classList.add('visible');
    });
  }); 


  // Выпадающее меню
  document.querySelectorAll('.nav-btn__item').forEach(el => {
    el.addEventListener('click', act => {
      closeDropDown();
      const dropDown = el.querySelector('.nav-btn__dropdown');
      dropDown.classList.add('visible');
      dropDown.querySelectorAll('.nav-btn__dropdown-link').forEach(elem => {
        elem.tabIndex = 0;
      });
      dropDown.parentNode.classList.add('visible');
    });
  });


  // Обработка нажатия клавиши Esc
  document.addEventListener('keydown', e => {
    const key = e.key;
    if (key === "Escape") {
      closeModal();
      closeDropDown();
      closeBurgerMenu();
    }
  }); 


  // обработка клавиши Enter на чекбоксах
  document.addEventListener('keydown', e => {
    const key = e.key;
    const checkboxFocus = document.querySelector('.gallery__checkbox--def:focus');
    if (key === "Enter" && checkboxFocus) {
      
      if (checkboxFocus.checked == false) {
        checkboxFocus.checked = true;
      }
      else {
        checkboxFocus.checked = false;
      }
    }
  }); 


  // скроллинг к деятелю
  document.querySelectorAll('.convert__tabs-btn').forEach(btn => {
    btn.addEventListener('click', el => {
      window.location.href = '#figure';
    });
  });


  // закрытие выпадающего меню по клику вне области
  window.addEventListener('click', e => { 
    const target = e.target ;
    const navBtnVisible = document.querySelector('.nav-btn__dropdown.visible');
    if (!target.closest('.nav-btn__item')) { 
      closeDropDown();
    }
  });


  // Маска ввода телефонного номера
  const userPhone = document.querySelector('#tel');
  Inputmask({"mask": "+7 (999) 999-99-99"}).mask(userPhone);


  // Валидация формы
  const validation = new JustValidate('#form');
  validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    },
    {
      validator: (value) => {
        return value.trim().length >= 3;
      },
      errorMessage: 'Минимум 3 символа',
    },
    {
      validator: (value) => {
        return value.trim().length <= 30;
      },
      errorMessage: 'Максимум 30 симолов',
    },
    {
      validator: (value) => {
        return /^[A-Za-zA-ZА-ЯЁёа-я\s]+$/.test(value);
      },
      errorMessage: 'Недопустимый формат',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    },
    {
      validator: (value) => {
        const phone = userPhone.inputmask.unmaskedvalue();
        return Number(phone) && phone.length == 10;
      },
      errorMessage: 'Неполный номер',
    },
  ]);

});
