# 🔐 FindLocksmiths.org

**FindLocksmiths.org** is a nationwide directory that helps people quickly find trusted locksmiths in their area. Built with performance, SEO, and simplicity in mind, the project is structured to support thousands of static pages targeting high-intent local search traffic.

> 🚀 Live at: [https://findlocksmiths.org](https://findlocksmiths.org)

---

## 🧰 Tech Stack

- **Frontend**: [SvelteKit](https://kit.svelte.dev) with static site generation (SSG)
- **Hosting**: GitHub Pages
- **Styling**: Tailwind CSS (or inline styles for landing)
- **Data**: Generated or pulled from business APIs (e.g. Google Places)

---

## 📁 Project Structure

```bash
src/
  routes/
    [state]/
      [city]/
        +page.svelte       # Locksmith listings for that city
        [service]/
          +page.svelte     # Specific services like 24-hour, emergency, etc.
  lib/
    data/                  # City, business, and service data (JSON or modules)
    components/            # Reusable UI elements
```
