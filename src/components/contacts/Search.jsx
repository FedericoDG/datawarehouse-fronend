import { useEffect, useState } from 'react';
import { Divider, InputBase, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ handleSubmit }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search.length !== 0 || !handleSubmit) return;
    handleSubmit(search);
  }, [search]);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(search);
  };

  const onReset = () => {
    setSearch('');
    handleSubmit('');
  };

  return (
    <Paper component='form' sx={{ p: '0 4px', display: 'flex', alignItems: 'center', width: 400 }} onSubmit={onSubmit}>
      <InputBase
        autoFocus
        placeholder='Buscar por nombre, compañía, etc...'
        sx={{ ml: 1, flex: 1 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '0 10px' }}>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
      <IconButton color='error' sx={{ p: '0 10px' }} onClick={onReset} disabled={!search}>
        <CloseIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
