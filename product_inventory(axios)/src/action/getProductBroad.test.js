import React from 'react';
import getProductBroadCast from './getProductBroad'
it("getProductBroadCast Action Testing", () => {
    const action = getProductBroadCast();
    expect(action.type).toEqual('ALL_PRODUCTS');
  })