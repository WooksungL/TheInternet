const citySelect = document.getElementById('city-select');
const styleSelect = document.getElementById('style-select');
const videoEl = document.getElementById('city-style-video');

function updateVideo() {
  const city = citySelect.value;
  const style = styleSelect.value;

  // ✅ GitHub Pages에서 재생 가능하도록 전체 경로 지정
  const baseURL = "https://wooksungl.github.io/TheInternet/images";
  const filePath = `${baseURL}/${city}_${style}.mp4`;

  videoEl.src = filePath;
  videoEl.load();
  videoEl.play();
}

citySelect.addEventListener('change', updateVideo);
styleSelect.addEventListener('change', updateVideo);

updateVideo(); // 초기 실행
