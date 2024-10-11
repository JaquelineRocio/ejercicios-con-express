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
  { id: 1, name: "Arto Hellas", number: "040-123456" },
  { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
  { id: 3, name: "Dan Abramov", number: "12-43-234345" },
  { id: 4, name: "Mary Poppendieck", number: "39-23-6423122" },
];

app.get('/api/persons', (req: Request, res: Response) => {
  res.json(persons);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
