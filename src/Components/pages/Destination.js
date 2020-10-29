import React from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
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
                        <Button className='add-dest-btn' variant="contained" size="medium" color="">Submit</Button>
                        </div>
            </div>
            <div className='edit-dest'>
                <p className='dest-title'>Your Trips</p>
                <li className='prev-dest'>
                    <Link className='prev-dest-link' to='/' underline='none'>Plans for Japan</Link>

                    <div className='dest-icons'>
                        <IconButton className='prev-dest-btn' aria-label="delete">
                            <DeleteIcon fontSize="small" color='primary'/>
                        </IconButton>
                        <IconButton>
                            <EditIcon color='secondary'/>
                        </IconButton>
                    </div>

                </li>
                <li className='prev-dest'>
                    <Link>Plans for Paris, France</Link>
                    <div className='dest-icons'>
                        <IconButton className='prev-dest-btn' aria-label="delete">
                            <DeleteIcon fontSize="small" color='primary' />
                        </IconButton>
                        <IconButton>
                            <EditIcon color='secondary'/>
                        </IconButton>
                    </div>
                </li>
                <li className='prev-dest'>
                    <Link>Plans for Sydney, Australia</Link>
                    <div className='dest-icons'>
                        <IconButton className='prev-dest-btn' aria-label="delete">
                            <DeleteIcon fontSize="small" color='primary' />
                        </IconButton>
                        <IconButton>
                            <EditIcon color='secondary'/>
                        </IconButton>
                    </div>
                </li>
            </div>

        </div>
    )
}

export default Destination
