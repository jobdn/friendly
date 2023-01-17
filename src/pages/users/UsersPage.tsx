import React from "react";

import { usersThunk } from "@store/thunks/users.thunk";

import { useAppDispatch, useAppSelector } from "../../hooks";

export const UsersPage = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.allUsers);

  React.useEffect(() => {
    dispatch(usersThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page page_center">
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};
