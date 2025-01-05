import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AbsoluteDemo() {
  const [top, setTop] = useState("10px")
  const [left, setLeft] = useState("10px")

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Absolute Position</h2>
      <p className="text-gray-600">
        The element is positioned relative to its nearest positioned ancestor or the initial containing block. Adjust the top and left values to see the effect.
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
          <Label htmlFor="left">Left</Label>
          <Input
            id="left"
            value={left}
            onChange={(e) => setLeft(e.target.value)}
            placeholder="e.g., 10px"
          />
        </div>
      </div>
      <Card className="p-4">
        <div className="bg-gray-100 p-4 rounded h-40 relative">
          <div className="bg-blue-500 text-white p-2 mb-2">Element 1</div>
          <div
            className="bg-green-500 text-white p-2 absolute"
            style={{ top, left }}
          >
            Element 2 (Absolute)
          </div>
          <div className="bg-red-500 text-white p-2">Element 3</div>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`.element {
  position: absolute;
  top: ${top};
  left: ${left};
}`}
      </pre>
    </div>
  )
}

