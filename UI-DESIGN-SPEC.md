# UI Design Specification - Portfolio Website
Based on Cyberpunk 2077 Reference Screenshots

## Overview
This document contains comprehensive design specifications extracted from reference screenshots. The design features a bold, futuristic aesthetic with high-contrast colors and clean typography.

---

## 1. COLOR PALETTE

### Primary Colors
| Token Name | Hex Code | Usage |
|-----------|----------|-------|
| `color-primary` | `#FFD700` | Main background, accent color (Gold) |
| `color-primary-dark` | `#FFC125` | Darker shade for gradients (Goldenrod) |
| `color-secondary` | `#FFF500` | Bright yellow gradient (Cyberpunk Yellow) |
| `color-tertiary` | `#F0E68C` | Light yellow/beige (buttons) |
| `color-background-dark` | `#1A1A1A` | Dark backgrounds, footer |
| `color-background-nav` | `#2D2D2D` | Navigation background |
| `color-black` | `#000000` | Text, borders, content cards |
| `color-white` | `#FFFFFF` | Text on dark backgrounds |

### Accent Colors
| Token Name | Hex Code | Usage |
|-----------|----------|-------|
| `color-accent-cyan` | `#00FFFF` | Links, highlights, borders (Cyan) |
| `color-accent-cyan-dark` | `#00CED1` | Darker cyan for hover states |
| `color-accent-red` | `#FF0033` | Alert/pink accents |

### Text Colors
| Token Name | Hex Code | Usage |
|-----------|----------|-------|
| `color-text-primary` | `#000000` | Primary text on light backgrounds |
| `color-text-secondary` | `#FFFFFF` | Text on dark backgrounds |
| `color-text-muted` | `#CCCCCC` | Secondary text, disabled states |

---

## 2. TYPOGRAPHY

### Font Families
- **Headings**: Custom futuristic sans-serif (similar to Cyberpunk branding)
- **Body**: Clean modern sans-serif (Arial, Helvetica, or similar)

### Typography Scale
| Token Name | Size | Weight | Line Height | Usage |
|-----------|------|--------|-------------|-------|
| `font-display` | 72px | 900 | 1.1 | Hero headlines |
| `font-heading-xl` | 48-60px | 700 | 1.2 | Page titles |
| `font-heading-lg` | 32px | 700 | 1.3 | Section headings |
| `font-heading-md` | 24-30px | 700 | 1.4 | Card titles |
| `font-body-lg` | 18px | 400 | 1.5 | Lead text, large body |
| `font-body-md` | 16px | 400 | 1.6 | Standard body text |
| `font-body-sm` | 14px | 400 | 1.7 | Small text, captions |
| `font-caption` | 12px | 400 | 1.8 | Meta information |
| `font-nav` | 14-16px | 600 | 1.4 | Navigation items |

### Text Styles
- **Headings**: All caps, bold weight
- **Navigation**: All caps, medium weight
- **Body**: Regular weight, sentence case
- **Buttons**: All caps, medium-bold weight

---

## 3. SPACING SYSTEM

### Space Tokens
| Token Name | Value | Usage |
|-----------|-------|-------|
| `space-xs` | 4px | Tiny adjustments |
| `space-sm` | 8px | Small padding/margins |
| `space-md` | 16px | Standard spacing |
| `space-lg` | 24px | Large spacing |
| `space-xl` | 32px | Extra large spacing |
| `space-2xl` | 48px | Section spacing |
| `space-3xl` | 64px | Major section spacing |
| `space-4xl` | 96px | Hero section spacing |

### Layout Spacing
- **Container Padding**: 2rem (32px) horizontal
- **Section Padding**: 4rem (64px) vertical
- **Grid Gap**: 2rem (32px)
- **Navigation Item Spacing**: 2rem (32px)
- **Button Padding**: 1rem (16px) vertical, 1.5rem (24px) horizontal
- **Card Padding**: 1.25rem (20px)

---

## 4. ELEVATION & SHADOWS

### Shadow Tokens
| Token Name | Value | Usage |
|-----------|-------|-------|
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)` | Subtle depth |
| `shadow-md` | `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)` | Standard depth |
| `shadow-lg` | `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)` | Prominent depth |
| `shadow-button` | `0 2px 4px rgba(0,0,0,0.2)` | Button elevation |
| `shadow-nav` | `0 2px 4px rgba(0,0,0,0.3)` | Navigation bar |

---

## 5. BORDER RADIUS

### Radius Tokens
| Token Name | Value | Usage |
|-----------|-------|-------|
| `radius-none` | 0px | Sharp corners (primary style) |
| `radius-sm` | 4px | Input fields, small elements |
| `radius-md` | 6-8px | Cards, buttons |
| `radius-lg` | 12px | Large components |
| `radius-full` | 9999px | Circular elements |

**Note**: Primary design uses sharp corners (0px) for most elements to maintain futuristic aesthetic.

---

## 6. BUTTON STYLES

### Primary Button (Buy Now style)
```css
background: #FFD700;
color: #000000;
border: none;
padding: 1rem 1.5rem;
border-radius: 0px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.5px;
transition: all 0.2s ease-in-out;
```

**Hover State**:
- Background: `#FFC125` (slightly darker)
- Optional: Text color `#FFFFFF`

