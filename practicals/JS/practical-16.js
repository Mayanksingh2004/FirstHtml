inputTitle = document.getElementById("inputList");
list = document.querySelector(".list");
plus = document.getElementById("plus");



plus.addEventListener("click",(e)=>{
    e.preventDefault();
    if(inputTitle.value != ""){
        var newDiv = document.createElement("div");
        newDiv.classList.add("todo") ;

        var newLi = document.createElement("li");

        var check = document.createElement("button");
        check.classList.add("check-btn");
        check.innerHTML = "<i class='fa fa-check'></i>";

        var deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerHTML = "<i class='fa fa-trash'></i>";

        newLi.innerHTML = inputTitle.value;

        newDiv.appendChild(newLi);
        newDiv.appendChild(check);
        newDiv.appendChild(deleteBtn);

        list.appendChild(newDiv);
        
        inputTitle.value = "";
    }
});

list.addEventListener("click",(e)=>{
    if(e.target.classList[0] == "check-btn"){
        e.target.parentNode.classList.toggle("completed");
    }
    if(e.target.classList[0] == "delete-btn"){
       list.removeChild(e.target.parentNode);
    }
})