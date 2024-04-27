'use client'
import Image from 'next/image';
import  {useTheme} from '../hooks/useTheme';


const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className="flex justify-between items-center px-4 py-2">
        <div className="flex-grow">
          <input
            type="text"
            className="w-3/4 bg-gray-700 text-gray-200 px-4 py-2 rounded-md"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center">

          <button className='bg-pavlovaLight p-4 rounded-3xl shadow' onClick={toggleTheme} >
            <Image src={theme == 'light' ? 'toDarkMode.svg' : 'toLightMode.svg'} width={15} height={15} alt="theme" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;