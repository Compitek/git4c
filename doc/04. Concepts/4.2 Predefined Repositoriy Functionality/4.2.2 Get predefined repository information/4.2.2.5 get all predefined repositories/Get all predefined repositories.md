
### Get all predefined repositories

Endpoint for getting the list of predefined repositories is available at:

```
GET {git4c-backend-url}/predefine
```


#### Example request and response
```
Request URL:
    http://pc-kurban:1990/confluence/rest/doc/1.0/documentation/predefine

Request Method:
    GET

Request Headers:
    GET /confluence/rest/doc/1.0/documentation/predefine HTTP/1.1
    Host: pc-kurban:1990
    Connection: keep-alive
    Accept: application/json, text/plain, */*
    X-Requested-With: XMLHttpRequest
    User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36
    Referer: http://pc-kurban:1990/confluence/pages/createpage.action?spaceKey=ds
    Accept-Encoding: gzip, deflate
    Accept-Language: pl-PL,pl;q=0.8,en-US;q=0.6,en;q=0.4
    Cookie: JSESSIONID=AE443C4BAB5989773D070B4AAB512FF7; confluence.browse.space.cookie=space-templates

Response Status Code:
    200 OK

Response Body:
[
    {
        "uuid":"e48d4c85c7ce470d91500b2f7ce1b2b9",
        "sourceRepositoryUrl":"ssh://git@bitbucket.networkedassets.net:7999/condoc/markup.git",
        "authType":"SSHKEY",
        "name":"custom2"
    },
    {
        "uuid":"5ea6c204a09941d68979a6b60229d480",
        "sourceRepositoryUrl":"https://kurban@bitbucket.networkedassets.net/bitbucket/scm/condoc/markup.git",
        "authType":"USERNAMEANDPASSWORD",
        "name":"custom1"
    }
]
```