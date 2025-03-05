'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { auth, provider, signInWithPopup, signOut } from '@/lib/firebaseConfig';
import { onAuthStateChanged, User } from 'firebase/auth';

const AuthContext = createContext<{
  user: User | null;
  isAdmin: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  	}>({
  		user: null,
  		isAdmin: false,
  		login: async () => {},
  		logout: async () => {},
  	});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [isAdmin, setIsAdmIn] = useState<boolean>(false);

	const checkIfAdmin = async () => {
		if(!user) {
			setIsAdmIn(false);
			return;
		}

		const token = await user.getIdToken(); 
		const response = await fetch('api/auth', {
			method: 'POST',
			body: JSON.stringify({ token })
		})
    
		const data = await response.json();
		setIsAdmIn(data.isAdmin);
	}

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		checkIfAdmin();
	});



	const login = async () => {
		try {
			const result = await signInWithPopup(auth, provider);
			setUser(result.user);
			checkIfAdmin();
		} catch (error) {
			console.error('Login failed:', error);
		}
	};

	const logout = async () => {
		try {
			await signOut(auth);
			setUser(null);
			setIsAdmIn(false);
		} catch (error) {
			console.error('Logout failed:', error);
		}
	};

	return (
		<AuthContext.Provider value={{ user, isAdmin, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
