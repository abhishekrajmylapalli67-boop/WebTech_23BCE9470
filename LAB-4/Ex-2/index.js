const products = [
    {name:"Laptop", price:60000, category:"Electronics"},
    {name:"Shoes", price:2000, category:"Fashion"},
    {name:"Phone", price:30000, category:"Electronics"},
    {name:"Watch", price:1500, category:"Accessories"}
];

const searchInput = document.getElementById("search");
const resultsDiv = document.getElementById("results");

let timer;

searchInput.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        const query = searchInput.value.toLowerCase();
        resultsDiv.innerHTML = "";

        const filtered = products.filter(p => 
            p.name.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            resultsDiv.innerHTML = "<p>No results found</p>";
            return;
        }

        filtered.forEach(p => {
            const div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `<h3>${p.name}</h3>
                             <p>₹${p.price}</p>
                             <p>${p.category}</p>`;
            resultsDiv.appendChild(div);
        });
    }, 500);
});