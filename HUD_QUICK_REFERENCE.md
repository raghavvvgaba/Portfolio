# Cyberpunk HUD Card - Quick Reference

## 🎯 Core Design

**Style**: Brutalist, futuristic, dystopian HUD interface
**Inspiration**: Night City overlays, military-grade cybernetic UIs
**Primary Color**: Neon-yellow `#FCEE0C` (ALL cards use this)

---

## 🖼️ HUD Frame SVG Coordinates

ViewBox: `0 0 100 100`

### Corner Brackets (Primary Frame)
```
Top-Left:    (8,8) → (23,8) and (8,8) → (8,23)
Top-Right:   (92,8) → (77,8) and (92,8) → (92,23)
Bottom-Right: (92,92) → (92,77) and (92,92) → (77,92)
Bottom-Left: (8,92) → (8,77) and (8,92) → (23,92)
```

### Border Lines with Gaps
```
Top:    25→64, gap, 66→75    (gap at 65%)
Bottom: 25→44, gap, 46→75    (gap at 45%)
Left:   25→71, gap, 73→85    (gap at 72%)
Right:  25→61, gap, 63→85    (gap at 62%)
```

### Inner Border (Depth Layer)
```
Rectangle from (12,12) to (88,88)
Stroke width: 0.5px, Opacity: 0.3
```

### Technical Markers
```
Crosshairs at: (20,80) and (80,20)
Plus signs at: (85,50) and (50,85)
Tick marks: 8 total along edges at 30%, 35%, 65%, 70%
Corner dots: 8 total at corner reinforcement points
```

---

## ✨ Glow Filter

```xml
<filter id="crispGlow">
  <feGaussianBlur stdDeviation="1" result="blur"/>
  <feFlood flood-color="#FCEE0C" flood-opacity="0.5" result="glow"/>
  <feComposite in="glow" in2="blur" operator="in" result="coloredBlur"/>
  <feMerge>
    <feMergeNode in="coloredBlur"/>
    <feMergeNode in="SourceGraphic"/>
  </feMerge>
</filter>
```

**Key**: stdDeviation="1" = crisp, not soft

---

## 🌫️ Background Patterns

### Scanlines (CRT effect)
```css
repeating-linear-gradient(
  0deg,
  transparent,
  transparent 1px,
  rgba(0, 0, 0, 0.1) 1px,
  rgba(0, 0, 0, 0.1) 2px
)
```

### Grid (Technical dots)
```css
radial-gradient(circle at 1px 1px, rgba(252, 238, 12, 0.08) 0.5px, transparent 0.5px)
```

---

## 📐 Spacing Values

| Element | Value |
|---------|-------|
| Card padding | 1.5rem (24px) |
| Grid gap | 2rem (32px) |
| Min card height | 480px |
| Outer frame inset | 8px |
| Inner border offset | 4px |
| Corner bracket arm | 15px |
| Border gap size | 2px |

---

## 🎭 Key Features

✅ **Sharp Geometry**: 90° corners only, no rounded edges
✅ **Segmented Design**: Broken borders with intentional gaps
✅ **Asymmetrical**: Not all corners identical (some have micro L, some don't)
✅ **Layered**: Multiple border layers for depth
✅ **Technical**: Tick marks, crosshairs, plus signs
✅ **Crisp Glow**: stdDeviation="1", not soft/blurry
✅ **Patterns**: Scanlines + grid overlay
✅ **Color**: Neon-yellow (#FCEE0C) on ALL cards

---

## 🚀 Files Modified

1. **`src/components/Skills.jsx`** - Complete redesign with HUD frame
2. **`src/index.css`** - Added pulse animation

---

## 🎯 Design Goals Met

- Cyberpunk HUD aesthetic ✅
- Futuristic frame ✅
- Neon technical border ✅
- Glitch-ready UI ✅
- Sci-fi interface ✅
- Sharp geometry ✅
- Digital overlay ✅
- Military-grade UI ✅

---

## 💡 Tips for Customization

**To change border color**:
- Replace `#FCEE0C` with desired color in SVG paths and glow filter

**To adjust glow intensity**:
- Change `flood-opacity` from 0.5 (subtle) to higher value

**To modify corner design**:
- Edit the corner bracket paths in the SVG

**To change gap positions**:
- Adjust the start/end points of border line paths

**To adjust spacing**:
- Change inset values (8px, 12px) in SVG coordinates

---

**Night City Ready. System Online.** ⚡
