"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { ModeToggle } from "../mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Landmark, LogIn, LogOut } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import Link from "next/link";

function AccountDropdown() {
  const session = useSession();
  const isLoggedin = !!session.data;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"link"}>
          <Avatar className="mr-2">
            <AvatarImage src={session?.data?.user?.image ?? ""} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {session?.data?.user?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {isLoggedin ? (
          <DropdownMenuItem onClick={() => signOut()}>
            <LogOut className="mr-2" />
            Sign out
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={() => signIn()}>
            <LogIn className="mr-2" />
            Sign in
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const Header = () => {
  const session = useSession();

  return (
    <header className="py-4 dark:bg-gray-900 bg-gray-100 ">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"} className="flex items-center justify-center">
          <Landmark className="mr-2" />
          <span className="font-semibold">CodeSenate</span>
        </Link>
        <div className="flex gap-4 items-center">
          <AccountDropdown />

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
