import { Card } from "@/components/ui/card"

export default function StaticDemo() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Static Position</h2>
      <p className="text-gray-600">
        The default position value. Elements are positioned according to the normal flow of the document.
      </p>
      <Card className="p-4">
        <div className="bg-gray-100 p-4 rounded">
          <div className="bg-blue-500 text-white p-2 mb-2">Element 1</div>
          <div className="bg-green-500 text-white p-2 mb-2">Element 2</div>
          <div className="bg-red-500 text-white p-2">Element 3</div>
        </div>
      </Card>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`.element {
  position: static;
}`}
      </pre>
    </div>
  )
}

