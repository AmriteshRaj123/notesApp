import { useState, useEffect } from 'react'; // Importing useState and useEffect hooks from React
import { nanoid } from 'nanoid'; // Importing nanoid function from 'nanoid' library
import NotesList from './components/NotesList'; // Importing NotesList component
import Search from './components/Search'; // Importing Search component
import Header from './components/Header'; // Importing Header component


const App = () => {
	// State for storing notes
	const data = new Date();
	// console.log(data.toDateString());
	const [notes, setNotes] = useState([
		// Initial notes array with dummy data
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: data.toDateString(),
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: data.toDateString(),
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: data.toDateString(),
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: data.toDateString(),
		},
	]);

	// State for storing search text
	const [searchText, setSearchText] = useState('');

	// State for toggling dark mode
	const [darkMode, setDarkMode] = useState(false);

	// Effect hook to load notes from localStorage on component mount
	// useEffect(() => {
	// 	const savedNotes = JSON.parse(
	// 		localStorage.getItem('react-notes-app-data')
	// 	);

	// 	if (savedNotes) {
	// 		setNotes(savedNotes);
	// 	}
	// }, []);

	// Effect hook to save notes to localStorage whenever notes state changes
	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	// Function to add a new note
	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			// text: <a href={`${text}`}> text</a>,
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	// Function to delete a note
	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	// Render method
	return (
		<div className={`${darkMode && 'dark-mode'}`}> {/* Conditionally applying 'dark-mode' class */}
			<div className='container'> {/* Main container */}
				<Header handleToggleDarkMode={setDarkMode} /> {/* Header component */}
				<Search handleSearchNote={setSearchText} /> {/* Search component */}
				<NotesList
					notes={notes.filter((note) =>  // NotesList component with filtered notes
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote} // Passing addNote function as prop
					handleDeleteNote={deleteNote} // Passing deleteNote function as prop
				/>
			</div>
		</div>
	);
};

export default App; // Exporting the App component
