const reducer = (state = [], action) => {
	switch (action.type) {
		case 'LOAD_OPERATIONS':
			return null;
		case 'LOAD_OPERATIONS_FAILURE':
			return null;
		case 'LOAD_OPERATIONS_SUCCESS':
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
