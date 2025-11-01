# MHM Site - Figma to WordPress Development

Mile High Marketing website built from Figma designs using a 3-phase development workflow with comprehensive responsive testing.

## 🎨 **Design Source**
- **Figma URL**: https://www.figma.com/design/PPWpL0ccWjB0nSKRCDxDau/site?node-id=0-1&m=dev&t=uj69y0UNLIS1nKkf-1
- **Final URL**: milehighmarketing.dev
- **Hosting**: Siteground

## ✅ **Project Status: READY FOR PHASE 1**
All tooling configured, environment ready, Figma token sourced from `.env`

## 🚀 **3-Phase Development Workflow**

### **Phase 1: Design System & Homepage (CURRENT)**
```bash
# Extract Figma design system
npm run figma:extract

# Capture inspiration site screenshots  
npm run figma:inspiration

# Start responsive development environment
npm run dev  # Next.js :3000 + BrowserSync :3001

# Run responsive testing
npm run test:responsive
```

### **Phase 2: Complete Static Site & Staging**
```bash
# Build all static pages
npm run build

# Deploy to staging
npm run deploy:staging
```

### **Phase 3: WordPress Conversion & Production**
```bash
# Start Docker WordPress environment
npm run docker:wp  # WordPress :8080

# Use wp-cli for development
npm run wp:cli -- theme activate mhm-theme
```

## Project Structure
- `src/` - Source files (Sass, JS, images)
- `figma/` - Design files and extracted assets
- `html-prototypes/` - Static HTML implementations
- `wp-theme/` - WordPress theme files
- `tests/` - Playwright visual and E2E tests
- `docs/` - Project documentation

## Development Workflow
1. **Figma Analysis** - Extract design system and components
2. **HTML Prototypes** - Build pixel-perfect static versions
3. **Visual Testing** - Automated comparison with Playwright
4. **WordPress Integration** - Convert to dynamic PHP templates
5. **Performance Testing** - Lighthouse and Core Web Vitals
6. **Deployment** - Staging and production releases

## Next Steps
1. Install required MCP servers
2. Provide Figma design URL
3. Begin design analysis and token extraction
4. Start HTML prototype development

See [../../../tooling-final-touches.md](../../../tooling-final-touches.md) for complete setup instructions.