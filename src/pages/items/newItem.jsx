import { Box, Button, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/authHook';
import { insertOne } from '../../services/itemsServices';

export default function NewItem({ setRenderPage }) {
  const { token } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function handleInsert(data) {
    let newData = { ...data, price: parseFloat(data.price) };

    if (data.picture === '') {
      newData = {
        ...newData,
        picture:
          'https://odoo-community.org/web/image/product.template/1044/image_1024?unique=993283e',
      };
    }

    await insertOne(newData, token)
      .then(() => {
        setRenderPage('initial');
      })
      .catch((error) => {
        if (error.response.status) alert('Produto já cadastrado');
      });
  }

  const onSubmit = (data) => handleInsert(data);

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        // '& .MuiTextField-root': { m: 1, width: '25ch' },
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
      }}
      noValidate
    >
      <TextField
        error={!!errors.name}
        id='outlined-basic'
        label='Nome'
        variant='outlined'
        {...register('name', { required: true })}
      />
      <TextField
        error={!!errors.picture}
        defaultValue={null}
        id='outlined-basic'
        label='Imagem'
        variant='outlined'
        {...register('picture')}
      />
      <TextField
        error={!!errors.price}
        type='number'
        id='outlined-basic'
        label='Preço'
        variant='outlined'
        {...register('price', { required: true })}
      />
      <TextField
        error={!!errors.description}
        id='outlined-basic'
        label='Descrição'
        variant='outlined'
        {...register('description', { required: true })}
      />
      <Select
        {...register('type')}
        defaultValue='hamburger'
        label='Tipo'
        sx={{ width: '235px' }}
      >
        <MenuItem value='hamburger'>Hamburguer</MenuItem>
        <MenuItem value='bebida'>Bebida</MenuItem>
        <MenuItem value='porcao'>Porção</MenuItem>
        <MenuItem value='combo'>Combo</MenuItem>
        <MenuItem value='promocao'>Promoção</MenuItem>
      </Select>

      <Button
        type='submit'
        variant='contained'
        sx={{
          width: '235px',
          height: '50px',
          backgroundColor: 'green',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '16px',

          '&:hover': {
            backgroundColor: 'darkGreen',
          },
        }}
      >
        Cadastrar
      </Button>
      <Button
        sx={{
          width: '235px',
          height: '50px',
          backgroundColor: 'red',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '16px',

          '&:hover': {
            backgroundColor: 'darkRed',
          },
        }}
        onClick={() => setRenderPage('initial')}
        className='cancel'
        type='button'
        variant='contained'
      >
        Cancelar
      </Button>
    </Box>
  );
}
