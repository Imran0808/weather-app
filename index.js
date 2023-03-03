const temp =document.querySelector(".weather1");
const city =document.querySelector(".weather2 p");
const fulldate =document.querySelector(".weather2 span");
const emojy =document.querySelector(".weather3 p img");
const condition =document.querySelector(".weather3 span");
const searchLocation=document.querySelector(".search");
const form =document.querySelector("form");

let target = "kolkata"
const fetchData= async(target)=>{
   try {
    const url =`http://api.weatherapi.com/v1/current.json?key=a6a9e05d74bd4209bbd53635230303&q=${target}`
    const respose=await fetch(url);
    const data=await respose.json();
    showData(data.current.temp_c,data.location.name,data.current.condition.icon,data.current.condition.text,data.location.localtime
 
     )
   } catch (error) {
    alert("Opps! Location Not found")
   }

}
function showData(exactTemp,exactCity,exactEmojy,exactCondition,datetime) {
temp.innerText=exactTemp;
city.innerText=exactCity;
emojy.src=exactEmojy;
condition.innerText=exactCondition;
const date=datetime.split(" ")[0];
const time=datetime.split(" ")[1];
const day=getDayName(new Date(date).getDay());
fulldate.innerText=`${time} - ${day}  ${date}`
}

fetchData(target)
form.addEventListener("submit",(e)=> {
    e.preventDefault();
  
    target =searchLocation.value;
    fetchData(target)
  
  })

function getDayName(num) {
    switch (num) {
      case 0:
        return "Sunday";
  
      case 1:
        return "Monday";
  
      case 2:
        return "Tuesday";
  
      case 3:
        return "Wednesday";
  
      case 4:
        return "Thursday";
  
      case 5:
        return "Friday";
  
      case 6:
        return "Saturdat";
  
      default:
        return "Don't Know";
    }
  }