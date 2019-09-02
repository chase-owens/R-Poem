import React, { useContext } from 'react';
import PoetsListView from '../../views/PoetsListView/PoetsListView';
import VerticalScrollContainer from '../VerticalScrollContainer/VerticalScrollContainer';
import SideBarContainer from '../SideBar/SideBarContainer';
import PoemsListView from '../../views/PoemsListView/PoemsListView';
import Poem from '../../views/Poem/Poem';
import { GlobalState } from '../../index';
import { observer } from 'mobx-react';

// const blueFrost = 'rgba(22, 25, 34, 0.8)';

const Literature = () => {
  const globalState = useContext(GlobalState);
  const poemSelected = globalState.poem !== null;

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        height: '100%',
        overflow: 'hidden'
      }}
    >
      <SideBarContainer>
        <VerticalScrollContainer>
          <PoetsListView />
        </VerticalScrollContainer>
      </SideBarContainer>

      {/* You can put anything here */}

      {poemSelected && (
        <VerticalScrollContainer>
          <Poem />
        </VerticalScrollContainer>
      )}

      <SideBarContainer>
        <VerticalScrollContainer>
          <PoemsListView />
        </VerticalScrollContainer>
      </SideBarContainer>
    </div>
  );
};

export default observer(Literature);
