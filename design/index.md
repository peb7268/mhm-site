# MHM Marketing Site - Page Catalog

**Project:** Mile High Marketing Website
**Design Source:** Figma Desktop (Dev Mode)
**Last Updated:** 2025-11-01

---

## 📄 Page Index

### ✅ Extracted & Documented

#### 1. Services Page
- **Path:** `/services`
- **Figma Node ID:** `292:5956`
- **Frame Name:** Tablet
- **Status:** ✅ Fully Extracted
- **Assets:** 18 files (PNGs, SVGs)
- **Implementation:** Ready for development
- **Key Sections:**
  - Header with navigation (ABOUT, INSIGHTS, SERVICES)
  - Hero section with illustrated landscape background
  - Services grid (9 offerings)
  - Multi-section content area
  - Blog topic tags
  - Contact form with CTA
  - Footer with social links

**Services Offered:**
1. Web Development (primary/highlighted)
2. Website Renovation
3. Search Engine Optimization
4. Social Media Marketing
5. Mentoring
6. Brand Creation
7. Content Creation
8. Digital Marketing Strategy
9. App Development

---

#### 2. About Page
- **Path:** `/about`
- **Figma Node ID:** `292:5874`
- **Status:** ✅ Fully Extracted
- **Assets:** 6 files (3 reused from Services)
- **Implementation:** Ready for development
- **Key Sections:**
  - Header with navigation (ABOUT, INSIGHTS, SERVICES)
  - Hero section: "About Us" title over mountain landscape
  - Tagline: "Imperative Design | Your Marketing Department Outsourced Locally"
  - Content sections:
    - "Some Background" - Company history since 2008
    - "A Little Bit on How We Are Different" - Unique value propositions
  - Blog tags section: JavaScript, Performance, Design, Marketing
  - Contact form: "YOU HAD ME AT HELLO - NOW WHAT'S NEXT?"
  - Footer with logo and social icons

**Content Highlights:**
- Founded in 2008
- Focus on small to medium businesses
- Customer-centric approach
- In-house marketing team philosophy
- Local outsourcing model

**Component Reuse Confirmed:**
- Header/Navigation (100% reused)
- Contact Form Section (100% reused)
- Blog Tags Section (100% reused)
- Footer (100% reused)
- Hero Layout (pattern reused, unique illustration)

---

### 🔄 Pending Extraction

#### 3. Homepage / Landing Page
- **Path:** `/` or `/home`
- **Status:** 🔄 Awaiting Selection
- **Known Elements:**
  - Hero: "WHAT IF YOU COULD CHOOSE YOUR CUSTOMERS INSTEAD OF THEM CHOOSING YOU"
  - MHM logo
  - Mountain landscape illustration
  - Navigation menu
  - Review CTAs (Google, Nextdoor)
  - Contact form: "Read more" button
  - Social icons

#### 3. Insights Page (Blog Detail)
- **Path:** `/insights/:slug` or `/blog/:slug`
- **Figma Node ID:** `292:6179`
- **Status:** ✅ Fully Extracted
- **Assets:** 15 files (1 reused logo)
- **Implementation:** Ready for development
- **Page Type:** Blog article detail/single post view
- **Key Sections:**
  - Header with navigation (ABOUT, INSIGHTS, SERVICES)
  - Social sharing sidebar (left) - like, comment, share, more
  - Main article area:
    - Featured image (672px × 383px)
    - Article title: "Lorem ipsum dolor sit amet"
    - Author info with avatar (John Smith)
    - Multi-paragraph article body
    - Bullet point highlights section
  - "Read also" sidebar (right) - 3 related articles with thumbnails
  - Blog tags section: JavaScript, Performance, Design, Marketing
  - Comments section (1 comment shown)
  - "Write a comment" form (name, email, message, subscribe checkbox)

**New Components:**
- Social sharing sidebar (vertical)
- Article header with author
- Related articles cards (compact)
- Comment card
- Comment form with checkbox
- Bullet list with star icons

#### 4. Insights Listing Page
- **Path:** `/insights` or `/blog`
- **Status:** 🔄 Not yet extracted
- **Expected Features:**
  - Blog post grid/list
  - Category filters
  - Featured posts
  - Pagination

#### 5. Additional Pages (TBD)
- Contact page (standalone)
- Portfolio / Case Studies
- Individual service detail pages
- Privacy Policy / Terms
- 404 Error page

---

## 🎨 Design Assets Location

**Primary Directory:** `/Users/pbarrick/Desktop/dev/MHM/projects/site/design-assets/`

### Asset Categories

#### Illustrations
- Hero landscapes (mountains, city skylines)
- Background imagery
- Decorative elements

#### Logos & Branding
- `45fba2bab9abb08268ddb969013786f0c31457a1.png` - MHM Logo

#### Icons (SVG)
- Service icons (9 total)
- Social media icons (Facebook, Email, Phone)
- UI elements (arrows, decorative)

#### Photography
- Code screenshots
- Team photos (pending)
- Project examples (pending)

---

## 📐 Page Specifications

### Standard Page Structure

All pages follow this general layout:

```
┌─────────────────────────────────────┐
│  Header (Backdrop blur overlay)    │
│  - Logo (left)                      │
│  - Navigation (right)               │
│    ABOUT | INSIGHTS | SERVICES      │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Hero Section                       │
│  - Large title                      │
│  - Illustrated background           │
│  - Optional CTA                     │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Main Content Area                  │
│  - Multiple sections                │
│  - Grid layouts                     │
│  - Text blocks                      │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Contact / CTA Section              │
│  - Form or action buttons           │
│  - Illustrated background           │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Footer                             │
│  - Logo                             │
│  - Social links                     │
└─────────────────────────────────────┘
```

### Viewport Specifications

- **Tablet View:** 1232px × 2643px (extracted)
- **Mobile:** TBD (pending extraction)
- **Desktop:** TBD (pending extraction)
- **Max Content Width:** ~1200px centered

---

## 🔗 Related Documentation

- **Design System:** `design-system.md` - Complete design token reference
- **Full Inventory:** `../FIGMA_PAGE_INVENTORY.md` - Detailed extraction log
- **Context:** `../context.md` - Figma MCP setup and workflow
- **Assets:** `../design-assets/` - All exported files

---

## 📋 Implementation Checklist

### Phase 1: Foundation
- [ ] Set up project structure
- [ ] Implement design system (CSS variables, Tailwind config, etc.)
- [ ] Create base layout component (Header, Footer)
- [ ] Set up typography styles
- [ ] Configure color palette

### Phase 2: Page Development
- [ ] Homepage / Landing
- [ ] Services page
- [ ] About page
- [ ] Insights / Blog listing
- [ ] Contact page

### Phase 3: Components
- [ ] Navigation component
- [ ] Service card component
- [ ] Contact form component
- [ ] Blog post card
- [ ] CTA buttons
- [ ] Social link icons

### Phase 4: Polish
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Animations and transitions
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Accessibility audit

---

**Next Step:** Complete extraction of remaining pages (Homepage, About, Insights) from Figma Desktop.
