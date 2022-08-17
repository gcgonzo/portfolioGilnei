// Header - scroll

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 650);
})

// Home - Menu

const menuMobile = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll(".nav-links li");

menuMobile.addEventListener("click", () =>{
 // coloca insere e remove o active
  navLinks.classList.toggle("active");
  menuMobile.classList.toggle("active");
  
  links.forEach((link, index) => {
    // verifica se o link tem alguma animação e temporiza o menu    
    link.style.animation ? 
    (link.style.animation = "") : 
    (link.style.animation = `navLinkFade 0.5s ease forwards ${
      index / 7 + 0.5}s`)
  })
})



// const navbar = document.querySelector('nav ul')
// const navbarButton = document.querySelector('nav button')
// const cover = document.querySelector('.cover')
// const downloadCV = document.querySelector('#download_cv')

// const hideNavbar = () => {
//   navbar.classList.add('hideNavbar')
//   cover.classList.add('hideCover')
// }

// navbarButton.addEventListener('click', () => {
//   navbar.classList.toggle('hideNavbar')
//   cover.classList.toggle('hideCover')
// })

// cover.addEventListener('click', hideNavbar)

// window.addEventListener('hashchange', hideNavbar)