import galsenify from 'galsenify'

const Table = () => {

    // Get all regions data.
    const regions = galsenify.rg();

    return (
        <section className="py-12 mx-auto px-4 md:px-8 bg-white">
            <div className="max-w-lg">
                <p className="text-gray-600 mt-2">
                    Exemple d'utilisation dans un tableau, pour afficher les regions (nom, code, nombre d'habitant et la superficie).
                </p>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Regions</th>
                            <th className="py-3 px-6">Code</th>
                            <th className="py-3 px-6">Habitants</th>
                            <th className="py-3 px-6">Superficie</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            regions.map(rg =>
                                <tr key={rg}>
                                    <td className="px-6 py-4 whitespace-nowrap">{rg.region}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{rg.code}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{rg.population} habitants</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{rg.superficie} km2</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Table