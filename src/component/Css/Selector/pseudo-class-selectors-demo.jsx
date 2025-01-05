
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const pseudoClassSelectors = [
  { name: ":hover", value: "button:hover" },
  { name: ":active", value: "button:active" },
  { name: ":focus", value: "button:focus" },
  { name: ":first-child", value: "li:first-child" },
  { name: ":last-child", value: "li:last-child" },
  { name: ":nth-child(even)", value: "li:nth-child(even)" },
]

export default function PseudoClassSelectorsDemo() {
  const [selectedSelector, setSelectedSelector] = useState(pseudoClassSelectors[0].value)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Pseudo-class Selectors</h2>
      <p className="text-gray-600">
        Pseudo-class selectors target elements based on a specific state or condition.
      </p>
      <Select onValueChange={setSelectedSelector} defaultValue={selectedSelector}>
        <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Select a pseudo-class" />
        </SelectTrigger>
        <SelectContent>
          {pseudoClassSelectors.map((selector) => (
            <SelectItem key={selector.value} value={selector.value}>
              {selector.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Card className="p-4">
        <div className="bg-gray-100 p-4 rounded">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Hover me</button>
          <ul className="list-disc pl-5">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
            <li>Fourth item</li>
            <li>Fifth item</li>
          </ul>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`${selectedSelector} {
  background-color: #f0f0f0;
  color: #333;
  font-weight: bold;
}`}
      </pre>
      <style>{`
        ${selectedSelector} {
          background-color: #f0f0f0;
          color: #333;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

