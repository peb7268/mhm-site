# MHM Marketing Site - Design System

**Version:** 2.0.0
**Last Updated:** 2025-11-01
**Status:** Complete specification - all 4 pages extracted (Services, About, Insights, Homepage)

---

## 🎨 Color Palette

**Color System derived from Primary Illustration (logo-1.png)**

### Sky Blues (Primary Brand Colors)

```css
/* Deep to Light - Sky Gradient */
--color-sky-navy: #204593;          /* Deep navy sky - Headers, primary text, hero background */
--color-sky-medium: #5B8EC7;        /* Medium blue sky - Accents, highlights */
--color-sky-light: #B0E0E6;         /* Glacier blue - Text highlights, borders, "glacier-blue" class */
--color-sky-pale: #E6F7FB;          /* Very light sky - Subtle backgrounds, cards */
```

### Water Blues (Interactive Elements)

```css
/* River/Water Tones */
--color-water-dark: #2C5F7F;        /* Dark water - Borders, shadows, dark accents */
--color-water-medium: #5A9BC5;      /* Medium water - Buttons, interactive elements */
--color-water-light: #8AC5E0;       /* Light water - Hover states, highlights */
```

### Nature Greens (Success & CTAs)

```css
/* Grass & Forest Tones */
--color-forest-dark: #234D2A;       /* Dark forest - Footer, dark sections, deep accents */
--color-grass-medium: #6B9B4A;      /* Medium grass - CTAs, success states */
--color-grass-light: #9BC865;       /* Light grass - Highlights, borders */
--color-grass-bright: #C1D87A;      /* Yellow-green - Bright accents, hover states */
```

### Mountain Grays (Neutrals & Structure)

```css
/* Mountain Layers - Purple-Gray to Light */
--color-mountain-dark: #525D75;     /* Dark gray-purple - Body text, borders */
--color-mountain-medium: #8095AD;   /* Medium gray-blue - Secondary text, icons */
--color-mountain-light: #B5C4D8;    /* Light gray-blue - Borders, dividers */
--color-mountain-pale: #DCE4EF;     /* Very pale gray-blue - Card backgrounds, subtle surfaces */
```

### City Neutrals (Buildings & UI)

```css
/* Building/Cityscape Tones */
--color-neutral-white: #FFFFFF;     /* Pure white - Cards, buttons, text on dark */
--color-neutral-building: #95A0B3;  /* Gray buildings - Secondary UI elements */
--color-neutral-light: #C5CFE0;     /* Light building highlights - Subtle backgrounds */
```

### Color Usage Guidelines

- **Primary Actions:** Sky Medium (`#5A9BC5`) or Grass Medium (`#6B9B4A`) - buttons, CTAs
- **Secondary Actions:** White with Sky Navy text - alternative CTAs
- **Hero Background:** Sky Navy (`#204593`) - main hero section
- **Text Highlights:** Sky Light (`#B0E0E6`) - glacier blue accents in headlines
- **Borders & Dividers:** Mountain Light (`#B5C4D8`) or Water Dark (`#2C5F7F`)
- **Text on Light:** Sky Navy (`#204593`) or Mountain Dark (`#525D75`)
- **Text on Dark:** White (`#FFFFFF`) or Sky Pale (`#E6F7FB`)
- **Success States:** Grass Medium (`#6B9B4A`) or Grass Light (`#9BC865`)
- **Hover States:** Water Light (`#8AC5E0`) or Grass Bright (`#C1D87A`)

---

## 📝 Typography

### Font Families

```css
/* Primary Font */
--font-primary: 'Nunito', sans-serif;

/* Secondary Font (Forms) */
--font-secondary: 'Albert Sans', sans-serif;
```

### Nunito Font Weights & Styles
- Regular (400)
- Medium (500)
- Medium Italic (500 italic)
- SemiBold (600)
- Bold (700)
- Bold Italic (700 italic)
- Light Italic (300 italic)

### Albert Sans Font Weights
- Regular (400)

### Type Scale

