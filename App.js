import React, { useEffect } from 'react';
import './index.css';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function App() {
  useEffect(() => {
    const addTestDocument = async () => {
      try {
        const docRef = await addDoc(collection(db, "testCollection"), {
          name: "Test Document",
          description: "This is just a test document"
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    addTestDocument();
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Welcome to DiscoverX</h1>
    </div>
  );
}

export default App;
