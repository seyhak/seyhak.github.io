function reveal() {
  const ELEMENT_VISIBLE_THRESHOLD = 200
  const ANIMATED_SELECTOR = ".revealed"
  const ANIMATED_ACTIVE_CLASSNAME = "active"
  const SHOULD_DISAPPEAR = false
  let reveals = document.querySelectorAll(ANIMATED_SELECTOR)

  reveals.forEach((item) => {
    const windowHeight = window.innerHeight
    const elementTop = item.getBoundingClientRect().top
    const elementBottom = item.getBoundingClientRect().bottom

    const isElementTopVisibleOnBottom =
      elementTop < windowHeight - ELEMENT_VISIBLE_THRESHOLD
    const isElementBottomVisible = elementBottom - ELEMENT_VISIBLE_THRESHOLD > 0
    const shouldBeActive = isElementTopVisibleOnBottom && isElementBottomVisible

    if (shouldBeActive) {
      item.classList.add(ANIMATED_ACTIVE_CLASSNAME)
    } else if (SHOULD_DISAPPEAR) {
      item.classList.remove(ANIMATED_ACTIVE_CLASSNAME)
    }
  })
}
function handleArrowDisappearIfOnBottom() {
  const ELEMENT_VISIBLE_THRESHOLD = 200
  const ANIMATED_SELECTOR = ".arrow"
  const ANIMATED_ACTIVE_CLASSNAME = "active"
  let reveals = document.querySelectorAll(ANIMATED_SELECTOR)

  reveals.forEach((item) => {
    const windowHeight = window.innerHeight

    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const allContentHeight = document.documentElement.scrollHeight

    const shouldDisappear =
      scrollTop + windowHeight >= allContentHeight - ELEMENT_VISIBLE_THRESHOLD
    if (shouldDisappear) {
      item.classList.remove(ANIMATED_ACTIVE_CLASSNAME)
    } else {
      item.classList.add(ANIMATED_ACTIVE_CLASSNAME)
    }
  })
}
reveal()
if (typeof window !== "undefined") {
  window.addEventListener("scroll", reveal)
  window.addEventListener("scroll", handleArrowDisappearIfOnBottom)
}
