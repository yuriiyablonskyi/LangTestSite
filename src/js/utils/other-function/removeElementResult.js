import toggleModal from './toggleModal'
import generateHTMLFromStorage from './generateHTMLFromStorage'

export default function removeElementResult() {
  const modal = document.getElementById('delete')
  const content = document.querySelector('.results__content')
  const deleteBtns = document.querySelectorAll('.results__btn')
  let currentId = 0

  content.addEventListener('click', e => {
    const btnDelete = e.target.closest('.results__btn')
    if (btnDelete) {
      toggleModal('delete', true)
      currentId = Number(btnDelete.id)
    }
  })

  modal.addEventListener('click', e => {
    const element = e.target
    if (element.closest('button')) {
      toggleModal('delete', false)
    }
    if (element.closest('#confirm')) {
      const storedResults = JSON.parse(localStorage.getItem('testResult')) || []
      const updatedResults = storedResults.filter(item => item.id !== currentId)
      localStorage.setItem('testResult', JSON.stringify(updatedResults))
      generateHTMLFromStorage()
      currentId = 0
    }
  })
}