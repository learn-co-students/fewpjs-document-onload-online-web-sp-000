// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    updateContent();
});

function updateContent() {
    document.getElementById('text').innerHTML = "This is really cool!"
}

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);