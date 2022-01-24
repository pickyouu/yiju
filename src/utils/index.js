export function debounce(func, time = 500) {
  let timer = null
  return function () {
    if (timer) { clearTimeout(timer) }
    timer = setTimeout(() => {
      func.apply(this, arguments)
    }, time)
  }
}