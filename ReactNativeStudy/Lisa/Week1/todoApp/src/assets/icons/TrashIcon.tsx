import {Path, Svg} from 'react-native-svg';
import {KeyOfPalette, theme} from 'styles';
import {TouchableOpacity} from 'react-native';
import {useRecoilState} from 'recoil';

import {todoListState} from 'libs/store/todoList';

const TrashIcon = ({
  fill = 'orange',
  id,
}: {
  fill?: KeyOfPalette;
  id: number;
}) => {
  const [todoListData, setTodoListData] = useRecoilState(todoListState);

  const handlePressTrashIcon = () => {
    const updatedTodoList = Array.isArray(todoListData.todo)
      ? todoListData.todo.filter(todo => todo.id !== id)
      : [];

    setTodoListData(prevState => ({...prevState, todo: updatedTodoList}));
  };

  return (
    <TouchableOpacity onPress={handlePressTrashIcon}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M11.5 15.308H12.5V10.619L14.6 12.708L15.308 12L12 8.69198L8.692 12L9.4 12.708L11.5 10.619V15.308ZM7.615 20C7.155 20 6.771 19.846 6.463 19.538C6.15433 19.2293 6 18.845 6 18.385V5.99998H5V4.99998H9V4.22998H15V4.99998H19V5.99998H18V18.385C18 18.845 17.846 19.229 17.538 19.537C17.2293 19.8456 16.845 20 16.385 20H7.615ZM17 5.99998H7V18.385C7 18.5383 7.064 18.6793 7.192 18.808C7.32067 18.936 7.46167 19 7.615 19H16.385C16.5383 19 16.6793 18.936 16.808 18.808C16.936 18.6793 17 18.5383 17 18.385V5.99998Z"
          fill={`${theme.palette[fill]}`}
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default TrashIcon;
