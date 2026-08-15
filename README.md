# Riya & Arjun — Wedding Invitation Website

A React + Vite wedding invitation site inspired by royal Udaipur wedding invites —
deep maroon & antique gold palette, script typography, and a wax-seal envelope
opening interaction on the hero.

## Run it locally

You'll need [Node.js](https://nodejs.org) (v18+) installed.

```bash
cd wedding-invite
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This creates a `dist/` folder you can deploy to Netlify, Vercel, GitHub Pages, etc.

## What's inside

- `src/components/Hero.jsx` — tap the gold wax seal to open the invitation
- `src/components/Story.jsx` — edit the `MOMENTS` array with your real timeline
- `src/components/Countdown.jsx` — live countdown; change `WEDDING_DATE` at the top
- `src/components/Events.jsx` — edit the `EVENTS` array (Haldi, Mehendi, etc.)
- `src/components/Venue.jsx` — venue name, address, and Google Maps link
- `src/components/Gallery.jsx` — shows 12 photo tiles. Placeholder photos
  (elegant maroon/gold cards) currently sit in `public/gallery/photo-1.jpg`
  through `photo-12.jpg`. **To use your real photos:** just replace those
  files with your own images, keeping the same filenames (`photo-1.jpg`,
  `photo-2.jpg`, etc. — any image format works, just keep the name/extension
  matching, or update the `src` paths in `Gallery.jsx`). Portrait-orientation
  photos (taller than wide) look best since tiles are cropped to a 3:4 ratio.
- `src/components/DressCode.jsx` — per-day colour palettes
- `src/components/Travel.jsx` — travel info + weather strip
- `src/components/Footer.jsx` — thank-you message + RSVP email link
- `src/App.css` — all styling and design tokens (colours, fonts) at the top

## Customizing

All the text content (names, dates, venue, story) is plain text inside each
component file — just search and replace "Riya", "Arjun", "16 September 2026",
and "Udaipur" with your own details.

Colours and fonts are defined as CSS variables at the top of `src/App.css`
under `:root` — change those to restyle the whole site at once.
