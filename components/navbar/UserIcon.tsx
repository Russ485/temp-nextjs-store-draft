import { LuUser } from "react-icons/lu";
import { currentUser, auth } from "@clerk/nextjs/server";
import React from "react";

type Props = {};

export default async function UserIcon({}: Props) {
  //const { userId } = auth(); only for ID

  const user = await currentUser();

  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
    );
  }

  return (
    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
      <LuUser className="w-6 h-6 text-white" />
    </div>
  );
}
