# Personal Portfolio Website

A personal portfolio website hosted on a Raspberry Pi to showcase my skills and projects.  

This project demonstrates a full-stack setup with a React front-end, Spring Boot back-end, and PostgreSQL database, all running on a self-hosted Raspberry Pi with secure deployment.

## Features

- **React - Spring Boot full-stack application**
- Automatic deployment from GitHub using webhooks, Python, and bash scripts
- Served securely via **Nginx reverse proxy** with HTTPS configured via **Certbot**
- PostgreSQL database hosted locally for storing content and future features
- Responsive design for desktop and mobile

## Tech Stack

- **Front-end:** React, HTML, CSS, JavaScript  
- **Back-end:** Spring Boot (Java 21)  
- **Database:** PostgreSQL
- **Server & Deployment:** Raspberry Pi, Nginx, Gunicorn, Python, Bash scripts  
- **Domain & Security:** Custom domain with HTTPS and SSL certification  

## Deployment

This project is automatically deployed to the Raspberry Pi when a new commit is pushed to the `main` branch using a GitHub webhook.  