### Secondary Button (Learn More style)
```css
background: transparent;
color: #00FFFF;
border: 2px solid #00FFFF;
padding: 0.75rem 1.5rem;
border-radius: 0px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.5px;
transition: all 0.2s ease-in-out;
```

**Hover State**:
- Background: `#00FFFF`
- Color: `#000000`

### Submit Button
```css
background: #F0E68C;
color: #000000;
border: 1px solid #000000;
padding: 1rem 1.5rem;
border-radius: 4-6px;
font-weight: 600;
text-transform: uppercase;
```

---

## 7. FORM ELEMENTS

### Input Fields
```css
background: transparent;
border: 2px solid #000000;
padding: 1rem;
border-radius: 4-6px;
font-size: 18px;
color: #000000;
transition: all 0.3s ease;
```

**Focus State**:
- Border color: `#00FFFF`
- Box-shadow: `0 0 0 3px rgba(0, 255, 255, 0.2)`

### Checkbox
```css
border: 1px solid #CCCCCC;
width: 18px;
height: 18px;
border-radius: 2px;
```

**Checked State**:
- Background: `#00FFFF`
- Border: `#00FFFF`

---

## 8. NAVIGATION BAR

### Desktop Navigation
```css
background: #2D2D2D;
height: 64px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 2rem;
box-shadow: 0 2px 4px rgba(0,0,0,0.3);
```

### Logo
- Font: Custom futuristic
- Size: 32-48px
- Weight: 900
- Color: `#FFFFFF` or `#000000` (depending on background)

### Navigation Items
- Font size: 14-16px
- Weight: 600
- Text transform: Uppercase
- Letter spacing: 1px
- Spacing: 2rem between items
- Hover: Color change to `#00FFFF`

### Dropdown Indicator
- Size: 8px
- Color: `#FFFFFF`
- Symbol: ▼

---

## 9. LAYOUT SYSTEM

### Container
```css
max-width: 1280px;
margin: 0 auto;
padding: 0 2rem;
```

### Grid System
- **Columns**: 12-column grid
- **Desktop**: 1024px+ (4 columns for cards)
- **Tablet**: 768px-1023px (2 columns)
- **Mobile**: <768px (1 column)

### Grid Gap
- Desktop: 2rem (32px)
- Tablet: 1.5rem (24px)
- Mobile: 1rem (16px)

---

## 10. CARD COMPONENT

### Card Style
```css
background: #000000;
border: 1px solid #00FFFF;
padding: 1.25rem;
border-radius: 0px;
transition: all 0.3s ease;
```

### Card Hover
- Box-shadow: `0 4px 12px rgba(0, 255, 255, 0.3)`
- Transform: `translateY(-4px)`

### Card Elements
- **Title**: 24-30px, bold, uppercase, `#FFFFFF`
- **Description**: 16px, regular, `#CCCCCC`
- **Button**: Secondary button style
- **Platform Text**: 12-14px, `#FFFFFF`

---

## 11. HERO SECTION

### Layout
```css
background: linear-gradient(to bottom, #FFD700, #FFC125);
padding: 6rem 2rem;
text-align: center;
```

### Hero Headline
```css
font-size: 72px;
font-weight: 900;
line-height: 1.1;
text-transform: uppercase;
color: #000000;
max-width: 800px;
margin: 0 auto;
```

### Hero Subtitle
```css
font-size: 18px;
font-weight: 400;
color: #000000;
margin: 1.5rem 0;
```

### Hero Buttons
- Display: Flex
- Gap: 2rem
- Justify: Center
- Margin-top: 2rem

---

## 12. FOOTER

### Structure
```css
background: #000000;
padding: 4rem 2rem;
```

### Footer Sections
1. **Social Media**
   - Title: 16px, `#FFFFFF`
   - Icons: 32px, `#00FFFF`
   - Spacing: 1.5rem between icons

2. **Sponsor Logos**
   - Grid layout
   - Gap: 2rem
   - Filter: grayscale(100%)
   - Opacity: 0.7

3. **Footer Links**
   - Font: 12-14px
   - Color: `#00FFFF`
   - Spacing: 1rem between links
   - Hover: Underline

---

## 13. INTERACTION PATTERNS

### Transitions
```css
transition-duration: 0.2s; /* Buttons */
transition-duration: 0.3s; /* Navigation, cards */
transition-timing-function: ease-in-out;
```

### Hover Effects
- **Buttons**: Background color change, slight scale (1.05)
- **Cards**: Lift effect (translateY -4px), glow effect
- **Links**: Color change, underline appearance
- **Navigation**: Background darkens, color brightens

