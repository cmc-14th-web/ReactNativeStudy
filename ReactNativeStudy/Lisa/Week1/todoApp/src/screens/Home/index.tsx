import {FlatList, View} from 'react-native';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';
import {useEffect} from 'react';

import Spacing from 'components/atoms/Spacing';
import TodoItem from 'components/atoms/TodoItem';
import {todoState} from 'libs/store/todo';
import Modal from 'components/atoms/CustomModal';
import {modalState} from 'libs/store/modal';
import useSetButtonData from 'libs/hooks/useSetButtonData';

const Home = () => {
  const todoData = useRecoilValue(todoState);
  const modalData = useRecoilValue(modalState);
  const {setBottomTabFloatingButtonVisible} = useSetButtonData();

  useEffect(() => {
    setBottomTabFloatingButtonVisible(true);
  }, []);

  return (
    <HomeWrapper>
      <FlatList
        keyExtractor={item => String(item.id)}
        data={todoData.todo}
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
