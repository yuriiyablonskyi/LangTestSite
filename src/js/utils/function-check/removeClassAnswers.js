export default function removeClassAnswers(page) {
  const corrects = page.querySelectorAll('.correct')
  const uncorrects = page.querySelectorAll('.uncorrect')
  console.log(corrects)
  console.log(uncorrects)

  const remove = (arr, classEl) => {
    for (const el of arr) {
      el.classList.remove(classEl)
      console.log(el);
    }
  }
  remove(corrects, 'correct')
  remove(uncorrects, 'uncorrect')
}
