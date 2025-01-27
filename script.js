// The following code is for the "I'm feeling lucky" feature in google
// The idea for adding a js file was given by cs50.ai

var form = document.getElementById("search");
var lucky = document.getElementById("lucky");

lucky.addEventListener('click', function(event) {
    event.preventDefault();
    form.action = "https://google.com/search?btnl=1";
    form.submit();
});