### Active States
- **Buttons**: Scale down to 0.98
- **Links**: Maintain underline, darker color

### Focus States
- Outline: `2px solid #00FFFF`
- Offset: `2px`

---

## 14. RESPONSIVE BREAKPOINTS

| Breakpoint | Max Width | Columns | Adjustments |
|-----------|-----------|---------|-------------|
| Mobile | 767px | 1 | Stack everything vertically |
| Tablet | 1023px | 2-4 | Adjust grid, hide secondary elements |
| Desktop | 1024px+ | 4-12 | Full layout |

### Mobile Specific
- Navigation: Hamburger menu
- Hero: Stack buttons vertically
- Typography: Scale down 30-40%
- Spacing: Reduce by 50%

---

## 15. UNIQUE DESIGN ELEMENTS

### Brand Elements
1. **Custom Futuristic Typography**: Angular, condensed fonts for headings
2. **High-Contrast Color Scheme**: Yellow/black with cyan accents
3. **Sharp Corners**: 0px border-radius for most elements
4. **Jagged Dividers**: Industrial/cyberpunk inspired section separators
5. **Minimalist Navigation**: Clean, uncluttered with clear CTAs

### Visual Effects
- Gradient backgrounds (yellow to gold)
- Cyan accent borders
- Subtle glow effects on hover
- High contrast for accessibility

---

## 16. ACCESSIBILITY

### Color Contrast
- All text meets WCAG 2.1 AA standards (4.5:1 minimum)
- High contrast between yellow background and black text
- Cyan accents used with sufficient contrast

### Keyboard Navigation
- Visible focus indicators (cyan outline)
- Logical tab order
- Skip navigation link

### Screen Reader
- Proper ARIA labels for interactive elements
- Semantic HTML structure
- Alt text for images

---

## 17. CSS CUSTOM PROPERTIES REFERENCE

```css
:root {
  /* Colors */
  --color-primary: #FFD700;
  --color-primary-dark: #FFC125;
  --color-secondary: #FFF500;
  --color-accent-cyan: #00FFFF;
  --color-accent-red: #FF0033;
  --color-background-dark: #1A1A1A;
  --color-background-nav: #2D2D2D;
  --color-black: #000000;
  --color-white: #FFFFFF;

  /* Typography */
  --font-display: 72px;
  --font-heading-xl: 48px;
  --font-heading-lg: 32px;
  --font-heading-md: 24px;
  --font-body-lg: 18px;
  --font-body-md: 16px;
  --font-body-sm: 14px;
  --font-caption: 12px;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  --shadow-md: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  --shadow-lg: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  --shadow-button: 0 2px 4px rgba(0,0,0,0.2);
  --shadow-nav: 0 2px 4px rgba(0,0,0,0.3);
}
```

---

## 18. IMPLEMENTATION CHECKLIST

- [ ] Set up CSS custom properties
- [ ] Implement navigation bar with dropdown functionality
- [ ] Create hero section with gradient background
- [ ] Build card grid system with responsive breakpoints
- [ ] Style all button variants with hover/active states
- [ ] Implement form elements (inputs, checkboxes)
- [ ] Create footer with social icons and links
- [ ] Add transition animations
- [ ] Ensure accessibility (contrast, focus states, ARIA labels)
- [ ] Test responsive behavior across breakpoints
- [ ] Optimize for performance (lazy loading, font optimization)

---

## 19. COMPONENT HTML STRUCTURE REFERENCE

```html
<!-- Navigation -->
<nav class="navbar">
  <div class="navbar-container">
    <a href="#" class="navbar-logo">LOGO</a>
    <div class="navbar-menu">
      <a href="#" class="navbar-item">Link 1</a>
      <a href="#" class="navbar-item">Link 2</a>
      <a href="#" class="navbar-item">Link 3</a>
      <button class="btn-primary">CTA</button>
    </div>
  </div>
</nav>

<!-- Hero Section -->
<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">HEADLINE</h1>
    <p class="hero-subtitle">Subtitle text</p>
    <div class="hero-actions">
      <button class="btn-primary">Primary</button>
      <button class="btn-secondary">Secondary</button>
    </div>
  </div>
</section>

<!-- Card Grid -->
<section class="grid-section">
  <div class="grid-container">
    <article class="card">
      <div class="card-content">
        <h3 class="card-title">Title</h3>
        <p class="card-description">Description</p>
        <button class="btn-secondary">Learn More</button>
      </div>
    </article>
  </div>
</section>

<!-- Footer -->
<footer class="footer">
  <div class="footer-content">
    <div class="footer-section">Social</div>
    <div class="footer-section">Links</div>
    <div class="footer-section">Legal</div>
  </div>
</footer>
```

---

## Notes
- This spec is based on visual analysis of reference screenshots
- Adjust colors and spacing as needed for your brand
- Test with real content to ensure typography scales properly
- Consider using CSS-in-JS or Tailwind classes for implementation
- Maintain the futuristic, high-contrast aesthetic throughout
