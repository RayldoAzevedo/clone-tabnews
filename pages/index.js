import {
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" gutterBottom>
          ⚽ Arena Canarinho
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Organize partidas, visualize resultados e gerencie agendamentos com
          facilidade.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Campos Disponíveis
              </Typography>
              <Typography>
                - 3 campos para 6 jogadores por time + goleiro (7x7)
              </Typography>
              <Typography>
                - 1 campo para 4 jogadores por time + goleiro (5x5)
              </Typography>
              <Typography mt={2}>
                Os agendamentos são feitos de hora em hora
              </Typography>
              <Typography>De segunda a sexta das 18h às 23h.</Typography>
              <Typography>
                Sábado, domingo e feriados: Das 15h às 23h
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Como Funciona
              </Typography>
              <Typography>
                - Cada time pode agendar um horário e esperar que um adversário
                agende no mesmo horário para jogar contra.
              </Typography>
              <Typography>
                - A tela mostrará os nomes e logos dos times confirmados.
              </Typography>
              <Typography>
                - No final da partida, será possível registrar o placar do jogo.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Resultados e Jogos do Dia
            </Typography>
            <Typography>
              A página principal exibe todos os jogos do dia, incluindo
              horários, times e resultados. Também é possível visualizar os
              resultados de dias anteriores por meio de um seletor de data.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box mt={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Cadastro e Agendamento
            </Typography>
            <Typography>
              - Usuários podem cadastrar seus times e realizar agendamentos
              diretamente pelo sistema.
            </Typography>
            <Typography>
              - A equipe de direção do campo também possui acesso para agendar
              jogos e inserir adversários quando necessário.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
