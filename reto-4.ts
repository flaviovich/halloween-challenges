function searchPhone(phones: number[], target: number): number {
  let left = 0
  let right = phones.length - 1

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    if (phones[middle] === target) {
      return middle
    } else if (phones[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return -1
}

const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020]

console.log(searchPhone(phones, 1008))
// → 3 (está en el índice 3)

console.log(searchPhone(phones, 1001))
// → 0 (está en el índice 0)

console.log(searchPhone(phones, 1020))
// → 6 (está en el índice 6)

console.log(searchPhone(phones, 9999))
// → -1 (no existe)
