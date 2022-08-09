import { useState } from 'react';
import { useAddUserMutation, useDeleteUserMutation, useEditUserMutation, useGetUsersQuery } from '../app/api';

import defaultUser from '../constants/defaultUser';

const useUsers = () => {
  const [activeData, setActiveData] = useState(defaultUser);
  const [open, setOpen] = useState(false);
  const [check, setcheck] = useState(false);

  const { data: users, isError, isLoading } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();
  const [editUser] = useEditUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleOpen = (user, check) => {
    if (check) {
      setcheck(true);
      setActiveData(defaultUser);
    } else {
      setActiveData(user);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveData(defaultUser);
    setcheck(false);
  };

  const handleAddUser = async (user) => {
    await addUser(user);
  };

  const handleEditUser = async (user) => {
    await editUser(user);
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
  };

  return {
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
  };
};

export default useUsers;
