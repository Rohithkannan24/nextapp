import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UserPages = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="users/New" className="btn btn-primary">
        New User
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UserPages;
