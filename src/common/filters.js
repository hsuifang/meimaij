export function currency(price = 0) {
  const num = Number(price).toFixed(0)
  return num && `NT$ ${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
}

export function localeDateStr(time, timezone = 'zh-TW') {
  const localDate = new Date(time * 1000)
  return localDate.toLocaleDateString(timezone)
}

export function localeTimeStr(time, timezone = 'zh-TW') {
  const localDate = new Date(time * 1000)
  return localDate.toLocaleTimeString(timezone)
}
