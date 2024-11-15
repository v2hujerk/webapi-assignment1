const tourAgency = require('./LimXuanWei_EGL301.js');

console.log("\n--- Starting Tour Agency Application ---\n");

console.log("--- Adding Tour Packages ---");
tourAgency.addTourPackage("Safari Adventure", 500, "Kenya");
tourAgency.addTourPackage("Beach Getaway", 300, "Maldives");
tourAgency.addTourPackage("Mountain Trek", 400, "Nepal");

console.log("\n--- Listing Tour Packages ---");
console.log(tourAgency.listTourPackages());

console.log("\n--- Adding Promotions ---");
tourAgency.addPromotion("Holiday Discount", 20);
tourAgency.addPromotion("Early Bird", 10);

console.log("\n--- Listing Promotions ---");
console.log(tourAgency.listPromotions());

console.log("\n--- Booking Tours ---");
tourAgency.bookTour(0, "John Doe");
tourAgency.bookTour(1, "Jane Smith");
tourAgency.bookTour(0, "Alice Johnson");

console.log("\n--- Tour Packages with Bookings ---");
console.log(tourAgency.listTourPackages());

console.log("\n--- Adding Customer Feedback ---");
tourAgency.addCustomerFeedback(0, "Amazing experience!");
tourAgency.addCustomerFeedback(1, "Beautiful and relaxing.");
tourAgency.addCustomerFeedback(2, "Challenging but rewarding trek.");

console.log("\n--- Generating Sales Report ---");
console.log(tourAgency.generateSalesReport());

console.log("\n--- Tour Agency Application Ended ---");

