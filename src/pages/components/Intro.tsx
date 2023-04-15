import React from "react"
import galsenify from 'galsenify'

const Intro = () => {

    // Get all data about Senegal.
    const senegal = galsenify.sn();

    console.log(galsenify.sn());

    return (
        <section className="py-14 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            {senegal.map((sn, index) => (
                <div key={index} className="max-w-3xl mx-auto">
                    <figure>
                        <blockquote>
                            <p className="text-gray-800 text-xl text-center font-semibold sm:text-2xl">
                                “{sn.pays} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.“
                            </p>
                        </blockquote>
                        <div className="flex justify-center items-center gap-x-4 mt-6">
                            <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-16 h-16" />
                            <div>
                                <span className="block text-gray-800 font-semibold">Martin escobar</span>
                                <span className="block text-gray-600 text-sm mt-0.5">Founder of meta</span>
                            </div>
                        </div>
                    </figure>
                </div>
                ))}
            </div>
        </section>
    )
}

export default Intro
