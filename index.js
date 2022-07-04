let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

// localStorage.setItem("myLeads", "www.google.com");
// console.log(localStorage.getItem("myLeads"));
// localStorage.clear();
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    renderLeads();
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";

    localStorage.setItem( "myLeads", JSON.stringify(myLeads) );

    renderLeads();
})

function renderLeads() {
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li>
                        <a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a>
                    </li>
                    `;
    }

    ulEl.innerHTML = listItems;
}

// function renderLeads() {

//     for (let i = 0; i < myLeads.length; i++) {
//         const li = document.createElement("li");
//         ulEl.append(li);
        
//         const a = document.createElement("a");
//         a.setAttribute('href', myLeads[i]);
//         a.setAttribute('target', '_blank');
//         a.textContent = myLeads[i];
//         li.append(a);        
//     }
// }


