
let button = document.getElementById("submit")
button.addEventListener("click",storePersonId)
function storePersonId(){
    let personId = document.getElementById("person_id").value;
    chrome.storage.local.set({id:personId},()=>{
        console.log("done"),
        document.getElementById("person_id").value = '';
    })
}