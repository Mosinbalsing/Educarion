import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StaticDemo from "@/component/Css/Position/static-demo"
import RelativeDemo from "@/component/Css/Position/relative-demo"
import AbsoluteDemo from "@/component/Css/Position/absolute-demo"
import FixedDemo from "@/component/Css/Position/fixed-demo"
import StickyDemo from "@/component/Css/Position/sticky-demo"

export default function Position() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">CSS Position Master</h1>
      <Tabs defaultValue="static" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="static">Static</TabsTrigger>
          <TabsTrigger value="relative">Relative</TabsTrigger>
          <TabsTrigger value="absolute">Absolute</TabsTrigger>
          <TabsTrigger value="fixed">Fixed</TabsTrigger>
          <TabsTrigger value="sticky">Sticky</TabsTrigger>
        </TabsList>
        <TabsContent value="static">
          <StaticDemo />
        </TabsContent>
        <TabsContent value="relative">
          <RelativeDemo />
        </TabsContent>
        <TabsContent value="absolute">
          <AbsoluteDemo />
        </TabsContent>
        <TabsContent value="fixed">
          <FixedDemo />
        </TabsContent>
        <TabsContent value="sticky">
          <StickyDemo />
        </TabsContent>
      </Tabs>
    </div>
  )
}

