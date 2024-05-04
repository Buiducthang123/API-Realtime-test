
# API-Realtime-test

## Mô tả:
Mô tả: project đề mô về một ứng dụng BE Laravel(11) sử dụng API kết hợp Laravel Reverd sử dụng cho chức năng real-time ( Thời gian thực)

## Công nghệ sử dụng

**Client:** FE: html,css,js (gói: soket.io) (sử dụng websocket connect tới server Revert)

**Server:** BE: Laravel (các gói: auth sanctum, laravel Reverb)

## Cài đặt dự án
#### Yêu cầu:
- PHP sử dụng phiên bản 8.2 trở lên
- Đã cài đặt composer
- Node.js: Phiên bản 20 trở lên
- MYSQL : Phiên bản 5.7 trở lên

### Bắt đầu:
#### clone dự án về máy:
- Khởi tạo lại file vender và env (có key app) nếu cần
#### Khởi chạy chương trình
- Khởi chạy server ảo
```bash
php artisan serve
```
- Khởi chạy queue (job)
```bash
php artisan queue:listen
```
- Khởi chạy server Reverb
```bash
php artisan rerveb:startstart
```
or
```bash
php artisan rerveb:start --debug
```
oke xong phần BE

#### Cài đặt fontend
- Nhớ cài nodejs :v
  Tải thư viện
```bash
npm install socket.io@latest
npm install socket.io-client@latest
```
Thật ra là 1 trong 2 gói tôi cũng k biết gói nào =)))

