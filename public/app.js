import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA4JNv5p297ocGoKpkpFw1hgS95c_Kls4Q",
  authDomain: "housingpanda-74c6b.firebaseapp.com",
  projectId: "housingpanda-74c6b",
  storageBucket: "housingpanda-74c6b.appspot.com",
  messagingSenderId: "546298046470",
  appId: "1:546298046470:web:913201c1c23cf7763afb87",
  measurementId: "G-RXFFBE86NP",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("listingForm");
  if (!form) return console.error("Form not found!");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const listing = {
      title: form.title.value,
      description: form.description.value,
      rent: parseFloat(form.rent.value),
      address: form.address.value,
      rooms: parseInt(form.rooms.value),
      contact: form.contactInfo.value,
    };

    console.log(listing);

    try {
      await addDoc(collection(db, "listings"), listing);
      alert("Listing submitted!");
      form.reset();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  });
});
