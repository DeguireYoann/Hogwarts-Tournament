
import Link from 'next/link';

export default function Header() {
  return (
   <div className="flex justify-between py-4 px-6 mb-5 shadow-lg">
    <Link href="/">Accueil</Link>
    <Link href="/points">Points</Link>
   </div>
  );
}
