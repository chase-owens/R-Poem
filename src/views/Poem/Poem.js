import React, { useContext } from 'react';
import { GlobalState } from '../../index';
import { Header } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import injectSheet from 'react-jss';
import { Button, Grid } from 'semantic-ui-react';

const frost = 'rgba(999, 999, 999, 0.8)';
// const blueFrost = 'rgba(22, 25, 34, 0.8)';

const styles = {
  container: {
    marginTop: 0,
    // width: 'calc(100% - 10px)',
    background: 'transparent'
  },
  header: {
    background: '#ffd100',
    paddingTop: 5,
    paddingBottom: 10,
    // marginBottom: 20,
    boxShadow: `0px 2px 5px rgb(22, 25, 34)`
  },
  poemLines: {
    padding: '30px 0',
    textAlign: 'center'
  }
};

const Poem = ({ classes }) => {
  const globalState = useContext(GlobalState);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Header align='center' as='h2' style={{ margin: 0 }}>
          {globalState.poem.title}
        </Header>
        <Header
          align='center'
          as='h4'
          style={{
            margin: '6px 0px 0px 0px'
          }}
        >
          By {globalState.poem.author}
        </Header>
        <div style={{ textAlign: 'center' }}>
          <Button
            style={{
              display: 'inline-block',
              marginTop: 5,
              background: 'rgb(18, 20, 84)',
              color: '#fff'
            }}
            size='tiny'
            // secondary
          >
            Reconstruct
          </Button>
        </div>
      </div>
      <div className={classes.poemLines}>
        {globalState.poem.lines.map(line => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default injectSheet(styles)(observer(Poem));
