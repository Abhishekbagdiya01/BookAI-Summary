import React from 'react';

export interface ISearchBar {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  // setSearch: React.Dispatch<React.SetStateAction<string>>;
  onPress: () => void;
}
