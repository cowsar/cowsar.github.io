
/*
  We need to add a class of `responsive-nav--open` to
  `#js-responsive-nav` ONLY when the nav is clicked AND
  when we’re on a viewport of less than `responsiveNavBreakpoint`.
  It needs removing when someone re-clicks the nav icon, or
  when the viewport no longer matches `responsiveNavBreakpoint`.
 */

(function() {
  var siteNav, siteNavBreakpoint;

  siteNav = document.getElementById('js-site-nav');

  siteNavBreakpoint = 1024;

  siteNav.addEventListener('click', function() {
    console.log('open');
    if (window.innerWidth < siteNavBreakpoint) {
      return siteNav.classList.toggle('site-nav--open');
    }
  });

}).call(this);

//# sourceMappingURL=site-nav.js.map
