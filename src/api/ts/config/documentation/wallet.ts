/**
 * @api {get} /api/v1/wallet fetch all wallets
 * @apiHeader {string} authorization jwt header needed to verify permission to access this endpoint
 * @apiHeader {string="application/json"} Content-Type 
    @apiHeaderExample {string} authorization-header-example:
 *     {
 *       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04"
 *     }
 * @apiName fetch_all
 * @apiGroup wallet
 *
 *
 * @apiSuccess {string} status true
 * @apiSuccess {jsonobject} result object result

 *
 * @apiSuccessExample success-response:
 *     HTTP/1.1 200 ok
  {
    "status": true,
    "result": [
        {
            "currency": "R$",
            "available": 1250.54,
            "invested": 0,
            "profit": 0,
            "total_amount": 0,
            "_id": "5eb0b0b7d6f21b01b9009a5b",
            "user": {
                "activated": true,
                "_id": "5eb0aac09e644c003f526aca",
                "full_name": "investidor",
                "phone_number": "00 00000-00001",
                "email": "investidor@teste",
                "birth_day": "11-11-2021",
                "password": "test",
                "gender": "m",
                "access_level": "5eb0aaad9e644c003f526ac7",
                "created_on": "2020-05-04T23:52:32.858Z"
            },
            "created_on": "2020-05-05T00:17:59.652Z"
        }
    ]
}
 
 * @apiError {string} status false
 * @apiError {jsonobject} result object result
 *
 * @apiErrorExample authorization not informed:
 * HTTP/1.1 500 internal error
 *
        {
            "status": false,
            "result": "token wasn't informed in requesting headers"
        }
  
 */
//========================================================================================
/**
 * @api {post} /api/v1/wallet add wallet
 * @apiHeader {string} authorization jwt header needed to verify permission to access this endpoint
 * @apiHeader {string="application/json"} Content-Type 
    @apiHeaderExample {string} authorization-header-example:
 *     {
 *       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04"
 *     }
 * @apiName add_wallet
 * @apiGroup wallet
 * @apiParam {string} currency wallet (not required; default: R$)
 * @apiParam {number} available available amount of money
 * @apiParam {number} invested invested money number
 * @apiParam {number} profit profit
 * @apiParam {number} total_amount total amount of money 
 * @apiParam {userId} userId user object id
 * @apiParamExample {json} body request example:
   {
   "available": 1250.54,
   "invested": 0,
   "profit": 0,
   "total_amount": 0,
   "userId":"5eb0aac09e644c003f526aca"
}

 * @apiSuccess {string} status true
 * @apiSuccess {jsonobject} result object result

 *
 * @apiSuccessExample success-response:
 *     HTTP/1.1 200 ok
 * {
 *   "status": true,
     "result": "wallet successfully added"
    }
 * @apiError {string} status false
 * @apiError {jsonobject} result object result
 *
 * @apiErrorExample authorization not informed:
 * HTTP/1.1 500 internal error
 *
        {
            "status": false,
            "result": "token wasn't informed in requesting headers"
        }

* @apiError {string} status false
 * @apiError {jsonobject} result object result
 *
 * @apiErrorExample incorrect json object:
 * HTTP/1.1 500 internal error
 *     {
    "status": false,
    "result": {
        "errors": {
            "available": {
                "message": "Path `available` is required.",
                "name": "ValidatorError",
                "properties": {
                    "message": "Path `available` is required.",
                    "type": "required",
                    "path": "available"
                },
                "kind": "required",
                "path": "available"
            },
        },
        "_message": "wallet validation failed",
        "message": "wallet validation failed: available: Path `available` is required., available: Path `available` is required.",
        "name": "ValidationError"
    }
}
   
 */
