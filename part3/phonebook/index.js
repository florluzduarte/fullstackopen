require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const Person = require("./models/person");

app.use(express.static("dist"));
app.use(express.json());

app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      JSON.stringify(req.body),
    ].join(" ");
  }),
);

app.get("/", (request, response) => {
  response.send("<h1>Phonebook API</h1>");
});

app.get("/api/persons", (request, response) => {
  Person.find({}).then((result) => {
    response.json(result);
  });
});

app.get("/info", (request, response, next) => {
  const now = new Date().toString();
  Person.find({})
    .then((result) => {
      const count = result.length;
      const htmlResponse = `<p>Phonebook has info for ${count} people</p> <p>${now}</p>`;
      response.send(htmlResponse);
    })
    .catch((error) => next(error));
});

app.get("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;

  Person.findById(id)
    .then((personFound) => {
      if (personFound) {
        response.json(personFound);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  Person.findByIdAndDelete(id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.post("/api/persons", (request, response, next) => {
  const body = request.body;
  const { name, number } = body;

  if (!name || !number) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const checkMatch = Person.find({ name: name }).exec();

  checkMatch.then((result) => {
    if (result.length === 0) {
      const person = new Person({
        name: name,
        number: number,
      });

      person
        .save()
        .then((savedPerson) => {
          response.json(savedPerson);
        })
        .catch((error) => {
          next(error);
        });
    }
  });
});

app.put("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  const { name, number } = request.body;

  Person.findOneAndUpdate(
    { _id: id },
    { name: name, number: number },
    {
      runValidators: true,
      returnDocument: "after",
    },
  )
    .then((updatedPerson) => {
      response.json(updatedPerson);
    })
    .catch((error) => next(error));
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "404 - Not Found" });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);
  if (error.name === "CastError") {
    return response.status(400).send({ error: "Malformatted ID" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }
  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
