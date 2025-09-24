let keranjang = ["RTX 5090", "CD", "Kodomo"];
console.log("Awal:", keranjang);

keranjang.push("Bakso");
console.log("Setelah push:", keranjang);

keranjang.unshift("Mie ayam");
console.log("Setelah unshift:", keranjang);

keranjang.pop();
console.log("Setelah pop:", keranjang);

keranjang.shift();
console.log("Setelah shift:", keranjang);

console.log("Isi keranjang:");
for (let i = 0; i < keranjang.length; i++) {
  console.log(`${i + 1}. ${keranjang[i]}`);
}

const produk = [
  { nama: "beras", harga: 50000 },
  { nama: "minyak", harga: 20000 },
];

produk.push({ nama: "telor", harga: 1000000 });
console.log("Setelah push produk:");
console.table(produk);

produk.pop();
console.log("Setelah pop produk:");
console.table(produk);

function tambahProduk(nama, harga) {
  produk.push({ nama, harga });
  console.log(`Produk ${nama} ditambahkan.`);
}

function hitungTotal() {
  let total = 0;
  for (let item of produk) {
    total += item.harga;
  }
  return total;
}

tambahProduk("rokok", 36000);
console.table(produk);
console.log("Total harga:", hitungTotal());

if (produk.length > 0) {
  console.log("Produk tersedia");
} else {
  console.log("Produk kosong melompong");
}

let angkaHari = 3; 
let namaHari = "";

switch (angkaHari) {
  case 0:
    namaHari = "Minggu";
    break;
  case 1:
    namaHari = "Senin";
    break;
  case 2:
    namaHari = "Selasa";
    break;
  case 3:
    namaHari = "Rabu";
    break;
  case 4:
    namaHari = "Kamis";
    break;
  case 5:
    namaHari = "Jumat";
    break;
  case 6:
    namaHari = "Sabtu";
    break;
  default:
    namaHari = "Tak tahu lah";
}

console.log("Hari ini, hari:", namaHari);
