import React, {useState} from "react";
import axios from 'axios';


export const Form = () => {
    const [event, setEvent] = useState({
        title: ''
    })


    const submitHandler = e => {
        e.preventDefault()
        const events = {
            title: event.title
        };

        axios.post(`https://react-site-b88f0.firebaseio.com/events.json`, { events })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        setEvent({title: ''})
    }
    const handleChange = event => {
        setEvent({ title: event.target.value });
    }

        return (
            <form onSubmit={submitHandler}>
                <input type="text" name='event' placeholder="Введите название события" onChange={handleChange} value={event.title}>
                </input>
                <button type="submit">Добавить</button>
            </form>
        )
    }


export default Form