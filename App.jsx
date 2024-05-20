
import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import VideosSection from './components/VideosSection'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-full h-full bg-amber-100'>
      <Navbar />
      <Header />
      <VideosSection />
      <div className='flex flex-wrap gap-10 justify-center items-center'>
        <Cards 
          imageSrc="/Dance_2.png"
          heading="RingTone"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fugit quidem neque ducimus pariatur delectus architecto voluptatum? Qui, placeat iste."
          buttonText="View All" 
        />
        <Cards 
          imageSrc="/Layer_12.png"
          heading="Wallpaper"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fugit quidem neque ducimus pariatur delectus architecto voluptatum? Qui, placeat iste."
          buttonText="View All" 
        />
        <Cards 
          imageSrc="/Layer_10.png"
          heading="Games"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fugit quidem neque ducimus pariatur delectus architecto voluptatum? Qui, placeat iste."
          buttonText="View All" 
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
