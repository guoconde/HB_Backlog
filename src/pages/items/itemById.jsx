import {
  Box,
  Button,
  Checkbox,
  Container,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/authHook';
import { listOne, deleteOne, updateOne } from '../../services/itemsServices';

export default function ItemById({ itemId, setRenderPage }) {
  const { token } = useAuth();
  const [item, setItem] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function loadPage() {
      const promisse = await listOne(itemId, token);

      setItem(promisse);
    }

    loadPage();
  }, []);

  async function handleDelete(id) {
    await deleteOne(id, token).then(() => {
      setRenderPage('initial');
    });
  }

  async function handleUpdate(data) {
    const { price } = data;
    let newData = { ...data, price: parseFloat(price) };

    if (data.picture === '') {
      newData = {
        ...newData,
        picture:
          'https://odoo-community.org/web/image/product.template/1044/image_1024?unique=993283e',
      };
    }

    const promisse = await updateOne(itemId, newData, token);
    setRenderPage('initial');
  }

  const onSubmit = (data) => handleUpdate(data);

  if (!item) return <h1>Loading...</h1>;

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'center',
          cursor: 'pointer',
          marginBottom: 2,
          textTransform: 'uppercase',
        }}
        onClick={() => setRenderPage('initial')}
      >
        <ArrowBackIcon fontSize='large' color='success' />
        <Typography fontWeight='bold'>Voltar</Typography>
      </Box>
      <Paper
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: 450,
          maxWidth: '100%',
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Container
          sx={{
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <img src={item.picture} alt={item.name} width='70' height={70} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
            noValidate
          >
            <TextField
              error={!!errors.name}
              defaultValue={item.name}
              label='Nome'
              variant='outlined'
              {...register('name', { required: true })}
            />
            <TextField
              error={!!errors.picture}
              defaultValue={item.picture}
              label='Imagem'
              variant='outlined'
              {...register('picture')}
            />
            <TextField
              error={!!errors.price}
              defaultValue={item.price}
              type='number'
              label='Preço'
              variant='outlined'
              {...register('price', { required: true })}
            />
            <TextField
              error={!!errors.description}
              defaultValue={item.description}
              label='Descrição'
              variant='outlined'
              {...register('description', { required: true })}
            />
            <Select
              {...register('type')}
              defaultValue={item.type}
              label='Tipo'
              sx={{ width: '235px' }}
            >
              <MenuItem value='hamburger'>Hamburguer</MenuItem>
              <MenuItem value='bebida'>Bebida</MenuItem>
              <MenuItem value='porcao'>Porção</MenuItem>
              <MenuItem value='combo'>Combo</MenuItem>
              <MenuItem value='promocao'>Promoção</MenuItem>
            </Select>
            <Box>
              <Checkbox
                defaultChecked={item.avaliable}
                {...register('avaliable')}
              />
              Disponível
            </Box>
          </Box>
        </Container>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Button
            sx={{
              display: 'flex',
              gap: 0.5,
              alignItems: 'center',
              color: 'black',
            }}
            onClick={() => handleDelete(item.id)}
          >
            <DeleteIcon fontSize='large' color='error' />
            <Typography fontWeight='bold'>Apagar</Typography>
          </Button>
          <Button
            type='submit'
            sx={{
              display: 'flex',
              gap: 0.5,
              alignItems: 'center',
              color: 'black',
            }}
          >
            <ThumbUpAltIcon fontSize='large' color='success' />
            <Typography fontWeight='bold'>Atualizar</Typography>
          </Button>
        </Container>
      </Paper>
    </Container>
  );
}
