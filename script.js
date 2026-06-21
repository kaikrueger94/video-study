const videos = [
const videos = [
"https://www.dropbox.com/scl/fi/7pbujguge3rtvc5mx9x33/v1.mp4?rlkey=2n58up8xv33rhmvg3omnkxshv&st=5ryvred5&raw=1",
"https://www.dropbox.com/scl/fi/wty6s173bpctj6r86qges/v2.mp4?rlkey=xg2wxrrkvhnlhtm30ihxun554&st=k5bzalmv&raw=1",
"https://www.dropbox.com/scl/fi/uv8ijgulfhxopzc2fw41o/v3.mp4?rlkey=29dsw8w59xcxemtxsw2qnx0d7&st=5u82efxe&raw=1",
"https://www.dropbox.com/scl/fi/d0xdwhmn6lhtu76gillp6/v4.mp4?rlkey=7cpt35gndxv195c5ebtedk08c&st=aydnfx5i&raw=1",
"https://www.dropbox.com/scl/fi/3k7atxcnsvdllxsm7x2xo/v5.mp4?rlkey=7kf2dacln59l5vamm835wenu4&st=vak43jw9&raw=1"

];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffle(videos);

const feed = document.getElementById("feed");

videos.forEach((videoSrc) => {
  const container = document.createElement("div");
  container.className = "video-container";

  const video = document.createElement("video");
  video.src = videoSrc;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;

  container.appendChild(video);
  feed.appendChild(container);
});

const urlParams = new URLSearchParams(window.location.search);
const group = urlParams.get("group");

const exposureTime = (group === "2") 
  ? 4 * 60 * 1000 
  : 2 * 60 * 1000;

setTimeout(() => {
  alert("Die Zeit ist vorbei. Bitte lege das Tablet weg.");
}, exposureTime);
