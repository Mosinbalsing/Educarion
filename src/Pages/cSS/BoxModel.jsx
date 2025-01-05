import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContentDemo from "@/component/Css/BoxModel/content-demo"
import PaddingDemo from "@/component/Css/BoxModel/padding-demo"
import BorderDemo from "@/component/Css/BoxModel/border-demo"
import MarginDemo from "@/component/Css/BoxModel/margin-demo"
import BoxSizingDemo from "@/component/Css/BoxModel/box-sizing-demo"

export default function BoxModel() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">CSS Box Model Master</h1>
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="padding">Padding</TabsTrigger>
          <TabsTrigger value="border">Border</TabsTrigger>
          <TabsTrigger value="margin">Margin</TabsTrigger>
          <TabsTrigger value="box-sizing">Box Sizing</TabsTrigger>
        </TabsList>
        <TabsContent value="content">
          <ContentDemo />
        </TabsContent>
        <TabsContent value="padding">
          <PaddingDemo />
        </TabsContent>
        <TabsContent value="border">
          <BorderDemo />
        </TabsContent>
        <TabsContent value="margin">
          <MarginDemo />
        </TabsContent>
        <TabsContent value="box-sizing">
          <BoxSizingDemo />
        </TabsContent>
      </Tabs>
    </div>
  )
}

