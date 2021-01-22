
function kilometerToMeter(kilo) {

    var meter = kilo * 1000;
    var schoolMeter = kilometerToMeter(7);

    var collegeMeter = kilometerToMeter(9);

    var varsityMeter = kilometerToMeter(70);

    return meter;


}

function budgetCalculator(Electronics) {
    var watch = 5 * 50;
    var phone = 7 * 100;
    var laptop = 9 * 100;
    var total = watch + phone + laptop;

    return total;
}


function hotelCost(duraton){

    var duration = 45;
    var rent = 0;
    
    
    if (duration <= 10) {
        rent = duration * 100;
    }
    else if (duration <= 20) {
        var firstPart = 10 * 100;
        var remaining = duration - 10;
        var secondPart = remaining * 80;
        rent = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = duration - 20;
        var thirdPart = remaining * 50
        rent = firstPart + secondPart + thirdPart;
    }
    return rent
    }
    
    
    function megaFriend(friends){


        var names = ["Salma", "Faria", "Shaima", "Nimmi", "Ishan"]
        var char = names[0];
        for (var i = 0; i < names.length; i++) {
            var letter = names[i]
            if(letter > char){
                char = letter;
            }
        
        }
        return char;
        }
        
    
    