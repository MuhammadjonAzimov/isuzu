var menuList = document.getElementById("menuList");

menuList.style.height = "0px";

function togglemenu() {

    if (menuList.style.height == "0px") {
        menuList.style.height = "210px";
    }
    else {
        menuList.style.height = "0px";
    }
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords

        const map = L.map('map').setView([latitude, longitude], 25);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([41.188068, 69.195324]).addTo(map)
            .bindPopup('ISUZU SERVISE CENTER')
            .openPopup();

        map.on("click", (event) => {
            const { lat, lng } = event.latlng

            L.marker([lat, lng])
                .addTo(map)
                .bindPopup(
                    L.popup({
                        maxWidth: 250,
                        minWidht: 150,
                        autoClose: false,
                        closeOnClick: false,
                        className: "running-popup"
                    })
                ).setPopupContent("MARKER")
                .openPopup();

        })
    })
}