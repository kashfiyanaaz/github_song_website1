const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');
const generateBtn = document.getElementById('generateBtn');
const moodText = document.getElementById('moodText');
const captionText = document.getElementById('captionText');
const songText = document.getElementById('songText');
const resultBox = document.getElementById('resultBox');
const languageSelect = document.getElementById('languageSelect');

// Image preview
imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = 'block';
  }
});

// Generate AI results
generateBtn.addEventListener('click', () => {
  const language = languageSelect.value || 'english';

  // Dummy mood detection
  const moods = ["Happy 😊", "Sad 😢", "Energetic 💃", "Calm 🌙", "Romantic 💖"];
  const mood = moods[Math.floor(Math.random() * moods.length)];

  // Dummy captions
  const captions = [
    "Feeling the vibe ✨",
    "Captured the perfect moment 💫",
    "Mood speaks louder than words 🎶",
    "Chasing sunsets and dreams 🌅",
    "Smiles are contagious 😊"
  ];
  const caption = captions[Math.floor(Math.random() * captions.length)];

  // Songs by mood and language
  const songs = {
    "english": {
      "Happy 😊": "Happy – Pharrell Williams",
      "Sad 😢": "Someone Like You – Adele",
      "Energetic 💃": "Can't Stop the Feeling! – Justin Timberlake",
      "Calm 🌙": "Let Her Go – Passenger",
      "Romantic 💖": "Perfect – Ed Sheeran"
    },
    "hindi": {
      "Happy 😊": "Gallan Goodiyan – Dil Dhadakne Do",
      "Sad 😢": "Channa Mereya – Ae Dil Hai Mushkil",
      "Energetic 💃": "Malhari – Bajirao Mastani",
      "Calm 🌙": "Kabira – Yeh Jawaani Hai Deewani",
      "Romantic 💖": "Tum Hi Ho – Aashiqui 2"
    },
    "kannada": {
      "Happy 😊": "Belageddu – Kirik Party",
      "Sad 😢": "Ninna Snehake – Amrutha Varshini",
      "Energetic 💃": "Karabuu – Pogaru",
      "Calm 🌙": "Neene Modalu Neene Kone – Love Mocktail",
      "Romantic 💖": "Ondu Malebillu – Chakravarthy"
    },
    "tamil": {
      "Happy 😊": "Vaathi Coming – Master",
      "Sad 😢": "Ennodu Nee Irundhaal – I",
      "Energetic 💃": "Aaluma Doluma – Vedalam",
      "Calm 🌙": "New York Nagaram – Sillunu Oru Kadhal",
      "Romantic 💖": "Kadhal Anukkal – Enthiran"
    },
    "telugu": {
      "Happy 😊": "Butta Bomma – Ala Vaikunthapurramuloo",
      "Sad 😢": "Samajavaragamana – Ala Vaikunthapurramuloo",
      "Energetic 💃": "Top Lesi Poddi – Iddarammayilatho",
      "Calm 🌙": "Inkem Inkem Inkem Kaavaale – Geetha Govindam",
      "Romantic 💖": "Vintunnava – Ye Maaya Chesave"
    }
  };

  moodText.textContent = mood;
  captionText.textContent = caption;
  songText.textContent = songs[language][mood];

  resultBox.style.display = 'block';
});
