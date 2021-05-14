import { useSelector, useDispatch } from 'react-redux';
import { sortByName, undoSort } from '../redux/slices/globalSlice';

function Filter() {
	const dispatch = useDispatch();
	const { isSorted } = useSelector((state) => state.global);

	return (
		<>
			<p className="text-gray-300 w-full text-center mt-5">
				ordenar por:
			</p>
			<div className="w-full flex items-center justify-center mt-2">
				<button
					onClick={() => {
						dispatch(undoSort());
					}}
					type="button"
					className={`border border-gray-300 py-2 px-4 mr-4 lowercase text-sm text-gray-300 rounded-md ${
						!isSorted
							? 'bg-starYellow text-starBlack border-starYellow'
							: 'border-gray-300'
					}`}
				>
					Default
				</button>
				<button
					onClick={() => {
						dispatch(sortByName());
					}}
					type="button"
					className={`border border-gray-300 py-2 px-4 lowercase text-sm text-gray-300 rounded-md ${
						isSorted
							? 'bg-starYellow text-starBlack border-starYellow'
							: 'border-gray-300'
					}`}
				>
					Nombre
				</button>
			</div>
		</>
	);
}

export default Filter;
