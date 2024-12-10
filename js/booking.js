document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Capture the form values
    const receiverName = document.getElementById("receiverName").value.trim();
    const receiverAddress = document.getElementById("receiverAddress").value.trim();
    const receiverPin = document.getElementById("receiverPin").value.trim();
    const receiverContact = document.getElementById("receiverContact").value.trim();
    const parcelSize = document.getElementById("parcelSize").value.trim();
    const parcelContents = document.getElementById("parcelContents").value.trim();
    const deliverySpeed = document.getElementById("deliverySpeed").value;
    const packaging = document.getElementById("packaging").value;
    const pickupDate = document.getElementById("pickupDate").value;
    const pickupTime = document.getElementById("pickupTime").value;
    const paymentMethod = document.getElementById("paymentMethod").value;

    // Validations
    if (!receiverName || !receiverAddress || !receiverPin || !receiverContact || !parcelSize || !parcelContents || !pickupDate || !pickupTime || !paymentMethod) {
        alert("Please fill in all required fields.");
        return;
    }

    if (receiverPin.length !== 6 || isNaN(receiverPin)) {
        alert("Please enter a valid 6-digit pin code.");
        return;
    }

    // Calculate the service cost (for example purposes, it increases based on delivery speed)
    let serviceCost = 50;
    if (deliverySpeed === "express") {
        serviceCost += 10;
    } else if (deliverySpeed === "overnight") {
        serviceCost += 20;
    }

    // Display confirmation
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("bookingForm").style.display = "none";

    // Output the booking details (just for reference)
    console.log("Booking Details:");
    console.log({
        receiverName,
        receiverAddress,
        receiverPin,
        receiverContact,
        parcelSize,
        parcelContents,
        deliverySpeed,
        packaging,
        pickupDate,
        pickupTime,
        serviceCost,
        paymentMethod
    });
});
