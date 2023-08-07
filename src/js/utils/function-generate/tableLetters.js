export default function generateTableLetters(tableTexts, parentElementSelector, indexDisabledElement) {
  if (!tableTexts || !Array.isArray(tableTexts) || tableTexts.length === 0) {
    throw new Error('Invalid tableTexts argument. Must be a non-empty array.')
  }

  const table = document.createElement('table')
  table.classList.add('table-input-letters')

  const fragment = document.createDocumentFragment()

  tableTexts.forEach((tableText, tableIndex) => {
    const row = document.createElement('tr')
    const letterCell = document.createElement('td')
    const textCell = document.createElement('td')
    const tableLetter = String.fromCharCode(65 + tableIndex)

    letterCell.classList.add('td', 'td--alphanumeric')
    textCell.classList.add('td')

    letterCell.textContent = tableLetter
    textCell.textContent = tableText

    textCell.dataset.tableLetter = tableLetter

    if (tableIndex === indexDisabledElement) {
      letterCell.classList.add('td--disabled')
      textCell.classList.add('td--disabled')
    }

    row.append(letterCell, textCell)
    fragment.appendChild(row)
  })
  table.appendChild(fragment)

  const parentInner = document.querySelector(parentElementSelector)
  parentInner.appendChild(table)
}

