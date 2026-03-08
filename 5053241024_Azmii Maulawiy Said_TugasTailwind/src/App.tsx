import Button from "./components/button";

const App = () => {
  return (
    <>
      <header className="bg-background-hero text-center h-screen flex justify-center items-center px-6 md:px-20">
        <div className="max-w-4xl">
          <h1 className=" text-[40px] md:text-[56px] lg:text-[72px] font-extrabold text-white leading-tight mb-4">
            Belajar Lebih Cerdas,
            <br />
            Raih Lebih Jauh.
          </h1>
          <p className="text-emerald-100 md:text-lg lg:text-2xl mb-8">
            EduSmart menghadirkan materi interaktif, mentor profesional, dan
            sertifikat resmi untuk mendukung karir impianmu.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary">Mulai Belajar</Button>
            <Button variant="secondary">
              <a href="#fitur">Lihat Fitur</a>
            </Button>
          </div>
        </div>
      </header>

      <main
        id="fitur"
        className="bg-background h-full lg:h-screen flex py-16 lg:py-24 justify-center items-center px-6 md:px-20"
      >
        <div className="max-w-4xl">
          <h2 className="text-[40px] md:text-5xl lg:text-[64px] font-bold text-center md:mb-4">
            Fitur Unggulan
          </h2>
          <p className="text-center text-lg lg:text-xl text-accent mb-12">
            Semua yang kamu butuhkan untuk belajar secara efektif.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-3">
              <span className="text-4xl">🎮</span>
              <h3 className="text-lg font-bold">Materi Interaktif</h3>
              <p className="text-accent text-sm">
                Belajar lewat video, kuis, dan simulasi yang membuat ilmu lebih
                mudah dipahami dan diingat.
              </p>
              <div className="mt-auto pt-2">
                <Button variant="ghost" size="sm">
                  Pelajari →
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-3">
              <span className="text-4xl">👨‍🏫</span>
              <h3 className="text-lg font-bold">Mentor Profesional</h3>
              <p className="text-accent text-sm">
                Didampingi mentor berpengalaman dari industri yang siap
                membimbing setiap langkah belajarmu.
              </p>
              <div className="mt-auto pt-2">
                <Button variant="ghost" size="sm">
                  Temui Mentor →
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-3 md:col-span-2 md:max-w-xs md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0">
              <span className="text-4xl">🏅</span>
              <h3 className="text-lg font-bold">Sertifikat Resmi</h3>
              <p className="text-accent text-sm">
                Raih sertifikat yang diakui ratusan perusahaan sebagai bukti
                nyata kompetensimu.
              </p>
              <div className="mt-auto pt-2">
                <Button variant="ghost" size="sm">
                  Lihat Contoh →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer
        id="footer"
        className="bg-background-footer text-accent py-12 px-6"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-white font-bold text-lg mb-2">EduSmart</p>
            <p className="text-sm mb-4">
              Platform edukasi digital terpercaya untuk kamu yang ingin terus
              berkembang.
            </p>
            <Button variant="primary" size="sm">
              Mulai Belajar
            </Button>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Tautan</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Katalog Kursus
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Kontak</p>
            <ul className="space-y-2 text-sm">
              <li>hello@edusmart.id</li>
              <li>+62 812-3456-7890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-gray-800 text-xs text-center text-accent/90">
          © 2025 EduSmart. Semua hak dilindungi undang-undang.
        </div>
      </footer>
    </>
  );
};

export default App;
