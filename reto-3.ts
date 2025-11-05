function myersCalendar(year: number): string[] {
  // Validar argumento
  if (typeof year !== 'number' || isNaN(year) || !isFinite(year) || year < 1) {
    return [];
  }

  // Asegurar que es entero
  year = Math.floor(year);

  const result: string[] = [];

  // Halloween - validar que el año es válido
  result.push(`${year}-10-31`);

  // Viernes 13 - buscar en cada mes
  for (let month = 1; month <= 12; month++) {
    const date = new Date(year, month - 1, 13);
    // Validar adicionalmente que la fecha creada corresponde al año correcto
    if (date.getFullYear() === year && date.getDay() === 5) {
      const monthStr = month < 10 ? '0' + month : '' + month;
      result.push(year + '-' + monthStr + '-13');
    }
  }

  return result.sort((a, b) => a.localeCompare(b));
}

console.log(myersCalendar(2025))
// → ['2025-06-13', '2025-09-13', '2025-10-31']

console.log(myersCalendar(2026))
// → ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13']

console.log(myersCalendar(2024))
// → ['2024-09-13', '2024-10-31', '2024-12-13']
