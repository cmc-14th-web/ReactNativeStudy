import {FlatList, View} from 'react-native';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';
import {useEffect} from 'react';

import Spacing from 'components/atoms/Spacing';
import TodoItem from 'components/atoms/TodoItem';
import {todoState} from 'libs/store/todo';
import useSetButtonData from 'libs/hooks/useSetButtonData';

const Home = () => {
  const todoData = useRecoilValue(todoState);
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
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled(View)`
  padding: 25px 33px;
  display: flex;
  flex-direction: column;
`;
