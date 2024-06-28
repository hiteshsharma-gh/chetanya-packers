import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link"

export function AdminMenubar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Order</MenubarTrigger>
        <MenubarContent>
          <Link href='/admin/allorder'>
            <MenubarItem>
              All Orders
            </MenubarItem>
          </Link>
          <Link href='/admin/addorder'>
            <MenubarItem>
              Create Orders
            </MenubarItem>
          </Link>
          <Link href='/admin/updateorder'>
            <MenubarItem>
              Update Orders
            </MenubarItem>
          </Link>
          <Link href='/admin/deleteorder'>
            <MenubarItem>
              Delete Orders
            </MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Customer</MenubarTrigger>
        <MenubarContent>
          <Link href='/admin/allcustomer'>
            <MenubarItem>
              All Customer
            </MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
