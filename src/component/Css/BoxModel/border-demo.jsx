import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const borderStyles = ["solid", "dashed", "dotted", "double", "groove", "ridge", "inset", "outset"]

export default function BorderDemo() {
  const [borderWidth, setBorderWidth] = useState("2")
  const [borderStyle, setBorderStyle] = useState("solid")
  const [borderColor, setBorderColor] = useState("#000000")

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Border</h2>
      <p className="text-gray-600">
        The border is drawn between an element`s padding and margin.
      </p>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label htmlFor="borderWidth">Border Width (px)</Label>
          <Input
            id="borderWidth"
            type="number"
            value={borderWidth}
            onChange={(e) => setBorderWidth(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="borderStyle">Border Style</Label>
          <Select onValueChange={setBorderStyle} defaultValue={borderStyle}>
            <SelectTrigger id="borderStyle">
              <SelectValue placeholder="Select border style" />
            </SelectTrigger>
            <SelectContent>
              {borderStyles.map((style) => (
                <SelectItem key={style} value={style}>
                  {style}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="borderColor">Border Color</Label>
          <Input
            id="borderColor"
            type="color"
            value={borderColor}
            onChange={(e) => setBorderColor(e.target.value)}
          />
        </div>
      </div>
      <Card className="p-4">
        <div className="flex justify-center items-center">
          <div
            className="bg-yellow-200 p-4"
            style={{
              borderWidth: `${borderWidth}px`,
              borderStyle: borderStyle,
              borderColor: borderColor,
            }}
          >
            <div className="bg-yellow-500 text-white p-4">
              Content
            </div>
          </div>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`.bordered-box {
  border-width: ${borderWidth}px;
  border-style: ${borderStyle};
  border-color: ${borderColor};
}`}
      </pre>
    </div>
  )
}

