# Component Architecture Blueprint

## 🏗️ Component Hierarchy

```
RootLayout (layout.tsx)
│
├── Metadata & Global Providers
│   ├── Fonts (Space Mono, Space Grotesk)
│   ├── Global Styles (globals.css)
│   └── Meta Tags (OG, Twitter, etc.)
│
└── Page (page.tsx)
    │
    ├── Background Effects
    │   ├── Gradient Overlay
    │   └── Noise Texture
    │
    ├── Navigation Beacon
    │   ├── Work Link
    │   ├── Skills Link
    │   └── Contact Link
    │
    ├── Hero Section
    │   └── ControlRoom (Hero Component)
    │       ├── Left Column (Content)
    │       │   ├── Header Container
    │       │   ├── Status Indicator
    │       │   ├── Metrics Grid
    │       │   │   └── MetricCard × 4
    │       │   └── CTA Buttons
    │       │
    │       └── Right Column (3D Canvas)
    │           └── InteractiveMesh3D
    │               ├── Canvas (Three.js)
    │               ├── AnimatedMesh
    │               │   ├── Icosahedron (Primary)
    │               │   ├── Octahedron (Wireframe)
    │               │   ├── Points (Particle System)
    │               │   └── Sphere (Ambient)
    │               ├── SceneLighting
    │               │   ├── Directional Lights × 2
    │               │   ├── Point Lights × 2
    │               │   └── Ambient Light
    │               └── OrbitControls
    │
    ├── Case Studies Section
    │   └── CaseStudies
    │       ├── Section Header
    │       └── Studies Grid
    │           └── CaseStudyCard × 6
    │               ├── Card Header
    │               ├── Card Meta (Subtitle, Focus)
    │               ├── Narrative
    │               ├── Expandable Content
    │               │   └── Pillars
    │               │       └── Pillar × 3
    │               ├── Tags Container
    │               └── CTAs Container
    │
    ├── Skills Section
    │   └── SkillsMatrix
    │       ├── Section Header
    │       └── Columns Container
    │           ├── SkillsColumn (Product Operations)
    │           │   ├── Column Header
    │           │   └── Groups Grid
    │           │       └── SkillGroupCard × 3
    │           │           ├── Group Header
    │           │           └── Skills List
    │           │               └── SkillItem × N
    │           │
    │           └── SkillsColumn (Technical Infrastructure)
    │               └── [Same structure as above]
    │
    └── Footer Section
        └── Footer
            ├── Background Grid
            ├── Main CTA ("INITIALIZE COMMUNICATIONS")
            ├── Contact Nodes Grid
            │   └── ContactNode × 3
            │       ├── Icon
            │       ├── Text Container
            │       └── Arrow
            ├── Footer Metadata
            └── Status Pulse
```

---

## 📦 Component Dependencies Map

```
globals.css (Theme & Variables)
   │
   ├─→ page.module.css
   │    └─→ page.tsx
   │        ├─→ ControlRoom.tsx
   │        │    ├─→ ControlRoom.module.css
   │        │    └─→ InteractiveMesh3D.tsx
   │        │         └─→ [React Three Fiber Dependencies]
   │        │
   │        ├─→ CaseStudies.tsx
   │        │    └─→ CaseStudies.module.css
   │        │
   │        ├─→ SkillsMatrix.tsx
   │        │    └─→ SkillsMatrix.module.css
   │        │
   │        └─→ Footer.tsx
   │             └─→ Footer.module.css
   │
   ├─→ BentoGrid.tsx
   │    ├─→ BentoGrid.module.css
   │    └─→ [Framer Motion]
   │
   └─→ layout.tsx
        └─→ [Next.js Metadata API]
```

---

## 🎨 Styling Architecture

### CSS Module Organization

Each component has its own scoped CSS module:

```typescript
// Component imports its module
import styles from './ComponentName.module.css';

// Classes are scoped to component
<div className={styles.className}>
```

### Global vs. Scoped Styles

**Global** (`globals.css`):
- Theme variables (colors, fonts)
- Typography hierarchy
- Reset & base styles
- Utility classes
- Animations keyframes

**Scoped** (`ComponentName.module.css`):
- Component-specific layouts
- Component-specific animations
- Responsive breakpoints
- Variant styles (`.color-cyan`, `.span-col-2`, etc.)

---

## 🎬 Animation Architecture

### Framer Motion Patterns

**1. Entry Animations (On Mount)**
```typescript
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

<motion.div
  initial="hidden"
  animate="visible"
  variants={variants}
/>
```

**2. Scroll Triggers (Viewport Detection)**
```typescript
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
/>
```

**3. Hover States**
```typescript
<motion.div whileHover={{ y: -8, scale: 1.02 }} />
```

**4. Continuous Loops**
```typescript
<motion.div
  animate={{
    opacity: [1, 0.6, 1],
    scale: [1, 1.05, 1]
  }}
  transition={{ duration: 2, repeat: Infinity }}
/>
```

**5. Staggered Children**
```typescript
<motion.div
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {children.map((child) => (
    <motion.div variants={itemVariants} />
  ))}
</motion.div>
```

---

## 🎮 3D Canvas Architecture (React Three Fiber)

### InteractiveMesh3D Component Structure