```css
/* Headings */
--text-hero: 60px;           /* Hero titles */
--text-h1: 40px;             /* Page section titles */
--text-h2: 24px;             /* Section headings */
--text-h3: 22px;             /* Subsection headings */
--text-h4: 20px;             /* Tag labels, large buttons */

/* Body Text */
--text-body-lg: 18px;        /* Main content paragraphs */
--text-body: 16px;           /* Navigation, buttons */
--text-body-sm: 14px;        /* Small labels */
--text-caption: 12px;        /* Card text, form labels */

/* Line Heights */
--leading-none: 1.0;         /* Headings, buttons */
--leading-tight: 1.2;        /* Hero text */
--leading-normal: 1.5;       /* Body paragraphs */
```

### Typography Styles

#### Hero Title
```css
font-family: 'Nunito', sans-serif;
font-weight: 700; /* Bold */
font-style: italic;
font-size: 60px;
line-height: 1.0;
text-transform: uppercase;
color: #ffffff;
```

#### Section Title (H1)
```css
font-family: 'Nunito', sans-serif;
font-weight: 600; /* SemiBold */
font-size: 40px;
line-height: 1.2;
text-transform: capitalize;
color: #1e1e1e;
```

#### Section Heading (H2)
```css
font-family: 'Nunito', sans-serif;
font-weight: 700; /* Bold */
font-size: 24px;
line-height: 1.5;
text-transform: capitalize;
color: #1e1e1e;
```

#### Section Subheading (Italic)
```css
font-family: 'Nunito', sans-serif;
font-weight: 300; /* Light */
font-style: italic;
font-size: 40px;
line-height: 1.2;
text-transform: capitalize;
color: #1e1e1e;
```

#### Body Text
```css
font-family: 'Nunito', sans-serif;
font-weight: 400; /* Regular */
font-size: 18px;
line-height: 1.5;
color: #1e1e1e;
```

#### Navigation Item
```css
font-family: 'Nunito', sans-serif;
font-weight: 500; /* Medium */
font-size: 16px;
line-height: 1.0;
text-transform: uppercase;
color: #1e1e1e;
```

#### Button Text
```css
font-family: 'Nunito', sans-serif;
font-weight: 500; /* Medium */
font-size: 24px;
line-height: 1.0;
color: #1e1e1e; /* or #ffffff on dark */
```

#### Card Text
```css
font-family: 'Nunito', sans-serif;
font-weight: 400; /* Regular */
font-size: 12px;
line-height: 1.2;
color: #182c40;
```

#### Form Label
```css
font-family: 'Albert Sans', sans-serif;
font-weight: 400; /* Regular */
font-size: 12px;
line-height: 1.0;
color: #ffffff;
opacity: 0.8;
```

#### Tag Label
```css
font-family: 'Nunito', sans-serif;
font-weight: 700; /* Bold */
font-size: 20px;
line-height: 1.0;
text-align: center;
color: #1e1e1e;
```

---

## 📏 Spacing System

### Base Unit
```css
--spacing-base: 8px;  /* All spacing multiples of 8px */
```

### Spacing Scale

```css
--spacing-xs: 4px;      /* 0.5 × base */
--spacing-sm: 8px;      /* 1 × base */
--spacing-md: 16px;     /* 2 × base */
--spacing-lg: 24px;     /* 3 × base */
--spacing-xl: 32px;     /* 4 × base */
--spacing-2xl: 40px;    /* 5 × base */
--spacing-3xl: 48px;    /* 6 × base */
--spacing-4xl: 64px;    /* 8 × base */
--spacing-5xl: 80px;    /* 10 × base */
```

### Layout Spacing

```css
/* Section Padding */
--section-padding-y: 64px;
--section-padding-x: 68px;

/* Container */
--container-max-width: 1200px;
--container-padding: 16px;

/* Grid Gaps */
--grid-gap-sm: 16px;
--grid-gap-md: 24px;
--grid-gap-lg: 32px;
```

---

## 🔲 Border Radius

```css
--radius-sm: 6px;      /* Small elements, tags */
--radius-md: 8px;      /* Cards, buttons */
--radius-lg: 12px;     /* Forms, large cards */
--radius-full: 9999px; /* Fully rounded elements */
```

### Component-Specific Radius

- **Navigation Buttons:** 6px
- **Service Cards:** 8px
- **Large Buttons:** 8px
- **Form Fields:** 12px
- **Contact Form Container:** 12px
- **Social Icons:** Circular (full radius)

---

## 🎭 Effects

### Shadows

