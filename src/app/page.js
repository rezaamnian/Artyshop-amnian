'use client'
import Image from "next/image";
import Header from "./components/header/Header";
import Showprodoct from "./components/showprodoct/showprodoct";
import Slider from "./components/slider/Slider";
import Categorization from "./components/categorization/categorization";
import Prodoct from "./components/prodoct/prodoct";
import Foter from "./components/foter/foter";

export default function Home() {
  return (
    <div>
      
    <Header/>
     <Slider/>
     <Categorization/>
     <Prodoct/>
     <Foter/>
    </div>
  )
}
