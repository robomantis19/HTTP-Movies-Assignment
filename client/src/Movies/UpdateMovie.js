import React, {useState} from 'react'; 

const initState = {
    director: "",
    id: undefined, 
    metascore: undefined, 
    stars: [],
    title: ""
}

const UpdateMovie = () => { 
    const [form, setForm] = useState(initState)

    const handleChange = e => { 
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        });
        
    }

    return (
        <div>
            <div>
                <form>
                    <input
                    type = "text"
                    name = "director"
                    value = {form.director}
                    onChange = {handleChange}
                    />
                    <input
                    type = "text"
                    name = "id"
                    value = {form.id}
                    onChange = {handleChange}
                    />
                    <input
                    type = "text"
                    name = "metascore"
                    value = {form.metascore}
                    onChange = {handleChange}
                    />
                    <input
                    type = "text"
                    name = "stars"
                    value = {form.stars}
                    onChange = {handleChange}
                    />
                    <input
                    type = "text"
                    name = "title"
                    value = {form.title}
                    onChange = {handleChange}
                    />
                </form>
            </div>
        </div>

    )
}

export default UpdateMovie