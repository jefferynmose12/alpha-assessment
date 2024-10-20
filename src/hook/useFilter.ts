import { tableData } from "../layout/data";

const useFilter = ({ search, status }: { search: string; status: string }) => {
  return tableData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      item.status.toLowerCase().includes(status.toLowerCase())
  );
};

export default useFilter;
