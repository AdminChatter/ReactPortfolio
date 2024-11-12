import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/AdminChatter/repos');
                setProjects(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading repositories: {error.message}</p>;

    return (
        <div className="container-fluid">
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title">Portfolio</h1>
                </div>
                <div className="card-body">
                    <ul>
                        {projects.map((project) => (
                            <li key={project.id}>
                                <a href={project.html_url} target="_blank" rel="noreferrer">
                                    {project.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;