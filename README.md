# Cloud Resume Challenge - AWS

This repository documents my journey through the [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/), a hands-on project to build and deploy a cloud-native resume website using AWS services, Infrastructure as Code, and CI/CD pipelines.

**Live Site:** [Click to view Cloud Resume Challenge Site](https://timbaines.me)

**Blog Post:** *In Process*

---

## Progress Checklist

- [ ] **Certification** — AWS Cloud Practitioner (or higher) - *exam not yet scheduled*
- [x] **HTML** — Resume webpage markup
- [x] **CSS** — Styling for the resume site
- [x] **Static Website** — Hosted on Amazon S3
- [x] **HTTPS** — Served securely via CloudFront
- [x] **SSL/TLS Certificate** — Issued via AWS Certificate Manager (ACM)
- [x] **DNS** — Custom domain configured with Hostinger
- [x] **JavaScript** — Visitor counter functionality
- [x] **Database** — DynamoDB table for visitor count
- [x] **API** — API Gateway endpoint
- [x] **Python** — Lambda function for visitor count logic
- [ ] **Tests** — Unit tests for Lambda function
- [ ] **Infrastructure as Code** — Backend defined via SAM / CDK / CloudFormation / Terraform
- [x] **Source Control** — Code hosted on GitHub
- [ ] **Backend CI/CD** — Automated backend deployment pipeline
- [ ] **Frontend CI/CD** — Automated frontend deployment pipeline
- [ ] **Blog Post** — Written summary of the experience

*Last Updated: September 2026*

### Stretch Goals
- [ ] Integration tests
- [ ] Infrastructure testing
- [ ] CloudWatch monitoring/alerting
- [ ] Multi-environment (dev/prod) setup

---

## Architecture

**Tech Stack:**
- **Frontend:** HTML, CSS, JavaScript
- **Hosting:** Amazon S3, CloudFront, AWS Certificate Manager (ACM), Hostinger
- **Backend:** AWS Lambda (Python), API Gateway, DynamoDB
- **IaC:** (SAM / CDK / Terraform - TBD)
- **CI/CD:** GitHub Actions

---

## Project File Structure
```
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
```

---

## Getting Started

Instructions on how to run/deploy this project locally or via CI/CD will go here once Infrastructure as Code and CI/CD pipelines are implemented. Currently, the site is deployed manually by uploading static files directly to the S3 bucket.

---

## How the Frontend Works

### Visitor Counter (`counter.js`)

The visitor counter on the frontend fetches the current count from an API Gateway endpoint on page load and updates the DOM once the response is resolved.

- **Loading and error states:** When waiting on the API response, the counter displays a loading indicator (`...`). If the fetch fails, it falls back to an error indicator (`---`) that renders a message stating the "Counter is temporarily unavailable," instead of the page breaking, for a better user experience.
- **Test mode:** The `TEST_MODE` flag allows me to simulate an API response locally with `Math.floor(Math.random() * 10000) + 1`, that generates a randomized count between 1 and 10,000 on each page refresh. This was useful for testing and designing the UI while avoiding unnecessary requests to the live Lambda function during development and prior to the CI/CD step.

**Growth Opportunities:** The counter element is currently queried from the DOM in two separate places (`updateCounterInterface` and `initializeCounter`). As I continue strengthening my JavaScript skills, I plan to refactor the code to cache the element once and reuse it.

---

## Credits

- **Semantic HTML foundations:** I learned how to create a clean, semantic HTML structure after completing lessons from [Jonas Schmedtmann](https://jonas.io). His courses taught me how to think through HTML structure properly as opposed to making it work with an overabundance of `divs`. His coursework also reinforced my habit of organizing code with clearly labeled comments for each section, before ever using AI tools.

---

## Development Notes

### AI Usage & Transparency

I used AI as a tool for efficiency in specific areas, while being mindful to use it safely and responsibly, not as a shortcut around my learning process. My goal throughout this project is to understand each step and the code involved in building it.

**Details of AI Usage:**

- **AI to generate README checklist:** At the beginning of this project, I used AI to scrape the official Cloud Resume Challenge requirements to help generate a progress checklist for this README file, including boilerplate structure and stretch goals beyond the core challenge.
- **AI as a JavaScript mentor:** While refactoring the `counter.js` file, I used AI to help me think through different patterns for DOM element caching (storing a reference to a page element once instead of repeatedly searching for it), loading/error state handling, and the fetch logic, followed by implementing and adjusting the code myself.
- **AI to scaffold the Python logic:** I leveraged AI and online resources to write the Python logic for the Lambda function, which increments and retrieves the visitor count through DynamoDB. I reviewed the code and manually verified that it worked in the Lambda console to make sure I understood how it functioned. The automated unit tests for this function are still on the checklist and has not been completed.

---

## Project Challenges I Worked Through

- I learned to verify the selected region before creating AWS resources. The console sometimes defaulted to `United States (Ohio)` instead of `United States (N. Virginia)`, which could place related services in different regions and create configuration issues.
- S3 bucket names have to exactly match the custom domain for static website hosting to route correctly. I learned this afterward and the quickest way to resolve the issue was to delete and recreate a bucket.
- Since my domain is registered with Hostinger instead of Route 53, I handled the DNS validation by routing manually through Hostinger. I added one CNAME record provided by AWS Certificate Manager (ACM) to validate the certificate and another CNAME record pointing my subdomain to the CloudFront distribution.

---

## What I Have Learned From This Challenge

- The review of the visitor counter helped me understand that I was searching for the same page element more than once. I learned that I can find the element once, save it in a variable, and reuse it in multiple functions.
- Since I am new to Python, the review of the Lambda function challenged me to understand code that I did not write. I learned how it handles errors and how DynamoDB is used to update the visitor count.
- Reviewing the Lambda response helped me understand the concept of how a backend sends data to a frontend. I learned that the status code communicates if a request was successful, headers describe the response and support cross-origin requests, and `json.dumps()` converts the visitor count into a JSON formatted string that JavaScript can read.

---




