export default function calculatePercentage(correctPoints) {
  const maxPoints = 30
  const percentage = ((correctPoints / maxPoints) * 100).toFixed(1)
  return percentage
}
