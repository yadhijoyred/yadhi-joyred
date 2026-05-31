/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Program, Advantage, Facility, Testimonial, Activity, Article, FaqItem } from './types';

export const stats = [
  { value: '1,500+', label: 'Alumni Sukses' },
  { value: '500+', label: 'Santri Aktif' },
  { value: '25 Thn', label: 'Pengabdian Mulia' },
  { value: '100%', label: 'Lulusan Hafizh/Intelektual' },
];

export const programs: Program[] = [
  {
    id: 'tahfidz',
    title: 'Tahfidz Al-Qur\'an 30 Juz',
    arabicTitle: 'تحفيظ القرآن الكريم',
    description: 'Program akselerasi menghafal Al-Qur\'an dengan metode mutqin, bersanad, dibimbing huffazh bersertifikasi nasional & internasional.',
    iconName: 'BookOpen',
    features: ['Sistem Talaqqi & Tikrar', 'Target Minimal 1 Juz/Bulan', 'Ujian Terbuka Tasmi\' Per-Juz', 'Sanad Al-Qur\'an (Mutawatir)'],
  },
  {
    id: 'arabic',
    title: 'Penguasaan Bahasa Arab',
    arabicTitle: 'تعليم اللغة العربية',
    description: 'Pembelajaran bahasa Arab aktif (Mustawa Tamhidi, Mutawassit, Mutaqaddim) sebagai kunci utama memahami khazanah keislaman.',
    iconName: 'Languages',
    features: ['Kawasan Wajib Berbahasa', 'Debat & Pidato Bahasa Arab', 'Kajian Nahwu & Sharaf Praktis', 'Pengajar Native Speaker / Timur Tengah'],
  },
  {
    id: 'formal',
    title: 'Pendidikan Formal Terpadu',
    arabicTitle: 'التعليم العام المتكامل',
    description: 'Pendidikan formal tingkat SMP / MTS dan SMA / MA terakreditasi A dengan kurikulum Kemendikbud-Ristek & Kemenag.',
    iconName: 'GraduationCap',
    features: ['Sains & Teknologi Terapan', 'Persiapan SNBT & Luar Negeri', 'Ujian Nasional & Kepesantrenan', 'Beasiswa Kuliah Al-Azhar & Timur Tengah'],
  },
  {
    id: 'leadership',
    title: 'Leadership Program',
    arabicTitle: 'القيادة والريادة',
    description: 'Membentuk kedisiplinan dan jiwa kepemimpinan melalui Organisasi Santri, kepramukaan, kepanduan, dan public speaking.',
    iconName: 'Users',
    features: ['Latihan Kepemimpinan Dasar', 'Organisasi Santri (OSNH)', 'Pelatihan Public Speaking', 'Mentoring Karakter & Manajemen Konflik'],
  },
  {
    id: 'digital',
    title: 'Dakwah Digital & Media',
    arabicTitle: 'الدعوة الرقمية والتكنولوجيا',
    description: 'Membekali santri keterampilan abad ke-21: IT mendasar, desain grafis, editing video, dan tata cara berdakwah sehat di media sosial.',
    iconName: 'Tv',
    features: ['Pembuatan Konten Edukasi', 'Dasar Pemrograman & Web', 'Keterampilan Desain & Videografi', 'Etika Dakwah Siber'],
  },
  {
    id: 'kitab',
    title: 'Kelas Kitab Kuning',
    arabicTitle: 'دراسة الكتب التراثية',
    description: 'Kajian mendalam khazanah keislaman klasik meliputi Fiqih, Aqidah, Akhlak, Hadits, Tafsir menggunakan metode silsilah ilmiah.',
    iconName: 'Scroll',
    features: ['Kajian Fathul Qorib & Riyadlus Sholihin', 'Metode Syarah dan Tanya Jawab', 'Ujian Kelayakan Baca Kitab (Fathul Mu\'in)', 'Penerapan Kaidah Nahwu Sharaf Aktual'],
  },
];

