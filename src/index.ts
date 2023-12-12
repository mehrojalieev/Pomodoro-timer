// const ResultCount: HTMLElement = document.querySelector("#result-count")
// const StartBtn: HTMLButtonElement = document.querySelector("#start-btn")
// const PauseBtn: HTMLButtonElement = document.querySelector("#pause-btn")
// const ResetBtn: HTMLButtonElement = document.querySelector("#reset-btn")


// // function startTime(minute:number, second:number){

// // }


// StartBtn.addEventListener("click", () => {
//         let minut: number = +ResultCount.innerText.split(":")[0]
//         let second: number = +ResultCount.innerText.split(":")[1]
    
//         while(minut > 0){
//             if(second === 0){
//                 minut -=1
//                 second = 60
//             }
//             while(second > 0){
//               const settime =  setTimeout(() => {
//                     second -=1
//                     console.log(`${minut}:${second}`);
                    
//                 }, 1000 )
//                 clearTimeout(settime)
//             }
//         }

       
// })