import Link from "next/link";
import React from "react";

const LearnLink = () => {
  const id = 2;
  return (
    <>
      <Link href="/admin/dashboard">Admin Dashboard</Link>
      <Link href={`/user/profile/${id}`}>User Profile</Link>
    </>
  );
};

export default LearnLink;
