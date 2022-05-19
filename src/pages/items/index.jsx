import { Box, ListItem, Stack, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import React, { useState } from 'react';
import GetItems from './getItems';
import NewItem from './newItem';

export default function Items() {
  const [renderPage, setRenderPage] = useState('initial');

  const initial = (
    <>
      <ListItem>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 1,
            gap: 1,
            cursor: 'pointer',
            textTransform: 'uppercase',
          }}
          onClick={() => setRenderPage('newItem')}
        >
          <AddBoxIcon color='success' fontSize='large' />
          <Typography fontWeight='bold'>Adicionar produto</Typography>
        </Box>
      </ListItem>
      <GetItems />
    </>
  );

  return (
    <Box>
      <Stack spacing={2}>
        <ListItem>
          <Typography
            variant='h1'
            sx={{ margin: '100px auto', fontSize: '36px' }}
          >
            Produtos
          </Typography>
        </ListItem>
        {renderPage === 'initial' && initial}
        {renderPage === 'newItem' && <NewItem />}
      </Stack>
    </Box>
  );
}
