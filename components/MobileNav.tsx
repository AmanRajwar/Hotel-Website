'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";


const MobileNav = () => {
    return (
        <section className="md:hidden ml-auto">
            <Sheet>
                <SheetTrigger>
                    <Image
                        src='/icons/hamburger.svg'
                        alt="hamburger icon"
                        width={36}
                        height={36}
                        className="cursor-pointer md:hidden"
                    />
                </SheetTrigger>
                <SheetContent side='left' className="border-none bg-slate-800 z-[999999999]">
                    <h1 className='font-3 text-xl font-extrabold text-white'>Dunagiri Home Stay</h1>
                    <div className="flex h-[calc(100vh -72px)] flex-col justify-between overflow-y-auto">
                        <SheetClose asChild>
                            <section className="flex h-full flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map((link) => {
                                    return (
                                        <SheetClose asChild key={link.route} className="text-white">
                                            <Link
                                                href={link.route}
                                                key={link.label}
                                                className={cn('flex gap-4 items-center p-4 rounded-lg w-full max-w-60')}
                                            >
                                                <p className="font-semibold">{link.label}</p>
                                            </Link>
                                        </SheetClose>
                                    );
                                })}
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNav;
