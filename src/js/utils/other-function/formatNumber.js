export default function formatNumber(number) {
  const numberString = number.toString()
  if (numberString.includes('.')) return numberString.replace('.', ',')
  return numberString
}