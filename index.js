// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    run()
});

    function run() {
        document.getElementById('text');
        text.textContent = 'This is really cool!';
    }



   
//   Code your solution in index.js. First, set up a DOMContentLoaded event in order to detect when the HTML page has loaded, and the document is ready to be manipulated. 

// Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"

// Note: Using the innerText property to modify DOM element content will not work for this lab. Use textContent or innerHTML instead.