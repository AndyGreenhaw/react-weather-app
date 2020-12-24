export default {

    getDate: function (){
        console.log("Reading Day Formatter")

        var todayFullDate = new Date();
        console.log(todayFullDate)

        var dd = todayFullDate.getDate();
        var mm = todayFullDate.getMonth();
        var yyyy = todayFullDate.getFullYear();
        var dayName = todayFullDate.getDay();

        // Format Days
        switch(dayName) {
            case 0:
                dayName = "Sunday";
                break;
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            case 6: 
                dayName = "Saturday";
        }

        // Format Months
        switch(mm) {
            case 0:
                mm = "Jan";
                break;
            case 1:
                mm = "Feb";
                break;
            case 2:
                mm = "March";
                break;
            case 3:
                mm = "April";
                break;
            case 4:
                mm = "May";
                break;
            case 5:
                mm = "June";
                break;
            case 6: 
                mm = "July";
                break;
            case 7:
                mm = "Aug";
                break;
            case 8:
                mm = "Sept";
                break;
            case 9:
                mm = "Oct";
                break;
            case 10:
                mm = "Nov";
                break;
            case 11:
                mm = "Dec";
        } 

    const todayDisplay = (dayName+', '+mm+' '+dd+', '+yyyy).toString();
    console.log(todayDisplay)
    return todayDisplay;
    }

}