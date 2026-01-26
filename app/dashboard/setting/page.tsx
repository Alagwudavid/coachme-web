"use client";

import Image from "next/image";
import Rightbar from "@/components/rightbar";

function SettingPage() {
  return (
    <div className="">
      <div className="min-h-page container flex">
        <main className="max-w-3xl mx-auto p-4 md:p-6 lg:p-8 flex-1 flex flex-col space-y-6">
          {/* Profile Banner */}
          <div className="bg-muted rounded-2xl flex flex-col space-y-2 overflow-hidden aspect-[3/1]">
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <Image
                src={"/assets/user-2.jpg"}
                alt="User profile image"
                width={720}
                height={240}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-foreground">Jane Doe</h1>
              <p className="text-foreground text-base">@_jane_doe</p>
              <p className="text-foreground text-base">Joined February 2020</p>
            </div>
            <div className="flex space-x-4">
              <p className="text-foreground text-base">23 Courses</p>
              <p className="text-foreground text-base">5 Classes</p>
              <p className="text-foreground text-base">5 Certificates</p>
            </div>
          </div>
          <div className="flex space-x-2 hidden">
            <div className="flex ">
              <h1 className="text-2xl font-bold text-foreground">Jane Doe</h1>
              <p className="text-foreground text-base">@_jane_doe</p>
              <p className="text-foreground text-base">Joined February 2020</p>
            </div>
          </div>
        </main>
        <Rightbar />
      </div>
    </div>
  );
}
export default SettingPage;
