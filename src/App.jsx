import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './components/Book';
import Banner from './components/Banner';
// import '../images/anne_greengables'

function App() {

  return (
    <>
      <h1 className='title'>Book Bonds Reading Club 📚</h1>
      <Banner title="The Idiot" image='./src/images/theidiot.jpg'/>
      <h2>Up Next</h2>
      <div className='book-container'>
        <Book title="The Idiot" 
              author="Fyodor Dostoevsky"
              image='./src/images/theidiot.jpg'
              date="September 2024"
              link="https://www.goodreads.com/book/show/12505.The_Idiot?from_search=true&from_srp=true&qid=tNL9eJha77&rank=1"
        />

        <Book title="Welcome to the Hyunam-dong Bookshop" 
              author="Hwang Bo-Reum"
              image='./src/images/hyunamdong.jpg'
              date="October 2024"
              link="https://www.goodreads.com/book/show/133938826-welcome-to-the-hyunam-dong-bookshop?from_search=true&from_srp=true&qid=uypa5ArwWr&rank=1"
        />

        <Book title="Anne of the Island" 
              author="L.M. Montgomery"
              image='./src/images/anne_island.jpg'
              date="October 2024"
              link="https://www.goodreads.com/book/show/123280461-anne-of-the-island?from_search=true&from_srp=true&qid=mdYibrgVsq&rank=1"
        />

        <Book title="Anne of Windy Willows" 
              author="L.M. Montgomery"
              image='./src/images/anne_windy.jpg'
              date="November 2024"
              link="https://www.goodreads.com/book/show/65840.Anne_of_Windy_Poplars?from_search=true&from_srp=true&qid=tmDYPPfrs8&rank=1"
        />
      </div>
      <h2>Previous</h2>
      <div className='book-container'>

        <Book title="Anne of Avonlea" 
              author="L.M. Montgomery"
              image='./src/images/anne_avonlea.jpg'
              date="September 2024"
              link="https://www.goodreads.com/book/show/77390.Anne_of_Avonlea?from_search=true&from_srp=true&qid=pt5uvT3WB1&rank=1"
        />

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

        <Book title="Crime and Punishment" 
              author="Fyodor Dostoevsky"
              image='./src/images/crime.jpg'
              date="May 2024"
              link="https://www.goodreads.com/book/show/7144.Crime_and_Punishment?from_search=true&from_srp=true&qid=XYkU3qhV1L&rank=1"
        />

        <Book title="What You Are Looking For Is In the Library" 
              author="Michiko Aoyama"
              image='./src/images/library.jpg'
              date="December 2024"
              link="https://www.goodreads.com/book/show/91274427-what-you-are-looking-for-is-in-the-library?ac=1&from_search=true&qid=sLcnwptyqN&rank=1"
        />

        <Book title="The Curious Incident of the Dog in the Nighttime" 
              author="Mark Haddon"
              image='./src/images/curious.jpg'
              date="June 2023"
              link="https://www.goodreads.com/book/show/1618.The_Curious_Incident_of_the_Dog_in_the_Night_Time?from_search=true&from_srp=true&qid=5ECtccZ7Iy&rank=1"
        />
      </div>
    </>
  )
}

export default App
