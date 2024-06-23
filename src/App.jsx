import { useState } from 'react'
import Card from './components/Card'

function App() {

  return (
<div className="flex flex-col lg:h-svh lg:flex-row gap-12 h-full justify-center items-center">
     <Card 
     title= "Raycast Wallpaper #1"
     description= "Recreate this wallpaper using AI."
     img= "/one.png"
     />
          <Card 
     title= "Raycast Wallpaper #2"
     description= "Recreate this wallpaper using AI."
     img= "/two.png"
     />
          <Card 
     title= "Raycast Wallpaper #3"
     description= "Recreate this wallpaper using AI."
     img= "/three.png"
     />
    </div>
    
  )
}

export default App
