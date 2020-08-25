import React from 'react';
import userBroadCast from './userBroad'
it("Action Testing", () => {
    const act = userBroadCast();
    expect(act.type).toEqual('USER_NAME');
  })