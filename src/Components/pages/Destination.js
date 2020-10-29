import React from 'react'
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Destination.css'



function Destination() {
    return (
        <div className='destination'>
            <div className='add-dest'>
                <p className='dest-title'>Plan a New Trip Now</p>
                    <form className='dest-form'>
                        <TextField className = 'where-input' id="filled-basic" label="Where are you going?" variant="outlined" />
                    </form>
                        <div className='dest-button'>
                        <Button className='add-dest-btn' variant="contained" size="medium" color="black">Submit</Button>
                        </div>
            </div>
            <div className='edit-dest'>
                <p className='dest-title'>Your Trips</p>
            </div>

        </div>
    )
}

export default Destination
