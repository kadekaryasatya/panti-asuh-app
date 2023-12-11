import { User } from "./user";

export type Artikel = {
  id: number;
  judul: string;
  deskripsi: string;
  users: User;
  gambar: string | null;
  created_at?: string | null;
  updated_at?: string;
};
