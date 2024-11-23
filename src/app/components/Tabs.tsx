"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Button from "@/app/components/Button";

const Tabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname === "/1" ? 0 : 1);

  const handleChangeTab = (tab: number) => {
    setActiveTab(tab);
    router.push(tab === 0 ? "/1" : "/2");
  };

  return (
    <div className="mb-6 flex w-full justify-center space-x-4">
      <Button
        onClick={() => handleChangeTab(0)}
        mode={activeTab === 0 ? "enableTab" : "disableTab"}
      >
        1
      </Button>
      <Button
        onClick={() => handleChangeTab(1)}
        mode={activeTab === 1 ? "enableTab" : "disableTab"}
      >
        2
      </Button>
    </div>
  );
};

export default Tabs;
