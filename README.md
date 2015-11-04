# oauth-server

###Instructions

1. Clone the project

2. In terminal, run `sails lift`

3. Register a “Client”

    1. Post request to `http://localhost:1336/clients/register` with `x-www-form-urlencoded` key:value pairs:

        ```shell
        email : <your email>
        ```

    2. Expected response:

        ```json
        {
            "url": "http://localhost:1336/clients/verify/<your email>?code=gqjH6igH6Z89ROEoVRFmEiVYuEfEZ1kQ"
        }
        ```

    3. Access the verification link. Expected result:

        ```json
        {
          "verified": true,
          "email":    "<your email>"
        }
        ```

3. Register a User

    1. Post Request to `http://localhost:1336/users/register` with `x-www-form-urlencoded` key:value pairs:

        ```shell
        username : <your username>
        password : <your password>
        email    : <your email>
        ```

    2. Expected result:

        ```json
        {
            "url": "http://localhost:1336/users/verify/<your email>?code=Y087VfF3bbHmNrQaRsAfOB8srfNB0gDW"
        }
        ```

    3. Access the verification link. Expected result:

        ```json
        {
          "verified": true,
          "email":    "<your email>"
        }
        ```

4. Request Token

    1. In order to request a token, you require a registered client and a registered user.

    2. Post request to `http://localhost:1336/oauth/token` with `x-www-form-urlencoded` key:value pairs:

        ```shell
        grant_type : password
        client_id  : <received client id>
        username   : <your username>
        password   : <your password>
        ```

    3.  Copy access_token value (`<received access token>`) from the expected result:

        ```json
        {
            "access_token":  "<received access token>",
            "refresh_token": "<received refresh token>",
            "expires_in":    3600,
            "token_type":    "Bearer"
        }
        ```

5. Request Resource with Token

    1. Request with GET `http://localhost:1336/users/current` with custom authorization header key:value pair:

        ```shell
        Authorization : Bearer <received access token>
        ```

    2.  Expected result:

        ```json
        {
            "identity": {
                "username": "<your username>",
                "email":    "<your email>"
            }
        }
        ```

If you get the result as in stept 5, it means that the project runs successfully. Congrats.

