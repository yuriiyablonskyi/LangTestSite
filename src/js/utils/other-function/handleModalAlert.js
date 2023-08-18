export default function handleModalAlert(buttonName) {
  const modal = document.getElementById('alert')

  modal.display = block
  modal.addEventListener('click', e => {
    const element = e.target
    if (element.closest('button')) {
      modal.display = none
    }
    if (element.closest('#to-page')) {
      handleToSelectedPage(buttonName)
    }
  })
}