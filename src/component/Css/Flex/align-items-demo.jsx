import { useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import { Card } from "@/components/ui/card"

const alignItemsOptions = ["flex-start", "flex-end", "center", "baseline", "stretch"]

export default function AlignItemsDemo() {
  const [alignItems, setAlignItems] = useState("stretch")

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Align Items</h2>
      <Select onValueChange={setAlignItems} defaultValue={alignItems}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select align-items" />
        </SelectTrigger>
        <SelectContent>
          {alignItemsOptions.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Card className="p-4">
        <div
          className="flex gap-2 p-4 bg-gray-100 rounded"
          style={{ alignItems: alignItems , height: '200px' }}
        >
          <div className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center text-white">1</div>
          <div className="w-16 h-32 bg-green-500 rounded flex items-center justify-center text-white">2</div>
          <div className="w-16 h-24 bg-red-500 rounded flex items-center justify-center text-white">3</div>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`.container {
  display: flex;
  align-items: ${alignItems};
}`}
      </pre>
    </div>
  )
}

