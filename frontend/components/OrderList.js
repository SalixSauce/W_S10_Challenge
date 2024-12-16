import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetOrdersQuery } from '../state/ordersApi';
import { toggleSizeFilter } from '../state/ordersSlice';

export default function OrderList() {
  const { data: orders = [], isLoading, isError } = useGetOrdersQuery();
  const filterSize = useSelector((state) => state.ordersState.filterSize);
  const dispatch = useDispatch();

  const handleSizeFilterChange = (size) => {
    dispatch(toggleSizeFilter(size));
  };

  if (isLoading) return <p>Loading orders...</p>;
  if (isError) return <p>Error loading orders!</p>;

  const filteredOrders =
    filterSize === 'All' ? orders : orders.filter((order) => order.size === filterSize);

  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        {filteredOrders.map((order) => (
          <li key={order.id}>
            <div>
              {`${order.customer} ordered a size ${order.size} with ${
                order.toppings?.length > 0 ? `${order.toppings.length} toppings` : 'no toppings'
              }`}
            </div>
          </li>
        ))}
      </ol>
      <div id="sizeFilters">
        Filter by size:
        {['All', 'S', 'M', 'L'].map((size) => (
          <button
            key={size}
            data-testid={`filterBtn${size}`}
            className={`button-filter${size === filterSize ? ' active' : ''}`}
            onClick={() => handleSizeFilterChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
