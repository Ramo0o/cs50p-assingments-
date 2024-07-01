//giving time for the page to load before excuting the code
setTimeout(()=>{
// finding the like button 
let likebutton= document.getElementsByClassName("x1i10hfl x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x6s0dn4 xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x1ypdohk x78zum5 xl56j7k x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xcdnw81")[5];

//check if likebutton was found
if (likebutton) {
    console.log(likebutton);
    //press the likebutton by pressing the space bar
    keyboardClicks(likebutton," ")
    //console log to make sure it was done
    console.log("done")
} else {
    console.log("messageBox not found");
}

//a function to stimulate key strokes
function keyboardClicks(element,sentence){
    for (i of sentence){
        element.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: i,
                code: `Key${i.toUpperCase()}`,
                bubbles: true,
                cancelable: true
            })
        );
        element.dispatchEvent(
            new KeyboardEvent('keypress', {
                key: i,
                code: `Key${i.toUpperCase()}`,
                bubbles: true,
                cancelable: true
            })
        );
        element.dispatchEvent(
            new KeyboardEvent('keyup', {
                key: i,
                code: `Key${i.toUpperCase()}`,
                bubbles: true,
                cancelable: true
            })
        );
        console.log(`we pressed ${i}`);
    }
}},4000)