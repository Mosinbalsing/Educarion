

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"

const flexWrapOptions = ["nowrap", "wrap", "wrap-reverse"]

export default function FlexWrapDemo() {
  const [flexWrap, setFlexWrap] = useState("nowrap")

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Flex Wrap</h2>
      <Select onValueChange={setFlexWrap} defaultValue={flexWrap}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select flex-wrap" />
        </SelectTrigger>
        <SelectContent>
          {flexWrapOptions.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Card className="p-4">
        <div
          className="flex gap-2 p-4 bg-gray-100 rounded"
          style={{ flexWrap: flexWrap , width: '300px' }}
        >
          {[...Array(8)].map((_, index) => (
            <div key={index} className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center text-white">
              {index + 1}
            </div>
          ))}
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`.container {
  display: flex;
  flex-wrap: ${flexWrap};
}`}
      </pre>
    </div>
  )
}

