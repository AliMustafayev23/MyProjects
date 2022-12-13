let container = document.querySelector(".cointainer");
let input = document.querySelector("#mySearch");
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// function fetchData() {
//   fetch(`${catsAPI}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// fetchData();

const fetchCats = async() => {
    let response = await fetch(`${catsAPI}`);
    let data = await response.json();
    data.forEach((element) => {
        let card = document.createElement("div");
        card.className = "card";
        let image = document.createElement("img");
        image.className = "image";
        image.src = element.image.url;
        card.appendChild(image);
        let name = document.createElement("h1");
        name.className = "name";
        name.innerText = element.name;
        card.appendChild(name);
        let description = document.createElement("p");
        description.className = "description";
        description.innerText = element.description;
        card.appendChild(description);
        let wiki = document.createElement("a");
        wiki.className = "wiki";
        wiki.href = element.wikipedia_url;
        wiki.target = "_blank";
        wiki.innerText = "Go somewhere";
        card.appendChild(wiki);
        container.appendChild(card);
    });
};

// function myFunction() {
//     input = input.toLowerCase();
//     for (i = 0; i < card.length; i++) {
//         if (card[i].name.innerText.toLowerCase.includes(input)) {
//             card[i].style.display = "none";
//         } else {
//             card[i].style.display = "block";
//         }
//     }
// }
// myFunction();
fetchCats();