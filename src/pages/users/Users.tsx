import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataTable from '../../components/tableData/DataTable';
import { userRows } from '../../data';
import './users.scss';
import { useState } from 'react';
import Add from '../../components/add/Add';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => {
      return (
        <img
          src={params.row.img || '/noavatar.png'}
          alt=""
        />
      );
    },
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 100,
    renderCell: () => {
      return (
        <div className="action">
          <div className="view">View</div>
          <div className="delete">Delete</div>
        </div>
      );
    },
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add new User</button>
      </div>
      <DataTable
        columns={columns}
        rows={userRows}
        slug="users"
      />

      {open && (
        <Add
          slug={'user'}
          columns={columns}
          setOpen={setOpen}
        />
      )}
    </div>
  );
};

export default Users;
