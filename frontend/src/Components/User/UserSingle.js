import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UserSingle = (props) => {

    const navigate = useNavigate();

    function DeleteUser() {

        if(props.user._id !== undefined) {
            axios.delete('http://localhost:4000/user/' + props.user._id)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
            window.location.href = "/";
        }
        window.location.href = "/";
        
    }

    function back() {
        window.location.href = "/";
    }

    function update() {
        navigate('/update');
    }

    return (
        <section>
            <div className='section-inner'>
                <h2>READ USER</h2>

                <div className='flex'>
                    <div>
                        <p>ID:</p>
                        <p>NAME:</p>
                    </div>
                    <div className='pad-l'>
                        <p>{props.user._id}</p>
                        <p>{props.user.name}</p>
                    </div>
                </div>

                <button className="submit-btn del back" onClick={update}>Update</button>

                <h2>DELETE USER</h2>
                <div className='btn-container'>
                    <button className="btn-del del" onClick={DeleteUser}>Delete</button>
                    <button className="submit-btn del back" onClick={back}>Back</button>
                </div>
            </div>
        </section>
    );

}
 
export default UserSingle;