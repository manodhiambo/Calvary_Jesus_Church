<h1>Calvary Jesus Church Website</h1>

<h2>Project Overview</h2>
<p>The Calvary Jesus Church website is designed to serve as an online presence for the church, providing users with the ability to submit prayer requests, stay updated with the church's activities, and engage with the community. The website features a prayer request form where users can submit their prayer requests confidentially, with options for receiving contact or keeping the request private.</p>

<h2>Features</h2>
<ul>
<li><strong>Prayer Request Form:</strong> Allows users to submit prayer requests, with options for keeping the request private and choosing if they want to be contacted.</li>
<li><strong>Responsive Design:</strong> The website is designed to be mobile-friendly and responsive across various screen sizes.</li>
<li><strong>Submission Confirmation:</strong> After submitting the prayer request, the user is redirected back to the homepage with a success or error message</li>
<li><strong>Simple User Interface:</strong> Clean and intuitive design for easy navigation and interaction.</li>
</ul>

<h3>Technologies Used</h3>

<ul>
<li>Frontend:
<ul>
<li>HTML5</li>
<li>CSS3</li>
<li>JavaScript</li>
<li>Bootstrap (for responsive design)</li>
</ul>

<li>Backend:
<ul>
<li>PHP (for form submission and processing)</li>
<li>MySQL (for storing prayer requests)</li>
</ul>
</li>

<li>Database:
<ul>
<li>MySQL Database</li>
</ul>
</li>

<li>Hosting/Environment:
<ul>
<li>Apache Server</li>
<li>PHP (7.4 or higher)</li>
<li>MySQL 5.7 or higher</li>
</ul>
</li>
</ul>

<h3>Getting Started</h3>

<h3>Prerequisites</h3>
To run the website locally, you need:
<ul>
<li>XAMPP/WAMP/MAMP/LAMP (Local server environment for PHP and MySQL)</li>
<li>Text Editor (VS Code, Sublime Text, or similar)</li>
<li>Web Browser (Chrome, Firefox, etc.)</li>
</ul>

<h3>Installation</h3>

<ol>
<li>Clone the repository:</li>
git clone https://github.com/manodhiambo/Calvary_Jesus_Church.git

<li>Set up the Database:
<ul>
<li>Open phpMyAdmin (or your preferred database management tool)</li>
<li>Create a new database named calvary_church</li>
<li>Import the provided calvary_church.sql file (if available) or manually create the tables as described in the submit_prayer.php file.</li>
</ul>
</li>
<li>Configure the Database:
<ul>
<li>In the submit_prayer.php file, update the database connection parameters:</li>
$username = 'your_username';
$password = 'your_password';
$dsn = "mysql:host=127.0.0.1;dbname=calvary_church;charset=utf8mb4";

</ul></li>
<li>
Start the Server:
<ul>
<li>If using XAMPP or a similar tool, start Apache and MySQL services.</li>
</ul>
</li>

<li>
Access the Website:
<ul>
<li>Open your browser and navigate to http://localhost/Calvary_Jesus_Church.</li>
<ul>
</li>

<h3>Usage</h3>
<ol>
<li>
Submit Prayer Requests:
<ul>
<li>Visit the homepage and fill in the prayer request form.</li>
<li>You can choose to keep your prayer request private and allow the church to contact you</li>
</ul>
</li>

<li>View Confirmation:
<ul>
<li>fter submitting the form, you will be redirected back to the homepage with a success or error message displayed.</li>
</ul>
</li>

<li>
Database Management:
<ul>
<li>Submitted prayer requests are stored in the prayer_requests table in the MySQL database.</li>
<li>You can view or manage the requests via phpMyAdmin or any other database management tool.</li>
</ul>
</li>
</ol>


<h3>File Structure</h3>

Calvary_Jesus_Church/<br>
│
├── index.html          # Homepage of the church website<br>
├── submit_prayer.php   # PHP script to handle prayer request submissions<br>
├── style.css           # Custom styles for the website<br>
├── script.js           # JavaScript for interactive elements<br>
├── calvary_church.sql  # SQL file to create the database and tables<br>
└── README.md           # This README file<br>



<h3>Contributing</h3>
We welcome contributions! To contribute to the project:

<ol>
<li>Fork the repository.</li>
<li>Create a new branch (git checkout -b feature-name).</li>
<li>Commit your changes (git commit -am 'Add new feature').</li>
<li>Push to the branch (git push origin feature-name).</li>
<li>Create a new pull request.</li>
</ol>


<h4>Contact</h4>

For more information or any questions regarding this project, feel free to reach out to the project maintainer:

Name: Kevin Owino Odhiambo
Email: manodhiambo@gmail.com
GitHub: https://github.com/manodhiambo
