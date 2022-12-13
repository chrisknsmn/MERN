import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Back() {
    const navigate = useNavigate();
    navigate('/');
}

function submitUser(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    axios.post('http://localhost:4000/users', {
        // id: this.refs.id.value,
        name: name
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
    window.location.href = "/";    
}

class UserForm extends React.Component {

    render() { 
        return ( 
            <section>
                <div className='section-inner'>
                    <form>
                        <h2>CREATE USER</h2>
                        <div>
                            <label htmlFor="name">Name</label><br/>
                            <input id="name" ref="name" type="text" />
                        </div>
                        <div className='btn-container'>
                            <button className="submit-btn sub" type="submit" onClick={submitUser}
                            nme="action">Submit</button>
                            <button className="submit-btn del back" onClick={Back}>Back</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }

}
 
export default UserForm;