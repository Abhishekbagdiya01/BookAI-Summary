import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IBooks } from "../models/IBooks";

const useSearch = (search: string) => {
  const searchBooks = async (): Promise<IBooks[]> => {
    const response = await axios.get("https://www.googleapis.com/books/v1/volumes?", {
      params: {
        q: search
      }
    });
    return response.data.items;
  };

  return useQuery({
    queryKey: [search],
    queryFn: searchBooks,
    enabled: false
  });
}
export default useSearch;
