
const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas AMIKOM Yogyakarta',
    major: 'S1 - Teknik Informatika'
  },
  {
    id: 2,
    period: '2019 - 2022',
    institution: 'SMA Negeri 13 Kota Tangerang',
    major: 'MIPA'
  }
];

const skills = [
  { name: 'Vue.js', level: 'Menengah' },
  { name: 'JavaScript', level: 'Menengah' },
  { name: 'Tailwind CSS', level: 'Mahir' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'Express.js', level: 'Menengah' },
  { name: 'PostgreSQL', level: 'Pemula' },
  { name: 'Git & GitHub', level: 'Menengah' },
  { name: 'HTML5 & CSS3', level: 'Mahir' }
];

const projects = [
  {
    title: 'Sistem Manajemen Buku',
    image: '/images/Screenshot 1.png',
    description: 'Sebuah sistem untuk mengelola koleksi buku di perpustakaan.',
    tech: ['C++'],
    link: 'https://github.com/dokaeja/Sistem-Management-Buku.git'
  },
  {
    title: 'ReadLine',
    image: '/images/Screenshot 1(1).png',
    description: 'Aplikasi untuk mentracking dan mengelola bacaan buku.',
    tech: ['Figma'],
    link: 'https://github.com/dokaeja/ReadLine.git'
  },
  {
    title: 'Mahaparfume',
    image: '/images/Screenshot 1(2).png',
    description: 'Pengembangan website e-commerce yang berfokus pada penjualan parfum, memungkinkan pengguna untuk menjelajahi produk, menambahkan ke keranjang, dan melakukan transaksi dengan mudah.',
    tech: ['React.js', 'Boostrap', 'MongoDB', 'Express.js'],
    link: 'https://github.com/wakabi09/parfumeeeeee.git'
  }
];

module.exports = {
  educationHistory,
  skills,
  projects
};
