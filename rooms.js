function openBookingModal(roomType, price) {
    const modal = document.getElementById("bookingModal");
    const bookingDetails = document.getElementById("bookingDetails");
    bookingDetails.innerHTML = `You have selected the ${roomType} for $${price} per night.`;
    modal.style.display = "flex";
}


function closeBookingModal() {
    const modal = document.getElementById("bookingModal");
    modal.style.display = "none";
}




function filterRooms() {
    const selectedRange = document.getElementById("priceRange").value;
    const rooms = document.querySelectorAll(".room");

    rooms.forEach(room => {
        const price = parseInt(room.getAttribute("data-price"));
        if (
            (selectedRange === "under200" && price > 200) ||
            (selectedRange === "200to300" && (price < 200 || price > 300)) ||
            (selectedRange === "above300" && price < 300)
        ) {
            room.style.display = "none";
        } else {
            room.style.display = "block";
        }
    });
}


window.onclick = function(event) {
    const modal = document.getElementById("bookingModal");
    if (event.target === modal) {
        closeBookingModal();
    }
};