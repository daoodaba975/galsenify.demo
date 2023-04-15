const Hero = () => {    
    return (
        <section className="relative py-28 bg-baseColor">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-green-200 font-semibold pb-6">Galsenify</h3>
                    <figure>
                        <blockquote>
                            <p className="text-white text-3xl font-semibold sm:text-4xl">
                                Un projet demo pour vous présenter l&apos;utilisation du package <span className="underline underline-offset-3 decoration-8 decoration-white dark:decoration-white">Galsenify</span>.
                            </p>
                        </blockquote>
                    </figure>
                </div>
            </div>
            <div className="absolute top-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(52, 117, 113, 0.76) 50%, rgba(65, 147, 140, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)" }}></div>
        </section>
    )
}

export default Hero
