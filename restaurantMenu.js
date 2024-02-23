// 1.  Write an Arrow function to print different menu for different day in a week?

const printMenu = (day) => {
    switch(day) {
        case 0:
            console.log("Sunday Menu: Pancakes and Eggs");
            break;
        case 1:
            console.log("Monday Menu: Spaghetti and Meatballs");
            break;
        case 2:
            console.log("Tuesday Menu: Tacos and Guacamole");
            break;
        case 3:
            console.log("Wednesday Menu: Grilled Chicken Salad");
            break;
        case 4:
            console.log("Thursday Menu: Sushi and Miso Soup");
            break;
        case 5:
            console.log("Friday Menu: Pizza and Wings");
            break;
        case 6:
            console.log("Saturday Menu: BBQ Ribs and Cornbread");
            break;
        default:
            console.log("Invalid day! Please provide a number between 0 and 6.");
    }
};