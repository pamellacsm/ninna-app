import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', app: 'NINNA API', timestamp: new Date().toISOString() });
});

app.get('/api/auth/login-demo', (_req, res) => {
  res.json({
    message: 'Login demo da NINNA',
    user: 'Pâmella Mourão',
    plan: 'premium',
    success: true,
  });
});

app.get('/api/babies', (_req, res) => {
  res.json({
    babies: [
      { id: '1', name: 'Miguel', ageMonths: 8, ageText: '8 meses e 12 dias' },
      { id: '2', name: 'Lívia', ageMonths: 18, ageText: '1 ano e 6 meses' },
    ],
  });
});

app.get('/api/reports/pediatric', (_req, res) => {
  res.json({
    period: 'Últimos 7 dias',
    summary: 'Sono está consistente e alimentação regular. A família registrou 4 episódios de fralda e 1 episódio de temperatura.',
  });
});

app.listen(port, () => {
  console.log(`NINNA API running on http://localhost:${port}`);
});
