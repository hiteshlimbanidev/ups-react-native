type Customer = {
  email: string;
  name: string;
};

type CustomerList = {
  name: ID;
  value: Customer;
};

type TrackingItems = {
  customer_id: String;
  items: Items[];
  customer: Customer;
};

type Items = {
  item_id: Int;
  name: String;
  price: Float;
  quantity: Int;
};

type OrderResponse = {
  value: Order;
};

type CustomerResponse = {
  name: ID;
  value: Customer;
};

type Order = {
  carrier: String;
  createdAt: Date;
  shippingCost: Int;
  trackingId: String;
  Address: String;
  City: String;
  Lat: Float;
  Lng: Float;
  trackingItems: TrackingItems;
};
