import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DataFetchingOne() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(response => {
        setLoading(false)
        setPost(response.data)
        setError('') // ---> to clear any previous message if at all displayed
      })
      .catch(error => {
        setLoading(false)
        setPost({}) // ---> to clear any previous message if at all displayed
        setError('Something went wrong!')
      })
  }, []) // ---> Enmpty array passed as second parameter to ensure that the API is only called once

  return (
    <div>
      <h6>DataFetching - useEffect with useState</h6>
      {loading ? 'Loading...' : post.title}
      {error ? error : null}
    </div>
  )
}

export default DataFetchingOne