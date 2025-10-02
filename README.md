🎵 iTunes Music Explorer
Discover, Curate, and Play Your Tunes!
Node.jsExpress.jsVanilla JavaScriptHTML5CSS3

Welcome to the iTunes Music Explorer, a full-stack web application designed to help you effortlessly search the iTunes library and craft personalized music playlists! This project showcases a robust backend API proxy and an interactive vanilla JavaScript frontend for a seamless music discovery experience.

✨ Features
Dynamic Music Search: Instantly search the iTunes library for your favorite songs using a client-side interface powered by AJAX.
Real-time Results: View search results dynamically updated without page reloads.
Interactive Playlist Builder: Add songs from search results to your custom playlist with a single click.
Client-Side Playlist Management: Easily remove unwanted tracks or reorder your playlist entries (up/down) for perfect curation.
Node.js API Proxy: A secure and efficient Express.js backend handles requests to the external iTunes Search API, abstracting complexity and providing a stable middleware.
Responsive Interface: Built with foundational HTML and CSS, designed for clarity and ease of use.
🚀 Tech Stack
Backend:

Node.js: JavaScript runtime environment
Express.js: Web application framework for Node.js
http module for external API calls
Frontend:

Vanilla JavaScript (AJAX): For dynamic interactions and asynchronous API communication.
HTML5: Structuring the web content.
CSS3: Styling and visual presentation.
Development Tools:

Git/GitHub: Version control.
📂 Project Structure
├── README.md
└── itunes_music_explorer_API/
    ├── ReadMe.txt                     # Original setup instructions
    ├── code/
    │   └── code_files/
    │       ├── package.json           # Project dependencies
    │       ├── public/
    │       │   ├── js/
    │       │   │   └── script.js      # Frontend JavaScript logic
    │       │   └── styles/
    │       │       └── styles.css     # Frontend styling
    │       ├── server.js              # Node.js Express server
    │       └── views/
    │           └── index.html         # Main application HTML
    └── images/                        # Project screenshots and layouts
        ├── R0.2.png
        ├── layout.pptx
        └── page_layout.png
🛠️ Getting Started
Follow these steps to get your iTunes Music Explorer up and running locally.

Prerequisites
Node.js: Ensure you have Node.js installed (v18.13.0 or higher recommended).
You can download it from nodejs.org.
Installation
Clone the repository (or unzip the file):

# If cloning from Git:
git clone <repository_url>
cd itunes_music_explorer_API
If you've unzipped the provided file, navigate into the itunes_music_explorer_API directory.

Navigate to the code_files directory:

cd code/code_files
Install Node.js dependencies:

npm install
This will install express.js as specified in package.json.

Running the Application
Start the server:

node server.js
You will see a message in your terminal indicating the server is running, along with a list of URLs.

Access the application: Open your web browser and navigate to one of the following URLs:

http://localhost:3000/
http://localhost:3000/index.html
http://localhost:3000/mytunes
http://localhost:3000/mytunes.html
To test a direct song search via the API:

http://localhost:3000/songs?title=Body+And+Soul (You can change "Body+And+Soul" to any song title)

👨‍💻 Author
Rafique Siddique
