import Image from 'next/legacy/image';
import Decoration from './decoration';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const handleCloseTab = () => {
    window.close(); // Closes the current tab
    window.open('http://localhost:5173/edit', '_self'); // Navigate back to the specified URL in the same tab
  };

  return (
    <header className="relative">
      <div className="absolute top-0 right-40 m-4">
        <button
          onClick={handleCloseTab}
          className="bg-gray-900 text-white px-3 py-2 rounded"
        >
         Go Back
        </button>
      </div>
      <div className="flex py-5 px-5 sm:px-16 md:px-32">
        <Image
          src="/logo.gif"
          alt="Custom_Art_System Avatar Logo"
          width={50}
          height={50}
        />
        <span className="text-lg">
          Custom 
          <br />
          Avatar 
        </span>
      </div>
      <Decoration className="absolute top-0 right-0 w-24 sm:w-28 md:w-36" />
    </header>
  );
}
