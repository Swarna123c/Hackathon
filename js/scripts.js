/*!
 * Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener('DOMContentLoaded', (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav')
    if (!navbarCollapsible) {
      return
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }
  }

  // Shrink the navbar
  navbarShrink()

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink)

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav')
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%'
    })
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler')
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  )
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click()
      }
    })
  })
})

// Countdown timer: only runs on pages that have one (#days) and hides it
// once the event has started, so old dates never show negative numbers.
var countDownDate = new Date('Oct 17, 2025 16:00:00').getTime()

if (document.getElementById('days')) {
  var updateTimer = function () {
    var distance = countDownDate - new Date().getTime()
    if (distance < 0) {
      clearInterval(x)
      var timer = document.querySelector('.timer-container')
      if (timer) timer.style.display = 'none'
      return
    }
    document.getElementById('days').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24))
    document.getElementById('hours').innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    document.getElementById('minutes').innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    document.getElementById('seconds').innerHTML = Math.floor((distance % (1000 * 60)) / 1000)
  }
  var x = setInterval(updateTimer, 1000)
  updateTimer()
}
