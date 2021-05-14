import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
	name: 'global',
	initialState: {
		currentPage: 0,
		pages: 0,
		everyCharacter: [],
		pageCharacters: []
	},
	reducers: {
		// ADDS THE INITIAL CHARACTERS ON LOAD
		initialCall: (state, action) => {
			state.everyCharacter = action.payload.characters;
			state.pages = Math.ceil(action.payload.characters.length / 4);
			state.pageCharacters = changeCharacters(
				action.payload.characters,
				0
			);
		},
		// GOES UP THE PAGINATION
		goUp: (state) => {
			if (state.currentPage < state.pages) {
				state.pageCharacters = changeCharacters(
					state.everyCharacter,
					(state.currentPage + 1) * 4
				);
				state.currentPage++;
			}
		},
		// GOES DOWN THE PAGINATION
		goDown: (state) => {
			if (state.currentPage > 0) {
				state.pageCharacters = changeCharacters(
					state.everyCharacter,
					(state.currentPage - 1) * 4
				);
				state.currentPage--;
			}
		}
	}
});

// RETURNS THE CHARACTERS THAT SHOULD SHOW ON THE PAGE
function changeCharacters(characters, startingIndex) {
	const tempArray = [];
	for (let i = startingIndex; i < startingIndex + 4; i++) {
		tempArray.push(characters[i]);
	}
	return tempArray;
}

export const { initialCall, goUp, goDown } = globalSlice.actions;
export default globalSlice.reducer;
