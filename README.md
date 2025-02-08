# MD Converter Pro

A professional Markdown converter built with Next.js that transforms Markdown into various formats including HTML, TXT, and JSON.

Live Demo: [MD Converter Pro](https://md-converter-pro.pages.dev/)
Repository: [GitHub](https://github.com/saikothasan/md-converter-pro)

## Features

- 🚀 Lightning-fast Markdown conversion
- 💻 Multiple output formats (HTML, TXT, JSON)
- 🎨 Beautiful syntax highlighting
- 👁️ Live preview mode
- 🌓 Dark/Light theme support
- 📱 Fully responsive design
- ⚡ Edge Runtime for optimal performance
- 💾 Download converted content
- 🔒 Client-side conversion for privacy

## Technologies Used

- Next.js 13+ with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Unified.js ecosystem (remark, rehype)
- Edge Runtime
- React Markdown
- Syntax Highlighter

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/saikothasan/md-converter-pro.git
cd md-converter-pro
```

Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Enter or paste your Markdown content in the input area
2. Select your desired output format (HTML, TXT, JSON)
3. Click "Convert" to transform your Markdown
4. Use the preview/raw tabs to view the output
5. Click "Download" to save the converted content

## Project Structure

```
md-converter-pro/
├── app/
│   ├── api/
│   │   └── convert/
│   │       └── route.ts
│   ├── about/
│   │   └── page.tsx
│   ├── features/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── converter-section.tsx
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── theme-provider.tsx
└── public/
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

Join our Telegram channel for support and updates: [https://t.me/drkingbd](https://t.me/drkingbd)

## Author

- [@saikothasan](https://github.com/saikothasan)

## Acknowledgments

- Thanks to the Next.js team for the amazing framework
- Thanks to the shadcn/ui team for the beautiful components
- Thanks to the Unified.js team for the Markdown processing tools
