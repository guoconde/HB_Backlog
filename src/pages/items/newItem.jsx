import {
  Button,
  Container,
  MenuItem,
  NativeSelect,
  Select,
  styled,
  TextField,
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function NewItem() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Container
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        width: '300px',
        height: '100vh',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
      }}
      noValidate
    >
      <StyledInput
        error={!!errors.name}
        id='outlined-basic'
        label='Nome'
        variant='outlined'
        {...register('name', { required: true })}
      />
      <StyledInput
        error={!!errors.picture}
        id='outlined-basic'
        label='Imagem'
        variant='outlined'
        {...register('picture')}
      />
      <StyledInput
        error={!!errors.price}
        id='outlined-basic'
        label='Preço'
        variant='outlined'
        {...register('price', { required: true })}
      />
      <StyledInput
        error={!!errors.description}
        id='outlined-basic'
        label='Descrição'
        variant='outlined'
        {...register('description', { required: true })}
      />
      <NativeSelect variant='outlined' {...register('type')}>
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </NativeSelect>

      <StyledButton type='submit' variant='contained'>
        Entrar
      </StyledButton>
    </Container>
  );
}

const StyledInput = styled(TextField)({
  width: '300px',
  height: '50px',
  padding: 0,
  margin: 0,
});

const StyledButton = styled(Button)({
  width: '200px',
  height: '50px',
  backgroundColor: 'red',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '16px',

  '&:hover': {
    backgroundColor: 'darkRed',
  },
});
