import { NextResponse } from 'next/server';
import { getDoc, updateDoc } from 'firebase/firestore';
import { housesDoc } from '@/lib/firebaseConfig';

export async function GET() {
	const houses = await getDoc(housesDoc);

	if(!houses.exists()) {
		throw new Error('Error while loading Hogwarts tournament points');
	}
  
	const {gryffondor, slytherin} = houses.data();
  
	return NextResponse.json({
		gryffondor: gryffondor || 0,
		slytherin: slytherin || 0,
	});
}

export async function POST(req: Request) {
	const { house, points } = await req.json();

	const houses = await getDoc(housesDoc);

	if(!houses.exists()) {
		throw new Error('House doesn\'t exist');
	}

	try {
		const currentPoints = houses.data()[house];
		await updateDoc(housesDoc, { [house]: currentPoints + points });
	} catch (error) {
		throw new Error(`Error while adding points: ${error}`)
	}

	return NextResponse.json({ success: true });
}
