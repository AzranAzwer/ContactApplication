import { ADD_CONTACT, ListInterface } from '../types'

interface ListsState {
  contactList: ListInterface[]
}

const initialState: ListsState = {
  contactList: [
    { id: '120', name: 'Jack', email: 'Jack@sss.com', mobile: 1234567 },
    { id: '121', name: 'Blue', email: 'Blue@sss.com', mobile: 8398399 },
    { id: '122', name: 'Tom', email: 'Tom@sss.com', mobile: 24242424 },
    // { id: '123', name: 'Slim', email: 'Slim@sss.com', mobile: 6565656 },
    // { id: '124', name: 'Vax', email: 'Vax@sss.com', mobile: 323232333 },
    // { id: '125', name: 'Kollign', email: 'Kollign@sss.com', mobile: 899898 },
    // { id: '126', name: 'Pirate', email: 'Pirate@sss.com', mobile: 5454554 },
  ]
};

export const listReducer = (state: ListsState = initialState, action: any): ListsState => {
  switch (action.type) {
    case ADD_CONTACT: {
      return { ...initialState, contactList: [...state.contactList, action.payload] }
    }
    default:
      return state;
  }
}