var script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("src", chrome.runtime.getURL("wave.js"));
document.getElementsByTagName("html")[0].appendChild(script);
