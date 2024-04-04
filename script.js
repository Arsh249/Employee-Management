let formValue = document.querySelector("form");
let employees = [];
// let btn_box = document.querySelector("#user");
let message = document.querySelector("#message");
message.innerHTML = "";

formValue.addEventListener("submit", (event)=>{
    event.preventDefault();
    let nameValue = document.querySelector("#name").value;
    let profession = document.querySelector("#profession").value;
    let age = document.querySelector("#age").value;

    if(nameValue == "" || profession == "" || age == ""){
        message.innerHTML = "Error : Please make sure all the fields are filled before adding an employee";
        message.style.color = "red";
    }
    else{
        message.innerHTML = "Success : Employee Added!";
        message.style.color = "green";
        
        

        const newEmployee = {
            id: employees.length + 1,
            Name: nameValue,
            Profession:profession,
            Age:age
        };
        employees.push(newEmployee);
        displayEmployee();
    }
})

function displayEmployee(){
    let addedEmployee = document.querySelector("#addedEmployee");
    addedEmployee.innerHTML = "";
    employees.forEach((employee) =>{
        let employeeList = document.createElement('div');
        employeeList.classList.add('employee-list')
        employeeList.innerHTML = `
            <span class="employee-data">
              <p>${employee.id}</p>
              <p>Name : ${employee.Name}</p>
              <p>Profession : ${employee.Profession}</p>
              <p>Age : ${employee.Age}</p>
            </span>
            <span class="employee-delete"><button id="delete" onclick="handleDelete(${employee.id})" >Delete User</button></span>
    `
        addedEmployee.append(employeeList);
    })
}

const handleDelete = (id) => {
    employees = employees.filter((item) => item.id !=id);
    displayEmployee();
}