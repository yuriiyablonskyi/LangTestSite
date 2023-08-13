export default function removeClassAnswers(page) {
  const remove = (arr, classEl) => {
    for (const el of arr) el.classList.remove(classEl)
  }
  const corrects = page.querySelectorAll('.correct')
  const uncorrects = page.querySelectorAll('.uncorrect')

  remove(corrects, 'correct')
  remove(uncorrects, 'uncorrect')
}