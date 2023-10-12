let inputField = document.getElementById("inputField");
let addBtn = document.getElementById("addBtn");
let toDoList = document.getElementById("toDoList");
let noTask = document.getElementById("noTask");

function isTask(){

    if (toDoList.childElementCount === 0) {
        // If div elements are found, hide the "No tasks" paragraph
        noTask.style.display = "block";
    } else {
        // If no div elements are found, show the "No tasks" paragraph
        noTask.style.display = "none"; // You can also use "inline" or "inline-block" depending on your layout
    }

}



// create todo element when add button is clicked
addBtn.addEventListener("click", function addBtn() {

 

    if (inputField.value === "") {
        alert("Type something first!");
    } else {


        var para = document.createElement("div");
        para.innerText = inputField.value;
        para.setAttribute("class", "toDoItem");
        toDoList.appendChild(para);
        inputField.value = "";

        var delBtn = document.createElement("span");
        delBtn.setAttribute("class", "delBtn");
        delBtn.innerHTML = "<i class='fa-regular fa-trash-can'></i>";
        para.appendChild(delBtn);

        isTask()
    }


    // Remove a to do when delete button is clicked
    delBtn.addEventListener("click", function removeToDoItem() {

        toDoList.removeChild(para);
        isTask()

    });

    // Add strike through when todo element is clicked
    para.addEventListener("click", function strikThrough() {

        para.classList.toggle("complete")
    });


});

isTask()