export const advantages: Advantage[] = [
  {
    id: 'adv-1',
    title: 'Asatidz Berpengalaman',
    description: 'Diasuh secara langsung oleh alumni Universitas Islam terkemuka seperti Universitas Al-Azhar Kairo, LIPIA, Madinah, serta huffazh bersanad.',
    iconName: 'Award',
  },
  {
    id: 'adv-2',
    title: 'Lingkungan Islami',
    description: 'Terbentuk ekosistem kondusif 24 jam dengan habituasi ibadah, kejujuran, adab kesantrian, dan budaya cinta Al-Qur\'an.',
    iconName: 'Heart',
  },
  {
    id: 'adv-3',
    title: 'Asrama Nyaman',
    description: 'Kamar huni bersih, sirkulasi udara baik, didampingi pembina asrama (Murabbi) professional yang memantau perkembangan harian santri.',
    iconName: 'Home',
  },
  {
    id: 'adv-4',
    title: 'Kurikulum Terintegrasi',
    description: 'Sinergi harmonis antara Kurikulum Pesantren Salaf/Modern (Muadalah), Kurikulum Tahfidz Nasional, dan Kurikulum Pendidikan Nasional.',
    iconName: 'Compass',
  },
  {
    id: 'adv-5',
    title: 'Pembinaan Karakter',
    description: 'Pendidikan karakter berbasis keteladanan (uswah hasanah), tata krama kesantrian, mandiri, empati, serta tangguh menghadapi masa depan.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'adv-6',
    title: 'Fasilitas Lengkap',
    description: 'Sarana penunjang lengkap standar nasional mulai dari masjid agung, lab komputer, lapangan olahraga luas, klinik kesehatan 24 jam.',
    iconName: 'Layers',
  },
];

export const facilities: Facility[] = [
  {
    id: 'fac-1',
    name: 'Masjid Jami\' Baiturrahman',
    description: 'Pusat spiritual pesantren berdaya tampung 1200 jamaah dengan tata suara megah, ber-AC, dan ornamen geometri Islami yang indah.',
    category: 'Spiritual',
    imageUrl: '/src/assets/images/hero_background_1780192938017.png',
  },
  {
    id: 'fac-2',
    name: 'Asrama Hijau Al-Kautsar',
    description: 'Kompleks tempat tinggal santri bertingkat yang rapi, dilengkapi lemari personil, ranjang tingkat berkualitas, mandi shower, dan ruang lobi santai.',
    category: 'Residensial',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'fac-3',
    name: 'Gedung Kelas Ruang Ibnu Sina',
    description: 'Ruang kelas representatif dilengkapi AC, smart projector, whiteboard magnetik, serta pencahayaan alami yang sehat.',
    category: 'Akademik',
    imageUrl: '/src/assets/images/school_facility_1780192991988.png',
  },
  {
    id: 'fac-4',
    name: 'Perpustakaan Digital Baitul Hikmah',
    description: 'Koleksi ribuan kitab rujukan, buku ensiklopedia kontemporer, fasilitas e-book reader, dan ruang baca lesehan yang hening.',
    category: 'Akademik',
    imageUrl: '/src/assets/images/santri_reading_1780192957889.png',
  },
  {
    id: 'fac-5',
    name: 'Gedung Olahraga & Lapangan Futsal',
    description: 'Lapangan serbaguna indoor dan outdoor untuk basket, badminton, futsal, dan memanah, menjaga stamina kebugaran fisik santri.',
    category: 'Olahraga',
    imageUrl: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'fac-6',
    name: 'Laboratorium Multimedia & IT',
    description: 'Studio mini ber-AC dengan 30 unit komputer berspesifikasi mutakhir untuk kelas desain grafis, editing video, siber dakwah, dan riset sains.',
    category: 'Olahraga',
    imageUrl: '/src/assets/images/school_facility_1780192991988.png',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'H. Bambang Hermanto',
    role: 'Wali Santri (Ahmad Fawwaz, Kelas XI MA)',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    quote: 'Alhamdulillah, keputusan terbaik dalam hidup kami adalah menitipkan Fawwaz di Nurul Huda. Dalam waktu 2 tahun, selain hafal Al-Qur\'an 15 Juz dengan tajwid yang fasih, kesantunan dan kedisiplinan beribadahnya luar biasa meningkat. Gurunya ramah dan rajin mengabari perkembangan santri.',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Ustadzah Syifa Aulia, Lc., S.Ag',
    role: 'Alumni Angkatan 2018 (Penerima Beasiswa Al-Azhar Kairo)',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    quote: 'Nurul Huda bukan sekadar tempat mengaji, melainkan kawah candradimuka kehidupan. Di sini saya diajarkan mencintai ilmu syar\'i, disiplin berbahasa Arab setiap hari, dan berorganisasi. Pondasi dasar ini yang memuluskan jalan saya lulus beasiswa kuliah di Mesir.',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'dr. Hendra Setiawan, Sp.A',
    role: 'Wali Santri (Najma Kamila, Alumni SMA Pondok)',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    quote: 'Sinergi kurikulum sains dan kepesantrenan sangat seimbang. Putri saya bisa hafal 30 Juz Al-Qur\'an sekaligus lulus tes masuk seleksi Fakultas Kedokteran Negeri. Ini bukti nyata bahwa mencintai Al-Qur\'an justru memperluas kecerdasan akademik santri.',
    rating: 5,
  },
];

