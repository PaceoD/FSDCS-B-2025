// console.log("First");
// const div = document.getElementsByTagName('div');
// console.log(div);
// div[0].innerText = "ABES Engineering College";
// div[0].style.color='yellow';
// div[0].style.fontSize = 'larger';
// div[0].style.backgroundColor='black';
// console.log(div);
const div = document.getElementsByClassName("container");
console.dir(div);
div[0].innerHTML = "<h2 style=color:lightpink>Hii I am using DOM</h2>";
console.dir(div);

// const h2 = document.createElement("h2");
// h2.innerText = "CS B Students";
// h2.style.backgroundColor = 'cadetblue';
// console.log(h2);
// div[0].appendChild(h2);

// const img = document.createElement('img');
// img.src = "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
// img.setAttribute('height',200);
// img.setAttribute('width',200);
// console.log(img);

// div[0].appendChild(img);

const button = document.getElementById("btn");
console.log(button);
const loading = document.getElementById("disp");
function displayData() {
  loading.innerText = `<h2>Loading...</h2>`;
  setTimeout(() => {
    const h2 = document.createElement("h2");
    h2.innerText = "CS B Students";
    h2.style.backgroundColor = "cadetblue";
    console.log(h2);
    div[0].appendChild(h2);
    const img = document.createElement("img");
  img.src =
    "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg";
  img.setAttribute("height", 200);
  img.setAttribute("width", 200);
  console.log(img);

  div[0].appendChild(img);
  loading.innerText = "";
  }, 2000);
  
  // console.log("hii , this is jarvis")
  }
button.addEventListener("click", displayData);