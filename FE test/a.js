$(document).ready(function () {    
    const webSocketChannel1 = "create_user";

    const connectWebSocket = () => {
        window.Echo.channel(webSocketChannel1).listen(
            "CreateUser",
            async (e) => {
                console.log("Received CreateUser event from WebSocket:", e);
            }
        );
    };

   connectWebSocket();

    $('#postForm').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8000/api/register',
            data: $(this).serialize(),
            success: function(data) {
                console.log('ok')
                console.log(data)
            },
            error: function(xhr, status, error) {
                console.log("XHR Status: " + xhr.status);
                console.log("Status: " + status);
                console.log("Error: " + error);
            }
        });
        
    });
    
});
