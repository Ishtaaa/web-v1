# Ishta's Portfolio Website

A modern, responsive portfolio website built with SvelteKit, showcasing my skills and projects as a Computer Science student and aspiring Software Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional design with Tailwind CSS
- **Responsive**: Mobile-first approach with excellent mobile experience
- **SEO Optimized**: Comprehensive SEO implementation with meta tags, Open Graph, and structured data
- **Performance**: Fast loading with optimized assets and lazy loading
- **Accessibility**: WCAG compliant with proper semantic HTML
- **PWA Ready**: Web app manifest and service worker support

## 🛠️ Tech Stack

- **Frontend**: SvelteKit 5.0
- **Styling**: Tailwind CSS 4.0 + DaisyUI
- **Language**: TypeScript
- **Build Tool**: Vite
- **Deployment**: Netlify

## 📱 SEO Features

### Meta Tags
- Title, description, and keywords optimization
- Author and language specification
- Robots directives for search engine crawling

### Open Graph
- Social media sharing optimization
- Custom OG images for each page
- Twitter Card support

### Structured Data
- JSON-LD schema markup
- Person schema for portfolio
- Organization and educational background

### Technical SEO
- XML sitemap generation
- Robots.txt configuration
- Canonical URLs
- Performance optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/
│   │   └── SEO.svelte          # SEO component
│   ├── assets/
│   │   └── Header.svelte       # Header component
│   └── seo.ts                  # SEO configuration
├── routes/
│   ├── +layout.svelte          # Root layout
│   ├── +page.svelte            # Home page
│   ├── projects/
│   │   └── +page.svelte        # Projects page
│   ├── sitemap.xml/
│   │   └── +server.ts          # Sitemap generator
│   └── og-image/
│       └── +server.ts          # OG image generator
├── app.html                     # HTML template
└── app.css                     # Global styles
```

## 🔧 SEO Configuration

### 1. Update Domain
Edit `src/lib/seo.ts` and replace `https://yourdomain.com` with your actual domain.

### 2. Customize Meta Tags
Modify the `defaultSEO` object in `src/lib/seo.ts` to match your information.

### 3. Social Media
Update Twitter handle and other social media links in the SEO configuration.

### 4. Generate OG Images
Replace the placeholder OG image with your custom design or use the dynamic generator.

## 📊 Performance Optimization

- **Image Optimization**: Use WebP format and proper sizing
- **Lazy Loading**: Implement lazy loading for images and components
- **Code Splitting**: Automatic code splitting with SvelteKit
- **Caching**: Proper cache headers for static assets
- **Minification**: Automatic CSS and JS minification

## 🌐 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Environment Variables
Set the following in your deployment platform:
- `PUBLIC_SITE_URL`: Your website URL
- `PUBLIC_GA_ID`: Google Analytics ID (optional)

## 📈 Analytics & Monitoring

### Google Analytics
Add your GA4 tracking ID to the SEO configuration.

### Search Console
Submit your sitemap to Google Search Console:
```
https://yourdomain.com/sitemap.xml
```

## 🔍 SEO Checklist

- [x] Meta title and description for each page
- [x] Open Graph tags for social sharing
- [x] Twitter Card optimization
- [x] Structured data (JSON-LD)
- [x] XML sitemap
- [x] Robots.txt
- [x] Canonical URLs
- [x] Mobile optimization
- [x] Page speed optimization
- [x] Semantic HTML structure
- [x] Alt text for images
- [x] Internal linking strategy

## 📚 Resources

- [SvelteKit Documentation](https://kit.svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [SEO Best Practices](https://developers.google.com/search/docs)
- [Open Graph Protocol](https://ogp.me/)
- [Schema.org](https://schema.org/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Name**: Ishta
- **Email**: [Your Email]
- **GitHub**: [@Ishtaaa](https://github.com/Ishtaaa)
- **Portfolio**: [Your Website URL]

---

Built with ❤️ using SvelteKit and Tailwind CSS
