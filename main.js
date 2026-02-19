const musicians = [
  { name: "Kristin Rosendahl", genre: "Filmmusik Komposition", year: 2025, url: "https://kristinrosendahl.com", image: "Kristin-Rosendahl.jpg" },
  { name: "Nasmadrone", genre: "Filmmusik Komposition", year: 2025, url: "https://nasmadrone.myportfolio.com/", image: "Nasmadrone.jpg" },
  { name: "TORN", genre: "Musiklärare", year: 2025, url: "https://instagram.com/tornmusik/", image: "TORN.jpg" },
  { name: "Ture Lewin", genre: "Jazz", year: 2025, url: "https://youtu.be/_Zy8phZ44Og", image: "Ture-Lewin.jpg" },
  { name: "Fabian Isaksson", genre: "Musikproduktion", year: 2025, url: "https://open.spotify.com/album/4VWUNkg", image: "Fabian-Isaksson.jpg" },
  { name: "Tilde Edlund", genre: "Folkmusik", year: 2024, url: "", image: "Tilde-Edlund.jpg" },
  { name: "Alvin Cronberg & Hans Wohlfarth", genre: "Jazz", year: 2024, url: "", image: "Alvin-Cronberg-_-Hans-Wohlfarth.jpg" },
  { name: "Juli Deak", genre: "Classical Flute", year: 2024, url: "https://soundcloud.com/user-178757", image: "Juli-Deak.jpg" },
  { name: "Vilmar Jansson", genre: "Musikproduktion", year: 2024, url: "https://soundcloud.com/vilmar-jansson", image: "Vilmar-Jansson.jpg" },
  { name: "Hannes Arason", genre: "Jazz", year: 2024, url: "https://instagram.com/hannes.arason/", image: "Hannes-Arason.jpg" },
  { name: "Kristine Botros", genre: "Musikproduktion", year: 2023, url: "https://youtube.com/c/KristineBotros", image: "Kristine-Botros.jpg" },
  { name: "Armand van Wijck", genre: "Jazz Komposition", year: 2023, url: "https://youtube.com/@armandvw", image: "Armand-van-Wijck.jpg" },
  { name: "Eli Ulfhammer", genre: "Musikproduktion", year: 2023, url: "https://soundcloud.com/eli-ulfhammer", image: "Eli-Ulfhammer.jpg" },
  { name: "Erasmus Talbot", genre: "Filmmusik Komposition", year: 2023, url: "https://soundcloud.com/erasmus-talbot", image: "Erasmus-Talbot.jpg" },
  { name: "Siri Anna Flensburg & Alexander Wallin", genre: "Folkmusik", year: 2023, url: "https://instagram.com/siriannaf/", image: "Siri-Anna-Flensburg-_-Alexander-Wallin.jpg" },
  { name: "Brenda El Reyes", genre: "Elektroakustisk Komposition", year: 2022, url: "", image: "Brenda-El-Reyes.jpeg" },
  { name: "Amanda Sandorov", genre: "Jazz", year: 2022, url: "", image: "Amanda-Sandorov.jpeg" },
  { name: "Jacob Westberg", genre: "Musikproduktion", year: 2022, url: "", image: "Jacob-Westberg.jpeg" },
  { name: "Joel Janson Johansen", genre: "Konstmusik Komposition", year: 2022, url: "", image: "Joel-Janson-Johansen.jpeg" },
  { name: "Ingrid Rodebjer", genre: "Folkmusik", year: 2022, url: "", image: "Ingrid-Rodebjer.jpeg" },
];

const gallery = document.getElementById("gallery");

musicians.forEach(m => {
  const card = document.createElement("div");
  card.className = "card";

  const urlDisplay = m.url ? new URL(m.url).hostname.replace("www.", "") + new URL(m.url).pathname.slice(0, 16) : "";
  const urlTruncated = urlDisplay.length > 28 ? urlDisplay.slice(0, 25) + "..." : urlDisplay;

  card.innerHTML = `
    <img src="assets/images/${m.image}" alt="${m.name}" loading="lazy">
    <div class="card-info">
      <h3>${m.name}</h3>
      <span class="card-tag">${m.genre}</span>
      <div class="card-year">${m.year}</div>
      ${m.url ? `<a class="card-link" href="${m.url}" target="_blank" rel="noopener">${urlTruncated}</a>` : ""}
    </div>
  `;

  gallery.appendChild(card);
});
