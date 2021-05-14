function CharacterCard({ data }) {
	return (
		<div className="col-span-1 bg-white rounded-md px-6 py-8">
			<p className="text-xl text-starBlack text-left w-full">
				{data.name}
			</p>
			<p className="text-gray-400 text-left w-full">
				gender: {data.gender}
			</p>
			<p className="text-gray-400 text-left w-full">
				height: {data.height}
			</p>
			<p className="text-gray-400 text-left w-full">
				hair color: {data.hair_color}
			</p>
			<p className="text-gray-400 text-left w-full">
				birth year: {data.birth_year}
			</p>
		</div>
	);
}

export default CharacterCard;
