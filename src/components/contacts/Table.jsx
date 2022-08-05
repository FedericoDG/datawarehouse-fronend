import { Button, Chip, Grid } from '@mui/material';
import { DataGrid, esES } from '@mui/x-data-grid';
import { useConfirm } from 'material-ui-confirm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';

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
    { field: 'company_name', headerName: 'Compañía', width: 300 },
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
      width: 300,
      flex: 1,
      sortable: false,
      renderCell: (obj) => (
        <Grid container spacing={1} style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', alignItems: 'center' }}>
          {obj.row.preference_phone === 2 && (
            <Grid item>
              <Chip color='primary' label='Teléfono' size='small' variant='outlined' />
            </Grid>
          )}
          {obj.row.preference_linkedin === 2 && (
            <Grid item>
              <Chip color='primary' label='LinkedIn' size='small' variant='outlined' />
            </Grid>
          )}
          {obj.row.preference_facebook === 2 && (
            <Grid item>
              <Chip color='primary' label='Facebook' size='small' variant='outlined' />
            </Grid>
          )}
          {obj.row.preference_twitter === 2 && (
            <Grid item>
              <Chip color='primary' label='Twitter' size='small' variant='outlined' />
            </Grid>
          )}
          {obj.row.preference_instagram === 2 && (
            <Grid item>
              <Chip color='primary' label='Instagram' size='small' variant='outlined' />
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
      width: 125,
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
