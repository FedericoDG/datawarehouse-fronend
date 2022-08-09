import { Button } from '@mui/material';
import { CSVLink } from 'react-csv';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Buttons = ({ contacts, handleOpen }) => (
  <>
    <Button variant='outlined' startIcon={<FileDownloadIcon />} sx={{ marginRight: 2 }}>
      <CSVLink data={contacts} filename='my-file.csv' style={{ textDecoration: 'none' }}>
        CSV
      </CSVLink>
    </Button>
    <Button size='large' variant='contained' onClick={() => handleOpen()}>
      Agregar Compañía
    </Button>
  </>
);

export default Buttons;
