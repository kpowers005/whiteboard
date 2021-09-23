const collatz = (num) => {
  let steps = 0

  while (num > 0) {
    if (num === 1) {
      break
    }
    if (num % 2 === 0) {
      num /=2
      steps++
    } else {
      num *= 3
      num++
      steps++
    }

  }
  return steps
}

const collatz = (num, steps=0) => {
  if (num === 1) return steps

  if (num % 2 === 0) {
    return collatz(num / 2, steps+1)
  } else {
    return collatz((num *= 3) + 1, steps+1)
  }
}

console.log(collatz(12))
