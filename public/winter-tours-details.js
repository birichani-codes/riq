document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get("id");

    fetch("data/winter-tours.json")
        .then(response => response.json())
        .then(data => {
            const tour = data.tours[tourId];

            if (tour) {
                document.getElementById("tour-name").textContent = tour.name;
                document.getElementById("tour-image").src = tour.image;
                document.getElementById("tour-duration").textContent = `Duration: ${tour.duration}`;
                document.getElementById("tour-rating").textContent = `⭐ ${tour.rating}`;
                document.getElementById("tour-season").textContent = `Season: ${tour.season}`;
                document.getElementById("tour-price").textContent = `Price: ${tour.price}`;
            } else {
                document.body.innerHTML = "<h2 style='text-align: center;'>Tour Not Found</h2>";
            }
        })
        .catch(error => console.error("Error loading tour details:", error));
});