```typescript
<Canvas>  // Three.js WebGL Context
  │
  ├── SceneLighting
  │   ├── Directional Light (Main, 1.2 intensity)
  │   ├── Directional Light (Fill, 0.6 intensity)
  │   ├── Point Light (Cyan, #00F2FE)
  │   ├── Point Light (Green, #10B981)
  │   └── Ambient Light (Global fill)
  │
  ├── AnimatedMesh (useFrame hook for rotation)
  │   ├── Icosahedron (Primary mesh)
  │   │   └── meshPhongMaterial (Color + Emissive)
  │   │
  │   ├── Octahedron (Wireframe overlay)
  │   │   └── meshPhongMaterial (Wireframe mode)
  │   │
  │   ├── Points (Particle system)
  │   │   └── pointsMaterial (Small dots)
  │   │
  │   └── Sphere (Ambient glow background)
  │       └── meshPhongMaterial (BackSide rendering)
  │
  ├── OrbitControls
  │   ├── autoRotate (Continuous rotation)
  │   ├── Mouse tracking disabled
  │   └── Zoom disabled
  │
  └── Event Listeners (Mouse tracking)
      └── Adjust mesh rotation based on cursor position
```

### Mouse Tracking Flow

```
window.mousemove event
  │
  └─→ Calculate normalized mouse position
       │
       ├─→ mouseRef.current.x = (clientX / width) * 2 - 1
       ├─→ mouseRef.current.y = -(clientY / height) * 2 + 1
       │
       └─→ useFrame() applies interpolation
           │
           └─→ Smooth rotation toward cursor (0.05 lerp)
```

---

## 🔄 Data Flow Patterns

### Case Studies Data Flow

```
CASE_STUDIES Array (CaseStudies.tsx)
  │
  ├─→ map() over array
  │    │
  │    └─→ CaseStudyCard component
  │         │
  │         ├─→ Display static content
  │         ├─→ isExpanded state (toggle)
  │         └─→ Conditional render of pillar details
  │
  └─→ Framer Motion variants applied to each card
       └─→ Staggered entry animation on viewport detection
```

### Skills Matrix Data Flow

```
PRODUCT_OPERATIONS + TECHNICAL_INFRASTRUCTURE Arrays
  │
  ├─→ SkillsMatrix component
  │    │
  │    └─→ Two SkillsColumn components (parallel)
  │         │
  │         ├─→ map() over skill groups
  │         │    │
  │         │    └─→ SkillGroupCard component
  │         │         │
  │         │         └─→ map() over skills
  │         │              │
  │         │              └─→ SkillItem component
  │         │
  │         └─→ Staggered animation via variants
  │
  └─→ Color-coded by category (--color-cyan vs --color-green)
```

---

## 📱 Responsive Breakpoints

### Mobile-First Design

**All breakpoints defined in component CSS modules**:

```css
/* Mobile (default) */
/* < 640px */

/* Tablet */
@media (max-width: 768px) { ... }

/* Medium Desktop */
@media (max-width: 1024px) { ... }

/* Large Desktop */
@media (min-width: 1024px) { ... }

/* 4K */
@media (min-width: 1400px) { ... }
```

### Responsive Adjustments

- **Grid**: Single column → Multiple columns as viewport grows
- **Typography**: `clamp(min, vw, max)` for fluid sizing
- **Spacing**: Reduced padding/margins on mobile
- **Navigation**: Fixed nav beacon stays visible on mobile
- **3D Canvas**: Height adjusted based on viewport

---

## 🔐 Type Safety (TypeScript)

### Component Props Types

```typescript
interface CaseStudy {
  id: string;
  title: string;
  emoji?: string;
  pillars: { title: string; description: string; details: string[] }[];
  tags: string[];
  ctas: { label: string; href?: string }[];
  color?: 'cyan' | 'green' | 'violet';
}

interface SkillGroup {
  category: string;
  icon: string;
  color: 'cyan' | 'green';
  skills: string[];
}

interface BentoItemProps {
  id: string;
  children: ReactNode;
  colSpan?: number;
  rowSpan?: number;
  glassEffect?: boolean;
  borderColor?: 'cyan' | 'green' | 'violet' | 'neutral';
}
```

---

## 🚀 Performance Considerations

### Optimization Techniques Used

1. **CSS Modules**: No global style conflicts
2. **Framer Motion**: GPU-accelerated animations
3. **React Three Fiber**: Efficient 3D rendering
4. **Code Splitting**: Next.js automatic
5. **Image Lazy Loading**: (Setup ready in layout)
6. **Font Optimization**: Preloaded in layout
7. **Viewport Detection**: Only animate visible elements

### Optional Further Optimizations

```typescript
// Dynamic import for heavy 3D component
const InteractiveMesh3D = dynamic(
  () => import('@/components/InteractiveMesh3D'),
  { ssr: false }
);
```

---

## 🎯 Next Steps for Development

### Adding a New Section

1. Create component file: `NewSection.tsx`
2. Create styles: `NewSection.module.css`
3. Define data structure (array or object)
4. Add Framer Motion variants for animation
5. Import in `page.tsx`
6. Add scroll anchor link in navigation

### Modifying Existing Sections

1. Update data array in component file
2. Component automatically re-renders
3. Adjust CSS in module file as needed
4. Test at all responsive breakpoints

### Customizing 3D Mesh

1. Edit `InteractiveMesh3D.tsx`
2. Change geometry types from Three.js
3. Modify material colors and properties
4. Adjust rotation speeds in `useFrame()`
5. Update lighting setup as needed

---

**Component Architecture Designed for Scale, Maintainability & Performance**
