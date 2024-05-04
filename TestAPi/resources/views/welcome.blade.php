<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>
<body>
    <div>
        <form id="postForm">
            @csrf
            <label for="title">Ten:</label>
            <input type="text" id="title" name="name" style="width: 500px; padding: 5px;">
    
            <br>
    
            <label for="content">email:</label>
            <input id="content" name="email" style="width: 500px; height: 200px; padding: 5px;"></input>
    
            <br>
            <input type="text" id="title" name="password" style="width: 500px; padding: 5px;">
            <input type="text" id="title" name="phone_number" style="width: 500px; padding: 5px;">
    
            <button type="submit" style="padding: 5px 10px; background-color: #000; color: #fff;">Thêm Post</button>
        </form>
    </div>
    <script src="{{ asset('JS/index.js') }}"></script>
</body>
</html>