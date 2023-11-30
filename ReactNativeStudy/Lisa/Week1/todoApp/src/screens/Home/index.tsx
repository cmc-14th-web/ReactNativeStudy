import {FlatList, View} from 'react-native';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';
import {useEffect} from 'react';

import Spacing from 'components/atoms/Spacing';
import TodoItem from 'components/atoms/TodoItem';
import {todoListState} from 'libs/store/todoList';
import Modal from 'components/atoms/CustomModal';
import {modalState} from 'libs/store/modal';
import useSetButtonData from 'libs/hooks/useSetButtonData';

const Home = () => {
  const todoListData = useRecoilValue(todoListState);
  const modalData = useRecoilValue(modalState);
  const {setBottomTabFloatingButtonVisible} = useSetButtonData();

  useEffect(() => {
    setBottomTabFloatingButtonVisible(true);
  }, []);

  return (
    <HomeWrapper>
      <FlatList
        keyExtractor={item => String(item.id)}
        data={todoListData.todo}
        renderItem={({item}) => (
          <TodoItem id={item.id} todo={item.todo} done={item.done} />
        )}
        ItemSeparatorComponent={() => <Spacing />}
      />
      {modalData.isRemoveTodoVisible && <Modal variant={'removeTodo'} />}
      {modalData.isAddTodoVisible && <Modal variant={'addTodo'} />}
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled(View)`
  padding: 25px 33px;
  display: flex;
  flex-direction: column;
`;
