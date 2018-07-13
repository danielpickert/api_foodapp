## Developing a plan

1.  App concept: A form to input an ingredient and get back recipes for dishes that contain that ingredient.

2.  What do we want the app to do?

- take request for the dish
- read the request
- pull the necessary data from an api
- display such data

3.  What components will we need?

- Display/Main
- Search

4.  What functions will we need?

- Display recipe name
- Fetch recipe
- Link to go Home
- Event listener for click
- Authentication\*\*

5.  What do we want the user profile to look like?

- What special features do you users have?
- What are they updating? Can they Delete?

6.  What folders are needed?

```
├── API_FOODAPP
├───db
│   ├──connection.js
│   ├──models.js
│   ├──schema.js
│   └──seed.js
├──passport
│   ├── index.js
│   └──localStrategy.js
├──Planning
│   └──Plan.md
├── routes
│   └──users.js
├── .gitignore
├── app.js
├── package-lock.json
│-── package.json
└── README.md
```
