import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-color p-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img 
            src="/marmina/476346859_3556676714635511_6786479794163990618_n.jpg" 
            alt="hospital logo" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-white font-bold text-xl">hospital</span>
        </Link>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
