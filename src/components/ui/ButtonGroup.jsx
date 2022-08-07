import { Button } from '@mui/material';
import { CSVLink } from 'react-csv';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const ButtonGroup = ({ contacts = [], handleOpen, title, csv = true, activeData }) => {
  return (
    <>
      {csv && (
        <Button variant='outlined' startIcon={<FileDownloadIcon />} sx={{ marginRight: 2 }}>
          <CSVLink data={contacts} filename='my-file.csv' style={{ textDecoration: 'none' }}>
            CSV
          </CSVLink>
        </Button>
      )}
      <Button size='large' variant='contained' sx={{ minWidth: 206, minHeight: 44 }} onClick={() => handleOpen(activeData)}>
        {title}
      </Button>
    </>
  );
};
export default ButtonGroup;
