// pages/index.js
import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';

export default function Home() {
  const [horarios, setHorarios] = useState([]);
  const [dataAtual, setDataAtual] = useState(new Date());
  const [agendamentos, setAgendamentos] = useState({});
  const [timeA, setTimeA] = useState('');
  const [timeB, setTimeB] = useState('');

  const feriados = ['2024-12-25', '2025-01-01'];

  function isFeriadoHoje() {
    const hoje = new Date().toISOString().split('T')[0];
    return feriados.includes(hoje);
  }

  function gerarHorarios() {
    const hoje = new Date();
    const diaSemana = hoje.getDay();
    const feriado = isFeriadoHoje();
    let horaInicio = (feriado || diaSemana === 0 || diaSemana === 6) ? 14 : 17;
    const horaFim = 23;
    const lista = [];
    for (let hora = horaInicio; hora <= horaFim; hora++) {
      lista.push(`${hora}:00`);
    }
    setHorarios(lista);
  }

  function agendarHorario(horario) {
    if (timeA && timeB && !agendamentos[horario]) {
      setAgendamentos({ ...agendamentos, [horario]: { timeA, timeB } });
      setTimeA('');
      setTimeB('');
    }
  }

  useEffect(() => {
    gerarHorarios();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <Typography variant="h4" gutterBottom>
        ⚽ Agendamento de Campo
      </Typography>
      <Typography variant="h6" gutterBottom>
        {dataAtual.toLocaleDateString('pt-BR')}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Preencha os nomes dos times e selecione um horário disponível:
      </Typography>

      <Grid container spacing={2} marginBottom={4}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Time A"
            value={timeA}
            onChange={(e) => setTimeA(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Time B"
            value={timeB}
            onChange={(e) => setTimeB(e.target.value)}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {horarios.map((hora) => (
          <Grid item xs={12} sm={6} md={4} key={hora}>
            <Card>
              <CardContent>
                <Typography variant="h6">Horário: {hora}</Typography>
                {agendamentos[hora] ? (
                  <>
                    <Typography variant="body1">Time A: {agendamentos[hora].timeA}</Typography>
                    <Typography variant="body1">Time B: {agendamentos[hora].timeB}</Typography>
                    <Typography variant="body2" color="textSecondary">Agendado ✅</Typography>
                  </>
                ) : (
                  <>
                    <Typography variant="body2" color="textSecondary">Disponível</Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => agendarHorario(hora)}
                      disabled={!timeA || !timeB}
                      sx={{ marginTop: 1 }}
                    >
                      Agendar
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
