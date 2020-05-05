/**
 * @api {post} /api/v1/authenticate authenticate users
 * @apiName authenticate
 * @apiGroup authenticate
 * @apiHeader {string="application/json"} Content-Type 
 * @apiParam {string} email user email
 * @apiParam {string} password user password
 @apiParamExample {json} body request example:
    {
	"email":"teste@teste",
	"password":"teste"
   }
 * @apiSuccess {string} status true
 * @apiSuccess {jsonobject} result object result

 *
 * @apiSuccessExample success-response:
 *     HTTP/1.1 200 ok
 * {
    "status": true,
    "result": {
        "payload": {
            "_id": "5ea8fb40741ff2601880523d",
            "full_name": "teste usuario",
            "phone_number": "00 00000-0000",
            "email": "teste@teste",
            "birth_day": "11-11-2020",
            "password": "teste",
            "gender": "m",
            "created_on": "2020-04-29T03:57:52.353Z"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVlYThmYjQwNzQxZmYyNjAxODgwNTIzZCIsImZ1bGxfbmFtZSI6InRlc3RlIHVzdWFyaW8iLCJwaG9uZV9udW1iZXIiOiIwMCAwMDAwMC0wMDAwIiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZSIsImJpcnRoX2RheSI6IjExLTExLTIwMjAiLCJwYXNzd29yZCI6InRlc3RlIiwiZ2VuZGVyIjoibSIsImNyZWF0ZWRfb24iOiIyMDIwLTA0LTI5VDAzOjU3OjUyLjM1M1oifSwiaWF0IjoxNTg4MTMzMTAyLCJleHAiOjE1ODgxMzY3MDJ9.Q_a_6COyEZXZSylQgw1aZh-SKxe_roXk9xYu0hhQKrM"
    }
 * @apiError {string} status false
 * @apiError {jsonobject} result object result
 *
 * @apiErrorExample incorrect json object:
 * HTTP/1.1 500 internal error
 *     {
        "status": false,
        "result":  "fields 'email' and 'password' cannot be empty"
      }
  
  * @apiError {string} status false
 * @apiError {jsonobject} result object result
 *
 * @apiErrorExample user not found:
 * HTTP/1.1 500 internal error
 *     {
          "status": false,
          "result": "user not found"
      }
 */
//========================================================================================
