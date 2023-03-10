const btn = document.querySelector(".btn");
const h1 = document.querySelector("h1");
const output = document.querySelector(".output");
const inputVal = document.querySelector(".val");
// const KEY = "feac2c8a45b400c3ea38eb54d461171a";
// const url1 = "list.json";

// const url1 =
//   "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=feac2c8a45b400c3ea38eb54d461171a";
const url1 = "https://samples.openweathermap.org/";
const url2 = "https://cors-anywhere.herokuapp.com/";
btn.textContent = "Click Me";
btn.addEventListener("click", (e) => {
  //   console.log("ready");
  getValues(url2 + url1);
});

function getValues(url) {
  fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      maker(data.products.forecast_5days);
    });
}

function maker(data) {
  console.log(data.docs);
  data.samples.forEach((el) => {
    getMore(url2 + el);
  });
}

function getMore(url) {
  fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      adder(data);
    });
}

function adder(data) {
  console.log(data);
  const city = data.city;
  const div = document.createElement("div");
  output.append(div);
  div.innerHTML = `${city.name} ${city.country} <br> ${city.coord.lat} ${city.coord.lon}`;
}

/*
    const btn = document.querySelector('.btn');
    const h1 = document.querySelector('h1');
    const output = document.querySelector('.output');
    const inputVal = document.querySelector('.val');
    const url1 = 'https://samples.openweathermap.org/';
    const url2 = 'https://cors-anywhere.herokuapp.com/';
    btn.textContent = 'Click Me';
    btn.addEventListener('click', (e) => {
        //console.log('ready');
        getValues(url2 + url1);
    })
     
    function getValues(url){
        fetch(url)
        .then(rep => rep.json())
        .then(data => {
            maker(data.products.forecast_5days);
        })
    }
     
    function maker(data){
        //console.log(data.docs);
        data.samples.forEach((el)=>{
            getMore(url2 + el);
        })
    }
     
    function getMore(url){
        fetch(url)
        .then(rep => rep.json())
        .then(data => {
            adder(data);
        })
    }
     
    function adder(data){
        console.log(data.list);
        const city = data.city;
        const div = document.createElement('div');
        output.append(div);
        div.innerHTML = `${city.name} ${city.country} <br> 
        ${city.coord.lat} ${city.coord.lon}`;
    }
     
     
     
     
     

    <!DOCTYPE html>
    <html>
     
    <head>
        <title>JavaScript JSON</title>
        <style>
        </style>
    </head>
     
    <body>
        <h1>JSON</h1>
        <input type="text" class="val">
        <button class="btn">Click</button>
        <div class="output"></div>
        <script src="app6.js"></script>
    </body>
     
    </html>
    */
