const themeSelect = document.getElementById('theme-select');
const themeVideo = document.getElementById('theme-video');

const themeSources = {
  conception: "https://wooksungl.github.io/wooks-portfolio/image/project4/Video1.mp4",
  representation: "https://wooksungl.github.io/wooks-portfolio/image/project4/Video2.mp4",
  construction: "https://wooksungl.github.io/wooks-portfolio/image/project4/Video3.mp4"
};

themeSelect.addEventListener('change', () => {
  const selected = themeSelect.value;
  themeVideo.querySelector('source').src = themeSources[selected];
  themeVideo.load();
  themeVideo.play();
});
