import $ from "jquery";


class MobileMenu {
  constructor() {
  this.siteHeader = $(".site-header");
  this.menuIcon = $(".site-header__menu-icon");
  this.menuContent = $(".site-header__menu-content");
  // this.menuContent = document.querySelector(".site-header__menu-content");
  this.largeHeroH1 = $(".large-hero__title");
  this.largeHeroH2 = $(".large-hero__subtitle");
  this.events();
  }
  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }
  toggleTheMenu() {
    console.log(this.menuContent.className);
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.largeHeroH1.toggleClass("large-hero__title--hidden");
    this.largeHeroH2.toggleClass("large-hero__subtitle--hidden");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");

    // (this.menuContent.className ==="site-header__menu-content--is-visible") ?
    // this.menuContent.className = "site-header__menu-content" :
    // this.menuContent.className = "site-header__menu-content--is-visible" ;
  }
}
export default MobileMenu;
