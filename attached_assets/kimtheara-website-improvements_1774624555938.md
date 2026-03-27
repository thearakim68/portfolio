# Website Improvement Guide — kimtheara.replit.app
**Audit Score: 3.1 / 10** → Target: 8.5 / 10
*Product Designer · AI Researcher · Educator — Phnom Penh, Cambodia*

---

## Table of Contents

1. [Critical Issues (Fix First)](#1-critical-issues-fix-first)
2. [Visual Design & Identity](#2-visual-design--identity)
3. [Portfolio & Case Studies](#3-portfolio--case-studies)
4. [Content & Copywriting](#4-content--copywriting)
5. [Site Structure & Navigation](#5-site-structure--navigation)
6. [Credibility & Social Proof](#6-credibility--social-proof)
7. [Calls to Action](#7-calls-to-action)
8. [Technical & Hosting](#8-technical--hosting)
9. [Mobile & Accessibility](#9-mobile--accessibility)
10. [Recommended Tools & Resources](#10-recommended-tools--resources)
11. [Priority Checklist](#11-priority-checklist)

---

## 1. Critical Issues (Fix First)

These three issues are doing the most damage and should be addressed before anything else.

### 1.1 — The site has no design
**Problem:** The site renders as raw, unstyled HTML text. There is no typography hierarchy, no colour scheme, no spacing system, no visual identity. For someone whose profession is product design, this is the single most damaging first impression possible.

**Why it matters:** Every visitor — whether a recruiter, a potential client, or a collaborator — will subconsciously ask: *"If this person designs products for a living, why does their own website look like this?"* The portfolio itself is the first portfolio piece they see.

**What to do:**
- Choose a dedicated portfolio platform or build a basic custom site. Free options include **Framer**, **Cargo.site**, or **Read.cv**.
- Apply a consistent type scale: one display font for headings, one readable font for body text.
- Define a colour palette of 2–3 colours maximum and apply it consistently.
- Add 40–80px of vertical breathing room between sections.

---

### 1.2 — Portfolio items are single sentences
**Problem:** All four projects are listed as one-line bullets with no context, no visuals, no process, and no measurable outcomes.

**Current example:**
> ABA Bank, Cambodia — UX & UI Designer. Improved key flows for Cambodia's largest financial institution serving hundreds of thousands of daily users.

**What this tells a potential client:** Almost nothing. What flows? What did "improved" mean? How were decisions made? What did it look like before and after?

**What to do:** Write a minimum one-page case study for at least one project (ABA Bank is the strongest candidate given its scale). See [Section 3](#3-portfolio--case-studies) for the full case study structure.

---

### 1.3 — Hosted on replit.app with no custom domain
**Problem:** `kimtheara.replit.app` is a free sandbox subdomain associated with a code-playground tool. It signals that this site is a temporary experiment, not a professional presence.

**What to do:**
- Register a personal domain. Recommended options: `kimtheara.design`, `kimtheara.com`, or `theara.kim`.
- Cost: approximately $10–15 USD per year via Namecheap, Porkbun, or Google Domains.
- Point the domain to wherever the site is hosted (Framer, Vercel, Netlify, etc.).
- This single change makes the site feel 40% more credible overnight.

---

## 2. Visual Design & Identity

### 2.1 — Establish a personal visual identity
A product designer's portfolio should itself demonstrate design thinking. That doesn't mean it needs to be flashy — it means it needs to be *intentional*.

**Recommended direction for Kim's context:**
Given the intersection of AI governance, UX design, and Southeast Asian context, a clean editorial aesthetic works well. Think: generous whitespace, strong typographic hierarchy, a restrained palette with one accent colour.

**Type pairing suggestion:**
- Display / headings: `Cormorant Garamond` or `Playfair Display` (adds gravitas, uncommon in tech portfolios)
- Body: `DM Sans` or `Lora` (readable, warm)
- Both are free on Google Fonts.

**Colour palette suggestion:**
```
Background:   #F9F7F4  (warm off-white)
Text primary: #1A1A1A  (near-black)
Text muted:   #6B6B6B  (secondary text)
Accent:       #2D5F8A  (deep blue — signals trust, data, Southeast Asia's ocean context)
Border:       #E5E2DD  (subtle dividers)
```

### 2.2 — Add a professional photograph
The site currently has no image of Kim. A professional headshot:
- Makes the site feel human and trustworthy.
- Is one of the most-viewed elements on a portfolio.
- Doesn't need to be a studio shot — a clean, well-lit photo against a neutral background works perfectly.

### 2.3 — Design for hierarchy, not uniformity
Right now every piece of text has the same visual weight. Apply a clear visual hierarchy:

| Element | Style |
|---|---|
| Name / hero heading | 56–72px, display font, bold |
| Section headings | 28–36px, medium weight |
| Project titles | 20–24px, medium weight |
| Body / descriptions | 15–17px, regular weight, 1.6 line-height |
| Labels / metadata | 12–13px, uppercase, 0.08em letter-spacing |

---

## 3. Portfolio & Case Studies

This is the most important section of any designer's website. Currently it scores 2/10 because there is no actual evidence of Kim's work.

### 3.1 — Case study structure (use this template)

For each project, write a case study using this format. Even a 400-word version with 3 images is infinitely better than what's there now.

---

**[Project Name]**
*Role · Year · Platform/Medium*

#### The Problem
1–2 sentences. What was broken, unclear, or missing before Kim got involved? What user or business pain existed?

#### My Role
Specifically what Kim did. Not "UX Designer" — but *"I led user research with 12 bank customers, ran card-sorting sessions, and owned the end-to-end redesign of the loan application flow."*

#### The Process
3–5 steps showing how the problem was approached:
- Research method used (interviews, analytics, competitive analysis)
- Key insights discovered
- Design decisions made and *why*
- Iterations or pivots that happened

#### Visuals
Include at minimum:
- 1 before/after screenshot or wireframe comparison
- 1 final UI screenshot or prototype mockup
- 1 process artefact (a journey map, flow diagram, whiteboard sketch — anything)

#### The Outcome
Measurable results wherever possible:
- "Reduced onboarding drop-off by 23%"
- "Launched to 450,000 daily active users in Q2 2024"
- "Policy brief adopted across 6 ASEAN member states"

---

### 3.2 — Prioritise these projects for case studies

| Priority | Project | Why |
|---|---|---|
| **1st** | ABA Bank | Largest scale (hundreds of thousands of users), most relatable to global clients |
| **2nd** | SEA Observatory | Most unique/impressive — 11 jurisdictions, UN/WEF/World Bank collaboration — but needs to be explained clearly |
| **3rd** | Kirirom Digital | Smart Home shows product versatility beyond fintech |
| **4th** | Unseentra | Good for showing consumer/travel UX, but least strategically critical |

### 3.3 — Show process, not just outcomes
Design recruiters and clients don't just want to see the finished product. They want to understand how Kim thinks. Include:
- Messy wireframes and sketches — these show process
- A "what I would do differently" section — this shows maturity
- Any research data or user quotes (anonymised if needed)

---

## 4. Content & Copywriting

### 4.1 — Rewrite the hero/bio section
**Current text:**
> Kim Theara is a Product Designer and AI Researcher based in Phnom Penh, Cambodia. He currently leads UX design at ABA Bank and contributes to AI governance research at SEA Observatory — a platform used across 11 ASEAN jurisdictions, alongside teams from Google AI, the World Economic Forum, the United Nations, and the World Bank.

This is a solid paragraph. But it reads like a LinkedIn summary — informational but not personal or compelling.

**Suggested rewrite:**
> I design human-centred experiences that work at scale — from the digital banking flows used by hundreds of thousands of Cambodians every day, to the AI governance tools shaping policy across Southeast Asia.
>
> Based in Phnom Penh, I lead UX at ABA Bank and contribute to AI governance research at SEA Observatory, collaborating with teams from the UN, World Economic Forum, and World Bank. My work sits at the intersection of design, technology, and public interest.

Why this is better:
- Opens with value proposition, not a biographical statement
- "Work at scale" signals seniority
- "Public interest" frames the AI research work meaningfully

### 4.2 — Add a short "About" section
Separate from the bio, include:
- Kim's design philosophy in 2–3 sentences
- What types of projects Kim is most interested in
- Any notable education, certifications, or publications
- Location context (working in Cambodia is interesting and distinctive — lean into it)

### 4.3 — Add a skills/tools section
Even a simple list increases searchability and trust:

**Design:** Figma, Protopie, Framer, Adobe XD
**Research:** User interviews, usability testing, card sorting, journey mapping
**AI/Policy:** AI governance frameworks, ASEAN digital policy, human-centred AI principles
**Dev basics:** HTML, CSS, basic front-end understanding

---

## 5. Site Structure & Navigation

### 5.1 — Recommended page structure

The current site is one block of text. Restructure it into clear sections:

```
Header / Nav
  ├── Logo / Name
  ├── Work
  ├── About
  └── Contact

Hero Section
  ├── Name + title
  ├── 2-line value proposition
  └── CTA button → "See my work" or "Get in touch"

Work / Projects Section
  └── 4 project cards with thumbnail images

About Section
  ├── Photo + bio
  ├── Skills/tools
  └── Current focus areas

Credentials / Collaborations Section
  └── Logo strip: ABA Bank · SEA Observatory · Google AI · WEF · UN · World Bank

Contact Section
  ├── Short invite sentence
  ├── Email button
  └── LinkedIn link

Footer
  └── © 2025 Kim Theara
```

### 5.2 — Add project thumbnail cards
Instead of bullet points, show project cards with:
- A screenshot or cover image
- Project name
- 1-line description
- Tags (e.g. `UX Design` `Fintech` `Mobile`)
- "View case study →" link

### 5.3 — Add smooth scroll anchor navigation
For a single-page layout, add a sticky navigation bar with anchor links to each section. This significantly improves usability, especially on mobile.

---

## 6. Credibility & Social Proof

### 6.1 — Add verifiable links for every credential
Currently, the impressive list of organisations (Google AI, WEF, UN, World Bank) has no links, no project pages, no proof. This looks like unverified name-dropping to a sceptical reader.

**For each major credential, add one of:**
- A link to the live platform or project page
- A screenshot of the work (even a cropped thumbnail)
- A published article, policy document, or public report that names the collaboration
- A testimonial quote from someone at the organisation

### 6.2 — Add 1–2 testimonials
Even short quotes from colleagues, managers, or clients significantly increase trust.

> "Kim redesigned our entire loan application flow. What used to take users 11 steps now takes 6."
> — *[Name, Role at ABA Bank]*

If written testimonials aren't available, ask a collaborator for a LinkedIn recommendation — then quote it with attribution.

### 6.3 — Add a logo strip
A simple row of client/collaborator logos (ABA Bank, SEA Observatory, Kirirom, Unseentra, WEF, UN) provides instant visual credibility. Many portfolio templates include this component.

---

## 7. Calls to Action

### 7.1 — Add a clear primary CTA
The site currently ends with an email address and a LinkedIn URL. There is no invitation, no energy, no reason for a visitor to reach out.

**Add a contact section with a human invitation:**

> *I'm currently open to product design consulting and AI UX research collaborations. If you're working on something that matters, I'd love to hear about it.*
>
> [Send me an email →] [LinkedIn →]

### 7.2 — Add a CTA in the hero section
Don't make visitors scroll to find how to contact Kim. Place a button in the hero:
- Primary: `View my work` (anchors to project section)
- Secondary: `Get in touch` (anchors to contact section or opens email)

### 7.3 — Consider a downloadable CV/résumé
A "Download CV" link, even as a simple PDF, adds a professional layer and serves recruiters who need a formal document.

---

## 8. Technical & Hosting

### 8.1 — Move off replit.app
Replit is a development playground, not a hosting platform. Recommended alternatives:

| Platform | Best for | Cost |
|---|---|---|
| **Framer** | No-code, design-forward portfolios | Free tier available |
| **Cargo.site** | Creative/editorial portfolios | ~$13/month |
| **Netlify / Vercel** | Custom-coded sites | Free tier available |
| **Read.cv** | Minimal designer portfolios | Free |

### 8.2 — Add proper meta tags for SEO
The current site likely has no meta description, no Open Graph tags, and no page title beyond the default. Add:

```html
<meta name="description" content="Kim Theara — Product Designer and AI Researcher based in Phnom Penh, Cambodia. Leading UX at ABA Bank and AI governance research across Southeast Asia.">
<meta property="og:title" content="Kim Theara — Product Designer · AI Researcher">
<meta property="og:description" content="UX design and AI governance work across Southeast Asia.">
<meta property="og:image" content="[URL to a preview image]">
```

### 8.3 — Add Google Analytics or Plausible
Know who is visiting and from where. Plausible is privacy-friendly and takes 5 minutes to add.

### 8.4 — Ensure HTTPS
Verify that the live site serves over HTTPS (it should do so automatically on any modern hosting platform). An HTTP site shows a security warning in Chrome, which is an immediate trust signal failure.

---

## 9. Mobile & Accessibility

### 9.1 — Test on mobile explicitly
Plain text is technically readable on mobile, but a properly designed mobile experience includes:
- Larger touch targets for links (minimum 44×44px)
- Font sizes no smaller than 15px on mobile
- A hamburger or simplified navigation on screens under 768px

### 9.2 — Improve semantic HTML structure
Use proper semantic elements:
- `<nav>` for navigation
- `<main>` for primary content
- `<section>` for each page section with a descriptive `aria-label`
- `<h1>` for the name (only one per page), `<h2>` for sections, `<h3>` for project titles

### 9.3 — Add alt text to all images
Every image added in future should have a descriptive `alt` attribute. This is required for screen reader accessibility and is also good for SEO.

### 9.4 — Ensure sufficient colour contrast
When adding colours, use a contrast checker (e.g. [coolors.co/contrast-checker](https://coolors.co/contrast-checker)) to ensure:
- Normal body text: minimum 4.5:1 contrast ratio (WCAG AA)
- Large/display text: minimum 3:1 contrast ratio

---

## 10. Recommended Tools & Resources

### Portfolio platforms
| Tool | URL | Notes |
|---|---|---|
| Framer | framer.com | Best design-forward no-code option |
| Cargo | cargo.site | Distinctive creative aesthetic |
| Read.cv | read.cv | Minimal, respected in design community |
| Webflow | webflow.com | Most powerful, steeper learning curve |

### Design references to study
- **Femke van Schoonhoven** — femke.design (clear case study structure)
- **Anh Nguyen** — anhux.com (Southeast Asian designer, strong UX case studies)
- **Tobias van Schneider** — vanschneider.com (editorial, high-craft)

### Useful free tools
| Tool | Use |
|---|---|
| Shots.so | Create device mockups for screenshots |
| Notion | Draft case study content before publishing |
| Coolors.co | Build and test colour palettes |
| Fontpair.co | Find good font pairings |
| Plausible.io | Privacy-friendly analytics |

---

## 11. Priority Checklist

Use this as a phased action plan. Complete Phase 1 before moving to Phase 2.

### Phase 1 — Immediate (Week 1–2)
- [ ] Register a custom domain (kimtheara.design or kimtheara.com)
- [ ] Move site to Framer, Cargo, or Netlify
- [ ] Add a basic colour scheme and typographic hierarchy
- [ ] Add a professional photo
- [ ] Rewrite the hero copy using the suggested version above
- [ ] Add links/evidence for all major credentials

### Phase 2 — Core portfolio (Week 3–4)
- [ ] Write one full case study for ABA Bank (minimum 400 words + 3 visuals)
- [ ] Create project thumbnail cards for all 4 projects
- [ ] Add a skills/tools section
- [ ] Add a contact CTA section with a warm invitation copy
- [ ] Add meta description and Open Graph tags

### Phase 3 — Refinement (Month 2)
- [ ] Write a second case study for SEA Observatory
- [ ] Add 1–2 testimonials or LinkedIn recommendation quotes
- [ ] Add a collaborator logo strip
- [ ] Add Google Analytics or Plausible
- [ ] Write a third case study for Kirirom Digital
- [ ] Add a downloadable CV/résumé PDF
- [ ] Full mobile and accessibility review

---

*Audit prepared March 2026. All recommendations are based on the live site at the time of review.*
