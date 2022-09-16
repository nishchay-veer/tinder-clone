import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import './Header.css';
import { IconButton, Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import { storage, db } from './firebase'

// import firebase from 'firebase/compat/app';
// import { Avatar, Box, Button, IconButton, Input } from "@mui/material";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    padding: '10px',
    borderRadius: '10px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 30,
    p: 4,
};
function Header() {
    const [postUpload, setPostUpload] = useState(false)
    const [username, setUsername] = useState("")
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }
    const handleUpload = () => {
        //// some clever stuff...
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //progress function...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress(progress)
            },
            (error) => {
                console.log(error);
                alert(error.message)
            },

            () => {
                storage.ref("images").child(image.name).getDownloadURL().then((url) => {
                    db.collection("people").add({
                        name: username,
                        imageURL: url,

                    });
                    setUsername('');
                    setImage(null);
                    setPostUpload(false);
                });
            }


        );


    };



    return (

        <div className="header">
            <Modal
                open={postUpload}
                onClose={() => setPostUpload(false)}
            >
                <Box sx={style}>
                    <div className='box-modal'>
                        <div className='imagePost__header'>
                            <h2>Upload a Picture</h2>
                        </div>
                        <div className='imagePost__upload'>
                            {/* <progress className="progress__part" value={progress} max="100" /> */}
                            <div className='imagePost__input'>
                                <div>Username</div>
                                <div>File</div>
                            </div>
                            <div className='imagePost__options'>
                                <input wrap='soft' className="upload__caption" type="text" placeholder='Enter a username' value={username} onChange={(e) => setUsername(e.target.value)} />
                                <input className='wpcf7-file' type="file" onChange={handleChange} />
                            </div>


                        </div>

                        <div className='imagePost__btn'><button className='post_btn' onClick={handleUpload}>POST</button></div>
                    </div>






                </Box>
            </Modal>
            <IconButton><PersonIcon onClick={() => setPostUpload(true)} className="header__sideLogo" fontSize='large' /></IconButton>

            <img className='header__logo' src="https://brandlogos.net/wp-content/uploads/2021/09/tinder-flame-logo-512x512.png" alt='tinder logo' />
            <IconButton><QuestionAnswerIcon className="header__sideLogo" fontSize='large' /></IconButton>

        </div>
    )
}
export default Header