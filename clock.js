// Clock works in HH:MM:SS format  
 function time () {
    const  currentTime = new Date();
    let hour = currentTime.getHours(); 
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds()

    // Checking for AM and PM with a ternary operator. 
    let  format = currentTime.getHours() < 12 ? 'AM' : 'PM';

    // Adding a zero before number < 10 
    if (minutes < 10) {
        minutes = '0' + minutes
    }

    if (seconds < 10) {
        seconds = '0' + seconds 
    }
     
  // Converting the 24 hour format into 12 hour format: 

    if (hour % 12 === 0) {
        hour ===  12 
    } else if (hour > 12) {
         hour -= 12; 
    } else {
        hour; 
    }
     
// Putting  all the information together to render into  the DOM element  
   let updateTime; 
   updateTime = (`${hour}:  ${minutes}: ${seconds} ${format}`)
   

   document.getElementById('time').innerHTML = updateTime; 

 }

 time();

 // Clock updates every second ticking like a clock 
setInterval(time, 60); 


 // Clock also gives DD:MM:YY 
 function date() {
    const currentTime = new Date();
    let date = currentTime.getDate();
    let day = currentTime.getDay(); 
    let month = currentTime.getMonth(); 
    let year = currentTime.getFullYear();

    
    let daysCollection = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let updateDay = daysCollection[day]

    let monthCollection = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let updateMonth = monthCollection[month]

    // Adding a zero before number < 10 
    if (month < 10){
        month = '0' + month;
    } 
// Adding nd,th and rd corresponding  to the date 
if (date === 1 || date === 21 || date === 31){
    date += 'st'
} else if (date === 2 || date === 22 ){
    date += 'nd'
} else {
    date += 'th'
}



// Putting all the information together to render in the  DOM 
     let upDate; 
     upDate = (`${updateDay},   ${updateMonth} ${date}  ${year}`)
     document.getElementById('date').innerHTML = upDate;
    
}

date();


 