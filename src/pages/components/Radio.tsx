import galsenify from 'galsenify'

const Radio = () => {

    // Get departments by region.
    const departement = galsenify.departments("thies");
    
    return (
        <section className="py-12 mx-auto px-4 md:px-8 bg-white">
            <div className="max-w-lg">
                <p className="text-gray-600 mt-2">
                    Exemple d&apos;utilisation dans un radio, pour récuper les départements d&apos;une région.
                </p>
                <div className="max-w-xs mt-8">
                    <fieldset>
                        <legend className="sr-only">Countries</legend>
                        {departement.map((nom, index) => (
                            // eslint-disable-next-line react/jsx-key
                            <div className="flex items-center mb-4">
                                <><input key={index} value={nom} id="departements" type="radio" name="departements" className="w-4 h-4 border-gray-300" />
                                <label className="block ml-2 text-sm font-medium text-gray-900">
                                    {nom}
                                </label></>
                            </div>
                        ))}
                    </fieldset>
                </div>
            </div>
        </section>
    )
}

export default Radio
