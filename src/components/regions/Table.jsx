import { Button } from '@mui/material';
import { DataGrid, esES } from '@mui/x-data-grid';
import { useConfirm } from 'material-ui-confirm';
import { useTheme } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';
import ApartmentIcon from '@mui/icons-material/Apartment';

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
          <ApartmentIcon style={{ fontWeight: 500, color: 'white', fontSize: '1.5rem' }} />
        </div>
      )
    },
    { field: 'name', headerName: 'Nombre', width: 300, sortable: false },
    { field: 'city', headerName: 'Ciudad', width: 200, sortable: false },
    { field: 'address', headerName: 'Dirección', width: 200, sortable: false, flex: 1 },
    { field: 'email', headerName: 'Email', width: 325, sortable: false },
    { field: 'phone', headerName: 'Teléfono', width: 140, sortable: false },
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
                title: '¿Quiere eliminar esta compañía?',
                content: `Compañia: ${obj.row.name}`,
                confirmationText: 'Eliminar',
                cancellationText: 'Cancelar',
                confirmationButtonProps: { variant: 'contained', color: 'error', autoFocus: true }
              })
                .then(() => {
                  handleDeleteCompany(obj.row.id);
                  notification('success', 'Compañía eliminada con éxito');
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
