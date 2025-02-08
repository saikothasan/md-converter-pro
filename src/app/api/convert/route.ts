import { NextResponse } from "next/server"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import remarkStringify from "remark-stringify"
import remarkGfm from "remark-gfm"

export const runtime = "edge"

type RequestBody = {
  markdown: string
  format: string
}

type ConversionResponse = {
  convertedContent: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()
  const { markdown, format } = body

  let convertedContent = ""

  try {
    switch (format) {
      case "html":
        convertedContent = String(
          await unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeStringify).process(markdown),
        )
        break
      case "txt":
        convertedContent = markdown // Plain text, no conversion needed
        break
      case "md":
        convertedContent = String(
          await unified().use(remarkParse).use(remarkGfm).use(remarkStringify).process(markdown),
        )
        break
      case "json":
        const jsonContent = {
          content: markdown,
          metadata: {
            wordCount: markdown.split(/\s+/).length,
            characterCount: markdown.length,
          },
        }
        convertedContent = JSON.stringify(jsonContent, null, 2)
        break
      default:
        throw new Error("Unsupported format")
    }

    return NextResponse.json({ convertedContent } as ConversionResponse)
  } catch (error) {
    console.error("Conversion error:", error)
    return NextResponse.json({ error: "Conversion failed" }, { status: 500 })
  }
}

