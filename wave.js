function sendEmoji(emoji) {
  if (((document.querySelector("[aria-label='Send a message to everyone']")) == null)) {//Check if the sidebar is closed
    document.querySelector("[aria-label='Chat with everyone']").click(); //Open chat sidebar
    document.querySelector("[aria-label='Send a message to everyone']").value = emoji;
    document.querySelector("[data-tooltip='Send message']").removeAttribute("aria-disabled");
    document.querySelector("[data-tooltip='Send message']").click();
    // document.querySelector("[aria-label='Close']").click(); //Close chat sidebar
  }
  else {
    document.querySelector("[aria-label='Send a message to everyone']").value = emoji;
    document.querySelector("[data-tooltip='Send message']").removeAttribute("aria-disabled");
    document.querySelector("[data-tooltip='Send message']").click();
  }

}
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
  <span class="waveButton" id="wave">👋 </span>
  <span class="waveButton" id="thumbsUp" >👍 </span>
  <span class="waveButton" id="thumbsDown">👎</span>
  <span class="waveButton" id="raiseHand">✋ Raise Hand</span>
 </div>
    `;

  document.body.appendChild(waveApp);
  const waveButton = document.querySelector('#wave')
  waveButton.addEventListener('click', function (e) {
    sendEmoji("👋");
  })
  const thumbsUpButton = document.querySelector('#thumbsUp')
  thumbsUpButton.addEventListener('click', function (e) {
    sendEmoji("👍");
  })
  const thumbsDownButton = document.querySelector('#thumbsDown')
  thumbsDownButton.addEventListener('click', function (e) {
    sendEmoji("👎");
  })
  const raiseHandButton = document.querySelector('#raiseHand')
  raiseHandButton.addEventListener('click', function (e) {
    document.querySelector("[aria-label='Chat with everyone']").click(); //Open chat sidebar
    //The following code that gets the users name will only work if the sidebar is open.
    setTimeout(() => { sendEmoji("✋ " + document.querySelector(".cS7aqe.NkoVdd").innerHTML.match(/.*(?=\()/) + "raised their hand."); }, 500);
  })

})();