function findAkanName () {
    // variables: day, month, year.
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    // gender variables
    var gender = document.getElementById('input[name="gender"]:checked').value;

    // var days
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];

    // var Akan names 
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // birthdate
    var dateOfBirth = new Date (year + '/' +month + '/' +day);
    var dayOftheWeek = dateOfBirth.getDay();
}