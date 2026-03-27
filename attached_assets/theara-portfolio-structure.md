# Kim Theara — Portfolio Website Blueprint
> Full structure, copywriting, layout, and design specifications

---

## 1. Design System

### Typography
| Role | Font | Size | Weight | Style |
|---|---|---|---|---|
| Display / Hero | Fraunces (serif) | 88–96px | 700 | Normal or italic |
| Section Headline | Fraunces (serif) | 48–64px | 600 | Normal |
| Subheadline | Fraunces (serif) | 28–36px | 400 | Italic |
| Section Label | Inter (sans) | 12–13px | 600 | Uppercase, letter-spaced 0.15em |
| Body / Paragraph | Inter (sans) | 16–18px | 400 | Normal, line-height 1.75 |
| Caption / Small | Inter (sans) | 13–14px | 400 | Normal, warm gray |
| Stats / Numbers | Fraunces (serif) | 48–64px | 700 | Normal |
| Button | Inter (sans) | 14–15px | 500 | Normal, letter-spaced 0.05em |

**Rationale:** Mixing a warm serif with a clean sans-serif is the same principle Kim Theara wrote about in his 981-clap Typography Guide. The portfolio itself demonstrates the theory.

---

### Color Palette
| Name | Hex | Usage |
|---|---|---|
| Warm White | `#FAFAF8` | Main background |
| Warm Cream | `#F2EDE7` | Section alternates, cards |
| Near-Black | `#111111` | Primary text, headlines |
| Warm Gray | `#6B6860` | Secondary text, captions |
| Terracotta | `#C85438` | Accent color, labels, CTAs, hover states |
| Terracotta Light | `#F0C4B4` | Accent backgrounds, tags |
| Border | `#E8E2DA` | Dividers, card borders |
| White | `#FFFFFF` | Nav background on scroll, cards |

---

### Spacing & Layout
| Property | Value |
|---|---|
| Max content width | 1200px |
| Comfortable reading column | 680px |
| Section vertical padding | 120px top / 120px bottom |
| Mobile section padding | 64px top / 64px bottom |
| Grid gutter | 32px |
| Card padding | 40px |

---

### Motion & Interactions
| Trigger | Effect |
|---|---|
| Page load | Hero text fades in, bottom to top, staggered 0.2s delay per element |
| Scroll into view | Sections fade up with 30px translate, 0.6s ease |
| Nav on scroll | Transparent → frosted white with blur, smooth 0.3s |
| Nav hide/show | Hides on scroll down, reappears on scroll up |
| Button hover | Terracotta fill darkens, subtle lift shadow |
| Project card hover | Image scale 1.03, title color → terracotta |
| Article card hover | Underline animation on title, arrow nudge right |
| Stats on scroll-in | Numbers count up from 0 (1.2s duration) |
| Photo | Subtle parallax on scroll in hero |

---

## 2. Navigation

### Structure
```
[Kim Theara]                    [Work]  [Research]  [Writing]  [Connect]
```

### Behavior
- **Default state:** Fully transparent background, dark text
- **Scrolled state:** White background with subtle blur (`backdrop-filter: blur(12px)`), thin bottom border `#E8E2DA`
- **Scroll-aware:** Hides when scrolling down more than 80px, reappears instantly when scrolling up
- **Mobile:** Hamburger menu → full-screen overlay with links stacked vertically, large Fraunces text
- **Active state:** Current section link shows terracotta color

### Copy
| Element | Text |
|---|---|
| Logo | `Kim Theara` |
| Link 1 | `Work` |
| Link 2 | `Research` |
| Link 3 | `Writing` |
| Link 4 | `Connect` |

---

## 3. Hero Section

### Layout
- Full viewport height (`100vh`)
- Desktop: Two-column. Left = text content (60%), Right = portrait photo (40%)
- Mobile: Single column, photo below text, centered
- Vertically centered content

