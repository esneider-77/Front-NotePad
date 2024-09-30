import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import { TextField, Typography, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Workers = () => {
  const [data, setData] = useState({ name: '', age: '' });
  return (
    <>
      <Typography variant="h3">
        Empresa:{' '}
        <span style={{ fontWeight: 'bold' }}>
          {JSON.parse(sessionStorage.getItem('company')).name}
        </span>
      </Typography>{' '}
      <br></br>
      <form
        style={{ marginLeft: '10px' }}
        onSubmit={async (e) => {
          e.preventDefault();
          const dataSend = { data, _id: JSON.parse(sessionStorage.getItem('company'))._id };
          await fetch('http://localhost:8888/newWorker', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataSend),
          });
        }}
      >
        <Typography variant="h4">Nuevo Trabajador:</Typography>
        <TextField
          required
          label="Nombre Trabajador"
          variant="outlined"
          name="name"
          onChange={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
        ></TextField>{' '}
        <br />
        <br />
        <TextField
          required
          label="Edad Trabajador"
          type="number"
          variant="outlined"
          name="age"
          onChange={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
        ></TextField>{' '}
        <br />
        <br />
        <Button type="submit" variant="contained">
          Registrar
        </Button>
      </form>
    </>
  );
};
