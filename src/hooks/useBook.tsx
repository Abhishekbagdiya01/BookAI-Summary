import axios from "axios"
import { IBooks } from "../models/IBooks";
import { useQuery } from "@tanstack/react-query";

const useBook = (bookId: string) => {
  const getBook = async (): Promise<IBooks> => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
    return response.data;
  }
  return useQuery({
    queryKey: [bookId],
    queryFn: getBook,
  })
}
export default useBook;
