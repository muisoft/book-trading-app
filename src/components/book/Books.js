import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, TabsContainer } from 'react-md';

import { withMainComponent } from '../hoc';

import MyBooks from './MyBooks';
import MyRequestBook from './MyRequestBook';
import RequestBookForMe from './RequestBookForMe';
import BorrowedBook from './BorrowedBook';

const Books = () => {
  return (
    <div style={{ marginLeft: -8, marginRight: -8 }}>
      <TabsContainer
        panelStyle={{ padding: 15, height: 500, marginTop: -25 }}//550
        colored
        component="div"
        themed>
        <Tabs tabId="simple-tab">
          <Tab label="My Books">
            <MyBooks />
          </Tab>
          <Tab label="My Request">
            <MyRequestBook />
          </Tab>
          <Tab label="Borrowed Books">
            <BorrowedBook />
          </Tab>
          <Tab label="Request for me">
            <RequestBookForMe />
          </Tab>
        </Tabs>
      </TabsContainer>
    </div>
  );
}

Books.PropTypes = {
  getTabsIndex: PropTypes.func.isRequired
}

export default withMainComponent(Books);
