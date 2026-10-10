# Auspicious South Indian Wedding Invitation Website

A luxury, traditional South Indian wedding invitation website built with React, Vite, and modern CSS. Designed to provide an authentic, warm experience reminiscent of receiving a physical gold-embossed wedding card, complete with a 3D unfolding card cover, traditional Kolam motifs, flickering Kuthu Vilakku oil lamps, Maavilai (mango leaf) garlands, Auspicious Muhurtham details, Google Maps navigation, and one-tap WhatsApp sharing.

---

## 🌟 Key Features

1. **3D Unfolding Card Cover (Opening Experience)**:
   - Fullscreen traditional card cover with double antique-gold borders and corner Kolam motifs.
   - Invocation: *|| ஸ்ரீ கணேஷாய நம: ||* and *With the Blessings of Our Elders*.
   - Interactive wax seal button: **Open Invitation** unfolds the 3D card doors with smooth perspective animation to reveal the inner invitation.
   - Respects `prefers-reduced-motion` for accessibility.
   - Includes a discreet **"View Card Cover"** button in the header if visitors want to re-experience the unfolding.

2. **Refined Traditional Aesthetics**:
   - Palette: Warm Ivory (`#F8F1E3`), Antique Gold (`#B08D57`), Deep Maroon (`#6D1F2A`), Temple Green (`#263D30`), Soft Cream (`#FFFDF8`), and Deep Brown (`#382A22`).
   - Authentic SVG illustrations: Ornate Kuthu Vilakku with animated flickering flame, Maavilai Thoranam (mango leaves & marigold garland), sacred lotus, and delicate pulli kolams.
   - Typography: Google Fonts *Cormorant Garamond*, *Cinzel*, and *Plus Jakarta Sans*.

