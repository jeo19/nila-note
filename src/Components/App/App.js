import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notes from '../../Routes/Notes';
import Note from '../../Routes/Note';
import Add from '../../Routes/Add';
import Edit from '../../Routes/Edit';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={'/'} component={Notes} />
          <Route path={'/nila/add/'} component={Add} />
          <Route path={'/nila/note/:id'} component={Note} />
          <Route path={'/nila/edit/:id'} component={Edit} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
