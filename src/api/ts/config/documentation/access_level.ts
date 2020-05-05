/**
 * @api {get} /api/v1/access_level fetch all access levels
 * @apiHeader {string} authorization jwt header needed to verify permission to access this endpoint
 * @apiHeader {string="application/json"} Content-Type 
    @apiHeaderExample {string} authorization-header-example:
 *     {
 *       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04"
 *     }
 * @apiName fetch_all
 * @apiGroup access_level
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
            "_id": "5eaf12b6f46e0902c1bcfc1e",
            "name": "investidor",
            "created_on": "2020-05-03T18:51:34.703Z"
        },
        {
            "_id": "5eaf137bf46e0902c1bcfc1f",
            "name": "consultor",
            "created_on": "2020-05-03T18:54:51.634Z"
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
 * @api {post} /api/v1/access_level add access level
 * @apiHeader {string} authorization jwt header needed to verify permission to access this endpoint
 * @apiHeader {string="application/json"} Content-Type 
    @apiHeaderExample {string} authorization-header-example:
 *     {
 *       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04"
 *     }
 * @apiName add_access_level
 * @apiGroup access_level
 * @apiParam {name} name access level name
 
 * @apiParamExample {json} body request example:
   {
	"name":"consultor"
}

 * @apiSuccess {string} status true
 * @apiSuccess {jsonobject} result object result

 *
 * @apiSuccessExample success-response:
 *     HTTP/1.1 200 ok
 * {
 *   "status": true,
     "result": "access level successfully added"
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
 {
    "status": false,
    "result": {
        "errors": {
            "name": {
                "message": "Path `name` is required.",
                "name": "ValidatorError",
                "properties": {
                    "message": "Path `name` is required.",
                    "type": "required",
                    "path": "name"
                },
                "kind": "required",
                "path": "name"
            }
        },
        "_message": "AccessLevel validation failed",
        "message": "AccessLevel validation failed: name: Path `name` is required.",
        "name": "ValidationError"
    }
}
   
 */
//========================================================================================
/**
 * @api {put} /api/v1/access_level/:id update access level
 * @apiHeader {string} authorization jwt header needed to verify permission to access this endpoint
 * @apiHeader {string="application/json"} Content-Type 
    @apiHeaderExample {string} authorization-header-example:
 *     {
 *       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04"
 *     }
 * @apiName update_access_level
 * @apiGroup access_level
 * @apiParam {name} name access level name
 * @apiParamExample {json} body request example:
    {
	"name":"consultor"
}

 * @apiSuccess {string} status true
 * @apiSuccess {jsonobject} result object result

 *
 * @apiSuccessExample success-response:
 *     HTTP/1.1 200 ok
 *   {
            "status": true,
            "result": "access level updated successfully"
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
 {
    "status": false,
    "result": {
        "errors": {
            "name": {
                "message": "Path `name` is required.",
                "name": "ValidatorError",
                "properties": {
                    "message": "Path `name` is required.",
                    "type": "required",
                    "path": "name"
                },
                "kind": "required",
                "path": "name"
            }
        },
        "_message": "AccessLevel validation failed",
        "message": "AccessLevel validation failed: name: Path `name` is required.",
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
 * @api {get} /api/v1/access_level/:id fetch access level by id
 * @apiHeader {string} authorization jwt header needed to verify permission to access this endpoint
 * @apiHeader {string="application/json"} Content-Type 
    @apiHeaderExample {string} authorization-header-example:
 *     {
 *       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04"
 *     }
 * @apiName fetch_access_level_by_access_level_id
 * @apiGroup access_level
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
        "_id": "5eaf12b6f46e0902c1bcfc1e",
        "name": "investidor",
        "created_on": "2020-05-03T18:51:34.703Z"
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
 * @apiErrorExample access_level not found:
 * HTTP/1.1 500 internal error
 *
      {
    "status": false,
    "result": "access level not found"
}

 */
//========================================================================================
/**
 * @api {delete} /api/v1/access_level/:id delete access level by id
 * @apiHeader {string} authorization jwt header needed to verify permission to access this endpoint
 * @apiHeader {string="application/json"} Content-Type 
    @apiHeaderExample {string} authorization-header-example:
 *     {
 *       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04"
 *     }
 * @apiName delete_access_level_by_access_level_id
 * @apiGroup access_level
 *
 *
 * @apiSuccess {string} status true
 * @apiSuccess {jsonobject} result object result

 *
 * @apiSuccessExample success-response:
 *     HTTP/1.1 200 ok
 {
    "status": true,
    "result": "access level deleted successfully"
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
