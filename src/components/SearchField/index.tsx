import {FC,ChangeEvent} from 'react';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';

type SearchFProps = {
  value:string;
  onChange(e:ChangeEvent<HTMLInputElement>):void;
}

const SearchField:FC<SearchFProps> = ({
  value,
  onChange
}) => {
  return (
    <div className='searchField'>
        <label className='searchField--label'>
            <MagnifyingGlassIcon width={'25px'} height={'25px'} />
        </label>
        <input value={value || ''} onChange={(e:ChangeEvent<HTMLInputElement>)=> onChange(e)} className='searchField--input' placeholder='جستجو کنید' />
    </div>
  )
}

export default SearchField