import React from 'react';
import axios from 'axios';

function back() {
    window.location.href = "/";
}

class UserForm extends React.Component {

    submitUser(event) {

        event.preventDefault();

        axios.post('http://localhost:4000/users', {
            // id: this.refs.id.value,
            name: this.refs.name.value
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
        window.location.href = "/";
    }

    render() { 
        return ( 
            <section>
                <div className='section-inner'>
                    <form className="" onSubmit={this.submitUser.bind(this)}>
                        <h2>CREATE USER</h2>
                        <div className="">
                            <div className="">
                                <label htmlFor="name">Name</label><br/>
                                <input id="name" ref="name" type="text" />
                            </div>
                        </div>
                        
                        <div className='btn-container'>
                            <button className="submit-btn sub" type="submit"
                            nme="action">Submit</button>

                            <button className="submit-btn del back" onClick={back}>Back</button>
                        </div>

                    </form>
                </div>
            </section>
        );
    }
}
 
export default UserForm;