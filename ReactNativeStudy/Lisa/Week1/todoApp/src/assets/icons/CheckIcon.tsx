import {Path, Svg} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {useRecoilValue} from 'recoil';

import {todoListState} from 'libs/store/todoList';
import useSetTodoListData from 'libs/hooks/useSetTodoListData';

const CheckIcon = ({id}: {id: number}) => {
  const todoListData = useRecoilValue(todoListState);
  const {updateTodoList} = useSetTodoListData();

  const handlePressCheckIcon = () => {
    const updatedTodoList = Array.isArray(todoListData.todo)
      ? todoListData.todo.map(todo =>
          todo.id === id ? {...todo, done: false} : todo,
        )
      : [];

    updateTodoList(updatedTodoList);
  };

  return (
    <TouchableOpacity onPress={handlePressCheckIcon}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M10.562 14.492L8.065 11.996C7.97167 11.9027 7.857 11.8527 7.721 11.846C7.585 11.8393 7.464 11.8893 7.358 11.996C7.25133 12.1027 7.198 12.2207 7.198 12.35C7.198 12.4793 7.25133 12.5973 7.358 12.704L9.996 15.342C10.1573 15.504 10.346 15.585 10.562 15.585C10.7773 15.585 10.9657 15.504 11.127 15.342L16.604 9.865C16.6973 9.77167 16.7473 9.657 16.754 9.521C16.7607 9.385 16.7107 9.264 16.604 9.158C16.4973 9.05133 16.3793 8.998 16.25 8.998C16.1207 8.998 16.0027 9.05133 15.896 9.158L10.562 14.492ZM12.003 21C10.759 21 9.589 20.764 8.493 20.292C7.39767 19.8193 6.44467 19.178 5.634 18.368C4.82333 17.5587 4.18167 16.6067 3.709 15.512C3.23633 14.4173 3 13.2477 3 12.003C3 10.759 3.236 9.589 3.708 8.493C4.18067 7.39767 4.822 6.44467 5.632 5.634C6.44133 4.82333 7.39333 4.18167 8.488 3.709C9.58267 3.23633 10.7523 3 11.997 3C13.241 3 14.411 3.236 15.507 3.708C16.6023 4.18067 17.5553 4.822 18.366 5.632C19.1767 6.44133 19.8183 7.39333 20.291 8.488C20.7637 9.58267 21 10.7523 21 11.997C21 13.241 20.764 14.411 20.292 15.507C19.8193 16.6023 19.178 17.5553 18.368 18.366C17.5587 19.1767 16.6067 19.8183 15.512 20.291C14.4173 20.7637 13.2477 21 12.003 21Z"
          fill="white"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default CheckIcon;
