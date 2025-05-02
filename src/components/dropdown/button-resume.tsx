import { Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DownloadButtonResume from "../resume/downloadResume";
import { ViewResume } from "../resume/viewResume";

export function ButtonResume() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-36 h-10 bg-destructive text-white  hover:bg-destructive-foreground">
          Resume
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" className="w-56 ms-2">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Eye />
            <ViewResume />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DownloadButtonResume />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
