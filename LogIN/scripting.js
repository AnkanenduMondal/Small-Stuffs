document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    document.querySelectorAll(".input-field input").forEach(input=>input.value="");
});
