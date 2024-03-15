
const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <main className="md:px-24 px-8">{children}</main>
        </div>
    );
};

export default MainLayout;
