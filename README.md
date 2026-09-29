# Amin Jan — Professional Portfolio Website

A production-oriented starter repository for Amin Jan's personal portfolio website.

## Project Purpose

This project is designed as a real client website rather than a generic portfolio template. The website presents Amin Jan's professional identity, leadership journey, community work, entrepreneurship involvement, international exposure, recognition, insights, and contact information.

The design direction is:

- Human-centered
- Editorial and professional
- Soft UI without excessive glassmorphism
- Warm minimalism
- Accessible
- Responsive
- Performance-conscious
- Evidence-driven
- Subtle rather than animation-heavy

> **Core principle:** Human first. Professional second. Visual effects third.

## Important Content Rule

All claims, numbers, roles, dates, awards, organization names, quotes, testimonials, and impact metrics must be verified and approved by the client before production launch.

The current content in `src/data/` is structured as a content model and includes placeholders where exact client-approved information should be inserted.

Do not invent achievements, testimonials, statistics, partnerships, contact details, or credentials.

---

# 1. Recommended Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui selectively
- Lucide React
- Framer Motion for meaningful microinteractions
- React Hook Form
- Zod
- GitHub
- Vercel

The starter source files intentionally keep dependencies minimal so the repository can be initialized cleanly with the current versions of these packages.

---

# 2. Project Structure

```text
amin-jan-portfolio/
├── public/
│   ├── images/
│   ├── documents/
│   └── icons/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── journey/
│   │   ├── impact/
│   │   ├── recognition/
│   │   ├── insights/
│   │   ├── contact/
│   │   └── common/
│   │
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   └── types/
│
├── docs/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

---

# 3. Information Architecture

Primary navigation:

1. Home
2. About
3. Journey
4. Impact
5. Recognition
6. Insights
7. Contact

Optional:
- CV

Keep the main navigation small. The website should feel like a personal professional identity, not an enterprise portal.

---

# 4. Core Pages

## Home

Purpose:
- Establish identity
- Introduce Amin
- Provide immediate credibility
- Direct visitors toward the journey and LinkedIn

Suggested sections:
- Hero
- Trust / selected experiences
- At a glance
- Short about
- Core areas
- Journey preview
- Selected work
- Recognition preview
- Insights preview
- Contact CTA

## About

Purpose:
- Tell the human story
- Explain interests and professional direction
- Present background without copying a CV

## Journey

Purpose:
- Present professional development chronologically
- Show movement from participation to responsibility

Suggested categories:
- Experience
- Leadership
- Education

## Impact

Purpose:
- Explain what the work involved and what outcomes can be verified
- Convert major experiences into case studies

Potential case studies:
- Peshawar Entrepreneurship Program
- UN Volunteers research work
- Peshawar Literary Festival
- Climate/youth initiatives

## Recognition

Purpose:
- Present awards, international programs, and certifications with context

## Insights

Purpose:
- Optional long-term publishing area
- Reflections on youth leadership, entrepreneurship, community work, education, and learning

## Contact

Purpose:
- Make professional contact simple
- Provide approved email and LinkedIn channels

---

# 5. Brand Positioning

Recommended positioning:

**Youth Leader • Educator • Community Builder**

Supporting message:

**Creating opportunities where young people can learn, lead, and contribute.**

These are working copy options and must be approved by the client before final publication.

---

# 6. Visual Design System

## Color Palette

| Token | Value | Use |
|---|---|---|
| Ink | `#17212B` | Main text |
| Warm Background | `#F7F7F4` | Page background |
| Surface | `#FFFFFF` | Cards and content surfaces |
| Soft Surface | `#EEF1EF` | Secondary sections |
| Sage Accent | `#567568` | Accent / interactive states |
| Light Sage | `#DCE7E0` | Soft accent |
| Secondary Text | `#657078` | Supporting copy |
| Border | `#DDE2DE` | Dividers |

## Typography

Primary:
- Manrope

Optional editorial accent:
- DM Serif Display

Use the serif sparingly. The site should remain readable and contemporary.

## Suggested type scale

Desktop:
- Hero: 64px
- H1: 52px
- H2: 40px
- H3: 26px
- Body Large: 20px
- Body: 16px
- Small: 14px

Mobile:
- Hero: 40px
- H1: 36px
- H2: 30px
- H3: 22px
- Body: 16px

---

# 7. HCI Requirements

The interface must follow:

- Visibility of system status
- Match between system and real world
- User control and freedom
- Consistency and standards
- Recognition rather than recall
- Error prevention
- Accessibility
- Clear feedback
- Progressive disclosure where appropriate
- Minimal cognitive load

Avoid:
- vague labels
- unnecessary animations
- decorative interaction
- hidden navigation
- tiny text
- low-contrast text
- inaccessible forms

Target:
**WCAG 2.2 AA**

---

# 8. Responsive Strategy

Design mobile-first.

Breakpoints:

- Mobile: 320–639px
- Tablet: 640–1023px
- Desktop: 1024–1439px
- Large desktop: 1440px+

Do not simply shrink the desktop layout. Reorder content for mobile where necessary.

Required tested widths:
- 320px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px

---

# 9. Photography

Use real client photography wherever possible.

Preferred:
- professional portrait
- event photographs
- program/workshop photographs
- international program photographs

Avoid:
- AI-generated portraits
- generic stock photos as the main visual identity
- excessive filters
- unrealistic composites

Use consistent cropping and aspect ratios.

