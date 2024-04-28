import { useTheme } from "../hooks/useTheme";


const ReadingList = () =>
{
   const { theme } = useTheme();

    return (
        
<ul className={` divide-y divide-gray  ${theme === 'dark' ? 'text-pearl' : 'text-indigoDark'}`}>
   <li className="pb-3 sm:pb-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
         <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src="female.jpg" alt="Neil image" />
         </div>
         <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              1.01 SG 20/20
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
             12.3%
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
         12min
         </div>
      </div>
   </li>
   <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
         <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src="male.png" alt="Neil image" />
         </div>
         <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            1.01 SG 20/20
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
               12.3%
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
           5min
         </div>
      </div>
   </li>
   <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
         <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src="female.jpg" alt="Neil image" />
         </div>
         <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              4.6%
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              Larger Beer
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            Yesterday
         </div>
      </div>
   </li>
   <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
         <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src="female.jpg" alt="Neil image" />
         </div>
         <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
               4.4%
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
               Larger Beer
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
           22 Sep
         </div>
      </div>
   </li>

 
</ul>

    )




}

export default ReadingList