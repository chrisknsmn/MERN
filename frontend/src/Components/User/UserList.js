import React from 'react';
import { useNavigate } from "react-router-dom";

const UserList = (props) => {

    const navigate = useNavigate();

    function create() {
        navigate('/create');
    }

    return ( 
        <section>
            <div className='section-inner'>
                <h2>READ USERS</h2>
                <div className='list-container'>
                    <select id="select" className="users-list" onChange={(e)=>{
                        var index = e.target.selectedIndex;
                        if(index > 0) {
                            props.UpdateCurrentUser(props.users[index-1]);
                            navigate('/read');
                        }
                    }}>
                        <option>Select</option>
                        {props.users.map((item) => (
                            <option key={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <button className='sub' onClick={create}>
                        +
                    </button>
                </div>
            </div>
        </section> 
    );

}
 
export default UserList;