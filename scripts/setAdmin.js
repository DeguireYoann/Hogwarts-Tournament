import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

// Initialisation Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();

// Récupération de l'UID depuis les arguments du terminal
const uid = process.argv[2];

if (!uid) {
  console.error("❌ Veuillez fournir un UID en argument.");
  process.exit(1);
}

async function setAdminRole(uid) {
  try {
    await auth.setCustomUserClaims(uid, { admin: true });
    console.log(`✅ L'utilisateur ${uid} a été défini comme admin.`);
  } catch (error) {
    console.error("❌ Erreur:", error);
  }
}

setAdminRole(uid);
