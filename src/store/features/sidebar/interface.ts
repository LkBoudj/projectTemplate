export interface ISidebarState {
  isOpen: boolean;
}
export interface ISidebar extends React.ComponentProps<"div"> {
  maxWidth?: string | number;
}

