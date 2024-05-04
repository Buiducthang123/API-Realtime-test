const serverUrl = "ws://localhost:8080/app/doaztfve507hadyzpurl?protocol=7&client=js&version=8.4.0-rc2&flash=false";
const socket = new WebSocket(serverUrl);
console.log(socket);

function connectToServer() {
    try {
        socket.onopen = function () {
            console.log('Kết nối WebSocket được thiết lập!');
            // Gửi yêu cầu subscribe đến server
            const data = {
                // 'auth': "",
                'channel': 'create_user'
            };
            socket.send(JSON.stringify({ event: 'pusher:subscribe', data: data }));
            
            // Thiết lập hàm định thời gửi yêu cầu ping mỗi 5 giây
            // setInterval(function() {
            //     socket.send(JSON.stringify({ event: 'ping' }));
            // }, 5000);
        };

        socket.onmessage = function (event) {
            console.log('Nhận được tin nhắn:', event.data);
            const eventData = JSON.parse(event.data);
            if (eventData.event === "user_created") {
                // Xử lý sự kiện 'create_user_event'
                console.log('Nhận được sự kiện tạo người dùng từ máy chủ:', eventData.data);
            }
        };
        
        socket.onerror = function (error) {
            console.error('Lỗi WebSocket:', error);
        };
        
    } catch (error) {
        console.error('Lỗi khi kết nối với máy chủ WebSocket:', error);
    }
}

connectToServer();
