export default function generateHTMLFromStorage() {
  const resultContainer = document.querySelector('.results__content')

  while (resultContainer.firstChild) {
    resultContainer.removeChild(resultContainer.firstChild)
  }

  const results = JSON.parse(localStorage.getItem('testResult')) || []

  if (results.length) {
    const resultsList = document.createElement('ul')
    resultsList.classList.add('results__list')

    results.forEach(({ category, date, points, percentage, id }, index) => {
      const listItem = document.createElement('li')
      listItem.classList.add('results__item')

      const numberSpan = document.createElement('span')
      const categorySpan = document.createElement('span')
      const dateSpan = document.createElement('span')
      const pointsSpan = document.createElement('span')
      const percentageSpan = document.createElement('span')
      const button = document.createElement('button');
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      const use = document.createElementNS('http://www.w3.org/2000/svg', 'use')

      numberSpan.classList.add('results__subtle-number')
      categorySpan.classList.add('results__strong-category')
      dateSpan.classList.add('results__strong-date')
      pointsSpan.classList.add('results__subtle-points')
      percentageSpan.classList.add('results__strong-percentage')
      button.classList.add('results__btn')
      svg.classList.add('results__svg')

      numberSpan.textContent = index + 1
      categorySpan.textContent = category
      dateSpan.textContent = date
      pointsSpan.textContent = `${points} z 30 punktów`
      percentageSpan.textContent = `${percentage}%`

      button.id = id
      use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', './img/delete.svg#delete')

      svg.appendChild(use)
      button.appendChild(svg)

      listItem.append(numberSpan, categorySpan, dateSpan, pointsSpan, percentageSpan, button)
      resultsList.appendChild(listItem)
    })
    resultContainer.appendChild(resultsList)
  } else {
    const element = document.createElement('p')
    element.classList.add('results__text')
    const noResultsText = 'Obecnie nie masz żadnych wyników...'
    element.textContent = noResultsText
    resultContainer.prepend(element)
  }
}
