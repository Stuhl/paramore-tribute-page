document.addEventListener("DOMContentLoaded", () => {
  const drawer = document.querySelector("#drawer")
  const header = document.querySelector("header")
  const main = document.querySelector("main")
  const footer = document.querySelector("footer")
  const drawerButton = document.querySelector("#drawer-button")
  const music = document.querySelector("#music-layout > #content")
  const musicContainer = document.querySelector("#music-layout")

  const albumSongs = {
    "0": [
      "All We Know",
      "Pressure",
      "Emergency",
      "Brighter",
      "Here We Go Again",
      "Never Let This Go",
      "Whoa",
      "Conspiracy",
      "Franklin",
      "My Heart"
    ],
    "1": [
      "For a Pessimist, I'm Pretty Optimistic",
      "Thats What You Get",
      "Hallelujah",
      "Misery Business",
      "When It Rains",
      "Let The Flames Begin",
      "Miracle",
      "Crushcrushcrush",
      "We Are Broken",
      "Fences",
      "Born For This"
    ],
    "2": [
      "Careful",
      "Ignorance",
      "Playing God",
      "Brick by Boring Brick",
      "Turn It Off",
      "The Only Exception",
      "Feeling Sorry",
      "Looking Up",
      "Where the Lines Overlap",
      "Misguided Ghosts",
      "All I Wanted"
    ],
    "3": [
      "Fast In My Car",
      "Now",
      "Grow Up",
      "Daydreaming",
      "Interlude: Moving On",
      "Ain't It Fun",
      "Part II",
      "Last Hope",
      "Still Into You",
      "Anklebiters",
      "Interlude: Holiday",
      "Proof",
      "Hate To See Your Heart Break",
      "(One of Those) Crazy Girls",
      "Interlude: I'm Not Angry Anymore",
      "Be Alone",
      "Future"
    ],
    "4": [
      "Hard Times",
      "Rose-Colored Boy",
      "Told You So",
      "Forgiveness",
      "Fake Happy",
      "26",
      "Pool",
      "Grudges",
      "Caught in the Middle",
      "Idle Worship",
      "No Friend",
      "Tell me How"
    ]
  }

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

    drawer.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        isOpen = false
        resetTransition([header, main, footer, drawer])
        hideDrawer()
      }
    })
  })

  // music element
  function attachEvents() {
    const images = music.getElementsByTagName("img")
    let hasItem = false

    for (let img of images) {
      const keyValue = img.attributes["0"].value
      const name = img.attributes["1"].value
      const thisAlbumSongs = albumSongs[keyValue]

      img.addEventListener("click", () => {
        if (hasItem) {
          musicContainer.removeChild(musicContainer.lastElementChild)
          hasItem = false
        }

        const template = albumTemplate(thisAlbumSongs, name)
        musicContainer.insertAdjacentHTML("beforeend", template)
        musicContainer.lastElementChild.scrollIntoView()
        hasItem = true
      })
    }
  }

  function albumTemplate(songs, name) {
    const ol = getList(songs)
    return `
    <details open id="album-layout">
      <summary>${name}</summary>
      ${ol}
    </details>
    `
  }

  function getList(songs) {
    let ul = ``
    songs.forEach(item => {
      ul += `<li>${item}</li>`
    })
    return `
    <ol>
      ${ul}
    </ol>
    `
  }
  attachEvents()

})
