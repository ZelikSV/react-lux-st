type User = {
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
