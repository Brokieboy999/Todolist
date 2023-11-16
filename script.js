let btn = document.getElementById("btn")
let input = document.getElementById("task")
let notebox = document.getElementById("notes")
let task_name = document.getElementById("name")
let deletee = document.getElementById("clear")
// let x = document.getElementById("X")
let input_val = input.value
let name_val = task_name.value

btn.addEventListener("click", function (e) {
    e.preventDefault()
    let input_val = input.value
    let name_val = task_name.value
    if (input_val && name_val) {
        localStorage.setItem(name_val, input_val)
        displayTodo()
    } else {
        alert("Fill the required Informations before submitting...")
    }

})




function displayTodo() {
    let name_val = task_name.value
    notebox.innerHTML = "";

    for (i = 0; i < localStorage.length; i++) {

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Done";
        deleteButton.addEventListener("click", function () {
            deleteNote(keys);
        })

        // z.innerHTML = localStorage.getItem(name_val)
        let keys = localStorage.key(i)
        let values = localStorage.getItem(keys)
        let z = document.createElement("div")
        z.innerHTML = `<strong>${keys}:</strong> ${values}            `;
        // console.log(values)
        z.appendChild(deleteButton);
        notebox.appendChild(z)

    }


}
displayTodo()





function deleteNote(x) {
    localStorage.removeItem(x);
    displayTodo();
}


deletee.addEventListener("click", function (b) {
    b.preventDefault()

    localStorage.clear()
    displayTodo()
})
