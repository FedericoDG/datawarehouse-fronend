import { Grid } from '@mui/material';

import ButtonGroup from '../components/ui/ButtonGroup';
import Error from '../components/ui/Error';
import Layout from '../components/ui/Layout';
import Loader from '../components/users/Loader';
import ModalUsers from '../components/users/Modal';
import Table from '../components/users/Table';
import useUsers from '../hooks/useUsers';

const Users = () => {
  const {
    activeData,
    setActiveData,
    open,
    users,
    isError,
    isLoading,
    handleOpen,
    handleClose,
    handleAddUser,
    handleEditUser,
    handleDeleteUser,
    check,
    setcheck
  } = useUsers();

  if (isLoading) return <Loader height={510} title='agregar usuario' />;

  if (isError) return <Error height={645} />;

  return (
    <Layout>
      <Grid container alignItems='center' justifyContent='flex-end' my={2} spacing={2}>
        <Grid item>
          <ButtonGroup activeData={activeData} handleOpen={handleOpen} title='Agregar Usuario' csv={false} />
        </Grid>
      </Grid>
      <Table handleDeleteCompany={handleDeleteUser} handleOpen={handleOpen} rows={users} setActiveData={setActiveData} />
      {open && (
        <ModalUsers
          activeData={activeData}
          handleAddUser={handleAddUser}
          handleClose={handleClose}
          handleEditUser={handleEditUser}
          open={open}
          check={check}
          setcheck={setcheck}
        />
      )}
    </Layout>
  );
};

export default Users;
