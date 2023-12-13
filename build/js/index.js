const ResultCount = document.querySelector("#result-count");
const StartBtn = document.querySelector("#start-btn");
const PauseBtn = document.querySelector("#pause-btn");
const ResetBtn = document.querySelector("#reset-btn");
const PomodoLink = document.querySelector("#pomodoro-link");
const ShortBreakLink = document.querySelector("#short__break-link");
const LongBreakLink = document.querySelector("#long__break-link");
const ResultCountBox = document.querySelector("#result__count-box");
const BtnActionBox = document.querySelector(".btn-action");
let intervalId;
StartBtn.addEventListener("click", () => {
    let minut = +ResultCount.innerText.split(":")[0];
    let second = +ResultCount.innerText.split(":")[1];
    intervalId = setInterval(() => {
        if (second === 0 && minut === 0) {
            clearInterval(intervalId);
            return;
        }
        if (second === 0) {
            minut -= 1;
            second = 60;
        }
        second -= 1;
        ResultCount.innerText = `${minut} : ${second}`;
    }, 1000);
});
ResetBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    ResultCount.innerText = "25 : 00";
});
PauseBtn.addEventListener("click", () => {
    clearInterval(intervalId);
});
