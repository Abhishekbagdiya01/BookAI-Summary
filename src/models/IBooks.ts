
export interface IBooks {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: [];
    pageCount: number;
    description: string;
    imageLinks: {
      thumbnail: string;
    }
  }

}
