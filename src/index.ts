const ResultCount: HTMLElement = document.querySelector("#result-count")
const StartBtn: HTMLButtonElement = document.querySelector("#start-btn")
const PauseBtn: HTMLButtonElement = document.querySelector("#pause-btn")
const ResetBtn: HTMLButtonElement = document.querySelector("#reset-btn")

const PomodoLink = document.querySelector("#pomodoro-link") as HTMLButtonElement
const ShortBreakLink = document.querySelector("#short__break-link") as HTMLButtonElement
const LongBreakLink = document.querySelector("#long__break-link") as HTMLButtonElement
const ResultCountBox = document.querySelector("#result__count-box") as HTMLDivElement

const BtnActionBox = document.querySelector(".btn-action") as HTMLDivElement

let intervalId: number
StartBtn.addEventListener("click", () => {
        let minut: number = +ResultCount.innerText.split(":")[0]
        let second: number = +ResultCount.innerText.split(":")[1]
    
      intervalId =  setInterval(() => {
            if(second === 0 && minut === 0){
                clearInterval(intervalId)
                return;
            }
            if(second === 0){
                minut -=1 
                second = 60
            }
            second -=1
            ResultCount.innerText = `${minut} : ${second}`
       }, 1000)
})

ResetBtn.addEventListener("click", () => {
    clearInterval(intervalId)
    ResultCount.innerText = "25 : 00"
})

PauseBtn.addEventListener("click", () => {
    clearInterval(intervalId)
})



