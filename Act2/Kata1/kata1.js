export default function evenOdd(num) {
  return num % 2 === 0 ? "Parell" : "Senar";
}

// Option B

export function evenOdd2(num) {
  if (num % 2 === 0) {
    return "Parell";
  }
  return "Senar";
}
