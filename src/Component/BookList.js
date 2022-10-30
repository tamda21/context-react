import {useContext} from 'react';
import {BookContext} from '../Context/BookContext';
import BookDetails from './BookDetails';
const BlookList =()=>{
  const {books} = useContext(BookContext);
  return books.length?(
  <div className="container">
     <ul className="collection with-header">
       {books.map(book=>{
       return(<BookDetails book={book} key={book.id}/>)
       })}
     </ul>
  </div>
    ):(<h2 className="center white-text">No Book Ready . Hello Free Time :)</h2>)
}
export default BlookList
/*
<ul className="collection with-header">
<li className="collection-header"><h4>First Names</h4></li> 
<li className="collection-item">Alvin</li> <li className="collection-item">Alvin</li>   </ul>
*/