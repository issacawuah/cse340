import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
 
import { getAllCategories } from "./src/models/categories.js";
import { getAllProjects } from "./src/models/projects.js";
import { getAllOrganizations } from "./src/models/organizations.js";
import { testConnection } from './src/models/db.js';



const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'production';
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.get('/', async (req, res) => {
  const title = 'Home';
  res.render('home', { title });
});

app.get('/organizations', async (req, res) => {
  try {
    const organizations = await getAllOrganizations();
    const title = 'Our Partner Organizations';

    res.render('organizations', { title, organizations });
  } catch (err) {
    console.error('Failed to load organizations:', err);
    res.render('organizations', {
      title: 'Our Partner Organizations',
      organizations: []
    });
  }
});

app.get('/projects', async (req, res) => {
  try {
    const title = 'Service Projects';
    const projects = await getAllProjects();

    res.render('projects', {
      title,
      projects
    });
  } catch (err) {
    console.error('Failed to load projects:', err);
    res.render('projects', {
      title: 'Service Projects',
      projects: []
    });
  }
});

app.get("/categories", async (req, res) => {
  try {
    const categories = await getAllCategories();

    res.render("categories", {
      title: "Service Project Categories",
      categories
    });
  } catch (err) {
    console.error('Failed to load categories:', err);

    res.render("categories", {
      title: "Service Project Categories",
      categories: []
    });
  }
});

app.listen(PORT, async () => {
  try {
    await testConnection();
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
    console.log(`Environment: ${NODE_ENV}`);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
});

  if (!dbConfigured) {
    console.error('Set DB_URL or DATABASE_URL in Render environment variables.');
    return;
  }

  try {
    await testConnection();
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
});
app.listen(PORT, async () => {
  try {
    await testConnection();
    console.log(...);
  } catch (error) {
    console.error(...);
  }
});
return; // <-- stray return outside any function

