# demo-astro

A production-ready **multi-tenant landing page architecture** built with [Astro 5](https://astro.build) (SSR) and [Tailwind CSS](https://tailwindcss.com). One codebase, infinite tenants — each with its own schema-driven content, theme tokens, and composable templates.

---

## Quick Start

```bash
npm install
npm run dev        # Development server at http://localhost:4321
```

## SSR Build & Start

```bash
npm run build      # Compiles to dist/
npm start          # Runs the Node.js standalone server (dist/server/entry.mjs)
```

## Demo Routes

| URL | Tenant | Template |
|-----|--------|----------|
| `http://localhost:4321/` | — | Index / demo hub |
| `http://localhost:4321/dental-demo` | `dental-demo` | `generic-dental` |
| `http://localhost:4321/legal-demo` | `legal-demo` | `generic-legal` |
| `http://localhost:4321/client-a` | `client-a` | `custom-client-a` |
| `http://localhost:4321/client-b` | `client-b` | `custom-client-b` |

---

## Project Structure

```
src/
├── layouts/
│   └── BaseLayout.astro          # SEO-first HTML shell with CSS variable theming
├── lib/
│   ├── schema.ts                 # TypeScript types (FieldType, Field, Section, TemplateSchema, TenantConfig)
│   ├── tenant.ts                 # Mock tenant data source — getTenantConfig(tenantId)
│   └── renderer.ts               # Template resolver — resolveTemplate(templateKey)
├── components/
│   └── sections/
│       ├── HeroSection.astro     # Shared hero section
│       ├── TestimonialsSection.astro
│       ├── LocationSection.astro
│       └── CTASection.astro
├── templates/
│   ├── generic/
│   │   ├── generic-dental/       # Template.astro, schema.ts, defaults.json
│   │   └── generic-legal/        # Template.astro, schema.ts, defaults.json
│   └── custom/
│       ├── custom-client-a/      # Tokenized heading: "Los {city} dentistas más confiables"
│       └── custom-client-b/      # Enterprise consulting — custom section composition
└── pages/
    ├── index.astro               # Demo hub with links to all tenants
    └── [tenant]/
        └── index.astro           # SSR dynamic route — resolves tenant → template
```

---

## Template Organization

| Path | Purpose |
|------|---------|
| `src/templates/generic/` | Reusable templates shared across many clients (dental, legal) |
| `src/templates/custom/` | Bespoke templates for specific clients with unique layouts/logic |

Each template directory contains:
- **`Template.astro`** — receives `content: TemplateSchema` and `theme: ThemeConfig` props, renders sections
- **`schema.ts`** — defines the canonical field/section structure for that template
- **`defaults.json`** — default content values for development/seeding

---

## Schema: Fields, Sections & Active Flags

Every piece of tenant content is a **`Field`** object:

```ts
interface Field {
  id: string;          // Unique identifier within the section
  type: FieldType;     // text | richtext | image | url | color | number | boolean | select
  value: string | number | boolean | null;
  active: boolean;     // false = soft-deleted / disabled; section skips rendering
  label?: string;
  options?: string[];  // For select fields
  validation?: FieldValidation;
  meta?: Record<string, unknown>;
}
```

Fields are grouped into **`Section`** objects:

```ts
interface Section {
  id: string;     // e.g. "hero", "testimonials"
  type: string;   // maps to a component: hero | testimonials | location | cta
  active: boolean;
  order: number;  // render order
  fields: Field[];
}
```

All sections belong to a **`TemplateSchema`**, which is stored in `TenantConfig.content`.

**Reading fields in sections** (pattern used throughout):

```astro
---
const { fields } = Astro.props;
const getField = (id: string) => fields?.find((f: any) => f.id === id && f.active !== false);
const heading = getField('heading')?.value ?? 'Default Heading';
---
```

---

## Theme System

Each `TenantConfig` includes a `theme` object injected as CSS variables by `BaseLayout.astro`:

```ts
theme: {
  primary: '#0ea5e9',
  secondary: '#0369a1',
  accent: '#f0abfc',
  font: 'Georgia, serif',
}
```

These become:
```css
:root {
  --color-primary: #0ea5e9;
  --color-secondary: #0369a1;
  --color-accent: #f0abfc;
  --font-family-base: Georgia, serif;
}
```

Tailwind's arbitrary value syntax (`bg-[var(--color-primary)]`) is used in components for dynamic theming without generating a unique CSS file per tenant.

---

## Custom Client Features

### `custom-client-a` — Tokenized Text
The hero heading supports `{0}` placeholder replacement with a `city` field:

```
"Los {0} dentistas más confiables" + city="Miami"
→ "Los Miami dentistas más confiables"
```

This enables one template to serve multiple geographic markets with only a field value change.

### `custom-client-b` — Unique Section Composition
Renders only `hero` + `cta` (no testimonials or location), adds a custom **stats bar** and **services grid** directly in the template — demonstrating that custom templates are not constrained by shared components.

---

## Adding a New Tenant

1. Add an entry to `src/lib/tenant.ts` returning a `TenantConfig`
2. Point `templateKey` at an existing template (or create a new one under `src/templates/`)
3. Navigate to `/<tenantId>` — the SSR route resolves it automatically

## Adding a New Template

1. Create `src/templates/<category>/<template-key>/Template.astro`
2. Add a `schema.ts` and `defaults.json`
3. Register the dynamic import in `src/lib/renderer.ts`

---

## React / .NET Integration Notes

### Headless CMS / API
`getTenantConfig()` in `tenant.ts` is a thin mock. In production, replace it with a fetch to a REST or GraphQL API:

```ts
export async function getTenantConfig(tenantId: string): Promise<TenantConfig | null> {
  const res = await fetch(`https://api.yourplatform.com/tenants/${tenantId}`);
  if (!res.ok) return null;
  return res.json();
}
```

### .NET Backend
The `TenantConfig` / `TemplateSchema` shape maps cleanly to C# records. Define a matching DTO layer, serialize to JSON, and serve from a .NET minimal API or controller endpoint.

### React Components
Shared section components can be ported to React for a hybrid approach. Astro supports React islands via `@astrojs/react` — add interactive React components with `client:load` or `client:visible` while keeping the shell as static Astro.

---

## Tech Stack

| Tool | Version | Role |
|------|---------|------|
| Astro | ^5.4.2 | SSR framework + routing |
| @astrojs/node | ^9.2.2 | Node.js standalone adapter |
| @astrojs/tailwind | ^6.0.2 | Tailwind integration |
| Tailwind CSS | ^3.4.17 | Utility-first styling |