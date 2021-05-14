import { createSlice } from '@reduxjs/toolkit';
const _ = require('underscore');

export const globalSlice = createSlice({
	name: 'global',
	initialState: {
		currentPage: 0,
		pages: 0,
		everyCharacter: [],
		orderedByName: [],
		isSorted: false,
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
					state.isSorted ? state.orderedByName : state.everyCharacter,
					(state.currentPage + 1) * 4
				);
				state.currentPage++;
			}
		},
		// GOES DOWN THE PAGINATION
		goDown: (state) => {
			if (state.currentPage > 0) {
				state.pageCharacters = changeCharacters(
					state.isSorted ? state.orderedByName : state.everyCharacter,
					(state.currentPage - 1) * 4
				);
				state.currentPage--;
			}
		},
		sortByName: (state) => {
			state.orderedByName = _.sortBy(state.everyCharacter, 'name');
			state.isSorted = true;
			state.currentPage = 0;
			state.pageCharacters = changeCharacters(state.orderedByName, 0);
		},
		undoSort: (state) => {
			state.isSorted = false;
			state.currentPage = 0;
			state.pageCharacters = changeCharacters(state.everyCharacter, 0);
		}
	}
});

// RETURNS THE CHARACTERS THAT SHOULD SHOW ON THE PAGE
function changeCharacters(characters, startingIndex) {
	const theFinalElement =
		startingIndex + 4 < characters.length
			? startingIndex + 4
			: startingIndex + (characters.length - startingIndex);
	const tempArray = [];
	for (let i = startingIndex; i < theFinalElement; i++) {
		tempArray.push(characters[i]);
	}
	return tempArray;
}

export const { initialCall, goUp, goDown, sortByName, undoSort } =
	globalSlice.actions;
export default globalSlice.reducer;
