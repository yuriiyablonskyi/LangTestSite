import checkAnswerInputRadio from './checkAnswerInputRadio'
import checkAnswerInputText from './checkAnswerInputText'

export default function checkAnswer(selectedPage) {
  const blocksOnSelectedPage = selectedPage.querySelectorAll('[data-block]')

  blocksOnSelectedPage.forEach((testBlock, i) => {
    const inputsRadioArray = testBlock.querySelectorAll('input[type="radio"]:checked:not([disabled])')
    const inputsTextArray = testBlock.querySelectorAll('input[type="text"]:not([disabled])')
    const spanPoint = testBlock.querySelector('.point')

    if (inputsTextArray.length) {
      const localPointsInputText = checkAnswerInputText(inputsTextArray, testBlock)
      console.log('inputsTextArray point: ' + localPointsInputText + ', index (testBlock): ' + i);
    }

    if (inputsRadioArray.length) {
      const localPointsInputRadio = checkAnswerInputRadio(inputsRadioArray, testBlock)
      console.log('localPointsInputRadio point: ' + localPointsInputRadio + ', index (testBlock): ' + i);
    }
  })
}