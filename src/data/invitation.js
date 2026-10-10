/**
 * ==============================================================================
 * CENTRALIZED SOUTH INDIAN WEDDING INVITATION CONFIGURATION
 * ==============================================================================
 * 
 * Replace the bracketed placeholder values (e.g., "[Groom's Name]") with the
 * actual wedding information before sending to family and friends.
 * 
 * All components read directly from this single file.
 */

export const weddingConfig = {
  // ---------------------------------------------------------------------------
  // 1. TRADITIONAL BLESSINGS & INVOCATION
  // ---------------------------------------------------------------------------
  traditionalInvocation: "|| ஸ்ரீ கணேஷாய நம: ||",
  traditionalInvocationEnglish: "|| Om Sri Ganeshaya Namaha ||",
  blessingsTitle: "With the Blessings of Our Elders & Almighty",
  
  // ---------------------------------------------------------------------------
  // 2. THE COUPLE & FAMILIES
  // ---------------------------------------------------------------------------
  groom: {
    name: "[Groom's Name]",
    qualification: "[B.Tech / M.S. / Profession]",
    sonOf: "Son of",
    fatherName: "[Groom's Father's Name]",
    motherName: "[Groom's Mother's Name]",
    grandParents: "[Paternal / Maternal Grandparents]", // Optional
    nativePlace: "[Chennai, Tamil Nadu]", // Optional
  },

  bride: {
    name: "[Bride's Name]",
    qualification: "[B.E. / M.B.A. / Profession]",
    daughterOf: "Daughter of",
    fatherName: "[Bride's Father's Name]",
    motherName: "[Bride's Mother's Name]",
    grandParents: "[Paternal / Maternal Grandparents]", // Optional
    nativePlace: "[Madurai, Tamil Nadu]", // Optional
  },

  // ---------------------------------------------------------------------------
  // 3. INVITATION MESSAGE
  // ---------------------------------------------------------------------------
  invitationMessage: 
    "With the blessings of our elders and the grace of the Almighty, we joyfully invite you and your family to celebrate the sacred wedding ceremony of our beloved children. We solicit your esteemed presence and heartfelt blessings on this auspicious occasion.",

  // ---------------------------------------------------------------------------
  // 4. AUSPICIOUS DATE & CEREMONIES
  // ---------------------------------------------------------------------------
  weddingDateISO: "2026-11-29T09:30:00+05:30", // ISO 8601 format for countdown / calendar
  displayDate: "Sunday, 29th November 2026",
  tamilDate: "கார்த்திகை 14, சுபகிருது வருடம்", // Traditional Tamil calendar month/date (optional)
  dayOfWeek: "Sunday",
  
  // Auspicious Muhurtham Timings
  muhurtham: {
    title: "Auspicious Muhurtham",
    time: "09:00 AM – 10:30 AM",
    lagnam: "[Dhanur / Simha] Lagnam",
    subhaMuhurthamNote: "In the auspicious presence of relatives and well-wishers",
  },

  // Additional Ceremonies (Reception, Nalangu, Vratham, etc.)
  ceremonies: [
    {
      id: "reception",
      title: "Wedding Reception",
      date: "Saturday, 28th November 2026",
      time: "06:30 PM onwards",
      description: "An evening of joyful celebration, music, and dinner to felicitate the couple.",
      accent: "Evening Felicitations",
    },
    {
      id: "muhurtham",
      title: "Sacred Muhurtham & Mangalya Dharanam",
      date: "Sunday, 29th November 2026",
      time: "09:00 AM – 10:30 AM",
      description: "Sacred Vedic rituals, Kanyadanam, and the auspicious tying of the Thirumangalyam, followed by traditional wedding feast.",
      accent: "Sacred Union",
    },
    {
      id: "nalangu",
      title: "Traditional Nalangu & Oonjal",
      date: "Sunday, 29th November 2026",
      time: "04:00 PM onwards",
      description: "Joyous traditional post-wedding games and celebratory festivities.",
      accent: "Celebration",
    },
  ],

  // ---------------------------------------------------------------------------
  // 5. VENUE & DIRECTIONS
  // ---------------------------------------------------------------------------
  venue: {
    name: "[Sri Krishna Mahal / Grand Kalyana Mandapam]",
    hallName: "[Air-Conditioned Main Hall]",
    streetAddress: "[No. 108, Temple Ring Road, Near Kapaleeshwarar Temple]",
    area: "[Mylapore]",
    city: "[Chennai]",
    state: "[Tamil Nadu]",
    pincode: "[600004]",
    landmark: "Opposite Temple Car Stand",
    // Google Maps directions URL (opens straight in Google Maps app or browser)
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Chennai+Tamil+Nadu+India",
    googleMapsEmbedQuery: "Chennai, Tamil Nadu, India",
  },

  // ---------------------------------------------------------------------------
  // 6. CLOSING & FAMILY SIGNATURE
  // ---------------------------------------------------------------------------
  closingMessage:
    "Your gracious presence, prayers, and blessings are our greatest gifts as we embark on this sacred journey of companionship, love, and tradition.",
  
  familySignature: {
    complimentsText: "With Best Compliments From:",
    families: "[The Groom's Family] & [The Bride's Family]",
    subtext: "Relatives, Friends, and Well-Wishers",
  },

  // ---------------------------------------------------------------------------
  // 7. OPTIONAL MEDIA & MUSIC
  // ---------------------------------------------------------------------------
  // Leave null to use the elegant traditional motifs, or provide a public URL/path
  couplePhotoUrl: null, // e.g. "/images/couple.jpg"
  venuePhotoUrl: null,  // e.g. "/images/venue.jpg"

  // Audio configuration:
  // If a music file exists at audioUrl, it can be played.
  // In addition, the site includes a serene traditional Indian Tanpura/Veena drone
  // synthesizer powered by the Web Audio API that works completely offline with zero copyright!
  music: {
    audioUrl: null, // e.g., "/audio/mangalya_dharanam.mp3"
    trackName: "Auspicious Mangala Vadyam & Tanpura",
    defaultEnabled: false, // Never autoplay before explicit user tap
  },

  // ---------------------------------------------------------------------------
  // 8. WHATSAPP SHARING & METADATA
  // ---------------------------------------------------------------------------
  share: {
    // Public URL to share. If empty, the app automatically detects window.location.href
    publicWebsiteUrl: "", 
    
    // Generates the personalized WhatsApp share message
    getWhatsAppMessage: (url) => {
      return `🪔 *Traditional Wedding Invitation* 🪔\n\n` +
        `With the blessings of our elders and the grace of the Almighty, we cordially invite you and your family to the wedding of:\n\n` +
        `🤵 *[Groom's Name]* & 👰 *[Bride's Name]*\n\n` +
        `📅 *Date:* Sunday, 29th November 2026\n` +
        `⏰ *Muhurtham:* 09:00 AM – 10:30 AM\n` +
        `📍 *Venue:* [Sri Krishna Mahal / Grand Kalyana Mandapam], [Mylapore, Chennai]\n\n` +
        `Please open our wedding invitation card here:\n` +
        `${url}\n\n` +
        `We look forward to your presence and blessings! 🙏✨`;
    },
  },
};

export default weddingConfig;
