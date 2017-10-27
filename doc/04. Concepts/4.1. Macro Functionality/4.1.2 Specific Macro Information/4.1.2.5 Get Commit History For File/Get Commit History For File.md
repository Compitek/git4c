### Get commit history for file

Endpoint for getting a commit history for file from repository is available at:

```
POST {git4c-backend-url}/{uuid}/file/commits
```

#### Example request and response
```
Request URL:
    http://pc-kurban:1990/confluence/rest/doc/1.0/documentation/repository/file

Request Method:
    POST

Request Payload:
{
    "branch":"master",
    "file":"Presentation.md"
}


Request Headers:
    POST /confluence/rest/doc/1.0/documentation/1f152a523c6740c1891f646a821dc4d1/file/commits HTTP/1.1
    Host: pc-kurban:1990
    Connection: keep-alive
    Content-Length: 44
    Accept: application/json, text/plain, */*
    Origin: http://pc-kurban:1990
    X-Requested-With: XMLHttpRequest
    User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36
    Content-Type: application/json;charset=UTF-8
    Referer: http://pc-kurban:1990/confluence/display/ds/Git4si
    Accept-Encoding: gzip, deflate
    Accept-Language: pl-PL,pl;q=0.8,en-US;q=0.6,en;q=0.4
    Cookie: JSESSIONID=E521A81AD7B7C80521AA744A1B3A8625; confluence.browse.space.cookie=space-templates

Response Status Code:
    200 OK

Response Body:{
"commitList":{
                {
                    "id":"b6d90a6a8b2661a4ebae1f8bd6f20f4c1dfc2c0f",
                    "authorName":"Andrzej Ressel",
                    "message":"Update",
                    "date":1507194304000
                },
                {
                    "id":"91b8a9857e8edf8de231b766fa9aa6fc4e420b64",
                    "authorName":"Bartosz Bednarek",
                    "message":"abc",
                    "date":1505735249000
                }]
}
```