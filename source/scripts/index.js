/* в этот файл добавляет скрипты*/
const navigation = document.querySelector('.main-header__navigation');
const contactsIframe = document.querySelector('.contacts__iframe');
const buttonBurger = document.querySelector('.main-header__button-toggle');
const navMenu = document.querySelector('.main-header__navigation');

navigation.classList.remove('main-header__navigation--no-js');
contactsIframe.classList.remove('contacts__iframe--no-js');
buttonBurger.classList.remove('main-header__button-toggle--no-js');

//menu-mobile
buttonBurger.onclick = function () {
  buttonBurger.classList.toggle('main-header__button-toggle--open');
  navMenu.classList.toggle('main-header__navigation--open');
};
