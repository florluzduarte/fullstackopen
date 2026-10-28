# Fullstack Open: Exercises

## Part 0

- 0.4 --> New note diagram
- 0.5 --> Single page app diagram
- 0.6 --> New note spa diagram

## Part 1

- courseInformation
  - 1.1: Course Information, step 1
  - 1.2: Course Information, step 2
  - 1.3: Course Information step 3
  - 1.4: Course Information step 4
  - 1.5: Course Information step 5
- unicafe
  - 1.6: unicafe step 1
  - 1.7: unicafe step 2
  - 1.8: unicafe step 3
  - 1.9: unicafe step 4
  - 1.10: unicafe step 5
  - 1.11\*: unicafe step 6
- anecdotes
  - 1.12\*: anecdotes step 1
  - 1.13\*: anecdotes step 2
  - 1.14\*: anecdotes step 3

## Part 2

- courseInformation
  - 2.1: Course information step 6
  - 2.2: Course information step 7
  - 2.3\*: Course information step 8
  - 2.4: Course information step 9
  - 2.5: Separate module step 10
- phonebook
  - 2.6: The Phonebook Step 1 --> Create phonebook app
  - 2.7: The Phonebook Step 2 --> Add new names to phonebook
  - 2.8: The Phonebook Step 3 --> Allow users to add phone numbers to new entries
  - 2.9\*: The Phonebook Step 4 --> Implement a search field
  - 2.10: The Phonebook Step 5 --> Refactor and create reusable components
  - 2.11: The Phonebook Step 6 --> Get initial data from server
  - 2.12: The Phonebook step 7 --> Save new entries to backend
  - 2.13: The Phonebook step 8 --> Create backend communication module
  - 2.14: The Phonebook step 9 --> Delete entries from phonebook
  - 2.15\*: The Phonebook step 10 --> Replace old phone number
  - 2.16: Phonebook step 11 --> Add Notification component
  - 2.17\*: Phonebook step 12 --> Handle errors on delete
- countries
  - 2.18\* Data for countries, step 1 --> Connect API + Display list of filtered countries
  - 2.19\*: Data for countries, step 2 --> Add show button
  - 2.20\*: Data for countries, step 3 --> Add weather API data

# Part 3

- phonebook: 🌐 Deploy --> https://phonebook-empty-horizon-3209.fly.dev/
  - 3.1: Phonebook backend step 1 --> Create Express app + GET api/persons route
  - 3.2: Phonebook backend step 2 --> Create GET /info API route
  - 3.3: Phonebook backend step 3 --> Create GET /api/persons/id for displaying the information for a single phonebook entry
  - 3.4: Phonebook backend step 4 --> Create DELETE /api/persons/id route for deleting the information for a single phonebook entry
  - 3.5: Phonebook backend step 5 --> Create POST /api/persons route for adding new phonebook entries
  - 3.6: Phonebook backend step 6 --> POST /api/persons error handling
  - 3.7: Phonebook backend step 7 --> Add Morgan with _tiny_ config
  - 3.8\*: Phonebook backend step 8 --> Morgan config to log POST requests
  - 3.9 Phonebook backend step 9 --> Connect with frontend app from Part 2
  - 3.10 Phonebook backend step 10 --> Deploy phonebook API with fly.io --> https://phonebook-empty-horizon-3209.fly.dev/
  - 3.11 Full Stack Phonebook --> Fullstack version + local dev environment working
  - 3.12: Command-line database --> Add connection to MongoDB for adding entries to the phonebook
  - 3.13: Phonebook database, step 1 --> Get all entries from MongoDB instance + person model module
  - 3.14: Phonebook database, step 2 --> Add new entries to MongoDB instance
  - 3.15: Phonebook database, step 3 --> Delete entries from MongoDB instance
  - 3.16: Phonebook database, step 4 --> Add error handler middleware
  - 3.17\*: Phonebook database, step 5 --> Add PUT endpoint for updating existing contacts
  - 3.18\*: Phonebook database step 6 --> Fix /info and /api/persons/:id endpoints to work with MongoDB
  - 3.19\*: Phonebook database, step 7 --> Add validations for new entries
  - 3.20\*: Phonebook database, step 8 --> Add phone number validation for new and updated entries
