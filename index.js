const samsung = document.querySelector('.samsung')
const iphone = document.querySelector('.iphone')
const container = document.querySelector('.container')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

iphone.addEventListener('click', () => {
  window.open(alert('Thank you for your patronage'), _blank)
})
samsung.addEventListener('click', () => {
  window.open(alert('We love you!!!❤❤❤'), _blank)
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
