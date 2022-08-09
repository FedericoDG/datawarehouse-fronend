import { Button } from '@mui/material';
import { DataGrid, esES } from '@mui/x-data-grid';
import { useConfirm } from 'material-ui-confirm';
import { useTheme } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';

import { notification } from '../../utils/notification';

const StyledDataGrid = styled(DataGrid)`
  &.MuiDataGrid-root .MuiDataGrid-columnHeader,
  &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,
  &.MuiDataGrid-root .MuiDataGrid-cell,
  &.MuiDataGrid-root .MuiDataGrid-cell:focus {
    outline: none;
  }
`;

const Table = ({ handleDeleteCompany, handleOpen, rows, setActiveData }) => {
  const confirm = useConfirm();

  const theme = useTheme();

  const styles = {
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
    display: 'flex',
    height: 45,
    justifyContent: 'center',
    width: 45
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
      field: 'user',
      headerName: 'Usuario',
      width: 250,
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <span style={{ fontWeight: 500 }}>
          {params.row.lastname}, {params.row.name}
        </span>
      )
    },
    { field: 'email', headerName: 'Email', width: 250, sortable: false, flex: 1 },
    { field: 'role', headerName: 'Rol', width: 150, sortable: false },
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
              // setActiveData(obj.row);
              handleOpen(obj.row);
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
                content: `Contacto: ${obj.row.llastname}, ${obj.row.name}`,
                confirmationText: 'Eliminar',
                cancellationText: 'Cancelar',
                confirmationButtonProps: { variant: 'contained', color: 'error', autoFocus: true }
              })
                .then(() => {
                  handleDeleteCompany(obj.row.id);
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
    <div style={{ height: 527, width: '75%', margin: '0 auto' }}>
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
