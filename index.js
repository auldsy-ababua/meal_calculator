//(sum of Diner's preTax*.2)/(# of Diners) -- or -- preTax x .2 within each object and add all prop values together and divide by number of prop.
var tip = sum((Diner.dishes.intervalues())/# of Diners)

function Diner (name, dishes) {
    this.name = name;
    this.dishes = dishes;
    this.preTax = this.dishes.reduce((a, b) => a + b);
    this.tax = this.preTax*.08;
    this.total = this.preTax + this.tax;
    this.totalWithTip = this.total + tip;
}




$("document").ready(function(){
    var colin = new Diner("Colin", [19.50, 22.71, 43.21]);
});


this.pretax = function (){
    for (var i = 0; i < this.dishes.length; i++) {
        sum += this.dishes[i].num;
    }
};