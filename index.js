const addButton = document.getElementById('add_button');
const addInput = document.getElementById('inputBox');
const rmv = document.querySelector(".delete");
const complete = document.querySelector(".check")



addButton.addEventListener("click", function() {
    if (addInput.value.length === 0) {
        alert ("Input task!");
    } else {
    const ul = document.getElementById('myUL');
    const li = document.createElement('li');
    li.innerHTML =addInput.value;
    addInput.value = "";
    ul.appendChild(li);


    const mySpan = document.createElement('span');
    mySpan.classList.add("delete");
    mySpan.innerHTML = '&times;';
    li.appendChild(mySpan);

    const myCheckSpan = document.createElement('span');
    myCheckSpan.classList.add("check");
    myCheckSpan.innerHTML = '&#10003';
    li.appendChild(myCheckSpan);
    };
   

});
document.getElementById('myUL').addEventListener("click", function(e) {
    if(e.target && e.target.className === 'delete') {
        e.target.parentElement.remove();
    }
});

document.getElementById('myUL').addEventListener("click", function(e) {
    if(e.target && e.target.className === 'check') {
        e.target.parentElement.style.textDecoration = "line-through";
    }
});

















