import { Search } from "lucide-react";

export function Searchbar() {
  return (
    <div className="text-[14px] flex w-[90%] h-[36px] justify-between items-center border-[2px] rounded-xl my-2">
      <div className="flex items-center justify-center gap-2">
        <Search className="h-4" />
        <p>Search</p>
      </div>
      <p className="mr-2">Ctrl K</p>
    </div>
  );
}
