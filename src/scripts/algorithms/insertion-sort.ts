import { type Dataset } from "src/types/algorithms"

export function insertionSort(initialData: Dataset[]) {
  let step = 0
  const nextStep = () => {
    step++
    data[step] = [...data[step - 1]]
  }
  console.log("insertionSort", initialData)
  const initialArr = initialData[0]
  const data = [[...initialArr]]
  data[1] = [...initialArr]

  for (let i = 0; i < initialArr.length; i++) {
    let key = data[step][i]
    let j = i
    // check if any element before key is > than key
    while (j > 0 && data[step][j - 1] > key) {
      // swap if item is bigger (move key right)
      data[step][j] = data[step][j - 1]
      j--
      nextStep()
    }
    // if some element is bigger than key leave it where it is
    data[step][j] = key
    nextStep()
  }
  console.log("sorted", data)
  return {
    data: data as Dataset[],
    steps: step
  }
}