```css
/* Card Shadow */
--shadow-card: 0px 0px 14.732px 0px rgba(0, 0, 0, 0.07);

/* Hover Shadow (suggested) */
--shadow-hover: 0px 4px 20px 0px rgba(0, 0, 0, 0.12);

/* Focus Shadow (suggested) */
--shadow-focus: 0px 0px 0px 3px rgba(182, 250, 255, 0.4);
```

### Backdrop Blur

```css
/* Header Navigation */
backdrop-filter: blur(8.1px);
background: rgba(24, 44, 64, 0.22);
```

---

## 🧩 Component Specifications

### Header / Navigation

**Dimensions:**
- Height: 105px
- Backdrop blur: 8.1px
- Background: `rgba(24, 44, 64, 0.22)`

**Logo:**
- Size: 74px × 74px
- Position: 36px from left, 17px from top

**Navigation Items:**
- Height: 32px
- Width: 113-114px (variable by content)
- Border radius: 6px
- Background: `#b6faff` (cyan)
- Text: 16px medium uppercase, `#1e1e1e`
- Spacing: ~6px between items
- Alignment: Right side, ~66.67% from left

---

### Hero Section

**Dimensions:**
- Height: 451px
- Full width with background image

**Title Style:**
- Font: Nunito Bold Italic
- Size: 60px
- Color: White
- Transform: Uppercase
- Positioning: Centered or left-aligned over illustration

---

### Service Cards

**Dimensions:**
- Width: 164px (163px for App Development)
- Height: 76px (77px for highlighted)
- Border radius: 8px
- Background: White
- Shadow: `0px 0px 14.732px 0px rgba(0, 0, 0, 0.07)`

**Highlighted Card:**
- Border: 2px solid `#75e1b3` (green)
- Height: 77px (includes border)

**Icon:**
- Size: 42-57px (varies by icon)
- Position: 12px from top, 12px from left

**Text:**
- Font: Nunito Regular
- Size: 12px (14px for Brand Creation)
- Color: `#182c40`
- Line height: 1.2
- Max lines: 2
- Position: Right of icon

**Grid Layout:**
- Rows: 2
- Columns: Variable (4-5 per row)
- Gap: ~16-20px
- Container padding: 69px from left edge

---

### Contact Form

**Container:**
- Width: 531px
- Height: 336px
- Border radius: 12px
- Background: `rgba(156, 156, 156, 0.38)`
- Position: Over illustrated background

**Title:**
- Text: "DROP US A LINE"
- Font: Nunito SemiBold
- Size: 24px
- Color: White
- Transform: Uppercase

**Input Fields:**
- Width: 231px
- Height: 35px
- Border radius: 12px
- Background: `rgba(30, 30, 30, 0.56)`
- Text: Albert Sans Regular, 12px, white, 80% opacity
- Grid: 2 columns

**Textarea:**
- Width: 478px
- Height: 102px
- Border radius: 12px
- Background: `rgba(30, 30, 30, 0.68)`

**Submit Button:**
- Width: 146px
- Height: 47px
- Border radius: 8px
- Background: White
- Text: Nunito Medium, 24px, `#182c40`
- Label: "Sent"

---

### CTA Buttons

**Primary Button (Cyan):**
- Min width: 187px
- Height: 47px
- Border radius: 8px
- Background: `#b6faff`
- Text: Nunito Medium, 24px, `#1e1e1e`

**Secondary Button (White):**
- Min width: 187px
- Height: 47px
- Border radius: 8px
- Background: White
- Text: Nunito Medium, 24px, `#182c40`

**Button States (Suggested):**
- Hover: Slight darkening, shadow increase
- Active: Scale 0.98
- Focus: Outline with `--shadow-focus`
- Disabled: 50% opacity, cursor not-allowed

---

### Tag/Badge Components

**Dimensions:**
- Height: 46px
- Width: Auto (93-147px based on content)
- Border radius: 12px
- Padding: 12px horizontal

**Color Variants:**
- Blue: `#85a9ff` background, `#1e1e1e` text
- Cyan: `#b6faff` background, `#1e1e1e` text
- Green: `#75e1b3` background, `#1e1e1e` text
- Navy: `#003048` background, white text

**Typography:**
- Font: Nunito Bold
- Size: 20px
- Alignment: Center

---

### Social Icons

**Dimensions:**
- Size: 30px × 30px
- Format: SVG
- Spacing: ~12px between icons

