Run the test_api.sh to test the APIs.
It makes the HTTP request to API endpoints using cURL.
FYI: Token will be expired after 5 days.

BASE_URL = `https://pure-hollows-88075.herokuapp.com/api`

TEST_TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDU5MzU0MDAwMDB9.Ja8kfTKzDsQfS-dcy8XOyj5K3bEl1Bg-QmgOPXuQWBI`

SECRET_FOR_GENERATING_TEST_TOKEN = `do not share with anyone`

In case, the test token is expired. It can generate using `jwt.io` easily by using the mentioned secret key.

1. API to fetch details of bank using IFSC

        GET <BASE_URL>/banks?ifsc=<VALID_IFSC>

2. API to fetch branches using bankname and city
   
        GET <BASE_URL>/branches?name=<VALID_NAME>&city=<VALID_CITY>&limit=<LIMIT>&offset=<OFFSET>