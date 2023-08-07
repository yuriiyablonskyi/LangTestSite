export default function generateTableBoolean(data, parentElementSelector, nameForInput, indexCheckedRadio) {
  const { content, correct } = data

  const table = document.createElement('table')
  table.classList.add('table-boolean')

  const tbody = document.createElement('tbody')
  const fragment = document.createDocumentFragment()

  content.forEach((tableText, tableIndex) => {
    const row = document.createElement('tr')
    const cellIndex = document.createElement('td')
    const cellText = document.createElement('td')
    const isTableIndexZero = tableIndex === 0

    row.dataset.weight = 1
    row.dataset.correct = correct[tableIndex - 1]

    cellIndex.classList.add(isTableIndexZero ? 'td--disabled' : 'td', 'td--alphanumeric')
    cellText.classList.add(isTableIndexZero ? 'td--disabled' : 'td')

    cellIndex.textContent = tableIndex + '.'
    cellText.textContent = tableText

    row.append(cellIndex, cellText)

    for (let i = 0; i < 2; i++) {
      const cellBoolean = document.createElement('td')
      const input = document.createElement('input')
      const label = document.createElement('label')

      input.classList.add('table-boolean__radio')
      input.dataset.answer = i === 0 ? 1 : 0
      input.type = 'radio'
      input.name = nameForInput + tableIndex
      input.id = input.name + i
      if (tableIndex === 0) {
        input.disabled = true
        input.checked = i === indexCheckedRadio
      }

      label.classList.add('table-boolean__label')
      label.textContent = i === 0 ? 'tak' : 'nie'
      label.htmlFor = input.id

      cellBoolean.append(input, label)
      row.appendChild(cellBoolean)
    }
    fragment.appendChild(row)
  })

  tbody.appendChild(fragment)
  table.appendChild(tbody)

  const parentInner = document.querySelector(parentElementSelector)
  parentInner.appendChild(table)
  return table
}
