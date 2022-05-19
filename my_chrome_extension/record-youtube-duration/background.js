let flag = "start";

function startStop() {
  const result = flag + ": " + document.querySelector(".ytp-time-current").innerText
  alert(result);
  flag = flag === "start" ? "stop" : "start";
  // console.log(document.title)
  // console.table(
  //   Array.from(document.querySelectorAll(".ytp-time-current")).map(V=>V.innerText)
  // )
  console.log(result);
}

chrome.commands.onCommand.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: startStop
  });
})

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: startStop
    });
});

// chrome.browserAction.onClicked.addListener((tab) => {
//   if(!tab.url.includes("chrome://")) {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: reddenPage
//     });
//   }
// });