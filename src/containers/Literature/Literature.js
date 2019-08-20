import React from 'react';
import PoetsListView from '../../views/PoetsListView/PoetsListView';
import VerticalScrollContainer from '../VerticalScrollContainer/VerticalScrollContainer';
import SideBarContainer from '../SideBar/SideBarContainer';
import PoemsListView from '../../views/PoemsListView/PoemsListView';

const Literature = () => {
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

      <SideBarContainer>
        <VerticalScrollContainer>
          <PoemsListView />
        </VerticalScrollContainer>
      </SideBarContainer>
    </div>
  );
};

export default Literature;
