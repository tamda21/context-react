import {useState, useContext} from 'react';
import {BookContext} from '../Context/BookContext';

const BookForm = ()=>{
  const {addBooks} =useContext(BookContext);
  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const handelSubmit =(e)=>{
    e.preventDefault();
    addBooks(title,author);
    setTitle("");
    setAuthor("")
  }
  return(
 <form className="center fb s2  white-text purple lighten-2" onSubmit={handelSubmit}>
   <div className="input-field">
   <input placeholder="Title" id="first_name" type="text" className="validate" value={title} onChange={(e)=>setTitle(e.target.value)} /> 
   </div>
   <div className="input-field">
   <input placeholder="Author" id="first_name" type="text" className="validate" value={author} onChange={(e)=>setAuthor(e.target.value)}/> 
   </div>
   <button className="waves-effect purple lighten-1 btn">Add book</button>
 </form>
    )
}
export default BookForm