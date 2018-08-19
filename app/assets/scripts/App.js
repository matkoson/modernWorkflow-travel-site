
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";





let mobileMenu = new MobileMenu();
new RevealOnScroll(".feature-item", "85%");
new RevealOnScroll(".testimonial", "65%");
let stickyHeader = new StickyHeader();
let modal = new Modal();
