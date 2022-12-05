import React, { useRef } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import PostsPage from "./PostsPage";
function CategoriesPage(){

    const [categories, setCategories] = useState([])
    const [titleInput, setTitleInput] = useState('')
   
    async function addCategory(){
        let response = await axios.post('api/categories/', {'title':titleInput})
        console.log(response.data)
    }
    async function getAllCategories(){
        let response = await axios.get('api/categories/')
        console.log(response.data.categories)
        setCategories(response.data.categories)
    }
    useEffect(()=>{
        getAllCategories()
    }, [])

    

   

    return(
        <div>
            <h1>Categories Page</h1>
            {categories.map((category) => {
                return (
                    <center>
                    <Link to='/posts' state={{'from':category.fields.category}}> <button style={{display:"block", margin: '2px', width:'300px' }}>{category.fields.category} </button></Link>
                    </center>
                )
            })}

            
            
            
            

            <input type='text' placeholder='Create New Category' onChange={(e)=>{ setTitleInput(e.target.value)}}></input>
            <h4>Current input: {titleInput}</h4>
            <button onClick={addCategory}> Add Category </button>
        </div>
        )

}

export default CategoriesPage