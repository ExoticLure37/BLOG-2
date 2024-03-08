import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [roomCode,setRoomcode]= useState("");
    const navigate = useNavigate();

    const handleformSubmit = (event)=> {
        event.preventDefault();
        navigate(`/room/${roomCode}`);
     }
    return (
        <div className='home-page'>
            <form onSubmit={handleformSubmit} className="form">
                <div>
                    <label>
                        Enter Room Code
                    </label>
                    <input 
                        value={roomCode}
                        onChange={(e)=> setRoomcode(e.target.value)}
                        type="text"
                        required 
                        placeholder='enter room code'/>
                </div>
                <button type="submit">enter room</button>
            </form> 
        </div>
    ) 
}
export default HomePage;