//========================================================================================
/**
 * @api {put} /api/v1/wallet/:id update wallet
 * @apiHeader {string} authorization jwt header needed to verify permission to access this endpoint
 * @apiHeader {string="application/json"} Content-Type 
    @apiHeaderExample {string} authorization-header-example:
 *     {
 *       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04"
 *     }
 * @apiName update_wallet
 * @apiGroup wallet
  * @apiParam {string} currency wallet (not required; default: R$)
 * @apiParam {number} available available amount of money
 * @apiParam {number} invested invested money number
 * @apiParam {number} profit profit
 * @apiParam {number} total_amount total amount of money 
 * @apiParam {userId} userId user object id
 * @apiParamExample {json} body request example:
    {          
   "available": 21321.54,
   "invested": 0,
   "profit": 0,
   "total_amount": 0,
   "userId":"5eb0aac09e644c003f526aca"
}

 * @apiSuccess {string} status true
 * @apiSuccess {jsonobject} result object result

 *
 * @apiSuccessExample success-response:
 *     HTTP/1.1 200 ok
 *   {
            "status": true,
            "result": "wallet updated successfully"
        }   
 * @apiError {string} status false
 * @apiError {jsonobject} result object result
 *
 * @apiErrorExample authorization not informed:
 * HTTP/1.1 500 internal error
 *
{
    "status": false,
    "result": "token wasn't informed in requesting headers"
}

* @apiError {string} status false
 * @apiError {jsonobject} result object result
 *
 * @apiErrorExample incorrect json object:
 * HTTP/1.1 500 internal error
 *    {
    "status": false,
    "result": {
        "errors": {
            "available": {
                "message": "Path `available` is required.",
                "name": "ValidatorError",
                "properties": {
                    "message": "Path `available` is required.",
                    "type": "required",
                    "path": "available"
                },
                "kind": "required",
                "path": "available"
            },
        },
        "_message": "wallet validation failed",
        "message": "wallet validation failed: available: Path `available` is required., available: Path `available` is required.",
        "name": "ValidationError"
    }
}
   
  * @apiError {string} status false
 * @apiError {jsonobject} result object result
 *
 * @apiErrorExample incorrect :id param:
 * HTTP/1.1 500 internal error
 *
       {
    "status": false,
    "result": "5ea8d04b2e3251s7f07aa35d7 is empty or is not a valid objectid param"
}
  
 */
//========================================================================================
/**
 * @api {get} /api/v1/wallet/:id fetch wallet by id
 * @apiHeader {string} authorization jwt header needed to verify permission to access this endpoint
 * @apiHeader {string="application/json"} Content-Type 
    @apiHeaderExample {string} authorization-header-example:
 *     {
 *       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04"
 *     }
 * @apiName fetch_wallet_by_wallet_id
 * @apiGroup wallet
 *
 *
 * @apiSuccess {string} status true
 * @apiSuccess {jsonobject} result object result

 *
 * @apiSuccessExample success-response:
 *     HTTP/1.1 200 ok
 {
    "status": true,
    "result": {
        "currency": "R$",
        "available": 1250.54,
        "invested": 0,
        "profit": 0,
        "total_amount": 0,
        "_id": "5eb0b0b7d6f21b01b9009a5b",
        "user": {
            "activated": true,
            "_id": "5eb0aac09e644c003f526aca",
            "full_name": "investidor",
            "phone_number": "00 00000-00001",
            "email": "investidor@teste",
            "birth_day": "11-11-2021",
            "password": "test",
            "gender": "m",
            "access_level": "5eb0aaad9e644c003f526ac7",
            "created_on": "2020-05-04T23:52:32.858Z"
        },
        "created_on": "2020-05-05T00:17:59.652Z"
    }
}
 * @apiError {string} status false
 * @apiError {jsonobject} result object result
 *
 * @apiErrorExample authorization not informed:
 * HTTP/1.1 500 internal error
 *
        {
            "status": false,
            "result": "token wasn't informed in requesting headers"
        }
   * @apiError {string} status false
 * @apiError {jsonobject} result object result
 *
 * @apiErrorExample incorrect :id param:
 * HTTP/1.1 500 internal error
 *
       {
    "status": false,
    "result": "5ea8d04b2e3251s7f07aa35d7 is empty or is not a valid objectid param"
}

   * @apiError {string} status false
 * @apiError {jsonobject} result object result
 *
 * @apiErrorExample wallet not found:
 * HTTP/1.1 500 internal error
 *
      {
    "status": false,
    "result": "wallet not found"
}

 */
//========================================================================================
/**
 * @api {delete} /api/v1/wallet/:id delete wallet by id
 * @apiHeader {string} authorization jwt header needed to verify permission to access this endpoint
 * @apiHeader {string="application/json"} Content-Type 
    @apiHeaderExample {string} authorization-header-example:
 *     {
 *       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04"
 *     }
 * @apiName delete_wallet_by_wallet_id
 * @apiGroup wallet
 *
 *
 * @apiSuccess {string} status true
 * @apiSuccess {jsonobject} result object result

 *
 * @apiSuccessExample success-response:
 *     HTTP/1.1 200 ok
 {
    "status": true,
    "result": "wallet deleted successfully"
}
 * @apiError {string} status false
 * @apiError {jsonobject} result object result
 *
 * @apiErrorExample authorization not informed:
 * HTTP/1.1 500 internal error
 *
        {
            "status": false,
            "result": "token wasn't informed in requesting headers"
        }
   * @apiError {string} status false
 * @apiError {jsonobject} result object result
 *
 * @apiErrorExample incorrect :id param:
 * HTTP/1.1 500 internal error
 *
       {
    "status": false,
    "result": "5ea8d04b2e3251s7f07aa35d7 is empty or is not a valid objectid param"
}
 */
