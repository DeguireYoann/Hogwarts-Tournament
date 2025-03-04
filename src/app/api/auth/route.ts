import admin from "firebase-admin";
import { NextResponse } from "next/server";

const serviceAccount = JSON.parse(process.env.AUTH_CONFIG_JSON as string);
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
}


export async function POST(req: Request) {
    console.log(serviceAccount);
  const { token } = await req.json();

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    console.log(decodedToken);

    return NextResponse.json({ isAdmin: decodedToken.admin === true });
  } catch (error) {
    console.error("Error while reading auth token", error);
    return NextResponse.json({ isAdmin: false }, { status: 401 });
  }
}
