// Your code goes here
// addEventListener takes a String with the name of the event and a callback function
// First, set up a DOMContentLoaded event in order to detect when the HTML page has loaded, and the document is ready to be manipulated.
//  Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"

document.addEventListener("DOMContentLoaded", function(){
    updateDOM()
});

function updateDOM() {
    document.getElementById("text").textContent = "This is really cool!";
}

// Don't get confused by the differences between Node.textContent and HTMLElement.innerText
// textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows “human-readable” elements.
