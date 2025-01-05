import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function GridAreaDemo() {
  const [gridTemplate, setGridTemplate] = useState(`
    "header header header"
    "sidebar main main"
    "footer footer footer"
  `)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Grid Area</h2>
      <div>
        <Label htmlFor="grid-template">Grid Template Areas</Label>
        <Input
          id="grid-template"
          value={gridTemplate}
          onChange={(e) => setGridTemplate(e.target.value)}
          className="font-mono"
        />
      </div>
      <Card className="p-4">
        <div
          className="grid gap-2 p-4 bg-gray-100 rounded"
          style={{
            gridTemplateAreas: gridTemplate,
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "auto auto auto",
          }}
        >
          <div className="bg-purple-500 rounded flex items-center justify-center text-white p-2" style={{ gridArea: "header" }}>
            Header
          </div>
          <div className="bg-blue-500 rounded flex items-center justify-center text-white p-2" style={{ gridArea: "sidebar" }}>
            Sidebar
          </div>
          <div className="bg-green-500 rounded flex items-center justify-center text-white p-2" style={{ gridArea: "main" }}>
            Main Content
          </div>
          <div className="bg-yellow-500 rounded flex items-center justify-center text-white p-2" style={{ gridArea: "footer" }}>
            Footer
          </div>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
${gridTemplate};
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
`}
      </pre>
    </div>
  )
}

