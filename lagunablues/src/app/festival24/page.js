"use client";
export default function FestivalPoster({ children }) {
    return (
        <div className="p-0 h-[600px] bg-cover bg-[linear-gradient(to_right_bottom,rgba(0,0,0,1),rgba(0,0,0,0)),url('/foto/fest_bg.png')]">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-center text-4xl md:text-6xl text-laguna-red">LagunaBlues <span className="text-laguna-yellow">Festival 2024</span></h1>
                <h2 className="text-center text-2xl md:text-4xl text-laguna-yellow">We Wish <span className="text-laguna-red">You Were Here</span></h2>
                <div className="mt-8 flex justify-between flex-grow space-x-8">
                    {["August 14", "August 15", "August 16", "August 17", "August 18"].map( (item, index) => (
                        <div key={index} className="w-full border-grey-800 shadow-md shadow-gray-600 h-[100px]">
                        <h3 className="text-center text-xl md:text-2xl">{item}</h3>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}