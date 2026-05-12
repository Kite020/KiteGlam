import {
    collection,
    getDocs,
    updateDoc,
    doc
  } from 'firebase/firestore';
  
  import { db }
    from './components/Firebase';
  
  const updateStocks =
    async () => {
  
      try {
  
        const snapshot =
          await getDocs(
            collection(db, 'products')
          );
  
        for (const productDoc of snapshot.docs) {
  
          await updateDoc(
  
            doc(
              db,
              'products',
              productDoc.id
            ),
  
            {
              stock: 10
            }
          );
        }
  
        console.log(
          '✅ All product stocks updated to 10!'
        );
  
      } catch (error) {
  
        console.error(error);
      }
  };
  
  updateStocks();