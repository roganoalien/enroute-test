import Background from '../assets/bg-image2.jpg';
import Filter from '../components/filter';
import Pagination from '../components/pagination';

function Layout({ children }) {
	return (
		<main className="bg-starBlack min-h-screen w-screen overflow-x-hidden py-20 relative">
			<section className="container mx-auto relative z-20">
				<header className="w-full">
					<h1 className="text-4xl font-bold w-full text-center text-starYellow uppercase">
						Star Wars API
					</h1>
					<p className="w-full text-center text-gray-500">
						Personajes del universo
					</p>
					<Filter />
				</header>
				<article className="w-full mt-10">{children}</article>
				<Pagination />
			</section>
			<div className="overlay fixed left-0 top-0 w-full h-full z-10 backdrop-filter backdrop-blur-md"></div>
			<img
				src={Background}
				alt="Fake Bg"
				className="mix-blend-overlay fake-bg fixed left-0 top-0 h-full w-full z-0 object-cover"
			/>
		</main>
	);
}

export default Layout;
