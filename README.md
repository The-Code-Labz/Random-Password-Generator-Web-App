# 🔐 Secure Password Generator

A modern, secure web-based password generator with real-time strength indicators and a professional security-focused interface.

![Password Generator](https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)

## ✨ Features

- **🎲 Cryptographically Secure Generation** - Uses browser's crypto API for true randomness
- **💪 Real-time Strength Indicator** - Visual feedback showing password strength (Weak → Medium → Strong)
- **🎨 Modern UI Design** - Glassmorphism effects with dark theme and purple/blue security aesthetics
- **⚡ Instant Generation** - Auto-regenerates password when options change
- **📋 One-Click Copy** - Copy passwords to clipboard with animated feedback
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **♿ Accessible** - WCAG 2.1 AA compliant with keyboard navigation support

## 🛠️ Customization Options

- **Password Length**: Adjustable from 8 to 64 characters
- **Character Sets**:
  - Uppercase Letters (A-Z)
  - Lowercase Letters (a-z)
  - Numbers (0-9)
  - Special Characters (!@#$%^&*()_+-=[]{}|;:,.<>?)

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm installed on your machine
- Git (optional, for cloning)

### Local Development

1. **Clone the repository** (or download ZIP):
```bash
git clone https://github.com/yourusername/random-password-generator.git
cd random-password-generator
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

4. **Open in browser**:
Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📦 Deployment

### Deploy to Netlify

#### Option 1: Netlify CLI (Recommended)

1. **Install Netlify CLI** (if not already installed):
```bash
npm install -g netlify-cli
```

2. **Build the project**:
```bash
npm run build
```

3. **Deploy to Netlify**:
```bash
netlify deploy --prod --dir=dist
```

4. Follow the prompts to link to your Netlify account.

#### Option 2: Drag & Drop

1. Build the project: `npm run build`
2. Visit [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder to the browser window
4. Your app is instantly deployed!

#### Option 3: Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Deploy to Vercel

#### Option 1: Vercel CLI

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. Follow the prompts (accept defaults for Vite project)

#### Option 2: Git Integration

1. Push code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

### Deploy to GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json scripts**:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js** (add base path):
```javascript
export default defineConfig({
  base: '/random-password-generator/',
  // ... rest of config
})
```

4. **Deploy**:
```bash
npm run deploy
```

5. Enable GitHub Pages in repository settings (source: gh-pages branch)

### Deploy to Cloudflare Pages

1. **Build locally**:
```bash
npm run build
```

2. **Using Wrangler CLI**:
```bash
npm install -g wrangler
wrangler pages deploy dist
```

Or:

1. Visit [Cloudflare Pages](https://pages.cloudflare.com)
2. Connect GitHub repository
3. Configure build:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy

### Deploy to Surge.sh

1. **Install Surge**:
```bash
npm install -g surge
```

2. **Build and deploy**:
```bash
npm run build
cd dist
surge
```

3. Choose a domain or use suggested one

### Deploy to Render

1. Create `render.yaml` in project root:
```yaml
services:
  - type: web
    name: password-generator
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
    headers:
      - path: /*
        name: X-Frame-Options
        value: SAMEORIGIN
```

2. Push to GitHub
3. Connect repository on [Render](https://render.com)
4. Deploy

## 🔧 Configuration

### Environment Variables

No environment variables required for basic functionality.

### Customization

To customize the design, modify:
- `style.css` - All styling and theme colors
- `main.js` - Password generation logic and UI interactions
- `passwordGenerator.js` - Core generation algorithm

### Security Headers (Production)

For production deployments, ensure these headers are set:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Content-Security-Policy: default-src 'self'
```

## 📁 Project Structure

```
random-password-generator/
├── dist/                # Production build (generated)
├── node_modules/        # Dependencies (generated)
├── public/             # Static assets
│   └── vite.svg       # Favicon
├── index.html          # Main HTML file
├── main.js            # Application logic
├── passwordGenerator.js # Password generation module
├── style.css          # Styles and animations
├── vite.config.js     # Vite configuration
├── package.json       # Project dependencies
└── README.md         # Documentation
```

## 🧪 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## 🔒 Security

- Uses `crypto.getRandomValues()` for cryptographically secure random generation
- No passwords are stored or transmitted
- All generation happens client-side
- No analytics or tracking
- No external dependencies for core functionality

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💡 Future Enhancements

- [ ] Password history (local storage)
- [ ] Pronounceable passwords option
- [ ] Passphrase generation
- [ ] Export passwords as encrypted file
- [ ] PWA support with offline functionality
- [ ] Multiple language support
- [ ] Bulk password generation
- [ ] Password entropy calculator

## 🐛 Known Issues

None currently. Please report issues on GitHub.

## 📧 Support

For support, please open an issue on GitHub or contact the maintainers.

---

Built with ❤️ using [Vite](https://vitejs.dev/) and vanilla JavaScript
