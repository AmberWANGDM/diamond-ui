export const findIndex = (arr: any[], value: any) => {
  return arr.findIndex(item => item === value)
}

export const throttle = (fn, time) => {
  let timer = undefined
  return function () {
    let args = arguments
    if (timer) return
    fn.apply(this, args)
    timer = setTimeout(() => {
      timer = null
    }, time)
  }
}
