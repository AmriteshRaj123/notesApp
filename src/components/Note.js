import { MdDeleteForever } from 'react-icons/md';
import { useState } from 'react';

const Note = ({ id, text, date, handleDeleteNote }) => {
	const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
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
				<h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
			{file!=null && <img src={file} alt='hello' />}
			</div>
		</div>
	);
};

export default Note;