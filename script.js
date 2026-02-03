const map = L.map("map").setView([33.5, 133.5], 8);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

const spots = [
  { name: "高知城", lat: 33.5597, lng: 133.5311, img: "https://images.unsplash.com/photo-1583912267550-3b6cbd03fbc3" },
  { name: "桂浜", lat: 33.4969, lng: 133.5717, img: "https://images.unsplash.com/photo-1600845046313-9f4e297a7c57" },
  { name: "四万十川", lat: 32.9895, lng: 132.9330, img: "https://images.unsplash.com/photo-1608552211698-2cbd8768c296" },
  { name: "仁淀ブルー（安居渓谷）", lat: 33.5384, lng: 133.0366, img: "https://images.unsplash.com/photo-1628582948576-23b0e8b7a89e" },
  { name: "室戸岬", lat: 33.2850, lng: 134.1496, img: "https://images.unsplash.com/photo-1599458252469-c8f0b6c47e33" },
  { name: "柏島", lat: 32.7839, lng: 132.7286, img: "https://images.unsplash.com/photo-1626249893783-cc9f7a2e8a5a" },
];

spots.forEach((spot) => {
  const popupContent = `
    <strong>${spot.name}</strong><br>
    <img src="${spot.img}" alt="${spot.name}" style="width:150px;border-radius:8px;">
  `;
  L.marker([spot.lat, spot.lng]).addTo(map).bindPopup(popupContent);
});
