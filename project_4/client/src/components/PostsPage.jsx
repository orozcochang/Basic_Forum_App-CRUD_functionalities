import React from 'react'
import {useLocation} from 'react-router-dom'

function PostsPage() {
    const location = useLocation()
    console.log(location.state['from'])
    const category = location.state['from']

    const [posts, setPosts] = useState([])
    const [titleInput, setTitleInput] = useState('')
    
    async function addPost(){
        let response = await axios.post('api/posts/', {'title':titleInput})
        console.log(response.data)
    }
    async function getAllPosts(){
        let response = await axios.get('api/posts/')
        console.log(response.data.posts)
        setPosts(response.data.posts)
    }
    useEffect(()=>{
        getAllPosts()
    }, [])


  return (
    <div><h1>
        {category} 
        </h1>

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

export default PostsPage