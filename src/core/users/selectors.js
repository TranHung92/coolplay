import { createSelector } from 'reselect';


export function getUsers(state) {
  return state.users;
};

export function getUserById(state, userId) {
  return getUsers(state).get(userId);
};

export const getCurrentUser = createSelector(
  getUsers,
  users => users.get(users.get('currentUserId'))
);

export const getAuthedUser = createSelector(
  getUsers,
  users => users.get(users.get('authedUserId'))
);