---

# 10. Interaction Principles

Use animation only when it improves comprehension or feedback.

Good:
- subtle hover elevation
- button arrow movement
- timeline highlighting
- image scale of approximately 1.02
- page transitions when useful

Avoid:
- cursor-following objects
- excessive parallax
- floating 3D objects
- neon effects
- animated counters everywhere
- excessive glassmorphism
- rotating text

Respect `prefers-reduced-motion`.

---

# 11. Content Rules

The website copy must be:

- human
- concise
- confident but humble
- evidence-based
- concrete
- easy to scan

Prefer:
> Coordinated activities involving more than 500 students.

Avoid:
> Transformed the lives of hundreds of young people.

unless the latter can be independently supported.

---

# 12. SEO

Implement:

- unique page titles
- unique meta descriptions
- canonical URLs
- Open Graph metadata
- Twitter/X card metadata where appropriate
- sitemap.xml
- robots.txt
- semantic headings
- descriptive image alt text
- Person structured data
- Organization structured data only where appropriate

Suggested title:

**Amin Jan — Youth Leader, Educator & Community Builder**

---

# 13. Performance

Target Lighthouse:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Optimize:
- WebP/AVIF
- image dimensions
- lazy loading
- font loading
- code splitting
- unused CSS
- unnecessary JavaScript
- third-party scripts

---

# 14. Contact Form

Required fields:

- Name
- Email
- Organization
- Purpose
- Message

Requirements:
- client-side validation
- server-side validation
- spam protection
- clear success state
- clear error messages
- keyboard accessibility
- no secrets in frontend code

---

# 15. Data Architecture

Keep content separate from UI components.

Use files such as:

- `experience.ts`
- `awards.ts`
- `certifications.ts`
- `education.ts`
- `projects.ts`
- `insights.ts`

This makes future content updates easy without changing layout code.

---

# 16. Content Verification Workflow

Before launch:

1. Collect the client's CV.
2. Confirm current LinkedIn information.
3. Confirm dates.
4. Confirm titles.
5. Confirm organization names.
6. Confirm statistics.
7. Confirm awards.
8. Confirm certificates.
9. Confirm photographs.
10. Confirm contact information.
11. Obtain final written client approval.

Do not treat search-engine snippets as the final source of truth for sensitive professional details.

---

# 17. Suggested Development Workflow

## Phase 01 — Discovery
Collect content, photos, documents, social links, and client goals.

## Phase 02 — Information Architecture
Finalize pages and user journeys.

## Phase 03 — Design System
Finalize typography, colors, spacing, components, and interaction rules.

## Phase 04 — Figma
Design:
- 1440px desktop
- 768px tablet
- 390px mobile

## Phase 05 — Development
Build reusable components and data-driven sections.

## Phase 06 — Content Integration
Insert verified client content.

## Phase 07 — QA
Test browsers, devices, forms, links, accessibility, SEO, and performance.

## Phase 08 — Client Approval
Review content, visuals, and professional positioning.

## Phase 09 — Deployment
GitHub → Vercel → custom domain → SSL.

---

# 18. Definition of Done

- [ ] Content verified
- [ ] IA approved
- [ ] Figma approved
- [ ] Design system implemented
- [ ] Desktop complete
- [ ] Tablet complete
- [ ] Mobile complete
- [ ] Accessibility reviewed
- [ ] SEO implemented
- [ ] OG metadata configured
- [ ] Contact form tested
- [ ] Images optimized
- [ ] Cross-browser tested
- [ ] Lighthouse tested
- [ ] 404 page added
- [ ] Custom domain configured
- [ ] Client approval received
- [ ] Production deployed
- [ ] Git repository backed up

---

# 19. Design Quality Rule

If an element does not improve:
- understanding,
- navigation,
- credibility,
- storytelling,
- accessibility,
- or conversion,

remove it.

The final product should feel like it was designed by a senior product/UI/UX designer: calm, intentional, structured, and human.

---

# 20. Recommended Future Extensions

Only add these when there is real content:

- Speaking
- Publications
- Research
- Events
- Media
- Newsletter
- Recommendations
- Gallery
- Articles
- Project archive

Do not build unnecessary functionality in v1.

---

# 21. Client Content Checklist

Request these from Amin:

### Identity
- Preferred name
- Professional title
- Short bio
- Long bio
- Preferred location
- Languages

### Professional
- Current role
- Complete experience history
- Responsibilities
- Projects
- Leadership positions

### Education
- Institutions
- Programs
- Dates
- Relevant focus

### Recognition
- Awards
- Certificates
- International programs
- Credential links

### Media
- Professional portrait
- Event photos
- Program photos
- Preferred images

### Contact
- Professional email
- LinkedIn
- Other approved social profiles
- CV

### Content
- Articles
- Reflections
- Talks
- Publications
- Testimonials

---

# 22. Repository Rule

Keep:
- source code in GitHub
- images in `public/images`
- approved documents in `public/documents`
- reusable content in `src/data`
- project documentation in `docs`

Never commit:
- `.env`
- API keys
- passwords
- private client documents
- unpublished personal information

---

# 23. License

For a real client project, do not automatically apply an open-source license.

Use a private repository unless the client explicitly requests otherwise.

---

# 24. Project Status

Current repository:
**Planning / implementation-ready starter**

Next implementation step:
**Initialize the React/Vite application, install dependencies, and build the global design system before creating individual pages.**
