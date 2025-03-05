import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json' assert { type: 'json' };

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();

const uid = process.argv[2];

if (!uid) {
	console.error('Missing UID in parameters');
	process.exit(1);
}

async function setAdminRole(uid) {
	try {
		await auth.setCustomUserClaims(uid, { admin: true });
		console.log('User is now admin');
	} catch (error) {
		console.error('Error:', error);
	}
}

setAdminRole(uid);
