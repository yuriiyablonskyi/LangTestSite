
import rs_2017 from './data/2017/rs_2017'
import rt_2017 from './data/2017/rt_2017'

import rs_2019 from './data/2019/rs_2019'
import rt_2019 from './data/2019/rt_2019'

import rs_2020 from './data/2020/rs_2020'
import rt_2020 from './data/2020/rt_2020'

import generateTestAbc from './utils/function-generate/testAbc'
import generateTableBoolean from './utils/function-generate/tableBoolean'
import generateTableInput from './utils/function-generate/tableInput'
import generateTableLetters from './utils/function-generate/tableLetters'
import generateTableNumber from './utils/function-generate/tableNumber'
import checkAnswer from './utils/function-check/checkAnswer'
import handleModal from './utils/function-check/handleModal'


const head = document.querySelector('.head');
const btnToMain = document.getElementById('main-btn')
const btnToFinish = document.getElementById('finish-btn')
const sectionButtons = document.querySelector('.options')
const mainPage = document.querySelector('.main')
const countdownEl = document.getElementById('timer')
const timerValues = {
  'rs_2017': 25,
  'rt_2017': 45,
  'pg_2017': 45,
  'rs_2019': 25,
  'rt_2019': 45,
  'pg_2019': 45,
  'rs_2020': 30,
  'rt_2020': 40,
  'pg_2020': 45
}
let buttonDataName = ''
let selectedPage = ''
let countdownInterval
let audioOnSelectedPage


const timer = (minutes) => {
  countdownEl.textContent = `${minutes}:00`
  const seconds = minutes * 60
  let countdown = seconds

  countdownInterval = setInterval(() => {
    countdown--
    const minutesRemaining = Math.floor(countdown / 60)
    const secondsRemaining = countdown % 60
    const countdownText = `${minutesRemaining.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`
    countdownEl.textContent = countdownText

    if (countdown === 0) {
      clearInterval(countdownInterval)
      handleToFinish()
    }

  }, 1000)
}

const handleTimer = buttonDataName => {
  if (!timerValues.hasOwnProperty(buttonDataName)) return
  timer(timerValues[buttonDataName])
}

const showElement = element => element.style.display = 'block'
const hideElement = element => element.style.display = 'none'

const removeClass = selector => selectedPage.querySelectorAll(selector)
  .forEach(element => element.classList.remove(selector.replace(/\./g, '')))

const clearRadioSelection = inputsRadio => inputsRadio
  .forEach(inputRadio => inputRadio.checked = false)

const removePointsFromSpans = selector => selectedPage.querySelectorAll(selector)
  .forEach(element => element.textContent = '-')

const finishAudio = audio => {
  if (!audio) return
  audio.pause()
  audio.currentTime = 0
}


const handleToPage = e => {
  buttonDataName = e.target.closest('.btn[data-test]').dataset.test
  selectedPage = document.querySelector(`section[data-test='${buttonDataName}']`)
  audioOnSelectedPage = selectedPage.querySelector('audio')

  hideElement(mainPage)
  showElement(selectedPage)
  showElement(head)
  handleTimer(buttonDataName)
  if (audioOnSelectedPage) audioOnSelectedPage.play()
}

const handleToMain = () => {
  handleModal(0)
  finishAudio(audioOnSelectedPage)
  clearInterval(countdownInterval)
  showElement(mainPage)
  hideElement(head)
  hideElement(selectedPage)
  removePointsFromSpans('.point')
}

const handleToFinish = () => {
  handleModal(1)
  clearInterval(countdownInterval)
  finishAudio(audioOnSelectedPage)
  checkAnswer(selectedPage)
}

sectionButtons.addEventListener('click', e => {
  const button = e.target.closest('button[data-test]')
  if (button) handleToPage(e)
})
btnToMain.addEventListener('click', handleToMain)
btnToFinish.addEventListener('click', handleToFinish)

window.addEventListener('scroll', () => window.scrollY > 0 ? head.classList.add('shadow') : head.classList.remove('shadow'));

