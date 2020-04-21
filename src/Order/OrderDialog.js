import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogShadow,
  DialogFooter,
  ConfirmButton,
} from '../FoodDialog/FoodDialog';

export function OrderDialog({
  openOrderDialog,
  setOpenOrderDialog,
  setOrders,
}) {
  return openOrderDialog ? (
    <>
      <DialogShadow />
      <Dialog>
        <DialogContent>
          <h2> Your order is being created</h2>
          <p>
            Emailed confirmation sent. Thanks for eating Local with Bonfire!
          </p>
        </DialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={() => {
              setOrders([]);
              setOpenOrderDialog();
            }}
          >
            I'd like to add something else.
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  ) : (
    <div />
  );
}
