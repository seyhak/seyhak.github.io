type HandleSwipingParams = {
  elementId: string
  onSwipeRight: (event: TouchEvent) => void
  onSwipeLeft: (event: TouchEvent) => void
}
export const handleSwiping = ({
  elementId,
  onSwipeRight,
  onSwipeLeft
}: HandleSwipingParams) => {
  const element = document.getElementById(elementId)

  let startX = 0
  let startY = 0

  element?.addEventListener(
    "touchstart",
    function (event: TouchEvent) {
      startX = event.touches[0].clientX
      startY = event.touches[0].clientY
    },
    { passive: true }
  )

  element?.addEventListener(
    "touchend",
    function (event: TouchEvent) {
      const endX = event.changedTouches[0].clientX
      const endY = event.changedTouches[0].clientY

      const diffX = endX - startX
      const diffY = endY - startY

      if (Math.abs(diffX) > Math.abs(diffY)) {
        // Horizontal swipe detected
        if (diffX > 0) {
          // Right swipe
          onSwipeRight(event)
        } else {
          // Left swipe
          onSwipeLeft(event)
        }
      }
    },
    { passive: true }
  )
}
