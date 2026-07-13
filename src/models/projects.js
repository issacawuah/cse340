import db from "./db.js";

async function getAllProjects() {
    const SQL = `
        SELECT 
            projects.project_id,
            projects.title,
            projects.description,
            projects.location,
            projects.project_date,
            organizations.name AS organization_name
        FROM projects
        JOIN organizations
        ON projects.organization_id = organizations.organization_id
        ORDER BY projects.project_date;
    `;

    const result = await db.query(SQL);
    return result.rows;
}

export { getAllProjects };