import { useEffect, useMemo, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { objectsAPI } from '../../../../redux/api/objectsAPI/api';
import { Loader } from '../../../../common/Loader';
import { AutocompleteContainer } from './style';

type Props = {
  setSelectedObj: React.Dispatch<React.SetStateAction<string[]>>;
  selectedObj: string[];
};

export const ObjectsFilterAutocomplete = ({ selectedObj, setSelectedObj }: Props) => {
  const [data, setData] = useState([] as string[]);

  useEffect(() => {
    if (data.length === 0) {
      objectsAPI.getObjects().then((res) => {
        if (res.isSuccess) {
          const stringArrData = res.data.map((el) => String(el.id));
          setData(stringArrData);
        }
      });
    }
  }, [data]);

  return data.length > 0 ? (
    <>
      <AutocompleteContainer>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={data}
          getOptionLabel={(option) => option}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} label="Search ID" placeholder="IDs" />}
          value={selectedObj}
          onChange={(_: any, value) => {
            setSelectedObj(value);
          }}
        />
      </AutocompleteContainer>
    </>
  ) : (
    <Loader />
  );
};
