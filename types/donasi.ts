export type Donasi = {
  id: number;
  nama: string;
  email: string;
  nominal: string;
  pesan: string;
  bukti_bayar: string;
  donatur: string;
  status: string;
  created_at?: string | null;
  updated_at?: string;
};
