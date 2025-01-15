
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5500'
}));
app.use(bodyParser.json());
app.use(express.json());


app.get('/test', (req, res) => {
    res.json({ message: 'Le serveur fonctionne !' });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

export default app;