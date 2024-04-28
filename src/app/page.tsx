'use client'
import Navbar from './components/Navbar'
import Charts from './components/Charts'
import { useTheme } from "./hooks/useTheme"
import Sidebar from './components/Sidebar';

export default function Home() {
  const { theme } = useTheme();
  return (
    <>
    <div className={`flex  ${theme === 'dark' ? 'bg-charcoal' : 
  'bg-pavlova'}`}>
    
    <main className={`flex-grow relative ${theme === 'dark' ? 'bg-charcoal' : 
  'bg-pavlova'}`}>
          <Navbar />
          <Charts/>
    </main>
    </div>
    </>
  );
}
