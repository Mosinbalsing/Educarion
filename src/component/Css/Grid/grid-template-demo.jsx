import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function GridTemplateDemo() {
  const [columns, setColumns] = useState("1fr 1fr 1fr")
  const [rows, setRows] = useState("100px 100px")

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Grid Template</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="columns">Grid Template Columns</Label>
          <Input
            id="columns"
            value={columns}
            onChange={(e) => setColumns(e.target.value)}
            placeholder="e.g., 1fr 1fr 1fr"
          />
        </div>
        <div>
          <Label htmlFor="rows">Grid Template Rows</Label>
          <Input
            id="rows"
            value={rows}
            onChange={(e) => setRows(e.target.value)}
            placeholder="e.g., 100px 100px"
          />
        </div>
      </div>
      <Card className="p-4">
        <div
          className="grid gap-2 p-4 bg-gray-100 rounded"
          style={{
            gridTemplateColumns: columns,
            gridTemplateRows: rows,
          }}
        >
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-blue-500 rounded flex items-center justify-center text-white p-2"
            >
              {index + 1}
            </div>
          ))}
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`.container {
  display: grid;
  grid-template-columns: ${columns};
  grid-template-rows: ${rows};
}`}
      </pre>
    </div>
  )
}

