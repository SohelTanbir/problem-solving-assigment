// https://github.com/SohelTanbir/problem-solving-assigment

// (1). First problem kilometerTometer convert

function kilometerToMeter(kiloMeter) {
    var errorMessage;
    if (kiloMeter <= 0) { // checking input value
        return errorMessage = ("Please Enter from  1 to up Number!");
    }
    else if (typeof (kiloMeter) == 'string') {
        return errorMessage = ("Please Enter Number, Not Text!");
    }
    else {
        var meter = kiloMeter * 1000; // 1 kilometer = 1000 meter
        return meter;
    }
}
var meter = kilometerToMeter();



// (2). Second problem: budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    var invalidValue;
    if (watch <= 0) { // checking input value
        return invalidValue = ("Please Enter valid Watch Price!");
    }
    else if (phone <= 0) { // checking input value
        return invalidValue = ("Please Enter valid Phone Price!");
    }
    else if (laptop <= 0) { // checking input value
        return invalidValue = ("Please Enter Valid Laptop Price!");
    }
    else {
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    }
}
var budget = budgetCalculator();



// (3). third problem: hotelCost
function hotelCost(day) {
    var invalidDay;
    if (day <= 0) { // checking input value
        return invalidDay = ("Please Enter from  1 to up Number!");
    }
    else if (typeof (day) == 'string') {
        return invalidDay = ("Please Enter Number, Not Text!");
    }
    else {
        var firstPrice;
        var totalPrice;
        if (day <= 10) {
            return firstPrice = day * 100;
        }
        else if (day > 10 && day <= 20) {
            firstPrice = 10 * 100;
            var reminingDay = day - 10;
            var secondPrice = reminingDay * 80;
            return totalPrice = firstPrice + secondPrice;
        } else {
            firstPrice = 10 * 100;
            var secondPrice = 10 * 80;
            var reminingDay = day - 20;
            var thirdPrice = reminingDay * 50;
            return totalPrice = firstPrice + secondPrice + thirdPrice;
        }
    }
}
var totalCost = hotelCost();



// (4). Four Problem: megaFriend 

var friendsName = ['sohelrana','alamin mia', 'shoriful islam','mim'];

function megaFriend(array){
    if(typeof(array) == 'object'){
        var charecter = 0;
        var largeName;
        for(var i = 0; i<array.length; i++){
            arrayItem = array[i].length;
            if(arrayItem > charecter){
                charecter = array[i].length;
                largeName = array[i];
            }
        }
        return largeName;
    }else{
        return "Please Enter an Array";
        
    }
}
var largestName = megaFriend();