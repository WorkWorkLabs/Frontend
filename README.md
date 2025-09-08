# WorkWork Landing Page Template

A modern, fully-featured Vue 3 + TypeScript landing page template with complete component architecture and extensibility.

## 🚀 Features

### Architecture
- **Vue 3** with Composition API & `<script setup>`
- **TypeScript** for type safety
- **Pinia** for state management
- **Vue Router** for routing
- **Vite** for fast development and building

### Components
- **Modular Architecture**: Fully componentized with clear separation
- **Base Components**: Reusable UI components (Button, Input, Card)
- **Layout Components**: Header, Footer with responsive navigation
- **Section Components**: Hero, Features, Products, Team, Stats, Newsletter
- **Form Handling**: Built-in validation with Composables

### Features
- ✅ **Fully Responsive** - Mobile-first design
- ✅ **TypeScript** - Complete type safety
- ✅ **State Management** - Pinia stores for content and app state  
- ✅ **Form Validation** - Real-time validation with custom composables
- ✅ **Smooth Animations** - CSS transitions and keyframes
- ✅ **SEO Optimized** - Meta tags, structured data
- ✅ **Performance** - Code splitting, lazy loading
- ✅ **Accessibility** - ARIA labels, keyboard navigation
- ✅ **Modern CSS** - CSS Grid, Flexbox, custom properties

## 📁 Project Structure

```
src/
├── components/
│   ├── base/           # Reusable UI components
│   │   ├── BaseButton.vue
│   │   ├── BaseInput.vue
│   │   └── BaseCard.vue
│   ├── forms/          # Form components
│   │   └── NewsletterForm.vue
│   ├── layout/         # Layout components
│   │   ├── AppHeader.vue
│   │   └── AppFooter.vue
│   └── sections/       # Page sections
│       ├── HeroSection.vue
│       ├── FeaturesSection.vue
│       ├── ProductsSection.vue
│       ├── TeamSection.vue
│       └── StatsSection.vue
├── composables/        # Vue composables
│   └── useFormValidation.ts
├── stores/            # Pinia stores
│   ├── app.ts
│   └── content.ts
├── types/             # TypeScript types
│   └── index.ts
├── views/             # Page views
│   └── HomeView.vue
├── router/            # Vue Router
│   └── index.ts
├── App.vue
└── main.ts
```

## 🛠 Development

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev         # Start dev server
npm run build       # Build for production
npm run preview     # Preview production build
npm run type-check  # TypeScript type checking
npm run lint        # Lint with ESLint
npm run format      # Format with Prettier
```

## 🎨 Customization

### Content Management
All content is managed through Pinia stores:
- **`stores/content.ts`** - Page content, navigation, team data
- **`stores/app.ts`** - App configuration, UI state

### Styling
- CSS-in-Vue with scoped styles
- Custom CSS properties for theming
- Responsive design with mobile-first approach

### Component Extension
1. Create new components in appropriate folders
2. Follow existing patterns for props/events
3. Use TypeScript interfaces from `types/index.ts`
4. Add to content store if needed

## 🔧 Configuration

### Environment Variables
Create `.env` file from `.env.example`:
- `VITE_APP_TITLE` - Application title
- `VITE_API_URL` - API endpoint
- `VITE_GA_ID` - Google Analytics ID

### Build Configuration
- **Vite config**: `vite.config.ts`
- **TypeScript**: `tsconfig.json`
- **Path aliases**: `@/*` maps to `src/*`

## 📱 Responsive Design

Breakpoints:
- `xs`: < 640px
- `sm`: 640px+  
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+
- `2xl`: 1536px+

## 🚀 Deployment

### Build
```bash
npm run build
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

### Deploy to Netlify
1. Connect your repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

## 📊 Performance

- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Images and fonts optimized
- **Lazy Loading**: Components loaded on demand

## 🎯 SEO Features

- Meta tags with dynamic content
- Structured data (JSON-LD)
- Semantic HTML
- Open Graph tags
- Twitter Card support
- Canonical URLs

## 🧪 Testing (Optional)

Add testing framework:
```bash
# Vitest + Testing Library
npm i -D vitest @vue/test-utils jsdom
npm i -D @testing-library/vue @testing-library/jest-dom
```

## 📝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Support

- Create an issue for bugs/features
- Star the repo if it helps you!
- Contribute back improvements

---

**Built with ❤️ using Vue 3 + TypeScript**