import { GridColDef } from '@mui/x-data-grid';
import { ObjectDataType } from '../../redux/api/objectsAPI/types';

export const columns = (): GridColDef<ObjectDataType>[] => {
  return [
    {
      field: 'id',
      headerName: 'ID',
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
    },
    {
      field: 'uniqueId',
      headerName: 'Unique ID',
    },
    {
      field: 'status',
      headerName: 'Status',
    },
    {
      field: 'lastUpdate',
      headerName: 'Last update',
      valueGetter: (dateValue: string) => {
        const date = new Date(dateValue);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
      },
      width: 200,
    },
  ];
};
