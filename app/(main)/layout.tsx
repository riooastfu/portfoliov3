
const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
            <main className="md:px-24 px-8">{children}</main>
        </div>
    );
};

export default MainLayout;
