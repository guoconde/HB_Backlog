import { ListItem, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import NewOrders from './newOrders';

export default function Orders() {
  return (
    <Box>
      <Stack spacing={2}>
        <ListItem>
          <Typography
            variant='h1'
            sx={{ margin: '100px auto', fontSize: '36px' }}
          >
            Pedidos
          </Typography>
        </ListItem>
        <NewOrders />
      </Stack>
    </Box>
  );
}