### Visual Elements
- **Background:** `#FAFAF8` warm white
- **Decorative element:** Subtle terracotta dot grid or thin line pattern in far background (very low opacity, ~4%) — gives depth without clutter
- **Photo:** Portrait of Kim Theara (sourced from SEA Observatory team page). Displayed in a soft-rounded rectangle or a large circle. Subtle drop shadow. No hard borders.
- **Photo treatment:** Slight warm filter / desaturate edges. The subject is crisp, the edges breathe.

### Copy
```
LABEL (small, terracotta, uppercase):
  "Product Designer · AI Researcher · Educator"

HEADLINE (large Fraunces):
  "Kim Theara"

STATEMENT (Fraunces italic, 32px, max-width 560px):
  "Designing human experiences at the intersection
  of AI, governance, and the people technology is
  supposed to serve."

LOCATION (Inter, small, warm gray):
  "Based in Phnom Penh, Cambodia"

BUTTONS:
  [View My Work →]       — Terracotta filled, smooth hover
  [Read My Writing →]    — Outlined terracotta, smooth hover
```

### Scroll Indicator
```
Small: ↓  "Scroll to explore"
Style: Inter 12px, warm gray, subtle bounce animation
```

---

## 4. About Section

### Layout
- Background: `#FAFAF8` (continuous from hero)
- Desktop: Two-column. Left = paragraphs (60%), Right = stats block (40%)
- Mobile: Single column, stats below paragraphs

### Copy

**Label:**
```
"About"
```

**Headline:**
```
"I turn complexity into clarity."
```

**Paragraph 1:**
```
"I'm a product designer based in Phnom Penh, Cambodia — currently
designing at ABA Bank and contributing to AI governance at SEA
Observatory, alongside teams from Google AI, the World Economic Forum,
and the United Nations."
```

**Paragraph 2:**
```
"My work lives at the edge of two worlds: the financial systems
that millions of Cambodians depend on every day, and the public-interest
AI platforms shaping how governments across Southeast Asia make
decisions. In both, the challenge is always the same — make the
complex feel simple, and make the simple feel right."
```

**Paragraph 3:**
```
"I also teach. At IT Academy STEP, Future.bit Academy, and community
classrooms across Phnom Penh, I've introduced hundreds of students to
design thinking and generative AI. Not because it's a side project —
but because a field only advances when the knowledge inside it moves."
```

**Stats Block (right column):**
```
5+          Years of professional experience
2           Countries worked in (Cambodia · Japan)
3,000+      Students introduced to design & AI
900+        Medium followers
981         Claps on most-read article
```
*Each number in large Fraunces, label in small Inter warm gray below*

**Affiliation Strip (below paragraphs, subtle):**
```
Currently working with:
[ABA Bank]  [SEA Observatory]  [IT Academy STEP]  [Future.bit Academy]
```
*Displayed as small text labels or muted logo marks, horizontally spaced*

---

## 5. Selected Work Section

### Layout
- Background: `#F2EDE7` warm cream — visually separates from About
- Section label + headline centered at top
- Projects displayed in alternating full-width rows (image left / text right, then text left / image right)
- Mobile: stacked, image on top, text below

### Header Copy
```
LABEL   : "Work"
HEADLINE: "Selected projects."
SUBLINE : "Each one started with a question no one had fully answered yet."
```

---

### Project 1 — SEA Observatory

```
ROLE        : Human-Centred AI Design
ORG         : SEA Observatory / AI Safety Asia
TAGS        : AI Governance · UX Research · Public Interest · Southeast Asia

CHALLENGE   :
  "AI governance policy is dense, multilingual, and built for
  specialists. How do you design a platform that makes it usable
  for regulators, journalists, and civil society organizations
  across 11 countries — without losing the rigor?"

WHAT I DID  :
  "Translated complex governance frameworks into clear, navigable
  user experiences. Designed public-interest interfaces for the
  Observatory, AI Assistant, and GovSim modules — ensuring every
  interaction could be trusted and verified by non-specialist users."

OUTCOME     :
  "A live platform used across 11 ASEAN jurisdictions, tracking
  317+ policy resources in multiple languages."

TEAM CONTEXT (subtle note):
  "Part of a team that includes alumni from Google AI, the World
  Economic Forum, the United Nations, and the World Bank."

LINKS       :
  [Visit seaobservatory.org →]

VISUAL      :
  Screenshot or illustrated mockup of the Observatory platform UI.
  Large, high-quality. Slight drop shadow.
```

