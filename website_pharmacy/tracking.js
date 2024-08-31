document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get order details from the form
    var orderID = document.getElementById("orderID").value;
    var email = document.getElementById("email").value;

    // Simulate order tracking (replace with actual tracking logic)
    var orderStatus = getOrderStatus(orderID, email);

    // Display order status
    document.getElementById("orderStatus").innerHTML = "<p>" + orderStatus + "</p>";
});

function getOrderStatus(orderID, email) {
    // Replace this with your actual order tracking logic
    // You may need to make an AJAX request to your server to retrieve the order status
    // For demonstration purposes, let's assume the order status is retrieved from a database
    // and returned as a string
    // This function should return the order status based on the order ID and email
    return "Your order with ID " + orderID + " is sent to your mail. Please refer";
}
