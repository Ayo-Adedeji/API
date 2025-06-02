// const btn = document.querySelector("#addBtn");



// btn.addEventListener("click", function() {
// const input = document.querySelector("#taskInput");
// const taskText = input.value.trim();


// if (taskText === "") {
//     alert("please enter valid input");
//     return;
// }


// const li = document.createElement("li")
// li.textContent = taskText;

// const completeBtn = document.createElement("button");
// completeBtn.textContent =  "✅"
// completeBtn.onclick = () => li.classList.toggle("completed");

// const deleteBtn = document.createElement("button");
// deleteBtn. textContent = "delete"
// deleteBtn.onclick = () => li.remove();

// li.appendChild(completeBtn);
// li.appendChild(deleteBtn);

// const parent = document.querySelector("#taskList");
// parent.insertBefore(li, parent.firstChild);

// input.value = "";

// })



// fetch("https://dummyjson.com/products")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log("error", error));

const getApi = async () => {
    try  { 
const response = await fetch("https://dummyjson.com/products");
const data = await response.json();
displayProducts(data.products);
    } catch (error) {
        console.error("error", error) 

    }
};
getApi();

function displayProducts(products) {
    const list = document.querySelector("#productList")
    list.innerHTML = "";

    products.forEach((product) => {
        const li = document.createElement("li");
        li.className = "product"
        li.innerHTML = `
        <span> ${product.availabilityStatus} </span>
        <img src="${product.thumbnail}" alt="${product.title}"  />
        <h3>${product.title}</h3>
        <p class="shipping" >${product.shippingInformation}</p>
        <p>Price: $${product.price}</p>
        <p>${product.description.slice(0, 60)}...</p> 
        <p class="brand" >Brand: ${product.brand}</p>
`

        list.appendChild(li);
    });

    
}

window.addEventListener("DOMContentLoaded", getApi);























