

document.addEventListener("DOMContentLoaded", () => {

  
  if (!localStorage.getItem("adminAuth")) {
    alert("Please login first");
    location.href = "login.html";
  }

  
  const cafeName = document.getElementById("cafeName");
  const heroText = document.getElementById("heroText");
  const aboutText = document.getElementById("aboutText");
  const siteForm = document.getElementById("siteForm");

  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const address = document.getElementById("address");

  const menuName = document.getElementById("menuName");
  const menuPrice = document.getElementById("menuPrice");
  const menuList = document.getElementById("menuList");

  const coffeeName = document.getElementById("name");
  const coffeePrice = document.getElementById("price");
  const coffeeImage = document.getElementById("image");
  const adminMenu = document.getElementById("adminMenu");

  let updates = Number(localStorage.getItem("contentUpdates")) || 0;
  let menu = JSON.parse(localStorage.getItem("urbanBrewMenu")) || [];

  const savedData = JSON.parse(localStorage.getItem("urbanBrewData"));
  if (savedData) {
    cafeName.value = savedData.cafeName || "";
    heroText.value = savedData.heroText || "";
    aboutText.value = savedData.about || "";
  }

  const savedContact = JSON.parse(localStorage.getItem("urbanBrewContact"));
  if (savedContact) {
    phone.value = savedContact.phone || "";
    email.value = savedContact.email || "";
    address.value = savedContact.address || "";
  }

 
function animateCounter(id, target) {
  let count = 0;
  const el = document.getElementById(id);
  if (!el) return;
  const speed = Math.max(1, Math.ceil(target / 40));

  const interval = setInterval(() => {
    count += speed;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    el.innerText = count;
  }, 20);
}

function getAverageVisitors() {
  const visitors = JSON.parse(localStorage.getItem("monthlyVisitors")) || [];
  if (visitors.length === 0) return 0;
  const totalBookings = visitors.reduce((sum, v) => sum + v.count, 0);
  return Math.round(totalBookings / visitors.length);
}


function getAverageRating() {
  const ratings = JSON.parse(localStorage.getItem("ratings")) || [];
  if (ratings.length === 0) return 0;
  const sum = ratings.reduce((total, r) => total + r, 0);
  return (sum / ratings.length).toFixed(1); 
}

animateCounter("visitorCount", getAverageVisitors());
animateCounter("menuCount", menu.length);
animateCounter("updateCount", updates);

const avgRatingEl = document.getElementById("avgRating");
if (avgRatingEl) avgRatingEl.innerText = getAverageRating();


  
  function renderMenu() {
    menuList.innerHTML = "";
    menu.forEach((item, i) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${item.name} - ₹${item.price}
        <button onclick="deleteMenu(${i})">❌</button>
      `;
      menuList.appendChild(li);
    });

    adminMenu.innerHTML = "";
    menu.forEach(item => {
      adminMenu.innerHTML += `
        <div class="coffee-item">
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>
        </div>
      `;
    });

    localStorage.setItem("urbanBrewMenu", JSON.stringify(menu));
    animateCounter("menuCount", menu.length);
  }

  window.addMenu = () => {
    const name = menuName.value.trim();
    const price = menuPrice.value.trim();
    if (!name || !price) return alert("Fill all fields");
    menu.push({ name, price });
    menuName.value = "";
    menuPrice.value = "";
    renderMenu();
  };

  window.deleteMenu = (index) => {
    menu.splice(index, 1);
    renderMenu();
  };

  window.addItem = () => {
    const name = coffeeName.value.trim();
    const price = coffeePrice.value.trim();
    const image = coffeeImage.value.trim();
    if (!name || !price || !image) return alert("Fill all fields");
    menu.push({ name, price, image });
    coffeeName.value = "";
    coffeePrice.value = "";
    coffeeImage.value = "";
    renderMenu();
  };

  renderMenu();


  siteForm.addEventListener("submit", e => {
    e.preventDefault();
    const data = {
      cafeName: cafeName.value,
      heroText: heroText.value,
      about: aboutText.value
    };
    localStorage.setItem("urbanBrewData", JSON.stringify(data));
    updates++;
    localStorage.setItem("contentUpdates", updates);
    animateCounter("updateCount", updates);
    alert("Website content saved!");
  });


  window.saveContact = () => {
    const contact = {
      phone: phone.value,
      email: email.value,
      address: address.value
    };
    localStorage.setItem("urbanBrewContact", JSON.stringify(contact));
    alert("Contact info saved!");
  };


  document.querySelector(".logout").onclick = () => {
    localStorage.removeItem("adminAuth");
    location.href = "login.html";
  };


  const sidebar = document.querySelector(".sidebar");
  const menuBtn = document.querySelector(".menu-btn");
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });

  document.querySelectorAll('.sidebar li').forEach(li => {
    li.addEventListener('click', () => {
      document.querySelector('.sidebar li.active').classList.remove('active');
      li.classList.add('active');
    })
  })

});


const bookingTable = document.getElementById("bookingTable");
const orderTable = document.getElementById("orderTable");

function renderBookings() {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookingTable.innerHTML = "";

  bookings.forEach(b => {
    bookingTable.innerHTML += `
      <tr>
        <td>${b.name}</td>
        <td>${b.email}</td>
        <td>${b.date}</td>
        <td><span class="badge completed">${b.status}</span></td>
      </tr>
    `;
  });
}

function renderOrders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orderTable.innerHTML = "";

  orders.forEach((o, i) => {
    orderTable.innerHTML += `
      <tr>
        <td>${o.customer}</td>
        <td>${o.item}</td>
        <td>${o.quantity}</td>
        <td>₹${o.price * o.quantity}</td>
        <td>
          <span class="badge ${o.status === "Pending" ? "pending" : "completed"}">
            ${o.status}
          </span>
        </td>
        <td>
          ${o.status === "Pending"
        ? `<button class="action-btn" onclick="completeOrder(${i})">Complete</button>`
        : "—"
      }
        </td>
      </tr>
    `;
  });
}

window.completeOrder = index => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders[index].status = "Completed";
  localStorage.setItem("orders", JSON.stringify(orders));
  renderOrders();
};

renderBookings();
renderOrders();



document.querySelectorAll(".sidebar li").forEach(li => {
  li.addEventListener("click", () => {
    document.querySelectorAll(".card").forEach(c => c.style.display = "none");

    if (li.textContent.includes("Menu")) {
      document.querySelector(".card:nth-of-type(1)").style.display = "block";
    }

    if (li.textContent.includes("Edit")) {
      document.querySelector(".card:nth-of-type(2)").style.display = "block";
    }

    if (li.textContent.includes("Contact")) {
      document.querySelector(".card:nth-of-type(3)").style.display = "block";
    }
  });
});

const sidebarItems = document.querySelectorAll(".sidebar li[data-target]");
const cards = document.querySelectorAll(".card");

sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    // Remove previous active
    document.querySelector(".sidebar li.active")?.classList.remove("active");
    item.classList.add("active");

    const target = item.dataset.target;

    cards.forEach(card => {
      card.style.display = card.dataset.section === target || target === "dashboard" 
        ? "block" 
        : "none";
    });
  });
});

cards.forEach(card => {
  if (card.dataset.section !== "dashboard") card.style.display = "none";
});

