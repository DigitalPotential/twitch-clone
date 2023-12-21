import { Navbar } from "./_components/Navbar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-full pt-20">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default BrowseLayout;