generateTestAbc(rs_2017.firstTest, '.abc-first0', 'abc1', 1, 0.5)
generateTestAbc(rs_2017.secondTest, '.abc-second0', 'abc2', 0, 1)
generateTableBoolean(rs_2017.tableBoolean, '.table-box-boolean0', 's17_b', 0)
generateTableInput(rs_2017.tableInput, '.table-box-input0', 4)

generateTestAbc(rs_2019.firstTest, '.abc-first1', 'abc4', 0, 0.5)
generateTableBoolean(rs_2019.tableBoolean, '.table-box-boolean1', 's19_b', 0)
generateTestAbc(rs_2019.secondTest, '.abc-second1', 'abc5', 0, 1)
generateTableNumber(rs_2019.tableNumber, '.table-number0', 1)

generateTestAbc(rs_2020.firstTest, '.abc-first2', 'abc7', 0, 0.5)
generateTestAbc(rs_2020.secondTest, '.abc-second2', 'abc8', 2, 1)
generateTableBoolean(rs_2020.tableBoolean, '.table-box-boolean2', 's20_b', 1)
generateTableNumber(rs_2020.tableNumber, '.table-number1', 1)
generateTableInput(rs_2020.tableInput, '.table-box-input2', 2)

generateTestAbc(rt_2017.firstTest, '.abc-first3', 'abc3', 2, 1, 'abc__options--narrow');
generateTableBoolean(rt_2017.tableBoolean, '.table-box-boolean3', 't17_b', 1);
generateTableLetters(rt_2017.tableLetters, '.table-letters0', 0);
generateTableInput(rt_2017.tableInput, '.table-box-input3', 3);

generateTestAbc(rt_2019.firstTest, '.abc-first4', 'abc6', 0, 1, 'abc__options--narrow')
generateTableBoolean(rt_2019.tableBoolean, '.table-box-boolean4', 't19_b', 0)
generateTableLetters(rt_2019.tableLetters, '.table-letters1', 1)
generateTableInput(rt_2019.tableInput, '.table-box-input4', 1)

generateTestAbc(rt_2020.firstTest, '.abc-first5', 'abc9', 1, 1, 'abc__options--narrow')
generateTableBoolean(rt_2020.tableBoolean, '.table-box-boolean5', 't20_b', 0)
generateTableLetters(rt_2020.tableLetters, '.table-letters2', 2)
generateTableInput(rt_2020.tableInput, '.table-box-input5', 1)


