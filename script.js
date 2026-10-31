function updateJerusalemClock() {
  const now = new Date();
  const time = new Intl.DateTimeFormat("he-IL", {
    timeZone: "Asia/Jerusalem",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(now);
  document.getElementById("time").textContent = time;
}
updateJerusalemClock();
setInterval(updateJerusalemClock, 1000);