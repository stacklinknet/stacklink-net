## Stacklink E-Commerce + Service IT Platform Upgrade

This is a large multi-area upgrade. I'll implement it in one pass, focused on architecture that scales to 5000+ products without hand-writing each one.

### 1. Data layer (`src/lib/site-data.ts` + new `src/lib/catalog.ts`)
- Update contacts: WhatsApp `+971547832139`, Phone `+971 563390030`, Email `contact@stacklink.net`.
- New CATEGORIES tree (9 main + Server & Storage subcategories) with slugs, icons, banner images.
- New SERVICES list (add Firewall Solutions, Structured Cabling, Cloud Solutions) each with own slug page.
- Product catalog: define ~120 representative seed products programmatically across categories/brands (title, brand, category, sub, specs, price-on-request, image). Generator function expands placeholders so cards feel populated like Amazon/Flipkart even with 5000+ scale messaging.
- Helpers: `getProductsByCategory`, `getProductsByBrand`, `getRelated`, `searchProducts`.

### 2. Routing (file-based, TanStack)
- `categories.tsx` — grid of all categories (Shop by Category landing).
- `categories.$slug.tsx` — category page with subcategory chips, filters (brand), product grid.
- `categories.$slug.$sub.tsx` — subcategory page (used by Server & Storage).
- `products.$slug.tsx` — product detail (gallery, specs, inquiry, WhatsApp, related slider, breadcrumb).
- `services.$slug.tsx` — dedicated service detail page (banner, process, related brands/products, inquiry).
- `brands.tsx` upgraded "Our Partners"; `brands.$slug.tsx` enhanced with brand banner, related products, inquiry.
- `search.tsx` — search results.
- Keep existing `products.tsx` as catalog landing linking into categories.

### 3. Components
- `MegaMenu.tsx` in `Header.tsx` — Categories dropdown with main + Server & Storage subcategories columns.
- `ProductCard.tsx` — image, brand logo (Clearbit), title, short specs, Inquiry + WhatsApp buttons, hover lift.
- `CategoryCard.tsx`, `BrandCard.tsx`, `ServiceCard.tsx` reusable.
- `RelatedProducts.tsx` — horizontal slider of related items.
- `Breadcrumbs.tsx`.
- `SearchBar.tsx` in header.
- Update `FloatingCTA` and all WhatsApp links to `wa.me/971547832139` (already correct) with prefilled product/service messages.

### 4. Homepage (`src/routes/index.tsx`)
Reorder/expand sections: Hero → Featured Brands marquee → Shop by Category grid → Featured Products slider → Services grid → Enterprise Solutions → Partner section → Testimonials → Certifications → Lead form. All with scroll-reveal animations.

### 5. Brand logos
Continue using Clearbit (`logo.clearbit.com/{domain}`) — already real official logos. Ensure logos render everywhere brands appear (cards, product cards, brand pages, partner grid). No text-only brand names.

### 6. Contact page
Update offices to UK, Dubai HO, Abu Dhabi, Deira, Mumbai. Update phone/email. Embedded Google Map iframe for Dubai HO. Inquiry form (existing Web3Forms component).

### 7. Technical
- All forms continue using existing `InquiryForm` (Web3Forms key already wired).
- WhatsApp links: `https://wa.me/971547832139?text=...` with encoded product/service context.
- SEO `head()` per route.
- Animations via existing tailwind utilities (`animate-fade-up`, hover-scale, transition-smooth).
- Responsive: mobile mega-menu collapses to accordion.

### Out of scope (clarify later if needed)
- Real cart/checkout (this is inquiry-driven, not transactional — matches IT B2B norm).
- Real product DB (5000+ live SKUs would require Lovable Cloud + admin; current scope generates a rich representative catalog with the architecture ready to swap to DB).

Shall I proceed?