import {useRecoilState} from 'recoil';
import searchState from '../libraries/recoil/states/searchText';

export default function useSearchTextStorage() {
  const [searchText, setSearchText] = useRecoilState(searchState);

  const handleSearch = (text: string) => setSearchText(text);

  return {searchText, onSearch: handleSearch};
}
