// Editable content for both display pages (parihara-seal.html and relief-network.html).
// Edit this file and reload the page(s) — no build step needed.
window.BAMUL_CONTENT = {
  org: {
    logo: "assets/bamul-logo.png",
    line1: "ಬಮೂಲ್ : ಬೆಂಗಳೂರು ಸಹಕಾರ ಹಾಲು ಒಕ್ಕೂಟ",
    line2: "ರಾಸು ಮರಣ ಪರಿಹಾರ",
    line3: "ವಿತರಣಾ ಕಾರ್ಯಕ್ರಮ",
    // Relief Network page only: line2 + line3 combined onto one line.
    lineCombined: "ರಾಸು ಮರಣ ಪರಿಹಾರ ವಿತರಣಾ ಕಾರ್ಯಕ್ರಮ",
    period: "2026–27",
    // Relief Network / Relief Network (Chairman) pages
    chairmanPhoto: "assets/shri-dksuresh.png",
    chairmanName: "Sri D.K. Suresh",
    chairmanTitle: "Chairman, BAMUL",
    eventDate: "15th September 2026"
  },

  button: {
    kn: "ಪ್ರಾರಂಭಿಸಿ",
    en: "Initiate Transfer",
    enShort: "Initiate",
    // shown on the Relief Network hub once the sequence finishes
    doneKn: "ವಿತರಿಸಲಾಗಿದೆ",
    doneEn: "Completed"
  },

  amountEyebrow: "ರಾಸು ಮರಣ ಪರಿಹಾರ ವಿತರಣಾ ಮೊತ್ತ",

  declaration: {
    en: "Bank Transfer Initiated",
    sub: "Funds are on their way to farmers across the Bengaluru Milk Union."
  },

  // Relief Network page only.
  network: {
    // controls how fast the post-click sequence plays. 1 = normal, 2 = twice as fast, 0.5 = half speed (slower).
    speedMultiplier: 1,
    // Kannada line shown above "Bank Transfer Initiated" in the end-of-sequence popup.
    overlayEyebrow: "ರಾಸು ಮರಣ ಪರಿಹಾರ ವಿತರಣೆಯನ್ನು ಕೈಗೊಳ್ಳಲಾಗಿದೆ"
  },

  totals: {
    amount: 101391000,
    beneficiaries: 1619,
    taluks: 14,
    societies: 2288
  },

  // claims + amount per taluk must sum to totals.beneficiaries / totals.amount
  taluks: [
    { kn: "ಆನೇಕಲ್", claims: 52, amount: 3115000 },
    { kn: "ಬೆಂ. ಉತ್ತರ", claims: 133, amount: 8730000 },
    { kn: "ಬೆಂ. ದಕ್ಷಿಣ", claims: 155, amount: 9195000 },
    { kn: "ಬೆಂ. ಪೂರ್ವ", claims: 48, amount: 3210000 },
    { kn: "ದೇವನಹಳ್ಳಿ", claims: 56, amount: 4061000 },
    { kn: "ದೊಡ್ಡಬಳ್ಳಾಪುರ", claims: 157, amount: 11244000 },
    { kn: "ಹೊಸಕೋಟೆ", claims: 66, amount: 4505000 },
    { kn: "ನೆಲಮಂಗಲ", claims: 134, amount: 7900000 },
    { kn: "ಮಾಗಡಿ", claims: 57, amount: 3580000 },
    { kn: "ಕುಡೂರು", claims: 84, amount: 4952000 },
    { kn: "ರಾಮನಗರ", claims: 208, amount: 12242000 },
    { kn: "ಚನ್ನಪಟ್ಟಣ", claims: 185, amount: 11173000 },
    { kn: "ಕನಕಪುರ", claims: 179, amount: 10601000 },
    { kn: "ಹಾರೋಹಳ್ಳಿ", claims: 105, amount: 6883000 }
  ]
};
