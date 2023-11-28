export type PengurusPanti = {
  id: number;
  nama: string;
  alamat: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  no_telepon: string;
  isActive: "aktif" | "non-aktif";
  created_at?: string | null;
  updated_at?: string;
};
