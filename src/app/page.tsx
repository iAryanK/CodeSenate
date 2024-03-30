import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Room } from "@/db/schema";
import { Github } from "lucide-react";
import { getRooms } from "@/data-access/rooms";

function RoomCard({ room }: { room: Room }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {room.githubRepo && (
          <Link
            href={room.githubRepo}
            className="flex items-center gap-2"
            target="_blank"
          >
            <Github /> Github Project
          </Link>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join Room</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default async function Home() {
  const items = await getRooms();
  return (
    <main className="min-h-screen p-16">
      <div className="flex w-full justify-between items-center mb-8">
        <h1 className="text-4xl">Find Senate Rooms</h1>
        <Button asChild>
          <Link href={"/create-room"}>Create Room</Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => {
          return <RoomCard key={item.id} room={item} />;
        })}
      </div>
    </main>
  );
}
