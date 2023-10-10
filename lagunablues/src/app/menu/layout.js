export default function MenuLayout({ children }) {
    return (
        <div className="mt-8 max-w-4xl mx-auto">
            <div>
                <h1 className="text-center my-4 text-4xl md:text-6xl text-laguna-red">Me<span className="text-laguna-yellow" style={{ textShadow: "1px 1px #000000" }}>nu</span></h1>
                <div className="flex justify-center items-center">
                    {children}
                </div>
            </div>
        </div>
    );
}