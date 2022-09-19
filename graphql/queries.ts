import { gql } from "@apollo/client";

// get customers
export const GET_CUSTOMERS = gql`
  query GetCustomers {
    GetCustomers {
      value {
        email
        name
      }
      name
    }
  }
`;

//  get orders

export const GET_ORDERS = gql`
  query GetOrders {
    GetOrders {
      value {
        carrier
        createdAt
        shippingCost
        trackingId
        Address
        City
        Lng
        Lat
        trackingItems {
          customer_id
          customer {
            email
            name
          }
          items {
            item_id
            name
            price
            quantity
          }
        }
      }
    }
  }
`;
