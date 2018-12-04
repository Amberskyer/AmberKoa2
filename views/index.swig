<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>图片上传</title>
    <script src="http://cdn.bootcss.com/jquery/2.0.0/jquery.min.js"></script>
</head>
<body>
<form action="http://127.0.0.1:1024/api/v1/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="file"/>
    <input type="submit" value="ok"/>
</form>
<img style="width: 300px;height: 300px" src="{{ userInfo.user_info.logo }}">

{% for item  in userInfo.folders %}
    <p>{{ item.name }}</p>
{% endfor %}

{{ userInfo.username }}
{{ title }}

</body>
</html>

