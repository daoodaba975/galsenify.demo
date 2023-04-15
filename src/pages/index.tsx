import Head from 'next/head'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Table from './components/Table'
import Select from './components/Select'
import Radio from './components/Radio'
import Footer from './components/Footer'

export default function Home() {
  return (
		<>
			<Head>
				<title>Demo Galsenify</title>
				<meta
					name="description"
					content="Un projet demo pour vous présenter l'utilisation du package Galsenify."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
			<Hero />
			<Table />
			<Select />
			<Radio />
			<Footer />
		</>
	)
}
