# 0.6: New note in Single page app diagram

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: User inputs new note in form
    activate browser
    browser->>user: Browser executes spa.js file to render a new note.
    deactivate browser

    browser->>server: spa.js triggers POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server->>browser: Response: status code 201 (created)
    deactivate server

    Note right of browser: The SPA version of the app does not traditionally send the form data, but instead uses the JavaScript code it fetched previously from the server.
```
