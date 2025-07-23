const citySelect = document.getElementById('city-select');
const styleSelect = document.getElementById('style-select');
const videoEl = document.getElementById('city-style-video');

function updateVideo() {
  const city = citySelect.value;
  const style = styleSelect.value;
  const filePath = `assets/videos/${city}_${style}.mp4`;

  videoEl.src = filePath;
  videoEl.load();
  videoEl.play();
}

citySelect.addEventListener('change', updateVideo);
styleSelect.addEventListener('change', updateVideo);

// 초기 실행
updateVideo();
