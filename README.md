# Luxury Islamic Wedding Invitation Website

A luxury, authentic Islamic wedding invitation website built with React, Vite, and modern CSS. Designed to provide a serene, spiritual, and elegant experience reminiscent of receiving a gold-embossed emerald wedding invitation card, complete with a 3D unfolding card cover, Islamic arches, 8-pointed star geometry (Rub el Hizb), Fanous lanterns, authentic Bismillah Arabic calligraphy, Nikah ceremony details, Google Maps navigation, and WhatsApp sharing.

---

## 🌟 Key Features

1. **3D Unfolding Islamic Card Cover (Opening Experience)**:
   - Fullscreen emerald-green (`#064E3B`) card cover with double antique-gold borders and corner Islamic geometric star motifs.
   - Sacred Bismillah: *بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ* (*In the name of Allah, the Most Gracious, the Most Merciful*) and *With the Blessings of Allah*.
   - Interactive button: **Open Invitation** unfolds the 3D card doors with smooth perspective animation to reveal the inner invitation.
   - Respects `prefers-reduced-motion` for accessibility.
   - Includes a discreet **"View Card Cover"** button in the header if visitors want to re-experience the unfolding cover.

2. **Refined Islamic Stationery Aesthetics**:
   - Palette: Deep Emerald Green (`#064E3B`), Rich Forest Green (`#0B3D2E`), Antique Gold (`#C6A15B`), Soft Champagne Gold (`#E5D3A1`), Warm Ivory (`#FAF7EF`), and Deep Green-Black for text (`#17352C`).
   - Authentic SVG illustrations: Ornate Fanous lanterns with warm candle glow, Moorish pointed arches, 8-pointed stars (Rub el Hizb), and crescent moon motifs.
   - Typography: Google Fonts *Amiri* (Arabic Calligraphy), *Cormorant Garamond* (Headings & Names), and *Plus Jakarta Sans* (Body).

3. **Complete Wedding Sections**:
   - **Section A: Spiritual Introduction**: Sacred Bismillah in Arabic calligraphy with English translation, "With the Blessings of Allah", and welcoming invitation lines.
   - **Section B: The Couple**: "Together With Their Families", Groom and Bride cards with lineage details (parents' names and city), stacked cleanly on mobile and balanced on desktop.
   - **Section C: The Nikah Ceremony**: Ceremony timings, Islamic calendar (Hijri) date, program timeline (Nikah & Walima), and **"Add Nikah to Google Calendar"** action.
   - **Section D: Venue & Navigation**: Full venue address, banquet hall name, landmark, and a **"Get Directions on Google Maps"** button that directly launches navigation.
   - **Section E: Closing Message, Dua & Family Signature**: Authentic marriage dua in Arabic (*Barakallahu laka wa baraka 'alayka...*), closing blessings, and family compliments.
   - **Section F: WhatsApp & Link Sharing**: One-tap **"Share on WhatsApp"** button with a prefilled Islamic wedding invitation message containing the couple's names, date, venue, and website link, plus **"Copy Invitation Link"** with visual toast feedback.

4. **Serene Ambient Sound (Zero Autoplay)**:
   - Floating audio toggle in the bottom-right corner.
   - Strictly inactive until the guest explicitly clicks it.
   - Plays configured MP3 track if supplied, or falls back to a soothing, harmonic Web Audio API ambient acoustic modal harmony (gentle oriental drone) with zero external downloads and zero copyright issues.

---

## 🛠️ Project Structure

```
inv/
├── public/
│   ├── favicon.svg             # Emerald & gold crescent and 8-pointed star favicon
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── OpeningCard.jsx     # 3D unfolding Islamic invitation cover
│   │   ├── HeaderNav.jsx       # Top sticky bar with quick links & replay button
│   │   ├── IslamicArchBorder.jsx # Moorish arch & geometric crest header SVG
│   │   ├── IslamicCorner.jsx   # 8-pointed star & arabesque corner SVG
│   │   ├── IslamicLantern.jsx  # Traditional Fanous lantern with warm candle glow
│   │   ├── DecorativeDivider.jsx # Antique gold Rub el Hizb dividers
│   │   ├── InvitationIntro.jsx # Section A: Bismillah & spiritual intro
│   │   ├── CoupleSection.jsx   # Section B: Groom, Bride & family details
│   │   ├── WeddingDetails.jsx  # Section C: Nikah ceremony & Walima timeline
│   │   ├── VenueSection.jsx    # Section D: Venue & Google Maps directions
│   │   ├── ClosingMessage.jsx  # Section E: Dua, closing blessings & signatures
│   │   ├── ShareSection.jsx    # Section F: WhatsApp share & copy link
│   │   └── MusicToggle.jsx     # Ambient sound toggle with acoustic synthesizer
│   ├── data/
│   │   └── invitation.js       # ★ CENTRALIZED WEDDING CONFIGURATION FILE
│   ├── App.jsx                 # Main application layout
│   ├── App.css
│   ├── index.css               # Design system & Islamic color palette
│   └── main.jsx
├── index.html                  # HTML template with Amiri & Cormorant fonts
├── package.json
└── vercel.json                 # Vercel static deployment config
```

---

## ✍️ How to Customize Wedding Details

All details are centralized in **[`src/data/invitation.js`](file:///c:/Users/nsakt/OneDrive/Desktop/inv/src/data/invitation.js)**. Simply edit the bracketed placeholder values:

- Couple Names & Parents: `groom.name`, `groom.fatherName`, `bride.name`, etc.
- Wedding Date & Time: `weddingDateISO`, `displayDate`, `nikah.time`, `ceremonies`
- Venue & Directions: `venue.name`, `venue.streetAddress`, `venue.googleMapsUrl`
- Family Signatures: `familySignature.families`
- Optional Custom Audio: `music.audioUrl`

---

## 🚀 Running Locally & Building

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Run code linter
npm run lint

# Build production bundle
npm run build
```

---

## ☁️ Deployment (Vercel)

The project is pre-configured for Vercel static deployment with [`vercel.json`](file:///c:/Users/nsakt/OneDrive/Desktop/inv/vercel.json):
1. Connect this repository to Vercel or deploy via `vercel` CLI.
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Framework Preset: `Vite`
