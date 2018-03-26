//Contains all of the action creaters that we make

export function selectBook(book) {
    // selectBook is an action creator, it needs to return an action,
    // action: an object with a type property.
    // actions have two values, type and payload.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
