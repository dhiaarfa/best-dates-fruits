# Best Dates & Fruits Website

A modern, multilingual website for Best Dates & Fruits, showcasing premium Tunisian dates and date products.

## Features

- 🌍 **Multilingual Support**: English, French, and Arabic
- 📱 **Responsive Design**: Optimized for all devices
- 🛒 **E-commerce Ready**: Shopping cart and product catalog
- 🎨 **Modern UI**: Built with Next.js, TypeScript, and Tailwind CSS
- 🔍 **Search Functionality**: Product search with filtering
- 📧 **Contact Forms**: Newsletter subscription and contact forms
- 🌙 **Dark Mode**: Toggle between light and dark themes
- ♿ **Accessible**: WCAG compliant design

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter, Crimson Text, Playfair Display

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/best-dates-fruits-website.git
cd best-dates-fruits-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── products/         # Products page
│   ├── pastries/         # Pastries page
│   ├── contact/          # Contact page
│   └── search/           # Search page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation component
│   ├── footer.tsx        # Footer component
│   └── ...               # Other components
├── lib/                  # Utility functions
│   ├── translations.ts   # Translation system
│   └── utils.ts         # Utility functions
├── public/               # Static assets
│   └── images/          # Image assets
└── hooks/               # Custom React hooks
\`\`\`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project is compatible with any platform that supports Next.js:

- **Netlify**: Use \`npm run build\` and deploy the \`out\` folder
- **AWS Amplify**: Connect your GitHub repository
- **Railway**: Deploy directly from GitHub
- **DigitalOcean App Platform**: Use the GitHub integration

### Environment Variables

No environment variables are required for basic functionality. For production, you may want to add:

\`\`\`env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
\`\`\`

## Customization

### Adding New Languages

1. Update the \`Language\` type in \`lib/translations.ts\`
2. Add translations for all keys
3. Update the language selector in the navbar

### Modifying Colors

Update the color scheme in \`tailwind.config.ts\`:

\`\`\`typescript
colors: {
  bestdatesandfruits: {
    gold: "#D4AF37",
    darkgold: "#B8941F",
    // ... other colors
  }
}
\`\`\`

### Adding New Pages

1. Create a new directory in \`app/\`
2. Add \`page.tsx\` and \`layout.tsx\` if needed
3. Update navigation in \`components/navbar.tsx\`

## Contributing

1. Fork the repository
2. Create a feature branch: \`git checkout -b feature-name\`
3. Commit your changes: \`git commit -m 'Add feature'\`
4. Push to the branch: \`git push origin feature-name\`
5. Submit a pull request

## License

This project is proprietary and belongs to Best Dates & Fruits.

## Support

For support, email direction@best-dattes-and-fruits.com or visit our contact page.
"# bdf" 
