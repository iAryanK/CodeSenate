import { CreateRoomForm } from "@/components/form/create-room-form";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="container mx-auto flex flex-col gap-8 pt-12 pb-24">
      <h1 className="text-4xl font-bold">Create Room</h1>
      <CreateRoomForm />
    </div>
  );
};

export default Page;