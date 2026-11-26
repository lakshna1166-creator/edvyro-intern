# FirstStep – Responsive Internship Board

A modern, responsive Internship Board developed using **HTML5, CSS3, and JavaScript**. FirstStep helps users explore internship opportunities through an interactive interface with keyword search, domain filters, and responsive internship cards.

The project focuses on creating a simple, accessible, and user-friendly experience across desktop, tablet, and mobile devices.

## 🌐 Project Links

- **GitHub Repository:** [Add your GitHub repository URL]
- **Live Demo:** [Add your deployed website URL]

## 📌 Project Overview

FirstStep is a beginner-friendly frontend web development project designed to demonstrate how internship opportunities can be displayed and explored through a responsive website.

The application loads internship records from a JSON file and dynamically displays them as cards. Users can search for opportunities using keywords and filter listings based on their preferred domain.

The interface uses a clean layout, soft colours, interactive elements, and subtle animations to make browsing convenient.

> **Note:** This project uses fictional sample internship records for demonstration and learning purposes. It is not a live recruitment platform, and the displayed opportunities should not be treated as actual vacancies.

## ✨ Key Features

### 1. Internship Listings
- Displays internship opportunities in individual cards.
- Shows internship title and company name.
- Displays work mode and location.
- Shows required skills and number of openings.
- Uses company initials as visual identifiers.

### 2. Search Functionality
- Search internships using keywords.
- Search by internship title.
- Search by company name.
- Search by skills, domain, work mode, and location.
- Updates the displayed results dynamically.

### 3. Domain Filtering
- Filter internships based on their domain.
- Includes quick-filter options for convenient navigation.
- Updates the active filter state.
- Allows users to reset filters and view all opportunities.

### 4. Responsive Design
- Mobile-friendly layout.
- Tablet-friendly card arrangement.
- Multi-column desktop layout.
- Responsive search and filter controls.
- Consistent spacing and readable typography across screen sizes.

### 5. Interactive User Interface
- Smooth hover effects and transitions.
- Subtle card entrance animations.
- Interactive filter controls.
- Clear visual feedback for keyboard focus.
- Convenient navigation and search interactions.

### 6. Accessibility
- Semantic HTML elements.
- Properly labelled form controls.
- Skip-to-content link.
- Keyboard-friendly navigation.
- Visible focus indicators.
- Live announcements for updated search results.
- Reduced-motion support for users who prefer fewer animations.

### 7. Empty and Error States
- Displays a helpful message when no internships match the search.
- Provides an error message if the internship data cannot be loaded.
- Includes a retry option for data-loading errors.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic webpage structure |
| CSS3 | Styling, layouts, animations, and responsiveness |
| JavaScript | DOM manipulation, search, filtering, and interactions |
| JSON | Storing internship sample records |
| Git & GitHub | Version control and source code hosting |
| GitHub Pages / Vercel | Website deployment |

## 📂 Project Structure

```text
responsive-internship-board/
│
├── index.html
│
├── style.css
│
├── script.js
│
├── data/
│   └── internships.json
│
├── screenshots/
│   ├── desktop.png
│   ├── tablet.png
│   └── mobile.png
│
└── README.md
```

### File Description

- **index.html:** Contains the semantic structure of the website.
- **style.css:** Contains the visual design, responsive layouts, and animations.
- **script.js:** Handles JSON loading, dynamic card rendering, search, filtering, and user interactions.
- **data/internships.json:** Stores the sample internship records.
- **screenshots/:** Contains screenshots of the application on different devices.
- **README.md:** Provides project information and setup instructions.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- A computer with a modern web browser.
- Visual Studio Code or another code editor.
- Live Server extension (recommended) or Python.

### Step 1: Clone the Repository

Open your terminal and run:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Open the Project

```bash
cd responsive-internship-board
```

Open the project folder in Visual Studio Code or Antigravity.

### Step 3: Run the Application

**Option 1 – Using Live Server**

1. Open `index.html`.
2. Right-click the file.
3. Select **Open with Live Server**.
4. The application will open in your browser.

**Option 2 – Using Python**

Run this command from the project directory:

```bash
python -m http.server 5500
```

Open the following address in your browser:

```text
http://localhost:5500
```

**Important:** Run the project through a local web server because JavaScript fetches the internship records from the JSON file. Opening `index.html` directly using `file://` may prevent the data from loading.

## 🔍 Sample Internship Domains

The project includes five sample internship records across these domains:

| Internship Role | Domain | Work Mode |
|---|---|---|
| Frontend Intern | Full Stack Development | Remote |
| API Engineering Intern | Full Stack Development | Hybrid |
| UI/UX Intern | UI/UX | Remote |
| Data Analyst Intern | Data Analytics | On-site |
| Security Operations Intern | Cyber Security | Remote |

The sample company names and internship details are illustrative.

## 📱 Responsive Design

The website is designed to adapt to different screen sizes.

- **Mobile:** Single-column internship cards and convenient controls.
- **Tablet:** Two-column card layout.
- **Desktop:** Three-column card layout with comfortable spacing.

## 🖼️ Screenshots

Add screenshots after running and testing the application.

### Desktop View

![Desktop Preview](screenshots/desktop.png)

### Tablet View

![Tablet Preview](screenshots/tablet.png)

### Mobile View

![Mobile Preview](screenshots/mobile.png)

## 🧪 Testing Checklist

The following tests should be performed before final submission.

| Test Case | Expected Result |
|---|---|
| Open website | Homepage loads successfully |
| Load internship data | Internship cards appear |
| Search by title | Matching internships appear |
| Search by skill | Relevant results appear |
| Apply domain filter | Only matching internships appear |
| Reset filters | All internship cards reappear |
| No matching results | Empty-state message appears |
| JSON loading failure | Error message and retry option appear |
| Keyboard navigation | Controls are accessible using the keyboard |
| Mobile screen | Layout adapts correctly |
| Tablet screen | Cards display in a suitable layout |
| Desktop screen | Three-column layout displays correctly |

Update this checklist only after personally verifying each test.

## ☁️ Deployment

This is a static frontend project and can be deployed using GitHub Pages or Vercel.

### GitHub Pages

1. Push the project files to a public GitHub repository.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)` folder.
6. Save the settings.
7. Wait for deployment and copy the published URL.

### Vercel

1. Sign in to Vercel using your GitHub account.
2. Select **Add New → Project**.
3. Import your GitHub repository.
4. Keep the framework preset as **Other**.
5. Leave the build command and output directory empty for this static project.
6. Deploy the project.
7. Copy the generated deployment URL.

Keep the original folder structure so the JSON data file can be loaded correctly after deployment.

## 🎯 Learning Outcomes

Through this project, the following concepts are practised:

- Writing semantic HTML.
- Creating responsive layouts using CSS Grid and Flexbox.
- Understanding DOM manipulation.
- Loading and handling JSON data.
- Dynamically rendering content using JavaScript.
- Implementing search and filtering functionality.
- Handling empty and error states.
- Creating accessible and keyboard-friendly interactions.
- Using GitHub for source code management.
- Deploying a static website.

## 👩‍💻 Author

**Lakshna**

Computer Science and Engineering Student

Developed as part of the **EdVyro Full Stack Development Virtual Internship**.

## 📄 License

This project is created for educational and learning purposes. You may use and modify the source code for learning, with appropriate attribution.
