import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function StickyDemo() {
  const [top, setTop] = useState("0px")

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Sticky Position</h2>
      <p className="text-gray-600">
        The element is positioned based on the user`s scroll position. It toggles between relative and fixed positioning. Adjust the top value and scroll the container to see the effect.
      </p>
      <div>
        <Label htmlFor="top">Top</Label>
        <Input
          id="top"
          value={top}
          onChange={(e) => setTop(e.target.value)}
          placeholder="e.g., 0px"
        />
      </div>
      <Card className="p-4">
        <div className="bg-gray-100 p-4 rounded h-60 overflow-auto">
          <div className="bg-blue-500 text-white p-2 mb-2">Element 1</div>
          <div
            className="bg-green-500 text-white p-2 mb-2 sticky"
            style={{ top }}
          >
            Sticky Element
          </div>
          <div className="bg-red-500 text-white p-2 mb-2">Element 3</div>
          <div className="bg-yellow-500 text-white p-2 mb-2">Element 4</div>
          <div className="bg-purple-500 text-white p-2 mb-2">Element 5</div>
          <div className="bg-pink-500 text-white p-2 mb-2">Element 6</div>
          <div className="bg-indigo-500 text-white p-2 mb-2">Element 7</div>
          <div className="bg-teal-500 text-white p-2">Element 8</div>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`.element {
  position: sticky;
  top: ${top};
}`}
      </pre>
    </div>
  )
}