**Icons Needed:**
- Facebook
- Email
- Phone

**Container:**
- Display: Horizontal row
- Alignment: Left or center
- Position: Footer section

---

### Case Study Cards

**Dimensions:**
- Width: 361px
- Height: 465px
- Unique rounded corners:
  - Top-left: 24.606px
  - Top-right: 159.937px (large asymmetric radius)
  - Bottom-left: 24.606px
  - Bottom-right: 24.606px
- Background: White
- Shadow: Card shadow

**Featured Image:**
- Full width top section
- Height: ~250px
- Border radius matches container top corners

**Content Area:**
- Padding: 24px
- Background: White

**Project Title:**
- Font: Nunito SemiBold
- Size: 24px
- Color: `#182c40`
- Margin bottom: 12px

**Description:**
- Font: Nunito Regular
- Size: 18px
- Color: `#1e1e1e`
- Line height: 1.5
- Max lines: 4-5

**CTA Link:**
- Text: "View Project" or similar
- Color: `#6cc7cd` (teal)
- Font: Nunito Medium
- Size: 16px

---

### Testimonial Cards

**Dimensions:**
- Width: 324px
- Height: 260px
- Border radius: 12px
- Background: `#e1f0ff` (light blue)
- Shadow: Card shadow

**Quote:**
- Font: Nunito Regular
- Size: 16px
- Color: `#182c40`
- Line height: 1.5
- Max lines: 6-8
- Margin bottom: 16px

**Author Info:**
- Name: Nunito SemiBold, 18px, `#182c40`
- Title/Company: Nunito Regular, 14px, `#182c40`, opacity 0.8

**Read More Link:**
- Text: "Read more"
- Color: `#ffa033` (orange)
- Font: Nunito Medium
- Size: 14px
- Position: Bottom right of card

**Layout Pattern:**
- Display in horizontal row (3 across)
- Gap: 24px
- Optional pagination dots below

---

### Blog Post List Cards

**Dimensions:**
- Width: 552px
- Height: 128px
- Border radius: 8px
- Background: White
- Border: 1px solid rgba(0, 0, 0, 0.1)
- Shadow: Light card shadow

**Thumbnail:**
- Size: 94px × 94px
- Border radius: 8px
- Position: Left side
- Margin: 17px

**Content Area:**
- Padding: 16px
- Display: Flex column
- Justify: Space between

**Title:**
- Font: Nunito SemiBold
- Size: 18px
- Color: `#182c40`
- Max lines: 2
- Line height: 1.3

**Excerpt:**
- Font: Nunito Regular
- Size: 14px
- Color: `#1e1e1e`
- Max lines: 2
- Line height: 1.5

**Read More Link:**
- Text: "Read More"
- Color: `#6cc7cd` (teal)
- Font: Nunito Medium
- Size: 14px
- Position: Bottom right

---

### Related Article Cards (Sidebar)

**Dimensions:**
- Width: 262px
- Height: 210px
- Border radius: 8px
- Background: White
- Shadow: Card shadow
- Padding: 10px

**Thumbnail:**
- Width: 242px
- Height: 81px
- Border radius: 6px
- Margin bottom: 8px

**Author Section:**
- Avatar: 13px circle
- Name: 12px light, `#182c40`
- Display: Horizontal flex
- Gap: 6px
- Margin bottom: 6px

**Article Title:**
- Font: Nunito SemiBold
- Size: 12px
- Color: `#182c40`
- Max lines: 2
- Line height: 1.3
- Margin bottom: 6px

**Excerpt:**
- Font: Nunito Regular
- Size: 12px
- Color: `#1e1e1e`
- Max lines: 4
- Line height: 1.4

---

### Social Sharing Sidebar

**Container:**
- Width: 66px
- Height: 367px
- Border radius: 8px
- Background: White
- Shadow: Card shadow
- Position: Sticky/Fixed on left side

**Icons:**
- Size: 28px × 28px
- Spacing: 24px vertical gap
- Alignment: Centered
- Icons needed:
  - Heart (like)
  - Comment bubble
  - Share
  - More (three dots)

**Icon States:**
- Default: Navy `#182c40`
- Hover: Cyan `#b6faff` background
- Active: Green `#75e1b3` (liked state)

---

### Comment Cards

**Container:**
- Width: 466px
- Min height: 103px
- Border radius: 8px
- Background: White
- Shadow: Card shadow
- Padding: 16px

