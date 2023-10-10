export const nameCaptalized = (name: string): string => {
  const words = name.toLowerCase().split(' ')
  const wordsCapitalized = words.map((word) => {
    if (word.length > 1) return word.charAt(0).toUpperCase() + word.slice(1)
    else return word
  })

  return wordsCapitalized.join(' ')
}
