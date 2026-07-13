-- 1. Create organizations
CREATE TABLE organizations (...);

-- 2. Insert organizations
INSERT INTO organizations (...);


-- 3. Create projects
CREATE TABLE projects (...);

-- 4. Insert projects
INSERT INTO projects (...);


-- 5. Create categories
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE
);

-- 6. Insert categories
INSERT INTO categories (category_name)
VALUES
('Education'),
('Environment'),
('Community Service');


-- 7. Create project_categories FIRST
CREATE TABLE project_categories (
    project_id INT NOT NULL,
    category_id INT NOT NULL,

    PRIMARY KEY (project_id, category_id),

    FOREIGN KEY (project_id)
        REFERENCES projects(project_id)
        ON DELETE CASCADE,

    FOREIGN KEY (category_id)
        REFERENCES categories(category_id)
        ON DELETE CASCADE
);


-- 8. Insert project/category connections LAST
INSERT INTO project_categories (project_id, category_id)
VALUES
(1,3),
(2,3),
(3,1),
(4,2),
(5,1),
(6,2),
(7,3),
(8,1),
(9,2),
(10,1),
(11,3),
(12,3),
(13,1),
(14,3),
(15,3);