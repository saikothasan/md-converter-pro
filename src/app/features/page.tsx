import { CheckCircle } from "lucide-react"

export default function Features() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-10">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Multiple Output Formats"
            description="Convert Markdown to HTML, JSON, plain text, and more."
          />
          <FeatureCard
            title="Syntax Highlighting"
            description="Beautiful code highlighting for various programming languages."
          />
          <FeatureCard title="Live Preview" description="See your converted content in real-time as you type." />
          <FeatureCard
            title="Customizable Themes"
            description="Choose between light and dark modes for comfortable viewing."
          />
          <FeatureCard
            title="Responsive Design"
            description="Use MDConvert Pro on any device, from desktop to mobile."
          />
          <FeatureCard title="Fast and Efficient" description="Lightning-fast conversions, even for large documents." />
          <FeatureCard title="Offline Support" description="Convert your Markdown without an internet connection." />
          <FeatureCard
            title="Export and Download"
            description="Easily download your converted content in your chosen format."
          />
          <FeatureCard title="Regular Updates" description="We're constantly adding new features and improvements." />
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-card p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <CheckCircle className="text-green-500 mr-2" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-muted-foreground">{description}</p>
  </div>
)

