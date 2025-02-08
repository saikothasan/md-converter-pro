"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"
import { toast } from "@/hooks/use-toast"
import { Download, RefreshCw } from "lucide-react"

type ConversionFormat = "html" | "txt" | "md" | "json"

export default function ConverterSection() {
  const [markdown, setMarkdown] = useState("")
  const [convertedContent, setConvertedContent] = useState("")
  const [format, setFormat] = useState<ConversionFormat>("html")
  const [isLoading, setIsLoading] = useState(false)

  const handleConvert = async () => {
    if (!markdown.trim()) {
      toast({
        title: "Error",
        description: "Please enter some Markdown content.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ markdown, format }),
      })

      if (!response.ok) {
        throw new Error("Conversion failed")
      }

      const data = await response.json()
      setConvertedContent(data.convertedContent)
      toast({
        title: "Success",
        description: "Markdown converted successfully!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to convert Markdown. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = () => {
    const blob = new Blob([convertedContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `converted.${format}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardContent className="p-4">
          <Label htmlFor="markdown-input" className="text-lg font-semibold mb-2">
            Markdown Input
          </Label>
          <Textarea
            id="markdown-input"
            placeholder="Enter your markdown here..."
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="h-[400px] mb-4"
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <Label htmlFor="converted-output" className="text-lg font-semibold mb-2">
            Converted Output
          </Label>
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="mb-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="raw">Raw</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="h-[400px] overflow-auto border rounded-md p-4">
              {format === "html" ? (
                <div dangerouslySetInnerHTML={{ __html: convertedContent }} />
              ) : format === "md" ? (
                <ReactMarkdown>{convertedContent}</ReactMarkdown>
              ) : (
                <SyntaxHighlighter language={format} style={tomorrow}>
                  {convertedContent}
                </SyntaxHighlighter>
              )}
            </TabsContent>
            <TabsContent value="raw">
              <Textarea id="converted-output" value={convertedContent} readOnly className="h-[400px]" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="md:col-span-2 flex items-center space-x-4 mt-4">
        <Select value={format} onValueChange={(value: ConversionFormat) => setFormat(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select format" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="txt">TXT</SelectItem>
            <SelectItem value="md">Markdown</SelectItem>
            <SelectItem value="json">JSON</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleConvert} disabled={isLoading}>
          {isLoading ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : null}
          Convert
        </Button>
        <Button onClick={handleDownload} disabled={!convertedContent || isLoading}>
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </div>
    </div>
  )
}

