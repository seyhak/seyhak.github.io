import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
} from "chart.js"
import { type Dataset, ALGORITHMS } from "src/types/algorithms"
import { bubbleSort, insertionSort, mergeSort } from "src/scripts/algorithms"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Bar } from "react-chartjs-2"
import { Button } from "../Button"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

const FUNCTIONS = {
  [ALGORITHMS.BUBBLE_SORT]: bubbleSort,
  [ALGORITHMS.INSERTION_SORT]: insertionSort,
  [ALGORITHMS.MERGE_SORT]: mergeSort
}
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}
const getRandomData = (length: number, max = 1000) => {
  const returnData = []
  for (let i = 0; i < length - 1; i++) {
    returnData.push(getRandomInt(max))
  }
  return returnData
}
const TIMEOUT_THRESHOLD = 10

type BarChartProps = {
  sortingAlgorithmName: keyof typeof FUNCTIONS
  length?: number
}
type UseBarChartProps = Required<BarChartProps>

const useBarChart = ({ length, sortingAlgorithmName }: UseBarChartProps) => {
  const sortingAlgorithm = FUNCTIONS[sortingAlgorithmName]
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
  const [dataSets, setDataSets] = useState<Dataset[]>([])
  const [operationsCount, setOperationsCount] = useState<number>(0)
  const [play, setPlay] = useState(false)
  const [step, setStep] = useState(0)
  const [message, setMessage] = useState<string | null>("loading ...")

  const sortData = useCallback(
    async (data: Dataset[]) => {
      setMessage("sorting ...")
      const sortedData = await new Promise<Dataset[]>((resolve, reject) => {
        const result = sortingAlgorithm(data)
        setOperationsCount(result.steps)
        resolve(result.data)
      })
      setDataSets(sortedData)
      setMessage(null)
    },
    [sortingAlgorithm, setMessage, setDataSets]
  )

  const prepareData = useCallback(async () => {
    const created = await new Promise<Dataset>((resolve, reject) => {
      resolve(getRandomData(length))
    })
    sortData([created])
  }, [length, sortData])

  useEffect(() => {
    prepareData()
  }, [prepareData])

  useEffect(() => {
    const newTimeoutId = setTimeout(() => {
      const shouldPlay = play && dataSets.length > 1
      if (shouldPlay) {
        const isLastStep = step === dataSets.length - 1
        if (isLastStep) {
          setPlay(false)
        } else {
          setStep(step + 1)
        }
        setTimeoutId(newTimeoutId)
      }
    }, TIMEOUT_THRESHOLD)
  }, [step, play, setTimeoutId, dataSets.length])

  const handlePlayClick = useCallback(() => {
    setPlay((prevPlay) => {
      const nextPlay = !prevPlay
      if (!nextPlay && timeoutId) {
        clearTimeout(timeoutId)
      }
      return nextPlay
    })
  }, [setPlay, timeoutId])

  const handleArrowClick = useCallback(
    (value: number) => {
      const nextStep = step + value
      const isNextTooBig = nextStep > dataSets.length - 1
      const isNextTooSmall = nextStep < 0
      if (isNextTooBig) {
        setStep(0)
      } else if (isNextTooSmall) {
        setStep(dataSets.length)
      } else {
        setStep(nextStep)
      }
    },
    [step, setStep, dataSets.length]
  )
  const handleRetryClick = useCallback(() => {
    prepareData()
  }, [prepareData])

  const chartData = useMemo(() => {
    return {
      labels: dataSets[step],
      datasets: [
        {
          data: dataSets[step],
          backgroundColor: "rgba(0, 0, 255, 0.9)"
        }
      ]
    }
  }, [dataSets, step])

  return {
    message,
    step,
    handlePlayClick,
    handleArrowClick,
    handleRetryClick,
    operationsCount,
    chartData,
    play
  }
}
export const BarChart = ({
  length = 50,
  sortingAlgorithmName
}: BarChartProps) => {
  const {
    message,
    step,
    handlePlayClick,
    handleArrowClick,
    handleRetryClick,
    operationsCount,
    chartData,
    play
  } = useBarChart({ length, sortingAlgorithmName })
  return (
    <div className="flex justify-center items-center flex-1 w-full flex-col">
      {!!message ? (
        <p>{message}</p>
      ) : (
        <>
          <p>{`Step ${step}`}</p>
          <p>{`Elements: ${length}`}</p>
          <p>{`Operations: ${operationsCount}`}</p>
          <Bar
            data={chartData}
            options={{
              animation: false
            }}
          />
          <div className="flex gap-1">
            <Button onClick={() => handleArrowClick(-10)}>{"- 10"}</Button>
            <Button onClick={() => handleArrowClick(-1)}>{"<<"}</Button>
            <Button onClick={handlePlayClick}>
              {!play ? "Play" : "Pause"}
            </Button>
            <Button onClick={handleRetryClick}>Retry</Button>
            <Button onClick={() => handleArrowClick(1)}>{">>"}</Button>
            <Button onClick={() => handleArrowClick(10)}>{"+ 10"}</Button>
          </div>
        </>
      )}
    </div>
  )
}
