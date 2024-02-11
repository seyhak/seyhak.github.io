import { type Dataset } from "src/types/algorithms"

export function mergeSort(initialData: Dataset[]) {
  let step = 0
  const nextStep = () => {
    step++
    data[step] = [...data[0]]
  }
  function sort(arr: number[]) {
    if (arr.length > 1) {
      let m = arr.length / 2
      // divide the list in two sub lists
      let l1 = arr.slice(0, m)
      let n1 = l1.length
      let l2 = arr.slice(m)
      let n2 = l2.length
      //  recursively calling the function for sub lists
      sort(l1)
      sort(l2)
      let i = 0,
        j = 0,
        k = 0
      while (i < n1 && j < n2) {
        if (l1[i] <= l2[j]) {
          arr[k] = l1[i]
          i = i + 1
          nextStep()
        } else {
          arr[k] = l2[j]
          j = j + 1
          nextStep()
        }
        k = k + 1
      }
      while (i < n1) {
        arr[k] = l1[i]
        i = i + 1
        k = k + 1
        nextStep()
      }
      while (j < n2) {
        arr[k] = l2[j]
        j = j + 1
        k = k + 1
        nextStep()
      }
    }
    return arr
  }

  const initialArr = initialData[0]
  const data = [[...initialArr]]
  data[1] = [...initialArr]
  console.log("mergeSort", initialData)

  sort(data[step])
  data[step] = data[0]
  data[0] = initialArr
  console.log("sorted", data)
  return {
    data: data as Dataset[],
    steps: step
  }
}
