document.addEventListener("DOMContentLoaded", () => {
  const drawer = document.querySelector("#drawer")
  const header = document.querySelector("header")
  const main = document.querySelector("main")
  const footer = document.querySelector("footer")
  const drawerButton = document.querySelector("#drawer-button")

  function resetTransition(arrayOfElements) {
    for (let element of arrayOfElements) {
      element.style.transitionDuration = "0"
    }
  }

  function applyTransition(arrayOfElements) {
    for (let element of arrayOfElements) {
      element.style.transitionDuration = "0.2s"
    }
  }

  function showDrawer() {
    drawer.style.marginRight = "200px"
    header.style.transform = "translateX(-200px)"
    main.style.transform = "translateX(-200px)"
    footer.style.transform = "translateX(-200px)"
  }

  function hideDrawer() {
    drawer.style.marginRight = "0px"
    header.style.transform = "translateX(0)"
    main.style.transform = "translateX(0)"
    footer.style.transform = "translateX(0)"
  }

  let isOpen = false
  drawerButton.addEventListener("click", () => {
    if (isOpen) {
      isOpen = !isOpen
      resetTransition([header, main, footer, drawer])
      hideDrawer()
    } else {
      isOpen = !isOpen
      applyTransition([header, main, footer, drawer])
      showDrawer()
    }
  })

})
