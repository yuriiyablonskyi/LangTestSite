export default function calculatePercentage(correctPoints) {
  const maxPoints = 30
  const percentage = Math.round((correctPoints / maxPoints) * 100)
  return percentage
}