export const activities: Activity[] = [
  {
    id: 'act-1',
    title: 'Ujian Tasmi\' Akbar Sekali Duduk',
    category: 'Tahfidz',
    imageUrl: '/src/assets/images/santri_reading_1780192957889.png',
    description: 'Ujian kelayakan hafal Al-Qur\'an sekali duduk didengar langsung oleh segenap penguji, asatidz, dan disaksikan wali santri.',
  },
  {
    id: 'act-2',
    title: 'Kajian Kutub at-Turats Mulia',
    category: 'Kajian',
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=600',
    description: 'Kajian mendalam rutin malam Jum\'at bersama pimpinan pesantren menelaah naskah keluhuran adab dan fiqih keseharian.',
  },
  {
    id: 'act-3',
    title: 'Wisuda Tahfidz Al-Qur\'an Akbar IX',
    category: 'Wisuda',
    imageUrl: '/src/assets/images/school_graduation_1780192975647.png',
    description: 'Perayaan tahunan penyerahan syahadah kelulusan huffazh 30 juz berprestasi disertai penyerahan mahkota kepada orang tua santri.',
  },
  {
    id: 'act-4',
    title: 'Juara Musabaqah Hifdhil Qur\'an Nasional',
    category: 'Perlombaan',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
    description: 'Tim kontigen utusan Pesantren Nurul Huda menyapu bersih tropi kejuaraan lomba pidato Bahasa Arab dan MHQ se-Indonesia.',
  },
  {
    id: 'act-5',
    title: 'Pengabdian Santri & Bakti Sosial',
    category: 'Kegiatan Sosial',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600',
    description: 'Implementasi pilar dakwah, santri senior mengajar mengaji masyarakat dhuafa pelosok dan menyebar paket sembako berkah.',
  },
  {
    id: 'act-6',
    title: 'Praktek Khotbah & Dakwah Lapangan',
    category: 'Kajian',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600',
    description: 'Pelatihan rutin santri berceramah di mimbar selepas Sholat Maghrib guna menumbuhkan kecakapan syiar di masyarakat kelak.',
  },
];

export const articles: Article[] = [
  {
    id: 'art-1',
    title: 'Tips Menghafal Al-Qur\'an Metode Mutqin dengan Cepat dan Kuat',
    category: 'Tips Tahfidz',
    date: '10 Mei 2026',
    author: 'K.H. Musthofa Kamal, Lc., M.A.',
    summary: 'Menghafal Al-Qur\'an bukanlah soal kecepatan semata, melainkan bagaimana menjaganya tetap lekat di ingatan (mutqin). Simak cara melatih tikrar praktis ini.',
    content: 'Menghafal Al-Qur\'an bukan sekadar mengingat lafazh secara sepintas, melainkan menanamkannya secara mendalam ke dalam qalbu. Kunci utama menghafal mutqin (kokoh) terletak pada tiga pilar utama:\n\n1. Kualitas Sabaq (Hafalan Baru): Pastikan hafalan baru dibaca berulang minimal 25-40 kali sebelum disetorkan ke Asatil.\n2. Konsistensi Sabaqi (Hafalan Kemarin): Mengulang hafalan yang baru disetorkan minimal 3-5 hari ke belakang demi mencegahnya menguap.\n3. Nilai Manzil (Murojaah Jangka Panjang): Mengulang minimal 1 juz per hari bagi pemilik hafalan di atas 5 juz secara berkelanjutan.\n\nDengan disiplin menerapkan sinergi ketiga pilar di bawah panduan asatidz, hafalan Anda akan bersemayam dengan kokoh dan bersanad.',
    imageUrl: '/src/assets/images/santri_reading_1780192957889.png',
    readTime: '5 menit',
  },
  {
    id: 'art-2',
    title: 'Mempersiapkan Generasi Qur\'ani di Tengah Badai Digital Abad Ke-21',
    category: 'Artikel Pendidikan',
    date: '28 April 2026',
    author: 'Dr. Ahmad Fauqi, S.Pd., M.Pd.I',
    summary: 'Gep teknologi dan degradasi adab menjadi tantangan krusial bagi generasi muda. Sinergi iman, takwa, dan literasi digital adalah obat penawarnya.',
    content: 'Di era kemajuan teknologi informasi saat ini, tantangan yang dihadapi anak muda semakin masif, mulai dari paparan adiksi gadget hingga krisis pemahaman moralitas.\n\nPondok pesantren modern merupakan solusi integral. Di sini, santri tidak hanya dikurung dari pengaruh buruk layar digital, melainkan diajarkan literasi digital beradab. Mereka dilatih menyaring informasi dengan konsep tabayyun, menggunakan perangkat digital sebagai instrumen kemaslahatan dakwah, sains, dan kewirausahaan, serta membentengi jiwa dengan hidayah Al-Qur\'an.',
    imageUrl: '/src/assets/images/school_facility_1780192991988.png',
    readTime: '6 menit',
  },
  {
    id: 'art-3',
    title: 'Urutan Utama Membaca Kitab Kuning bagi Pemula: Dari Dasar hingga Mahir',
    category: 'Kajian Kitab',
    date: '04 April 2026',
    author: 'Ust. Zainal Arifin, M.H.',
    summary: 'Memahami nahwu dan sharaf secara aplikatif adalah gerbang masuk membaca lembaran kuning tanpa harakat. Inilah rujukan kitab silsilah kurikulum kami.',
    content: 'Membaca kitab turats atau kitab kuning membutuhkan keterampilan sintaksis dan morfologi Arab yang mapan. Bagi santri pemula, jenjang pembelajaran disusun sitematis:\n\n1. Pengenalan Harokat: Memulakan kajian dasar kosa kata.\n2. Kitab Al-Jurumiyah: Matn ringkas membahas dasar-dasar ilmu I\'rab (tata kata).\n3. Imrithi dan Alfiyah Ibnu Malik: Menghafal bait nazham untuk kaidah tingkat tinggi dalam penerapan tafsir.\n\nPenerapan langsung saat halaqah di Pesantren Nurul Huda membantu santri mencerna teks secara presisi dan objektif.',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600',
    readTime: '4 menit',
  },
];

