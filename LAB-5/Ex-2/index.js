let xmlDoc;
const list = document.getElementById("bookList");

fetch("books.xml")
.then(res => res.text())
.then(data => {
    xmlDoc = new DOMParser().parseFromString(data,"application/xml");
    display();
});

function display() {
    list.innerHTML = "";
    const books = xmlDoc.getElementsByTagName("book");
    for (let b of books) {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <strong>${b.getElementsByTagName("title")[0].textContent}</strong>
            <p>${b.getElementsByTagName("author")[0].textContent}</p>
            <p>${b.getElementsByTagName("status")[0].textContent}</p>
            <button onclick="deleteBook(this)">Remove</button>
        `;
        list.appendChild(div);
    }
}

document.getElementById("bookForm").addEventListener("submit", e=>{
    e.preventDefault();
    const book = xmlDoc.createElement("book");

    ["bookId","title","author","status"].forEach((id,i)=>{
        const tag = ["id","title","author","status"][i];
        const node = xmlDoc.createElement(tag);
        node.textContent = document.getElementById(id).value;
        book.appendChild(node);
    });

    xmlDoc.documentElement.appendChild(book);
    display();
    e.target.reset();
});

function deleteBook(btn){
    const index = [...list.children].indexOf(btn.parentElement);
    xmlDoc.documentElement.removeChild(xmlDoc.getElementsByTagName("book")[index]);
    display();
}