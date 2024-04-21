

---

# React Notes App

Welcome to the React Notes App! This application is built using React, a popular JavaScript library for building user interfaces. The React Notes App allows users to manage their notes effectively by providing features such as creating, viewing, searching, and deleting notes.

## Features
Add Notes: Users can add new notes by typing in the text area and clicking the "Save" button.
Delete Notes: Each note has a delete button that allows users to remove unwanted notes.
Search Notes: Users can search for specific notes by typing keywords into the search bar.
Dark Mode: Toggle between light and dark mode for better readability.
Image Upload: Users can upload images to their notes by selecting files from their device.
Video Embedding: Users can embed videos in their notes by pasting video links into the designated input field.


## Usage

Type your note text in the text area provided.
Optionally, upload an image by clicking the "Add Image" button and selecting a file from your device.
Optionally, embed a video by pasting a video link into the "Add Video Link" input field.
Click the "Save" button to add the note.
Use the search bar to find specific notes by typing keywords.
To delete a note, click the delete icon next to the note.


### Create Notes

Users can create new notes by typing in the input field provided in the application. Upon submission, a new note with the entered text will be added to the list of notes.

### View Notes

The application displays a list of all notes created by the user. Each note includes the text content and the date it was created.

### Search Notes

To facilitate easy retrieval of specific notes, users can utilize the search feature. By typing in keywords or phrases in the search bar, the application filters and displays only the notes that contain the entered text.

### Delete Notes

Users can remove unwanted notes from their list by clicking on the delete icon associated with each note. This action permanently removes the selected note from the application.

### Dark Mode

For improved readability, the application offers a dark mode option. By toggling dark mode, users can switch between light and dark themes according to their preference.

## Installation

To run the React Notes App locally on your machine, follow these steps:

1. **Clone Repository**: Clone this repository to your local machine using the following command:
    ```
    git clone :- https://github.com/AmriteshRaj123/notesApp.git
    ```

2. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies by running:
    ```
    npm install
    ```

3. **Start Development Server**: Start the development server to launch the application by executing:
    ```
    npm start
    ```

## Usage

Once the development server is running, you can access the application in your web browser. Here's how to use the React Notes App:

- **Add Notes**: Type your note text in the input field and press Enter or click the "Add" button to create a new note.
- **Search Notes**: Use the search bar to filter notes based on specific keywords or phrases.
- **Delete Notes**: Click on the trash icon next to a note to delete it from the list.
- **Toggle Dark Mode**: Switch between light and dark themes by clicking the moon icon in the header.

## Components

### App Component

The `App` component serves as the main entry point for the React Notes App. It manages the application's state, including notes, search text, and dark mode settings. Additionally, it renders the `Header`, `Search`, and `NotesList` components.

### NotesList Component

The `NotesList` component is responsible for rendering the list of notes and the input field for adding new notes. It receives props for notes data, functions to add and delete notes, and dynamically generates `Note` components for each note in the list.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **nanoid**: Library for generating unique IDs.
- **CSS**: Styling for the application layout and components.