export const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Bagaimana jalur tata cara pendaftaran santri baru di Nurul Huda?',
    answer: 'Pendaftaran dilakukan sepenuhnya secara online melalui platform website ini atau offline dengan hadir ke sekretariat pesantren. Isikan formulir pendaftaran santri baru, unggah foto/dokumen pendukung (KK, Akta Lahir, Raport terakhir), lalu lakukan pembayaran biaya pendaftaran untuk mengaktifkan nomor tes seleksi masuk.',
    category: 'Pendaftaran',
  },
  {
    id: 'faq-2',
    question: 'Berapa rincian perkiraan biaya pendidikan tahun ajaran 2026/2027?',
    answer: 'Kami mengutamakan transparansi penuh demi ketenangan wali santri. Biaya Sumbangan Pembinaan Pendidikan (Uang Pangkal) pembangunan meliputi asrama, lemari, ranjang, kasur, seragam lengkap, paket kitab, dan kesehatan awal sebesar Rp 9.500.000 (sekali bayar). Investasi SPP Syahriyah bulanan adalah Rp 1.500.000 sudah mencakup makan sehat 3 kali sehari, asrama ber-AC, laundry pakaian, pembinaan tahfidz, dan operasional sekolah.',
    category: 'Biaya',
  },
  {
    id: 'faq-3',
    question: 'Apakah santri diperbolehkan membawa gadget pribadi ke pondok?',
    answer: 'Demi kemurnian konsentrasi menghafal Al-Qur\'an dan menjaga interaksi sosial santri yang hangat, santri dilarang membawa smartphone, laptop, perangkat gaming, maupun tablet pribadi ke kamar asrama. Namun, akses internet, riset tugas sekolah, pemrograman komputer, dan dakwah multimedia difasilitasi penuh di gedung Laboratorium IT di bawah pengawasan asatidz.',
    category: 'Sistem Pembelajaran',
  },
  {
    id: 'faq-4',
    question: 'Apa saja metode yang digunakan untuk target program Tahfidz Al-Qur\'an?',
    answer: 'Kami menerapkan integrasi metode Talaqqi (bersemuka tatap muka menyimak pelafalan yang benar) dan Tikrar (metode pengulangan berulang bertenaga tinggi). Setiap santri dipersiapkan memiliki kartu kontrol murojaah harian pribadi, dibimbing dalam kelompok kecil berisi 8-10 santri di bawah binaan sorang asatidz Hafizh 30 Juz.',
    category: 'Tahfidz',
  },
  {
    id: 'faq-5',
    question: 'Apakah lulusan Pesantren Nurul Huda mendapatkan ijazah formal dari negara?',
    answer: 'Ya. Seluruh jenjang pendidikan baik Madrasah Tsanawiyah (MTs/setara SMP) maupun Madrasah Aliyah (MA/setara SMA) terakreditasi A secara resmi. Sehingga santri lulus mendapatkan dua jenis ijazah sekaligus: ijazah kepesantrenan (Syahadah Tahfidz & Kitab) serta ijazah pendidikan formal resmi dari Kementerian Agama & Kemendikbud-Ristek untuk keperluan melanjutkan kuliah negeri maupun swasta.',
    category: 'Sistem Pembelajaran',
  },
];
