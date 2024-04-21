import { MdDeleteForever } from 'react-icons/md';
import { useState } from 'react';
import ReactPlayer from 'react-player'

const Note = ({ id, text, date, handleDeleteNote }) => {
	const [image, setImage] = useState();
	const [video, setvideo] = useState();
    function handleChange(e) {
        // console.log(e.target.files);
        setImage(URL.createObjectURL(e.target.files[0]));
    }
    function handleChanges(e) {
        console.log(e.target.files);
        setvideo(e.target.value);
    }
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
				</div>
			<div>
			<div>Add Image:</div>
            <input type="file" onChange={handleChange} />
			{image!=null && <img className='inpimage' width="280px" height="180px" src={image} alt='hello' />}
			</div>
			<div>
			<div>Add video Link:</div>
            <input type="url" onChange={handleChanges} />
			{video!=null && <ReactPlayer url={video} width="280px" height="220px"/>}
			</div>
			


		</div>
	);
};

export default Note;