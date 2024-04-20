import { TypographyH1 } from "@/components/ui/typography";

import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center">
          <TypographyH1>Cricket</TypographyH1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
