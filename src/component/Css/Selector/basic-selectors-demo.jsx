"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const basicSelectors = [
  { name: "Universal Selector", value: "*" },
  { name: "Type Selector", value: "p" },
  { name: "Class Selector", value: ".highlight" },
  { name: "ID Selector", value: "#unique" },
]

export default function BasicSelectorsDemo() {
  const [selectedSelector, setSelectedSelector] = useState(basicSelectors[0].value)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Basic Selectors</h2>
      <p className="text-gray-600">
        Basic selectors are the foundation of CSS selection. They target elements based on their type, class, or ID.
      </p>
      <Select onValueChange={setSelectedSelector} defaultValue={selectedSelector}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a selector" />
        </SelectTrigger>
        <SelectContent>
          {basicSelectors.map((selector) => (
            <SelectItem key={selector.value} value={selector.value}>
              {selector.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Card className="p-4">
        <div className="bg-gray-100 p-4 rounded">
          <p className="mb-2">This is a paragraph.</p>
          <p id="unique" className="mb-2">This paragraph has an ID.</p>
          <p className="highlight mb-2">This paragraph has a class.</p>
          <div className="mb-2">This is a div.</div>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`${selectedSelector} {
  color: red;
  font-weight: bold;
}`}
      </pre>
      <style>{`
        ${selectedSelector} {
          color: red;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

