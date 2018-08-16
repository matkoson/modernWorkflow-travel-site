import $ from "jquery";
import Waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
  constructor(classToCatch, offsetSet) {
    this.classToCatch = classToCatch;
    this.offsetSet = offsetSet;
    this.itemsToReveal = $(this.classToCatch);
    this.hideInitially();
    this.createWaypoints();
  }
  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
    // let currClass =this.itemsToReveal.getAttribute("class");
    // this.itemsToReveal.setAttribute("class", currClass+" reveal-item");
  }
  createWaypoints() {
    let off = this.offsetSet;
    this.itemsToReveal.each(function() {
    let currIt = this;
    new Waypoint({
      element: currIt,
      handler: ()=>
       $(currIt).addClass("reveal-item--is-visible"),
      offset: off
    });
  })
  }

}

export default RevealOnScroll;
