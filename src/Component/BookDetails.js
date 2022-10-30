import {BookContext} from '../Context/BookContext';
import {useContext} from 'react'

const BookDetails =({book})=>{
  const {removeBooks} =useContext(BookContext)
  return (
    <div onClick={()=>removeBooks(book.id)}>
      <li className="collection-item white-text purple lighten-2"><h4>{book.title}</h4></li>
      <li className="collection-item white-text purple lighten-2">{book.author}</li>
    </div>
    )
}
export default BookDetails