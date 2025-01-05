import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AlignItemsDemo from "@/component/Css/Flex/align-items-demo"
import FlexDirectionDemo from "@/component/Css/Flex/flex-direction-demo"
import FlexWrapDemo from "@/component/Css/Flex/flex-wrap-demo"
import JustifyContentDemo from "@/component/Css/Flex/justify-content-demo"

export default function Flex() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">CSS Flex Master</h1>
        <Tabs defaultValue="flex-direction" className="w-full ">
          <TabsList className="grid w-full grid-cols-4 bg-[#F3F4F6]">
            <TabsTrigger value="flex-direction">Flex Direction</TabsTrigger>
            <TabsTrigger value="flex-wrap">Flex Wrap</TabsTrigger>
            <TabsTrigger value="justify-content">Justify Content</TabsTrigger>
            <TabsTrigger value="align-items">Align Items</TabsTrigger>
          </TabsList>
          <TabsContent value="flex-direction">
            <FlexDirectionDemo />
          </TabsContent>
          <TabsContent value="flex-wrap">
            <FlexWrapDemo />
          </TabsContent>
          <TabsContent value="justify-content">
            <JustifyContentDemo />
          </TabsContent>
          <TabsContent value="align-items">
            <AlignItemsDemo />
          </TabsContent>
        </Tabs>
      </div>
    )
  }
  