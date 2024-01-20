
// data from the user as inputs
let dayInp = document.getElementById("day");
let monthInp = document.getElementById("month");
let yearInp = document.getElementById("year");


// date from the user as values



// enter


// tody date


// the difference
let x = true;


function calculateAge(){
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    let date = new Date()
    let newMonth = date.getMonth() +1;
    let newDay = date.getDate();
    let newYear = date.getFullYear();

    if(day > 31){
        document.getElementById("day").style.border = "1px solid red";
        document.getElementById("erorr-day").classList.remove("hide");
        document.getElementById("day-p").style.color = "red";
        document.getElementById("month-cal").innerHTML = "<span>- - </span>"
        document.getElementById("years-cal").innerHTML = "<span>- - </span>"
        document.getElementById("day-cal").innerHTML = "<span>- - </span>"
        x = false;
    } else if(month > 12){
        document.getElementById("month").style.border = "1px solid red";
        document.getElementById("erorr-month").classList.remove("hide");
        document.getElementById("month-p").style.color = "red";
        document.getElementById("month-cal").innerHTML = "<span>- - </span>"
        document.getElementById("years-cal").innerHTML = "<span>- - </span>"
        document.getElementById("day-cal").innerHTML = "<span>- - </span>"
        x = false;
    }else if(year > 2024){
        document.getElementById("year").style.border = "1px solid #716f6f59";
        document.getElementById("erorr-year").classList.add("hide");
        document.getElementById("year-p").style.color = "#716f6f";
        document.getElementById("month-cal").innerHTML = "<span>- - </span>"
        document.getElementById("years-cal").innerHTML = "<span>- - </span>"
        document.getElementById("day-cal").innerHTML = "<span>- - </span>"
        x = false;
    }else{
        document.getElementById("year").style.border = "1px solid #716f6f59";
        document.getElementById("day").style.border = "1px solid #716f6f59";
        document.getElementById("month").style.border = "1px solid #716f6f59";
        document.getElementById("erorr-year").classList.add("hide");
        document.getElementById("erorr-month").classList.add("hide");
        document.getElementById("erorr-day").classList.add("hide");
        document.getElementById("year-p").style.color = "#716f6f";
        document.getElementById("month-p").style.color = "#716f6f";
        document.getElementById("day-p").style.color = "#716f6f";
        x = true;
    }
    // } else if(day !== "" || month !== "" || year !== ""){
    //     document.getElementById("month-cal").innerHTML = "<span>- - </span>"
    //     document.getElementById("years-cal").innerHTML = "<span>- - </span>"
    //     document.getElementById("day-cal").innerHTML = "<span>- - </span>"
    //     x = false;
    // }else if(day == "" && month == "" && year == ""){
    //     x = true;
    // }

    

    
    if(x == true){
    let ageYear = newYear - year;
    let ageDay = newDay - day;
    let ageMonth = newMonth - month;

    if(ageMonth < 0 || (ageMonth < 0 && ageDay < 0)){
        ageYear--;
    }

    if (ageMonth < 0) {
        ageMonth +=12;
    }

    if (ageDay < 0) {
        var daysInLastMonth = new Date(newYear, newMonth - 1, 0).getDate();
        ageDay += daysInLastMonth;
        ageMonth--;
    }

    let yearsCal = document.getElementById("years-cal");
    let dayCal = document.getElementById("day-cal");
    let monthCal = document.getElementById("month-cal");

    yearsCal.textContent = ageYear + " ";
    monthCal.textContent = ageMonth + " ";
    dayCal.textContent = ageDay + " ";

}}

















