import MainHeader from "@/components/global/main-header";
import StatusBar from "@/components/global/status-bar";
import React from "react";

type ProductLayoutProps = {
  children: React.ReactNode;
};

const ProductLayout = ({ children }: ProductLayoutProps) => {
  return (
    <main>
      <StatusBar />
      <MainHeader />
      <div className="container py-12 mx-auto">{children}</div>
    </main>
  );
};

export default ProductLayout;
