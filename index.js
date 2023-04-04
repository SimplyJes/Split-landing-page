const samsung = document.querySelector('.samsung')
const iphone = document.querySelector('.iphone')
const container = document.querySelector('.container')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

iphone.addEventListener('click', () => {
  window.open('https://www.samsung.com/us/smartphones/galaxy-s23-ultra/buy/galaxy-s23-ultra-256gb-t-mobile-sm-s918uzgaxau/?adobe_mc_sdid=SDID%3D680C7D293B96A091-7FF31374C279BC25%7CMCORGID%3D48855C6655783A647F000101%40AdobeOrg%7CTS%3D1680618151&adobe_mc_ref=https%3A%2F%2Fwww.google.com%2F', _blank)
})
samsung.addEventListener('click', () => {
  window.open('https://www.apple.com/ng/iphone/', _blank)
})

left.addEventListener('mouseover', () => {
  container.classList.add('hover-left')
})
left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left')
})

right.addEventListener('mouseover', () => {
  container.classList.add('hover-right')
})
right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right')
})
