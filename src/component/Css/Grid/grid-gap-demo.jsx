import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function GridGapDemo() {
  const [columnGap, setColumnGap] = useState("10px")
  const [rowGap, setRowGap] = useState("10px")

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Grid Gap</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="column-gap">Column Gap</Label>
          <Input
            id="column-gap"
            value={columnGap}
            onChange={(e) => setColumnGap(e.target.value)}
            placeholder="e.g., 10px"
          />
        </div>
        <div>
          <Label htmlFor="row-gap">Row Gap</Label>
          <Input
            id="row-gap"
            value={rowGap}
            onChange={(e) => setRowGap(e.target.value)}
            placeholder="e.g., 10px"
          />
        </div>
      </div>
      <Card className="p-4">
        <div
          className="grid grid-cols-3 grid-rows-2 p-4 bg-gray-100 rounded"
          style={{
            columnGap,
            rowGap,
          }}
        >
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-green-500 rounded flex items-center justify-center text-white p-2"
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
  grid-template-rows: repeat(2, 1fr);
  column-gap: ${columnGap};
  row-gap: ${rowGap};
}`}
      </pre>
    </div>
  )
}

