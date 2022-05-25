import { initializeApp } from 'firebase/app';
import { collection, doc, getDoc, getDocs, getFirestore, query, where, Timestamp, addDoc} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAHvHbT5xsLmreYCA6yHRUfxVyQ0Jw6mpA",
  authDomain: "proyecto-final-antokolec.firebaseapp.com",
  projectId: "proyecto-final-antokolec",
  storageBucket: "proyecto-final-antokolec.appspot.com",
  messagingSenderId: "368610850592",
  appId: "1:368610850592:web:adc84d2494e0fdd0680945"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app)

export default firestoreDB;

export async function getAll(){
    const micoleccion = collection(firestoreDB, 'clases');
    const clasesSnapshot = await getDocs(micoleccion);

    return clasesSnapshot.docs.map(doc =>{
        return {
            ...doc.data(),
            id: doc.id
        }
    });
}

export async function getItems(categoryid){
    const micoleccion = collection(firestoreDB, 'clases');
    const myQuery = query(micoleccion, where('Genero', '==', categoryid));
    
    const querySnapshot = await getDocs(myQuery);

    return querySnapshot.docs.map(doc =>{
        return {
            ...doc.data(),
            id: doc.id
        }
    });
}

export async function getItemsId(id){
    const micoleccion = collection(firestoreDB, 'clases');
    const clasesRef = doc(micoleccion, id);
    const clasesSnapshot = await getDoc(clasesRef)

    return {
        ...clasesSnapshot.data(),
        id: clasesSnapshot.id
    }
}

export async function createBuyOrder(orderData){
    const buyDate = Timestamp.now();
    const orderplusDate = {...orderData, date: buyDate};

    const micoleccion = collection(firestoreDB, "buyOrder");
    const orderDoc = await addDoc(micoleccion, orderplusDate);
    console.log('Order id: ', orderDoc.id);
 
}

export async function getAllOrders(){
    const micoleccion = collection(firestoreDB, 'buyOrder');
    const buyOrdersSnapshot = await getDocs(micoleccion);

    return buyOrdersSnapshot.docs.map(doc =>{
        return {
            ...doc.data(),
            id: doc.id
        }
    });
}