---

### Project 2 — ABA Bank (FinTech UX)

```
ROLE        : UX & UI Designer
ORG         : ABA Bank, Cambodia
TAGS        : FinTech · Mobile UX · User Research · Accessibility

CHALLENGE   :
  "Banking apps in Cambodia serve users across a wide range of
  digital literacy. When money is involved, confusion is not an
  option. Clarity isn't a nice-to-have — it is the product."

WHAT I DID  :
  "Led UX design for mobile banking features. Conducted stakeholder
  interviews and user testing sessions, facilitated design workshops
  to define pain points, and created high-fidelity prototypes that
  balanced regulatory requirements with genuine usability."

OUTCOME     :
  "Improved key flows for one of Cambodia's largest and most
  trusted financial institutions — serving hundreds of thousands
  of daily users."

VISUAL      :
  Mobile app UI screens on device mockups. Clean, professional.
```

---

### Project 3 — Smart Home Mobile App

```
ROLE        : Lead UX Designer
ORG         : Kirirom Digital
TAGS        : Mobile App · IoT · UX/UI · Figma · Prototyping

CHALLENGE   :
  "Controlling every electronic device in your home from a single
  screen sounds simple. But the moment you add schedules, automations,
  and multiple users — it becomes a usability problem that most
  smart home apps get wrong."

WHAT I DID  :
  "Designed the full UX/UI from user research to interactive Figma
  prototype. Built user flows, wireframes, and a visual system
  that made complexity feel effortless."

OUTCOME     :
  "A complete, testable prototype with a clear design system —
  used as the design reference for the development team."

LINKS       :
  [View Prototype →]  (Figma prototype link)

VISUAL      :
  App screens displayed on mobile device frames. Side-by-side layout.
```

---

### Project 4 — Unseentra Travel Website

```
ROLE        : UX Designer
ORG         : Unseentra, Cambodia
TAGS        : Web Design · Responsive · Case Study · Travel

CHALLENGE   :
  "Unseentra is Cambodia's first dedicated travel guide platform —
  covering trips, rentals, activities, and packages. It needed to
  serve both international tourists discovering Cambodia and local
  operators managing their listings. Two very different users.
  One interface."

WHAT I DID  :
  "Conducted user research to understand both user groups. Designed
  a fully responsive website with clear information architecture,
  consistent visual language, and localized content strategy."

OUTCOME     :
  "A responsive, accessible travel platform with a published UX
  case study documenting the full design process."

LINKS       :
  [View Case Study →]

VISUAL      :
  Desktop + tablet + mobile responsive preview. Three screens
  shown at different sizes.
```

---

### Work Section Footer
```
TEXT : "These are a few selected pieces. There's more behind each one."
CTA  : [Get in touch to see more →]
```

---

## 6. Research Section

### Layout
- Background: `#FAFAF8` warm white — back to primary
- Single centered column, max-width 800px
- Research card with distinct cream background and left terracotta border accent
- Atmospheric, considered — this section should feel more serious and focused

### Copy

**Label:**
```
"Research"
```

**Headline:**
```
"Where design meets governance."
```

**Subline:**
```
"Some of the most important design work happens before
anyone opens Figma."
```

---

**Research Card 1 — Kagawa University**
```
INSTITUTION : Kagawa University, Japan
TYPE        : Academic Research
SUPERVISOR  : Kitamura-sensei

TITLE       :
  "Exploring AI-Driven Solutions in Cross-Cultural
  UX Adaptation (Cambodia & Japan)"

DESCRIPTION :
  "How do AI systems need to adapt when the user changes culture?
  This research explored the intersection of generative AI and
  cross-cultural design, specifically examining how interfaces
  need to shift between Cambodian and Japanese user contexts —
  in language, expectation, trust, and interaction pattern."

TAGS        : Generative AI · Cross-Cultural UX · HCI · Japan · Cambodia
YEAR        : 2024
```

