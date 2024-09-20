import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {createOrderAsync} from './orderSlice';

export default function Order() {
  const orders = useSelector();
  const dispatch = useDispatch();

  return (
    <div>
      <div>
          
      </div>
    </div>
  );
}
