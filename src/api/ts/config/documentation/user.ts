/**
 * @api {get} /api/v1/user fetch all users
 * @apiHeader {string} authorization jwt header needed to verify permission to access this endpoint
 * @apiHeader {string="application/json"} Content-Type 
    @apiHeaderExample {string} authorization-header-example:
 *     {
 *       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04"
 *     }
 * @apiName fetch_all
 * @apiGroup user
 *
 *
 * @apiSuccess {string} status true
 * @apiSuccess {jsonobject} result object result

 *
 * @apiSuccessExample success-response:
 *     HTTP/1.1 200 ok
  * {
 *     "status": true,
    "result": {
        [
            {
            "activated": true,
            "_id": "5eaf1919d71bf4035949083c",
            "full_name": "teste usuario",
            "phone_number": "00 00000-0000",
            "email": "teste@teste",
            "birth_day": "11-11-2020",
            "password": "teste",
            "gender": "m",
            "access_level": {
                "_id": "5eaf12b6f46e0902c1bcfc1e",
                "name": "investor",
                "created_on": "2020-05-03T18:51:34.703Z"
            },
            "created_on": "2020-05-03T19:18:49.512Z"
        },
            {...}
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
 * @api {post} /api/v1/user add user
 * @apiHeader {string} authorization jwt header needed to verify permission to access this endpoint
 * @apiHeader {string="application/json"} Content-Type 
    @apiHeaderExample {string} authorization-header-example:
 *     {
 *       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04"
 *     }
 * @apiName add_user
 * @apiGroup user
 * @apiParam {string} full_name user full name
 * @apiParam {string} email user email
 * @apiParam {string} phone_number user phone number
 * @apiParam {string} birth_day user birth day
 * @apiParam {string} password user password
 * @apiParam {string} gender user gender
 * @apiParam {objectid} access_level access_level object id
 * @apiParamExample {json} body request example:
   {
	"full_name":"teste usuario",
	"phone_number":"00 00000-0000",
	"email":"teste@teste",
	"birth_day":"11-11-2020",
	"password":"teste",
	"gender":"m",
	"access_level":"5eaf12b6f46e0902c1bcfc1e"
}

 * @apiSuccess {string} status true
 * @apiSuccess {jsonobject} result object result

 *
 * @apiSuccessExample success-response:
 *     HTTP/1.1 200 ok
 * {
 *   "status": true,
     "result": "user successfully added"
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
            "phone_number": {
                "message": "Path `phone_number` is required.",
                "name": "ValidatorError",
                "properties": {
                    "message": "Path `phone_number` is required.",
                    "type": "required",
                    "path": "phone_number"
                },
                "kind": "required",
                "path": "phone_number"
            },
            "full_name": {
                "message": "Path `full_name` is required.",
                "name": "ValidatorError",
                "properties": {
                    "message": "Path `full_name` is required.",
                    "type": "required",
                    "path": "full_name"
                },
                "kind": "required",
                "path": "full_name"
            }
        },
        "_message": "User validation failed",
        "message": "User validation failed: phone_number: Path `phone_number` is required., full_name: Path `full_name` is required.",
        "name": "ValidationError"
    }
}
   
 */
