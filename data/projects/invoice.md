---
title: Invoice System
tags:
  - Go
  - HTMX
  - Templ
  - Tailwind
  - sqlite
featured: true
websiteUrl:
githubUrl:
---

Together with my wife I started a small company. As soon as we got our first customer and had to create an invoice for them, I was annoyed by the creation of the invoice, the layout and the manual process of it.

The developer in me thought it would be better to automate it. I decided that this was a good opportunity to try out new technologies. The idea was simple: An application that manages invoices and customers, and has the ability to generate a pdf, based on a template. LaTeX was a natural fit for the PDF template part.

The application is written in Go, a beautiful and simplistic language. It sets up an http server that serves server-generated HTML files, based on Templ templates. HTMX is used for the small reactivity part in the pages (e.g. making AJAX-requests). The styling is done by Tailwindcss. I had to try it.

The whole application runs in a docker container, with persistent volumes for the generated pdf's and the sqlite database.

### Technologies/tools

Go, HTMX, Templ, Tailwind, LaTeX
