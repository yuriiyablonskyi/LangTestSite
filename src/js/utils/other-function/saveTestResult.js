export default function saveTestResult(category, points, percentage) {
  const monthNames = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień',
  ]

  const getMonthName = (monthNumber) => {
    return monthNames[monthNumber]
  }

  const currentDate = new Date()
  const id = currentDate.getTime()
  const date = `${currentDate.getDate()} ${getMonthName(
    currentDate.getMonth()
  )} ${currentDate.getFullYear()}`

  const result = {
    category,
    points,
    percentage,
    date,
    id
  }
  const resultData = JSON.parse(localStorage.getItem('testResult')) || []
  resultData.push(result)
  const resultString = JSON.stringify(resultData)
  localStorage.setItem('testResult', resultString)
}
