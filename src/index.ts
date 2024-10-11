import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const PORT = 3001;


app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

morgan.token('body', (req: Request) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

interface Person {
  id: number;
  name: string;
  number: string;
}


interface CreatePersonRequest {
  name: string;
  number: string;
}

let persons: Person[] = [
  { id: 1, name: "Juan Peres", number: "99123456" },
  { id: 2, name: "Maria Ramos", number: "925323523" },
  { id: 3, name: "Pedro Gonzales", number: "95234345" },
  { id: 4, name: "Jose Guzman", number: "926423122" },
];


app.get('/api/persons', (req: Request, res: Response) => {
  res.json(persons);
});

app.get('/info', (req: Request, res: Response) => {
  const date = new Date();
  const message = `
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${date}</p>
  `;
  res.send(message);
});

app.get('/api/persons/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const person = persons.find(p => p.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).send({ error: 'Person not found' });
  }
});

app.delete('/api/persons/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  persons = persons.filter(p => p.id !== id);
  res.status(204).end();
});



app.post('/api/persons', (req: Request<{}, {}, CreatePersonRequest>, res: Response, next: NextFunction) => {
  const { name, number } = req.body;

  if (!name || !number) {
    res.status(400).json({ error: 'Name or number is missing' });
    return;
  }

  const nameExists = persons.some(p => p.name === name);
  if (nameExists) {
    res.status(400).json({ error: 'Name must be unique' });
    return;
  }

  const newPerson: Person = {
    id: Math.floor(Math.random() * 10000),
    name,
    number
  };


  persons = [...persons, newPerson];

  res.status(201).json(newPerson);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
