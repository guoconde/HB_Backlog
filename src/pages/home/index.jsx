import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/authHook';
import Items from '../items';
import Menu from './menu';
import Orders from './orders';
import Promotions from './promotions';
import Reports from './reports';

export default function Home() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [renderPage, setRenderPage] = useState('orders');

  const handlePath = (value) => setRenderPage(value);

  useEffect(() => {
    const persistedToken = localStorage.getItem('token');
    if (!token || !persistedToken) {
      navigate('/');
    }
  }, [renderPage]);

  return (
    <div style={{ display: 'flex' }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Menu handlePath={handlePath} />
        </Grid>
        <Grid item xs={7}>
          {renderPage === 'orders' && <Orders path='orders' />}
          {renderPage === 'items' && <Items path='items' />}
          {renderPage === 'promotions' && <Promotions path='promotions' />}
          {renderPage === 'reports' && <Reports path='reports' />}
        </Grid>
      </Grid>
    </div>
  );
}
