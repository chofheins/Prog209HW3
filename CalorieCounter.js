let foodItems = [];
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("add-btn").addEventListener("click", function () {
        let item = document.getElementById("Item").value;
        let calories = document.getElementById("Calories").value;
        let quantity = document.getElementById("Quantity").value;

        let newFoodItem = new FoodItem(item, calories, quantity);
        if (newFoodItem.validate()) {
            foodItems.push(newFoodItem);

            let foodIndex = (foodItems.length - 1);
            let ul = document.getElementById("list");
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(foodItems[foodIndex].item + ", " + foodItems[foodIndex].calories + ", " + foodItems[foodIndex].quantity));
            ul.appendChild(li);

            let totalCalories = 0;
            for (i = 0; i < foodItems.length; i++) {
                let newItem = (parseInt(foodItems[i].calories) * parseInt(foodItems[i].quantity));
                totalCalories += parseInt(newItem);
            }

            document.getElementById("totalCalories").innerHTML = "You have consumed " + totalCalories + " calories.";
            }
        else {
            document.getElementById("totalCalories").innerHTML = "Sorry, invalid input data";
        }
    });

    document.getElementById("clear-btn").addEventListener("click", function () {
        location.reload();
    });
});