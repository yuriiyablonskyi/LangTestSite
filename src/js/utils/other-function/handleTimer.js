export default function handleTimer(
  countdownInterval,
  buttonDataName,
  handleToFinish
) {
  const countdownEl = document.getElementById('timer')
  const timerValues = {
    rs_2017: 25,
    rt_2017: 45,
    pg_2017: 45,
    rs_2019: 25,
    rt_2019: 45,
    pg_2019: 45,
    rs_2020: 30,
    rt_2020: 40,
    pg_2020: 45,
  }

  if (!timerValues.hasOwnProperty(buttonDataName)) return

  const timer = (minutes) => {
    countdownEl.textContent = `${minutes}:00`
    const seconds = minutes * 60
    let countdown = seconds

    countdownInterval = setInterval(() => {
      countdown--
      const minutesRemaining = Math.floor(countdown / 60)
      const secondsRemaining = countdown % 60
      const countdownText = `${minutesRemaining
        .toString()
        .padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`
      countdownEl.textContent = countdownText

      if (countdown === 0) {
        clearInterval(countdownInterval)
        handleToFinish()
      }
    }, 1000)
  }

  timer(timerValues[buttonDataName])
}
