import { Button } from "@headlessui/react";
import Link from "next/link";
import Text from "@/components/ui/Text";

interface IMenuItem {
  title: string;
  url: string;
}

const menuItems: IMenuItem[] = [
  { title: "Collaborations", url: "/collaborations" },
  { title: "References", url: "/references" },
  { title: "Services", url: "/services" },
  { title: "Technologies", url: "/technologies" },
  { title: "Contact us", url: "/contact" },
] as const;

const NavBar = () => {
  return (
    <nav className="fixed top-4 inset-x-0 mx-auto w-[calc(100vw-2rem)] max-w-5xl z-50">
      <div className="flex items-center justify-between p-2 bg-neutral-950/20 backdrop-blur-lg rounded-full border border-neutral-900">
        <Link href="/" className="flex items-baseline ml-4">
          <Text>awarefield</Text>
          <Text size="xs">:labs</Text>
        </Link>

        <ul className="flex space-x-6">
          {menuItems.map((item, key) => (
            <li key={key}>
              <Link href={item.url}>
                <Text size="sm" className="hover:text-white transition-colors">
                  {item.title}
                </Text>
              </Link>
            </li>
          ))}
        </ul>

        <Button className="bg-neutral-50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-50/75 transition-colors">
          Let's Talk
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
