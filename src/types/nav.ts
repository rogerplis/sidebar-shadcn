export interface NavItem {
    title: string
    href?: string
    disabled?: boolean
    external?: boolean
}

export interface SidebarItem {
    group: string
    items: Item
}

export interface Item{
    link: string
    text: string
    icon: string
}