// excute this code as soon as chrome is started
chrome.runtime.onStartup.addListener(function() {
    //ge the id that was stored last time the extension was used
    chrome.storage.local.get(['id'], (result) => {
        //check if there was an error
        if (chrome.runtime.lastError) {
            console.error("Error retrieving ID from storage: ", chrome.runtime.lastError);
            return;
        }
        const personId = result.id;
        if (personId) {
            //open the dm webpage with that person's id 
            chrome.tabs.create({ url: `https://www.instagram.com/direct/t/${personId}/` });
        } else {
            console.log("No ID found in storage.");
        }
    });
});
