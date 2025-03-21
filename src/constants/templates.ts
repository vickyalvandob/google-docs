export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: "/blank-document.svg",
        initialContent: ""
    },
    {
        id: "software-proposal",
        label: "Software Development Proposal",
        imageUrl: "/software-proposal.svg",
        initialContent: `
            <h1>Software Development Proposal</h1>
            <p>This proposal outlines a tailored software development solution designed to meet your business needs. It includes background information, objectives, methodology, timeline, and a budget estimate.</p>
        `
    },
    {
        id: "project-proposal",
        label: "Project Proposal",
        imageUrl: "/project-proposal.svg",
        initialContent: `
            <h1>Project Proposal</h1>
            <p>This document provides an overview of the project, including its objectives, deliverables, methodology, schedule, and expected outcomes. Use this proposal to understand the scope and strategy of the project.</p>
        `
    },
    {
        id: "business-letter",
        label: "Business Letter",
        imageUrl: "/business-letter.svg",
        initialContent: `
            <h1>Business Letter</h1>
            <p>[Company Letterhead]</p>
            <p>Date: [Enter Date]</p>
            <p>Recipient Name<br>Recipient Address</p>
            <p>Subject: [Enter Subject]</p>
            <p>Dear [Recipient Name],</p>
            <p>[Enter your message here]</p>
            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg",
        initialContent: `
            <h1>Resume</h1>
            <p><strong>Name:</strong> [Your Name]</p>
            <p><strong>Contact:</strong> [Email | Phone | Address]</p>
            <h2>Professional Summary</h2>
            <p>[A brief description of your qualifications and experience]</p>
            <h2>Work Experience</h2>
            <p>[Job Title] - [Company Name]</p>
            <h2>Education</h2>
            <p>[Degree] - [Institution Name]</p>
            <h2>Skills</h2>
            <p>[List your skills]</p>
        `
    },
    {
        id: "cover-letter",
        label: "Cover Letter",
        imageUrl: "/cover-letter.svg",
        initialContent: `
            <h1>Cover Letter</h1>
            <p>Dear Hiring Manager,</p>
            <p>I am writing to express my interest in the [Position Title] at [Company Name]. With a background in [Your Field], I am confident in my ability to make a positive contribution to your team.</p>
            <p>[Additional information about your qualifications and suitability for the role]</p>
            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `
    },
    {
        id: "letter2A",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: `
            <h1>Letter</h1>
            <p>Dear [Recipient Name],</p>
            <p>[Write your letter content here]</p>
            <p>Thank you for your attention.</p>
            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `
    },
    {
        id: "letter2",
        label: "Letter 2",
        imageUrl: "/letter.svg",
        initialContent: `
            <h1>Letter</h1>
            <p>Dear [Recipient Name],</p>
            <p>[Write your message or information here]</p>
            <p>I look forward to your response.</p>
            <p>Warm regards,</p>
            <p>[Your Name]</p>
        `
    }
];
