
export interface IBooks {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: [];
    averageRating: number;
    pageCount: number;
    description: string;
    imageLinks: {
      thumbnail: string;
    }
  }

}
