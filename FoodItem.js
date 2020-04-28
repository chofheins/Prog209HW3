function FoodItem(item, calories, quantity) {
    this.item = item;
    this.calories = calories;
    this.quantity = quantity;
}
FoodItem.prototype.validate = function() {
    if(isNaN(this.calories) || isNaN(this.quantity)) {
        return false;
    }
    else if(this.item && this.calories && this.quantity) {
        return true;
    }
    else {
        return false;
    }
}