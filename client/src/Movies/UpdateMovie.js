import React, {useState, useEffect} from 'react'; 
import styled from 'styled-components'
import axios from 'axios';


const Div = styled.div`
    background-color: rgb(128,0,128, .3);
    display: flex;
    width: 500px;
    margin: auto;
    justify-content: center;
    align-items: center; 
    height: 450px;
    h2{
        margin-left: 45px;
        font-weight: bold;
        color: rgb(72,61,139)
    }
    form{
        margin-bottom: 50px;
        width: 200px;
        display: flex;
        flex-direction: column
        input {
            height: 30px;
            margin-top: 20px;
            color: rgb(72,61,139, .3);
            font-size: 1.5rem;
            padding-left: 30px;
        
        }
    }

`
const UpdateMovie = (props) => { 
    const initState = {
        director: "",
        id: undefined, 
        metascore: undefined, 
        stars: [""],
        title: ""
    }
    const [form, setForm] = useState(initState)

    useEffect(() => {
        // console.log('movieToEdit', props.movies) 
        // if(props.movies){
        //     const movieToEdit = props.movies.map(e => `${e.id}` === props.match.params.id)
            
        //     console.log('movieToEdit', props.movies, movieToEdit)
        //     if(movieToEdit){
        //         setForm(movieToEdit)
                
        //     }
        // }
        console.log(props.movies)
        setForm(props.movies)
   
    },[props.movies, props.match.params.id])


    const handleChange = e => { 
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        });
        
    }



    const handleSubmit = e => { 
        axios.put(`http://localhost:5000/api/movies/${form.id}`, form)
        .then(res => { 
            console.log('put response', res);
        })
        props.history.push('/')
    }
    const handleDelete = e => { 
        axios.delete(`http://localhost:5000/api/movies/${form.id}`)
        .then(res => { 
            console.log('put response', res);
        })
        props.history.push('/')
    }

    return (
        <div>
            <Div>
                <div>
                <h2>Edit Movie</h2>
                <form onSubmit={handleSubmit}>

                    <input
                    type = "text"
                    name = "director"
                    value = {form.director}
                    onChange = {handleChange}
                    placeholder='director'
                    />
                    <input
                    type = "text"
                    name = "metascore"
                    value = {form.metascore}
                    onChange = {handleChange}
                    placeholder='metascore'
                    />
                    <input
                    type = "text"
                    name = "stars"
                    value = {form.stars}
                    onChange = {handleChange}
                    placeholder='stars'
                    />
                    <input
                    type = "text"
                    name = "title"
                    value = {form.title}
                    onChange = {handleChange}
                    placeholder='title'
                    />
                    <button style={{backgroundColor: `blue`, color: `white`, margin: `auto`, width: `80px`, height: `30px`}}>Edit</button>
                    <button onClick={handleDelete} style={{backgroundColor: `red`, color: `white`, margin: `auto`, width: `80px`, height: `30px`}}>Delete</button>

                </form>
                </div>
            </Div>
        </div>

    )
}

export default UpdateMovie