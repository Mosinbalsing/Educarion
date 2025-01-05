import { Routes, Route ,Link} from "react-router-dom";
import Flex from "./cSS/Flex";
import Grid from "./cSS/Grid";
import Position from "./cSS/Position";



import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, FileCode2, Layers, Layout, Palette } from 'lucide-react'


export  function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">CSS Master</h1>
        <p className="text-xl text-gray-600">Your journey to CSS mastery starts here</p>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">CSS Version Timeline</h2>
        <div className="space-y-6">
          {cssVersions.map((version, index) => (
            <Card key={index} className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
              <CardHeader>
                <CardTitle>{version.name}</CardTitle>
                <CardDescription>{version.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{version.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Key CSS Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cssTopics.map((topic, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {topic.icon}
                  <span className="ml-2">{topic.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{topic.description}</p>
              </CardContent>
              <div className="p-4 mt-auto">
                <Button asChild>
                  <Link to={topic.link}>Learn More</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{resource.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{resource.description}</p>
                <Button variant="outline" className="mt-4" asChild>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">Visit Resource</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

const cssVersions = [
  {
    name: "CSS 1",
    date: "December 17, 1996",
    description: "The first CSS specification to become an official W3C Recommendation."
  },
  {
    name: "CSS 2",
    date: "May 12, 1998",
    description: "Added support for media-specific style sheets and new positioning techniques."
  },
  {
    name: "CSS 3",
    date: "June 13, 2011 (Selectors Level 3)",
    description: "Divided into independent modules. Introduced advanced selectors, box-shadow, border-radius, and more."
  },
  {
    name: "CSS 4",
    date: "Ongoing",
    description: "Not a single specification, but a collection of separate modules in various stages of completion."
  }
]

const cssTopics = [
  {
    name: "Selectors",
    icon: <Code className="w-6 h-6" />,
    description: "Learn how to target HTML elements with precision using CSS selectors.",
    link: "/topics/selectors"
  },
  {
    name: "Box Model",
    icon: <Layout className="w-6 h-6" />,
    description: "Understand the fundamental concept of how elements are rendered in CSS.",
    link: "/topics/box-model"
  },
  {
    name: "Flexbox",
    icon: <Layers className="w-6 h-6" />,
    description: "Master the flexible box layout for efficient alignment and distribution of space.",
    link: "/topics/flexbox"
  },
  {
    name: "Grid",
    icon: <FileCode2 className="w-6 h-6" />,
    description: "Create complex, responsive layouts with CSS Grid.",
    link: "/topics/grid"
  },
  {
    name: "Animations",
    icon: <Palette className="w-6 h-6" />,
    description: "Bring your web pages to life with CSS animations and transitions.",
    link: "/topics/animations"
  },
  {
    name: "Responsive Design",
    icon: <BookOpen className="w-6 h-6" />,
    description: "Learn techniques for creating websites that work well on all devices.",
    link: "/topics/responsive-design"
  }
]

const resources = [
  {
    name: "MDN Web Docs",
    description: "Comprehensive and up-to-date documentation for CSS and web technologies.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    name: "CSS-Tricks",
    description: "A website dedicated to teaching all things web design and development.",
    link: "https://css-tricks.com/"
  },
  {
    name: "W3C CSS Specifications",
    description: "Official CSS specifications from the World Wide Web Consortium.",
    link: "https://www.w3.org/Style/CSS/specs.en.html"
  },
  {
    name: "Can I use...",
    description: "Up-to-date browser support tables for front-end web technologies.",
    link: "https://caniuse.com/"
  }
]







function Css() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/grid" element={<Grid />} />
      <Route path="/flex" element={<Flex />} />
      <Route path="/position" element={<Position />} />
    </Routes>
  );
}

export default Css;