---

**Research Card 2 — AI Safety Asia**
```
ORGANIZATION : AI Safety Asia
TYPE         : Contributor

TITLE        :
  "AI Safety Asia — 2025 Annual Report Contributor"

DESCRIPTION  :
  "Contributed research insights on how AI governance frameworks
  affect public-interest design decisions in Southeast Asia.
  Part of a broader effort to make AI safety conversations
  accessible and actionable for the region."

TAGS         : AI Safety · Governance · Southeast Asia · Research
YEAR         : 2025

LINK         : [AI Safety Asia →]
```

---

## 7. Writing Section

### Layout
- Background: `#F2EDE7` warm cream
- Section label + headline + subline at top
- Featured article: full-width banner card (large image left, text right)
- Remaining articles: 2-column grid of smaller cards
- Mobile: all cards stacked single column

### Copy

**Label:**
```
"Writing"
```

**Headline:**
```
"I write to understand."
```

**Subline:**
```
"Published on Medium · Design Bootcamp · 900+ followers"
```

---

**Featured Article (large card)**
```
TITLE       : "Typography Guide in User Interface Design"
EXCERPT     : "The choices most designers make unconsciously — typeface,
              hierarchy, spacing, contrast — are actually a set of learnable
              principles. This guide breaks them down, one decision at a time."
PUBLICATION : Medium · Design Bootcamp
DATE        : February 7, 2024
ENGAGEMENT  : 981 claps · 7 responses
LABEL       : "Most Read"   (terracotta badge)
LINK        : [Read on Medium →]
```

---

**Article Card 2**
```
TITLE       : "Golden Ratio in User Interface"
EXCERPT     : "One mathematical proportion quietly governs the layouts,
              icons, and compositions of the most satisfying designs
              you've ever used. Here's how to use it deliberately."
PUBLICATION : Medium · Design Bootcamp
DATE        : May 25, 2024
ENGAGEMENT  : 620 claps · 8 responses
LINK        : [Read →]
```

---

**Article Card 3**
```
TITLE       : "Two Years Working in Japan — My Life Journey"
EXCERPT     : "Most people ask me why I came back. Here's an honest
              answer — and what two years in Japan changed about the
              way I see work, design, and home."
PUBLICATION : Medium
DATE        : January 9, 2025
ENGAGEMENT  : 176 claps · 1 response
LINK        : [Read →]
```

---

**Article Card 4**
```
TITLE       : "Design in the Age of AI"
EXCERPT     : "AI is changing every creative field. But the question
              isn't whether AI replaces designers. It's whether
              designers understand what AI actually is."
PUBLICATION : Medium · Design Bootcamp
DATE        : 2024
LINK        : [Read →]
```

---

**Writing Section Footer**
```
TEXT : "More articles on Medium — covering UI, AI, typography, and life."
CTA  : [See all articles →]   (links to medium.com/@thearakim68)
```

---

## 8. Teaching & Community Section

### Layout
- Background: `#FAFAF8` warm white
- Desktop: Left = intro text + quote (50%), Right = timeline (50%)
- Mobile: Single column, text above, timeline below

### Copy

**Label:**
```
"Teaching & Community"
```

**Headline:**
```
"Design is more valuable when it's shared."
```

**Intro Paragraph:**
```
"Since 2023, I've been teaching UX design and generative AI across
Cambodia — in academies, universities, and community classrooms.
Some of the most meaningful moments of my career have happened in
front of a whiteboard, not a screen.

Design education in Southeast Asia still has wide gaps. I don't
think that changes by waiting."
```

**Pull Quote (large, centered or offset):**
```
"A field only advances when
 the knowledge inside it moves."
— Kim Theara
```
*Style: Fraunces italic, 36px, terracotta color, subtle left border*

---

