const themeSelect = document.getElementById('theme-select');
const themeVideo = document.getElementById('theme-video');

const themeData = {
  conception: {
    video: "videos/conception.mp4"
  },
  representation: {
    video: "videos/representation.mp4"
  },
  construction: {
    video: "videos/construction.mp4"
  }
};

themeSelect.addEventListener('change', () => {
  const selected = themeSelect.value;
  themeVideo.src = themeData[selected].video;
  themeVideo.load();
  themeVideo.play();
});
