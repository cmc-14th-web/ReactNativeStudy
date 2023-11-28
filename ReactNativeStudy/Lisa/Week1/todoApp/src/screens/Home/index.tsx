import {FlatList, View} from 'react-native';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';

import Spacing from 'components/atoms/Spacing';
import TodoItem from 'components/atoms/TodoItem';
import {todoListState} from 'libs/store/todoList';
import {useEffect} from 'react';

const Home = () => {
  const todoListData = useRecoilValue(todoListState);

  useEffect(() => {
    console.log(todoListData.todo);
  }, [todoListData.todo]);

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
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled(View)`
  padding: 25px 33px;
  display: flex;
  flex-direction: column;
`;
