import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BasicSelectorsDemo from "@/component/Css/Selector/basic-selectors-demo"
import CombinatorSelectorsDemo from "@/component/Css/Selector/combinator-selectors-demo"
import PseudoClassSelectorsDemo from "@/component/Css/Selector/pseudo-class-selectors-demo"
import PseudoElementSelectorsDemo from "@/component/Css/Selector/pseudo-element-selectors-demo"
import AttributeSelectorsDemo from "@/component/Css/Selector/attribute-selectors-demo"

export default function Selector() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">CSS Selector Master</h1>
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="basic">Basic</TabsTrigger>
          <TabsTrigger value="combinator">Combinator</TabsTrigger>
          <TabsTrigger value="pseudo-class">Pseudo-class</TabsTrigger>
          <TabsTrigger value="pseudo-element">Pseudo-element</TabsTrigger>
          <TabsTrigger value="attribute">Attribute</TabsTrigger>
        </TabsList>
        <TabsContent value="basic">
          <BasicSelectorsDemo />
        </TabsContent>
        <TabsContent value="combinator">
          <CombinatorSelectorsDemo />
        </TabsContent>
        <TabsContent value="pseudo-class">
          <PseudoClassSelectorsDemo />
        </TabsContent>
        <TabsContent value="pseudo-element">
          <PseudoElementSelectorsDemo />
        </TabsContent>
        <TabsContent value="attribute">
          <AttributeSelectorsDemo />
        </TabsContent>
      </Tabs>
    </div>
  )
}

