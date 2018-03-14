const wordList = ["universe", "yesterday", "remarkable"]

export const randomWord = () => {
  return wordList[Math.floor(Math.random() * wordList.length)]
}