//========================================================================================
/**
 * @api {put} /api/v1/user/:id update user
 * @apiHeader {string} authorization jwt header needed to verify permission to access this endpoint
 * @apiHeader {string="application/json"} Content-Type 
    @apiHeaderExample {string} authorization-header-example:
 *     {
 *       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04"
 *     }
 * @apiName update_user
 * @apiGroup user
 * @apiParam {boolean} activated user is activated or not
 * @apiParam {string} full_name user full name
 * @apiParam {string} email user email
 * @apiParam {string} phone_number user phone number
 * @apiParam {string} birth_day user birth day
 * @apiParam {string} password user password
 * @apiParam {string} gender user gender
 * @apiParam {objectid} access_level access_level object id
 * @apiParamExample {json} body request example:
    {          
 	"activated": true,
    "_id": "5eaf1919d71bf4035949083c",
    "full_name": "teste usuario",
    "phone_number": "00 00000-0000",
    "email": "teste@teste",
    "birth_day": "11-11-2020",
    "password": "teste",
    "gender": "m",
    "access_level": "5eaf137bf46e0902c1bcfc1f"
}

 * @apiSuccess {string} status true
 * @apiSuccess {jsonobject} result object result

 *
 * @apiSuccessExample success-response:
 *     HTTP/1.1 200 ok
 *   {
            "status": true,
            "result": "user updated successfully"
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
            "phone_number": {
                "message": "Path `phone_number` is required.",
                "name": "ValidatorError",
                "properties": {
                    "message": "Path `phone_number` is required.",
                    "type": "required",
                    "path": "phone_number"
                },
                "kind": "required",
                "path": "phone_number"
            },
            "full_name": {
                "message": "Path `full_name` is required.",
                "name": "ValidatorError",
                "properties": {
                    "message": "Path `full_name` is required.",
                    "type": "required",
                    "path": "full_name"
                },
                "kind": "required",
                "path": "full_name"
            }
        },
        "_message": "User validation failed",
        "message": "User validation failed: phone_number: Path `phone_number` is required., full_name: Path `full_name` is required.",
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
 * @api {get} /api/v1/user/:id fetch user by id
 * @apiHeader {string} authorization jwt header needed to verify permission to access this endpoint
 * @apiHeader {string="application/json"} Content-Type 
    @apiHeaderExample {string} authorization-header-example:
 *     {
 *       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04"
 *     }
 * @apiName fetch_user_by_user_id
 * @apiGroup user
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
        "activated": true,
        "_id": "5ea8fb40741ff2601880523d",
        "full_name": "teste usuario",
        "phone_number": "00 00000-0000",
        "email": "teste@teste",
        "birth_day": "11-11-2020",
        "password": "teste",
        "gender": "m",
        "access_level": {
                "_id": "5eaf12b6f46e0902c1bcfc1e",
                "name": "investor",
                "created_on": "2020-05-03T18:51:34.703Z"
            },
        "created_on": "2020-04-29T03:57:52.353Z"
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
 * @apiErrorExample user not found:
 * HTTP/1.1 500 internal error
 *
      {
    "status": false,
    "result": "user not found"
}

 */
//========================================================================================
/**
 * @api {delete} /api/v1/user/:id delete user by id
 * @apiHeader {string} authorization jwt header needed to verify permission to access this endpoint
 * @apiHeader {string="application/json"} Content-Type 
    @apiHeaderExample {string} authorization-header-example:
 *     {
 *       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04"
 *     }
 * @apiName delete_user_by_user_id
 * @apiGroup user
 *
 *
 * @apiSuccess {string} status true
 * @apiSuccess {jsonobject} result object result

 *
 * @apiSuccessExample success-response:
 *     HTTP/1.1 200 ok
 {
    "status": true,
    "result": "user deleted successfully"
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

//========================================================================================
/**
 * @api {get} /api/v1/user/investor/:id delete user investor by id
 * @apiHeader {string} authorization jwt header needed to verify permission to access this endpoint
 * @apiHeader {string="application/json"} Content-Type 
    @apiHeaderExample {string} authorization-header-example:
 *     {
 *       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04"
 *     }
 * @apiName fetch_user_investor_by_user_id
 * @apiGroup user
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
        "activated": true,
        "_id": "5ea8fb40741ff2601880523d",
        "full_name": "teste usuario",
        "phone_number": "00 00000-0000",
        "email": "teste@teste",
        "birth_day": "11-11-2020",
        "password": "teste",
        "gender": "m",
        "access_level": {
                "_id": "5eaf12b6f46e0902c1bcfc1e",
                "name": "investor",
                "created_on": "2020-05-03T18:51:34.703Z"
            },
        "created_on": "2020-04-29T03:57:52.353Z"
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


* @apiErrorExample isn't an investor
 * HTTP/1.1 500 internal error
 *
       {
    "status": false,
    "result": "user isn't an investor"
}
 */

//========================================================================================

/**
 * @api {get} /api/v1/user/consultant/:id delete user consultant by id
 * @apiHeader {string} authorization jwt header needed to verify permission to access this endpoint
 * @apiHeader {string="application/json"} Content-Type 
    @apiHeaderExample {string} authorization-header-example:
 *     {
 *       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04"
 *     }
 * @apiName fetch_user_consultant_by_user_id
 * @apiGroup user
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
        "activated": true,
        "_id": "5ea8fb40741ff2601880523d",
        "full_name": "consultant ",
        "phone_number": "00 00000-0000",
        "email": "consultant@consultant",
        "birth_day": "11-11-2020",
        "password": "consultant",
        "gender": "m",
        "access_level": {
                "_id": "5eaf12b6f46e0902c1bcfc1e",
                "name": "consultant",
                "created_on": "2020-05-03T18:51:34.703Z"
            },
        "created_on": "2020-04-29T03:57:52.353Z"
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


* @apiErrorExample isn't an consultant
 * HTTP/1.1 500 internal error
 *
       {
    "status": false,
    "result": "user isn't an consultant"
}
 */

//========================================================================================
