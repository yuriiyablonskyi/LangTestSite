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
import toggleModal from './utils/other-function/toggleModal'
import removeClassAnswers from './utils/other-function/removeClassAnswers'
import removeSelectedRadio from './utils/other-function/removeSelectedRadio'
import clearInputOnPage from './utils/other-function/clearInputOnPage'
import toggleMainPage from './utils/other-function/toggleMainPage'
import calculatePercentage from './utils/other-function/calculatePercentage'
import saveTestResult from './utils/other-function/saveTestResult'
import generateHTMLFromStorage from './utils/other-function/generateHTMLFromStorage'

const head = document.querySelector('.head')
const mainPageBtn = document.getElementById('main-btn')
const resultsToMainBtn = document.getElementById('results-to-main')
const checkTestBtn = document.getElementById('finish-btn')
const sectionButtons = document.querySelector('.options')
const mainPage = document.querySelector('.main')
const countdownEl = document.getElementById('timer')
const modalBtns = document.querySelector('.modal__buttons')
const resultPage = document.querySelector('.results')

const timerValues = {
  rs_2017: 1,
  rt_2017: 45,
  pg_2017: 45,
  rs_2019: 25,
  rt_2019: 45,
  pg_2019: 45,
  rs_2020: 30,
  rt_2020: 40,
  pg_2020: 45,
}

let buttonDataName = ''
let selectedPage = ''
let countdownInterval = 0
let audioOnSelectedPage

const timer = (minutes) => {
  countdownEl.textContent = `${minutes}:00`
  const seconds = minutes * 60
  let countdown = seconds

  countdownInterval = setInterval(() => {
    countdown--
    const minutesRemaining = Math.floor(countdown / 60)
    const secondsRemaining = countdown % 60
    const countdownText = `${minutesRemaining
      .toString()
      .padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`
    countdownEl.textContent = countdownText

    if (countdown === 0) {
      clearInterval(countdownInterval)
      checkTestResults()
    }
  }, 1000)
}

const handleTimer = (buttonDataName) => {
  if (!timerValues.hasOwnProperty(buttonDataName)) return
  timer(timerValues[buttonDataName])
}

const removePointsFromSpans = () =>
  selectedPage
    .querySelectorAll('.item__text span')
    .forEach((element) => (element.textContent = '-'))

const finishAudio = (audio) => {
  if (!audio) return
  audio.pause()
  audio.currentTime = 0
}

const handleToSelectedPage = (e) => {
  buttonDataName = e.target.closest('.btn[data-test]').dataset.test
  selectedPage = document.querySelector(
    `section[data-test='${buttonDataName}']`
  )
  audioOnSelectedPage = selectedPage.querySelector('audio')
  toggleMainPage(true, mainPage, selectedPage, head)
  handleTimer(buttonDataName)
  if (audioOnSelectedPage) audioOnSelectedPage.play()
  checkTestBtn.addEventListener('click', checkTestResults)
}

const handleToMainPage = () => {
  toggleModal(false)
  finishAudio(audioOnSelectedPage)
  clearInterval(countdownInterval)
  toggleMainPage(false, mainPage, selectedPage, head)
  removePointsFromSpans()
  removeClassAnswers(selectedPage)
  removeSelectedRadio(selectedPage)
  clearInputOnPage(selectedPage)
  checkTestBtn.disabled = false
}

const checkTestResults = () => {
  const totalPoints = checkAnswer(selectedPage)
  const percentage = calculatePercentage(totalPoints)
  const currentCategoryName =
    selectedPage.querySelector('[data-category]').textContent
  const currentDateCategory = buttonDataName.slice(-4)
  const currentName = `${currentCategoryName} - ${currentDateCategory}`
  saveTestResult(currentName, totalPoints, percentage)
  toggleModal(true, totalPoints, percentage)
  finishAudio(audioOnSelectedPage)
  clearInterval(countdownInterval)
  checkTestBtn.removeEventListener('click', checkTestResults)
}

sectionButtons.addEventListener('click', e => {
  const element = e.target
  if (element.closest('button[data-test]')) {
    handleToSelectedPage(e)
  }

  if (element.closest('#history-btn')) {
    toggleMainPage(true, mainPage, resultPage)
    generateHTMLFromStorage()
  }
})

mainPageBtn.addEventListener('click', handleToMainPage)

modalBtns.addEventListener('click', e => {
  const element = e.target
  if (element.closest('#to-main')) handleToMainPage()
  if (element.closest('#show-answers')) {
    toggleModal(false)
    checkTestBtn.disabled = true
  }
})

resultsToMainBtn.addEventListener('click', () => toggleMainPage(false, mainPage, resultPage))

window.addEventListener('scroll', () => window.scrollY > 0
  ? head.classList.add('shadow')
  : head.classList.remove('shadow'))

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

generateTestAbc(rt_2017.firstTest, '.abc-first3', 'abc3', 2, 1, 'abc__options--narrow')
generateTableBoolean(rt_2017.tableBoolean, '.table-box-boolean3', 't17_b', 1)
generateTableLetters(rt_2017.tableLetters, '.table-letters0', 0)
generateTableInput(rt_2017.tableInput, '.table-box-input3', 3)

generateTestAbc(rt_2019.firstTest, '.abc-first4', 'abc6', 0, 1, 'abc__options--narrow')
generateTableBoolean(rt_2019.tableBoolean, '.table-box-boolean4', 't19_b', 0)
generateTableLetters(rt_2019.tableLetters, '.table-letters1', 1)
generateTableInput(rt_2019.tableInput, '.table-box-input4', 1)

generateTestAbc(rt_2020.firstTest, '.abc-first5', 'abc9', 1, 1, 'abc__options--narrow')
generateTableBoolean(rt_2020.tableBoolean, '.table-box-boolean5', 't20_b', 0)
generateTableLetters(rt_2020.tableLetters, '.table-letters2', 2)
generateTableInput(rt_2020.tableInput, '.table-box-input5', 1)
