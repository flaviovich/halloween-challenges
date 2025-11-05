function myersCalendar(year: number): string[] {
  if (year < 1) return []

  const inicio = Date.UTC(year, 0, 1)
  const fin = Date.UTC(year + 1, 0, 1)
  const totalDias = (fin - inicio) / (1000 * 60 * 60 * 24)
  const result: string[] = []

  for (let i = 0; i < totalDias; i++) {
    const date = new Date(inicio + (1000 * 60 * 60 * 24 * i))
    const day = date.getUTCDate()
    const month = date.getUTCMonth() + 1
    const year = date.getUTCFullYear()

    if ((date.getDay() === 5 && day === 13) || (day === 31 && month === 10)) {
      result.push(`${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`)
    }
  }
  return result
}

console.log(myersCalendar(2025))
// → ['2025-06-13', '2025-09-13', '2025-10-31']

console.log(myersCalendar(2026))
// → ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13']

console.log(myersCalendar(2024))
// → ['2024-09-13', '2024-10-31', '2024-12-13']
