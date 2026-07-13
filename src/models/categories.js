import db from "./db.js";

async function getAllCategories() {
    const SQL = `
        SELECT *
        FROM categories
        ORDER BY category_name;
    `;

    const result = await db.query(SQL);
    return result.rows;
}

export { getAllCategories };