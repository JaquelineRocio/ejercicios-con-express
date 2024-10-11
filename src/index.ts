import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

interface Person {
  id: number;
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
