const name = "John Doe";
const dept = "IT";
const salary = 4000;

// const a = "Name: " + name + "\n" + "Department: " + dept + "\n" + "Salary: " + salary;

// const a = `Name:${name}\nDepartment:${dept}\nSalary:${salary}`;

// const html = "<ul>" +
//              "<li>" + name + "</li>" + 
//              "<li>" + dept + "</li>" + 
//              "<li>" + salary + "</li>" +
//              "</ul>";

const personStatus = "New Personel";

function a() {
    return "Developer";
}

const html = `
        <ul>
            <li>${name}</li>
            <li>${dept}</li>
            <li>${salary}</li>
            <li>${personStatus}</li>
            <li>${a()}</li>

        </ul>
    `;

document.body.innerHTML = html;

// console.log(a);