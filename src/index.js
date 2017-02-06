function* incrementGenerator () {
  let index = 0
  while (true) yield index++
}

const makeIncrementGenerator = () => {
  const gen = incrementGenerator()
  return () => gen.next().value
}

export default makeIncrementGenerator

