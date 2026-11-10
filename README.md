# Retailer Selling Books – Book Reviews API

## Run
```
npm install
npm start
```
Server: http://localhost:5000

## Structure
```
server.js                  starts the server
src/app.js                 builds the Express app
src/config/config.js       port + secrets
src/data/                  in-memory books and users
src/routes/                URL -> controller mapping
src/controllers/           read request, send response
src/services/              business logic (Promises / async)
src/middleware/            auth check + error handling
src/utils/AppError.js      error with HTTP status
```

## Endpoints
| Method | URL | Login? |
|---|---|---|
| GET | / | no |
| GET | /isbn/:isbn | no |
| GET | /author/:author | no |
| GET | /title/:title | no |
| GET | /review/:isbn | no |
| POST | /register  `{"username","password"}` | no |
| POST | /customer/login  `{"username","password"}` | no |
| PUT | /customer/auth/review/:isbn?review=text | yes |
| DELETE | /customer/auth/review/:isbn | yes |

## Test with cURL
```
curl http://localhost:5000/isbn/1
curl -X POST localhost:5000/register -H "Content-Type: application/json" -d '{"username":"alice","password":"pw123"}'
curl -c cookies.txt -X POST localhost:5000/customer/login -H "Content-Type: application/json" -d '{"username":"alice","password":"pw123"}'
curl -b cookies.txt -X PUT "localhost:5000/customer/auth/review/1?review=Loved%20it"
curl -b cookies.txt -X DELETE localhost:5000/customer/auth/review/1
```
On Windows PowerShell use `curl.exe` and escape JSON quotes, or use Postman.
