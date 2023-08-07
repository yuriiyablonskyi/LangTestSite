export default function generateTestAbc(testTexts, parentElementSelector, nameForLable, indexCheckedRadio, dataWeight, secondClass) {
  const optionsClassName = 'abc__options--wide'
  const list = document.createElement('ul')
  const isTextTest = testTexts[0].hasOwnProperty('text')
  const fragment = document.createDocumentFragment()

  list.classList.add('abc__list')

  testTexts.forEach((item, index) => {
    const isFirstElement = index === 0
    const listItem = document.createElement('li')
    const titleElement = document.createElement('h4')
    const optionsList = document.createElement('ul')

    listItem.classList.add('abc__item')
    titleElement.classList.add('abc__title')
    optionsList.classList.add('abc__options')

    optionsList.dataset.correct = item.correct
    optionsList.dataset.weight = dataWeight

    titleElement.textContent = item.question

    if (isFirstElement && !secondClass) listItem.classList.add('abc__item--disabled')

    if (isTextTest) {
      const questionText = document.createElement('p')
      questionText.classList.add('abc__content')
      questionText.textContent = item.text
      listItem.appendChild(questionText)
    }

    if (!secondClass) {
      optionsList.classList.add(optionsClassName)
    } else {
      optionsList.classList.add(secondClass)
    }

    item.options.forEach((option, optionIndex) => {
      const optionItem = document.createElement('li')
      optionItem.classList.add('abc__answer')

      const input = document.createElement('input')
      input.classList.add('abc__radio')
      input.type = 'radio'
      input.name = nameForLable + index
      input.id = input.name + optionIndex
      input.dataset.answer = optionIndex
      if (isFirstElement) {
        input.disabled = true
        input.checked = optionIndex === indexCheckedRadio
      }

      const label = document.createElement('label')
      label.classList.add('abc__text')
      label.htmlFor = input.id
      label.textContent = option

      const checkmark = document.createElement('span')
      checkmark.classList.add('abc__checkmark')
      label.prepend(checkmark)

      optionItem.append(input, label)
      optionsList.appendChild(optionItem)
    })

    listItem.append(titleElement, optionsList)
    fragment.appendChild(listItem)
  })

  list.appendChild(fragment)
  const parentInner = document.querySelector(parentElementSelector)
  parentInner.appendChild(list)
  return list
}