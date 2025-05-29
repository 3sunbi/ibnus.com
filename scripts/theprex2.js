window.addEventListener("DOMContentLoaded", () => {
  // 1) Disable scroll restoration so browsers don't restore previous scroll on reload
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  
  // If there's a hash (like #history), remove it so the browser won't auto-scroll
  if (window.location.hash) {
    // This replaces the current URL with one without the hash,
    // so the user stays on the same page but with no fragment.
    history.replaceState("", document.title, window.location.pathname + window.location.search);
  }
  
  // 2) Immediately scroll to the top
  window.scrollTo(0, 0);
  
  // 3) Immediately set header to scrolled state (no splash)
  const header = document.getElementById("site-header");
  header.classList.remove("splash-active");
  header.classList.add("scrolled");
  
  // 4) Optional: Add scroll listener if you want header to change on scroll
  let ticking = false;
  
  function updateHeader() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    
    ticking = false;
  }
  
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });
});
