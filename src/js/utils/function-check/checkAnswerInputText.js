import formatNumber from './formatNumber'

export default function checkAnswerInputText(inputsTextArray, testBlock) {
  const spanPoint = testBlock.querySelector('.point')
  const sum = Array.from(inputsTextArray).reduce((accumulator, inputText) => {
    const userAnswer = inputText.value.trim().replace(/\./g, '').toLowerCase()
    const correctAnswer = inputText.dataset.correct
    const points = parseFloat(inputText.dataset.weight)
    if (userAnswer && userAnswer === correctAnswer) {
      inputText.classList.add('correct')
      return accumulator + points
    } else if (userAnswer && userAnswer !== correctAnswer) {
      inputText.classList.add('uncorrect')
    }
    return accumulator
  }, 0)

  const stringNumberPoint = formatNumber(sum)
  spanPoint.textContent = stringNumberPoint
  return sum
}
