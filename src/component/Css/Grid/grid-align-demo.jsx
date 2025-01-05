import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"

const alignOptions = ["start", "center", "end", "stretch"]

export default function GridAlignDemo() {
  const [justifyItems, setJustifyItems] = useState("start")
  const [alignItems, setAlignItems] = useState("start")

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Grid Align</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Select onValueChange={setJustifyItems} defaultValue={justifyItems}>
            <SelectTrigger>
              <SelectValue placeholder="Select justify-items" />
            </SelectTrigger>
            <SelectContent>
              {alignOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select onValueChange={setAlignItems} defaultValue={alignItems}>
            <SelectTrigger>
              <SelectValue placeholder="Select align-items" />
            </SelectTrigger>
            <SelectContent>
              {alignOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Card className="p-4">
        <div
          className="grid grid-cols-3 grid-rows-3 gap-2 p-4 bg-gray-100 rounded"
          style={{
            justifyItems,
            alignItems,
            height: "300px",
          }}
        >
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="bg-red-500 rounded flex items-center justify-center text-white"
              style={{ width: "50px", height: "50px" }}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: ${justifyItems};
  align-items: ${alignItems};
}`}
      </pre>
    </div>
  )
}

