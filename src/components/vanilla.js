/**
 * Using vanilla.js for tracking scroll and visibility of elements
 * Because it's faster than using a framework.
 * Using framework requires the framework to be resumed, which isn't worth it.
 * So vanilla is better, because this function is small and used by every pages.
 * Even SSG pages would use this package.
 */
export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('qwik-scroll-to-top');
    if (!button) return;

    const scrollFunction = () => {
      if (document.documentElement.scrollTop > 0) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    };
    scrollFunction();
    window.addEventListener('scroll', scrollFunction);

    button.addEventListener('click', () => {
      if (button.hasAttribute('data-smooth')) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        document.documentElement.scrollTop = 0;
      }
    });
  });
}