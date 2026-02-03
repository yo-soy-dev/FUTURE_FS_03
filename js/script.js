console.log("Urban Brew JS Loaded");


(function checkBookingExpiry() {
  const bookingDate = localStorage.getItem("bookingDate");
  if (!bookingDate) return;

  const today = new Date().toISOString().split("T")[0];
  if (today !== bookingDate) {
    localStorage.removeItem("tableBooked");
    localStorage.removeItem("bookingDate");
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  setupMobileNav();
  setupBookingForm();
  setupScrollReveal();
  loadMenuItems();
  setupEmailLink();
});

if (!localStorage.getItem("urbanBrewMenu")) {
  localStorage.setItem("urbanBrewMenu", JSON.stringify([
    { name: "Cappuccino", price: 180, image: "assets/images/cappuccino.png" },
    { name: "Cold Brew", price: 220, image: "assets/images/coldbrew.png" },
    { name: "Hazelnut Latte", price: 240, image: "assets/images/hazelnutlatte.png" },
    { name: "Mochaccino", price: 250, image: "assets/images/mochaccino.png" },
    { name: "Espresso", price: 150, image: "assets/images/espresso.png" },
    { name: "Latte", price: 200, image: "assets/images/latte.png" },
    { name: "Americano", price: 170, image: "assets/images/americano.png" },
    { name: "Caramel Latte", price: 220, image: "assets/images/caramellatte.png" },
    { name: "Macchiato", price: 210, image: "assets/images/macchiato.png" },
    { name: "Pumpkin Spice Latte", price: 260, image: "assets/images/pumpkinspicelatte.png" },
    { name: "Irish Coffee", price: 280, image: "assets/images/irishcoffee.png" },
    { name: "Vanilla Latte", price: 230, image: "assets/images/vanillalatte.png" },
    { name: "Matcha Latte", price: 250, image: "assets/images/matchalatte.png" },
    { name: "Affogato", price: 270, image: "assets/images/affogato.png" },
    { name: "French Press", price: 260, image: "assets/images/frenchpress.png" }
  ]));
}


function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });
}


function setupBookingForm() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const date = form.date.value;

    if (!name || !email || !date) {
      showToast("Please fill all fields", "error");
      return;
    }

    const selected = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selected < today) {
      alert("Please select a future date");
      return;
    }

    const booking = {
      name,
      email,
      date,
      time: new Date().toLocaleString(),
      status: "Confirmed"
    };

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    let monthlyVisitors = JSON.parse(localStorage.getItem("monthlyVisitors")) || [];

    const todayKey = new Date().toISOString().split("T")[0];

    let day = monthlyVisitors.find(v => v.date === todayKey);

    if (day) {
      day.count += 1;
    } else {
      monthlyVisitors.push({ date: todayKey, count: 1 });
    }

    localStorage.setItem("monthlyVisitors", JSON.stringify(monthlyVisitors));

    // Update admin panel count if open
    if (document.getElementById("visitorCount")) {
      document.getElementById("visitorCount").innerText = getAverageVisitors();
    }

    localStorage.setItem("tableBooked", "true");
    localStorage.setItem("bookingDate", date);

    alert(`Thank you, ${name}! Your table is booked for ${date}.`);
    const message = `Hi, my name is ${name}. I would like to book a table on ${date}.`;
    const whatsappURL = `https://wa.me/916386331981?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    showToast("Table booked! You can now order ☕", "success");
    loadMenuItems();
    form.reset();
  });
}


function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}


function setupScrollReveal() {
  const items = document.querySelectorAll(".section, .glass, .menu-item");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(el => observer.observe(el));
}


function loadMenuItems() {
  const menu = JSON.parse(localStorage.getItem("urbanBrewMenu")) || [];
  const menuBox = document.getElementById("menuItems");
  if (!menuBox) return;

  menuBox.innerHTML = "";
  const booked = localStorage.getItem("tableBooked");

  menu.forEach(item => {
    const card = document.createElement("article");
    card.className = "menu-card glass menu-item";

    card.innerHTML = `
      <div class="card-img">
        <img src="${item.image}" alt="${item.name}">
      </div>

      <div class="card-body">
        <h3>${item.name}</h3>
        <span class="price">₹${item.price}</span>

        <button onclick="openOrderModal('${item.name}', ${item.price})">
          ${booked ? "Order Now" : "Book Table First"}
        </button>
      </div>
    `;

    menuBox.appendChild(card);
  });
}



function openAdmin() {
  const password = prompt("Enter admin password:");
  if (password === "1234") {
    window.location.href = "admin.html";
  } else if (password !== null) {
    alert("Access denied");
  }
}


let currentItem = "";
let currentPrice = 0;

function openOrderModal(name, price) {
  if (!localStorage.getItem("tableBooked")) {
    alert("Please book table first");
    return;
  }

  currentItem = name;
  currentPrice = price;
  document.getElementById("selectedItem").innerText = `${name} - ₹${price}`;
  document.getElementById("orderModal").classList.add("show");
}

function closeOrderModal() {
  document.getElementById("orderModal").classList.remove("show");
}

function submitOrder() {
  const name = document.getElementById("orderName").value.trim();
  const phone = document.getElementById("orderPhone").value.trim();
  const qty = Number(document.getElementById("orderQty").value);

  if (!name || !phone || qty < 1) {
    alert("Please fill all details correctly");
    return;
  }

  const order = {
    customer: name,
    phone,
    item: currentItem,
    price: currentPrice,
    quantity: qty,
    status: "Pending",
    time: new Date().toLocaleString()
  };

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  document.getElementById("orderName").value = "";
  document.getElementById("orderPhone").value = "";
  document.getElementById("orderQty").value = 1;

  alert("Order placed successfully ☕");
  closeOrderModal();
}

function toggleTheme() {
  document.body.classList.toggle("light");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
}

(function () {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
  }
})();

const ratingStars = document.querySelectorAll("#stars span");
let selectedRating = 0;

ratingStars.forEach(star => {
  star.addEventListener("click", () => {
    selectedRating = Number(star.dataset.value);
    ratingStars.forEach(s => s.classList.toggle("selected", Number(s.dataset.value) <= selectedRating));
  });
});

document.getElementById("submitRating").addEventListener("click", () => {
  if (!selectedRating) return alert("Select a rating first!");
  const ratings = JSON.parse(localStorage.getItem("ratings")) || [];
  ratings.push(selectedRating);
  localStorage.setItem("ratings", JSON.stringify(ratings));
  updateAverageRating();
  alert("Thanks for your rating!");
  selectedRating = 0;
  ratingStars.forEach(s => s.classList.remove("selected"));
});

function updateAverageRating() {
  const ratings = JSON.parse(localStorage.getItem("ratings")) || [];
  const avg = ratings.length ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1) : 0;
  document.getElementById("avgRating").innerText = avg;
}

updateAverageRating();



function setupEmailLink() {
  const link = document.getElementById("emailLink");
  if (!link) return;

  const email = "devashtiwari817@email.com";

  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    link.href = `mailto:${email}`;
  } else {
    link.href =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  }

  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener");
}
