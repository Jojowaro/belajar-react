import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const First = () => {
    const navigate = useNavigate()

    const [temanSaya, setTemanSaya] = useState(0)
    const [namaTeman, setNamaTeman] = useState("")

    useEffect(() => {
    if(temanSaya <= 0){
        setNamaTeman("ngga punya :(")
    } else if (temanSaya ===1){
        setNamaTeman("Farrel")
    } else {
        setNamaTeman("banyak")
    }
    }, [temanSaya])

    return(
        <div>
            <h3>Home Page</h3>
            <h5>nama teman : {namaTeman}</h5>
            <h1>teman saya : {temanSaya}</h1>
            <button onClick={() => setTemanSaya((prev) => prev + 1)}>Tambah teman</button>
            <button onClick={() => setTemanSaya((prev) => prev - 1)}>Kurangi teman</button>

            <button onClick={() => navigate('/About')}>Check About</button>
        </div>
    )
}

export default First