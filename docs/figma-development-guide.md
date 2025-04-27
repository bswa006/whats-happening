Absolutely! Here’s the **complete copyable documentation** combining all our discussions — covering the **Figma guidelines for clean HTML/CSS migration using tools**, plus how to structure complex visual components like your tile cards.

You can use this as a base doc for internal team handoffs, design-dev workflows, or even Figma plugin automation setup.

---

# 🧩 Figma Guidelines for Seamless HTML/CSS Code Export

## ✨ Purpose

To create **developer-friendly, export-ready Figma files** that tools like Locofy, Anima, TeleportHQ, or custom Figma-to-Code scripts can convert into **clean, semantic, and responsive HTML/CSS (or Tailwind/React) code**.

---

## 📁 File & Layer Organization

| Rule                                                    | Why It Matters                                              |
| ------------------------------------------------------- | ----------------------------------------------------------- |
| Use **Frames**, not Groups                              | Maps directly to `<div>` or container elements              |
| **Name Frames Semantically**                            | Helps generate class names like `.card.primary`, `.nav.top` |
| Organize by hierarchy (Header > Nav > Content > Footer) | Improves semantic output                                    |
| Limit nesting to 3–4 levels                             | Prevents deeply nested/bloated HTML                         |
| Keep shared elements as **Components**                  | Enables reuse and DRY code export                           |

---

## ⚙️ Auto Layout & Constraints

| Guideline                                                         | Implementation Note                        |
| ----------------------------------------------------------------- | ------------------------------------------ |
| Use **Auto Layout** for every section, card, or button            | Maps well to Flexbox (`display: flex`)     |
| Always define **padding, gaps, alignment**                        | Ensures spacing consistency in output      |
| Set **Constraints** for responsiveness (e.g. Left, Right, Center) | Enables responsive CSS export              |
| Use **Fill Container** or **Hug Contents** smartly                | Prevents hardcoded sizing in generated CSS |

---

## 🎨 Design Tokens & Styles

| Type       | Best Practice                                                  |
| ---------- | -------------------------------------------------------------- |
| Colors     | Define and apply **Color Styles** (`Primary`, `Surface`, etc.) |
| Typography | Use **Text Styles** for font, size, line height                |
| Effects    | Use **Effect Styles** for shadows, borders, etc.               |
| Spacing    | Stick to consistent units (e.g., 8/16/24 px spacing system)    |
| Radius     | Use consistent corner radii (e.g., 8px or 12px across cards)   |

✅ Tools can convert these into CSS variables or Tailwind classes.

---

## 📦 Component Usage

| Component Type | Best Practice                                                |
| -------------- | ------------------------------------------------------------ |
| Buttons        | Create once, reuse with variants (Primary, Secondary, Ghost) |
| Cards / Tiles  | Structure with BG color + BG graphic + text inside frame     |
| Forms          | Label, Input, Hint text should be grouped logically          |
| Icons          | Use **SVGs**, not raster images                              |
| Images         | Avoid masking unless necessary; use `object-fit` support     |

---

## 🧱 Example: Visual Tile (Card) Setup

```
Tile Frame (Rounded, Overflow Hidden)
├── Layer 1: Background Color (e.g., orange)
├── Layer 2: SVG Background Visual (absolute positioned)
├── Layer 3: Text ("PLAN YOUR WEEKEND")
```

| Figma Element      | Export Mapping                           |
| ------------------ | ---------------------------------------- |
| Background Color   | `bg-orange-500` or `background: #f26722` |
| SVG Shape          | `position: absolute; opacity: 0.3`       |
| Text (White, Bold) | `text-white font-bold`                   |

✅ Make these reusable via component variants (`Card/WeekendTile`, etc.)

---

## 🖥️ Responsive Design Tips

| Technique           | Figma Practice                    |
| ------------------- | --------------------------------- |
| Responsive sections | Use layout grids (12-column grid) |
| Resize rules        | Define Hug/Fill, Min/Max width    |
| Stacking/resizing   | Leverage Auto Layout flexibility  |
| Visual hierarchy    | Avoid unnecessary nesting         |

---

## 🧼 Cleanup & Export Prep

| Before Export                                      | Why                                      |
| -------------------------------------------------- | ---------------------------------------- |
| Remove unused layers/groups                        | Avoids junk in codebase                  |
| Flatten decorative illustrations (as SVG)          | Keeps export light and modular           |
| Slice or Export assets manually (if needed)        | Gives control over filenames, resolution |
| Avoid `Vector Masks`, `Clipping`, or `Blend Modes` | Difficult for HTML/CSS to replicate      |

---

## 🔠 Naming Conventions

| Figma Name Example | Code Mapping                      |
| ------------------ | --------------------------------- |
| `Card/Primary`     | `.card.primary`                   |
| `Button/SignUp`    | `.button.signup`                  |
| `Text/HeadingLg`   | `.text-heading-lg`                |
| `Icon/LocationPin` | `<svg class="icon-location-pin">` |

✅ Avoid generic names like `Group 15`, `Frame 1`, `Rectangle 7`.

---

## 🚫 Avoid These

- ❌ Deep group nesting
- ❌ Bitmap-only icons (always prefer SVGs)
- ❌ Arbitrary pixel values (e.g., 13px, 23px)
- ❌ Multiple shadows or masked layers
- ❌ Layers without names

---

## 🧩 Tool-Specific Tips

### **Locofy**

- Tag elements with `div`, `button`, `nav` using plugin
- Define `onclick`, `href`, `props` via Locofy Properties

### **Anima**

- Use “link” / “button” tag inside Figma via plugin
- Create **Variants** for interactivity (hover, pressed)

### **TeleportHQ**

- Focus on Auto Layout + semantic names
- Use `Component Sets` for repeated blocks

---

## ✅ Final Checklist

- [ ] Use Frames with Auto Layout
- [ ] Components used for reusable UI
- [ ] Styles applied (Color/Text/Effects)
- [ ] Semantic, consistent layer names
- [ ] Assets exported as SVG
- [ ] Layout grid and spacing token followed
- [ ] Responsive constraints set

---
