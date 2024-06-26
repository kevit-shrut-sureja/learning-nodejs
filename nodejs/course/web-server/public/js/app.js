const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const msg1 = document.querySelector('#message-1');
const msg2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(search.value);

    msg1.textContent = "Loading...";
    msg2.textContent = "";

    fetch('http://localhost:3000/weather?city=' + search.value).then(response => {
        response.json().then(data => {
            console.log(data);
            if(data.error){
                console.log(data.error);
                msg1.textContent = data.error;
            }
            else {
                console.log(data.location);
                console.log(data.forecast);
                msg1.textContent = data.location
                msg2.textContent = data.forecast
            }
        })
    })
})