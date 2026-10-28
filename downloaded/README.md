# ❤️ Karwa Chauth / Romantic Web Gift for Your Wife

This is a customized, standalone, offline-ready clone of the romantic single-page web app originally from [dilse.gifts](https://dilse.gifts/karwa-chauth/demo).

---

## 🌟 Interactive Features Included

1. **Starry Moonlit Sky & Floating Hearts**: A fixed starry night backdrop with shooting stars, a golden glowing moon, and rising floating hearts.
2. **Ambient Music Player**: A floating play/pause button playing a romantic soundtrack or custom YouTube song.
3. **Hero Surprise Screen**: Pulsing golden ring with your wife's photo and personalized greeting: *"Hello [Wife's Name] ❤ - [Your Name] made something for you."*
4. **Interactive Wax-Seal Love Letter Envelope**: An animated 3D envelope with sparkles and floating hearts that smoothly unrolls your personal love letter when tapped.
5. **Moon Sighting Sieve (Chhalni) Scroll Animation**: Interactive frame-by-frame canvas sequence as you scroll down.
6. **Polaroid Memory Gallery ("The Reason I Smile")**: Realistic tilted photo polaroids showcasing your favorite photos and memories together.
7. **"Hold My Hand. Never Let Go." Scroll Sequence**: Smooth cinematic hand-holding animation.
8. **Chocolate Shower**: Tapping rains delicious chocolates across the screen!
9. **Bollywood Romance Video Sequence**:
   - Quotes from iconic romantic classics (*"Kisi cheez ko shiddat se chaho..."*).
   - Video clips (*Aashiqui 2*, *Kabir Singh*, *Om Shanti Om*, Shah Rukh Khan).
10. **Interactive Scratch Card ("✨ One Last Surprise Awaits...")**:
    - She scratches off the silver card with her finger/mouse.
    - Confetti explosion reveals: **"JACKPOT! You Won My Heart ❤️ - No Expiry. No Returns. Yours Forever."**
11. **Personalized Footer**: *"Made with love by [Your Name]"*.

---

## 🛠️ How to Customize

All customizations can be done in one single file: **`config.js`**!

Open [config.js](file:///Users/adityakumarsingh/Documents/antigravity/noble-bose/downloaded/config.js) in your text editor:

```javascript
window.CUSTOM_GIFT_CONFIG = {
  recipient_name: "Her Name",       // Your wife's name / nickname
  sender_name: "Your Name",         // Your name

  circle_photo_url: "/photos/wife-portrait.png", // Her hero photo

  message: "You are my today, my tomorrow...",   // Special quote

  love_letter_heading: "Dear Love ❤️",
  love_letter_message: `Your heartfelt love letter goes here...`,

  scratch_card_prize: "My Heart",   // Revealed in scratch card

  audioUrl: "/karwa-chauth-default-romantic.mp3", // Background music
  audioTitle: "Our song",

  // Couple photos for the Polaroid gallery
  memoryPhotos: [
    "/photos/memory1.png",
    "/photos/memory2.png",
    "/photos/memory3.png",
    "/photos/memory4.png"
  ]
};
```

---

## 📸 Adding Your Own Photos

1. Drop your photos inside the [`photos/`](file:///Users/adityakumarsingh/Documents/antigravity/noble-bose/downloaded/photos/) folder.
2. In `config.js`, update the image paths (e.g. `"/photos/vacation.jpg"`).

---

## 🚀 How to Run Locally

Run the local server:
```bash
python3 server.py
```
Then open:
👉 **[http://localhost:8080](http://localhost:8080)**

---

## 🌐 How to Host & Share with Her (Free)

You can easily host this page so she can open it on her phone:

### Option 1: Vercel (Fastest & Free)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` inside the `downloaded` folder and follow the prompts.
3. You get a live link (e.g., `https://for-my-wife.vercel.app`) in seconds!

### Option 2: Netlify Drop (No command line needed)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the `downloaded` folder.
3. Get an instant live shareable link!

### Option 3: GitHub Pages
1. Push this folder to a GitHub repository.
2. Under **Settings > Pages**, select the branch and save.
