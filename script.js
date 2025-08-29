
// Filtering videos
function filterVideos(category, e) {
  let videos = document.querySelectorAll(".work-card");
  let buttons = document.querySelectorAll(".filter-buttons button");

  // active button highlight
  buttons.forEach(btn => btn.classList.remove("active"));
  e.target.classList.add("active");

  videos.forEach(video => {
    if (category === "all") {
      video.classList.remove("hidden");
    } else {
      if (video.classList.contains(category)) {
        video.classList.remove("hidden");
      } else {
        video.classList.add("hidden");
      }
    }
  });
}


// Pause all videos when clicking outside