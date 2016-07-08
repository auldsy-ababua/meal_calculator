//adds up all the this.preTax properties and multiplies them by .2 (the tip percentage) then divides all of it by the number of Diners.
var makeTip = function(diners){
    var sum = 0;
    for (var i = 0; i < diners.length; i++) {
        sum += diners[i].preTax;
    }
    return (sum*.2)/diners.length;
};

//Constructor to make new diner objects
function Diner (name, dishes) {
    this.name = name;
    this.dishes = dishes;
    this.addMeal = function (meal) {
        this.dishes.push(meal);
    };
    this.preTax = this.dishes.reduce(function (a, b) {
        return a + b.price;
    }, 0);
    this.tax = this.preTax * .08;
    //trying to simplify the tip print in the this.print
    this.tip = makeTip([])
    this.total = this.preTax + this.tax;
    this.calculateTotal = function (tip) {
        this.totalWithTip = this.total + tip;
        return this.totalWithTip;
    };
    //help here please!
    this.print = function () {
        console.log(this.name + " owes " + "$" + parseFloat(this.calculateTotal).toFixed(2) + ". This diner's subtotal is " + "$" + parseFloat(this.preTax).toFixed(2) + ". This diner's taxes totals to " + "$" + parseFloat(this.tax).toFixed(2) + ". This diner's share of the tip is " + "$" + parseFloat(makeTip()).toFixed(2));
    };
}

//Constructor to make new meal objects. These then get push() to the end of the this.dishes array in the Diner object.
function Meal (name, price){
    this.name = name;
    this.price = price;
}

$("document").ready(function(){
    var colin = new Diner("Colin", [new Meal("steak", 19.00), new Meal ("Rice", 5), new Meal ("wine", 43.21)]);
    var mario = new Diner("Mario", [new Meal("fries", 18.00), new Meal ("Rice", 5), new Meal ("soda", 5.44)]);
    colin.addMeal();
    var tipAmountEach = makeTip([colin, mario]);
    var total = colin.calculateTotal(tipAmountEach) + mario.calculateTotal(tipAmountEach);
    console.log("$" + parseFloat(total).toFixed(2));
    console.log(colin.print());
});


