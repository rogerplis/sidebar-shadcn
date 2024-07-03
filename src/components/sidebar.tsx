"use client";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  BadgeDollarSign,
  Bell,
  CalendarClock,
  ClipboardCheck,
  GraduationCap,
  House,
  LayoutDashboard,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const menuItens = [
    {
      group: "general",
      items: [
        { link: "/", text: "Home", icon: <House /> },
        { link: "/", text: "Dasboard", icon: <LayoutDashboard /> },
        { link: "/", text: "Tasks", icon: <ClipboardCheck /> },
        { link: "/", text: "Events", icon: <CalendarClock /> },
        { link: "/", text: "Sales", icon: <BadgeDollarSign /> },
        { link: "/", text: "Learn", icon: <GraduationCap /> },
        { link: "/", text: "Inbox", icon: <Bell /> },
      ],
    },
    {
      group: "preferences",
      items: [
        { link: "/profile", text: "Profile", icon: <User /> },
        { link: "/", text: "Settings", icon: <Settings /> },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-[300px] border-r min-h-screen p-2 gap-4">      
      <div className="grow">
        <Command>
          <CommandList className="min-h-[400px]">
            {menuItens.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionkey: number) => (
                  <CommandItem key={optionkey} >
                    <Link href={option.link}><p className="flex flex-row items-center gap-2" >{option.icon} {option.text}</p></Link>
                    
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
        <div>Login / Logout</div>
      </div>
      
    </div>
  );
}
