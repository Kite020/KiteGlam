import {
    useEffect,
    useState
  } from 'react';
  
  import {
    collection,
    onSnapshot
  } from 'firebase/firestore';
  
  import { db }
    from './Firebase';
  
  const useProducts = () => {
  
    const [products, setProducts] =
      useState([]);
  
    useEffect(() => {
  
      const unsubscribe =
        onSnapshot(
          collection(db, 'products'),
          (snapshot) => {
  
            const fetchedProducts =
              snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
              }));
  
            setProducts(
              fetchedProducts
            );
          }
        );
  
      return () => unsubscribe();
  
    }, []);
  
    return products;
  };
  
  export default useProducts;