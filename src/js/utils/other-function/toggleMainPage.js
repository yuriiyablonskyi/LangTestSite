export default function toggleMainPage(isEnabled, hidePage, pageOpen, head) {
  const showElement = element => (element.style.display = 'block')
  const hideElement = element => (element.style.display = 'none')
  if (isEnabled) {
    hideElement(hidePage)
    showElement(pageOpen)
    if (head) showElement(head)

  } else {
    showElement(hidePage)
    hideElement(pageOpen)
    if (head) hideElement(head)
  }
} 