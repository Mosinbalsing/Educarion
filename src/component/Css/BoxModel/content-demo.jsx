import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ContentDemo() {
  const [width, setWidth] = useState("200")
  const [height, setHeight] = useState("100")

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Content Box</h2>
      <p className="text-gray-600">
        The content area contains the actual content of the element, such as text or an image.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="width">Width (px)</Label>
          <Input
            id="width"
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="height">Height (px)</Label>
          <Input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>
      <Card className="p-4">
        <div className="flex justify-center items-center">
          <div
            className="bg-blue-500 flex items-center justify-center text-white"
            style={{ width: `${width}px`, height: `${height}px` }}
          >
            Content
          </div>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`.content-box {
  width: ${width}px;
  height: ${height}px;
}`}
      </pre>
    </div>
  )
}

