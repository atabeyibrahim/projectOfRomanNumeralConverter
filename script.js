const input= document.getElementById("number");
const convertBtn= document.getElementById("convert-btn");
const result =document.getElementById("output");


const checkUserInput = () => {
const inputInt = parseInt(input.value);
  if (!inputInt || isNaN(inputInt)) {
   result.innerText=("Please enter a valid number");
   result.classList.toggle("hidden");
   result.classList.add("error");
    return;
  }
  if(inputInt<=0){
    result.innerText=("Please enter a number greater than or equal to 1");
    result.classList.toggle("hidden");
    result.classList.add("error");
  }
  if(inputInt>0 && inputInt<=3999){
   const roman =convert(inputInt);
   result.innerHTML = roman;
   result.classList.toggle("hidden");
   result.classList.remove("error");
  };
  if(inputInt>3999){
    result.innerText=("Please enter a number less than or equal to 3999");
    result.classList.toggle("hidden");
    result.classList.add("error");
  }
  
}

convertBtn.addEventListener("click",checkUserInput);
input.addEventListener("keydown",(e)=>{
  if(e.key==="Enter"){
    checkUserInput();
  }
})
const convert= (num) => {
  const romanNumerals= [
        {value:1000 ,numeral:"M"},
        {value:900 ,numeral:"CM"},
        {value:500 ,numeral:"D"},
        {value:400 ,numeral:"CD"},
        {value:100 ,numeral:"C"},
        {value:90 ,numeral:"XC"},
        {value:50 ,numeral:"L"},
        {value:40 ,numeral:"XL"},
        {value:10 ,numeral:"X"},
        {value:9 ,numeral:"IX"},
        {value:5 ,numeral:"V"},
        {value:4 ,numeral:"IV"},
        {value:1 ,numeral:"I"} ];
      let answer ="";
      for(let i=0; i<romanNumerals.length;i++){
        while(num>=romanNumerals[i].value){
          answer += romanNumerals[i].numeral;
          num -= romanNumerals[i].value;
        };
      };
      return answer;
    };
  