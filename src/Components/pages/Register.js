import React from 'react'
import './Register.css'
import Footer from './Footer'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '24ch',
    },
  },
}));

function Register() {

  const classes = useStyles();

    return (
        <div className='register'>
            <div className='register-box'>
                <h1 className='register-name'>Register <i class="fas fa-plane"></i></h1>
                    <form className='input-box' className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Email" />
                        <TextField id="standard-basic" label="Username" />
                        <TextField id="standard-basic" label="Password" />
                    </form>
                    <Button className='register-button' variant="contained" size="small">Submit</Button>

            </div>
        </div>
    )
}

export default Register
