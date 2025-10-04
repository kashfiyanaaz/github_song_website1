// --- Elements ---
const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');
const generateBtn = document.getElementById('generateBtn');
const moodText = document.getElementById('moodText');
const captionText = document.getElementById('captionText');
const songText = document.getElementById('songText');
const resultBox = document.getElementById('resultBox');
const languageSelect = document.getElementById('languageSelect');

// --- Image Preview ---
imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = 'block';
  }
});

// --- Song & Caption Data ---
const captions = [
  "Feeling the vibe ✨", "Captured the perfect moment 💫", "Mood speaks louder than words 🎶",
  "Chasing sunsets and dreams 🌅", "Smiles are contagious 😊", "Lost in the moment 🌸",
  "Let the music guide you 🎵", "Happiness all around 🌞", "Serene and calm vibes 🌙",
  "Love is in the air 💌", "Excited for what's coming 🤩", "Chill and relax 😎",
  "Feeling unstoppable 💪", "Thinking deeply 🤔", "Time for some fun 😜",
  "Life is beautiful 🌈", "Heart full of joy 💖", "Dancing through life 💃",
  "Peaceful mind, happy heart 🕊️", "Living the moment 🌟"
];

// --- Songs Database (English full, placeholders for other languages) ---
const songs = {
  "english": {
    "Happy 😊": [
      "Happy – Pharrell Williams", "Good Time – Owl City & Carly Rae Jepsen",
      "Can't Stop the Feeling! – Justin Timberlake", "Walking on Sunshine – Katrina & The Waves",
      "Uptown Funk – Bruno Mars", "Shake It Off – Taylor Swift", "I Gotta Feeling – Black Eyed Peas",
      "Best Day of My Life – American Authors", "Party Rock Anthem – LMFAO", "Sugar – Maroon 5",
      "Roar – Katy Perry", "Call Me Maybe – Carly Rae Jepsen", "Dynamite – BTS", "Levitating – Dua Lipa",
      "Blinding Lights – The Weeknd", "Dance Monkey – Tones and I", "Firework – Katy Perry",
      "On Top of the World – Imagine Dragons", "Counting Stars – OneRepublic", "Shotgun – George Ezra",
      "Pompeii – Bastille", "Good 4 U – Olivia Rodrigo", "Uptown Girl – Billy Joel", "Shut Up and Dance – Walk The Moon",
      "We Found Love – Rihanna", "Glad You Came – The Wanted", "Timber – Pitbull ft. Ke$ha", "Wake Me Up – Avicii",
      "Can't Stop – Red Hot Chili Peppers", "Happy Now – Kygo", "Cool for the Summer – Demi Lovato",
      "Cheerleader – OMI", "Feel It Still – Portugal. The Man", "Classic – MKTO", "High Hopes – Panic! At The Disco",
      "Good Life – OneRepublic", "I'm a Believer – Smash Mouth", "I Wanna Dance with Somebody – Whitney Houston",
      "Electric Love – BØRNS", "Shut Up and Dance – Walk The Moon", "Best Song Ever – One Direction",
      "Cake by the Ocean – DNCE", "A Sky Full of Stars – Coldplay", "Domino – Jessie J", "Raise Your Glass – P!nk",
      "Party in the USA – Miley Cyrus", "Club Can't Handle Me – Flo Rida", "Break Free – Ariana Grande", "On Top of the World – Imagine Dragons",
      "Happy Together – The Turtles", "Walking on Sunshine – Katrina & The Waves"
    ],
    "Sad 😢": [
      "Someone Like You – Adele", "Stay With Me – Sam Smith", "Fix You – Coldplay", "The Night We Met – Lord Huron",
      "Let Her Go – Passenger", "Say You Won't Let Go – James Arthur", "All I Want – Kodaline", "Skinny Love – Birdy",
      "Happier – Ed Sheeran", "When I Was Your Man – Bruno Mars", "Lost Boy – Ruth B", "Photograph – Ed Sheeran",
      "Jealous – Labrinth", "I Can't Make You Love Me – Bonnie Raitt", "Too Good at Goodbyes – Sam Smith",
      "Tears Dry on Their Own – Amy Winehouse", "Creep – Radiohead", "Hurt – Johnny Cash", "Un-break My Heart – Toni Braxton",
      "Back to December – Taylor Swift", "All of Me – John Legend", "Say Something – A Great Big World",
      "Everybody Hurts – R.E.M.", "My Immortal – Evanescence", "Fix You – Coldplay", "I Will Always Love You – Whitney Houston",
      "Nothing Compares 2 U – Sinéad O’Connor", "The A Team – Ed Sheeran", "Hello – Adele", "If I Ain’t Got You – Alicia Keys",
      "Breathe Me – Sia", "The Scientist – Coldplay", "Chasing Cars – Snow Patrol", "Torn – Natalie Imbruglia",
      "Hallelujah – Leonard Cohen", "When I Look at You – Miley Cyrus", "Lost – Michael Bublé", "Let It Be – The Beatles",
      "Somebody That I Used to Know – Gotye", "Stay – Rihanna ft. Mikky Ekko", "Say You Love Me – Jessie Ware",
      "Bleeding Love – Leona Lewis", "Love Yourself – Justin Bieber", "Unsteady – X Ambassadors", "All I Want – Olivia Rodrigo",
      "Broken – Lifehouse", "Fix You – Coldplay", "Jar of Hearts – Christina Perri", "Cold – Maroon 5"
    ],
    // Add other moods: Energetic 💃, Calm 🌙, Romantic 💖, Excited 🤩, Chill 😎, Motivated 💪, Thoughtful 🤔, Playful 😜, Confident 😎, etc.
  },
  "hindi": {},   // TODO: Add 20 moods × 50 songs
  "kannada": {}, // TODO: Add 20 moods × 50 songs
  "tamil": {},   // TODO: Add 20 moods × 50 songs
  "telugu": {}   // TODO: Add 20 moods × 50 songs
};

// --- 20 Moods ---
const moods = [
  "Happy 😊", "Sad 😢", "Energetic 💃", "Calm 🌙", "Romantic 💖",
  "Excited 🤩", "Chill 😎", "Motivated 💪", "Thoughtful 🤔", "Playful 😜",
  "Confident 😎", "Nostalgic 🕰️", "Romantic Sad 💔", "Dance 💃", "Party 🎉",
  "Relaxed 😌", "Romantic Happy 💑", "Lonely 😔", "Adventurous 🏞️", "Grateful 🙏"
];

// --- Generate Function ---
generateBtn.addEventListener('click', () => {
  const language = languageSelect.value || 'english';
  const mood = moods[Math.floor(Math.random() * moods.length)];
  const caption = captions[Math.floor(Math.random() * captions.length)];

  const songList = songs[language][mood] || ["Shape of You – Ed Sheeran"];
  const song = songList[Math.floor(Math.random() * songList.length)];

  moodText.textContent = mood;
  captionText.textContent = caption;
  songText.textContent = song;

  resultBox.style.display = 'block';
});
