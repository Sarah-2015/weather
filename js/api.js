let searchInput= document.getElementById("search")
 let weather;
 let weatherArr;
 let locationInfo;
 let temp;
 let localTime;
 let foreCastIcon;
 

 if(searchInput){
    searchInput.addEventListener("keyup",function (){
        let cityName= searchInput.value
        getForecast(cityName)
        
    })
}
 async function getForecast(city='cairo'){

    let forecast= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=baaa49c31fd54ddaaa8152434221010&q=${city}&days=3`)
    weather = await forecast.json()
    locationInfo= weather.location.name
    temp = weather.current.temp_c
    localTime= weather.location.localtime
    foreCastIcon= weather.current.condition.icon
    weatherArr= weather.forecast.forecastday
    current();
    display();

    

   
    

}






function current(){


    let cont=`
    <div class="col-md-4 text-white fw-bolder text-center">
    <div class="card border-white bg-transparent " style="max-width: 18rem;">
    <div id="day" class="card-header text-center bg-transparent border-white">Today</div>
    <div class="card-body">
      <h5 class="card-title">${locationInfo}</h5>
      <h4 class="fw-bolder">${temp}<sup>o</sup>C</h4>
      

      <div >
      <img class="w-25" src=https:${foreCastIcon}>
      <p>${weather.current.condition.text}</p>
      </div>

    </div>
    <div>
    <p>Wind: ${weather.current.wind_kph} km/h</p>
    <p>Precip: ${weather.current.precip_mm} mm</p>
    <p>Humidity: ${weather.current.humidity}%</p>
    
    </div>
  </div>
  </div>
  `

document.getElementById("myrow").innerHTML=cont



}


function display(){

    let cont="";
    for(let i=1;i<weatherArr.length;i++)
     {
        cont+=`<div class="col-md-4  text-white">
        <div class="card border-white bg-transparent  " style="max-width: 18rem;">
        <div class="card-header text-center  bg-transparent border-white">${weatherArr[i].date}</div>
        <div class="card-body text-center ">
        
          <h4>${weatherArr[i].day.maxtemp_c}<sup>o</sup>C</h4>
          <h4>${weatherArr[i].day.mintemp_c}<sup>o</sup>C</h4>

          <div >
          <img class="w-25" src=https:${weatherArr[i].day.condition.icon}>
          <p>${weatherArr[i].day.condition.text}</p>
          </div>

        </div>
        <div class="  text-center  ">
        <p>Wind: ${weatherArr[i].day.maxwind_kph} km/h</p>
        <p>Precip: ${weatherArr[i].day.totalprecip_mm} km/h</p>
 
    <p>Humidity: ${weatherArr[i].day.avghumidity}%</p></div>
      </div>
      </div>
        
     
    
        `

        
    };
    document.getElementById("myrow").innerHTML+=cont;

}
getForecast();

