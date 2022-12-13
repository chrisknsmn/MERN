import React from 'react';
import axios from 'axios';

const UpdateUser = (props) => {

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
                    <button className="submit-btn sub" type="submit" onClick={submit}>Submit</button>
                </form>
            </div>
        </section>
    );

}
 
export default UpdateUser;