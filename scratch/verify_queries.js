
import { db } from './src/lib/firebase.js';
import { collection, getDocs, query, where } from 'firebase/firestore';

async function verify() {
  const snapshot = await getDocs(collection(db, 'toyotausados'));
  const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
  if (docs.length < 2) {
    console.log("Not enough documents to test.");
    return;
  }

  const d1 = docs[0];
  const d2 = docs[1];

  console.log(`Testing ID 1: ${d1.ID} (${d1.Title})`);
  console.log(`Testing ID 2: ${d2.ID} (${d2.Title})`);

  // This script runs in node, so we can't easily fetch Astro pages, 
  // but we can verify our query logic.
  
  const q1 = query(collection(db, "toyotausados"), where("ID", "==", String(d1.ID).trim()));
  const s1 = await getDocs(q1);
  console.log(`Query 1 results count: ${s1.size}`);
  if (s1.size > 0) console.log(`Result 1 Title: ${s1.docs[0].data().Title}`);

  const q2 = query(collection(db, "toyotausados"), where("ID", "==", String(d2.ID).trim()));
  const s2 = await getDocs(q2);
  console.log(`Query 2 results count: ${s2.size}`);
  if (s2.size > 0) console.log(`Result 2 Title: ${s2.docs[0].data().Title}`);
}

verify();
