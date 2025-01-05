import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GridTemplateDemo from "@/component/Css/Grid/grid-template-demo"
import GridGapDemo from "@/component/Css/Grid/grid-gap-demo"
import GridAlignDemo from "@/component/Css/Grid/grid-align-demo"
import GridAreaDemo from "@/component/Css/Grid/grid-area-demo"

export default function Grid() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">CSS Grid Master</h1>
      <Tabs defaultValue="grid-template" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="grid-template">Grid Template</TabsTrigger>
          <TabsTrigger value="grid-gap">Grid Gap</TabsTrigger>
          <TabsTrigger value="grid-align">Grid Align</TabsTrigger>
          <TabsTrigger value="grid-area">Grid Area</TabsTrigger>
        </TabsList>
        <TabsContent value="grid-template">
          <GridTemplateDemo />
        </TabsContent>
        <TabsContent value="grid-gap">
          <GridGapDemo />
        </TabsContent>
        <TabsContent value="grid-align">
          <GridAlignDemo />
        </TabsContent>
        <TabsContent value="grid-area">
          <GridAreaDemo />
        </TabsContent>
      </Tabs>
    </div>
  )
}

