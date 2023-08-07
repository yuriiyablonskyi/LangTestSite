export default function generateTableNumber(data, parentElementSelector, disabledValueInput, quantityInputs) {
  const { content, correct } = data

  const table = document.createElement('table')
  table.classList.add('table-number')
  const tbody = document.createElement('tbody')
  const fragment = document.createDocumentFragment()

  content.forEach((tableText, tableIndex) => {
    const row = document.createElement('tr')
    const cellLetter = document.createElement('td')
    const cellText = document.createElement('td')
    const cellNumber = document.createElement('td')
    const tableLetter = String.fromCharCode(65 + tableIndex)

    cellLetter.classList.add('td', 'td--alphanumeric')
    cellText.classList.add('td')
    cellNumber.classList.add('td-input')

    cellLetter.textContent = tableLetter
    cellText.textContent = tableText

    cellText.dataset.tableLetter = tableLetter

    const input = document.createElement('input')
    input.classList.add('input-field')
    input.type = 'text'
    input.maxLength = 3
    input.placeholder = '-'
    cellNumber.appendChild(input)

    if (tableIndex === 0) {
      cellLetter.classList.add('td--disabled')
      cellText.classList.add('td--disabled')
      input.value = disabledValueInput
      input.disabled = true
    } else {
      input.dataset.weight = 1
      input.dataset.correct = correct[tableIndex - 1]
    }

    row.append(cellLetter, cellText, cellNumber)
    fragment.appendChild(row)
  })

  tbody.appendChild(fragment)
  table.appendChild(tbody)

  const parentInner = document.querySelector(parentElementSelector)
  parentInner.appendChild(table)
  return table
}