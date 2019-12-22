#!/bin/bash
BASE_URL='https://gentle-springs-35225.herokuapp.com/api'
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDU5MzU0MDAwMDB9.Ja8kfTKzDsQfS-dcy8XOyj5K3bEl1Bg-QmgOPXuQWBI"
AUTH_HEADER="Authorization: Bearer $TOKEN"

VALID_IFSC=SBIN0003462
INVALID_IFSC=SOMETHING

VALID_NAME='STATE%20BANK%20OF%20INDIA'
VALID_CITY='MUMBAI'
LIMIT=5
OFFSET=10

INVALID_NAME="SOME FAKE BANK"


echo "\n1. Fetching banks details with ifsc - $VALID_IFSC"
curl "$BASE_URL/banks?ifsc=$VALID_IFSC" -H "$AUTH_HEADER"

echo "\n\n2. Fetching $LIMIT $VALID_NAME branches in $VALID_CITY - offset $OFFSET"
curl "$BASE_URL/branches?name=$VALID_NAME&city=$VALID_CITY&limit=$LIMIT&offset=$OFFSET" -H "$AUTH_HEADER"