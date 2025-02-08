import Image from "next/image"

export default function About() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-10">About MDConvert Pro</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              MDConvert Pro was born out of a passion for simplifying the workflow of developers and writers who work
              with Markdown on a daily basis. Our team of dedicated developers and designers have created a tool that
              not only converts Markdown efficiently but also provides a seamless user experience.
            </p>
            <p className="text-lg mb-6">
              We believe in the power of open-source and continually strive to improve our tool based on community
              feedback. Our mission is to make Markdown conversion accessible, fast, and enjoyable for everyone, from
              individual bloggers to large development teams.
            </p>
            <p className="text-lg">
              Thank you for choosing MDConvert Pro. We're excited to be part of your content creation journey!
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg"
              alt="MDConvert Pro Team"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

