import Image from "next/image";
import React from "react";

const Description = () => {
  return (
    <section className="">
      <div className="lg:px-30 px-4 py-8 lg:py-16">
        <div className="lg:flex gap-5 items-center">
          <hr className="max-w-full w-[68px] border border-t-6 border-t-[#23549e] " />
          <h1 className="lg:text-4xl text-2xl font-extrabold text-background2 mt-2 lg:mt-0">
            Apa itu<span className="text-[#23549e] "> SIMPATI </span>?
          </h1>
        </div>
        <p className="mt-10">
          SIMPATI adalah organisasi nirlaba yang memberikan kepedulian terhadap
          anak-anak yatim piatu dan rentan di daerah Denpasar khususnya.
        </p>
        <p className="mt-10">
          Kami memberdayakan anak-anak, remaja, dan keluarga untuk menavigasi
          perubahan secara efektif, membesarkan anak-anak yang sehat,
          mengembangkan hubungan yang kuat, dan menyembuhkan trauma. Kami
          menawarkan dukungan rutin dan konsisten kepada mereka yang membutuhkan
          sehingga anak-anak yang kami asuh dapat berkembang seiring berjalannya
          waktu, memberi mereka kesempatan untuk menciptakan masa depan yang
          lebih cerah.
        </p>

        <p className="mt-10">
          SIMPATI telah membuka program untuk anak yatim piatu, keluarga dan
          komunitas sejak tahun 2023. Kami menyediakan program remaja dan
          keluarga yang meliputi pengasuhan keluarga, adopsi, pencegahan
          pengasuhan melalui penguatan keluarga, kesehatan mental dan perilaku,
          dukungan pengasuhan anak, setelah sekolah, dan pengembangan
          remaja.SIMPATI mempekerjakan sekitar 280 staf penuh waktu dan 150 staf
          paruh waktu/on-call dan mengelola lebih dari 300 sukarelawan dan
          pendukung yang berkumpul untuk membantu anak-anak yatim piatu setiap
          tahunnya.
        </p>
      </div>
      <div className="relative text-center mt-20">
        {/* Image */}
        <Image
          width={700}
          height={700}
          src={"/images/landing-page/backgorund.jpg"}
          alt="Background"
          className="object-cover w-full h-[400px] brightness-50"
        />

        {/* Text Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <hr className="max-w-full w-[68px] border border-t-6  mx-auto mb-5" />
          <h1 className="lg:text-4xl text-2xl font-extrabold text-white">
            TRANSFORMASI KEHIDUPAN ANAK YATIM
          </h1>
          <h1 className="lg:text-4xl text-2xl mt-2 text-white">
            DAN MENGUBAH CERITA MEREKA
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Description;
