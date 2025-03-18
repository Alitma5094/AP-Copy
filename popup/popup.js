const check = document.getElementById("check");
const label = document.getElementById("label");



(async () => {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const response = await chrome.tabs.sendMessage(tab.id, {type: "getStatus"});
    
    updateUI(response.statusResponse)
  })();

check.addEventListener("change", async function(event)  { 
    updateUI(check.checked);

    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    chrome.tabs.sendMessage(tab.id, {enabled: check.checked});
    
}, true);

function updateUI(enabled) {
    if (enabled) {
        label.innerText = "Copying Enabled";
        label.style.color = "green";
        check.checked = true
    } else {
        label.innerText = "Copying Diabled";
        label.style.color = "red";
        check.checked = false
    }
}