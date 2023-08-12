import checkAnswerInputRadio from './checkAnswerInputRadio'
import checkAnswerInputText from './checkAnswerInputText'
import formatNumber from '../other-function/formatNumber'

export default function checkAnswer(selectedPage) {
  const blocksOnSelectedPage = selectedPage.querySelectorAll('[data-block]')
  const spanPoint = selectedPage.querySelector('.total-point')

  const totalPoint = Array.from(blocksOnSelectedPage).reduce(
    (accumulator, testBlock) => {
      const inputsRadioArray = testBlock.querySelectorAll(
        'input[type="radio"]:not([disabled])'
      )
      const inputsTextArray = testBlock.querySelectorAll(
        'input[type="text"]:not([disabled])'
      )
      if (inputsTextArray.length) {
        const localPointsInputText = checkAnswerInputText(
          inputsTextArray,
          testBlock
        )
        return accumulator + localPointsInputText
      }

      if (inputsRadioArray.length) {
        const localPointsInputRadio = checkAnswerInputRadio(
          inputsRadioArray,
          testBlock
        )
        return accumulator + localPointsInputRadio
      }
    },
    0
  )

  const stringTotalPoint = formatNumber(totalPoint)
  spanPoint.textContent = stringTotalPoint
  return totalPoint
}
