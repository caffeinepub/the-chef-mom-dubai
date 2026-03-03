# The Chef Mom Dubai

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Full 10-section marketing website for a homemade Indian tiffin brand in Dubai
- Hero section with headline, trust badges, WhatsApp + Call CTAs
- About section with warm brand story
- Menu cards (Veg Tiffin, Special Thali, Daily Lunch Box, Corporate, Weekly/Monthly plans) with WhatsApp order buttons
- "Why Choose Us" section with 8 USP points
- Customer reviews section with star ratings
- Subscription enquiry section with form (Name, Phone, Location, Plan) storing to backend
- Delivery areas section with timing info
- Photo gallery section (6–8 images of food, packaging, kitchen)
- 3-step order process with urgency line
- Contact & location section with Google Maps embed, clickable phone, WhatsApp link, address, hours
- Floating WhatsApp button (desktop + mobile)
- Sticky bottom mobile bar (Order on WhatsApp | Call Now)
- Click-to-call phone button in header
- SEO: Local Business JSON-LD schema, optimized H1/H2, meta tags
- Smooth scroll animations (Intersection Observer or CSS)
- Mobile-first responsive layout

### Modify
- Nothing (new project)

### Remove
- Nothing (new project)

## Implementation Plan

**Backend:**
- `SubscriptionEnquiry` record type: id, name, phone, location, plan, timestamp
- `submitEnquiry(name, phone, location, plan)` -> Result
- `getEnquiries()` -> [SubscriptionEnquiry] (admin read)

**Frontend:**
- Design system: white background, saffron/orange accent (#F97316 / oklch equivalent), warm rounded UI
- Nav: logo + phone click-to-call button
- 10 content sections as described
- Floating WhatsApp FAB (bottom-right, always visible)
- Sticky mobile bottom bar (hidden on desktop, shown on mobile)
- Subscription form wired to backend submitEnquiry()
- Gallery: 8 AI-generated food images
- Google Maps embed for Al Quoz Kitchen Works address
- Local Business schema in index.html head
- All interactive buttons carry data-ocid markers
