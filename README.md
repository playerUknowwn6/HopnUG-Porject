# HOPn UG University Website

A modern, multilingual university website built with Next.js, featuring a comprehensive application system, student portal, and administrative capabilities.

## 🌟 Features

- **Multilingual Support**: English, German, and Arabic
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Multi-step Application Form**: Complete with file uploads and validation
- **Student Portal**: Dashboard with authentication and profile management
- **SEO Optimized**: Structured data, sitemap, and accessibility features
- **Legal Compliance**: GDPR-compliant cookie consent and legal pages
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS v4

## 📁 Project Structure

\`\`\`
hopn-university/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── apply/                    # Multi-step application form
│   ├── legal/                    # Legal pages (privacy, terms, impressum)
│   ├── programs/                 # Programs listing and details
│   │   └── [id]/                 # Dynamic program detail pages
│   ├── student-portal/           # Student dashboard and authentication
│   ├── layout.tsx                # Root layout with metadata
│   ├── ClientLayout.tsx          # Client-side layout wrapper
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles and design tokens
│   ├── sitemap.ts                # Dynamic sitemap generation
│   └── robots.ts                 # SEO robots configuration
├── components/                   # Reusable React components
│   ├── accessibility/            # Accessibility components
│   │   ├── focus-trap.tsx
│   │   └── skip-link.tsx
│   ├── application/              # Application form steps
│   │   ├── personal-info-step.tsx
│   │   ├── education-step.tsx
│   │   ├── documents-step.tsx
│   │   ├── motivation-step.tsx
│   │   ├── confirmation-step.tsx
│   │   └── success-step.tsx
│   ├── student-portal/           # Student portal components
│   │   ├── login-form.tsx
│   │   ├── dashboard.tsx
│   │   └── profile-settings.tsx
│   ├── ui/                       # shadcn/ui components
│   ├── cookie-consent.tsx        # GDPR cookie consent
│   ├── footer.tsx                # Site footer
│   ├── navigation.tsx            # Main navigation
│   ├── program-card.tsx          # Program display component
│   └── structured-data.tsx       # SEO structured data
├── data/                         # JSON data files
│   ├── programs.json             # University programs data
│   ├── testimonials.json         # Student testimonials
│   └── faculty.json              # Faculty information
├── hooks/                        # Custom React hooks
│   ├── use-language.ts           # Language switching
│   └── use-translations.ts       # Translation management
├── lib/                          # Utility functions
│   ├── i18n.ts                   # Internationalization setup
│   └── utils.ts                  # General utilities
├── locales/                      # Translation files
│   ├── en.json                   # English translations
│   ├── de.json                   # German translations
│   └── ar.json                   # Arabic translations
└── public/                       # Static assets
    └── diverse-university-campus.png
\`\`\`

## 🚀 Installation Guide

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm package manager

### Setup Instructions

1. **Clone or download the project**
   \`\`\`bash
   # If using Git
   git clone <repository-url>
   cd hopn-university
   
   # Or extract the downloaded ZIP file
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
# Build the application
npm run build

# Start production server
npm start
\`\`\`

## 📚 Managing Programs

### Adding New Programs

To add a new program to the university website:

1. **Open the programs data file**
   \`\`\`
   data/programs.json
   \`\`\`

2. **Add a new program object** with the following structure:
   \`\`\`json
   {
     "id": "unique-program-id",
     "title": "Program Title",
     "description": "Detailed program description",
     "level": "bachelor|master|certificate",
     "duration": "Program duration (e.g., '3 years', '18 months')",
     "language": ["English", "German", "Arabic"],
     "mode": "online|hybrid|on-campus",
     "tuition": "Cost information (e.g., '€12,000/year')",
     "startDate": "Start date information",
     "ects": 180,
     "requirements": [
       "List of admission requirements",
       "Each requirement as a separate string"
     ],
     "outcomes": [
       "Learning outcomes",
       "What students will achieve"
     ]
   }
   \`\`\`

3. **Program ID Guidelines**
   - Use lowercase letters and hyphens
   - Make it descriptive and unique
   - Examples: `computer-science-bachelor`, `business-administration-master`

4. **Required Fields**
   - `id`: Unique identifier (used for URLs)
   - `title`: Display name of the program
   - `description`: Detailed description for the program
   - `level`: One of "bachelor", "master", or "certificate"
   - `duration`: How long the program takes
   - `language`: Array of supported languages
   - `mode`: Delivery method
   - `tuition`: Cost information
   - `startDate`: When the program begins
   - `ects`: European Credit Transfer System points
   - `requirements`: Array of admission requirements
   - `outcomes`: Array of learning outcomes

### Editing Existing Programs

1. **Find the program** in `data/programs.json` by its `id`
2. **Update any field** except the `id` (changing ID breaks existing links)
3. **Save the file** - changes will appear immediately in development

### Program Display

Programs automatically appear in:
- **Homepage**: First 3 programs as "Featured Programs"
- **Programs Page**: All programs with filtering by level, mode, and language
- **Individual Pages**: Each program gets its own detail page at `/programs/[id]`

### Program Filtering

The programs page includes automatic filtering by:
- **Level**: Bachelor, Master, Certificate
- **Mode**: Online, Hybrid, On-campus
- **Language**: English, German, Arabic

## 🌐 Multilingual Content

### Adding Translations

1. **Navigate to the locales folder**
   \`\`\`
   locales/
   ├── en.json    # English
   ├── de.json    # German
   └── ar.json    # Arabic
   \`\`\`

2. **Add new translation keys** to all three files:
   \`\`\`json
   {
     "navigation": {
       "home": "Home",
       "about": "About",
       "programs": "Programs"
     }
   }
   \`\`\`

3. **Use translations in components**:
   \`\`\`tsx
   import { useTranslations } from '@/hooks/use-translations'
   
   function MyComponent() {
     const t = useTranslations()
     return <h1>{t('navigation.home')}</h1>
   }
   \`\`\`

## 🎨 Customization

### Design Tokens

Update the design system in `app/globals.css`:

\`\`\`css
:root {
  --primary: oklch(0.2 0 0);        /* Main brand color */
  --secondary: oklch(0.65 0.15 280); /* Accent color */
  --background: oklch(1 0 0);        /* Background color */
  /* ... other tokens */
}
\`\`\`

### Adding New Pages

1. **Create a new folder** in the `app/` directory
2. **Add a `page.tsx` file** with your component
3. **Update navigation** in `components/navigation.tsx`

### Student Portal

The student portal uses demo credentials:
- **Email**: `student@hopn-university.com`
- **Password**: `password123`

To integrate with a real authentication system, update the login logic in `components/student-portal/login-form.tsx`.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Dependencies

- **Next.js 15** - React framework
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **TypeScript** - Type safety

## 📞 Support

For technical support or questions about the codebase:

1. Check the component documentation in the code
2. Review the existing implementations for examples
3. Ensure all required fields are provided when adding new content

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. **Push to GitHub** (if using Git)
2. **Connect to Vercel** and deploy
3. **Configure environment variables** if needed
4. **Set up custom domain** in Vercel dashboard

The site includes automatic sitemap generation, SEO optimization, and performance enhancements for production deployment.