3. **Complete Wedding Sections**:
   - **Section A: Invocations & Heartfelt Message**: Divine blessings and traditional invitation lines.
   - **Section B: The Couple**: Centered Groom and Bride cards with lineage details (parents' names and native place), stacked cleanly on mobile and balanced on desktop.
   - **Section C: Muhurtham & Ceremonies**: Auspicious Muhurtham timings, Tamil calendar date, ceremony timeline (Reception, Muhurtham, Nalangu), and **"Add to Google Calendar"** action.
   - **Section D: Venue & Navigation**: Full venue postal address, hall name, and a **"Get Directions on Google Maps"** button that directly launches navigation.
   - **Section E: Closing Message & Family Signature**: Heartfelt closing invitation from the families.
   - **Section F: WhatsApp & Link Sharing**: One-tap **"Share on WhatsApp"** button with a prefilled message containing the couple's names, date, venue, and website link, plus **"Copy Invitation Link"** with visual toast feedback.

4. **Serene Ambient Sound (Zero Autoplay)**:
   - Floating audio toggle in the bottom-right corner.
   - Strictly inactive until the guest explicitly clicks it.
   - Plays configured MP3 track if supplied, or falls back to a soothing, harmonic Web Audio API Tanpura drone (Sa-Pa drone) with zero external downloads and zero copyright issues.

---

## 🛠️ Project Structure

```
inv/
├── public/
│   ├── favicon.svg             # Auspicious golden Diya favicon
│   ├── images/                 # Optional couple or venue photos
│   └── audio/                  # Optional licensed instrumental music
├── src/
│   ├── components/
│   │   ├── OpeningCard.jsx     # 3D unfolding invitation cover
│   │   ├── HeaderNav.jsx       # Top sticky bar with quick links & replay button
│   │   ├── ToranamGarland.jsx  # Mango leaf & marigold garland SVG
│   │   ├── KolamCorner.jsx     # Sacred South Indian Kolam corner SVG
│   │   ├── KuthuVilakku.jsx    # Traditional brass lamp with animated flame
│   │   ├── DecorativeDivider.jsx # Antique gold dividers
│   │   ├── InvitationIntro.jsx # Section A: Blessings & introduction
│   │   ├── CoupleSection.jsx   # Section B: Groom, Bride & family details
│   │   ├── WeddingDetails.jsx  # Section C: Auspicious Muhurtham & timeline
│   │   ├── VenueSection.jsx    # Section D: Venue & Google Maps directions
│   │   ├── ClosingMessage.jsx  # Section E: Closing blessings & signatures
│   │   ├── ShareSection.jsx    # Section F: WhatsApp share & copy link
│   │   └── MusicToggle.jsx     # Ambient sound toggle with Tanpura synth
│   ├── data/
│   │   └── invitation.js       # ★ CENTRALIZED WEDDING CONFIGURATION FILE
│   ├── App.jsx                 # Main application coordinator
│   ├── index.css               # Tailwind v4 theme tokens & animations
│   └── main.jsx                # React root mount
├── vercel.json                 # Vercel static deployment config
└── package.json
```

---

## ✏️ How to Customize Wedding Details

All editable details are centralized in **one single file**:

👉 `src/data/invitation.js`

Open this file and replace the placeholder fields:

1. **The Couple & Parents**:
   - `groom.name`: Replace `[Groom's Name]`
   - `groom.fatherName` & `groom.motherName`
   - `groom.qualification` & `groom.nativePlace`
   - `bride.name`: Replace `[Bride's Name]`
   - `bride.fatherName` & `bride.motherName`
   - `bride.qualification` & `bride.nativePlace`

2. **Dates & Timings**:
   - `weddingDateISO`: Auspicious date in ISO 8601 format (e.g., `"2026-11-29T09:30:00+05:30"`)
   - `displayDate`: Formatted date (e.g., `"Sunday, 29th November 2026"`)
   - `dayOfWeek`: e.g. `"Sunday"`
   - `tamilDate`: Traditional Tamil month/year (e.g., `"கார்த்திகை 14, சுபகிருது வருடம்"`)
   - `muhurtham.time`: Auspicious Muhurtham window (e.g., `"09:00 AM – 10:30 AM"`)
   - `muhurtham.lagnam`: Auspicious Lagnam (e.g., `"Dhanur Lagnam"`)
   - `ceremonies`: Add or customize events (Reception, Oonjal, Nalangu, Vratham).

3. **Venue & Directions**:
   - `venue.name`: Mandapam / Hall name
   - `venue.streetAddress`, `venue.area`, `venue.city`, `venue.state`, `venue.pincode`
   - `venue.googleMapsUrl`: Direct Google Maps link for the venue

4. **Sharing & Messages**:
   - `invitationMessage`: Heartfelt invitation wording
   - `closingMessage`: Closing blessings request
   - `familySignature.families`: Family names
   - `share.publicWebsiteUrl`: Set your live Vercel URL once deployed (e.g., `"https://our-wedding-invitation.vercel.app"`).

5. **Optional Photos and Music**:
   - Place a couple photograph in `public/images/couple.jpg` and set `couplePhotoUrl: "/images/couple.jpg"` in `src/data/invitation.js`.
   - Place an instrumental MP3 in `public/audio/nadaswaram.mp3` and set `music.audioUrl: "/audio/nadaswaram.mp3"`. If omitted, the site automatically uses its serene built-in Tanpura ambient drone with zero external assets needed!

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📦 Production Build

```bash
# Build static production bundle
npm run build

# Preview production build locally
npm run preview
```

The production output is built in the `dist/` directory in under 1 second.

---

## 🌐 Deploying to Vercel

The project is completely static, with no backend or database required.

### Method 1: Deploy with Vercel CLI
```bash
# 1. Install Vercel CLI (if not already installed)
npm install -g vercel

# 2. Deploy
vercel
```

### Method 2: Deploy via GitHub
1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

Once deployed:
1. Copy your public domain URL (e.g., `https://your-wedding-invite.vercel.app`).
2. Update `share.publicWebsiteUrl` in `src/data/invitation.js` with this public URL.
3. Commit and push. Your WhatsApp share messages will now include your live invitation link!
