import $ from "jquery";
import Waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smooth from "jquery-smooth-scroll";



class StickyHeader {
  constructor() {
    this.lazyImages = $(".lazyload");
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    let header = this.siteHeader;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: (direction)=>
      (direction === "down") ? header.addClass("site-header--dark") :
      header.removeClass("site-header--dark")
    });
  }

  createPageSectionWaypoints() {
    let that = this;
    this.pageSections.each( function() {
      let currIt = this;
      console.log(that.headerLinks);

      new Waypoint({
        element: currIt,
        handler: (direction)=> {
          if (direction === "down") {
          let matchingHeaderLink = currIt.getAttribute("data-matching-link");
          that.headerLinks.removeClass("is-current-link"); //REMOVE THE CLASS FROM ALL THE LINKS
          $(matchingHeaderLink).addClass("is-current-link"); //SELECT THE div BY THE VAL OF THE CUSTOM ATTR
          }
        },
        offset:  "18%"
      });

      new Waypoint({
        element: currIt,
        handler: (direction)=> {
          if (direction !== "down") {
          let matchingHeaderLink = currIt.getAttribute("data-matching-link");
          that.headerLinks.removeClass("is-current-link");
          $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset:  "-40%"
      });
    })
  }

  refreshWaypoints() {
    this.lazyImages.on("load", ()=> {
      Waypoint.refreshAll();})
  }
}

export default StickyHeader;
