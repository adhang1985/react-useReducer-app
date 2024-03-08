export const reducer = (state,action) => {
    if(action.type === "ADD"){
        const allBooks = [...state.books,action.payload];
        return{
            ...state,
            books:allBooks
        }
    }
    else if(action.type === "REMOVE"){
        const filteredBook = [...state.books].filter((book) => {
            return book.id !== action.payload;
        })
        return {
            ...state,
            books:filteredBook
        }
    }
    return state;
};
