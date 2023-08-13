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
  rs_2017: 25,
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
let countdownInterval
let audioOnSelectedPage

const timer = minutes => {
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

const handleTimer = buttonDataName => {
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

const handleToSelectedPage = e => {
  buttonDataName = e.target.closest('.btn[data-test]').dataset.test
  selectedPage = document.querySelector(`section[data-test='${buttonDataName}']`)
  audioOnSelectedPage = selectedPage.querySelector('audio')
  toggleMainPage(true, mainPage, selectedPage, head)
  handleTimer(buttonDataName)
  if (audioOnSelectedPage) audioOnSelectedPage.play()
  checkTestBtn.addEventListener('click', () => checkTestResults())
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
  toggleModal(true, totalPoints)
  checkAnswer(selectedPage)
  finishAudio(audioOnSelectedPage)
  clearInterval(countdownInterval)
  checkTestBtn.removeEventListener('click', () => checkTestResults())
}

sectionButtons.addEventListener('click', e => {
  const element = e.target
  if (element.closest('button[data-test]')) {
    handleToSelectedPage(e)
  }

  if (element.closest('#history-btn')) {
    toggleMainPage(true, mainPage, resultPage)
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

// Функция для сохранения результатов теста в Local Storage
function saveTestResult(category, points, percentage) {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()} ${getMonthName(currentDate.getMonth())} ${currentDate.getFullYear()}`;

  const result = {
    category: category,
    date: formattedDate,
    points: points,
    percentage: percentage
  };

  // Получаем ранее сохраненные результаты или создаем пустой массив
  let results = JSON.parse(localStorage.getItem('testResults')) || [];
  results.push(result);

  // Сохраняем обновленные результаты в Local Storage
  localStorage.setItem('testResults', JSON.stringify(results));
}

// Функция для генерации HTML элементов на основе сохраненных результатов
function generateResultsHTML(results) {
  const resultsList = document.querySelector('.results__list');
  resultsList.innerHTML = '';

  results.forEach((result, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('results__item');
    listItem.innerHTML = `
      <span class="results__subtle-text" id="number">${index + 1}</span>
      <span class="results__strong-text" id="kategory">${result.category}</span>
      <span class="results__strong-text" id="date">${result.date}</span>
      <span class="results__subtle-text" id="points">${result.points} z 30 punktów</span>
      <span class="results__strong-text" id="percentage">${result.percentage}%</span>
      <button class="results__btn">
        <svg class="results__svg">
          <use xlink:href="./img/delete.svg#delete"></use>
        </svg>
      </button>
    `;

    resultsList.appendChild(listItem);
  });
}

// Вспомогательная функция для получения названия месяца по номеру
function getMonthName(monthNumber) {
  const monthNames = [
    'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
    'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
  ];
  return monthNames[monthNumber];
}

// Пример использования
const category = 'Rozumienie tekstów pisanych - 2019';
const points = 24;
const totalQuestions = 30;
const percentage = ((points / totalQuestions) * 100).toFixed(0);
saveTestResult(category, points, totalQuestions, percentage);

// Получаем сохраненные результаты и генерируем HTML
const savedResults = JSON.parse(localStorage.getItem('testResults')) || [];
generateResultsHTML(savedResults);
function clearLocalStorage() {
  localStorage.removeItem('testResults');
}
// clearLocalStorage();