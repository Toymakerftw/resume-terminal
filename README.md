# Terminal Portfolio - Anandhraman

![Terminal Portfolio Screenshot](https://raw.githubusercontent.com/Toymakerftw/resume-terminal/master/src/assets/preview.png)

A modern, interactive terminal-style portfolio website for C.V. Anandhraman, showcasing skills, experience, and projects as a Site Reliability Engineer.

## Features

- **Interactive Terminal Interface**: Navigate using familiar terminal commands
- **Responsive Design**: Works on desktop and mobile devices
- **Comprehensive Sections**:
  - About me
  - Work experience
  - Projects
  - Technical skills
  - Education & certifications
  - Contact information
  - Resume download
- **Neofetch-style Summary**: Quick overview of professional profile
- **Social Media Integration**: Direct links to GitHub, LinkedIn, etc.
- **Command History**: Maintains session history like a real terminal

## Available Commands

| Command        | Description                          |
|----------------|--------------------------------------|
| `help`         | Show available commands              |
| `about`        | Display information about me         |
| `experience`   | Show work experience                 |
| `projects`     | View my projects                     |
| `skills`       | List technical skills                |
| `education`    | Show educational background          |
| `certifications` | View certifications                |
| `contact`      | Get contact information              |
| `resume`       | Download my resume                   |
| `clear`        | Clear the terminal screen            |
| `ls`           | List available sections              |
| `whoami`       | Display current user                 |
| `date`         | Display current date and time        |
| `summary`      | Display system information (neofetch)|

## Technologies Used

- **Frontend**: React.js with Vite
- **UI Components**: Lucide React icons
- **Styling**: Tailwind CSS
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Toymakerftw/resume-terminal.git
   ```
2. Navigate to the project directory:
   ```bash
   cd resume-terminal
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Deployment

The application is configured for easy deployment to Vercel:

1. Push your changes to GitHub
2. Connect your Vercel account to the repository
3. Vercel will automatically detect and deploy the React application

## Customization

To customize this portfolio for your own use:

1. Update personal information in `TerminalPortfolio.jsx`:
   - Social links
   - Work experience
   - Projects
   - Skills
   - Education and certifications
   - Contact information

2. Replace the profile image in `./assets/profile.png`

3. Update the resume PDF in `./assets/resume.pdf`

4. Modify the HTML meta tags in `index.html` for SEO

## SEO Optimization

The portfolio includes comprehensive SEO meta tags for:
- Search engines (description, keywords)
- Social media sharing (OpenGraph, Twitter Cards)
- Mobile responsiveness
- Accessibility

## Analytics

The application includes Vercel Analytics for basic usage tracking (can be removed if not needed).

## License

This project is open-source and available under the MIT License.

---

**C.V. Anandhraman**  
Site Reliability Engineer  
[GitHub](https://github.com/toymakerftw) | [LinkedIn](https://linkedin.com/in/anandh-raman) | [Email](mailto:mail.anandhraman@gmail.com)
