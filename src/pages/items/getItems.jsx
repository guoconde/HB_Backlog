import { ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/authHook';
import { listAll } from '../../services/itemsServices';

export default function GetItems() {
  const { token } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadPage() {
      const promisse = await listAll(token);

      setProducts(promisse);
    }

    loadPage();
  }, []);

  console.log(products);

  if (products.length === 0) return <h1>Loading...</h1>;

  return (
    <>
      {products.map((el) => (
        <ListItem key={el.id}>{el.name}</ListItem>
      ))}
    </>
  );
}
