const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // Your Firebase Admin Key JSON file
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

const jsonData = require("./data.json"); // Your JSON file

async function uploadData() {
  const messagesRef = db.collection("messages");
  for (let data of jsonData.messages) {
    await messagesRef.add(data);
  }
  console.log("Data successfully uploaded!");
}

uploadData();
