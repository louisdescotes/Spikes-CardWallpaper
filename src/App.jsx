import { useState } from 'react'
import Card from './components/Card'

function App() {

  return (
<div className="flex flex-col lg:h-svh lg:flex-row gap-4 h-full justify-center items-center">
     <Card 
     title= "Raycast Wallpaper #1"
     description= "Recreate this wallpaper using AI."
     img= "/public/one.png"
     />
          <Card 
     title= "Raycast Wallpaper #2"
     description= "Recreate this wallpaper using AI."
     img= "/public/two.png"
     />
          <Card 
     title= "Raycast Wallpaper #3"
     description= "Recreate this wallpaper using AI."
     img= "/public/three.png"
     />
    </div>
    
  )
}

export default App
