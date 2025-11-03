function countSheep(letters: string): number {
  const required = {
    s: 1,
    h: 1,
    e: 2,
    p: 1
  }
  const available: { [key: string]: number } = {
    s: 0,
    h: 0,
    e: 0,
    p: 0
  };

  [...letters.toLowerCase()].forEach(letter => {
    if (letter in available) {
      available[letter]++
    }
  })

  return Math.min(
    Math.floor(available.s / required.s),
    Math.floor(available.h / required.h),
    Math.floor(available.e / required.e),
    Math.floor(available.p / required.p)
  )
}

console.log(countSheep('sheepxsheepy'))
// → 2 (puedes formar "sheep" dos veces)

console.log(countSheep('sshhheeeepppp'))
// → 2 (s=2, h=3, e=4, p=4 → solo 2 "sheep" completas)

console.log(countSheep('hola'))
// → 0 (no hay suficientes letras)

console.log(countSheep('peesh'));
// → 1 (las letras están desordenadas pero están todas)
