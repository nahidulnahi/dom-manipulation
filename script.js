/* Task 1 */
var heading = document.getElementById("heading")
console.log(heading.textContent)


/* Task 2 using plain JavaScript */
function addText(event){
    var p = document.createElement('p')
    p.innerText = 'Hello World'
    var div = document.getElementById("task2a")
    div.appendChild(p)
}
function changeColor(event){
    document.body.style.backgroundColor = event.target.innerText.toLowerCase()
}
function goLink(event){
    window.location.href = "https://www.google.com/"
}

/* Task 4 using jQuery */
//4a
$('#addText').click(function(event)
{
    let para = $('<p>').text("Hello World")
    $('#task4a').append(para)
})

//4b

