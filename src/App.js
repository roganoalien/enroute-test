import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPaginate } from 'fetch-paginate';
// local
import CharacterCard from './components/characterCard';
import { initialCall } from './redux/slices/globalSlice';

function App() {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const { pageCharacters } = useSelector((state) => state.global);

	useEffect(() => {
		async function theFetch() {
			const { items } = await fetchPaginate(
				'https://swapi.dev/api/people',
				{
					getItems: (body) => body.results,
					params: true
				}
			);
			dispatch(initialCall({ characters: items }));
			setLoading(false);
		}
		theFetch();
	}, [dispatch]);

	return (
		<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
			{!loading ? (
				<>
					{pageCharacters.map((item, index) => (
						<CharacterCard
							data={item}
							key={`character-card-item-${item.name}-${index}`}
						/>
					))}
				</>
			) : (
				<p className="text-center text-2xl font-bold text-white w-full col-span-1 sm:col-span-2 lg:col-span-4 flex items-center justify-center h-[200px] animate-pulse">
					Cargando
				</p>
			)}
		</div>
	);
}

export default App;
