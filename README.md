# Cloud Resume Challenge — AWS

This repository documents my journey through the [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/) a hands-on project to build and deploy a cloud-native resume website using AWS services, Infrastructure as Code, and CI/CD pipelines.

**Live Site:** 

**Blog Post:**

---

## Progress Checklist

- [ ] **Certification** — AWS Cloud Practitioner (or higher)
- [x] **HTML** — Resume webpage markup
- [x] **CSS** — Styling for the resume site
- [x] **Static Website** — Hosted on Amazon S3
- [x] **HTTPS** — Served securely via CloudFront
- [x] **DNS** — Custom domain configured with Hostinger
- [x] **JavaScript** — Visitor counter functionality
- [x] **Database** — DynamoDB table for visitor count
- [x] **API** — API Gateway endpoint
- [x] **Python** — Lambda function for visitor count logic
- [ ] **Tests** — Unit tests for Lambda function
- [ ] **Infrastructure as Code** — Backend defined via SAM / CDK / CloudFormation / Terraform
- [ ] **Source Control** — Code hosted on GitHub
- [ ] **Backend CI/CD** — Automated backend deployment pipeline
- [ ] **Frontend CI/CD** — Automated frontend deployment pipeline
- [ ] **Blog Post** — Written summary of the experience

### Stretch Goals
- [ ] Integration tests
- [ ] Infrastructure testing
- [ ] CloudWatch monitoring/alerting
- [ ] Multienvironment (dev/prod) setup

---

## Architecture


**Tech Stack:**
- **Frontend:** HTML, CSS, JavaScript
- **Hosting:** Amazon S3, CloudFront, Hostinger
- **Backend:** AWS Lambda (Python), API Gateway, DynamoDB
- **IaC:** (SAM / CDK / Terraform — specify once chosen)
- **CI/CD:** GitHub Actions

---

## Repository Structure
cloud-resume-challenge/
├── frontend/
│   ├── index.html          # Resume Webpage
│   ├── counter.js          # Visitor counter functionality
│   └── css/
│       └── style.css       # Resume Styling
├── backend/
│   └── lambda_function.py  # AWS Lambda function for visitor count
├── assets/                 # Fonts
├── README.md
└── .gitignore

---

## Getting Started

Instructions on how to run/deploy this project locally or via CI/CD will go here once implemented.

---

## Notes / Learnings

_(Use this space to jot down challenges, solutions, and key takeaways as you progress through the project.)_

---

## License

This project is open source and available under the MIT License.




