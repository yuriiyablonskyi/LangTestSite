export default function removeSelectedRadio(page) {
  const radioInputs = page.querySelectorAll(
    'input[type="radio"]:checked:not([disabled])'
  )
  for (const input of radioInputs) {
    input.checked = false
  }
}
