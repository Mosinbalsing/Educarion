import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FixedDemo() {
  const [top, setTop] = useState("10px")
  const [right, setRight] = useState("10px")

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Fixed Position</h2>
      <p className="text-gray-600">
        The element is positioned relative to the browser window. It will stay in the same place even if the page is scrolled. Adjust the top and right values to see the effect.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="top">Top</Label>
          <Input
            id="top"
            value={top}
            onChange={(e) => setTop(e.target.value)}
            placeholder="e.g., 10px"
          />
        </div>
        <div>
          <Label htmlFor="right">Right</Label>
          <Input
            id="right"
            value={right}
            onChange={(e) => setRight(e.target.value)}
            placeholder="e.g., 10px"
          />
        </div>
      </div>
      <Card className="p-4">
        <div className="bg-gray-100 p-4 rounded h-40 overflow-auto relative">
          <div className="bg-blue-500 text-white p-2 mb-2">Element 1</div>
          <div className="bg-red-500 text-white p-2 mb-2">Element 2</div>
          <div className="bg-yellow-500 text-white p-2 mb-2">Element 3</div>
          <div className="bg-purple-500 text-white p-2 mb-2">Element 4</div>
          <div
            className="bg-green-500 text-white p-2 fixed"
            style={{ top, right }}
          >
            Fixed Element
          </div>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`.element {
  position: fixed;
  top: ${top};
  right: ${right};
}`}
      </pre>
    </div>
  )
}

