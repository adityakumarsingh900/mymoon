// ========================================================
// ❤️ PERSONAL LOVE GIFT CONFIGURATION ❤️
// Customize this file with your wife's details, photos, and messages!
// ========================================================

window.CUSTOM_GIFT_CONFIG = {
  // 1. NAMES
  recipient_name: "Anamika", // <-- Change to your wife's name / nickname (e.g. "Pooja", "Shreya", "Jaan")
  sender_name: "Aditya",     // <-- Change to your name

  // 2. HERO / CIRCULAR PHOTO (Optional - leave null to use default or your own photo path)
  // Example: "photos/wife.jpg" or "/assets/my-photo.jpg"
  circle_photo_url: "/assets/photos/wife-portrait.jpg",

  // 3. MAIN LOVE MESSAGE (Shown towards the bottom)
  message: "You are my today, my tomorrow, and every prayer my heart will ever make. ❤️🌙\nHappy Karwa Chauth, Bubu. You are my forever. ❤️",

  // 4. LOVE LETTER (Opened from the animated envelope)
  // Heading on the envelope letter (e.g., "To My Dearest Wife ❤️" or "Dear Love ❤️")
  love_letter_heading: "Dear Love ❤️",
  
  // Custom message inside the envelope. Separate paragraphs with double newlines.
  // Leave as null to use the romantic default letter.
  love_letter_message: `If life gives me a thousand chances...

I'll fall in love with you a thousand times.

Not because you're perfect.
But because somehow, everything feels right when you're beside me.

And that's all I've ever needed. ❤️

If one day someone asks me,
"What was the best decision you ever made?"

I'll smile...
because the answer has always been you.

Thank you for loving me on my best days
and staying with me on my worst ones.

I love you.
More than yesterday.
Less than tomorrow. ❤️`,

  // 5. SCRATCH CARD SURPRISE
  // What is revealed when she scratches off the card?
  scratch_card_prize: "My Heart",

  // 6. BACKGROUND MUSIC
  // Put any MP3 file in the project folder and reference it here, or keep the romantic default
  audioUrl: "/karwa-chauth-default-romantic.mp3",
  audioTitle: "Our song",

  // 7. YOUTUBE SONG (Optional YouTube URL)
  // If provided, YouTube audio will be used instead
  youtube_url: "https://youtu.be/0wlulIyVh0g?si=Xmj_mMdFcoqTwnRC",

  // 8. POLAROID MEMORY PHOTOS (Array of image URLs or local paths)
  // Put your couple photos in the 'photos' folder and list them here:
  // e.g., ["photos/memory1.jpg", "photos/memory2.jpg", "photos/memory3.jpg", "photos/memory4.jpg"]
  // If left null, it will use the default romantic silhouettes/portraits.
  memoryPhotos: ['/assets/photos/memory1.jpg', '/assets/photos/memory2.jpg', '/assets/photos/memory3.jpg', '/assets/photos/memory4.jpg'],

  // 9. SHOW BUY / PROMOTIONAL BUTTONS (set false to keep it a pure personal gift)
  showBuyButton: false
};
