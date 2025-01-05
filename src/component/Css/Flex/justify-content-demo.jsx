
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"

const justifyContentOptions = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]

export default function JustifyContentDemo() {
  const [justifyContent, setJustifyContent] = useState("flex-start")

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Justify Content</h2>
      <Select onValueChange={setJustifyContent} defaultValue={justifyContent}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select justify-content" />
        </SelectTrigger>
        <SelectContent>
          {justifyContentOptions.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Card className="p-4">
        <div
          className="flex gap-2 p-4 bg-gray-100 rounded"
          style={{ justifyContent: justifyContent  }}
        >
          <div className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center text-white">1</div>
          <div className="w-16 h-16 bg-green-500 rounded flex items-center justify-center text-white">2</div>
          <div className="w-16 h-16 bg-red-500 rounded flex items-center justify-center text-white">3</div>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`.container {
  display: flex;
  justify-content: ${justifyContent};
}`}
      </pre>
    </div>
  )
}

