import {createContext,useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props)=>{
  const [books,setBooks] = useState([
    {title:"Absalom,Absalom",author:"WILLIAM FAULKNER",id:1},
    {title:"A Time To Kill",author:"JOHN GRISHAM",id:2},
    {title:"The House of Mirth",author:"EDITH WHARTON",id:3}
    ]);
    const addBooks = (title,author)=>{
      setBooks([...books,{title,author,id:Math.floor(Math.random()*10)}])
    }
    const removeBooks =(id)=>{
      setBooks(books.filter(book=>id!==book.id));
    }
    return(
      <BookContext.Provider value={{books,addBooks,removeBooks}}>
         {props.children}
      </BookContext.Provider>
      )
}
export default BookContextProvider;