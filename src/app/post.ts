export interface Post {
  id: number;
  name: string;
  additionallyname: string;
  description: string;
  img: string;
  date: string;
  label: string;
}

export interface DisplayPost extends Post {
  titleClass: string;
}
