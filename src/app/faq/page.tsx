"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is Markdown?",
    answer:
      "Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world's most popular markup languages.",
  },
  {
    question: "Which output formats does MDConvert Pro support?",
    answer:
      "Currently, MDConvert Pro supports conversion to HTML, plain text (TXT), JSON, and preserving the original Markdown format. We're constantly working on adding more output formats to meet our users' needs.",
  },
  {
    question: "Is my content safe when using MDConvert Pro?",
    answer:
      "We take your privacy seriously. All conversions happen client-side in your browser, which means your content never leaves your device. We don't store any of your data on our servers.",
  },
  {
    question: "Can I use MDConvert Pro offline?",
    answer:
      "Yes, once you've loaded the MDConvert Pro website, you can use it offline. This makes it perfect for when you're working without an internet connection.",
  },
  {
    question: "Is MDConvert Pro free to use?",
    answer:
      "Yes, MDConvert Pro is completely free to use for all its current features. We may introduce premium features in the future, but we're committed to always offering a robust free tier.",
  },
  {
    question: "How often is MDConvert Pro updated?",
    answer:
      "We strive to update MDConvert Pro regularly with new features, improvements, and bug fixes. We listen closely to user feedback and often implement suggested features.",
  },
]

export default function FAQ() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold p-4 bg-card rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-muted rounded-lg">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

