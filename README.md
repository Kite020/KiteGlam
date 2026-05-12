# ✨ KiteGlam — Full Stack Ecommerce Web Application

KiteGlam is a modern full-stack ecommerce web application built using React and Firebase.  
The platform provides a complete online shopping experience with dynamic product management, authentication, inventory tracking, wishlist/cart functionality, analytics dashboard, and an admin management system.

The project was designed to simulate a real-world ecommerce platform with scalable architecture and responsive UI.

---

# 🚀 Features

## 👤 User Features

- User Authentication (Login / Signup / Logout)
- Guest Access
- Dynamic Product Listing from Firestore
- Product Details Page
- Wishlist Functionality
- Shopping Cart
- Quantity Management
- Inventory-aware Cart System
- Out-of-Stock Handling
- Product Search
- Product Reviews & Ratings
- Related Product Recommendations
- Responsive UI for Desktop & Mobile
- Order Placement System
- Order History

---

## 🛠️ Admin Features

- Protected Admin Access
- Admin Dashboard
- Add Products Dynamically
- Edit Existing Products
- Delete Products
- Manage Orders
- Inventory / Stock Management
- Automatic Stock Reduction After Purchase
- Revenue Analytics
- Units Sold Tracking
- Inventory Analytics
- Real-Time Firestore Integration

---

# 📊 Analytics Dashboard

The admin dashboard includes:

- Total Revenue
- Total Orders
- Total Inventory
- Units Sold

---

# 🧠 Advanced Functionalities

## 🔥 Dynamic Firestore Architecture
All products, reviews, and orders are fetched dynamically from Firebase Firestore.

## 📦 Inventory System
- Real-time stock tracking
- Automatic stock updates after successful purchases
- Add-to-cart disabled for out-of-stock items

## ⭐ Review System
Authenticated users can:
- submit ratings,
- write reviews,
- view dynamic average ratings.

## ❤️ Wishlist System
Users can:
- add/remove products,
- navigate directly to product detail pages from wishlist.

---

# 🛠️ Tech Stack

## Frontend
- React.js
- React Router DOM
- Bootstrap
- CSS3
- React Icons
- React Toastify

## Backend / Database
- Firebase Authentication
- Firebase Firestore
- Firebase Storage

---

# 📁 Project Structure

```bash
src/
│
├── components/
│   ├── AdminDashboard.js
│   ├── Navbar.js
│   ├── ProductDetailsPage.js
│   ├── ShoppingCart.js
│   ├── WishlistPage.js
│   ├── CheckoutPage.js
│   ├── ProfilePage.js
│   ├── Firebase.js
│   └── ...
│
├── data/
│
├── config/
│   └── admin.js
│
├── App.js
└── index.js


### 🚀 Getting Started

## 1️⃣ Clone The Repository

```
git clone https://github.com/Kite020/KiteGlam.git
cd KiteGlam
```

## 2️⃣ Install Dependencies

```
npm install
```

## 3️⃣ Start The Development Server

```
npm start
```

Visit: http://localhost:3000

## 🔐 Firebase Setup(Authentication)

-Create a Firebase project at https://firebase.google.com

-Create a .env file in your project root with the following content:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

-Don't forget to add .env to your .gitignore file!



### 👩‍💻 Author

Ankita Dash

### 📄 License

This project is licensed under the MIT License.



