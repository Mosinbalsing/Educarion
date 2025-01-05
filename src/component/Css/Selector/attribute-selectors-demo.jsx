import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const attributeSelectors = [
  { name: "[attribute]", value: "[data-type]" },
  { name: "[attribute='value']", value: "[data-type='fruit']" },
  { name: "[attribute~='value']", value: "[data-colors~='red']" },
  { name: "[attribute^='value']", value: "[data-starts-with^='app']" },
  { name: "[attribute$='value']", value: "[data-ends-with$='le']" },
  { name: "[attribute*='value']", value: "[data-contains*='ana']" },
]

export default function AttributeSelectorsDemo() {
  const [selectedSelector, setSelectedSelector] = useState(attributeSelectors[0].value)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Attribute Selectors</h2>
      <p className="text-gray-600">
        Attribute selectors target elements based on their attributes or attribute values.
      </p>
      <Select onValueChange={setSelectedSelector} defaultValue={selectedSelector}>
        <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Select an attribute selector" />
        </SelectTrigger>
        <SelectContent>
          {attributeSelectors.map((selector) => (
            <SelectItem key={selector.value} value={selector.value}>
              {selector.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Card className="p-4">
        <div className="bg-gray-100 p-4 rounded">
          <ul className="list-disc pl-5">
            <li data-type="fruit" data-colors="red green" data-starts-with="apple" data-ends-with="le" data-contains="app">Apple</li>
            <li data-type="fruit" data-colors="yellow" data-starts-with="ban" data-ends-with="na" data-contains="ana">Banana</li>
            <li data-type="vegetable" data-colors="orange" data-starts-with="car" data-ends-with="ot" data-contains="arr">Carrot</li>
            <li data-type="fruit" data-colors="purple" data-starts-with="gra" data-ends-with="pe" data-contains="rap">Grape</li>
            <li data-type="vegetable" data-colors="green" data-starts-with="bro" data-ends-with="li" data-contains="cco">Broccoli</li>
          </ul>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`${selectedSelector} {
  font-weight: bold;
  color: #007bff;
}`}
      </pre>
      <style>{`
        ${selectedSelector} {
          font-weight: bold;
          color: #007bff;
        }
      `}</style>
    </div>
  )
}

