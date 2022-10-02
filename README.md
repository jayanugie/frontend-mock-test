# Frontend Mock Test

## Instalasi
1. Repository ini dapat didownload atau clone via terminal.
```
git clone git@github.com:jayanugie/frontend-mock-test.git
```
2. Buka folder tersebut di VSC, lalu buka terminal dan install modul.
```
npm install
```
3. Jalankan program.
```
npm start
```
Lalu, aplikasi akan otomatis berjalan di halaman browser.

## Ujicoba
1. Jalankan aplikasi dengan membuka [http://localhost:3000/](http://localhost:3000) untuk melihat di halaman browser.
2. [http://localhost:3000/register](http://localhost:3000/register) untuk mencoba fitur Create User, masukkan nama, email, dan password Anda.
3. [http://localhost:3000/login](http://localhost:3000/login) untuk mencoba fitur Login, dibutuhkan email dan password yang sudah teregistrasi.
4. [http://localhost:3000/dashboard](http://localhost:3000/dashboard) untuk mencoba Show Product yang isinya daftar produk yang ada di database. Pada halaman ini, Anda dapat mencoba fitur Create Product, Update Product, dan Delete Product.


## Kekurangan Desain Database
1. Pada API Create User tidak ada informasi error ketika user baru menggunakan email yang sudah ada di database.
2. Tidak adanya CORS (Cross-Origin Resource Sharing). Oleh karena itu, klien tidak dapat menggunakan fungsi Update dan Delete, karena protokol penghubungnya tidak ada.
3. Pada bagian Update Data, request yang ada hanya bagian Nama saja. Umumnya Update Data dapat merubah Price, maupun Gambar.