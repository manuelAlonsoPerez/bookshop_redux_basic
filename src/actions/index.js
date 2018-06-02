export function selectBook(book){
    //console.log(`A book was clicked: ${book.title}`)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}