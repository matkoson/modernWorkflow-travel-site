
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";




let mobileMenu = new MobileMenu();
new RevealOnScroll(".feature-item", "85%");
new RevealOnScroll(".testimonial", "65%");
let stickyHeader = new StickyHeader();
