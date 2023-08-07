export default function generateTableInput(data, parentElementSelector, indexDisabledElement) {
  const { content, correct } = data

  const cellDisabledClassName = 'td--disabled'
  let disabledLetterInput = ''

  const tableMain = document.createElement('table')
  const theadMain = document.createElement('thead')
  const headerRowMain = document.createElement('tr')
  const textHeadMain = ['I', 'II']

  for (let i = 0; i < 2; i++) {
    const th = document.createElement('th')
    th.colSpan = 2
    th.classList.add('th')
    th.textContent = textHeadMain[i]
    headerRowMain.appendChild(th)
  }
  tableMain.classList.add('table-input-main')
  theadMain.appendChild(headerRowMain)

  const tbodyMain = document.createElement('tbody')
  const fragment = document.createDocumentFragment()

  content.forEach((rowtableTexts, rowIndex) => {
    const row = document.createElement('tr')
    const cellNumber = document.createElement('td')
    const cellLetter = document.createElement('td')
    const cellTextFirst = document.createElement('td')
    const cellTextSecond = document.createElement('td')
    const cellLetterContent = String.fromCharCode(rowIndex + 65)

    cellNumber.classList.add('td', 'td--alphanumeric')
    cellTextFirst.classList.add('td')
    cellLetter.classList.add('td', 'td--alphanumeric')
    cellTextSecond.classList.add('td')

    cellNumber.textContent = rowIndex
    cellTextFirst.textContent = rowtableTexts[0]
    cellLetter.textContent = cellLetterContent
    cellTextSecond.textContent = rowtableTexts[1]

    cellTextFirst.dataset.tableNumber = rowIndex
    cellTextSecond.dataset.tableLetter = cellLetterContent

    if (rowIndex === 0) {
      cellNumber.classList.add(cellDisabledClassName)
      cellTextFirst.classList.add(cellDisabledClassName)
    } else if (rowIndex === indexDisabledElement) {
      cellLetter.classList.add(cellDisabledClassName)
      cellTextSecond.classList.add(cellDisabledClassName)
      disabledLetterInput = cellLetterContent
    }

    row.append(cellNumber, cellTextFirst, cellLetter, cellTextSecond)
    fragment.appendChild(row)
  })

  tbodyMain.appendChild(fragment)
  tableMain.append(theadMain, tbodyMain)

  // input table
  const tableInput = document.createElement('table')
  tableInput.classList.add('table-input')

  const theadInput = document.createElement('thead')
  const tbodyInput = document.createElement('tbody')

  const headerRowInput = document.createElement('tr')
  const tableTextsRowInput = document.createElement('tr')

  for (let i = 0; i < content.length; i++) {
    const headerCell = document.createElement('th')
    headerCell.classList.add('table-input__th')
    if (i === 0) {
      headerCell.classList.add('table-input__th--disabled')
    }
    headerCell.textContent = i
    headerRowInput.appendChild(headerCell)

    const cell = document.createElement('td')
    cell.classList.add('td-input')
    const input = document.createElement('input')

    input.classList.add('input-field')
    if (i === 0) {
      input.placeholder = disabledLetterInput
      input.disabled = true
    } else {
      input.placeholder = '-'
      input.dataset.weight = 1
      input.dataset.correct = correct[i - 1]

    }
    input.maxLength = 1
    input.type = 'text'

    cell.appendChild(input)
    tableTextsRowInput.appendChild(cell)
  }
  theadInput.appendChild(headerRowInput)
  tbodyInput.appendChild(tableTextsRowInput)
  tableInput.append(theadInput, tbodyInput)

  const parentInner = document.querySelector(parentElementSelector)
  parentInner.append(tableMain, tableInput)
}