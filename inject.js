

/*var style = document.createElement(link);
style.setAttribute("rel", "stylesheet");
style.setAttribute("media", "screen");
style.setAttribute("href", chrome.runtime.getURL("inject.css");
document.body.prepend(style); //*/
(async () => {
  // Wait until in call
  while (document.querySelector(".d7iDfe") !== null) {
    await new Promise((r) => setTimeout(r, 500));
  }

  var waveApp = document.createElement("div");
  waveApp.innerHTML = `
<style>#waveAppContainer {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff !important;
    border-bottom-right-radius: 8px;
    z-index: 1;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .waveButton{
    background-color: #fff;
    background: #fff;
    /*height: 50px;
    width: 50px;*/
    text-align: center;
    vertical-align: middle;
    border-radius: 8px;
    display:inline-block;
    font-size: 30px;
    padding-top: 5px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-left: 10px;
  }
  .waveButton:hover{
    background: #f5faf9;
  }
  .waveButton:active{
    background: #d9ebe9;
  }

  </style>
<div id="waveAppContainer">
  <span class="waveButton">👋 </span>
  <span class="waveButton" id="thumbsUp" >👍 </span>
  <span class="waveButton" >👎</span>
 </div>
    `;

  document.body.appendChild(waveApp);

})();