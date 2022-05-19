import { Container, ListItem, Paper, Typography } from '@mui/material';
import React from 'react';

export default function GetItems({ products, setRenderPage, setItemId }) {
  if (products.length === 0) return <h1>Loading...</h1>;

  function sendId(id) {
    setItemId(id);
    setRenderPage('itemById');
  }

  return (
    <Container
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
      }}
    >
      {products.map((el) => (
        <ListItem key={el.id} onClick={() => sendId(el.id)}>
          <Paper
            sx={{
              width: 300,
              maxWidth: '100%',
              padding: 2,
              display: 'flex',
              gap: 2,
              cursor: 'pointer',
            }}
          >
            <img src={el.picture} alt={el.name} width='70' />
            <Container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}
            >
              <Typography>Nome: {el.name}</Typography>
              <Typography>
                Preço:{' '}
                {el.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
              </Typography>
              <Typography>
                Disponível: {el.avaliable ? 'Sim' : 'Não'}
              </Typography>
            </Container>
          </Paper>
        </ListItem>
      ))}
    </Container>
  );
}
