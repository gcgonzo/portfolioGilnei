// // NavBar

// window.addEventListener('scroll', function () {
//   const header = document.querySelector('header')
//   header.classList.toggle('sticky', window.scrollY > 550)
// })

// scroll

const navbar = document.querySelector('nav ul')
const navbarButton = document.querySelector('nav button')
const cover = document.querySelector('.cover')
const downloadCV = document.querySelector('#download_cv')

const hideNavbar = () => {
  navbar.classList.add('hideNavbar')
  cover.classList.add('hideCover')
}

navbarButton.addEventListener('click', () => {
  navbar.classList.toggle('hideNavbar')
  cover.classList.toggle('hideCover')
})

cover.addEventListener('click', hideNavbar)

window.addEventListener('hashchange', hideNavbar)