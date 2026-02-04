# ☕ Urban Brew Cafe – Management Website

> A comprehensive JavaScript-based café management system with booking-first approach and real-time WhatsApp notifications

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![LocalStorage](https://img.shields.io/badge/Storage-LocalStorage-orange)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 📋 Project Overview

**Urban Brew Cafe** is a modern café management system developed as part of the **Future Interns – Full Stack Web Development (Task 3)** internship program. The platform implements a unique **booking-first approach** where customers must reserve a table before placing any coffee order. Upon successful booking, an automatic WhatsApp confirmation is sent to the café owner, ensuring real-time communication and streamlined operations.

The system features a complete **Admin Panel** for comprehensive management of menu items, content, contact details, and customer analytics. All data is efficiently handled using **LocalStorage**, making it a lightweight, serverless solution.

---

## ✨ Key Features

### 🛎️ Customer Side Features

| Feature | Description |
|---------|-------------|
| 📅 **Mandatory Table Booking** | Customers must book a table before placing any order |
| 🚫 **Order Restriction** | Ordering is disabled until a valid booking is made |
| 📱 **WhatsApp Notification** | Upon booking, WhatsApp opens with pre-filled message that customer sends to café owner |
| ☕ **Coffee Menu Display** | Browse complete menu on the main page (loaded from LocalStorage) |
| ⭐ **Customer Ratings** | Submit feedback and ratings for service quality |
| 📱 **Responsive Design** | Mobile-friendly interface for all devices |

**WhatsApp Flow Clarification:**
> When customer clicks "Confirm Booking", their WhatsApp app opens with a pre-filled message containing booking details. The customer then **sends this message to the café owner**, NOT the other way around. This ensures the café owner receives instant notification.

### 🔧 Admin Panel Features

<table>
<tr>
<td width="50%">

**Menu Management**
- ➕ Add new coffee items
- ✏️ Edit existing items
- 🗑️ Delete items
- 🔄 Real-time updates on main page

</td>
<td width="50%">

**Analytics Dashboard**
- 📊 View all menu items
- 📝 Content management
- 👥 Monthly visitor tracking
- ⭐ Average customer ratings

</td>
</tr>
</table>

**Additional Admin Features:**
- 🔐 Secure login system
- 📞 Update contact details
- 📈 Customer insights and feedback
- 🚪 Secure logout and re-login

---

## 📱 WhatsApp Integration

### How It Works:
```
1. Customer fills booking form and clicks "Confirm Booking"
    ↓
2. System generates WhatsApp message with booking details
    ↓
3. Message automatically opens in customer's WhatsApp
    ↓
4. Pre-filled message is ready to send to CAFÉ OWNER
    ↓
5. Customer clicks send → Café owner receives booking notification
    ↓
6. Instant notification for café owner
```

**Key Point:** 
> When customer confirms booking, WhatsApp opens with a **pre-filled message** that the customer sends to the **café owner/admin**, NOT the other way around. The customer initiates the message to notify the café.

**Benefits:**
- ✅ Instant notification to café owner
- ✅ Customer confirms their own booking via WhatsApp
- ✅ Direct communication channel established
- ✅ No manual intervention required
- ✅ Booking details automatically formatted

---

## 💾 Data Management

All data is stored and managed using **Browser LocalStorage**:

```javascript
// Data Structure
{
  menuItems: [],        // Coffee menu items added by admin
  ratings: [],          // Customer ratings and feedback
  contactInfo: {},      // Café contact information
  visitorStats: {},     // Monthly visitor analytics
  bookings: []          // Table booking records
}
```

**Storage Categories:**
- ☕ **Menu Items**: Complete coffee catalog with prices
- ⭐ **Ratings**: Customer feedback and ratings
- 📞 **Contact Information**: Café address, phone, email
- 📊 **Visitor Statistics**: Monthly traffic and engagement metrics
- 📅 **Bookings**: Table reservation records

---

## 💼 Business Benefits

| Benefit | Impact |
|---------|--------|
| 🏢 **Digital Transformation** | Modernize Urban Brew Cafe operations |
| 🔒 **Booking Enforcement** | No orders without table confirmation |
| 🎛️ **Easy Menu Control** | Admin can update menu in real-time |
| 📱 **Direct Communication** | WhatsApp integration for instant updates |
| 😊 **Better Customer Experience** | Streamlined booking and ordering process |
| 📈 **Analytics Insights** | Track visitor trends and ratings |

---

## 🛠 Technologies Used

<table>
<tr>
<td align="center" width="25%">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" width="50" height="50"/><br />
<b>HTML5</b>
</td>
<td align="center" width="25%">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" width="50" height="50"/><br />
<b>CSS3</b>
</td>
<td align="center" width="25%">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="50" height="50"/><br />
<b>JavaScript ES6+</b>
</td>
<td align="center" width="25%">
<img src="https://cdn-icons-png.flaticon.com/512/5968/5968771.png" width="50" height="50"/><br />
<b>LocalStorage API</b>
</td>
</tr>
</table>

**Additional Technologies:**
- 📱 **WhatsApp Business API** (link-based messaging)
- 🎨 **Responsive Web Design** (mobile-first approach)
- 🔐 **Client-side Authentication** (password-based admin access)

---

## 🔄 Project Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│                    URBAN BREW CAFE WORKFLOW                      │
└─────────────────────────────────────────────────────────────────┘

    [1] Customer visits website
              ↓
    [2] Fills booking form (name, date, time, guests)
              ↓
    [3] Clicks "Confirm Booking" button
              ↓
    [4] WhatsApp opens with pre-filled message
              ↓
    [5] Customer sends message to CAFÉ OWNER
              ↓
    [6] Café owner receives booking notification
              ↓
    [7] Customer can now place coffee order
              ↓
    [8] Customer submits rating (optional)
              ↓
    [9] Admin manages menu & content via dashboard
              ↓
    [10] Dashboard displays analytics & ratings
              ↓
    [11] Admin can logout securely
```

---

## 🚀 How to Run the Project

### Prerequisites
Ensure you have the following:
- ✅ Any modern web browser (Chrome, Firefox, Edge, Safari)
- ✅ JavaScript enabled in browser settings
- ✅ WhatsApp installed (for message feature)

---

### Installation Steps

#### 1️⃣ Clone or Download Repository

**Option A: Clone via Git**
```bash
git clone <your-github-repo-link>
cd urban-brew-cafe
```

**Option B: Download ZIP**
- Download the project as ZIP file
- Extract to your desired location

#### 2️⃣ Open Project Folder
Navigate to the extracted/cloned project directory.

#### 3️⃣ Launch the Application
```bash
# Simply open index.html in your browser
# Double-click index.html OR right-click → Open with → Browser
```

> **Note**: No server installation or backend setup required! This is a pure frontend JavaScript project.

---

### 🧑‍💼 Customer Flow

```
Step 1: Navigate to main page (index.html)
   ↓
Step 2: Fill booking form with details
   - Name
   - Date
   - Time
   - Number of guests
   ↓
Step 3: Click "Confirm Booking" button
   ↓
Step 4: WhatsApp opens automatically with pre-filled message
   ↓
Step 5: Customer sends WhatsApp message to café owner
   (Message contains all booking details)
   ↓
Step 6: Browse menu and place coffee order
   ↓
Step 7: Submit rating and feedback (optional)
```

**Important:** The WhatsApp message is sent **FROM customer TO café owner**, not from system to customer. Customer actively sends the booking confirmation to the café.

---

### 👨‍💼 Admin Panel Access

```
Step 1: Click "Admin Panel" button on main page
   ↓
Step 2: Enter admin password on login.html
   ↓
Step 3: Access admin dashboard (admin.html)
   ↓
Step 4: Manage menu, view analytics, update content
   ↓
Step 5: Logout securely when done
```

**Admin Capabilities:**
- ➕ Add new coffee items with prices
- ✏️ Edit existing menu items
- 🗑️ Delete items from menu
- 📞 Update café contact information
- 📊 View visitor statistics
- ⭐ Monitor customer ratings

---

### 💾 Data Storage Information

- **Storage Type**: Browser LocalStorage
- **Database Required**: ❌ No
- **Internet Required**: ❌ No (after first load)
- **Offline Support**: ✅ Yes
- **Data Persistence**: Data persists until browser cache is cleared

---

## 📁 Project Structure

```
Urban-Brew-Cafe/
│
├── index.html                      # Main customer-facing page
│   ├── Hero section with cafe branding
│   ├── About section
│   ├── Table booking section
│   ├── Coffee menu display (dynamic from LocalStorage)
│   ├── Order placement (after booking only)
│   ├── Customer rating form
│   ├── Contact section
│   └── WhatsApp integration
│
├── login.html                      # Admin login page
│   ├── Secure password authentication
│   ├── Unauthorized access prevention
│   └── Redirect to admin dashboard
│
├── admin.html                      # Admin dashboard
│   ├── Dashboard statistics
│   ├── Menu management (CRUD operations)
│   ├── Contact details updates
│   ├── Visitor analytics
│   ├── Customer ratings overview
│   └── Secure logout functionality
│
├── css/
│   ├── style.css                   # Main website styles (12.2 KB)
│   │   ├── Hero section styling
│   │   ├── Navigation menu
│   │   ├── Booking form design
│   │   ├── Coffee menu cards
│   │   ├── Rating section
│   │   ├── Footer styling
│   │   └── Responsive design
│   │
│   ├── admin.css                   # Admin dashboard styles (4.5 KB)
│   │   ├── Dashboard layout
│   │   ├── Statistics cards
│   │   ├── Data tables
│   │   ├── Form styling
│   │   └── Admin navigation
│   │
│   └── login.css                   # Login page styles (1.0 KB)
│       ├── Login form design
│       ├── Authentication UI
│       └── Security elements
│
├── js/
│   ├── script.js                   # Main customer-side functionality (9.2 KB)
│   │   ├── Table booking logic
│   │   ├── WhatsApp integration
│   │   ├── Menu display from LocalStorage
│   │   ├── Order placement validation
│   │   ├── Rating submission
│   │   ├── Contact form handling
│   │   └── LocalStorage operations
│   │
│   ├── admin.js                    # Admin panel functionality (8.3 KB)
│   │   ├── Menu CRUD operations
│   │   │   ├── Add new coffee items
│   │   │   ├── Edit existing items
│   │   │   ├── Delete items
│   │   │   └── Update prices
│   │   ├── Contact information management
│   │   ├── Analytics calculation
│   │   ├── Dashboard statistics
│   │   ├── Visitor tracking
│   │   └── Admin logout
│   │
│   └── login.js                    # Admin authentication (797 bytes)
│       ├── Password validation
│       ├── Session management
│       ├── LocalStorage authentication
│       └── Redirect to admin panel
│
├── assets/
│   ├── icons/                      # Social media and contact icons
│   │   ├── instagram.png           # Instagram icon
│   │   ├── location.png            # Location/map icon
│   │   ├── mail.png                # Email icon
│   │   ├── phone.png               # Phone icon
│   │   └── x.png                   # X (Twitter) icon
│   │
│   └── images/                     # Coffee images and branding
│       ├── hero.png                # Hero section banner
│       ├── about.png               # About section image
│       │
│       └── Coffee Menu Images:
│           ├── affogato.png
│           ├── americano.png
│           ├── cappuccino.png
│           ├── caramellatte.png
│           ├── coldbrew.png
│           ├── espresso.png
│           ├── frenchpress.png
│           ├── hazelnutlatte.png
│           ├── irishcoffee.png
│           ├── latte.png
│           ├── macchiato.png
│           ├── matchalatte.png
│           ├── mochaccino.png
│           ├── pumpkinspicelatte.png
│           └── vanillalatte.png
│
└── .git/                           # Git version control (optional)
```

---

## 📝 Detailed File Breakdown

### 📄 HTML Files

<table>
<tr>
<td width="50%">

**index.html** (13.2 KB)
- Hero section with branding
- About Urban Brew Cafe
- Table booking form
- Dynamic coffee menu
- Order placement section
- Customer rating system
- Contact information
- Footer with social links

</td>
<td width="50%">

**login.html** (514 bytes)
- Minimal, secure design
- Password input field
- Login button
- Error message display
- Redirect logic

**admin.html** (4.5 KB)
- Admin dashboard layout
- Statistics cards
- Menu management interface
- CRUD operation forms
- Analytics display
- Logout button

</td>
</tr>
</table>

---

### 🎨 CSS Files

| File | Size | Purpose | Key Features |
|------|------|---------|--------------|
| **style.css** | 12.2 KB | Main website styling | Navigation, hero section, booking form, menu cards, ratings, footer, responsive design |
| **admin.css** | 4.5 KB | Admin dashboard styling | Dashboard layout, statistics cards, tables, forms, buttons, admin navigation |
| **login.css** | 1.0 KB | Login page styling | Centered login form, input fields, button styling, error messages |

---

### ⚙️ JavaScript Files

<table>
<tr>
<th>File</th>
<th>Size</th>
<th>Core Functions</th>
</tr>
<tr>
<td><b>script.js</b></td>
<td>9.2 KB</td>
<td>
• <code>bookTable()</code> - Table booking<br>
• <code>sendWhatsApp()</code> - WhatsApp integration<br>
• <code>displayMenu()</code> - Show coffee items<br>
• <code>orderCoffee()</code> - Place order<br>
• <code>submitRating()</code> - Customer feedback<br>
• <code>validateBooking()</code> - Booking validation
</td>
</tr>
<tr>
<td><b>admin.js</b></td>
<td>8.3 KB</td>
<td>
• <code>addMenuItem()</code> - Add coffee item<br>
• <code>editMenuItem()</code> - Edit item<br>
• <code>deleteMenuItem()</code> - Delete item<br>
• <code>updateContact()</code> - Update info<br>
• <code>calculateStats()</code> - Analytics<br>
• <code>adminLogout()</code> - Secure logout
</td>
</tr>
<tr>
<td><b>login.js</b></td>
<td>797 bytes</td>
<td>
• <code>validateLogin()</code> - Check credentials<br>
• <code>createSession()</code> - Admin session<br>
• <code>redirectAdmin()</code> - Navigate to dashboard
</td>
</tr>
</table>

---

### 🖼️ Assets Inventory

#### Icons (5 files)
```
assets/icons/
├── instagram.png    (374 KB) - Instagram social link
├── location.png     (272 KB) - Address/location icon
├── mail.png         (320 KB) - Email contact icon
├── phone.png        (323 KB) - Phone contact icon
└── x.png            (363 KB) - X (Twitter) social link
```

#### Images (17 files)
```
assets/images/
├── hero.png         (2.3 MB) - Main hero banner
├── about.png        (2.3 MB) - About section image
│
└── Coffee Items (15 items):
    ├── affogato.png
    ├── americano.png
    ├── cappuccino.png
    ├── caramellatte.png
    ├── coldbrew.png
    ├── espresso.png
    ├── frenchpress.png
    ├── hazelnutlatte.png
    ├── irishcoffee.png
    ├── latte.png
    ├── macchiato.png
    ├── matchalatte.png
    ├── mochaccino.png
    ├── pumpkinspicelatte.png
    └── vanillalatte.png
```

---

## 📊 Project Statistics

| Category | Count | Total Size |
|----------|-------|------------|
| HTML Files | 3 | ~18 KB |
| CSS Files | 3 | ~18 KB |
| JavaScript Files | 3 | ~18 KB |
| Icons | 5 | ~1.6 MB |
| Coffee Images | 15 | ~1.2 MB |
| Other Images | 2 | ~4.6 MB |
| **Total Files** | **31** | **~7.5 MB** |

---

## 🔐 Authentication & Security

### Admin Login System
```javascript
// Password-based authentication
// Stored securely in LocalStorage
// Session management implemented
// Logout clears session data
```

**Security Features:**
- 🔒 Password-protected admin access
- 🚪 Session-based authentication
- 🔐 Secure logout functionality
- 🛡️ Client-side validation

---

## 📊 Dashboard Analytics

The admin dashboard provides comprehensive insights:

| Metric | Description |
|--------|-------------|
| 📋 **Menu Items** | Total number of coffee items in catalog |
| 📝 **Content Updates** | Recent changes and modifications |
| 👥 **Monthly Visitors** | Visitor count and traffic analytics |
| ⭐ **Average Rating** | Calculated from customer feedback |
| 📅 **Booking Stats** | Table reservation statistics |

---

## 🔮 Future Enhancements

### Planned Features

#### Phase 1: Payment Integration
- 💳 Online payment gateway integration
- 💰 Multiple payment options (UPI, Cards, Wallets)
- 🧾 Digital invoice generation

#### Phase 2: Communication
- 📧 Email confirmation for bookings
- 📱 SMS notifications for customers
- 🔔 Push notifications support

#### Phase 3: Advanced Features
- 📜 Order history tracking
- 👥 Multi-admin role management
- 📊 Advanced analytics dashboard
- 🎟️ Loyalty program integration

#### Phase 4: Scalability
- ☁️ Cloud database migration
- 🔄 Real-time synchronization
- 🌐 Multi-location support
- 📱 Native mobile app development

---

## 🎯 Learning Outcomes

This project demonstrates proficiency in:

✅ **Frontend Development**: HTML, CSS, JavaScript ES6+  
✅ **DOM Manipulation**: Dynamic content updates  
✅ **LocalStorage API**: Client-side data management  
✅ **CRUD Operations**: Create, Read, Update, Delete functionality  
✅ **API Integration**: WhatsApp messaging integration  
✅ **Authentication**: Secure login implementation  
✅ **Responsive Design**: Mobile-first approach  
✅ **User Experience**: Intuitive interface design  

---

## 🏆 Internship Details

| Detail | Information |
|--------|-------------|
| 🎓 **Program** | Future Interns – Full Stack Web Development |
| 📝 **Task Number** | Task 3 |
| 💼 **Project Name** | Urban Brew Cafe – Management Website |
| 🛠️ **Technologies** | JavaScript + LocalStorage + WhatsApp Integration |
| 👨‍💻 **Developer** | [Your Name] |
| 📅 **Completion Date** | [Date] |

---

## 🐛 Troubleshooting

### Common Issues

**Issue 1: WhatsApp link not opening**
```
Solution: Ensure WhatsApp is installed on device
Alternative: WhatsApp Web will open if desktop app not available
```

**Issue 2: Data not persisting**
```
Solution: Check if browser allows LocalStorage
Verify: Browser cookies/storage not disabled
Clear cache and reload page
```

**Issue 3: Admin login not working**
```
Solution: Check if correct password is entered
Verify: JavaScript is enabled in browser
Clear LocalStorage and reset admin credentials
```

---

## 📝 Code Architecture

### script.js - Customer Side Operations
```javascript
// Table Booking Function
function bookTable(name, date, time, guests) {
  const booking = {
    id: Date.now(),
    name: name,
    date: date,
    time: time,
    guests: guests,
    status: 'pending'
  };
  
  // Save to LocalStorage
  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  bookings.push(booking);
  localStorage.setItem('bookings', JSON.stringify(bookings));
  
  // Open WhatsApp with pre-filled message for customer to send to cafe
  openWhatsAppMessage(booking);
  
  return booking;
}

// WhatsApp Integration - Customer sends message to Café Owner
function openWhatsAppMessage(booking) {
  const message = `🔔 New Table Booking Request
  
👤 Customer Name: ${booking.name}
📅 Date: ${booking.date}
🕒 Time: ${booking.time}
👥 Number of Guests: ${booking.guests}

Please confirm my booking. Thank you!`;

  const cafePhoneNumber = '919876543210'; // Café owner's WhatsApp number
  const whatsappURL = `https://wa.me/${cafePhoneNumber}?text=${encodeURIComponent(message)}`;
  
  // Opens WhatsApp with pre-filled message
  // Customer clicks send to notify café owner
  window.open(whatsappURL, '_blank');
}

// Order Coffee (Only after booking)
function orderCoffee(itemId) {
  const hasBooking = checkBookingStatus();
  
  if (!hasBooking) {
    alert('⚠️ Please book a table first before ordering!');
    return false;
  }
  
  // Process order
  const order = {
    itemId: itemId,
    timestamp: Date.now(),
    status: 'pending'
  };
  
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
  
  alert('✅ Order placed successfully!');
  return true;
}

// Check if customer has made a booking
function checkBookingStatus() {
  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  return bookings.length > 0;
}

// Submit Customer Rating
function submitRating(rating, comment) {
  const ratingData = {
    rating: rating,
    comment: comment,
    timestamp: Date.now()
  };
  
  const ratings = JSON.parse(localStorage.getItem('ratings')) || [];
  ratings.push(ratingData);
  localStorage.setItem('ratings', JSON.stringify(ratings));
  
  updateAverageRating();
  alert('⭐ Thank you for your feedback!');
}

// Display Menu Items from LocalStorage
function displayMenu() {
  const menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
  const menuContainer = document.getElementById('menu-container');
  
  if (menuItems.length === 0) {
    menuContainer.innerHTML = '<p>No menu items available. Please check back later.</p>';
    return;
  }
  
  menuContainer.innerHTML = menuItems.map(item => `
    <div class="menu-card">
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p class="price">₹${item.price}</p>
      <button onclick="orderCoffee('${item.id}')">Order Now</button>
    </div>
  `).join('');
}

// Calculate average rating for display
function updateAverageRating() {
  const ratings = JSON.parse(localStorage.getItem('ratings')) || [];
  
  if (ratings.length === 0) {
    return 0;
  }
  
  const sum = ratings.reduce((acc, curr) => acc + parseInt(curr.rating), 0);
  const average = (sum / ratings.length).toFixed(1);
  
  localStorage.setItem('averageRating', average);
  return average;
}
```

### admin.js - Admin Panel Operations
```javascript
// Add Menu Item
function addMenuItem() {
  const name = document.getElementById('item-name').value;
  const description = document.getElementById('item-description').value;
  const price = document.getElementById('item-price').value;
  
  const newItem = {
    id: Date.now(),
    name: name,
    description: description,
    price: price,
    createdAt: new Date().toISOString()
  };
  
  const menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
  menuItems.push(newItem);
  localStorage.setItem('menuItems', JSON.stringify(menuItems));
  
  displayMenuInAdmin();
  clearForm();
}

// Edit Menu Item
function editMenuItem(id) {
  const menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
  const item = menuItems.find(item => item.id === id);
  
  if (item) {
    document.getElementById('item-name').value = item.name;
    document.getElementById('item-description').value = item.description;
    document.getElementById('item-price').value = item.price;
    document.getElementById('edit-id').value = id;
  }
}

// Update Menu Item
function updateMenuItem(id) {
  const menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
  const index = menuItems.findIndex(item => item.id === id);
  
  if (index !== -1) {
    menuItems[index] = {
      ...menuItems[index],
      name: document.getElementById('item-name').value,
      description: document.getElementById('item-description').value,
      price: document.getElementById('item-price').value,
      updatedAt: new Date().toISOString()
    };
    
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
    displayMenuInAdmin();
  }
}

// Delete Menu Item
function deleteMenuItem(id) {
  if (confirm('Are you sure you want to delete this item?')) {
    let menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
    menuItems = menuItems.filter(item => item.id !== id);
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
    displayMenuInAdmin();
  }
}

// Calculate Dashboard Analytics
function calculateAnalytics() {
  const menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
  const ratings = JSON.parse(localStorage.getItem('ratings')) || [];
  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  
  // Calculate average rating
  const avgRating = ratings.length > 0
    ? (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1)
    : 0;
  
  // Display statistics
  document.getElementById('total-menu').textContent = menuItems.length;
  document.getElementById('total-bookings').textContent = bookings.length;
  document.getElementById('avg-rating').textContent = avgRating;
}

// Admin Logout
function adminLogout() {
  localStorage.removeItem('adminSession');
  window.location.href = 'login.html';
}
```

### login.js - Authentication System
```javascript
// Admin Login Validation
function validateLogin(event) {
  event.preventDefault();
  
  const enteredPassword = document.getElementById('admin-password').value;
  const correctPassword = 'admin123'; // In production, use secure hashing
  
  if (enteredPassword === correctPassword) {
    // Create admin session
    const session = {
      loggedIn: true,
      loginTime: Date.now(),
      expiresIn: 3600000 // 1 hour in milliseconds
    };
    
    localStorage.setItem('adminSession', JSON.stringify(session));
    
    // Redirect to admin dashboard
    window.location.href = 'admin.html';
  } else {
    // Show error message
    document.getElementById('error-message').textContent = 'Invalid password!';
    document.getElementById('admin-password').value = '';
  }
}

// Check if admin is logged in
function checkAdminSession() {
  const session = JSON.parse(localStorage.getItem('adminSession'));
  
  if (!session || !session.loggedIn) {
    window.location.href = 'login.html';
    return false;
  }
  
  // Check if session expired
  const currentTime = Date.now();
  if (currentTime - session.loginTime > session.expiresIn) {
    localStorage.removeItem('adminSession');
    alert('Session expired. Please login again.');
    window.location.href = 'login.html';
    return false;
  }
  
  return true;
}

// Initialize login page
window.onload = function() {
  document.getElementById('login-form').addEventListener('submit', validateLogin);
};
```

---

## 🤝 Contributing

This is an internship project. For suggestions or improvements, please contact:
- **Email**: devanshtiwari817@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/yo-soy-dev
- **GitHub**: https://github.com/yo-soy-dev

---

## 📄 License

This project is developed as part of an internship program at **Future Interns**.  
**For educational purposes only.**

---

## 🙏 Acknowledgments

- **Future Interns** - For providing the internship opportunity
- **Urban Brew Cafe** - Concept and project inspiration
- **Open Source Community** - For JavaScript resources and documentation

---

<div align="center">

### ☕ Built with passion for Urban Brew Cafe

**Developed by Devansh Kumar Tiwari**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourprofile)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://yourportfolio.com)

---

⭐ If you found this project helpful, please consider giving it a star!

</div>