**Timeline (right column):**
```
2025
  GenAI UX & UI Instructor
  IT Academy STEP Cambodia Institute
  → Teaching generative AI tools and UX principles to design students

2023 – Present
  UX & UI Instructor
  Future.bit Academy
  → Introducing design thinking and Figma to the next generation of
    Cambodian designers

2024
  Guest Educator
  PSE (Phare Ponleu Selpak)
  → Delivered STEM design sessions for female students.
    Received a handmade STEM Guide Manual as a thank-you gift —
    one of the most meaningful days on record.

Ongoing
  Director, Individual Committee
  JCI Cambodia (Junior Chamber International)
  → Community leadership and youth development across Cambodia
```

---

## 9. Connect Section

### Layout
- Background: `#F2EDE7` warm cream — closing warmth
- Centered single column, maximum width 720px
- Large headline dominates
- Subline is warm and specific, not generic
- Social links displayed as clean text links, not icons only
- Closing line anchors the section

### Copy

**Headline:**
```
"Let's build something
 that matters."
```
*Style: Fraunces, 64–72px, two lines, centered*

**Subline:**
```
"Whether you're looking for a designer, a collaborator, a researcher,
or a speaker — I'd love to hear what you're working on."
```

**Primary CTA:**
```
[Send me a message →]
→ Opens: mailto:thearakim68@gmail.com
  Subject pre-filled: "Hello from your portfolio"
```

**Social Links:**
```
LinkedIn    →  linkedin.com/in/kimtheara-productdesign-ai-expert
Medium      →  medium.com/@thearakim68
SEA Obs.    →  seaobservatory.org/team
```
*Each on its own line, left arrow animation on hover*

**Closing Line:**
```
"Based in Phnom Penh, Cambodia. Open to global opportunities."
```
*Style: Inter, 14px, warm gray, centered*

---

## 10. Footer

### Layout
- Background: `#111111` near-black — contrast close
- Three columns: left / center / right
- Mobile: single column, centered, stacked

### Copy
```
LEFT    :  © 2026 Kim Theara. All rights reserved.

CENTER  :  Kim Theara
           Product Designer · AI Researcher · Educator

RIGHT   :  [LinkedIn ↗]  [Medium ↗]  [Back to top ↑]
```

*Style: Inter 13px, `#6B6860` warm gray on dark. Footer links in white.*

---

## 11. Responsive Behavior Summary

| Breakpoint | Key Changes |
|---|---|
| Desktop (>1200px) | Full two-column layouts, large typography, max-width 1200px centered |
| Tablet (768–1199px) | Slightly reduced font sizes, some two-column → single column, nav stays visible |
| Mobile (<768px) | Single column throughout, hamburger nav, headline reduced to 48–56px, section padding 64px |

---

## 12. SEO & Meta

```
Page Title    : Kim Theara — Product Designer · AI Researcher · Educator
Description   : Portfolio of Kim Theara, a product designer and AI researcher
                based in Phnom Penh, Cambodia. Currently at ABA Bank and
                SEA Observatory. 5+ years experience. 3,000+ students taught.
OG Image      : Hero portrait of Kim Theara (professional, warm background)
OG Title      : Kim Theara — Designing at the Intersection of AI & People
Canonical URL : kimtheara.com (or deployed domain)
Lang          : en
```

---

## 13. Asset Checklist

| Asset | Source | Status |
|---|---|---|
| Portrait photo | SEA Observatory team page | ✓ Available |
| SEA Observatory screenshot | seaobservatory.org | ✓ Fetchable |
| Smart Home App mockup | Figma prototype | Needed from Theara |
| Travel Website screenshot | Unseentra | Needed from Theara |
| ABA Bank UI screens | Theara's work files | Needed from Theara |
| Medium article cover images | medium.com/@thearakim68 | ✓ Available |
| Kagawa University photo | From slides deck | ✓ Available |

---

*This document covers the complete website structure, section-by-section copywriting, visual specifications, layout behavior, responsive rules, SEO metadata, and asset checklist for Kim Theara's portfolio website.*
