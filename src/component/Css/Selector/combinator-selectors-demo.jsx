
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const combinatorSelectors = [
  { name: "Descendant Selector", value: "div p" },
  { name: "Child Selector", value: "div > p" },
  { name: "Adjacent Sibling Selector", value: "h1 + p" },
  { name: "General Sibling Selector", value: "h1 ~ p" },
]

export default function CombinatorSelectorsDemo() {
  const [selectedSelector, setSelectedSelector] = useState(combinatorSelectors[0].value)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Combinator Selectors</h2>
      <p className="text-gray-600">
        Combinator selectors create relationships between elements to target specific elements based on their position in the DOM.
      </p>
      <Select onValueChange={setSelectedSelector} defaultValue={selectedSelector}>
        <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Select a combinator" />
        </SelectTrigger>
        <SelectContent>
          {combinatorSelectors.map((selector) => (
            <SelectItem key={selector.value} value={selector.value}>
              {selector.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Card className="p-4">
        <div className="bg-gray-100 p-4 rounded">
          <h1 className="text-xl font-bold mb-2">Heading 1</h1>
          <p className="mb-2">Paragraph 1</p>
          <p className="mb-2">Paragraph 2</p>
          <div className="border border-gray-300 p-2 mb-2">
            <p className="mb-2">Nested Paragraph 1</p>
            <p>Nested Paragraph 2</p>
          </div>
          <p>Paragraph 3</p>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`${selectedSelector} {
  color: blue;
  font-weight: bold;
}`}
      </pre>
      <style>{`
        ${selectedSelector} {
          color: blue;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

