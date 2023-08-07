export default function handleModal(flag) {
  const btn = document.getElementById('finish-btn')
  const modal = document.querySelector('.modal')
  const modalPercent = document.querySelector('.modal__percent')
  const modalPoint = document.querySelector('.modal__point')
  const body = document.body
  console.log(flag)
  if (flag) {
    btn.disabled = true
    body.classList.add('modal')
    modal.classList.add('show')
    document.querySelector('.head').style.paddingRight = '16px'
  } else {
    btn.disabled = false
    body.classList.remove('modal')
    modal.classList.remove('show')
    document.querySelector('.head').style.paddingRight = '0'
  }
}
