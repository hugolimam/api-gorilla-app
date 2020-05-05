define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/access_level",
    "title": "add access level",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>jwt header needed to verify permission to access this endpoint</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "authorization-header-example:",
          "content": "{\n  \"authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04\"\n}",
          "type": "string"
        }
      ]
    },
    "name": "add_access_level",
    "group": "access_level",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "name",
            "description": "<p>access level name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "body request example:",
          "content": "   {\n\t\"name\":\"consultor\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "    HTTP/1.1 200 ok\n{\n  \"status\": true,\n     \"result\": \"access level successfully added\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "authorization not informed:",
          "content": "HTTP/1.1 500 internal error\n\n        {\n            \"status\": false,\n            \"result\": \"token wasn't informed in requesting headers\"\n        }",
          "type": "json"
        },
        {
          "title": "incorrect json object:",
          "content": "HTTP/1.1 500 internal error\n {\n    \"status\": false,\n    \"result\": {\n        \"errors\": {\n            \"name\": {\n                \"message\": \"Path `name` is required.\",\n                \"name\": \"ValidatorError\",\n                \"properties\": {\n                    \"message\": \"Path `name` is required.\",\n                    \"type\": \"required\",\n                    \"path\": \"name\"\n                },\n                \"kind\": \"required\",\n                \"path\": \"name\"\n            }\n        },\n        \"_message\": \"AccessLevel validation failed\",\n        \"message\": \"AccessLevel validation failed: name: Path `name` is required.\",\n        \"name\": \"ValidationError\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/access_level.ts",
    "groupTitle": "access_level"
  },
  {
    "type": "delete",
    "url": "/api/v1/access_level/:id",
    "title": "delete access level by id",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>jwt header needed to verify permission to access this endpoint</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "authorization-header-example:",
          "content": "{\n  \"authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04\"\n}",
          "type": "string"
        }
      ]
    },
    "name": "delete_access_level_by_access_level_id",
    "group": "access_level",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "    HTTP/1.1 200 ok\n {\n    \"status\": true,\n    \"result\": \"access level deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "authorization not informed:",
          "content": "HTTP/1.1 500 internal error\n\n        {\n            \"status\": false,\n            \"result\": \"token wasn't informed in requesting headers\"\n        }",
          "type": "json"
        },
        {
          "title": "incorrect :id param:",
          "content": "HTTP/1.1 500 internal error\n\n       {\n    \"status\": false,\n    \"result\": \"5ea8d04b2e3251s7f07aa35d7 is empty or is not a valid objectid param\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/access_level.ts",
    "groupTitle": "access_level"
  },
  {
    "type": "get",
    "url": "/api/v1/access_level/:id",
    "title": "fetch access level by id",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>jwt header needed to verify permission to access this endpoint</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "authorization-header-example:",
          "content": "{\n  \"authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04\"\n}",
          "type": "string"
        }
      ]
    },
    "name": "fetch_access_level_by_access_level_id",
    "group": "access_level",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "    HTTP/1.1 200 ok\n {\n    \"status\": true,\n    \"result\": {\n        \"_id\": \"5eaf12b6f46e0902c1bcfc1e\",\n        \"name\": \"investidor\",\n        \"created_on\": \"2020-05-03T18:51:34.703Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "authorization not informed:",
          "content": "HTTP/1.1 500 internal error\n\n        {\n            \"status\": false,\n            \"result\": \"token wasn't informed in requesting headers\"\n        }",
          "type": "json"
        },
        {
          "title": "incorrect :id param:",
          "content": "HTTP/1.1 500 internal error\n\n       {\n    \"status\": false,\n    \"result\": \"5ea8d04b2e3251s7f07aa35d7 is empty or is not a valid objectid param\"\n}",
          "type": "json"
        },
        {
          "title": "access_level not found:",
          "content": "HTTP/1.1 500 internal error\n\n      {\n    \"status\": false,\n    \"result\": \"access level not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/access_level.ts",
    "groupTitle": "access_level"
  },
  {
    "type": "get",
    "url": "/api/v1/access_level",
    "title": "fetch all access levels",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>jwt header needed to verify permission to access this endpoint</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "authorization-header-example:",
          "content": "{\n  \"authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04\"\n}",
          "type": "string"
        }
      ]
    },
    "name": "fetch_all",
    "group": "access_level",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "    HTTP/1.1 200 ok\n{\n    \"status\": true,\n    \"result\": {\n        [\n           {\n            \"_id\": \"5eaf12b6f46e0902c1bcfc1e\",\n            \"name\": \"investidor\",\n            \"created_on\": \"2020-05-03T18:51:34.703Z\"\n        },\n        {\n            \"_id\": \"5eaf137bf46e0902c1bcfc1f\",\n            \"name\": \"consultor\",\n            \"created_on\": \"2020-05-03T18:54:51.634Z\"\n        },\n            {...}\n        ]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "authorization not informed:",
          "content": "HTTP/1.1 500 internal error\n\n        {\n            \"status\": false,\n            \"result\": \"token wasn't informed in requesting headers\"\n        }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/access_level.ts",
    "groupTitle": "access_level"
  },
  {
    "type": "put",
    "url": "/api/v1/access_level/:id",
    "title": "update access level",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>jwt header needed to verify permission to access this endpoint</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "authorization-header-example:",
          "content": "{\n  \"authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04\"\n}",
          "type": "string"
        }
      ]
    },
    "name": "update_access_level",
    "group": "access_level",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "name",
            "description": "<p>access level name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "body request example:",
          "content": "    {\n\t\"name\":\"consultor\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "  HTTP/1.1 200 ok\n{\n          \"status\": true,\n          \"result\": \"access level updated successfully\"\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "authorization not informed:",
          "content": "HTTP/1.1 500 internal error\n\n{\n    \"status\": false,\n    \"result\": \"token wasn't informed in requesting headers\"\n}",
          "type": "json"
        },
        {
          "title": "incorrect json object:",
          "content": "HTTP/1.1 500 internal error\n {\n    \"status\": false,\n    \"result\": {\n        \"errors\": {\n            \"name\": {\n                \"message\": \"Path `name` is required.\",\n                \"name\": \"ValidatorError\",\n                \"properties\": {\n                    \"message\": \"Path `name` is required.\",\n                    \"type\": \"required\",\n                    \"path\": \"name\"\n                },\n                \"kind\": \"required\",\n                \"path\": \"name\"\n            }\n        },\n        \"_message\": \"AccessLevel validation failed\",\n        \"message\": \"AccessLevel validation failed: name: Path `name` is required.\",\n        \"name\": \"ValidationError\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "incorrect :id param:",
          "content": "HTTP/1.1 500 internal error\n\n       {\n    \"status\": false,\n    \"result\": \"5ea8d04b2e3251s7f07aa35d7 is empty or is not a valid objectid param\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/access_level.ts",
    "groupTitle": "access_level"
  },
  {
    "type": "post",
    "url": "/api/v1/authenticate",
    "title": "authenticate users",
    "name": "authenticate",
    "group": "authenticate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "body request example:",
          "content": "    {\n\t\"email\":\"teste@teste\",\n\t\"password\":\"teste\"\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "    HTTP/1.1 200 ok\n{\n    \"status\": true,\n    \"result\": {\n        \"payload\": {\n            \"_id\": \"5ea8fb40741ff2601880523d\",\n            \"full_name\": \"teste usuario\",\n            \"phone_number\": \"00 00000-0000\",\n            \"email\": \"teste@teste\",\n            \"birth_day\": \"11-11-2020\",\n            \"password\": \"teste\",\n            \"gender\": \"m\",\n            \"created_on\": \"2020-04-29T03:57:52.353Z\"\n        },\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVlYThmYjQwNzQxZmYyNjAxODgwNTIzZCIsImZ1bGxfbmFtZSI6InRlc3RlIHVzdWFyaW8iLCJwaG9uZV9udW1iZXIiOiIwMCAwMDAwMC0wMDAwIiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZSIsImJpcnRoX2RheSI6IjExLTExLTIwMjAiLCJwYXNzd29yZCI6InRlc3RlIiwiZ2VuZGVyIjoibSIsImNyZWF0ZWRfb24iOiIyMDIwLTA0LTI5VDAzOjU3OjUyLjM1M1oifSwiaWF0IjoxNTg4MTMzMTAyLCJleHAiOjE1ODgxMzY3MDJ9.Q_a_6COyEZXZSylQgw1aZh-SKxe_roXk9xYu0hhQKrM\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "incorrect json object:",
          "content": "HTTP/1.1 500 internal error\n    {\n        \"status\": false,\n        \"result\":  \"fields 'email' and 'password' cannot be empty\"\n      }",
          "type": "json"
        },
        {
          "title": "user not found:",
          "content": "HTTP/1.1 500 internal error\n    {\n          \"status\": false,\n          \"result\": \"user not found\"\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/all.ts",
    "groupTitle": "authenticate"
  },
  {
    "type": "post",
    "url": "/api/v1/user",
    "title": "add user",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>jwt header needed to verify permission to access this endpoint</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "authorization-header-example:",
          "content": "{\n  \"authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04\"\n}",
          "type": "string"
        }
      ]
    },
    "name": "add_user",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "full_name",
            "description": "<p>user full name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone_number",
            "description": "<p>user phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "birth_day",
            "description": "<p>user birth day</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>user gender</p>"
          },
          {
            "group": "Parameter",
            "type": "objectid",
            "optional": false,
            "field": "access_level",
            "description": "<p>access_level object id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "body request example:",
          "content": "   {\n\t\"full_name\":\"teste usuario\",\n\t\"phone_number\":\"00 00000-0000\",\n\t\"email\":\"teste@teste\",\n\t\"birth_day\":\"11-11-2020\",\n\t\"password\":\"teste\",\n\t\"gender\":\"m\",\n\t\"access_level\":\"5eaf12b6f46e0902c1bcfc1e\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "    HTTP/1.1 200 ok\n{\n  \"status\": true,\n     \"result\": \"user successfully added\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "authorization not informed:",
          "content": "HTTP/1.1 500 internal error\n\n        {\n            \"status\": false,\n            \"result\": \"token wasn't informed in requesting headers\"\n        }",
          "type": "json"
        },
        {
          "title": "incorrect json object:",
          "content": "HTTP/1.1 500 internal error\n    {\n    \"status\": false,\n    \"result\": {\n        \"errors\": {\n            \"phone_number\": {\n                \"message\": \"Path `phone_number` is required.\",\n                \"name\": \"ValidatorError\",\n                \"properties\": {\n                    \"message\": \"Path `phone_number` is required.\",\n                    \"type\": \"required\",\n                    \"path\": \"phone_number\"\n                },\n                \"kind\": \"required\",\n                \"path\": \"phone_number\"\n            },\n            \"full_name\": {\n                \"message\": \"Path `full_name` is required.\",\n                \"name\": \"ValidatorError\",\n                \"properties\": {\n                    \"message\": \"Path `full_name` is required.\",\n                    \"type\": \"required\",\n                    \"path\": \"full_name\"\n                },\n                \"kind\": \"required\",\n                \"path\": \"full_name\"\n            }\n        },\n        \"_message\": \"User validation failed\",\n        \"message\": \"User validation failed: phone_number: Path `phone_number` is required., full_name: Path `full_name` is required.\",\n        \"name\": \"ValidationError\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/user.ts",
    "groupTitle": "user"
  },
  {
    "type": "delete",
    "url": "/api/v1/user/:id",
    "title": "delete user by id",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>jwt header needed to verify permission to access this endpoint</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "authorization-header-example:",
          "content": "{\n  \"authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04\"\n}",
          "type": "string"
        }
      ]
    },
    "name": "delete_user_by_user_id",
    "group": "user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "    HTTP/1.1 200 ok\n {\n    \"status\": true,\n    \"result\": \"user deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "authorization not informed:",
          "content": "HTTP/1.1 500 internal error\n\n        {\n            \"status\": false,\n            \"result\": \"token wasn't informed in requesting headers\"\n        }",
          "type": "json"
        },
        {
          "title": "incorrect :id param:",
          "content": "HTTP/1.1 500 internal error\n\n       {\n    \"status\": false,\n    \"result\": \"5ea8d04b2e3251s7f07aa35d7 is empty or is not a valid objectid param\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/user.ts",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/api/v1/user",
    "title": "fetch all users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>jwt header needed to verify permission to access this endpoint</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "authorization-header-example:",
          "content": "{\n  \"authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04\"\n}",
          "type": "string"
        }
      ]
    },
    "name": "fetch_all",
    "group": "user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "    HTTP/1.1 200 ok\n{\n    \"status\": true,\n    \"result\": {\n        [\n            {\n            \"activated\": true,\n            \"_id\": \"5eaf1919d71bf4035949083c\",\n            \"full_name\": \"teste usuario\",\n            \"phone_number\": \"00 00000-0000\",\n            \"email\": \"teste@teste\",\n            \"birth_day\": \"11-11-2020\",\n            \"password\": \"teste\",\n            \"gender\": \"m\",\n            \"access_level\": {\n                \"_id\": \"5eaf12b6f46e0902c1bcfc1e\",\n                \"name\": \"investor\",\n                \"created_on\": \"2020-05-03T18:51:34.703Z\"\n            },\n            \"created_on\": \"2020-05-03T19:18:49.512Z\"\n        },\n            {...}\n        ]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "authorization not informed:",
          "content": "HTTP/1.1 500 internal error\n\n        {\n            \"status\": false,\n            \"result\": \"token wasn't informed in requesting headers\"\n        }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/user.ts",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/api/v1/user/:id",
    "title": "fetch user by id",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>jwt header needed to verify permission to access this endpoint</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "authorization-header-example:",
          "content": "{\n  \"authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04\"\n}",
          "type": "string"
        }
      ]
    },
    "name": "fetch_user_by_user_id",
    "group": "user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "    HTTP/1.1 200 ok\n {\n    \"status\": true,\n    \"result\": {\n        \"activated\": true,\n        \"_id\": \"5ea8fb40741ff2601880523d\",\n        \"full_name\": \"teste usuario\",\n        \"phone_number\": \"00 00000-0000\",\n        \"email\": \"teste@teste\",\n        \"birth_day\": \"11-11-2020\",\n        \"password\": \"teste\",\n        \"gender\": \"m\",\n        \"access_level\": {\n                \"_id\": \"5eaf12b6f46e0902c1bcfc1e\",\n                \"name\": \"investor\",\n                \"created_on\": \"2020-05-03T18:51:34.703Z\"\n            },\n        \"created_on\": \"2020-04-29T03:57:52.353Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "authorization not informed:",
          "content": "HTTP/1.1 500 internal error\n\n        {\n            \"status\": false,\n            \"result\": \"token wasn't informed in requesting headers\"\n        }",
          "type": "json"
        },
        {
          "title": "incorrect :id param:",
          "content": "HTTP/1.1 500 internal error\n\n       {\n    \"status\": false,\n    \"result\": \"5ea8d04b2e3251s7f07aa35d7 is empty or is not a valid objectid param\"\n}",
          "type": "json"
        },
        {
          "title": "user not found:",
          "content": "HTTP/1.1 500 internal error\n\n      {\n    \"status\": false,\n    \"result\": \"user not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/user.ts",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/api/v1/user/consultant/:id",
    "title": "delete user consultant by id",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>jwt header needed to verify permission to access this endpoint</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "authorization-header-example:",
          "content": "{\n  \"authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04\"\n}",
          "type": "string"
        }
      ]
    },
    "name": "fetch_user_consultant_by_user_id",
    "group": "user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "    HTTP/1.1 200 ok\n {\n    \"status\": true,\n    \"result\": {\n        \"activated\": true,\n        \"_id\": \"5ea8fb40741ff2601880523d\",\n        \"full_name\": \"consultant \",\n        \"phone_number\": \"00 00000-0000\",\n        \"email\": \"consultant@consultant\",\n        \"birth_day\": \"11-11-2020\",\n        \"password\": \"consultant\",\n        \"gender\": \"m\",\n        \"access_level\": {\n                \"_id\": \"5eaf12b6f46e0902c1bcfc1e\",\n                \"name\": \"consultant\",\n                \"created_on\": \"2020-05-03T18:51:34.703Z\"\n            },\n        \"created_on\": \"2020-04-29T03:57:52.353Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "authorization not informed:",
          "content": "HTTP/1.1 500 internal error\n\n        {\n            \"status\": false,\n            \"result\": \"token wasn't informed in requesting headers\"\n        }",
          "type": "json"
        },
        {
          "title": "incorrect :id param:",
          "content": "HTTP/1.1 500 internal error\n\n       {\n    \"status\": false,\n    \"result\": \"5ea8d04b2e3251s7f07aa35d7 is empty or is not a valid objectid param\"\n}",
          "type": "json"
        },
        {
          "title": "isn't an consultant",
          "content": "HTTP/1.1 500 internal error\n\n       {\n    \"status\": false,\n    \"result\": \"user isn't an consultant\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/user.ts",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/api/v1/user/investor/:id",
    "title": "delete user investor by id",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>jwt header needed to verify permission to access this endpoint</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "authorization-header-example:",
          "content": "{\n  \"authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04\"\n}",
          "type": "string"
        }
      ]
    },
    "name": "fetch_user_investor_by_user_id",
    "group": "user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "    HTTP/1.1 200 ok\n {\n    \"status\": true,\n    \"result\": {\n        \"activated\": true,\n        \"_id\": \"5ea8fb40741ff2601880523d\",\n        \"full_name\": \"teste usuario\",\n        \"phone_number\": \"00 00000-0000\",\n        \"email\": \"teste@teste\",\n        \"birth_day\": \"11-11-2020\",\n        \"password\": \"teste\",\n        \"gender\": \"m\",\n        \"access_level\": {\n                \"_id\": \"5eaf12b6f46e0902c1bcfc1e\",\n                \"name\": \"investor\",\n                \"created_on\": \"2020-05-03T18:51:34.703Z\"\n            },\n        \"created_on\": \"2020-04-29T03:57:52.353Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "authorization not informed:",
          "content": "HTTP/1.1 500 internal error\n\n        {\n            \"status\": false,\n            \"result\": \"token wasn't informed in requesting headers\"\n        }",
          "type": "json"
        },
        {
          "title": "incorrect :id param:",
          "content": "HTTP/1.1 500 internal error\n\n       {\n    \"status\": false,\n    \"result\": \"5ea8d04b2e3251s7f07aa35d7 is empty or is not a valid objectid param\"\n}",
          "type": "json"
        },
        {
          "title": "isn't an investor",
          "content": "HTTP/1.1 500 internal error\n\n       {\n    \"status\": false,\n    \"result\": \"user isn't an investor\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/user.ts",
    "groupTitle": "user"
  },
  {
    "type": "put",
    "url": "/api/v1/user/:id",
    "title": "update user",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>jwt header needed to verify permission to access this endpoint</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "authorization-header-example:",
          "content": "{\n  \"authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04\"\n}",
          "type": "string"
        }
      ]
    },
    "name": "update_user",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "activated",
            "description": "<p>user is activated or not</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "full_name",
            "description": "<p>user full name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone_number",
            "description": "<p>user phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "birth_day",
            "description": "<p>user birth day</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>user gender</p>"
          },
          {
            "group": "Parameter",
            "type": "objectid",
            "optional": false,
            "field": "access_level",
            "description": "<p>access_level object id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "body request example:",
          "content": "    {          \n \t\"activated\": true,\n    \"_id\": \"5eaf1919d71bf4035949083c\",\n    \"full_name\": \"teste usuario\",\n    \"phone_number\": \"00 00000-0000\",\n    \"email\": \"teste@teste\",\n    \"birth_day\": \"11-11-2020\",\n    \"password\": \"teste\",\n    \"gender\": \"m\",\n    \"access_level\": \"5eaf137bf46e0902c1bcfc1f\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "  HTTP/1.1 200 ok\n{\n          \"status\": true,\n          \"result\": \"user updated successfully\"\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "authorization not informed:",
          "content": "HTTP/1.1 500 internal error\n\n{\n    \"status\": false,\n    \"result\": \"token wasn't informed in requesting headers\"\n}",
          "type": "json"
        },
        {
          "title": "incorrect json object:",
          "content": "HTTP/1.1 500 internal error\n    {\n    \"status\": false,\n    \"result\": {\n        \"errors\": {\n            \"phone_number\": {\n                \"message\": \"Path `phone_number` is required.\",\n                \"name\": \"ValidatorError\",\n                \"properties\": {\n                    \"message\": \"Path `phone_number` is required.\",\n                    \"type\": \"required\",\n                    \"path\": \"phone_number\"\n                },\n                \"kind\": \"required\",\n                \"path\": \"phone_number\"\n            },\n            \"full_name\": {\n                \"message\": \"Path `full_name` is required.\",\n                \"name\": \"ValidatorError\",\n                \"properties\": {\n                    \"message\": \"Path `full_name` is required.\",\n                    \"type\": \"required\",\n                    \"path\": \"full_name\"\n                },\n                \"kind\": \"required\",\n                \"path\": \"full_name\"\n            }\n        },\n        \"_message\": \"User validation failed\",\n        \"message\": \"User validation failed: phone_number: Path `phone_number` is required., full_name: Path `full_name` is required.\",\n        \"name\": \"ValidationError\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "incorrect :id param:",
          "content": "HTTP/1.1 500 internal error\n\n       {\n    \"status\": false,\n    \"result\": \"5ea8d04b2e3251s7f07aa35d7 is empty or is not a valid objectid param\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/user.ts",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/api/v1/wallet",
    "title": "add wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>jwt header needed to verify permission to access this endpoint</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "authorization-header-example:",
          "content": "{\n  \"authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04\"\n}",
          "type": "string"
        }
      ]
    },
    "name": "add_wallet",
    "group": "wallet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "currency",
            "description": "<p>wallet (not required; default: R$)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "available",
            "description": "<p>available amount of money</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "invested",
            "description": "<p>invested money number</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "profit",
            "description": "<p>profit</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "total_amount",
            "description": "<p>total amount of money</p>"
          },
          {
            "group": "Parameter",
            "type": "userId",
            "optional": false,
            "field": "userId",
            "description": "<p>user object id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "body request example:",
          "content": "   {\n   \"available\": 1250.54,\n   \"invested\": 0,\n   \"profit\": 0,\n   \"total_amount\": 0,\n   \"userId\":\"5eb0aac09e644c003f526aca\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "    HTTP/1.1 200 ok\n{\n  \"status\": true,\n     \"result\": \"wallet successfully added\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "authorization not informed:",
          "content": "HTTP/1.1 500 internal error\n\n        {\n            \"status\": false,\n            \"result\": \"token wasn't informed in requesting headers\"\n        }",
          "type": "json"
        },
        {
          "title": "incorrect json object:",
          "content": "HTTP/1.1 500 internal error\n    {\n    \"status\": false,\n    \"result\": {\n        \"errors\": {\n            \"available\": {\n                \"message\": \"Path `available` is required.\",\n                \"name\": \"ValidatorError\",\n                \"properties\": {\n                    \"message\": \"Path `available` is required.\",\n                    \"type\": \"required\",\n                    \"path\": \"available\"\n                },\n                \"kind\": \"required\",\n                \"path\": \"available\"\n            },\n        },\n        \"_message\": \"wallet validation failed\",\n        \"message\": \"wallet validation failed: available: Path `available` is required., available: Path `available` is required.\",\n        \"name\": \"ValidationError\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/wallet.ts",
    "groupTitle": "wallet"
  },
  {
    "type": "delete",
    "url": "/api/v1/wallet/:id",
    "title": "delete wallet by id",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>jwt header needed to verify permission to access this endpoint</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "authorization-header-example:",
          "content": "{\n  \"authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04\"\n}",
          "type": "string"
        }
      ]
    },
    "name": "delete_wallet_by_wallet_id",
    "group": "wallet",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "    HTTP/1.1 200 ok\n {\n    \"status\": true,\n    \"result\": \"wallet deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "authorization not informed:",
          "content": "HTTP/1.1 500 internal error\n\n        {\n            \"status\": false,\n            \"result\": \"token wasn't informed in requesting headers\"\n        }",
          "type": "json"
        },
        {
          "title": "incorrect :id param:",
          "content": "HTTP/1.1 500 internal error\n\n       {\n    \"status\": false,\n    \"result\": \"5ea8d04b2e3251s7f07aa35d7 is empty or is not a valid objectid param\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/wallet.ts",
    "groupTitle": "wallet"
  },
  {
    "type": "get",
    "url": "/api/v1/wallet",
    "title": "fetch all wallets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>jwt header needed to verify permission to access this endpoint</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "authorization-header-example:",
          "content": "{\n  \"authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04\"\n}",
          "type": "string"
        }
      ]
    },
    "name": "fetch_all",
    "group": "wallet",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "    HTTP/1.1 200 ok\n  {\n    \"status\": true,\n    \"result\": [\n        {\n            \"currency\": \"R$\",\n            \"available\": 1250.54,\n            \"invested\": 0,\n            \"profit\": 0,\n            \"total_amount\": 0,\n            \"_id\": \"5eb0b0b7d6f21b01b9009a5b\",\n            \"user\": {\n                \"activated\": true,\n                \"_id\": \"5eb0aac09e644c003f526aca\",\n                \"full_name\": \"investidor\",\n                \"phone_number\": \"00 00000-00001\",\n                \"email\": \"investidor@teste\",\n                \"birth_day\": \"11-11-2021\",\n                \"password\": \"test\",\n                \"gender\": \"m\",\n                \"access_level\": \"5eb0aaad9e644c003f526ac7\",\n                \"created_on\": \"2020-05-04T23:52:32.858Z\"\n            },\n            \"created_on\": \"2020-05-05T00:17:59.652Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "authorization not informed:",
          "content": "HTTP/1.1 500 internal error\n\n        {\n            \"status\": false,\n            \"result\": \"token wasn't informed in requesting headers\"\n        }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/wallet.ts",
    "groupTitle": "wallet"
  },
  {
    "type": "get",
    "url": "/api/v1/wallet/:id",
    "title": "fetch wallet by id",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>jwt header needed to verify permission to access this endpoint</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "authorization-header-example:",
          "content": "{\n  \"authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04\"\n}",
          "type": "string"
        }
      ]
    },
    "name": "fetch_wallet_by_wallet_id",
    "group": "wallet",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "    HTTP/1.1 200 ok\n {\n    \"status\": true,\n    \"result\": {\n        \"currency\": \"R$\",\n        \"available\": 1250.54,\n        \"invested\": 0,\n        \"profit\": 0,\n        \"total_amount\": 0,\n        \"_id\": \"5eb0b0b7d6f21b01b9009a5b\",\n        \"user\": {\n            \"activated\": true,\n            \"_id\": \"5eb0aac09e644c003f526aca\",\n            \"full_name\": \"investidor\",\n            \"phone_number\": \"00 00000-00001\",\n            \"email\": \"investidor@teste\",\n            \"birth_day\": \"11-11-2021\",\n            \"password\": \"test\",\n            \"gender\": \"m\",\n            \"access_level\": \"5eb0aaad9e644c003f526ac7\",\n            \"created_on\": \"2020-05-04T23:52:32.858Z\"\n        },\n        \"created_on\": \"2020-05-05T00:17:59.652Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "authorization not informed:",
          "content": "HTTP/1.1 500 internal error\n\n        {\n            \"status\": false,\n            \"result\": \"token wasn't informed in requesting headers\"\n        }",
          "type": "json"
        },
        {
          "title": "incorrect :id param:",
          "content": "HTTP/1.1 500 internal error\n\n       {\n    \"status\": false,\n    \"result\": \"5ea8d04b2e3251s7f07aa35d7 is empty or is not a valid objectid param\"\n}",
          "type": "json"
        },
        {
          "title": "wallet not found:",
          "content": "HTTP/1.1 500 internal error\n\n      {\n    \"status\": false,\n    \"result\": \"wallet not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/wallet.ts",
    "groupTitle": "wallet"
  },
  {
    "type": "put",
    "url": "/api/v1/wallet/:id",
    "title": "update wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authorization",
            "description": "<p>jwt header needed to verify permission to access this endpoint</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "authorization-header-example:",
          "content": "{\n  \"authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNywibG9naW4iOiJjbGllbnRlIiwicGFzc3dvcmQiOiJhZG0iLCJlbWFpbCI6ImFkbUBhZG0iLCJjcmVhdGVkX29uIjoiMjAxOS0xMi0wOFQxODoyMzozNy41NDZaIiwiZnVsbF9uYW1lIjoiYWRtIHRlc3RlIiwiY3BmIjoiMjAwMDAwMDAwMDAiLCJyZyI6IjEwMDAwMDAiLCJvY2N1cGF0aW9uIjoib2N1cGHDp8OjbyBuw6NvIGluZm9ybWFkYSIsInBob25lIjoiMDAgMDAwMDAgMDAwMDAiLCJiaXJ0aF9kYXRlIjoiMjAxOS0xMi0wOFQwNDowMDowMC4wMDBaIiwiYWN0aXZhdGVkIjp0cnVlLCJma19hY2Nlc3NfbGV2ZWwiOjMsIm5hbWVfYWNjZXNzX2xldmVsIjoiQ2xpZW50ZSJ9LCJpYXQiOjE1NzU4MjgxNTUsImV4cCI6MTU3NTgzMTc1NX0.OXNnksJ_a9WKR5_TBFwHeI_yM5DkzdkeZmsL24FcG04\"\n}",
          "type": "string"
        }
      ]
    },
    "name": "update_wallet",
    "group": "wallet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "currency",
            "description": "<p>wallet (not required; default: R$)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "available",
            "description": "<p>available amount of money</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "invested",
            "description": "<p>invested money number</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "profit",
            "description": "<p>profit</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "total_amount",
            "description": "<p>total amount of money</p>"
          },
          {
            "group": "Parameter",
            "type": "userId",
            "optional": false,
            "field": "userId",
            "description": "<p>user object id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "body request example:",
          "content": "    {          \n   \"available\": 21321.54,\n   \"invested\": 0,\n   \"profit\": 0,\n   \"total_amount\": 0,\n   \"userId\":\"5eb0aac09e644c003f526aca\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response:",
          "content": "  HTTP/1.1 200 ok\n{\n          \"status\": true,\n          \"result\": \"wallet updated successfully\"\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "jsonobject",
            "optional": false,
            "field": "result",
            "description": "<p>object result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "authorization not informed:",
          "content": "HTTP/1.1 500 internal error\n\n{\n    \"status\": false,\n    \"result\": \"token wasn't informed in requesting headers\"\n}",
          "type": "json"
        },
        {
          "title": "incorrect json object:",
          "content": "HTTP/1.1 500 internal error\n   {\n    \"status\": false,\n    \"result\": {\n        \"errors\": {\n            \"available\": {\n                \"message\": \"Path `available` is required.\",\n                \"name\": \"ValidatorError\",\n                \"properties\": {\n                    \"message\": \"Path `available` is required.\",\n                    \"type\": \"required\",\n                    \"path\": \"available\"\n                },\n                \"kind\": \"required\",\n                \"path\": \"available\"\n            },\n        },\n        \"_message\": \"wallet validation failed\",\n        \"message\": \"wallet validation failed: available: Path `available` is required., available: Path `available` is required.\",\n        \"name\": \"ValidationError\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "incorrect :id param:",
          "content": "HTTP/1.1 500 internal error\n\n       {\n    \"status\": false,\n    \"result\": \"5ea8d04b2e3251s7f07aa35d7 is empty or is not a valid objectid param\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ts/config/documentation/wallet.ts",
    "groupTitle": "wallet"
  }
] });
