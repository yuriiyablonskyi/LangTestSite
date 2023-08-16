export default function toggleModal(selector, isEnabled, points, percentage) {
  const modal = document.getElementById(selector)
  const modalPercent = document.querySelector('.modal__percent')
  const modalPoint = document.querySelector('.modal__point')
  const body = document.body
  const hasVerticalScroll = document.body.scrollHeight > window.innerHeight

  modalPoint.textContent = points
  modalPercent.textContent = percentage

  if (isEnabled) {
    modal.classList.add('show')
    if (hasVerticalScroll) {
      body.classList.add('body--modal')
      document.querySelector('.head').style.paddingRight = '16px'
    }
  } else {
    body.classList.remove('body--modal')
    modal.classList.remove('show')
    document.querySelector('.head').style.paddingRight = '0'
  }
}
