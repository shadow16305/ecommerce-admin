import { UserButton, auth } from "@clerk/nextjs";
import MainNavigation from "@/components/main-navigation";
import StoreSwitcher from "@/components/store-switcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

const Sidebar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <aside className="min-h-screen flex flex-row bg-gray-100 w-fit border-r">
      <div className="flex flex-col justify-between w-56 bg-white overflow-hidden min-h-full py-6 px-4">
        <div>
          <StoreSwitcher items={stores} />
          <hr className="bg-neutral-400 w-full my-6" />
          <MainNavigation />
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </aside>
  );
};

export default Sidebar;