// const contentConfig = [
//   {
//     testTexts: rs_2017.firstTest,
//     parentElementSelector: '.abc-first0',
//     nameForLabel: 'abc1',
//     indexCheckedRadio: 1
//   },
//   {
//     testTexts: rs_2017.secondTest,
//     parentElementSelector: '.abc-second0',
//     nameForLabel: 'abc2',
//     indexCheckedRadio: 0
//   },
//   {
//     tableTexts: rs_2017.tableBoolean,
//     parentElementSelector: '.table-box-boolean0',
//     nameForInput: 's17_b',
//     indexCheckedRadio: 0,
//     generatorFunction: generateTableBoolean
//   },
//   {
//     tableTexts: rs_2017.tableInput,
//     parentElementSelector: '.table-box-input0',
//     indexDisabledElement: 4,
//     generatorFunction: generateTableInput
//   },
//   {
//     testTexts: rs_2019.firstTest,
//     parentElementSelector: '.abc-first1',
//     nameForLabel: 'abc4',
//     indexCheckedRadio: 0
//   },
//   {
//     tableTexts: rs_2019.tableBoolean,
//     parentElementSelector: '.table-box-boolean1',
//     nameForInput: 's19_b',
//     indexCheckedRadio: 0,
//     generatorFunction: generateTableBoolean
//   },
//   {
//     testTexts: rs_2019.secondTest,
//     parentElementSelector: '.abc-second1',
//     nameForLabel: 'abc5',
//     indexCheckedRadio: 0
//   },
//   {
//     tableTexts: rs_2019.tableNumber,
//     parentElementSelector: '.table-number0',
//     disabledValueInput: 1,
//     quantityInputs: 1,
//     generatorFunction: generateTableNumber
//   },
//   {
//     testTexts: rs_2020.firstTest,
//     parentElementSelector: '.abc-first2',
//     nameForLabel: 'abc7',
//     indexCheckedRadio: 0
//   },
//   {
//     testTexts: rs_2020.secondTest,
//     parentElementSelector: '.abc-second2',
//     nameForLabel: 'abc8',
//     indexCheckedRadio: 2
//   },
//   {
//     tableTexts: rs_2020.tableBoolean,
//     parentElementSelector: '.table-box-boolean2',
//     nameForInput: 's20_b',
//     indexCheckedRadio: 1,
//     generatorFunction: generateTableBoolean
//   },
//   {
//     tableTexts: rs_2020.tableNumber,
//     parentElementSelector: '.table-number1',
//     disabledValueInput: 1,
//     quantityInputs: 1,
//     generatorFunction: generateTableNumber
//   },
//   {
//     tableTexts: rs_2020.tableInput,
//     parentElementSelector: '.table-box-input2',
//     indexDisabledElement: 2,
//     generatorFunction: generateTableInput
//   },
//   {
//     testTexts: rt_2017.firstTest,
//     parentElementSelector: '.abc-first3',
//     nameForLabel: 'abc3',
//     indexCheckedRadio: 2,
//     additionalClass: 'abc__options--narrow'
//   },
//   {
//     tableTexts: rt_2017.tableBoolean,
//     parentElementSelector: '.table-box-boolean3',
//     nameForInput: 't17_b',
//     indexCheckedRadio: 1,
//     generatorFunction: generateTableBoolean
//   },
//   {
//     tableTexts: rt_2017.tableLetters,
//     parentElementSelector: '.table-letters0',
//     indexDisabledElement: 0,
//     generatorFunction: generateTableLetters
//   },
//   {
//     tableTexts: rt_2017.tableInput,
//     parentElementSelector: '.table-box-input3',
//     indexDisabledElement: 3,
//     generatorFunction: generateTableInput
//   },
//   {
//     testTexts: rt_2019.firstTest,
//     parentElementSelector: '.abc-first4',
//     nameForLabel: 'abc6',
//     indexCheckedRadio: 0,
//     additionalClass: 'abc__options--narrow'
//   },
//   {
//     tableTexts: rt_2019.tableBoolean,
//     parentElementSelector: '.table-box-boolean4',
//     nameForInput: 't19_b',
//     indexCheckedRadio: 0,
//     generatorFunction: generateTableBoolean
//   },
//   {
//     tableTexts: rt_2019.tableLetters,
//     parentElementSelector: '.table-letters1',
//     indexDisabledElement: 1,
//     generatorFunction: generateTableLetters
//   },
//   {
//     tableTexts: rt_2019.tableInput,
//     parentElementSelector: '.table-box-input4',
//     indexDisabledElement: 1,
//     generatorFunction: generateTableInput
//   },
//   {
//     testTexts: rt_2020.firstTest,
//     parentElementSelector: '.abc-first5',
//     nameForLabel: 'abc9',
//     indexCheckedRadio: 1,
// additionalClass: 'abc__options--narrow'
//   },
//   {
//     tableTexts: rt_2020.tableBoolean,
//     parentElementSelector: '.table-box-boolean5',
//     nameForInput: 't20_b',
//     indexCheckedRadio: 0,
//     generatorFunction: generateTableBoolean
//   },
//   {
//     tableTexts: rt_2020.tableLetters,
//     parentElementSelector: '.table-letters2',
//     indexDisabledElement: 2,
//     generatorFunction: generateTableLetters
//   },
//   {
//     tableTexts: rt_2020.tableInput,
//     parentElementSelector: '.table-box-input5',
//     indexDisabledElement: 1,
//     generatorFunction: generateTableInput
//   }
// ];

// // Generate content dynamically
// contentConfig.forEach((config) => {
//   const { generatorFunction, ...params } = config;
//   generatorFunction(params);
// });
