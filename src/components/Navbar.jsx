import { Menu, X } from "lucide-react";
import {useState} from "react";

export default function Navbar(){

    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);


    return(
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-cyan-100/20 backdrop-blur-sm"
    >
    <div className= "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
      

{/*logo and title of the website */}
         <div className="flex items-center space-x-1 group cursor-pointer">
                <img src="logo.png" 
                    alt="Megs Therapy Logo" 
                    className="w-6 h-6 sm:h-8 sm:w-8"
                />  
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
                <span className="text-amber-800">Meg's</span>
                <span className="text-green-800">Therapy</span>
            </span>
            </div>
           
           
            {/*Nav links */}

            <div className= "hidden md:flex items-center space-x-6 lg:space-x-8">
                <a
                 href = "#about" className="text-green-800 hover:text-yellow-600 text-sm lg:text-base">
                     About
                 </a>
                 <a
                 href = "#contact" className="text-green-800 hover:text-yellow-600 text-sm lg:text-base">
                     Contact
                 </a>
                 <a
                 href = "#services" className="text-green-800 hover:text-yellow-600 text-sm lg:text-base">
                     Services
                 </a>
                 <a
                 href = "#book" className="text-green-800 hover:text-yellow-600 text-sm lg:text-base">
                     Book
                 </a>
            </div>

            <button className = "md:hidden p-2 text-green-800 hover:text-yellow-600"
             onClick={() => setMobileMenuIsOpen((prev) => !prev)}
             >

                {mobileMenuIsOpen ? (
                    <X className= "w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                <Menu className= "w-5 h-5 sm:w-6 sm:h-6"/> 
                )}
            </button>
        </div>
    </div>


{/*Mobile menu */}
    {mobileMenuIsOpen && 
         <div className="md:hidden bg-amber-600/20 backdrop-blur-lg border-t border-amber-600/20 animate-in slide-in-from-top duration-300">
            <div className= "px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                <a
                    href = "#about" 
                     onClick={() => setMobileMenuIsOpen(false)}
                    className="block text-green-800 hover:text-yellow-600 text-sm lg:text-base">
                        About
                    </a>
                <a
                    href = "#contact" 
                    onClick={() => setMobileMenuIsOpen(false)}
                    className="block text-green-800 hover:text-yellow-600 text-sm lg:text-base">
                        Contact
                    </a>
                <a
                    href = "#services" 
                    onClick={() => setMobileMenuIsOpen(false)}
                    className="block text-green-800 hover:text-yellow-600 text-sm lg:text-base">
                        Services
                    </a>
                <a
                    href = "#book" 
                    onClick={() => setMobileMenuIsOpen(false)}
                    className="block text-green-800 hover:text-yellow-600 text-sm lg:text-base">
                        Book
                    </a>
            </div>
        </div>
    }


    </nav>
    );
}