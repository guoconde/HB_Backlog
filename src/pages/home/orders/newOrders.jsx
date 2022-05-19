import { Box, ListItem, Paper, Typography } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/authHook';
import { listAll } from '../../../services/ordersServices';

export default function NewOrders() {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadPage() {
      const promisse = await listAll(token);

      setOrders(promisse);
    }

    loadPage();
  }, []);

  if (orders.length === 0) return <h1>Loading...</h1>;

  return (
    <>
      {orders.map((el) => (
        <ListItem key={el.id}>
          <Paper
            sx={{
              width: 350,
              maxWidth: '100%',
              padding: 2,
            }}
          >
            <Typography>Cliente: {el.name}</Typography>
            <Typography>Endereço: {el.adress}</Typography>
            <Typography>Pedido: {el.items}</Typography>
            <Typography>Forma de pagamento: {el.payment}</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <CheckBoxIcon
                  fontSize='large'
                  color='success'
                  onClick={() => console.log(el.id)}
                />
                <Typography fontWeight='bold'>Aceitar</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <ThumbDownIcon
                  fontSize='large'
                  sx={{ color: 'red' }}
                  onClick={() => console.log('aqui')}
                />
                <Typography fontWeight='bold'>Recusar</Typography>
              </Box>
            </Box>
          </Paper>
        </ListItem>
      ))}
    </>
  );
}
