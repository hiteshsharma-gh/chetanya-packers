import Link from 'next/link'
import React from 'react'
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import logo from '@/public/cimp3.png'
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const components: { title: string; href: string; }[] = [
  {
    title: "Domestic Shifting",
    href: "/services/domestic",
  },
  {
    title: "Corporate Shifting",
    href: "/services/corporate",
  },
  {
    title: "International Shifting",
    href: "/services/international",
  },
  {
    title: "Local Shifting",
    href: "/services/local",
  },
  {
    title: "Bulk/Commercial Movement",
    href: "/services/bulk",
  },
  {
    title: "Car Shipping",
    href: "/services/cars",
  }
]

function Navbar() {
  return (
    <nav className='fixed lg:static flex flex-col w-full z-50'>
      <div className='flex justify-center items-center text-xs py-1.5 px-3 gap-3 font-medium bg-amber-300'>
        <Link href='for-shipping' className='flex justify-center items-center gap-2'>
          <FaRegQuestionCircle className='text-cyan-500' />
          Enquiry
        </Link>
        <span>|</span>
        <Link href='/claims' className='flex justify-center items-center gap-2'>
          <FaBook className='text-cyan-500' />
          Claims
        </Link>
      </div>
      <div className='flex justify-around items-center lg:px-4 bg-white'>
        <Link href='/'>
          <Image src={logo} alt='logo' className='w-36 h-36 rounded-full' priority={true} />
        </Link>
        <h1 className='text-4xl font-bold text-cyan-500 hidden lg:flex'>Chaitanya International Packers & Movers</h1>
        <div className='bg-cyan-500 rounded-lg'>
          <Link href={'tel:+919309147622'} target='_blank' className='flex gap-3 px-3 py-2 justify-center items-center'>
            <FaPhoneAlt className='text-amber-300' />
            <p className='text-white font-medium'>9309147622</p>
          </Link>
        </div>
      </div>
      <div className='bg-cyan-500 px-3'>
        <div className='flex lg:hidden justify-end'>
          <div className='flex justify-center items-center text-white mr-3 w-6 h-12'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className='h-5/6 bg-cyan-500 text-white'>
                  <SlMenu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <Link href='/'>
                    <DropdownMenuItem>
                      <span>Home</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href='/about-us'>
                    <DropdownMenuItem>
                      <span>About Us</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuGroup>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <span>Services</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          {components.map((value, index) => (
                            <Link key={index} href={value.href}>
                              <DropdownMenuItem>
                                <span>{value.title}</span>
                              </DropdownMenuItem>
                            </Link>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  </DropdownMenuGroup>
                  <Link href='/locations'>
                    <DropdownMenuItem>
                      <span>Locations</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href='/contact-us'>
                    <DropdownMenuItem>
                      <span>Contact Us</span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className='hidden lg:flex gap-14 px-3 justify-center items-center text-md font-medium text-white'>
          <Link href='/'>Home</Link>
          <Link href='/about-us'>About Us</Link>
          <NavigationMenu>
            <NavigationMenuList className='text-white bg-cyan-500'>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='text-md font-medium'>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link href='/locations'>Locations</Link>
          <Link href='/contact-us'>Contact Us</Link>
        </div>
      </div>
    </nav >
  )
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Navbar
