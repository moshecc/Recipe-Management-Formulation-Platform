import React from 'react'
import { Route ,Routes , } from 'react-router-dom'
import AboutUs from '../components/AboutUs/AboutUs'
import Card from '../components/Card/Card'
import NewCard from '../components/Card/NewCard'
import HomePage from '../components/HomePage/HomePage'
import LoginPas from '../components/Log in/LoginPas'
import SignUp from '../components/Log in/SignUp'
import RecipeView from '../components/MainPage/RecipeView'
import Nav from '../components/nav/Nav'
import NewRecipe from '../components/newRecipe/NewRecipe'
import PageError from '../components/pageError/PageError'
import InputFile from '../inputFile/InputFile'
import RecipeList from '../components/MainPage/RecipeList'
export default function MyRouter() {
  return (
    <div>
        <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/nav' element={<Nav/>}/>
       <Route path='/card' element={<Card/>}/>
       <Route path='/newcard' element={<NewCard/>}/>
       <Route path='/newrecipe' element={<NewRecipe/>}/>
       <Route path='/inputfile' element={<InputFile/>}/>
       <Route path='/aboutus' element={<AboutUs/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='/login' element={<LoginPas/>}/>
       <Route path='/*' element={<PageError/>}/>
        </Routes>

    </div>
  )
}
