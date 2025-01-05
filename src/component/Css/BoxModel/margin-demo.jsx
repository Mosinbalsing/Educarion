"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function MarginDemo() {
  const [marginTop, setMarginTop] = useState("20")
  const [marginRight, setMarginRight] = useState("20")
  const [marginBottom, setMarginBottom] = useState("20")
  const [marginLeft, setMarginLeft] = useState("20")

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Margin</h2>
      <p className="text-gray-600">
        Margin is the space outside the border of an element, separating it from other elements.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="marginTop">Margin Top (px)</Label>
          <Input
            id="marginTop"
            type="number"
            value={marginTop}
            onChange={(e) => setMarginTop(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="marginRight">Margin Right (px)</Label>
          <Input
            id="marginRight"
            type="number"
            value={marginRight}
            onChange={(e) => setMarginRight(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="marginBottom">Margin Bottom (px)</Label>
          <Input
            id="marginBottom"
            type="number"
            value={marginBottom}
            onChange={(e) => setMarginBottom(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="marginLeft">Margin Left (px)</Label>
          <Input
            id="marginLeft"
            type="number"
            value={marginLeft}
            onChange={(e) => setMarginLeft(e.target.value)}
          />
        </div>
      </div>
      <Card className="p-4">
        <div className="bg-gray-200 flex justify-center items-center">
          <div
            className="bg-red-200 inline-block"
            style={{
              marginTop: `${marginTop}px`,
              marginRight: `${marginRight}px`,
              marginBottom: `${marginBottom}px`,
              marginLeft: `${marginLeft}px`,
            }}
          >
            <div className="bg-red-500 text-white p-4">
              Content
            </div>
          </div>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`.margin-box {
  margin-top: ${marginTop}px;
  margin-right: ${marginRight}px;
  margin-bottom: ${marginBottom}px;
  margin-left: ${marginLeft}px;
}`}
      </pre>
    </div>
  )
}

