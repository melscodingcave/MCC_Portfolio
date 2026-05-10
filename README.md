# 🎱 Mel's Coding Cave — Portfolio Website

The source code for [melscodingcave.com](https://melscodingcave.com) — a personal portfolio and engineering blog built with React, TypeScript, and Vite.

---

## 🌐 Live Site

**[melscodingcave.com](https://melscodingcave.com)**

---

## 🛠 Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v7
- **Comments:** Giscus (GitHub Discussions)
- **Contact Form:** Formspree
- **Deployment:** Netlify

---

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx          # About section with billiards connection
│   ├── Blog.tsx           # Blog section (latest 4 posts)
│   ├── BlogPage.tsx       # All posts page (/blog)
│   ├── BlogPost.tsx       # Individual post page (/blog/:slug)
│   ├── Contact.tsx        # Contact form via Formspree
│   ├── Experience.tsx     # Professional experience
│   ├── Footer.tsx         # Footer
│   ├── GiscusComments.tsx # GitHub Discussions comment widget
│   ├── Hero.tsx           # Hero section
│   ├── Navigation.tsx     # Sticky navigation with routing
│   ├── Projects.tsx       # Portfolio project cards
│   └── Skills.tsx         # Skills & technologies grid
├── data/
│   └── blogPosts.ts       # Blog post content
└── App.tsx                # Route definitions
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

---

## 💬 Blog Comments

Comments are powered by [Giscus](https://giscus.app) using GitHub Discussions on this repository. To leave a comment on a blog post, you'll need a GitHub account.

Discussion threads are automatically created per post based on the URL pathname.

---

## 📝 Adding Blog Posts

Blog posts live in `src/data/blogPosts.ts`. Each post follows this structure:

```typescript
{
  id: '8',
  slug: 'your-post-slug',
  title: 'Your Post Title',
  category: 'Engineering Philosophy',
  readTime: '5 min read',
  date: 'May 2026',
  summary: 'One sentence summary shown on the card.',
  tags: ['Tag1', 'Tag2'],
  content: `
Your post content here. Supports:

## H2 Headers

Regular paragraphs with **bold text** inline.

- Bullet points
- Like this
  `
}
```

---

## 🤖 AI-Assisted Development

This site was built with AI assistance — Claude was used as a collaborator throughout development. Every decision was questioned, evaluated, and owned. See the portfolio projects at [github.com/melscodingcave](https://github.com/melscodingcave) for the full AI-assisted development philosophy including `AI-NOTES.md` files per project.

---

## 📫 Contact

- **Email:** melanie.basso@melscodingcave.com
- **LinkedIn:** [linkedin.com/in/melaniebasso](https://linkedin.com/in/melaniebasso)
- **GitHub:** [github.com/melscodingcave](https://github.com/melscodingcave)