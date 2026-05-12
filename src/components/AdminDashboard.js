import React, {
    useEffect,
    useState
  } from 'react';
  
  import './AdminDashboard.css';
  import { toast } from 'react-toastify';
  
  import {
    collection,
    onSnapshot,
    doc,
    updateDoc,
    addDoc,
    deleteDoc
  } from 'firebase/firestore';


  
  import { db } from './Firebase';
  
  import useProducts from './useProducts';
  
  const AdminDashboard = () => {
  
    const [orders, setOrders] =
      useState([]);
      const [name, setName] =
      useState('');
    
    const [price, setPrice] =
      useState('');
    
    const [image, setImage] =
      useState('');
    
    const [category, setCategory] =
      useState('');
    
    const [page, setPage] =
      useState('');
    
    const [description, setDescription] =
      useState('');
    const [stock, setStock] =
      useState('');

    const products =
      useProducts();
  
    useEffect(() => {
  
      const unsubscribe =
        onSnapshot(
          collection(db, 'orders'),
          (snapshot) => {
  
            const fetchedOrders =
              snapshot.docs
                .map(doc => ({
                  id: doc.id,
                  ...doc.data()
                }))
                .sort(
                  (a, b) =>
                    b.createdAt?.seconds -
                    a.createdAt?.seconds
                );
  
            setOrders(fetchedOrders);
          }
        );
  
      return () => unsubscribe();
  
    }, []);

    const [activeSection, setActiveSection] =
      useState('overview');
    
    const [productSearch, setProductSearch] =
      useState('');
    
    const [selectedPage, setSelectedPage] =
      useState('All');

    const [editingProductId,
      setEditingProductId] =
      useState(null);

      const filteredProducts =
      products.filter(product => {
    
        const matchesSearch =
          product.name
            .toLowerCase()
            .includes(
              productSearch.toLowerCase()
            );
    
        const matchesPage =
          selectedPage === 'All'
            ? true
            : product.page ===
              selectedPage;
    
        return (
          matchesSearch &&
          matchesPage
        );
    });
  
    // ✅ Total revenue
    const totalRevenue =
      orders.reduce(
        (sum, order) =>
          sum +
          (order.totalPrice || 0),
        0
      )
      .toFixed(2);
  
    // ✅ Total products sold
    const totalProductsSold =
      orders.reduce(
        (sum, order) =>

          sum +

          order.items.reduce(

            (itemSum, item) =>

              itemSum +
              (item.quantity || 1),

            0
          ),

        0
      );

      const updateOrderStatus =
      async (
        orderId,
        newStatus
      ) => {
    
        try {
    
          const orderRef =
            doc(
              db,
              'orders',
              orderId
            );
    
          await updateDoc(
            orderRef,
            {
              status: newStatus
            }
          );
    
        } catch (error) {
    
          console.error(error);
        }
    };
    const handleAddProduct =
      async () => {

        try {

          if (
            !name ||
            !price ||
            !image ||
            !category ||
            !page
          ) {

            toast.error(
              'Please fill all required fields.'
            );

            return;
          }

          if (editingProductId) {

            await updateDoc(
          
              doc(
                db,
                'products',
                editingProductId
              ),
          
              {
          
                name,
          
                price,
          
                image,
          
                category,
          
                page,
          
                description,

                stock:
                  Number(stock),
              }
            );
          
            toast.success(
              '✏️ Product updated!'
            );
            
            setActiveSection(
              'manageProducts'
            );
          
          } else {
          
            await addDoc(
              collection(db, 'products'),
              {
          
                name,
          
                price,
          
                image,
          
                category,
          
                page,
          
                description,

                stock:
                  Number(stock),
          
                createdAt:
                  new Date(),
          
                inStock: true
              }
            );
          
            toast.success(
              '✅ Product added successfully!'
            );
          }

          // Reset form
          setName('');
          setPrice('');
          setImage('');
          setCategory('');
          setPage('');
          setDescription('');
          setStock('');
          setEditingProductId(null);

        } catch (error) {

          console.error(error);

          toast.error(
            '❌ Failed to save product.'
          );
        }
    };

    const handleDeleteProduct =
      async (productId) => {

        const confirmDelete =
          window.confirm(
            'Are you sure you want to delete this product?'
          );

        if (!confirmDelete) {
          return;
        }

        try {

          await deleteDoc(
            doc(
              db,
              'products',
              productId
            )
          );

          toast.success(
            '🗑️ Product deleted successfully!'
          );

        } catch (error) {

          console.error(error);

          toast.error(
            '❌ Failed to delete product.'
          );
        }
    };

    const totalInventory =
      products.reduce(

        (sum, product) =>

          sum +
          (product.stock || 0),

        0
      );

      
  
    return (

      <div className="admin-layout">
    
        {/* SIDEBAR */}
        <div className="admin-sidebar">
    
          <h2>
            Admin Panel
          </h2>
    
          <button
            className={
              activeSection === 'overview'
                ? 'active-sidebar-btn'
                : ''
            }
            onClick={() =>
              setActiveSection('overview')
            }
          >
            📊 Overview
          </button>
    
          <button
            className={
              activeSection === 'products'
                ? 'active-sidebar-btn'
                : ''
            }
            onClick={() =>
              setActiveSection('products')
            }
          >
            ➕ Add Products
          </button>
    
          <button
            className={
              activeSection === 'orders'
                ? 'active-sidebar-btn'
                : ''
            }
            onClick={() =>
              setActiveSection('orders')
            }
          >
            📦 Manage Orders
          </button>

          <button
            className={
              activeSection === 'manageProducts'
                ? 'active-sidebar-btn'
                : ''
            }
            onClick={() =>
              setActiveSection(
                'manageProducts'
              )
            }
          >
            🛍️ Manage Products
          </button>
    
        </div>
    
        {/* MAIN CONTENT */}
        <div className="admin-main-content">
    
          <h1>
            📊 Admin Dashboard
          </h1>
    
          {/* OVERVIEW */}
          {activeSection === 'overview' && (
    
            <div className="admin-cards">
    
              <div className="admin-card">
    
                <h3>
                  Total Orders
                </h3>
    
                <p>
                  {orders.length}
                </p>
    
              </div>
    
              <div className="admin-card">
    
                <h3>
                  Total Revenue
                </h3>
    
                <p>
                  ₹{totalRevenue}
                </p>
    
              </div>
    
              <div className="admin-card">
    
                <h3>
                  Products
                </h3>
    
                <p>
                {totalInventory}
                </p>
    
              </div>
    
              <div className="admin-card">
    
                <h3>
                  Products Sold
                </h3>
    
                <p>
                  {totalProductsSold}
                </p>
    
              </div>

              
    
            </div>
          )}
    
          {/* ADD PRODUCTS */}
          {activeSection === 'products' && (
    
            <div className="add-product-section">
    
              <h2>
                ➕ Add Product
              </h2>
    
              <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />
    
              <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value)
                }
              />
    
              <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) =>
                  setImage(e.target.value)
                }
              />
    
              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
              />
    
              <select
                value={page}
                onChange={(e) =>
                  setPage(e.target.value)
                }
              >

                <option value="">
                  Select Page
                </option>

                <option value="Beauty">
                  Beauty
                </option>

                <option value="Women">
                  Fashion
                </option>

                <option value="Footwears">
                  Footwear
                </option>

                <option value="Watch">
                  Watches
                </option>

                <option value="Bag">
                  Bags
                </option>

                <option value="Accessories">
                  Accessories
                </option>

                <option value="Jewels">
                  Jewel
                </option>

              </select>
    
              <input
                type="number"
                placeholder="Stock Quantity"
                value={stock}
                onChange={(e) =>
                  setStock(e.target.value)
                }
              />

              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
              />
    
              <button
                onClick={handleAddProduct}
              >
                {editingProductId
                  ? 'Update Product'
                  : 'Add Product'}
              </button>
    
            </div>
          )}

          {/* MANAGE PRODUCTS */}
          {activeSection === 'manageProducts' && (

          <div className="manage-products-section">

            <h2>
              🛍️ Manage Products
            </h2>

            <div className="manage-products-top">

              <input
                type="text"
                placeholder="Search products..."
                value={productSearch}
                onChange={(e) =>
                  setProductSearch(
                    e.target.value
                  )
                }
              />

              <select
                value={selectedPage}
                onChange={(e) =>
                  setSelectedPage(
                    e.target.value
                  )
                }
              >

                <option value="All">
                  All Pages
                </option>

                <option value="Beauty">
                  Beauty
                </option>

                <option value="Women">
                  Fashion
                </option>

                <option value="Footwears">
                  Footwears
                </option>

                <option value="Watch">
                  Watch
                </option>

                <option value="Bag">
                  Bag
                </option>

                <option value="Accessories">
                  Accessories
                </option>

                <option value="Jewels">
                  Jewels
                </option>

              </select>

            </div>

            <div className="manage-products-grid">

              {filteredProducts.map(product => (

                <div
                  key={product.id}
                  className="manage-product-card"
                >

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <h4>
                    {product.name}
                  </h4>

                  <p>
                    {product.price}
                  </p>

                  <p>
                    {product.category}
                  </p>
                  <p>
                    Stock:
                    {product.stock || 0}
                  </p>

                  <button
                    className="edit-product-btn"

                    onClick={() => {

                      setActiveSection(
                        'products'
                      );
                    
                      setEditingProductId(
                        product.id
                      );
                    
                      setName(product.name);
                    
                      setPrice(product.price);
                    
                      setImage(product.image);
                    
                      setCategory(
                        product.category
                      );
                    
                      setPage(product.page);
                    
                      setDescription(
                        product.description
                      );
                      setStock(product.stock || 0);
                    }}
                  >
                    Edit Product
                  </button>

                  <button
                    className="delete-product-btn"
                    onClick={() =>
                      handleDeleteProduct(
                        product.id
                      )
                    }
                  >
                    Delete Product
                  </button>

                </div>
              ))}

            </div>

          </div>
          )}
    
          {/* MANAGE ORDERS */}
          {activeSection === 'orders' && (
    
            <div className="admin-orders">
    
              <h2>
                📦 Manage Orders
              </h2>
    
              {orders.map(order => (
    
                <div
                  key={order.id}
                  className="admin-order-card"
                >
    
                  <p>
                    <strong>
                      Order ID:
                    </strong>
                    {' '}
                    {order.id}
                  </p>
    
                  <p>
                    <strong>
                      Total:
                    </strong>
                    {' '}
                    ₹{order.totalPrice || 'N/A'}
                  </p>
    
                  <p>
                    <strong>
                      Payment:
                    </strong>
                    {' '}
                    {order.paymentMethod || 'N/A'}
                  </p>
    
                  <p>
                    <strong>
                      Address:
                    </strong>
                    {' '}
                    {order.address || 'No address available'}
                  </p>
    
                  <select
                    value={
                      order.status ||
                      'Placed'
                    }
    
                    onChange={(e) =>
                      updateOrderStatus(
                        order.id,
                        e.target.value
                      )
                    }
                  >
    
                    <option>
                      Placed
                    </option>
    
                    <option>
                      Packed
                    </option>
    
                    <option>
                      Shipped
                    </option>
    
                    <option>
                      Out for Delivery
                    </option>
    
                    <option>
                      Delivered
                    </option>
    
                  </select>
    
                </div>
              ))}
    
            </div>
          )}
    
        </div>
    
      </div>
    );
  };
  
  export default AdminDashboard;