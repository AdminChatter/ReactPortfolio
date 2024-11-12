import './style.css';

const Resume = () => {
    return (
        <div className="container-fluid">
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title">Resume</h1>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        <a href="https://drive.google.com/file/d/1FjQh1V8XoL2Pv7XwL0yf7Y4lZ5HmTJ4J/view?usp=sharing" target="_blank" rel="noreferrer">Download my resume here</a>
                    </p>

                    <h2>Front-End Proficiencies</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>responsive design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>

                    <h2>Back-End Proficiencies</h2>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resume;