import { Divider, InputBase, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ handleReset, handleSubmit, search, setSearch }) => {
  return (
    <Paper component='form' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }} onSubmit={handleSubmit}>
      <InputBase
        autoFocus
        placeholder='Buscar contacto'
        sx={{ ml: 1, flex: 1 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
      <IconButton color='primary' sx={{ p: '10px' }} onClick={handleReset}>
        <CloseIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
