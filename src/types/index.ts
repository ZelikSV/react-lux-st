export type Photo = {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  album: { [key: string]: any };
};

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export type Post = {
  id: string;
  title: string;
  body: string;
  user?: User;
};
