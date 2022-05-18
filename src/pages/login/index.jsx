import { Button, Fade, TextField } from '@mui/material';
import { Container, styled } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logomarca.png';
import useAuth from '../../hooks/authHook';
import login from '../../services/loginService';

export default function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function handleLogin(data) {
    const { token } = await login(data);
    signIn(token);

    navigate('/home');
  }

  const onSubmit = (data) => handleLogin(data);

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
      <img src={Logo} alt='logo' width={160} />
      <StyledInput
        error={!!errors.user}
        id='outlined-basic'
        label='Usuário'
        variant='outlined'
        {...register('user', { required: true })}
      />
      <StyledInput
        error={!!errors.password}
        id='outlined-basic'
        label='Senha'
        variant='outlined'
        {...register('password', { required: true })}
      />

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
