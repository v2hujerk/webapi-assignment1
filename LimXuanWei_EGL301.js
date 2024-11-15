console.log("Starting Tour Agency Module");

module.exports = {
    description: "Tour Agency Management System",
    tours: [], // Array to store tour packages 
    promotions: [], // Array to store promotions

    // Adds new tour package
    addTourPackage(name, price, destination) {
        this.tours.push({
            name: name,
            price: price,
            destination: destination,
            bookings: [],
            feedback: [],
        });
        console.log(`Tour package "${name}" added successfully.`);
    },

    // List tour packages
    listTourPackages() {
        return this.tours;
    },

    // Update tour package
    updateTourPackage(index, updatedDetails) {
        if (this.tours[index]) {
            this.tours[index] = {
                ...this.tours[index],
                ...updatedDetails,
            };
            console.log(`Tour package at index ${index} updated successfully.`);
        } else {
            console.log(`Tour package at index ${index} does not exist.`);
        }
    },

    // Add promotion
    addPromotion(name, discount) {
        this.promotions.push({
            name: name,
            discount: discount,
        });
        console.log(`Promotion "${name}" with ${discount}% discount added successfully.`);
    },

    // List promotions
    listPromotions() {
        return this.promotions;
    },

    // Book a tour
    bookTour(index, customerName) {
        if (this.tours[index]) {
            this.tours[index].bookings.push(customerName);
            console.log(`Customer "${customerName}" booked a tour for "${this.tours[index].name}".`);
        } else {
            console.log(`Tour package at index ${index} does not exist.`);
        }
    },

    // Add customer feedback
    addCustomerFeedback(index, feedback) {
        if (this.tours[index]) {
            this.tours[index].feedback.push(feedback);
            console.log(`Feedback added for tour "${this.tours[index].name}".`);
        } else {
            console.log(`Tour package at index ${index} does not exist.`);
        }
    },

    // Generate sales report
    generateSalesReport() {
        const report = this.tours.map(tour => ({
            packageName: tour.name,
            totalBookings: tour.bookings.length,
        }));
        console.log("Sales report generated.");
        return report;
    },
};

