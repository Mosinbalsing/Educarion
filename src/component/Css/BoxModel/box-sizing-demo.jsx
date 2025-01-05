import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BoxSizingDemo() {
  const [boxSizing, setBoxSizing] = useState("content-box")
  const [width, setWidth] = useState("200")
  const [height, setHeight] = useState("100")
  const [padding, setPadding] = useState("20")
  const [borderWidth, setBorderWidth] = useState("5")

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Box Sizing</h2>
      <p className="text-gray-600">
        Box-sizing changes how the total width and height of elements are calculated.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="boxSizing">Box Sizing</Label>
          <Select onValueChange={setBoxSizing} defaultValue={boxSizing}>
            <SelectTrigger id="boxSizing">
              <SelectValue placeholder="Select box sizing" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="content-box">content-box</SelectItem>
              <SelectItem value="border-box">border-box</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
        <div>
          <Label htmlFor="padding">Padding (px)</Label>
          <Input
            id="padding"
            type="number"
            value={padding}
            onChange={(e) => setPadding(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="borderWidth">Border Width (px)</Label>
          <Input
            id="borderWidth"
            type="number"
            value={borderWidth}
            onChange={(e) => setBorderWidth(e.target.value)}
          />
        </div>
      </div>
      <Card className="p-4">
        <div className="flex justify-center items-center">
          <div
            className="bg-purple-200 inline-block"
            style={{
              boxSizing: boxSizing,
              width: `${width}px`,
              height: `${height}px`,
              padding: `${padding}px`,
              border: `${borderWidth}px solid purple`,
            }}
          >
            <div className="bg-purple-500 text-white h-full flex items-center justify-center">
              Content
            </div>
          </div>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`.box-sizing-demo {
  box-sizing: ${boxSizing};
  width: ${width}px;
  height: ${height}px;
  padding: ${padding}px;
  border-width: ${borderWidth}px;
}`}
      </pre>
      <p className="text-sm text-gray-600">
        Note: With content-box, the total width/height is the content width/height plus padding and border.
        With border-box, the total width/height includes content, padding, and border.
      </p>
    </div>
  )
}

