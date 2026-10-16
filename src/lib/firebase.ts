import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY || "AIzaSyD7Kcfxy-jAtrH69MWKWR3M8ft1LDmccso",
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN || "toyotausados.firebaseapp.com",
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID || "toyotausados",
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET || "toyotausados.firebasestorage.app",
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "308604847797",
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID || "1:308604847797:web:f8e583ee15c785546ee0fc",
  measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID || "G-GVW40Q3LX2",
};

// Evitar re-inicialización en hot reload
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Especificamos el ID de la base de datos 'default' (sin paréntesis) que es el que tienes creado
export const db = getFirestore(app, 'default');
export default app;
