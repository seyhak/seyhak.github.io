const OPTIONS: Intl.DateTimeFormatOptions = {
  // weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric"
}

export const getFormattedDate = (date: Date) => {
  return date.toLocaleString("en", OPTIONS)
}
