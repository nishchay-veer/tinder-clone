import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import './SwipeButtons.css';
import { IconButton } from '@mui/material';
function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className = "swipeButtons__replay">
                <ReplayIcon style={{color : "#f5b748"}} fontSize='large' />
            </IconButton>
            <IconButton className = "swipeButtons__close"><CloseIcon style={{color : "#ec5e6f"}} fontSize='large' /></IconButton>
            <IconButton className = "swipeButtons__star"><StarIcon style={{color : "#62b47f"}} fontSize='large' /></IconButton>
            <IconButton className = "swipeButtons__fav"><FavoriteIcon style={{color : "#76e2b3"}} fontSize='large' /></IconButton>
            <IconButton className = "swipeButtons__flash"><FlashOnIcon style={{color : "#915dd1"}} fontSize='large' /></IconButton>

        </div>
    )
}
export default SwipeButtons;