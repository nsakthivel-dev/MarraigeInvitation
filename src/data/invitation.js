/**
 * ==============================================================================
 * CENTRALIZED ISLAMIC WEDDING INVITATION CONFIGURATION
 * ==============================================================================
 * 
 * Replace the bracketed placeholder values (e.g., "[Groom's Name]") with the
 * actual wedding details when ready. All components read directly from here.
 * 
 * Keep placeholders clean, natural, and easily editable.
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
    name: "[Groom's Name]",
    qualification: "[Profession / Education]", // Optional, set to "" to hide
    sonOf: "Son of",
    fatherName: "[Groom's Father's Name]",
    motherName: "[Groom's Mother's Name]",
    familyDetails: "[Groom's Family Lineage / City]", // Optional
    city: "Chennai, Tamil Nadu",
  },

  bride: {
    name: "[Bride's Name]",
    qualification: "[Profession / Education]", // Optional, set to "" to hide
    daughterOf: "Daughter of",
    fatherName: "[Bride's Father's Name]",
    motherName: "[Bride's Mother's Name]",
    familyDetails: "[Bride's Family Lineage / City]", // Optional
    city: "Chennai, Tamil Nadu",
  },

  // ---------------------------------------------------------------------------
  // 4. THE NIKAH & CELEBRATION DETAILS
  // ---------------------------------------------------------------------------
  weddingDateISO: "2026-11-29T11:00:00+05:30", // ISO 8601 format for countdown & calendar
  displayDate: "Sunday, 29th November 2026",
  dayOfWeek: "Sunday",
  hijriDate: "19 Jumada al-Awwal 1448 AH",
  
  nikah: {
    title: "The Nikah Ceremony",
    time: "11:00 AM onwards",
    ceremonyNote: "In sha Allah, to be solemnized in the gracious presence of family and loved ones",
  },

  // Additional events (e.g. Walima / Reception)
  ceremonies: [
    {
      id: "nikah",
      title: "The Nikah Ceremony",
      date: "Sunday, 29th November 2026",
      time: "11:00 AM onwards",
      description: "The sacred marriage contract solemnized with prayers and duas for a blessed union, followed by traditional wedding feast.",
      accent: "Sacred Covenant",
    },
    {
      id: "walima",
      title: "The Walima Reception",
      date: "Sunday, 29th November 2026",
      time: "07:00 PM onwards",
      description: "A celebratory feast to felicitate the newlyweds and share joyful moments with family and friends.",
      accent: "Celebration Feast",
    },
  ],

  // ---------------------------------------------------------------------------
  // 5. CHENNAI VENUE & DIRECTIONS
  // ---------------------------------------------------------------------------
  venue: {
    name: "The Crescent Grand Convention Centre",
    hallName: "Royal Grand Palace Banquet Hall",
    streetAddress: "No. 48, Mount Poonamallee Road, Guindy",
    area: "Guindy",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600032",
    landmark: "Near Kathipara Junction & Guindy Metro Station",
    // Direct Google Maps directions URL (opens in Maps app or browser)
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Guindy+Chennai+Tamil+Nadu+India",
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
    families: "[The Groom's Family] & [The Bride's Family]",
    subtext: "Relatives, Friends, and Well-Wishers in Chennai",
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
        `🤵 *[Groom's Name]*\n` +
        `& \n` +
        `👰 *[Bride's Name]*\n\n` +
        `Together With Their Families\n\n` +
        `📅 *Date:* Sunday, 29th November 2026\n` +
        `⏰ *Nikah Ceremony:* 11:00 AM onwards\n` +
        `📍 *Venue:* The Crescent Grand Convention Centre, Guindy, Chennai\n` +
        `📌 *Address:* No. 48, Mount Poonamallee Road, Guindy, Chennai – 600032\n\n` +
        `May Allah bless this union with love and barakah. Please open our digital wedding invitation card here:\n` +
        `${url}\n\n` +
        `Your presence and sincere duas are deeply appreciated! 🤲✨`;
    },
  },
};

export default weddingConfig;
