"use client";

import { useRouter } from "next/navigation";

const CustomUseRouter = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Use Router</h1>
      <button
        onClick={() => {
          router.push("/admin/dashboard");
        }}
      >
        Go to Admin Dashboard
      </button>
    </div>
  );
};

export default CustomUseRouter;
