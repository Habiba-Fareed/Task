// ---------- Data ----------
const destinations = [
  {
    country: "France",
    name: "Paris",
    description: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
    continent: "Europe",
    food: "Croissant, Macarons",
    place: "Eiffel Tower",
    language: "French",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=1400&h=-1&s=1",
  },
  {
    country: "Japan",
    name: "Tokyo",
    description: "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
    continent: "Asia",
    food: "Sushi, Ramen",
    place: "Tokyo Tower",
    language: "Japanese",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/97/39/7f/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_f31158e4bb953d28a308",
  },
  {
    country: "Italy",
    name: "Rome",
    description: "Rome is famous for its ancient history, beautiful architecture and delicious Italian food.",
    continent: "Europe",
    food: "Pizza, Pasta",
    place: "Colosseum",
    language: "Italian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeoX-U7sJvByrIsESzy4WobEoxgh6GWehN4UV19NzpeA&s=10",
  },
  {
    country: "Egypt",
    name: "Cairo",
    description: "Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.",
    continent: "Africa",
    food: "Koshari, Foul",
    place: "Pyramids",
    language: "Arabic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2t_v3lmV4DQR767zx4GShM16p_CctXxBjL4VIRShIYHtgiiCyxfuTsUs&s=10",
  },
];

// ---------- Elements ----------
const $ = (id) => document.getElementById(id);
const els = {
  count: $("destCount"),
  country: $("destCountry"),
  name: $("destName"),
  desc: $("destDesc"),
  continent: $("destContinent"),
  food: $("destFood"),
  place: $("destPlace"),
  language: $("destLanguage"),
  image: $("destImage"),
  badge: $("destBadge"),
  dots: $("dots"),
  prev: $("prevBtn"),
  next: $("nextBtn"),
};

let current = 0;
const pad = (n) => String(n).padStart(2, "0");

// ---------- Build dots ----------
destinations.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "dot";
  dot.setAttribute("aria-label", `Go to destination ${i + 1}`);
  dot.addEventListener("click", () => showDestination(i));
  els.dots.appendChild(dot);
});

function showDestination(index) {
  current = (index + destinations.length) % destinations.length; // loops around
  const d = destinations[current];

  els.count.textContent = `${pad(current + 1)} / ${pad(destinations.length)}`;
  els.country.textContent = d.country;
  els.name.textContent = d.name;
  els.desc.textContent = d.description;
  els.continent.textContent = d.continent;
  els.food.textContent = d.food;
  els.place.textContent = d.place;
  els.language.textContent = d.language;
  els.badge.textContent = pad(current + 1);

  // image fade
  els.image.classList.add("fade");
  setTimeout(() => {
    els.image.style.backgroundImage = `url("${d.image}")`;
    els.image.classList.remove("fade");
  }, 200);

  // active dot
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === current);
  });
}

els.next.addEventListener("click", () => showDestination(current + 1));
els.prev.addEventListener("click", () => showDestination(current - 1));

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") showDestination(current + 1);
  if (e.key === "ArrowLeft") showDestination(current - 1);
});

// First render
showDestination(0);
