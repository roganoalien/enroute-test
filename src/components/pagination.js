import { useSelector, useDispatch } from 'react-redux';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
// local
import { goUp, goDown } from '../redux/slices/globalSlice';

function Pagination() {
	// const [thePages, setThePages] = useState([]);
	const dispatch = useDispatch();
	const { currentPage, pages } = useSelector((state) => state.global);

	return (
		<div className="w-full flex items-center justify-center mt-10">
			<div className="relative inline-flex rounded-md shadow-sm -space-x-px">
				<button
					type="button"
					disabled={currentPage > 0 ? false : true}
					className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:bg-starBlack disabled:cursor-not-allowed"
					onClick={() => dispatch(goDown())}
				>
					<span className="sr-only">Anterior</span>
					<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
				</button>
				<div className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
					{currentPage + 1} / {pages}
				</div>
				<button
					disabled={currentPage + 1 === pages ? true : false}
					type="button"
					className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:bg-starBlack disabled:cursor-not-allowed"
					onClick={() => dispatch(goUp())}
				>
					<span className="sr-only">Siguiente</span>
					<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
				</button>
			</div>
		</div>
	);
}

export default Pagination;
