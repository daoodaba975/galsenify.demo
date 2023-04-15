const Select = () => {

    const galsenify = require("galsenify");

    // Get all regions.
    const regions = galsenify.regions();
    
    return (
        <section className="py-12 mx-auto px-4 md:px-8 bg-white">
            <div className="max-w-lg">
                <p className="text-gray-600 mt-2">
                    Exemple d&apos;utilisation dans un liste déroulante pour récuperer les différentes regions.
                </p>
                <div className="max-w-xs mt-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <div className="relative">
                        <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                        {regions.map((nom, index) => (
                            <option key={index} value={nom}>
                                {nom}
                            </option>
                        ))}
                        </select>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Select
