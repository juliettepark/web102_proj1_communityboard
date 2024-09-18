import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './components/Book';
// import '../images/anne_greengables'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='title'>Book Bonds Reading Club 📚</h1>
      <h2>Up Next</h2>
      <div className='book-container'>
        <Book title="Anne of Green Gables" 
              author="L.M. Montgomery"
              image='./src/images/anne_greengables.jpg'
              date="August 2024"
              link="https://www.goodreads.com/book/show/8127.Anne_of_Green_Gables?from_search=true&from_srp=true&qid=ZEgIkPi67d&rank=1"
        />

        <Book title="Winter In Sokcho" 
              author="Elisa S. Dusapin"
              image='./src/images/sokcho.jpg'
              date="July 2024"
              link="https://www.goodreads.com/search?q=winter+in+sokcho&ref=nav_sb_noss_l_16"
        />
      </div>
      <h2>Previous</h2>
      <img src='./src/images/anne_greengables.jpg'/>
    </>
  )
}

export default App
