function loadStory(){
    var storyName = document.getElementById("name_input").value
    var storyHTML = localStorage.getItem(storyName)
    document.getElementById("story_editor").value = storyHTML
}
function saveStory(){
    var storyName = document.getElementById("name_input").value
    var storyHTML = document.getElementById("story_editor").value
    localStorage.setItem(storyName,storyHTML)
}
function display(){
    var input_value = document.getElementById("input").value
    localStorage.setItem(input_value)
    document.getElementById("display").innerHTML = input_value;
}