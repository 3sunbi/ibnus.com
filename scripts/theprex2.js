window.addEventListener("DOMContentLoaded", () => {
  // 1) Disable scroll restoration so browsers don’t restore previous scroll on reload
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  //  If there's a hash (like #history), remove it so the browser won't auto-scroll
  if (window.location.hash) {
    // This replaces the current URL with one without the hash,
    // so the user stays on the same page but with no fragment.
    history.replaceState("", document.title, window.location.pathname + window.location.search);
  }

  // 2) Immediately scroll to the top
  window.scrollTo(0, 0);

  // 3) Disable scrolling during splash
  document.body.style.overflow = "hidden";

  // 4) After 2 seconds, remove splash and allow scrolling
  setTimeout(() => {
    const header = document.getElementById("site-header");
    // remove splash
    header.classList.remove("splash-active");
    // add scrolled
    header.classList.add("scrolled");

    // Restore normal scrolling
    document.body.style.overflow = "";
  }, 2000);
});


// REMOVE or COMMENT OUT anything like this:
// window.addEventListener('scroll', function() {
//   const header = document.getElementById('site-header');
//   if (window.scrollY > 50) header.classList.add('scrolled');
//   else header.classList.remove('scrolled');
// });
