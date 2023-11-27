export type PengurusPanti = {
  id: number;
  nama: string;
  alamat: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  no_telepon: string;
  isActive: "aktif" | "non-aktif"; // Assuming isActive can only be 'aktif' or 'nonaktif'
  created_at: string | null;
  updated_at: string;
};
