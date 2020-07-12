import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([]) // ---> Empty array since list of objects is fetched
	const [post, setPost] = useState({}) // ---> Empty object since a single object is fetched
	const [id, setId] = useState(1)
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
			.then(res => {
                console.log(res)    // returns entire res object with several properties inside it
                setPost(res.data)   // data property on reponse contains array of data
			})
			.catch(err => {
				console.log(err)
			})
    }, [idFromButtonClick])
    
    // ---> This is for fetching the list of array
    useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts`)
			.then(res => {
                console.log(res)
                setPosts(res.data)   // data property on reponse contains array of data
			})
			.catch(err => {
				console.log(err)
			})
	}, [])  // ---> An empty array is passed as a dependency in order to fetch the data just once in beginning by calling use effect just once

	const handleClick = () => {
		setIdFromButtonClick(id)
	}

	return (
		<div>
            <h3>Searched id data is fetched</h3>
			<input type="text" value={id} onChange={e => setId(e.target.value)} />
			<button type="button" onClick={handleClick}>Fetch Post</button>
			<div>{post.title}</div>

            <h3>This is the list of first 15/100 titles fetched</h3>
			<ul>
				{posts.map(post => post.id<=15 ? (
                    <li key={post.id}>{post.title}</li>
				):null)}
			</ul>
		</div>
	)
}

export default DataFetching