import {
  Container,
  Divider,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
} from '@mui/material';
import React from 'react';
import Logo from '../../../assets/images/logomarca.png';

export default function Menu({ handlePath }) {
  return (
    <Paper
      sx={{
        width: 320,
        maxWidth: '100%',
        height: '100%',
        minHeight: '100vh',
        padding: '0',
        borderRadius: '0',
        backgroundColor: '#c71f1f',
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      }}
    >
      <MenuList>
        <MenuItem disableTouchRipple aria-disabled>
          <img
            src={Logo}
            alt='logo'
            width={150}
            style={{ margin: '50px auto 100px' }}
          />
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText onClick={() => handlePath('orders')}>
            Pedidos
          </ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText onClick={() => handlePath('items')}>
            Produtos
          </ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText onClick={() => handlePath('promotions')}>
            Promoções
          </ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText onClick={() => handlePath('reports')}>
            Relatórios
          </ListItemText>
        </MenuItem>
        <Divider />
      </MenuList>
    </Paper>
  );
}
