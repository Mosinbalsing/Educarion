"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const pseudoElementSelectors = [
  { name: "::before", value: "p::before" },
  { name: "::after", value: "p::after" },
  { name: "::first-letter", value: "p::first-letter" },
  { name: "::first-line", value: "p::first-line" },
  { name: "::selection", value: "p::selection" },
]

export default function PseudoElementSelectorsDemo() {
  const [selectedSelector, setSelectedSelector] = useState(pseudoElementSelectors[0].value)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Pseudo-element Selectors</h2>
      <p className="text-gray-600">
        Pseudo-element selectors allow you to style specific parts of an element.
      </p>
      <Select onValueChange={setSelectedSelector} defaultValue={selectedSelector}>
        <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Select a pseudo-element" />
        </SelectTrigger>
        <SelectContent>
          {pseudoElementSelectors.map((selector) => (
            <SelectItem key={selector.value} value={selector.value}>
              {selector.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Card className="p-4">
        <div className="bg-gray-100 p-4 rounded">
          <p className="mb-2">
            This is a paragraph with some text. It demonstrates various pseudo-element selectors.
            You can select this text to see the ::selection pseudo-element in action.
          </p>
          <p>
            This is another paragraph to show how pseudo-elements work on multiple elements.
          </p>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`${selectedSelector} {
  content: "★";
  color: red;
  font-weight: bold;
}`}
      </pre>
      <style >{`
        ${selectedSelector === "p::before" || selectedSelector === "p::after" ? `
          ${selectedSelector} {
            content: "★";
            color: red;
            font-weight: bold;
          }
        ` : selectedSelector === "p::first-letter" ? `
          ${selectedSelector} {
            font-size: 2em;
            font-weight: bold;
            color: red;
          }
        ` : selectedSelector === "p::first-line" ? `
          ${selectedSelector} {
            font-weight: bold;
            color: blue;
          }
        ` : selectedSelector === "p::selection" ? `
          ${selectedSelector} {
            background-color: yellow;
            color: black;
          }
        ` : ""}
      `}</style>
    </div>
  )
}

