import { Button, Grid } from '@mui/material';
import { DataGrid, esES } from '@mui/x-data-grid';
import { useConfirm } from 'material-ui-confirm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import styled from '@emotion/styled';
import TwitterIcon from '@mui/icons-material/Twitter';

import { notification } from '../../utils/notification';

import './styles.css';

const StyledDataGrid = styled(DataGrid)`
  &.MuiDataGrid-root .MuiDataGrid-columnHeader,
  &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,
  &.MuiDataGrid-root .MuiDataGrid-cell,
  &.MuiDataGrid-root .MuiDataGrid-cell:focus {
    outline: none;
  }
`;

const Table = ({ handleDeleteContact, handleOpen, rows, setActiveData }) => {
  const confirm = useConfirm();

  const columns = [
    {
      field: 'fullname',
      headerName: 'Nombre Completo',
      width: 200,
      valueGetter: (params) => ` ${params.row.lastname || ''}, ${params.row.name || ''}`
    },
    { field: 'company_name', headerName: 'Compañía', width: 250 },
    { field: 'email', headerName: 'Email', width: 260, flex: 1 },
    { field: 'position', headerName: 'Cargo', width: 150 },
    {
      field: 'interest',
      headerName: 'Interés',
      width: 200,
      sortable: false,
      renderCell: (obj) => (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <p>{obj.row.interest}%</p>
          <progress max='100' value={obj.row.interest} />
        </div>
      )
    },
    {
      field: 'chanel',
      headerName: 'Canal Favorito',
      align: 'center',
      width: 150,
      sortable: false,
      renderCell: (obj) => (
        <Grid container spacing={1} style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', alignItems: 'center' }}>
          {obj.row.preference_phone === 2 && (
            <Grid item>
              <PhoneAndroidIcon />
            </Grid>
          )}
          {obj.row.preference_linkedin === 2 && (
            <Grid item>
              <LinkedInIcon />
            </Grid>
          )}
          {obj.row.preference_facebook === 2 && (
            <Grid item>
              <FacebookIcon />
            </Grid>
          )}
          {obj.row.preference_twitter === 2 && (
            <Grid item>
              <TwitterIcon />
            </Grid>
          )}
          {obj.row.preference_instagram === 2 && (
            <Grid item>
              <InstagramIcon />
            </Grid>
          )}
        </Grid>
      )
    },
    {
      field: 'action',
      headerName: 'Acciones',
      align: 'center',
      headerAlign: 'center',
      width: 100,
      sortable: false,
      renderCell: (obj) => (
        <>
          <Button
            disableElevation
            color='primary'
            sx={{ minWidth: 0 }}
            type='submit'
            variant='text'
            onClick={() => {
              setActiveData(obj.row);
              handleOpen();
            }}
          >
            <EditIcon />
          </Button>
          <Button
            disableElevation
            color='error'
            sx={{ minWidth: 0 }}
            type='submit'
            variant='text'
            onClick={() => {
              confirm({
                title: '¿Quiere eliminar este contacto?',
                content: `Contacto: ${obj.row.lastname}, ${obj.row.name}`,
                confirmationText: 'Eliminar',
                cancellationText: 'Cancelar',
                confirmationButtonProps: { variant: 'contained', color: 'error', autoFocus: true }
              })
                .then(() => {
                  handleDeleteContact(obj.row.id);
                  notification('success', 'Contacto eliminado con éxito');
                })
                .catch(() => {});
            }}
          >
            <DeleteIcon />
          </Button>
        </>
      )
    }
  ];

  return (
    <div style={{ height: 527, width: '100%' }}>
      <StyledDataGrid
        columns={columns}
        disableSelectionOnClick
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        pageSize={8}
        rows={rows}
        rowsPerPageOptions={[8]}
        sx={{ fontFamily: 'Roboto Mono, monospace' }}
      />
    </div>
  );
};
export default Table;
