/**
 * Initialize lazy loading
 * @param {{
 *  threshold: Number
 * }} options 
 */
function initLazyLody(options) {
  const $$ = (selector) => document.querySelectorAll(selector)
  
  if ($$('*[data-ll-src]').length > 0) {
    const images = $$('*[data-ll-src]')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const imageSrc = entry.target.dataset['llSrc']
        if (entry.intersectionRatio >= (options.threshold ? options.threshold : 0.5)) {
          entry.target.setAttribute('src', imageSrc)
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: options.threshold ? options.threshold : 0.5
    })
    images.forEach(image => observer.observe(image))
  }
}