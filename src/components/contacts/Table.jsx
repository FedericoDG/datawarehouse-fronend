import { Button, Grid } from '@mui/material';
import { DataGrid, esES } from '@mui/x-data-grid';
import { useConfirm } from 'material-ui-confirm';
import { useTheme } from '@mui/material/styles';
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

  const theme = useTheme();

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%'
  };

  const columns = [
    {
      field: 'avatar',
      headerName: '',
      width: 70,
      sortable: false,
      renderCell: (params) => (
        <div style={styles}>
          <span style={{ fontWeight: 500, color: 'white', fontSize: '1.25rem' }}>
            {' '}
            {params.row.lastname.at(0)}
            {params.row.name.at(0)}
          </span>
        </div>
      )
    },
    {
      field: 'contact',
      headerName: 'Contacto',
      width: 200,
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ fontWeight: 500 }}>
            {params.row.lastname}, {params.row.name}
          </span>
          <span style={{ fontWeight: 300 }}>{params.row.email}</span>
        </div>
      )
    },
    {
      field: 'company_name',
      headerName: 'Compañía',
      width: 260,
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ fontWeight: 400 }}>{params.row.company_name}</span>
          <span style={{ fontWeight: 300 }}>{`(${params.row.city_name} - ${params.row.country_name})`}</span>
        </div>
      )
    },
    { field: 'phone', headerName: 'Teléfono', width: 140, sortable: false },
    { field: 'position', headerName: 'Cargo', width: 150, sortable: false },
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
      width: 90,
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
