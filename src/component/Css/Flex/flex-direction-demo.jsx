import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"

const flexDirections = ["row", "row-reverse", "column", "column-reverse"]

export default function FlexDirectionDemo() {
  const [flexDirection, setFlexDirection] = useState("row")

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Flex Direction</h2>
      <Select onValueChange={setFlexDirection} defaultValue={flexDirection}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select flex-direction" />
        </SelectTrigger>
        <SelectContent>
          {flexDirections.map((direction) => (
            <SelectItem key={direction} value={direction}>
              {direction}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Card className="p-4">
        <div
          className="flex gap-2 p-4 bg-gray-100 rounded"
          style={{ flexDirection: flexDirection  }}
        >
          <div className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center text-white">1</div>
          <div className="w-16 h-16 bg-green-500 rounded flex items-center justify-center text-white">2</div>
          <div className="w-16 h-16 bg-red-500 rounded flex items-center justify-center text-white">3</div>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`.container {
  display: flex;
  flex-direction: ${flexDirection};
}`}
      </pre>
    </div>
  )
}

