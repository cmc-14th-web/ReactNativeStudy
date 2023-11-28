import {FlatList, View} from 'react-native';
import styled from 'styled-components';

import Spacing from 'components/atoms/Spacing';
import TodoItem from 'components/atoms/TodoItem';

const todoList = [
  {
    id: '1',
    todo: '아침 먹기',
    isComplete: false,
  },
  {
    id: '2',
    todo: '점심 먹기',
    isComplete: true,
  },
  {
    id: '3',
    todo: '저녁 먹기',
    isComplete: false,
  },
  {
    id: '4',
    todo: '아침 먹기',
    isComplete: false,
  },
];

const Home = () => {
  return (
    <HomeWrapper>
      <FlatList
        keyExtractor={item => item.id}
        data={todoList}
        renderItem={({item}) => (
          <TodoItem todo={item.todo} isComplete={item.isComplete} />
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
