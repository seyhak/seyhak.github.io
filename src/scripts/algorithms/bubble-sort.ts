import { type Dataset } from "src/types/algorithms"

export const bubbleSort = (initialData: Dataset[]) => {
  console.log("bubbleSort", initialData)
  const initialArr = initialData[0]
  const data = [[...initialArr]]
  data[1] = [...initialArr]
  let step = 0

  // iterate over all elements
  for (let i = initialArr.length - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      step++
      data[step] = [...data[step - 1]]
      // of prev element is bigger than current swap
      if (data[step][j - 1] > data[step][j]) {
        let temp = data[step][j - 1]
        data[step][j - 1] = data[step][j]
        data[step][j] = temp
      }
    }
  }
  console.log("sorted", data, step)
  return {
    data: data as Dataset[],
    steps: step
  }
}
// bubbleSort(int numbers[], intarray_size){
//   inti, j, temp;
//   for (i = (array_size - 1); i>= 0; i--)
//   for (j = 1; j <= i; j++)
//   if (numbers[j-1] > numbers[j]){
//      temp = numbers[j-1];
//      numbers[j-1] = numbers[j];
//      numbers[j] = temp;
//   }
// }
