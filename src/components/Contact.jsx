import { FaUser, FaEnvelope, FaCommentDots, FaPhone, FaHeadset } from "react-icons/fa";

export default function Contact(){

   
     return(
        <div className="lg:p-12 p-3 lg:m-12 flex flex-col lg:flex-row items-start gap-3 lg:gap-12">
            <div className= "flex flex-col items-start justify-start gap-3">
                <h4 className = "text--[#6B8E6E] font-bold">Don't be shy to say hello!</h4>
                <h1 className = "text-3xl lg:text-4xl font-bold text-green-800">
                    Contact <span className = "text-green-800">Us</span>{" "}
                </h1>
                <p className= "text-green-700 text-md lg:text-lg">
                    We have many ways to help you. Contact us today!
                </p>
                <img src ="/email.png" alt = "email icon" className= "w-50 mt-3 lg:mt-9"/>
            </div>
                <form action = "#" className= "flex flex-col gap-4 bg-[#F5F1E8] shadow-xl p-3 lg:p-6 rounded-xl lg:w-auto w-full">
                <div className= "flex items-start gap-4 flex-col lg:flex-row">
                    <div className= "flex items-center gap-3 border-2 border-[#8FA98F] p-3 rounded-md w-full lg:w-auto">
                        <FaUser className= "text-[#6B8E6E]"/>
                        <input
                            type="text"
                            className= "outline-none border-none text-green-800 bg-transparent" 
                            placeholder="First Name"
                            />
                    </div>
                    <div className= "flex items-center gap-3 border-2 border-[#8FA98F] p-3 rounded-md w-full lg:w-auto">
                        <FaUser className= "text-[#6B8E6E]"/>
                        <input
                            type="text"
                            className= "outline-none border-none text-green-800 bg-transparent" 
                            placeholder="Last Name"
                            />
                    </div>
                </div>
                <div className= "flex items-center gap-3 border-2 border-[#8FA98F] p-3 rounded-md">
                    <FaEnvelope className= "text-[#6B8E6E]"/>
                    <input 
                    type="email" 
                    className= "outline-none border-none text-green-800 bg-transparent w-full" 
                    placeholder="Email"/>
                </div>
                <div className= "flex items-center gap-3 border-2 border-[#8FA98F] p-3 rounded-md">
                    <FaPhone className= "text-[#6B8E6E]"/>
                    <input 
                    type="text" 
                    className= "outline-none border-none text-green-800 bg-transparent w-full" 
                    placeholder="Phone"/>
                </div>

                <div className= "flex items-center gap-3 border-2 border-[#8FA98F] p-3 rounded-md">
                    <FaHeadset className= "text-[#6B8E6E]"/>
                    <input 
                    type="text" 
                    className= "outline-none border-none text-green-800 bg-transparent w-full" 
                    placeholder="Preferred Contact Method"/>
                </div>
                <div className= "flex items-center gap-3 border-2 border-[#8FA98F] p-3 rounded-md">
                    <FaCommentDots className= "text-[#6B8E6E]"/>
                    <textarea className= "outline-none border-none text-green-800 bg-transparent w-full" 
                            placeholder="About You"/>
                </div>
                <button className= "flex items-center justify-center gap-3.5 py-3 bg-amber-50 border-[#8FA98F] font-bold rounded-md hover:bg-amber-800 hover:text-white transition-all duration-300">
                    <span>Submit</span>
                </button>
             </form>
        </div>
    );
 };
