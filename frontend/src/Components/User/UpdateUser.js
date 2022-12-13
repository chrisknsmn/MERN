import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UpdateUser = (props) => {

    const navigate = useNavigate();

    function back() {
        navigate('/read');
    }

    function submit(event) {
        event.preventDefault();
        if(props.user._id !== undefined) {
            axios.put('http://localhost:4000/user/' + props.user._id, {
                name: document.getElementById('upname').value
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        }
        window.location.href = "/";        
    }

    return ( 
        <section>
            <div className='section-inner'>
                <h2>UPDATE USER</h2>
                <form >
                    <label htmlFor="name">Name</label>
                    <input id="upname" type="text" name="name" defaultValue={props.user.name} />

                    <div className='btn-container'>
                        <button className="submit-btn sub" type="submit" onClick={submit}>Submit</button>
                        <button className="submit-btn del back" onClick={back}>Back</button>
                    </div>
                </form>
            </div>
        </section>
    );

}
 
export default UpdateUser;