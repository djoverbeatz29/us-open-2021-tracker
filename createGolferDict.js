# Relevant page: https://www.usopen.com/scoring.html
const url = "https://www.usopen.com/scoring.html";

const golfers = document.querySelectorAll("tr[class^='s-board-row js-board-row']");
const golferInfo = [...golfers].map(golfer=>{
    let [place, name, score] = [null, null, null];
    try {
        place = golfer.querySelectorAll("[class^='s-board-cell short-cell has-bg']")[1].innerText;
        name = golfer.querySelector("[class^='s-board-cell cell-player']").innerText;
        score = golfer.querySelector("[class^='s-board-cell cell-to-par']").innerText;
    }
    catch {
        console.log("Some information was missing");
    }
    finally {
        return {place, name, score};
    }
});
const golferDict = {};
golferInfo.forEach(golfer=>{
    let [score, place] = [golfer.score, golfer.place];
    if (score === "E") score = 0;
    else score = parseInt(score);
    golferDict[golfer.name]={score, place};
})
