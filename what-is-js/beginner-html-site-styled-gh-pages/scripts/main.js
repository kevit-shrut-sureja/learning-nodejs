// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello User!";

// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   });
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if( mySrc === "images/firefox-icon.png"){
        myImage.setAttribute("src", "images/brave-icon.png");
    }
    else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
}

const myBtn = document.querySelector("button");
const myHeader = document.querySelector("h1");

const setUserName = () => {
    const myName = prompt("Enter the user name:");
    localStorage.setItem("name", myName);
    myHeader.textContent = "Hello " + myName;
}

if(!localStorage.getItem("name")){
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeader.textContent = 'Hello '+ storedName;
}

myBtn.onclick = () => {
    setUserName();
  };
  