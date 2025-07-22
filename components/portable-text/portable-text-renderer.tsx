import type { PortableTextBlock, PortableTextSpan } from "@/lib/portable-text-types"
import { cn } from "@/lib/utils"

interface PortableTextRendererProps {
  blocks: PortableTextBlock[]
  className?: string
}

export function PortableTextRenderer({ blocks, className }: PortableTextRendererProps) {
  const renderSpan = (span: PortableTextSpan) => {
    let content = span.text

    if (span.marks?.includes("strong")) {
      content = <strong key={span._key}>{content}</strong>
    }
    if (span.marks?.includes("em")) {
      content = <em key={span._key}>{content}</em>
    }
    if (span.marks?.includes("code")) {
      content = (
        <code key={span._key} className="bg-zinc-800 px-1 py-0.5 rounded text-sm font-mono">
          {content}
        </code>
      )
    }

    return content
  }

  const renderBlock = (block: PortableTextBlock, index: number) => {
    const text = block.children?.map(renderSpan) || []

    switch (block.style) {
      case "h1":
        return (
          <h1 key={index} className="text-3xl font-bold text-zinc-100 mb-6">
            {text}
          </h1>
        )
      case "h2":
        return (
          <h2 key={index} className="text-2xl font-bold text-zinc-100 mb-4 mt-8">
            {text}
          </h2>
        )
      case "h3":
        return (
          <h3 key={index} className="text-xl font-bold text-zinc-200 mb-3 mt-6">
            {text}
          </h3>
        )
      case "h4":
        return (
          <h4 key={index} className="text-lg font-semibold text-zinc-200 mb-2 mt-4">
            {text}
          </h4>
        )
      case "blockquote":
        return (
          <blockquote key={index} className="border-l-4 border-zinc-600 pl-4 italic text-zinc-300 my-4">
            {text}
          </blockquote>
        )
      case "normal":
        if (block.listItem === "bullet") {
          return (
            <li key={index} className="text-zinc-300 mb-2 ml-6 list-disc">
              {text}
            </li>
          )
        }
        if (block.listItem === "number") {
          return (
            <li key={index} className="text-zinc-300 mb-2 ml-6 list-decimal">
              {text}
            </li>
          )
        }
        return (
          <p key={index} className="text-zinc-300 mb-4 leading-relaxed">
            {text}
          </p>
        )
      default:
        return (
          <p key={index} className="text-zinc-300 mb-4 leading-relaxed">
            {text}
          </p>
        )
    }
  }

  return <div className={cn("prose prose-invert max-w-none", className)}>{blocks.map(renderBlock)}</div>
}
