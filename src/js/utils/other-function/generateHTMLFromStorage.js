export default function generateHTMLFromStorage() {
  const noResultsText = 'Obecnie nie masz żadnych wyników'
  const results = JSON.parse(localStorage.getItem('testResults')) || []
  const resultsList = document.querySelector('.results__list')
  const list = document.createDocumentFragment()
  results.forEach(({ category, date, points, percentage }, index) => {
    const listItem = document.createElement('li')
    listItem.classList.add('results__item')
    listItem.innerHTML = `
    <span class="results__subtle-text">${index + 1}</span>
    <span class="results__strong-text">${category}</span>
    <span class="results__strong-text">${date}</span>
    <span class="results__subtle-text">${points} z 30 punktów</span>
    <span class="results__strong-text" id="percentage">${percentage}%</span>
    <button class="results__btn">
      <svg class="results__svg">
        <use xlink:href="./img/delete.svg#delete"></use>
      </svg>
    </button>
  `
    list.append(listItem)
  })
  resultsList.append(list)
  console.log(resultsList)
}
