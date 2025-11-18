# Basic Scrolling Animation in React



https://github.com/user-attachments/assets/860fd942-433c-40cb-90d6-d46665be939d



# 🚀 Modern Scroll Animation Websites - Complete Guide

## 🧠 BIG PICTURE FIRST — How do modern scroll animation websites work?

Websites like:
- **Apple product pages**
- **Nike shoe showcase**
- **Luxury fashion scrollytelling**
- **Portfolio websites**

…ALL use **scroll-based animations**, meaning:

> **"The page does NOT scroll normally. Instead, your scroll acts like a timeline that drives animations."**

**You scroll → animation changes.**

That's exactly what you're building.

---

## 🛠️ The Tech Stack

To do this professionally, developers use:

### 🟢 1. GSAP (GreenSock Animation Platform)

#### ✔ What is GSAP?

GSAP is **the most powerful animation library in the world** for the web.

It lets you animate:
- Images
- Text
- Colors
- Positions
- Opacity
- Rotation
- Scale
- Even SVG and canvas

**GSAP = like After Effects for web animation.**

#### Why we used GSAP:
- ✅ Smooth animations
- ✅ Very stable at high performance
- ✅ Used by professional websites
- ✅ Very easy to control with scroll
- ✅ Perfect for "as-you-scroll-change-shirt" animation

> If you want real-world animation websites → **GSAP is the tool.**

---

### 🟣 2. ScrollTrigger (GSAP plugin)

#### ✔ What is ScrollTrigger?

A plugin that **connects your scroll to an animation timeline**.

It does:

| Feature | Description |
|---------|-------------|
| **"Pin" a section** | Keeps a section stuck during scrolling (like Apple product pages) |
| **"Scrub" animation** | When you scroll up/down → animation reverses correctly |
| **"Timeline control"** | Lets you play animations frame by frame based on scroll position |
| **"Start" and "end" points** | Defines how long the animation should run |

#### Why we used ScrollTrigger:

Because you wanted:

> _"The page should not move, only the T-shirt animation should change when scrolling."_

That is exactly what `pin: true` does.

---

### 🟠 3. Locomotive Scroll (Optional — but Approach #1 recommends it)

**Locomotive Scroll** gives:
- Smooth scrolling (momentum scroll)
- Inertia
- Parallax effects
- Better "premium feel"

ScrollTrigger works perfectly with Locomotive Scroll when connected.

#### Why we didn't add it YET:
Beginners get confused.

#### But Approach 1 recommended it because:
- Smooth scrolling + GSAP = **premium website feeling**
- Used by **luxury brands, fashion sites, agencies, Apple clones**

> If you want it later → I'll set it up for you.

---

### 🟡 4. React useLayoutEffect

We use `useLayoutEffect` instead of `useEffect` because:

- ✅ GSAP needs DOM elements **BEFORE painting**
- ✅ It prevents flickers
- ✅ Animations load correctly

So this:
```javascript
useLayoutEffect(() => {
    // gsap animations
}, []);
```

is the **right way** to run GSAP in React.

---

## 🧩 How Everything Connects (Very Important)
```
🎬 GSAP creates animations
   ↓
   (e.g., fade shirts, rotate, scale)
   ↓
🌀 ScrollTrigger connects scroll ↔ animation timeline
   ↓
   (scroll moves timeline)
   ↓
📌 ScrollTrigger pins section
   ↓
   (so the page doesn't move)
   ↓
⚛️ React shows HTML + GSAP controls it
```

---

## 🧠 The Magic Line That Makes Everything Work
```javascript
scrollTrigger: {
    trigger: containerRef.current,
    start: "top top",
    end: "bottom+=1500 top",
    scrub: true,
    pin: true,
}
```

### Breakdown:

| Property | Meaning |
|----------|---------|
| `trigger` | The section to animate |
| `start: "top top"` | Start when section hits top of screen |
| `end: "bottom+=1500 top"` | Scroll distance of animation (1500px extra) |
| `scrub: true` | Scroll controls animation |
| `pin: true` | Freeze the section while animating |

> **This is why the page stays still and only the T-shirt changes.**

---

## 🧠 What EXACTLY happens in your animation code?

### Step-by-step breakdown:

#### 1. Load the first shirt
```javascript
src={tshirt1}
```

#### 2. As you scroll:
**Fade out → swap image → fade in**
```javascript
tl.to(img, { opacity: 0 })
  .set(img, { src: tshirt2 })
  .to(img, { opacity: 1 })
```

#### 3. Repeat for 3rd shirt

#### 4. Add rotation + scaling for smooth feeling
```javascript
tl.to(img, { 
    rotation: 360, 
    scale: 1.2 
})
```

---

## 📦 Installation
### 🔹 Clone This Repository
```bash
# Clone the repository
git clone https://github.com/kunalpohakar/Scrolling-Animation-in-React.git

# Navigate to the project directory
cd Scrolling-Animation-in-React/animated-scroll/

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will open at `http://localhost:5173`

---
