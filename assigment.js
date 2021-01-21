// https://github.com/SohelTanbir/problem-solving-assigment

// First problem kilometerTometer convert

function kilometerToMeter(kiloMeter){
    var errorMessage;
    if(kiloMeter <= 0){ // checking input value
        return errorMessage = ("Please Enter from  1 to up Number!");
    }
    else if(typeof(kiloMeter) == 'string'){
        return errorMessage = ("Please Enter Number, Not Text!"); 
    }
    else{
        var meter = kiloMeter * 1000; // 1 kilometer = 1000 meter
        return meter;
    }  
}
var meter = kilometerToMeter(1200);
console.log(meter);