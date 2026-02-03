// LeafletのCSSとJSをCodePenで読み込む場合
// CSS: https://unpkg.com/leaflet/dist/leaflet.css
// JS:  https://unpkg.com/leaflet/dist/leaflet.js

// 地図初期設定
const map = L.map('map').setView([33.5597, 133.5311], 9);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 観光地リスト
const spots = [
  { name: "高知城", lat: 33.5597, lng: 133.5311, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Kochi_Castle_2011.jpg/320px-Kochi_Castle_2011.jpg" },
  { name: "桂浜", lat: 33.5250, lng: 133.5544, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Katsurahama_2012-12-01.jpg/320px-Katsurahama_2012-12-01.jpg" },
  { name: "四万十川", lat: 33.0000, lng: 132.9000, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Shimanto_River.jpg/320px-Shimanto_River.jpg" },
  { name: "龍河洞", lat: 33.4550, lng: 133.1800, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Ryugado_cave_Kochi_Japan.jpg/320px-Ryugado_cave_Kochi_Japan.jpg" },
  { name: "室戸岬", lat: 33.2833, lng: 134.1000, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Muroto_Cape_2015.jpg/320px-Muroto_Cape_2015.jpg" },
  { name: "はりまや橋", lat: 33.5593, lng: 133.5374, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Harimayabashi_02.jpg/320px-Harimayabashi_02.jpg" }
];

// モーダル要素
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("close")[0];
span.onclick = () => { modal.style.display = "none"; };

// マーカーを追加
spots.forEach(spot => {
  const marker = L.marker([spot.lat, spot.lng]).addTo(map);
  marker.bindPopup(`<strong>${spot.name}</strong><br><img class="popup-image" src="${spot.img}" alt="${spot.name}">`);
});

// ポップアップ内画像クリックでモーダル表示
map.on('popupopen', function(e) {
  const img = e.popup.getElement().querySelector('img');
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = e.popup.getContent().split('<br>')[0].replace('<strong>', '').replace('</strong>', '');
  };
});
