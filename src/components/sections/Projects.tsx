import React from 'react';

// Defina seu tipo de Props, se necessário
interface Project {
    id: number;
    title: string;
    description: string;
}

const projects: Project[] = [
    { id: 1, title: 'Projeto 1', description: 'Descrição do projeto 1' },
    { id: 2, title: 'Projeto 2', description: 'Descrição do projeto 2' },
    // Adicione mais projetos conforme necessário
];

const Projects: React.FC = () => {
    return (
        <div>
            <h1>Meus Projetos</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;