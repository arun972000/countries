
let container = document.createElement("div");
container.setAttribute("class", "container");

let row = document.createElement("div");
row.setAttribute("class", "row");

container.append(row)



let p1 = fetch("https://restcountries.com/v3.1/all").then(data => data.json()).then(data1 => foo(data1))

function foo(data1) {
    for (let i = 0; i < data1.length; i++) {
        row.innerHTML+=`<div class="col-sm-4 text-center">
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <img class="card-img-top" src="${data1[i].flags.svg}" alt="Card image cap">
        <div class="card-header">${data1[i].name.common}</div>
        <div class="card-body">
          <p class="card-title">Capital: ${data1[i].capital}</p>
          <p class="card-title">Region: ${data1[i].region}</p>
          <p class="card-title">Population: ${data1[i].population}</p>
         
        </div>
      </div>
      </div>`
document.body.append(container)
    }
}