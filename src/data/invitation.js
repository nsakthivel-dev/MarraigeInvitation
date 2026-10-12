/**
 * ==============================================================================
 * CENTRALIZED ISLAMIC WEDDING INVITATION CONFIGURATION
 * ==============================================================================
 * 
 * Centralized configuration containing all wedding details for
 * Ajmal Ahamed R & Rifa J. All components read directly from here.
 */

export const weddingConfig = {
  // ---------------------------------------------------------------------------
  // 1. SPIRITUAL INVOCATIONS & BISMILLAH
  // ---------------------------------------------------------------------------
  arabicGreeting: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  arabicGreetingTranslation: "In the name of Allah, the Most Gracious, the Most Merciful.",
  blessingsTitle: "With the Blessings of Allah",
  invitationTitle: "Wedding Invitation",
  bismillahHeader: "Bismillah",

  // ---------------------------------------------------------------------------
  // 2. INVITATION MESSAGE
  // ---------------------------------------------------------------------------
  invitationMessage:
    "With the blessings of Allah, we joyfully invite you to join us in celebrating the Nikah of our beloved children. Your presence, prayers, and blessings will make this special occasion even more meaningful to our families.",

  // ---------------------------------------------------------------------------
  // 3. THE COUPLE & FAMILIES
  // ---------------------------------------------------------------------------
  familyGreeting: "Together With Their Families",

  groom: {
    name: "Ajmal Ahamed R",
    qualification: "", // Optional, set to "" to hide
    sonOf: "Son of",
    fatherName: "[Groom's Father's Name]",
    motherName: "[Groom's Mother's Name]",
    familyDetails: "", // Optional
    city: "Pondicherry",
  },

  bride: {
    name: "Rifa J",
    qualification: "", // Optional, set to "" to hide
    daughterOf: "Daughter of",
    fatherName: "[Bride's Father's Name]",
    motherName: "[Bride's Mother's Name]",
    familyDetails: "", // Optional
    city: "Pondicherry",
  },

  // ---------------------------------------------------------------------------
  // 4. THE NIKAH & CELEBRATION DETAILS
  // ---------------------------------------------------------------------------
  weddingDateISO: "2026-12-26T17:00:00+05:30", // ISO 8601 format for countdown & calendar
  displayDate: "Saturday, 26th December 2026",
  dayOfWeek: "Saturday",
  hijriDate: "17 Rajab 1448 AH",
  
  nikah: {
    title: "The Nikah Ceremony",
    time: "5:00 PM",
    ceremonyNote: "In sha Allah, to be solemnized in the gracious presence of family and loved ones",
  },

  // Additional events (e.g. Walima / Reception)
  ceremonies: [
    {
      id: "nikah",
      title: "The Nikah Ceremony",
      date: "Saturday, 26th December 2026",
      time: "5:00 PM",
      description: "The sacred marriage contract solemnized with prayers and duas for a blessed union.",
      accent: "Sacred Covenant",
    },
    {
      id: "reception",
      title: "The Reception",
      date: "Saturday, 26th December 2026",
      time: "6:30 PM",
      description: "A celebratory feast to felicitate the newlyweds and share joyful moments with family and friends.",
      accent: "Celebration Feast",
    },
  ],

  // ---------------------------------------------------------------------------
  // 5. VENUE & DIRECTIONS
  // ---------------------------------------------------------------------------
  venue: {
    name: "Santo Lawn",
    hallName: "",
    streetAddress: "",
    area: "",
    city: "Pondicherry",
    state: "",
    pincode: "",
    landmark: "",
    // Direct Google Maps directions URL (opens in Maps app or browser)
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Santo+Lawn+Pondicherry",
  },

  // ---------------------------------------------------------------------------
  // 6. CLOSING MESSAGE, DUA & FAMILY SIGNATURE
  // ---------------------------------------------------------------------------
  closingMessage:
    "May Allah bless this union with love, mercy, understanding, and happiness. We humbly request your presence and duas as our families come together to celebrate this blessed occasion.",

  duaGreeting: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
  duaTranslation: "May Allah bless you, shower His blessings upon you, and unite you both in goodness.",
  
  appreciationMessage: "Your presence and prayers are sincerely appreciated.",

  familySignature: {
    complimentsText: "With Warm Compliments & Duas From:",
    families: "The Families of Ajmal Ahamed R & Rifa J",
    subtext: "Relatives, Friends, and Well-Wishers in Pondicherry",
  },

  // ---------------------------------------------------------------------------
  // 7. OPTIONAL MEDIA & MUSIC
  // ---------------------------------------------------------------------------
  music: {
    audioUrl: null, // e.g. "/audio/islamic_wedding_melody.mp3"
    trackName: "Serene Acoustic Harmony",
    defaultEnabled: false, // Strict: never autoplay before user interaction
  },

  // ---------------------------------------------------------------------------
  // 8. WHATSAPP SHARING & METADATA
  // ---------------------------------------------------------------------------
  share: {
    publicWebsiteUrl: "", // If empty, automatically uses window.location.href

    getWhatsAppMessage: (url) => {
      return `🌙 *Bismillah ir-Rahman ir-Rahim* 🌙\n\n` +
        `With the blessings of Allah, we joyfully invite you to join us in celebrating the Nikah of:\n\n` +
        `🤵 *Ajmal Ahamed R*\n` +
        `& \n` +
        `👰 *Rifa J*\n\n` +
        `Together With Their Families\n\n` +
        `📅 *Date:* Saturday, 26th December 2026\n` +
        `⏰ *Nikah Ceremony:* 5:00 PM\n` +
        `⏰ *Reception:* 6:30 PM\n` +
        `📍 *Venue:* Santo Lawn, Pondicherry\n\n` +
        `May Allah bless this union with love and barakah. Please open our digital wedding invitation card here:\n` +
        `${url}\n\n` +
        `Your presence and sincere duas are deeply appreciated! 🤲✨`;
    },
  },
};

export default weddingConfig;
