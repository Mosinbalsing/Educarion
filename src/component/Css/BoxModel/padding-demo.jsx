import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PaddingDemo() {
  const [paddingTop, setPaddingTop] = useState("20")
  const [paddingRight, setPaddingRight] = useState("20")
  const [paddingBottom, setPaddingBottom] = useState("20")
  const [paddingLeft, setPaddingLeft] = useState("20")

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Padding</h2>
      <p className="text-gray-600">
        Padding is the space between the content and the border of an element.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="paddingTop">Padding Top (px)</Label>
          <Input
            id="paddingTop"
            type="number"
            value={paddingTop}
            onChange={(e) => setPaddingTop(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="paddingRight">Padding Right (px)</Label>
          <Input
            id="paddingRight"
            type="number"
            value={paddingRight}
            onChange={(e) => setPaddingRight(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="paddingBottom">Padding Bottom (px)</Label>
          <Input
            id="paddingBottom"
            type="number"
            value={paddingBottom}
            onChange={(e) => setPaddingBottom(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="paddingLeft">Padding Left (px)</Label>
          <Input
            id="paddingLeft"
            type="number"
            value={paddingLeft}
            onChange={(e) => setPaddingLeft(e.target.value)}
          />
        </div>
      </div>
      <Card className="p-4">
        <div className="flex justify-center items-center">
          <div
            className="bg-green-200 flex items-center justify-center"
            style={{
              paddingTop: `${paddingTop}px`,
              paddingRight: `${paddingRight}px`,
              paddingBottom: `${paddingBottom}px`,
              paddingLeft: `${paddingLeft}px`,
            }}
          >
            <div className="bg-green-500 text-white p-4">
              Content
            </div>
          </div>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`.padded-box {
  padding-top: ${paddingTop}px;
  padding-right: ${paddingRight}px;
  padding-bottom: ${paddingBottom}px;
  padding-left: ${paddingLeft}px;
}`}
      </pre>
    </div>
  )
}

