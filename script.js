const videos = [
"https://www.dropbox.com/scl/fi/7pbujguge3rtvc5mx9x33/v1.mp4?rlkey=2n58up8xv33rhmvg3omnkxshv&st=5ryvred5&raw=1",
"https://www.dropbox.com/scl/fi/wty6s173bpctj6r86qges/v2.mp4?rlkey=xg2wxrrkvhnlhtm30ihxun554&st=k5bzalmv&raw=1",
"https://www.dropbox.com/scl/fi/uv8ijgulfhxopzc2fw41o/v3.mp4?rlkey=29dsw8w59xcxemtxsw2qnx0d7&st=5u82efxe&raw=1",
"https://www.dropbox.com/scl/fi/d0xdwhmn6lhtu76gillp6/v4.mp4?rlkey=7cpt35gndxv195c5ebtedk08c&st=aydnfx5i&raw=1",
"https://www.dropbox.com/scl/fi/3k7atxcnsvdllxsm7x2xo/v5.mp4?rlkey=7kf2dacln59l5vamm835wenu4&st=vak43jw9&raw=1",
"https://www.dropbox.com/scl/fi/7j2nn9qi8h3hg0bwbtymf/v6.mp4?rlkey=zx9fqvxssohawast01bt552oi&st=0jkrpvl0&raw=1",
"https://www.dropbox.com/scl/fi/11a8evlxosvxij4xk9u7x/v7.mp4?rlkey=35g0tbff2l518dubau40khqnj&st=sw5ippfa&raw=1",
"https://www.dropbox.com/scl/fi/mtbk01tq0ko7kh1jlhlx6/v8.mp4?rlkey=okj4ktuwj7db16wsbosqulkpo&st=808kaf0w&raw=1",
"https://www.dropbox.com/scl/fi/r2q1hhhgqxq7g1dxox2n5/v9.mp4?rlkey=6q5k0o8f7fi6sjcycz2r36gts&st=f8n6kl7u&raw=1",
"https://www.dropbox.com/scl/fi/z0x8tn499hypiheyb1595/v10.mp4?rlkey=f00o7tteaxan0sypkf0jjwdtq&st=9i3upsmx&raw=1",
"https://www.dropbox.com/scl/fi/ftz7ih8jua38z49oy5vxj/v11.mp4?rlkey=5rqzhpac1df2wg5w2cebzj9w7&st=5tfuhjuh&raw=1",
"https://www.dropbox.com/scl/fi/2qmctornvvp7ytcw2ahqb/v12.mp4?rlkey=nfrn9sk2a927z28cxwd96hnbf&st=o06tlw8f&raw=1",
"https://www.dropbox.com/scl/fi/95pkyyvu4yfbsu5rlkokv/v13.mp4?rlkey=gw9gvbctifj1o49vidwoqn9ea&st=gbi1zxld&raw=1",
"https://www.dropbox.com/scl/fi/lslqcccnu45db920vdvk5/v14.mp4?rlkey=7btwrbs6pxejx6niogbrsm5kd&st=p8ty47k0&raw=1",
"https://www.dropbox.com/scl/fi/prq5529qxqv0a30gxjh34/v15.mp4?rlkey=86te0k6yp1u62u1e6jr8iq4ad&st=azeljrt4&raw=1",
"https://www.dropbox.com/scl/fi/t3udry2prtlinbukr8qhp/v16.mp4?rlkey=04ins94gqnpkeyic1amd11esc&st=74xu8bs9&raw=1",
"https://www.dropbox.com/scl/fi/e82bf0o0i8xygkzx3mj1g/v17.mp4?rlkey=02rlcmkdqr8y3aele743coiqk&st=pn312ylh&raw=1",
"https://www.dropbox.com/scl/fi/0qb3r672eser8sjt61b1n/v18.mp4?rlkey=yp35ji6cfposn55erqzm15yvo&st=2cm2qx5z&raw=1",
"https://www.dropbox.com/scl/fi/pvm6sn5zx7g6oid9et08v/v19.mp4?rlkey=ydizh0chn6c2j5duou7yawlx5&st=3wk3cu6x&raw=1",
"https://www.dropbox.com/scl/fi/lo1a7a1k19galcye2t0r1/v20.mp4?rlkey=gq0t3uq8vwnbc7swlubv1xk96&st=oqjthmrj&raw=1",
"https://www.dropbox.com/scl/fi/sc2g9ssct0t4yvturh05h/v21.mp4?rlkey=vxks0pfzl6b2zhkx7s1u3ebtk&st=fh46j8pw&raw=1",
"https://www.dropbox.com/scl/fi/mnthgl14hklyvbepyu6u6/v22.mp4?rlkey=ycr1i6k6wiumi7wli3fdt1ah6&st=3g3sv1gs&raw=1",
"https://www.dropbox.com/scl/fi/ho6dnym267zvidqfpg1lv/v23.mp4?rlkey=130pozuqex98l9ug6qlkvlt2r&st=i2lljzun&raw=1",
"https://www.dropbox.com/scl/fi/t1pqa9pbh4q0pv6uri8qp/v24.mp4?rlkey=0hsgbyiphfyo58gkgzkm9qy2u&st=5y0ej0e6&raw=1",
"https://www.dropbox.com/scl/fi/s8eihopbg5fdbfocsoo1x/v25.mp4?rlkey=5yvfxuvf793yqe458851h73d8&st=mpbn0wyt&raw=1",
"https://www.dropbox.com/scl/fi/d39d1jyz9teuk7c5vj7vr/v26.mp4?rlkey=q4mofjai2rsj9n6zghgigqtej&st=7cmmm6kr&raw=1",
"https://www.dropbox.com/scl/fi/jxmv5v6vp6k0nrljlyzrd/v27.mp4?rlkey=nn7rkcrmy2xku4ua5ku9j6nnl&st=amxn3q0d&raw=1",
"https://www.dropbox.com/scl/fi/zlxmudipr5bczko1gsa5p/v28.mp4?rlkey=4ohbi5hmymbri59n0mvj3u5t6&st=fiwf9sqk&raw=1",
"https://www.dropbox.com/scl/fi/y2wlstaxdxicm6i7dbdyl/v29.mp4?rlkey=au46vmxolk2eez7vj07f7o3ir&st=asw39v8q&raw=1"


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
