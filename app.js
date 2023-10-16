// ==========Кнопка для быстрого скрола в начало страницы============

const goTopBtn = document.querySelector('.go-top')

goTopBtn.addEventListener('click', goTop)
window.addEventListener('scroll', trackScroll)

function trackScroll() {
  const offset = window.pageYOffset
  const coords = document.documentElement.clientHeight
  if (offset > coords) {
    goTopBtn.classList.add('go-top--show')
  } else {
    goTopBtn.classList.remove('go-top--show')
  }
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -50)
    setTimeout(goTop, 0)
  }
}

// ==========Скрол к элементу при клике на навигацию============

document.body.addEventListener('click', scrollToElem)

function scrollToElem(event) {
  const btn1 = event.target
  const btn2 = event.target
  const btn3 = event.target

  if (btn1.classList.contains('about-btn')) {
    const classTo1 = btn1.getAttribute('to')
    const aboutTo = document.querySelector(`.${classTo1}`)

    window.scrollTo({
      top: aboutTo.getBoundingClientRect().top,
      left: 0,
      behavior: 'smooth',
    })
  }
  if (btn2.classList.contains('trainer-btn')) {
    const classTo2 = btn2.getAttribute('to')
    const trainerTo = document.querySelector(`.${classTo2}`)

    window.scrollTo({
      top: trainerTo.getBoundingClientRect().top,
      left: 0,
      behavior: 'smooth',
    })
  }
  if (btn3.classList.contains('price-btn')) {
    const classTo3 = btn3.getAttribute('to')
    const priceTo = document.querySelector(`.${classTo3}`)

    window.scrollTo({
      top: priceTo.getBoundingClientRect().top - 40,
      left: 0,
      behavior: 'smooth',
    })
  }
  event.preventDefault()
}
