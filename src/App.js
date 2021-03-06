import React, { useState } from 'react';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Order } from './Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';
import { useOrderDialog } from './Hooks/useOrderDialog';
import { OrderDialog } from './Order/OrderDialog';
import { useAuthentication } from './Hooks/useAuthentication';

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  useTitle({ ...openFood, ...orders });
  const orderDialog = useOrderDialog();

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orderDialog} {...orders} />
      <Navbar {...auth} />
      <Order {...orders} {...openFood} {...auth} {...orderDialog} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
