const homedata = "https://northwind.vercel.app/api/suppliers";
let tbody = document.querySelector(".tbody");
let add = document.querySelector(".add");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let form = document.querySelector(".form");
const fetchData = async() => {
    let response = await fetch(`${homedata}`);
    let data = await response.json();
    data.forEach((element) => {
        let line = document.createElement("tr");
        line.className = "line";
        let companyid = document.createElement("td");
        companyid.className = "companyid";
        companyid.innerText = element.id;
        line.appendChild(companyid);
        let companyname = document.createElement("td");
        companyname.className = "companyname";
        companyname.innerText = element.companyName;
        line.appendChild(companyname);
        let contactname = document.createElement("td");
        contactname.className = "contactname";
        contactname.innerText = element.contactName;
        line.appendChild(contactname);
        let contacttitle = document.createElement("td");
        contacttitle.className = "contacttitle";
        contacttitle.innerText = element.contactTitle;
        line.appendChild(contacttitle);
        let delet = document.createElement("button");
        delet.innerText = "Delete";
        delet.className = "delet";
        line.appendChild(delet);
        delet.addEventListener("click", function() {
            fetch(`${homedata}/${element.id}`, {
                method: "DELETE",
            });
        });
        let edit = document.createElement("button");
        edit.innerText = "Edit";
        edit.className = "edit";
        line.appendChild(edit);
        tbody.appendChild(line);
    });
};
fetchData();
let obj = {
    companyName: "",
    contactName: "",
    contactTitle: "",
};
obj.companyName = input1.value;
obj.contactName = input2.value;
obj.contactTitle = input3.value;
console.log(obj);
form.addEventListener("submit", function(e) {
    e.preventDefault();
    fetch(`${homedata}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    });
});