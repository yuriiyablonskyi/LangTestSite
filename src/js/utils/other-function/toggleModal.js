export default function toggleModal(isEnabled, points, percentage) {
  const modal = document.getElementById('results')
  const modalPercent = document.querySelector('.modal__percent')
  const modalPoint = document.querySelector('.modal__point')
  const body = document.body

  modalPoint.textContent = points
  modalPercent.textContent = percentage

  if (isEnabled) {
    body.classList.add('body--modal')
    modal.classList.add('show')
    document.querySelector('.head').style.paddingRight = '16px'
  } else {
    body.classList.remove('body--modal')
    modal.classList.remove('show')
    document.querySelector('.head').style.paddingRight = '0'
  }
}
