
const hrHand = document.querySelector(".hour"),
  minHand = document.querySelector(".minute"),
  secHand = document.querySelector(".seconds"),
  modeToggleBtn = document.querySelector(".modeToggle"),
  body = document.querySelector("body");

if (localStorage.getItem("clockTheme") === "dark") {
  body.classList.add("dark");
  modeToggleBtn.textContent = "Light Mode";
}

let changeTheme = () => {
  body.classList.toggle("dark");

  let isDarkMode = body.classList.contains("dark");

  if (isDarkMode) {
    localStorage.setItem("clockTheme", "dark");
  } else {
    localStorage.setItem("clockTheme", "light");
  }

  modeToggleBtn.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
};
modeToggleBtn.addEventListener("click", changeTheme);

let changeTime = () => {
  let date = new Date();
  let secToDeg = (date.getSeconds() / 60) * 360;
  let minToDeg = (date.getMinutes() / 60) * 360;
  let hrToDeg = (date.getHours() / 12) * 360;

  secHand.style.transform = `rotate(${secToDeg}deg)`;
  minHand.style.transform = `rotate(${minToDeg}deg)`;
  hrHand.style.transform = `rotate(${hrToDeg}deg)`;

  // console.log(secHand.style.transform)
  // console.log(minHand.style.transfrom)
  // console.log(hrHand.style.transform)
};

changeTime();

setInterval(changeTime, 1000);

