import {createContext,useState,useReducer} from 'react';
import {BookReducer} from '../Reducer/BookReducer';
export const BookContext = createContext();

const BookContextProvider = (props)=>{
  const [books,dispatch] = useReducer(BookReducer,[]);
    /*const addBooks = (title,author)=>{
      setBooks([...books,{title,author,id:Math.floor(Math.random()*10)}])
    }
    const removeBooks =(id)=>{
      setBooks(books.filter(book=>id!==book.id));
    }*/
    return(
      <BookContext.Provider value={{books,dispatch}}>
         {props.children}
      </BookContext.Provider>
      )
}
export default BookContextProvider;