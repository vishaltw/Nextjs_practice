import AdminHeader from "@/components/AdminHeader";
import React from "react";

//Layout - dashboard and profile comes as children

const AdminLayout = ({ children }) => {
  return (
    <section>
      <AdminHeader />
      {children}
    </section>
  );
};

export default AdminLayout;
