export default function clearInputOnPage(page) {
  const inputs = page.querySelectorAll('input[type="text"]:not([disabled])')
  for (const input of inputs) input.value = ''
}