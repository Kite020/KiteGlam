import React, {
  useEffect,
  useState
} from 'react';

import {
  useNavigate,
  useParams
} from 'react-router-dom';

import './ProductDetailsPage.css';

import { toast }
  from 'react-toastify';

import useProducts
  from './useProducts';

import {
  db,
  auth
} from './Firebase';

import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  Timestamp
} from 'firebase/firestore';

const ProductDetailsPage = ({
  cart,
  setCart,
  wishlist,
  setWishlist
}) => {

  const navigate =
    useNavigate();

  const { id } =
    useParams();

  const firebaseProducts =
    useProducts();

  const product =
    firebaseProducts.find(
      item =>
        String(item.id) ===
        String(id)
    );


  // ✅ Review states
  const [reviews, setReviews] =
    useState([]);

  const [rating, setRating] =
    useState(5);

  const [comment, setComment] =
    useState('');

  

  // ✅ Add to cart
  const handleAddToCart = () => {

    const alreadyInCart =
      cart.some(
        item =>
          item.id === product.id
      );

    if (!alreadyInCart) {

      setCart([

        ...cart,

        {
          ...product,
          quantity: 1
        }
      ]);

      toast.success(
        '🛒 Added to cart!'
      );

    } else {

      toast.info(
        'Already in cart!'
      );
    }
  };

  // ✅ Wishlist toggle
  const toggleWishlist = () => {

    

    if (isWished) {

      setWishlist(
        wishlist.filter(
          item =>
            item.id !== product.id
        )
      );

      toast.info(
        '💔 Removed from wishlist!'
      );

    } else {

      setWishlist([
        ...wishlist,
        product
      ]);

      toast.success(
        '❤️ Added to wishlist!'
      );
    }
  };


  // ✅ Fetch reviews
  useEffect(() => {

    if (!product) return;
  
    const q = query(
  
      collection(
        db,
        'reviews'
      ),
  
      where(
        'productId',
        '==',
        product?.id
      )
    );
  
    const unsubscribe =
      onSnapshot(
        q,
        (snapshot) => {
  
          const fetchedReviews =
            snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
  
          setReviews(
            fetchedReviews
          );
        }
      );
  
    return () => unsubscribe();
  
  }, [product]);

  // ✅ WAIT UNTIL PRODUCT LOADS
  if (!product) {

    return (

      <h2 className="text-center mt-5">

        Loading product...

      </h2>
    );
  }

  const isWished =
  wishlist.some(
    item =>
      item.id === product.id
  );

  // ✅ Submit review
  const handleSubmitReview =
    async () => {

      if (!auth.currentUser) {

        toast.error(
          'Please login first.'
        );

        return;
      }

      try {

        await addDoc(
          collection(
            db,
            'reviews'
          ),

          {

            productId:
              product.id,

            userName:
              auth.currentUser
                .displayName ||
              'User',

            rating,

            comment,

            createdAt:
              Timestamp.now()
          }
        );

        toast.success(
          '⭐ Review submitted!'
        );

        setComment('');

        setRating(5);

      } catch (error) {

        console.error(error);

        toast.error(
          '❌ Failed to submit review.'
        );
      }
  };

  // ✅ Average rating
  const averageRating =

    reviews.length > 0

      ? (

          reviews.reduce(

            (sum, review) =>
              sum +
              review.rating,

            0

          ) / reviews.length

        ).toFixed(1)

      : 0;

  // ✅ Related products
  const relatedProducts =

    firebaseProducts.filter(

      item =>

        item.category ===
          product.category &&

        item.id !==
          product.id
    );

  return (

    <div className="product-details-page container">

      <div className="product-details-card">

        {/* IMAGE */}
        <div className="product-image-section">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        {/* DETAILS */}
        <div className="product-info-section">

          <h2>
            {product.name}
          </h2>

          <h3>
            {product.price}
          </h3>

          <p className="product-category">

            Category:
            {' '}
            {product.category}

          </p>

          {product.stock <= 0 ? (

            <h4 className="out-of-stock">

              ❌ Out of Stock

            </h4>

          ) : (

            <h4 className="in-stock">

              ✅ In Stock:
              {' '}
              {product.stock || 0}

            </h4>
          )}

          <p className="product-description">

            {product.description}

          </p>

          {/* RATING */}
          <h4>

            ⭐ {averageRating} / 5

          </h4>

          <p>

            {reviews.length}
            {' '}
            review
            {reviews.length !== 1
              ? 's'
              : ''}

          </p>

          {/* BUTTONS */}
          <div className="product-buttons">

            <button
              className="details-cart-btn"

              disabled={
                product.stock <= 0
              }

              onClick={
                handleAddToCart
              }
            >

              {product.stock <= 0

                ? 'Out of Stock'

                : 'Add to Cart'}

            </button>

            <button
              className="details-wishlist-btn"

              onClick={
                toggleWishlist
              }
            >

              {isWished

                ? '❤️ Wishlisted'

                : '🤍 Add to Wishlist'}

            </button>

          </div>

          {/* REVIEW FORM */}
          <div className="review-section">

            <h3>
              Leave a Review
            </h3>

            <select
              value={rating}

              onChange={(e) =>

                setRating(
                  Number(
                    e.target.value
                  )
                )
              }
            >

              <option value={5}>
                5 ⭐
              </option>

              <option value={4}>
                4 ⭐
              </option>

              <option value={3}>
                3 ⭐
              </option>

              <option value={2}>
                2 ⭐
              </option>

              <option value={1}>
                1 ⭐
              </option>

            </select>

            <textarea

              placeholder="Write your review..."

              value={comment}

              onChange={(e) =>

                setComment(
                  e.target.value
                )
              }
            />

            <button
              onClick={
                handleSubmitReview
              }
            >
              Submit Review
            </button>

          </div>

          {/* REVIEWS */}
          <div className="reviews-list">

            <h3>
              User Reviews
            </h3>

            {reviews.length === 0 ? (

              <p>
                No reviews yet.
              </p>

            ) : (

              reviews.map(review => (

                <div
                  key={review.id}
                  className="single-review"
                >

                  <h5>
                    {review.userName}
                  </h5>

                  <p>
                    ⭐ {review.rating}
                  </p>

                  <p>
                    {review.comment}
                  </p>

                </div>
              ))
            )}

          </div>

        </div>

      </div>

      {/* RELATED PRODUCTS */}
      <div className="related-products">

        <h3>
          You may also like
        </h3>

        <div className="related-products-grid">

          {relatedProducts
            .slice(0, 4)
            .map(item => (

              <div

                key={item.id}

                className="related-product-card"

                onClick={() => {

                  navigate(
                    `/product/${item.id}`
                  );

                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <h5>
                  {item.name}
                </h5>

                <p>
                  {item.price}
                </p>

              </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default ProductDetailsPage;