**Avatar:**
- Size: 57px × 56px (approx square/circle)
- Border radius: Full (circular)
- Position: Left side

**Content Area:**
- Margin left: 16px from avatar
- Display: Flex column

**Name:**
- Font: Nunito Bold
- Size: 18px
- Color: `#003048` (navy)
- Margin bottom: 4px

**Date:**
- Font: Nunito Light
- Size: 12px
- Color: `#003048`
- Opacity: 0.7
- Margin bottom: 8px

**Comment Text:**
- Font: Nunito SemiBold
- Size: 18px
- Color: `#182c40`
- Line height: 1.5
- Margin bottom: 8px

**Reply Link:**
- Text: "Reply"
- Font: Nunito Light
- Size: 12px
- Color: `#003048`
- Icon: Small arrow
- Position: Bottom left

---

### Article Header with Author

**Featured Image:**
- Width: 672px
- Height: 383px
- Border radius: 8px
- Shadow: Card shadow
- Margin bottom: 24px

**Article Title:**
- Font: Nunito Bold
- Size: 40px
- Color: `#182c40`
- Line height: 1.2
- Margin bottom: 16px

**Author Section:**
- Display: Horizontal flex
- Gap: 12px
- Margin bottom: 24px

**Author Avatar:**
- Size: 48px × 47px
- Border radius: Full (circular)

**Author Name:**
- Font: Nunito Regular
- Size: 18px
- Color: `#182c40`

---

### Bullet List with Star Icons

**Container:**
- Heading: "Lorem ipsum dolor:" (18px semibold)
- Margin bottom: 12px

**List Items:**
- Display: Flex with icon
- Gap: 8px
- Margin bottom: 8px

**Star Icon:**
- Size: 28px × 28px
- Color: Orange `#ffa033` (filled) or outline variant
- Format: SVG

**Bullet Text:**
- Font: Nunito Bold
- Size: 18px
- Color: `#182c40`
- Line height: 1.4

---

### Comment Form

**Container:**
- Width: 449px
- Height: 176px
- Border radius: 12px
- Background: White
- Padding: 20px

**Heading:**
- Text: "Write a comment"
- Font: Nunito Bold
- Size: 24px
- Color: White
- Background: Gradient (teal to darker)
- Margin bottom: 16px

**Message Field:**
- Label: "Your message" (12px light)
- Type: Textarea
- Min height: 60px
- Border radius: 8px
- Border: 1px solid rgba(0, 0, 0, 0.1)
- Margin bottom: 12px

**Input Fields (Name, Email):**
- Height: 42px
- Border radius: 8px
- Border: 1px solid rgba(0, 0, 0, 0.1)
- Display: Inline or stacked
- Gap: 12px
- Margin bottom: 12px

**Checkbox:**
- Text: "I want to receive news about new posts"
- Font: Nunito Regular
- Size: 12px
- Margin bottom: 16px

**Submit Button:**
- Width: 193px
- Height: 60px
- Border radius: 8px
- Background: `#b6faff` (cyan)
- Text: "Post" (32px medium)
- Color: `#182c40`

---

### Footer

**Logo:**
- Size: 74px × 74px
- Position: 43px from left, bottom section

**Social Links:**
- Position: Below or beside logo
- Layout: Horizontal row
- Icon size: 30px × 30px

---

## 🖼️ Illustrations

### Style Guidelines

**Art Style:**
- Flat, geometric illustration
- Mountain landscapes with Denver cityscape
- Layered depth (foreground river, midground hills, background mountains, distant city)
- Stylized natural elements (evergreen trees, rolling hills, layered mountains)
- Modern cityscape elements (buildings on horizon)

**Color Palette Extracted from logo-1.png:**

**Sky (Gradient top to bottom):**
- Deep Navy: #204593 (top)
- Medium Blue: #5B8EC7 (mid-upper)
- Glacier Blue: #B0E0E6 (mid-lower)
- Pale Blue: #E6F7FB (bottom/horizon)

**Mountains (Layered depth):**
- Dark Purple-Gray (shadows): #525D75
- Medium Gray-Blue: #8095AD
- Light Gray-Blue (highlights): #B5C4D8
- Very Light (snow/peaks): #DCE4EF

