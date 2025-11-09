function changeLock(current: string, target: string): number {
  let count = 0;
  const len = current.length;
  let i = 0;

  // Acceso directo a charCodeAt para evitar Number() y parseo
  while (i < len) {
    const c = current.charCodeAt(i) - 48; // '0' = 48 → 0, '1' = 49 → 1, etc.
    const t = target.charCodeAt(i) - 48;

    if (c !== t) {
      const diff = (c - t + 10) % 10; // diff hacia adelante (0 a 9)
      const back = (t - c + 10) % 10; // diff hacia atrás
      count += diff < back ? diff : back;
    }
    i++;
  }
  return count;
}

console.log(changeLock('0022', '0044'))
console.log("======");
// → 4
// Rueda 2: 2→4 (2 movimientos hacia adelante)
// Rueda 3: 2→4 (2 movimientos hacia adelante)
// Total: 2+2 = 4

console.log(changeLock('0000', '9999'))
console.log("======");
// → 4
// Cada rueda: 0→9 (1 movimiento hacia atrás es más rápido que 9 hacia adelante)
// Total: 1+1+1+1 = 4

console.log(changeLock('1234', '5678'))
console.log("======");
// → 16
// Rueda 0: 1→5 (4 movimientos)
// Rueda 1: 2→6 (4 movimientos)
// Rueda 2: 3→7 (4 movimientos)
// Rueda 3: 4→8 (4 movimientos)
// Total: 4+4+4+4 = 16

console.log(changeLock('0000', '0000'))
console.log("======");
// → 0
// Ya estamos en el código objetivo

console.log(changeLock('1357', '2468'))
console.log("======");
// → 4
// Rueda 0: 1→2 (1 movimiento)
// Rueda 1: 3→4 (1 movimiento)
// Rueda 2: 5→6 (1 movimiento)
// Rueda 3: 7→8 (1 movimiento)
// Total: 1+1+1+1 = 4

console.log(changeLock('0505', '5050'))
console.log("======");
// → 20
// Rueda 0: 0→5 (5 movimientos)
// Rueda 1: 5→0 (5 movimientos)
// Rueda 2: 0→5 (5 movimientos)
// Rueda 3: 5→0 (5 movimiento)
// Total: 1+1 = 2
