import formatNumber from '../other-function/formatNumber'

export default function checkAnswerInputRadio(inputsRadioArray, testBlock) {
  const spanPoint = testBlock.querySelector('.point')
  const sum = Array.from(inputsRadioArray).reduce((accumulator, inputRadio) => {
    const label = testBlock.querySelector(`label[for='${inputRadio.id}']`)
    const parentInput = inputRadio.closest('[data-correct]')
    const indexSelectedElement = inputRadio.dataset.answer
    const correctAnswer = parentInput.dataset.correct
    const points = parseFloat(parentInput.dataset.weight)
    if (inputRadio.checked) {
      if (indexSelectedElement === correctAnswer) {
        label.classList.add('correct')
        return accumulator + points
      } else {
        label.classList.add('uncorrect')
      }
    }
    return accumulator
  }, 0)

  const stringNumberPoint = formatNumber(sum)
  spanPoint.textContent = stringNumberPoint
  return sum
}