**Water/River:**
- Dark Blue (shadows): #2C5F7F
- Medium Blue: #5A9BC5
- Light Blue (reflections): #8AC5E0

**Grass/Hills:**
- Dark Green (shadows): #234D2A
- Medium Green: #6B9B4A
- Light Green: #9BC865
- Yellow-Green (sunlit): #C1D87A

**Trees (Evergreens):**
- Dark Forest Green: #234D2A
- Medium Forest: #2D5940

**City/Buildings:**
- Gray Buildings: #95A0B3
- Light Highlights: #C5CFE0

**Usage:**
- Hero section background (full-bleed)
- Contact section backgrounds
- Full-width or contained sections
- Text overlays with shadows for readability
- Maintains visual consistency across site

**Asset Locations:**
- Primary hero landscape: `logo-1.png` (images/logo-1.png)
- Additional illustrations: TBD based on design needs

---

## 🎯 Icons

### Service Icons

**Style:**
- Line art / stroke-based
- Minimal, modern aesthetic
- Single color (navy/dark)
- Size: 42-57px
- Format: SVG

**Available Icons:**
- Web Development (code brackets)
- Website Renovation (wrench/tools)
- SEO (magnifying glass/search)
- Social Media (network nodes)
- Mentoring (person/education)
- Brand Creation (palette/design)
- Content Creation (document/pen)
- Digital Marketing Strategy (chart/graph)
- App Development (mobile device)

### UI Icons

**Style:**
- Simple, geometric
- Consistent stroke width
- Size: 16-24px for UI elements
- Format: SVG

**Needed Icons:**
- Arrow/Chevron (navigation)
- Menu (mobile navigation)
- Close (modal/menu)
- External link
- Download

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

### Layout Adjustments

**Mobile (<768px):**
- Single column layout
- Stack navigation items
- Reduce hero text size (40px)
- Service cards: 2 columns or stacked
- Form: Full width, stacked inputs

**Tablet (768px-1024px):**
- Current extracted design (1232px)
- 2-3 column service grid
- Form: 2-column inputs

**Desktop (>1024px):**
- Max width: 1200px centered
- 4-5 column service grid
- Full width hero with centered content

---

## ♿ Accessibility

### Color Contrast

Ensure WCAG AA compliance (4.5:1 for normal text, 3:1 for large text):

- ✅ Navy (`#182c40`) on white: 12.5:1
- ✅ Dark (`#1e1e1e`) on white: 16.8:1
- ✅ White on Cyan (`#b6faff`): Check needed
- ✅ Dark on Cyan (`#b6faff`): Check needed

### Focus States

```css
/* Keyboard Focus Indicator */
:focus-visible {
  outline: 3px solid var(--color-primary-cyan);
  outline-offset: 2px;
}

/* Button Focus */
button:focus-visible {
  box-shadow: 0 0 0 3px rgba(182, 250, 255, 0.4);
}
```

### Typography Accessibility

- Minimum body text: 16px (18px preferred)
- Line height: 1.5 for body text
- Sufficient color contrast
- Resizable text support (rem units)

---

## 🔄 Animation & Transitions

### Transition Timing

```css
--transition-fast: 150ms;
--transition-base: 250ms;
--transition-slow: 350ms;

--easing-default: cubic-bezier(0.4, 0.0, 0.2, 1);
--easing-in: cubic-bezier(0.4, 0.0, 1, 1);
--easing-out: cubic-bezier(0.0, 0.0, 0.2, 1);
```

### Component Animations

**Buttons:**
```css
transition: all 250ms cubic-bezier(0.4, 0.0, 0.2, 1);

/* Hover */
transform: translateY(-2px);
box-shadow: var(--shadow-hover);

/* Active */
transform: translateY(0);
```

**Cards:**
```css
transition: transform 250ms, box-shadow 250ms;

/* Hover */
transform: translateY(-4px);
box-shadow: var(--shadow-hover);
```

**Navigation Items:**
```css
transition: background-color 150ms, color 150ms;
```

---

## 📦 Component Library Structure

### Suggested Organization

```
components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── Container.tsx
├── sections/
│   ├── Hero.tsx
│   ├── ServicesGrid.tsx
│   ├── ContactForm.tsx
│   └── ContentBlock.tsx
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Tag.tsx
│   ├── Input.tsx
│   ├── Textarea.tsx
│   └── Icon.tsx
└── illustrations/
    ├── MountainLandscape.tsx
    └── CityScape.tsx
```

