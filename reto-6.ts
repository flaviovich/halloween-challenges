function surviveRoulette(n: number, k: number): number {
  if (n <= 0 || k <= 0) return -1;

  const victims = Array.from({ length: n }, (_, i) => i);
  let i = 0;

  while (victims.length > 1) {
    i = (i + k - 1) % victims.length;
    victims.splice(i, 1);
  }

  return victims[0];
}

console.log(surviveRoulette(4, 2))
console.log("----")
// Resultado: 0

// Explicación:
// Inicio de 4 víctimas: [0, 1, 2, 3]
// Cuenta 2 desde posición 0: elimina 1 → [0, 2, 3]
// Cuenta 2 desde la última víctima: elimina 3 → [0, 2]
// Cuenta 2 desde la última víctima: elimina 2 → [0]
// Sobrevive: 0

console.log(surviveRoulette(5, 3))
console.log("----")
// Resultado: 3

// Explicación:
// Inicio de 5 víctimas: [0, 1, 2, 3, 4]
// Cuenta 3 desde 0: elimina 2 → [0, 1, 3, 4]
// Cuenta 3 desde 3: elimina 0 → [1, 3, 4]
// Cuenta 3 desde 1: elimina 4 → [1, 3]
// Cuenta 3 desde 1: elimina 1 → [3]
// Sobrevive: 3

console.log(surviveRoulette(5, 10))
// Resultado: 3

// Explicación:
// Inicio de 5 víctimas: [0, 1, 2, 3, 4]
// Cuenta 10 desde 0: elimina 4 → [0, 1, 2, 3]
// Cuenta 10 desde 0: elimina 2 → [0, 1, 3]
// Cuenta 10 desde 0: elimina 0 → [1, 3]
// Cuenta 10 desde 1: elimina 1 → [3]
// Sobrevive: 3