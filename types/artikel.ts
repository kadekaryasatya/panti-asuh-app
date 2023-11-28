export type Artikel = {
  id: number;
  judul: string;
  deskripsi: string;
  pengurus_panti_id: number;
  gambar: string | null;
  created_at?: string | null;
  updated_at?: string;
};
