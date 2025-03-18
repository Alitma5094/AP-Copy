
let enabled = false
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.type == "getStatus") {
        sendResponse({statusResponse: enabled})
        
      } else {
        if (request.enabled) {
          window.addEventListener('copy', enableCopy, true);
        enabled = true;
        } else {
          window.removeEventListener('copy', enableCopy, true)
        }
      }
      
    }
  );


  function enableCopy(event) {
    event.stopImmediatePropagation();
            console.log("copied")
  }
