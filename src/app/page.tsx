import Link from "next/link"
import { Button } from "@/components/ui/button"
import ConverterSection from "@/components/converter-section"

export default function Home() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-r from-primary to-primary-foreground text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">Transform Your Markdown with Ease</h1>
            <p className="mt-6 text-xl">
              MDConvert Pro is the ultimate tool for developers and writers to convert Markdown to various formats
              instantly.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <Button asChild size="lg">
                <Link href="#converter">Try It Now</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="https://t.me/drkingbd" target="_blank" rel="noopener noreferrer">
                  Join Our Telegram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="converter" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Markdown Converter</h2>
          <ConverterSection />
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose MDConvert Pro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Lightning Fast"
              description="Convert your Markdown in milliseconds, no matter the size of your document."
            />
            <FeatureCard
              title="Multiple Formats"
              description="Export to HTML, JSON, and plain text with more formats coming soon."
            />
            <FeatureCard
              title="Secure & Private"
              description="Your content never leaves your browser. All conversions happen client-side."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-card p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
)

