import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getObjectsData } from '../../redux/services/objectsService';
import { columns } from './columns';
import { ObjectsFilterAutocomplete } from './components/Autocomplete';
import { Loader } from '../../common/Loader';

import { ObjectsTable } from './style';

export const ObjectsPage = () => {
  const dispatch = useAppDispatch();

  const objectsData = useAppSelector((state) => state.objects);
  const [selectedObj, setSelectedObj] = useState([] as string[]);

  useEffect(() => {
    let params = '';
    if (selectedObj.length > 0) {
      params = selectedObj.map((el) => `id=${el}`).join('&');
    }
    dispatch(getObjectsData(params));
  }, [selectedObj]);

  return !(objectsData.status === 'loading') ? (
    <div>
      <ObjectsFilterAutocomplete selectedObj={selectedObj} setSelectedObj={setSelectedObj} />
      <Box sx={{ padding: 1 }}>
        <ObjectsTable
          showColumnVerticalBorder
          showCellVerticalBorder
          rows={objectsData.objects}
          columns={columns()}                     
        />
      </Box>
    </div>
  ) : (
    <Loader />
  );
};
