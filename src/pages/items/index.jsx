import { Box, ListItem, Stack, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import React, { useEffect, useState } from 'react';
import GetItems from './getItems';
import NewItem from './newItem';
import { listAll } from '../../services/itemsServices';
import useAuth from '../../hooks/authHook';
import ItemById from './itemById';

export default function Items() {
  const { token } = useAuth();
  const [renderPage, setRenderPage] = useState('initial');
  const [itemId, setItemId] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadPage() {
      const promisse = await listAll(token);

      setProducts(promisse);
    }

    loadPage();
  }, [renderPage]);

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
      <GetItems
        products={products}
        setRenderPage={setRenderPage}
        setItemId={setItemId}
      />
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
        {renderPage === 'newItem' && <NewItem setRenderPage={setRenderPage} />}
        {renderPage === 'itemById' && (
          <ItemById itemId={itemId} setRenderPage={setRenderPage} />
        )}
      </Stack>
    </Box>
  );
}
