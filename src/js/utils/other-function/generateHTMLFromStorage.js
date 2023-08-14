export default function generateHTMLFromStorage() {
  const noResultsText = 'Obecnie nie masz żadnych wyników'
  const results = JSON.parse(localStorage.getItem('testResult')) || []
  const resultsList = document.querySelector('.results__list')
  resultsList.querySelectorAll('.results__item').forEach(item => item.remove())

  results.forEach(({ category, date, points, percentage }, index) => {
    const listItem = document.createElement('li')
    listItem.classList.add('results__item')
    listItem.innerHTML = `
    <span class="results__subtle-number">${index + 1}</span>
    <span class="results__strong-category">${category}</span>
    <span class="results__strong-date">${date}</span>
    <span class="results__subtle-points">${points} z 30 punktów</span>
    <span class="results__strong-percentage" id="percentage">${percentage}%</span>
    <button class="results__btn">
      <svg class="results__svg">
        <use xlink:href="./img/delete.svg#delete"></use>
      </svg>
    </button>
  `
    resultsList.appendChild(listItem)
  })
}
