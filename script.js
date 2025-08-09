// ---- Hero video (optional) ----
const heroVideo = document.getElementById('hero-video');
if (heroVideo) {
  (async () => {
    try {
      heroVideo.src = "https://huggingface.co/datasets/Wooksung/video-and-image/resolve/main/Video_M.mp4";
      await heroVideo.play();
    } catch (e) { /* autoplay 차단시 조용히 패스 */ }
  })();
}

// ---- Theme video (Conception / Representation / Construction) ----
const themeSelect = document.getElementById('theme-select');
const themeVideo  = document.getElementById('theme-video');

const themeSources = {
  conception: "https://wooksungl.github.io/wooks-portfolio/image/project4/Video1.mp4",
  representation: "https://wooksungl.github.io/wooks-portfolio/image/project4/Video2.mp4",
  construction: "https://wooksungl.github.io/wooks-portfolio/image/project4/Video3.mp4",
};

async function setVideoSrc(videoEl, url) {
  if (!videoEl || !url) return;
  if (videoEl.src === url) return;
  try {
    videoEl.pause();
    videoEl.src = url;        // <source> 건드리지 말고 video.src 직접 세팅
    videoEl.load();
    const p = videoEl.play();
    if (p && p.then) await p;
  } catch (err) {
    console.warn('Autoplay blocked or load error:', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const initialKey = themeSelect?.value || 'conception';
  setVideoSrc(themeVideo, themeSources[initialKey]);
});

themeSelect?.addEventListener('change', (e) => {
  const key = e.target.value;
  setVideoSrc(themeVideo, themeSources[key]);
});

// ---- City/Style dropdown (fill URLs if you have them) ----
const citySel  = document.getElementById('city-select');
const styleSel = document.getElementById('style-select');
const cityVid  = document.getElementById('city-style-video');

const cityStyleMap = {
  seoul: {
    1: "https://wooksungl.github.io/wooks-portfolio/image/project4/seoul_v1.mp4",
    2: "https://wooksungl.github.io/wooks-portfolio/image/project4/seoul_v2.mp4",
    3: "https://wooksungl.github.io/wooks-portfolio/image/project4/seoul_v3.mp4",
    4: "https://wooksungl.github.io/wooks-portfolio/image/project4/seoul_v4.mp4",
  },
  tokyo:  { 1: "", 2: "", 3: "", 4: "" },
  london: { 1: "", 2: "", 3: "", 4: "" },
  paris:  { 1: "", 2: "", 3: "", 4: "" },
};

function updateCityStyleVideo() {
  const city = citySel?.value || 'seoul';
  const style = styleSel?.value || '1';
  const url = cityStyleMap[city]?.[style];
  if (url) setVideoSrc(cityVid, url);
  else {
    cityVid.pause();
    cityVid.removeAttribute('src');
    cityVid.load();
  }
}

citySel?.addEventListener('change', updateCityStyleVideo);
styleSel?.addEventListener('change', updateCityStyleVideo);
document.addEventListener('DOMContentLoaded', updateCityStyleVideo);
