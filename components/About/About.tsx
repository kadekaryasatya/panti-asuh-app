import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="lg:px-30 px-4 py-8 lg:py-16 text-background2 bg-white">
      <div className=" items-center flex flex-col gap-2 mb-20">
        <Image
          width={250}
          height={250}
          src={"/images/logo/panti-logo.png"}
          alt="Logo"
        />{" "}
        <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
          SIMPATI
        </span>
      </div>
      <div className="mb-20">
        <h1 className="lg:text-3xl font-bold  mb-5 uppercase">
          Latar Belakang
        </h1>
        <p className="w-full ">
          Panti asuhan sebagai lembaga sosial memiliki peran penting dalam
          memberikan perlindungan dan perawatan kepada anak-anak yang kurang
          beruntung atau terlantar. Namun, dalam menjalankan kegiatan
          sehari-hari, panti asuhan seringkali dihadapkan pada berbagai
          permasalahan dalam sistem informasinya. Salah satu permasalahan utama
          adalah kurangnya sistem informasi yang terintegrasi antara pengurus
          panti dan para donatur yang mendukung keberlangsungan
          panti.Ketidaktersediaan sistem informasi yang efektif seringkali
          mengakibatkan keterlambatan dalam pelaporan dan transparansi
          pengelolaan dana serta kegiatan di panti. Pengurus panti kesulitan
          dalam memonitor dan mengevaluasi kebutuhan anak-anak yang diasuh,
          termasuk pemenuhan kebutuhan sehari-hari, pendidikan, dan kesehatan.
          Selain itu, kurangnya koordinasi antara pengurus panti dan donatur
          menyebabkan ketidakjelasan mengenai alokasi dana yang telah
          disumbangkan dan dampaknya terhadap perkembangan anak-anak di panti.
        </p>
      </div>
      <div className="mb-20">
        <h1 className="lg:text-3xl font-bold  mb-5 uppercase text-center">
          Visi
        </h1>
        <p className=" lg:w-3/4 w-full text-center  mx-auto">
          Menjadi Pusat Transformasi Sosial melalui Sistem Informasi yang
          Inovatif dan Berdaya, Membawa Pencerahan Bagi Anak-anak Panti,
          Membangun Keterbukaan, dan Menumbuhkan Dukungan Berkelanjutan.
        </p>
      </div>

      <div className="mb-20">
        <h1 className="lg:text-3xl font-bold  mb-5 uppercase text-center">
          MISI
        </h1>
        <p className=" lg:w-3/4 w-full text-center  mx-auto">
          Optimalisasi Pengelolaan Dana: Menciptakan sistem informasi yang
          mengoptimalkan pengelolaan dan pelaporan dana secara transparan,
          efisien, dan akurat untuk mendukung kebutuhan dan perkembangan
          anak-anak di panti. Integrasi Komunikasi: Memastikan terjadinya
          integrasi komunikasi yang sinergis antara pengurus panti dan donatur,
          melalui platform yang mudah diakses, untuk membangun hubungan saling
          percaya dan memaksimalkan potensi dukungan finansial. Pemantauan
          Kesejahteraan Anak-anak: Menyajikan solusi informasi yang memungkinkan
          pengurus panti untuk secara sistematis memantau dan mengevaluasi
          kesejahteraan anak-anak, termasuk aspek pendidikan, kesehatan, dan
          perkembangan pribadi. Keterlibatan Donatur: Meningkatkan keterlibatan
          donatur dengan menyediakan informasi yang jelas dan terperinci
          mengenai penggunaan dana, progres anak-anak, serta memberikan
          kesempatan untuk berpartisipasi langsung dalam kegiatan panti.
          Kemudahan Akses dan Penggunaan: Menghadirkan sistem yang mudah diakses
          dan digunakan oleh semua pihak terkait, baik pengurus panti, donatur,
          maupun pihak internal, tanpa memerlukan keterampilan teknis yang
          tinggi. Keamanan Data: Menjamin tingkat keamanan data yang tinggi
          untuk melindungi informasi sensitif terkait anak-anak, donatur, dan
          keuangan panti, menjaga kepercayaan dan integritas sistem. Inovasi
          Berkelanjutan: Menyediakan solusi informasi yang dapat terus
          berkembang seiring waktu, memfasilitasi inovasi berkelanjutan sesuai
          dengan perkembangan kebutuhan dan teknologi, serta mendukung
          pertumbuhan dan keberlanjutan panti asuhan.
        </p>
      </div>
    </div>
  );
};

export default About;