---

## 🎨 CSS Variables Implementation

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-primary-cyan: #b6faff;
  --color-primary-green: #75e1b3;
  --color-primary-blue: #85a9ff;
  --color-primary-navy: #182c40;
  --color-primary-dark: #1e1e1e;
  --color-primary-darkest: #003048;
  --color-accent-orange: #ffa033;
  --color-accent-teal: #6cc7cd;
  --color-accent-light-blue: #e1f0ff;
  --color-neutral-white: #ffffff;
  --color-neutral-light: #f8f8f8;

  /* Typography */
  --font-primary: 'Nunito', sans-serif;
  --font-secondary: 'Albert Sans', sans-serif;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Shadows */
  --shadow-card: 0px 0px 14.732px 0px rgba(0, 0, 0, 0.07);

  /* Transitions */
  --transition-base: 250ms cubic-bezier(0.4, 0.0, 0.2, 1);
}
```

### Tailwind Configuration (if using Tailwind)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-cyan': '#b6faff',
        'brand-green': '#75e1b3',
        'brand-blue': '#85a9ff',
        'brand-navy': '#182c40',
        'brand-dark': '#1e1e1e',
        'accent-orange': '#ffa033',
        'accent-teal': '#6cc7cd',
        'accent-light-blue': '#e1f0ff',
      },
      fontFamily: {
        'primary': ['Nunito', 'sans-serif'],
        'secondary': ['Albert Sans', 'sans-serif'],
      },
      borderRadius: {
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
      },
      boxShadow: {
        'card': '0px 0px 14.732px 0px rgba(0, 0, 0, 0.07)',
      },
    },
  },
}
```

---

## 📚 Design Tokens Export

For design token management tools (Style Dictionary, Figma Tokens, etc.):

```json
{
  "color": {
    "primary": {
      "cyan": { "value": "#b6faff" },
      "green": { "value": "#75e1b3" },
      "blue": { "value": "#85a9ff" },
      "navy": { "value": "#182c40" },
      "dark": { "value": "#1e1e1e" }
    },
    "accent": {
      "orange": { "value": "#ffa033" },
      "teal": { "value": "#6cc7cd" },
      "lightBlue": { "value": "#e1f0ff" }
    },
    "neutral": {
      "white": { "value": "#ffffff" },
      "light": { "value": "#f8f8f8" }
    }
  },
  "typography": {
    "fontFamily": {
      "primary": { "value": "Nunito, sans-serif" },
      "secondary": { "value": "Albert Sans, sans-serif" }
    },
    "fontSize": {
      "hero": { "value": "60px" },
      "h1": { "value": "40px" },
      "h2": { "value": "24px" },
      "body": { "value": "18px" }
    }
  },
  "spacing": {
    "xs": { "value": "4px" },
    "sm": { "value": "8px" },
    "md": { "value": "16px" },
    "lg": { "value": "24px" }
  },
  "borderRadius": {
    "sm": { "value": "6px" },
    "md": { "value": "8px" },
    "lg": { "value": "12px" }
  }
}
```

---

## ✅ Implementation Checklist

### Setup
- [ ] Install Google Fonts (Nunito, Albert Sans)
- [ ] Create CSS variables file
- [ ] Configure Tailwind/CSS framework with design tokens
- [ ] Set up asset directory structure

### Components
- [ ] Header/Navigation
- [ ] Footer
- [ ] Button variants
- [ ] Service card
- [ ] Case study card
- [ ] Testimonial card
- [ ] Blog post list card
- [ ] Related article card
- [ ] Tag/Badge
- [ ] Form inputs
- [ ] Contact form
- [ ] Comment form
- [ ] Comment card
- [ ] Social sharing sidebar
- [ ] Article header with author
- [ ] Bullet list with star icons
- [ ] Hero section

### Utilities
- [ ] Typography classes
- [ ] Spacing utilities
- [ ] Color utilities
- [ ] Animation utilities

### Quality Assurance
- [ ] Accessibility audit (WCAG AA)
- [ ] Color contrast verification
- [ ] Responsive testing
- [ ] Cross-browser testing
- [ ] Performance optimization

---

**Status:** ✅ Complete - All 4 pages extracted. Design system ready for implementation with all components documented.
