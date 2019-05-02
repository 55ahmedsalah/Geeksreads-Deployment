define({ "api": [
  {
    "type": "GET",
    "url": "/api/books/author",
    "title": "Find book by title, authorID, or ISBN.",
    "version": "0.0.0",
    "name": "FindBooks",
    "group": "Author",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search_param",
            "description": "<p>authorid or title or isbn</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "BookId",
            "description": "<p>Book-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Title",
            "description": "<p>Book-Title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AuthorId",
            "description": "<p>Author-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ISBN",
            "description": "<p>Book-ISBN.</p>"
          },
          {
            "group": "Success 200",
            "type": "DatePicker",
            "optional": false,
            "field": "Published",
            "description": "<p>Date when book was published.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Publisher",
            "description": "<p>The name of the book's publisher.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Pages",
            "description": "<p>Number of book pages.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Small breifing about the book's contents.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cover",
            "description": "<p>Link that holds the book's cover picture.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "Store",
            "description": "<p>Links for webpages that store the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "Select",
            "optional": false,
            "field": "ReadStatus",
            "description": "<p>Read, Currently Reading, or Want to Read.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BookRating",
            "description": "<p>Rating for the book.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"BookId\":\"5c911452bbfd1717b8a7a169\",\n  \"Title\":\"sit\",\n  \"AuthorId\":\"5c911452a48b42bb84bc785c\",\n  \"ISBN\":\"5c911452ce18b2b3276d4b45\",\n  \"Published\":\"2001-05-08 \",\n  \"Publisher\":\"COREPAN\",\n  \"Pages\":226.0,\n  \"Description\":\"Ad officia duis enim occaecat ullamco aliqua sint mollit non ea et ea aliqua ea. Reprehenderit eu ut in elit ex eu. Excepteur Lorem est ad amet sunt.\\r\\n\",\n  \"Cover\":\"http://placehold.it/32x32\",\n  \"Store\":[\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\"],\n  \"ReadStatus\":\"Read\",\n  \"BookRating\":5.0,\n  \"Genre\":\"Horror\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Book-not-found",
            "description": "<p>The <code>Book</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Author-not-found",
            "description": "<p>The <code>Author</code> was not found.</p>"
          }
        ]
      }
    },
    "filename": "./Books.js",
    "groupTitle": "Author"
  },
  {
    "type": "GET",
    "url": "/api/authors/name",
    "title": "Find an author by name",
    "name": "Find_author_by_name",
    "group": "Author",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "name-not-found",
            "description": "<p>Author could not be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n\"success\": false,\n\"Message\":\"Author  not  found !\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth_name",
            "description": "<p>Author Name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Author",
            "description": "<p>data for the required Author</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n\n {\n        \"_id\" : ObjectId(\"5c9284d5e0a57a14e749981a\"),\n        \"BookId\" : [\n                \"5c91157331557ebe471e0a12\"\n        ],\n        \"AuthorId\" : \"5c91157301d63f812a141932\",\n        \"AuthorName\" : \"Alberta Bean\",\n        \"Photo\" : \"http://placehold.it/32x32\",\n        \"FollowingUserId\" : [\n                \"5c9132dd99a8a3609cca3406\",\n                \"5c91344d99a8a3609cca3406\"\n        ]\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Authors.js",
    "groupTitle": "Author"
  },
  {
    "type": "POST",
    "url": "/api/authors/numbooks",
    "title": "Get Number of Books Written By Author",
    "name": "Get_Number_of_Books_Written_By_Author",
    "group": "Author",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>auth_id</code> was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n\"success\": false,\n\"Message\":\"Author Id not  found !\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Request",
            "description": "<p>Successful or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n   {\n   Number of Books :6\n   }",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth_id",
            "description": "<p>GoodReads User ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Authors.js",
    "groupTitle": "Author"
  },
  {
    "type": "GET",
    "url": "/api/authors/id",
    "title": "Get info about author by id",
    "name": "Get_info_about_author_by_id",
    "group": "Author",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>Author could not be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n\"success\": false,\n\"Message\":\"Author  not  found !\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth_id",
            "description": "<p>Author ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Author",
            "description": "<p>data for the required Author</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n\n   {\n          \"_id\" : ObjectId(\"5c9284d5e0a57a14e749981a\"),\n          \"BookId\" : [\n                  \"5c91157331557ebe471e0a12\"\n          ],\n          \"AuthorId\" : \"5c91157301d63f812a141932\",\n          \"AuthorName\" : \"Alberta Bean\",\n          \"Photo\" : \"http://placehold.it/32x32\",\n          \"FollowingUserId\" : [\n                  \"5c9132dd99a8a3609cca3406\",\n                  \"5c91344d99a8a3609cca3406\"\n          ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Authors.js",
    "groupTitle": "Author"
  },
  {
    "type": "POST",
    "url": "/api/authors/isfollowed",
    "title": "Show author following information",
    "name": "Show_author_following_information",
    "group": "Author",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>user_id</code> was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n\"success\": false,\n\"Message\":\"User Id not  found !\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Request",
            "description": "<p>Successful or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n   {\n   Isfollowed:true\n   }",
          "type": "JSON"
        },
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n   {\n   Isfollowed:false\n   }",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>GoodReads User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth_id",
            "description": "<p>GoodReads Author ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Authors.js",
    "groupTitle": "Author"
  },
  {
    "type": "POST",
    "url": "/api/authors/unfollow",
    "title": "Unfollow an Author",
    "name": "Unfollow_Author",
    "group": "Author",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>myuserId</code> was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": " HTTP/1.1 404 Not Found\n{\n\"success\": false,\n\"Message\":\"Author Id not  found !\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "UNFollow",
            "description": "<p>Successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n     {\n        \"success\": true,\n        \"Message\":\"Successfully done\"\n     }",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "myuserId",
            "description": "<p>GoodReads User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth_id",
            "description": "<p>GoodReads Author ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Authors.js",
    "groupTitle": "Author"
  },
  {
    "type": "POST",
    "url": "/api/authors/follow",
    "title": "follow an Author",
    "name": "follow_Author",
    "group": "Author",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>myuserId</code> was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": " HTTP/1.1 404 Not Found\n{\n\"success\": false,\n\"Message\":\"Author Id not  found !\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "UNFollow",
            "description": "<p>Successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n     {\n        \"success\": true,\n        \"Message\":\"Successfully done\"\n     }",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "myuserId",
            "description": "<p>GoodReads User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth_id",
            "description": "<p>GoodReads Author ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Authors.js",
    "groupTitle": "Author"
  },
  {
    "type": "GET",
    "url": "/api/books/id",
    "title": "Find book by BookId",
    "version": "0.0.0",
    "name": "GetBook",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "book_id",
            "description": "<p>Book ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "BookId",
            "description": "<p>Book-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Title",
            "description": "<p>Book-Title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AuthorId",
            "description": "<p>Author-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ISBN",
            "description": "<p>Book-ISBN.</p>"
          },
          {
            "group": "Success 200",
            "type": "DatePicker",
            "optional": false,
            "field": "Published",
            "description": "<p>Date when book was published.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Publisher",
            "description": "<p>The name of the book's publisher.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Pages",
            "description": "<p>Number of book pages.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Small breifing about the book's contents.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cover",
            "description": "<p>Link that holds the book's cover picture.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "Store",
            "description": "<p>Links for webpages that store the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "Select",
            "optional": false,
            "field": "ReadStatus",
            "description": "<p>Read, Currently Reading, or Want to Read.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BookRating",
            "description": "<p>Rating for the book.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"BookId\":\"5c911452bbfd1717b8a7a169\",\n  \"Title\":\"sit\",\n  \"AuthorId\":\"5c911452a48b42bb84bc785c\",\n  \"ISBN\":\"5c911452ce18b2b3276d4b45\",\n  \"Published\":\"2001-05-08 \",\n  \"Publisher\":\"COREPAN\",\n  \"Pages\":226.0,\n  \"Description\":\"Ad officia duis enim occaecat ullamco aliqua sint mollit non ea et ea aliqua ea. Reprehenderit eu ut in elit ex eu. Excepteur Lorem est ad amet sunt.\\r\\n\",\n  \"Cover\":\"http://placehold.it/32x32\",\n  \"Store\":[\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\"],\n  \"ReadStatus\":\"Read\",\n  \"BookRating\":5.0,\n  \"Genre\":\"Horror\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Book-not-found",
            "description": "<p>The <code>Book</code> was not found.</p>"
          }
        ]
      }
    },
    "filename": "./Books.js",
    "groupTitle": "Books"
  },
  {
    "type": "GET",
    "url": "/api/books/genre",
    "title": "Find all books with the same Genre",
    "version": "0.0.0",
    "name": "GetBooksByGerne",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Genre",
            "description": "<p>the specfic Genre name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "BookId",
            "description": "<p>Book-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Title",
            "description": "<p>Book-Title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AuthorId",
            "description": "<p>Author-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ISBN",
            "description": "<p>Book-ISBN.</p>"
          },
          {
            "group": "Success 200",
            "type": "DatePicker",
            "optional": false,
            "field": "Published",
            "description": "<p>Date when book was published.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Publisher",
            "description": "<p>The name of the book's publisher.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Pages",
            "description": "<p>Number of book pages.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Small breifing about the book's contents.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cover",
            "description": "<p>Link that holds the book's cover picture.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "Store",
            "description": "<p>Links for webpages that store the book.</p>"
          },
          {
            "group": "Success 200",
            "type": "Select",
            "optional": false,
            "field": "ReadStatus",
            "description": "<p>Read, Currently Reading, or Want to Read.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BookRating",
            "description": "<p>Rating for the book.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "    HTTP/1.1 200 OK\n    {\n      \"BookId\":\"5c911452bbfd1717b8a7a169\",\n      \"Title\":\"sit\",\n      \"AuthorId\":\"5c911452a48b42bb84bc785c\",\n      \"ISBN\":\"5c911452ce18b2b3276d4b45\",\n      \"Published\":\"2001-05-08 \",\n      \"Publisher\":\"COREPAN\",\n      \"Pages\":226.0,\n      \"Description\":\"Ad officia duis enim occaecat ullamco aliqua sint mollit non ea et ea aliqua ea. Reprehenderit eu ut in elit ex eu. Excepteur Lorem est ad amet sunt.\\r\\n\",\n      \"Cover\":\"http://placehold.it/32x32\",\n      \"Store\":[\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\"],\n      \"ReadStatus\":\"Read\",\n      \"BookRating\":5.0,\n      \"Genre\":\"Horror\"\n    },\n     {\n      \"BookId\":\"5c9114ddlfd2bbfd1717b8a7a169\",\n      \"Title\":\"ssdst\",\n      \"AuthorId\":\"5c911452a48b42bb84bc785c\",\n      \"ISBN\":\"5c911452ce18b2b3276d4b45\",\n      \"Published\":\"2001-05-08 \",\n      \"Publisher\":\"COREPAN\",\n      \"Pages\":226.0,\n      \"Description\":\"Ad officia duis enim occaecat ullamco aliqua sint mollit non ea et ea aliqua ea. Reprehenderit eu ut in elit ex eu. Excepteur Lorem est ad amet sunt.\\r\\n\",\n      \"Cover\":\"http://placehold.it/32x32\",\n      \"Store\":[\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\",\"http://placehold.it/32x32\"],\n      \"ReadStatus\":\"Read\",\n      \"BookRating\":5.0,\n      \"Genre\":\"Horror\"\n    },\n{\n................\n.............\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "genre-not-found",
            "description": "<p>The <code>genre</code> was not found.</p>"
          }
        ]
      }
    },
    "filename": "./Books.js",
    "groupTitle": "Books"
  },
  {
    "type": "GET",
    "url": "/api/books/reviewbytitle",
    "title": "Get book reviews by title",
    "name": "GetReviewsbyBookId",
    "group": "Books",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "book_title",
            "description": "<p>Book title.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "rating",
            "defaultValue": "0",
            "description": "<p>Limit reviews to a particular rating or above,(default is 0).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>User-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "BookId",
            "description": "<p>Book-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ReviewId",
            "description": "<p>Review-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ReviewBody",
            "description": "<p>The text for the review entered by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "DatePicker",
            "optional": false,
            "field": "ReviewDate",
            "description": "<p>Date where review was entered by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ReviewRating",
            "description": "<p>Rating for the review.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"ReviewId\":\"5c9243a5beb4101160e23fdd\",\n     \"BookId\":\"5c9114a012d11bb226399497\",\n     \"UserId\":\"5c9132dd47cb909f7fbbe875\",\n     \"ReviewRating\":5.0,\n     \"ReviewBody\":\"Mollit tempor consequat magna officia occaecat laborum duis consequat qui sunt ipsum. Commodo cillum voluptate incididunt mollit non non voluptate cillum id magna qui laborum ullamco adipisicing. Dolore consequat fugiat ut Lorem incididunt ea dolore voluptate aliquip. Reprehenderit duis est do ad consequat ad enim pariatur ad Lorem Lorem enim officia exercitation. Magna ea ipsum laborum sint est.\\r\\n\",\n     \"ReviewDate\":\" 2015-12-03T02:44:27 -02:00\"\n     \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Book-Not-Found",
            "description": "<p>The <code>Book</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Books.js",
    "groupTitle": "Books"
  },
  {
    "type": "GET",
    "url": "/api/books/reviewbyisbn",
    "title": "Get book reviews by isbn",
    "name": "GetReviewsbyBookId",
    "group": "Books",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "book_isbn",
            "description": "<p>Book ISBN.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "rating",
            "defaultValue": "0",
            "description": "<p>Limit reviews to a particular rating or above,(default is 0).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>User-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "BookId",
            "description": "<p>Book-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ReviewId",
            "description": "<p>Review-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ReviewBody",
            "description": "<p>The text for the review entered by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "DatePicker",
            "optional": false,
            "field": "ReviewDate",
            "description": "<p>Date where review was entered by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ReviewRating",
            "description": "<p>Rating for the review.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"ReviewId\":\"5c9243a5beb4101160e23fdd\",\n     \"BookId\":\"5c9114a012d11bb226399497\",\n     \"UserId\":\"5c9132dd47cb909f7fbbe875\",\n     \"ReviewRating\":5.0,\n     \"ReviewBody\":\"Mollit tempor consequat magna officia occaecat laborum duis consequat qui sunt ipsum. Commodo cillum voluptate incididunt mollit non non voluptate cillum id magna qui laborum ullamco adipisicing. Dolore consequat fugiat ut Lorem incididunt ea dolore voluptate aliquip. Reprehenderit duis est do ad consequat ad enim pariatur ad Lorem Lorem enim officia exercitation. Magna ea ipsum laborum sint est.\\r\\n\",\n     \"ReviewDate\":\" 2015-12-03T02:44:27 -02:00\"\n     \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Book-Not-Found",
            "description": "<p>The <code>Book</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Books.js",
    "groupTitle": "Books"
  },
  {
    "type": "GET",
    "url": "/api/books/reviewbyid",
    "title": "Get book reviews by id",
    "name": "GetReviewsbyBookId",
    "group": "Books",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "book_id",
            "description": "<p>Book ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "rating",
            "defaultValue": "0",
            "description": "<p>Limit reviews to a particular rating or above,(default is 0).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>User-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "BookId",
            "description": "<p>Book-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ReviewId",
            "description": "<p>Review-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ReviewBody",
            "description": "<p>The text for the review entered by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "DatePicker",
            "optional": false,
            "field": "ReviewDate",
            "description": "<p>Date where review was entered by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ReviewRating",
            "description": "<p>Rating for the review.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"ReviewId\":\"5c9243a5beb4101160e23fdd\",\n     \"BookId\":\"5c9114a012d11bb226399497\",\n     \"UserId\":\"5c9132dd47cb909f7fbbe875\",\n     \"ReviewRating\":5.0,\n     \"ReviewBody\":\"Mollit tempor consequat magna officia occaecat laborum duis consequat qui sunt ipsum. Commodo cillum voluptate incididunt mollit non non voluptate cillum id magna qui laborum ullamco adipisicing. Dolore consequat fugiat ut Lorem incididunt ea dolore voluptate aliquip. Reprehenderit duis est do ad consequat ad enim pariatur ad Lorem Lorem enim officia exercitation. Magna ea ipsum laborum sint est.\\r\\n\",\n     \"ReviewDate\":\" 2015-12-03T02:44:27 -02:00\"\n     \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Book-Not-Found",
            "description": "<p>The <code>Book</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Books.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/api/books/isbn",
    "title": "Get Geeksreads book IDs given ISBNs",
    "name": "IsbntoId",
    "group": "Books",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "isbns",
            "description": "<p>Book-ISBNs.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "ids",
            "description": "<p>Book-IDs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"BookIds\": [5c911452bbfd1717b8a7a169,5c9114526f1439874b7cca1a]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Books-Not-Found",
            "description": "<p>Some or all of the ISBNs entered are not valid.</p>"
          }
        ]
      }
    },
    "filename": "./Books.js",
    "groupTitle": "Books"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_waela_Documents_GitHub_geeksreads_deployment_routes_APIs_with_Doc_doc_main_js",
    "groupTitle": "C__Users_waela_Documents_GitHub_geeksreads_deployment_routes_APIs_with_Doc_doc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "AddedCommentSuc",
            "description": "<p>comment was added successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n\"AddedCommentSuc\": true\n}",
          "type": "json"
        }
      ]
    },
    "type": "POST",
    "url": "/api/comments/add",
    "title": "Create a comment",
    "name": "creatComment",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Body",
            "description": "<p>The body of the comment</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ReviewId",
            "description": "<p>Id of resource given as type Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "BookId",
            "description": "<p>Id of resource given as type Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of user who wrote the comment</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Photo",
            "description": "<p>photo of user url</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "LikesCount",
            "description": "<p>likescount</p>"
          },
          {
            "group": "Parameter",
            "type": "datePicker",
            "optional": false,
            "field": "date",
            "description": "<p>the date the comment was written on</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmptyComment",
            "description": "<p>Must Have At Least <code>1</code> Character In Comment</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./commentsController.js",
    "groupTitle": "Comments"
  },
  {
    "type": "GET",
    "url": "/api/comments/list",
    "title": "List comments on a subject",
    "name": "listCommentsOnSubject",
    "group": "Comments",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>no comments on this subject</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "likes",
            "description": "<p>number of likes on each comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>body text of each comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>name of the user who wrote each comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of the user who wrote each comment</p>"
          },
          {
            "group": "Success 200",
            "type": "datePicker",
            "optional": false,
            "field": "date",
            "description": "<p>the date of each comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n\"comment\":[\n        {\"likes\": 11,\n          \"body\": \"Hello World !\",\n          \"userName\": \"zzzdwsdsdsdsd zzzdwsdsdsdsd\",\n          \"userId\": \"567890987654567890\",\n          \"date\": \"2019-01-02T09:00:16.204Z\"\n        },......\n]\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ReviewId",
            "description": "<p>the review id commented on</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./commentsController.js",
    "groupTitle": "Comments"
  },
  {
    "type": "Post",
    "url": "/api/resources/like",
    "title": "Like a resource",
    "name": "PutLike",
    "group": "Resources",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Resource could not be found</p>"
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
            "field": "resourceId",
            "description": "<p>Id of the resource being liked( the comment or the review)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Type",
            "description": "<p>must be (Review,Comment) Naming system is important</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolen",
            "optional": false,
            "field": "Liked",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n     {\n         \"Liked\": true\n     }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Resources.js",
    "groupTitle": "Resources"
  },
  {
    "type": "POST",
    "url": "/api/resources/unlike",
    "title": "Unlike a resource",
    "name": "PutUnlike",
    "group": "Resources",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Resource could not be found</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "resourceId",
            "description": "<p>Id of the resource being liked.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Type",
            "description": "<p>must be (Review,Comment) Naming system is important</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token of user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n     {\n         Unliked\n     }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Resources.js",
    "groupTitle": "Resources"
  },
  {
    "type": "POST",
    "url": "/api/reviews/add",
    "title": "Add new review on a book",
    "name": "addNewReviewOnBook",
    "group": "Reviews",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Bad",
            "description": "<p>request</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "AddedReviewSuc",
            "description": "<p>the review was added succesfuly</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{ \n\"AddedReviewSuc\": true \n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reviewBody",
            "description": "<p>body of the review written on the book</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "reviewDate",
            "description": "<p>the date the review where written at the date is in iso format</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "bookId",
            "description": "<p>the id of the book reviewed by the user</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./reviewsController.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "POST",
    "url": "/api/reviews/editRevById",
    "title": "edit a review on a book using the reviewId",
    "name": "editRevById",
    "group": "Reviews",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "not",
            "description": "<p>found</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "UpdatedReviewSucthe",
            "description": "<p>review edited succesfuly</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{ \n\"UpdatedReviewSuc\": true \n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "reviewId",
            "description": "<p>the id of the book reviewed by the user</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "reviewBody",
            "description": "<p>the new body of the review</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./reviewsController.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "GET",
    "url": "/api/reviews/getrev",
    "title": "get Reviews on a book By BookId",
    "name": "getrevbybookid",
    "group": "Reviews",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Bad",
            "description": "<p>request</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "not",
            "description": "<p>found</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>the review id</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "reviewId",
            "description": "<p>the review id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>the rating of the book by the review writer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviewBody",
            "description": "<p>the body of the review</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviewDate",
            "description": "<p>the date the review was written</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "bookId",
            "description": "<p>the id of the book rated by the user</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of the user rating the book</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>the name of the user who wrote the review</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "LikesCount",
            "description": "<p>the number of likes on this review</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "Liked",
            "description": "<p>is the comment liked or not by the current user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[",
          "content": "[\n[{_id : \"5c9620083a3c692cd445a32a\",\nreviewId : \"5c9620083a3c692cd445a32a\",\nrating : 3,\nreviewDate : 2008-09-15 ,\nreviewBody: \"Hello World !!\",\nbookId :\"5c9620083a3c692cd445a32a\",\nuserId:\"5c9620083a3c692cd445a32a\" ,\nuserName:\"saad\" ,\nLikesCount : 2 }, true ],......\n]",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "UserId",
            "description": "<p>the id of the book rated by the user</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "bookId",
            "description": "<p>the id of the user rating the book</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./reviewsController.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "POST",
    "url": "/api/reviews/rate",
    "title": "rate a book using the bookId",
    "name": "rate",
    "group": "Reviews",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Bad",
            "description": "<p>request</p>"
          },
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "not",
            "description": "<p>found</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "deleteReviewSuc",
            "description": "<p>the review deleted succesfuly</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Updated Succesfuly",
          "content": "Updated Succesfuly",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "bookId",
            "description": "<p>the id of the book rated by the user</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of the user rating the book</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>the rating of the book by the user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./reviewsController.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "POST",
    "url": "/api/reviews/remove",
    "title": "remove and review on a book using the reviewId",
    "name": "removeRevById",
    "group": "Reviews",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Bad",
            "description": "<p>request</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "deleteReviewSuc",
            "description": "<p>the review deleted succesfuly</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{ \n\"deleteReviewSuc\": true \n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "reviewId",
            "description": "<p>the id of the book reviewed by the user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./reviewsController.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "GET",
    "url": "/api/search/",
    "title": "search for books by author or by title or isbn",
    "name": "Search",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search_param",
            "description": "<p>search parameter text</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Search.js",
    "groupTitle": "Search"
  },
  {
    "type": "POST",
    "url": "api/users/AddToShelf",
    "title": "Add a Book to a Shelf",
    "name": "AddToShelf",
    "group": "Shelves",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ShelfType",
            "description": "<p>Shelf Type to add book to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BookId",
            "description": "<p>Book id to add to shelf.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Notifies User that the Book was added successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"ReturnMsg\": \"Book was added successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoShelf-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":\"Invalid Shelf\"\n}",
          "type": "json"
        },
        {
          "title": "NoBook-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":\"Book Doesn't Exist.\"\n}",
          "type": "json"
        },
        {
          "title": "BookExist-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"Book Already in Shelf.\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "POST",
    "url": "/api/users/GetUserReadDetails",
    "title": "Get User Read shelf Details",
    "name": "GetUserReadDetails",
    "group": "Shelves",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>User to get his Read Shelf Data</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "ReadData",
            "description": "<p>Gives the User the Book Data of His Read.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n\"ReadData\": [\n   {\n       \"BookId\": \"5c9114526f1439874b7cca1a\",\n       \"Title\": \"consequat\",\n       \"AuthorId\": \"5c911452938ffea87b4672d7\",\n       \"BookRating\": {\n           \"$numberDecimal\": \"2.0\"\n       },\n       \"Cover\": \"http://placehold.it/32x32\",\n       \"Pages\": 340,\n       \"Published\": \"2007-01-29T22:00:00.000Z\"\n   },\n   {\n       \"BookId\": \"5c911452bbfd1717b8a7a169\",\n       \"Title\": \"sit\",\n       \"AuthorId\": \"5c911452a48b42bb84bc785c\",\n       \"BookRating\": {\n           \"$numberDecimal\": \"5.0\"\n       },\n       \"Cover\": \"http://placehold.it/32x32\",\n       \"Pages\": 226,\n       \"Published\": \"2001-05-03T22:00:00.000Z\"\n   },\n   {\n       \"BookId\": \"5c9114a012d11bb226399497\",\n       \"Title\": \"do\",\n       \"AuthorId\": \"5c911452a48b42bb84bc785c\",\n       \"BookRating\": {\n           \"$numberDecimal\": \"1.0\"\n       },\n       \"Cover\": \"http://placehold.it/32x32\",\n       \"Pages\": 299,\n       \"Published\": \"2004-01-10T22:00:00.000Z\"\n   },\n   {\n       \"BookId\": \"5c9114a01c049771a04cbce4\",\n       \"Title\": \"culpa\",\n       \"AuthorId\": \"5c911452a48b42bb84bc785c\",\n       \"BookRating\": {\n           \"$numberDecimal\": \"3.0\"\n       },\n       \"Cover\": \"http://placehold.it/32x32\",\n       \"Pages\": 148,\n       \"Published\": \"2018-12-16T22:00:00.000Z\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoUser-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"User Doesn't Exist\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "Post",
    "url": "/api/users/GetBookReadStatus",
    "title": "Gets information about a book's read Status",
    "name": "GetUserReadStatus",
    "group": "Shelves",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BookId",
            "description": "<p>The Book Id To Get Status for.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Book Status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"ReturnMsg\":\"Read\"\n}",
          "type": "json"
        },
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"ReturnMsg\":\"Currently Reading\"\n}",
          "type": "json"
        },
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"ReturnMsg\":\"Want to Read\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoBook-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"Invalid Book Id\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenMatch-Response:",
          "content": "  HTTP/1.1 400\n{\n \"ReturnMsg\":\"User Doesn't Exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "GET",
    "url": "/api/users/GetUserReadingDetails",
    "title": "Get User Reading shelf Details",
    "name": "GetUserReadingDetails",
    "group": "Shelves",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>User to get his Shelf Details</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "ReadingData",
            "description": "<p>Gives the User the Book Data of His Reading.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n\"ReadingData\": [\n   {\n       \"BookId\": \"5c9114526f1439874b7cca1a\",\n       \"Title\": \"consequat\",\n       \"AuthorId\": \"5c911452938ffea87b4672d7\",\n       \"BookRating\": {\n           \"$numberDecimal\": \"2.0\"\n       },\n       \"Cover\": \"http://placehold.it/32x32\",\n       \"Pages\": 340,\n       \"Published\": \"2007-01-29T22:00:00.000Z\"\n   },\n   {\n       \"BookId\": \"5c911452bbfd1717b8a7a169\",\n       \"Title\": \"sit\",\n       \"AuthorId\": \"5c911452a48b42bb84bc785c\",\n       \"BookRating\": {\n           \"$numberDecimal\": \"5.0\"\n       },\n       \"Cover\": \"http://placehold.it/32x32\",\n       \"Pages\": 226,\n       \"Published\": \"2001-05-03T22:00:00.000Z\"\n   },\n   {\n       \"BookId\": \"5c9114a012d11bb226399497\",\n       \"Title\": \"do\",\n       \"AuthorId\": \"5c911452a48b42bb84bc785c\",\n       \"BookRating\": {\n           \"$numberDecimal\": \"1.0\"\n       },\n       \"Cover\": \"http://placehold.it/32x32\",\n       \"Pages\": 299,\n       \"Published\": \"2004-01-10T22:00:00.000Z\"\n   },\n   {\n       \"BookId\": \"5c9114a01c049771a04cbce4\",\n       \"Title\": \"culpa\",\n       \"AuthorId\": \"5c911452a48b42bb84bc785c\",\n       \"BookRating\": {\n           \"$numberDecimal\": \"3.0\"\n       },\n       \"Cover\": \"http://placehold.it/32x32\",\n       \"Pages\": 148,\n       \"Published\": \"2018-12-16T22:00:00.000Z\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoUser-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"User Doesn't Exist\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "GET",
    "url": "/api/users/GetUserShelves",
    "title": "Gets All User's Shelves",
    "name": "GetUserShelves",
    "group": "Shelves",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "Read",
            "description": "<p>Gives the User the Book Ids of His Read.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "NoOfRead",
            "description": "<p>Gives the User the Number of Book Ids of His Read.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "WantToRead",
            "description": "<p>Gives the User the Book Ids of His Want to Read.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "NoOfWantToRead",
            "description": "<p>Gives the User the Number of Book Ids of His Want to Read.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "Reading",
            "description": "<p>Gives the User the Book Ids of His Currently Reading.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "NoOfReading",
            "description": "<p>Gives the User the Number of Book Ids of His Currently Reading.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"Read\": [\n                     \"Book1\",\n                     \"Book2\",\n                     \"Book3\"\n                ],\n  \"NoOfRead\": 3,\n  \"Reading\": [\n                     \"Book4\",\n                     \"Book5\",\n                     \"Book6\"\n                ],\n  \"NoOfReading\": 3,\n  \"WantToRead\": [\n                     \"Book7\",\n                     \"Book8\",\n                     \"Book9\"\n                ],\n  \"NoOfWantToRead\": 3\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoShelvesExist-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"User has No Shelves\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "GET",
    "url": "/api/users/GetUserShelvesDetails",
    "title": "Gets All User's Shelves Details",
    "name": "GetUserShelvesDetails",
    "group": "Shelves",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "ReadData",
            "description": "<p>Gives the User the Book Data of His Read.</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "WantToReadData",
            "description": "<p>Gives the User the Book Data of His Want to Read.</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "Reading",
            "description": "<p>Gives the User the Book Data of His Currently Reading.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n\"ReadData\": [\n   {\n       \"BookId\": \"5c9114526f1439874b7cca1a\",\n       \"Title\": \"consequat\",\n       \"AuthorId\": \"5c911452938ffea87b4672d7\",\n       \"BookRating\": {\n           \"$numberDecimal\": \"2.0\"\n       },\n       \"Cover\": \"http://placehold.it/32x32\",\n       \"Pages\": 340,\n       \"Published\": \"2007-01-29T22:00:00.000Z\"\n   },\n   {\n       \"BookId\": \"5c911452bbfd1717b8a7a169\",\n       \"Title\": \"sit\",\n       \"AuthorId\": \"5c911452a48b42bb84bc785c\",\n       \"BookRating\": {\n           \"$numberDecimal\": \"5.0\"\n       },\n       \"Cover\": \"http://placehold.it/32x32\",\n       \"Pages\": 226,\n       \"Published\": \"2001-05-03T22:00:00.000Z\"\n   },\n   {\n       \"BookId\": \"5c9114a012d11bb226399497\",\n       \"Title\": \"do\",\n       \"AuthorId\": \"5c911452a48b42bb84bc785c\",\n       \"BookRating\": {\n           \"$numberDecimal\": \"1.0\"\n       },\n       \"Cover\": \"http://placehold.it/32x32\",\n       \"Pages\": 299,\n       \"Published\": \"2004-01-10T22:00:00.000Z\"\n   },\n   {\n       \"BookId\": \"5c9114a01c049771a04cbce4\",\n       \"Title\": \"culpa\",\n       \"AuthorId\": \"5c911452a48b42bb84bc785c\",\n       \"BookRating\": {\n           \"$numberDecimal\": \"3.0\"\n       },\n       \"Cover\": \"http://placehold.it/32x32\",\n       \"Pages\": 148,\n       \"Published\": \"2018-12-16T22:00:00.000Z\"\n   }\n ],\n\"ReadingData\": [],\n\"WantToReadData\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoShelvesExist-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"User has No Shelves\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "GET",
    "url": "/api/users/GetUserWantToReadDetails",
    "title": "Get User WantToRead shelf Details",
    "name": "GetUserWantToReadDetails",
    "group": "Shelves",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>User to get his Shelf Details</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "ReadingData",
            "description": "<p>Gives the User the Book Data of His WantToRead.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n\"WantToReadData\": [\n   {\n       \"BookId\": \"5c9114526f1439874b7cca1a\",\n       \"Title\": \"consequat\",\n       \"AuthorId\": \"5c911452938ffea87b4672d7\",\n       \"BookRating\": {\n           \"$numberDecimal\": \"2.0\"\n       },\n       \"Cover\": \"http://placehold.it/32x32\",\n       \"Pages\": 340,\n       \"Published\": \"2007-01-29T22:00:00.000Z\"\n   },\n   {\n       \"BookId\": \"5c911452bbfd1717b8a7a169\",\n       \"Title\": \"sit\",\n       \"AuthorId\": \"5c911452a48b42bb84bc785c\",\n       \"BookRating\": {\n           \"$numberDecimal\": \"5.0\"\n       },\n       \"Cover\": \"http://placehold.it/32x32\",\n       \"Pages\": 226,\n       \"Published\": \"2001-05-03T22:00:00.000Z\"\n   },\n   {\n       \"BookId\": \"5c9114a012d11bb226399497\",\n       \"Title\": \"do\",\n       \"AuthorId\": \"5c911452a48b42bb84bc785c\",\n       \"BookRating\": {\n           \"$numberDecimal\": \"1.0\"\n       },\n       \"Cover\": \"http://placehold.it/32x32\",\n       \"Pages\": 299,\n       \"Published\": \"2004-01-10T22:00:00.000Z\"\n   },\n   {\n       \"BookId\": \"5c9114a01c049771a04cbce4\",\n       \"Title\": \"culpa\",\n       \"AuthorId\": \"5c911452a48b42bb84bc785c\",\n       \"BookRating\": {\n           \"$numberDecimal\": \"3.0\"\n       },\n       \"Cover\": \"http://placehold.it/32x32\",\n       \"Pages\": 148,\n       \"Published\": \"2018-12-16T22:00:00.000Z\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoShelvesExist-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"User has No Shelves\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "POST",
    "url": "/api/users/RemoveFromShelf",
    "title": "Removes a Books From User Shelves",
    "name": "RemoveFromShelf",
    "group": "Shelves",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BookId",
            "description": "<p>The Book Id To Remove.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Notifies is Successfully Removed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"ReturnMsg\":\"Book Removed\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "WrongBookId-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"Book Does't Exist\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "GET",
    "url": "/api/users/ShelvesCount",
    "title": "Number of Read Books",
    "name": "ShelvesCount",
    "group": "Shelves",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "NoOfRead",
            "description": "<p>Gives the User the Number of Book Ids of His Read.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"NoOfRead\": 3\n  \"NoOfReading\": 3,\n  \"NoOfWantToRead\": 3\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoShelvesExist-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"User has No Shelves\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "POST",
    "url": "/api/users/UpdateReadingToRead",
    "title": "Updates Book Status From Reading to Read",
    "name": "UpdateReadingToRead",
    "group": "Shelves",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BookId",
            "description": "<p>The Book Id To Update.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Notifies is Successfully updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"ReturnMsg\":\"Book Status Updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "WrongBookId-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"Book Does't Exist\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "POST",
    "url": "/api/users/UpdateWantToReading",
    "title": "Updates Book Status From Want to Read to Reading",
    "name": "UpdateWantToReading",
    "group": "Shelves",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BookId",
            "description": "<p>The Book Id To Update.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Notifies is Successfully updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"ReturnMsg\":\"Book Status Updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "WrongBookId-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"Book Does't Exist\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "Post",
    "url": "/api/user_status/delete",
    "title": "Delete User Status",
    "version": "0.0.0",
    "name": "DeleteStatus",
    "group": "Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "StatusId",
            "description": "<p>Status id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolen",
            "optional": false,
            "field": "DeleteStatusSuc",
            "description": "<p>if the delete happend successfully or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Expected Data on Success",
          "content": "{\n\"DeleteSTatusSuc\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Status-Not-Found",
            "description": "<p>The <code>StatusID</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Statuses.js",
    "groupTitle": "Status"
  },
  {
    "type": "Get",
    "url": "/api/user_status/show",
    "title": "Get User Status",
    "version": "0.0.0",
    "name": "GetUserStatuses",
    "group": "Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "StatusType",
            "description": "<p>Wheather  it is Comment or Review or Rate</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "StatusId",
            "description": "<p>status id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>User id the user who is to see the status</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "CommentId",
            "description": "<p>comment id if the type is comment <code>(optional)</code></p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "CommentBody",
            "description": "<p>Comment the comment body</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "CommentDate",
            "description": "<p>The date of the comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CommentLikesCount",
            "description": "<p>number of people liked this comment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "BookId",
            "description": "<p>the Id of the book rated or reviewed</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "BookName",
            "description": "<p>the name (title) of the book rated or reviewed</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "BookPhoto",
            "description": "<p>the URL of the cover Photo of the book rated or revied</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "NumberOfStars",
            "description": "<p>the number of stars in case of rating a book</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ReviewId",
            "description": "<p>review Id  alawys exisit weather the type is comment or review</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ReviewBody",
            "description": "<p>Review Body in case of comment on review or reviews a book</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "ReviewDate",
            "description": "<p>the date of the review</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ReviewLikesCount",
            "description": "<p>numbr of the people who liked the the review</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MakerId",
            "description": "<p>the id of the user who made the status( Commented or rated or reviewd)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MakerPhoto",
            "description": "<p>the URL of the Photo of the User who did the thing ( Commented or rated or reviewd)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MakerName",
            "description": "<p>the Name of the User Who made the status ( Commented or rated or reviewd)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Expected Data on Success",
          "content": "{\n\n StatusType : Review\n\"StatusId\" : \"82978363763\"\n\"MakerId\" : \"shjfhghdsg\"\n\"UserId\" : \"82sdfd8363763\"\n\"ReviewId\" : \"82gf8363763\"\n\"ReviewLikesCount\": 11,\n          \"body\": \"Hello World !\",\n          \n\n},\n{\n\ntype : Comment\nCommentId : \"hisadsfjhdld\"\nStatusId : \"82978363763\"\nMakerId : \"shjfhghdsg\"\nUserId : \"82sdfd8363763\"\nReviewId : \"82gf8363763\"\n.......\n},.....",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NotFound statuses:",
          "content": "   HTTP/1.1 400\n{\n  \"ReturnMsg\":\"No statuses were found\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User-Not-Found",
            "description": "<p>The <code>User</code> was not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Status-Not-Found",
            "description": "<p>The <code>Status</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Statuses.js",
    "groupTitle": "Status"
  },
  {
    "type": "Post",
    "url": "/api/user_status/update",
    "title": "Update user status",
    "version": "0.0.0",
    "name": "UpdateUserStatuses",
    "group": "Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "StatusID",
            "description": "<p>status id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "StatusBody",
            "description": "<p>the body of this status</p>"
          },
          {
            "group": "Parameter",
            "type": "datePicker",
            "optional": false,
            "field": "StatusDate",
            "description": "<p>the date when the status was written</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "CommentId",
            "description": "<p>comment id <code>(optional)</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ReviewId",
            "description": "<p><code>(optional)</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolen",
            "optional": false,
            "field": "UpdateSucc",
            "description": "<p>if the update happend successfully or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Expected Data on Success",
          "content": "{\n \"UpdateSucc\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User-Not-Found",
            "description": "<p>The <code>User</code> was not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Status-Not-Found",
            "description": "<p>The <code>Status</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Statuses.js",
    "groupTitle": "Status"
  },
  {
    "type": "POST",
    "url": "api/users/ChangeForgotPassword",
    "title": "Change Forgotten Password From Email token",
    "name": "ChangeForgotPassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token from mail sent to change password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "NewUserPassword",
            "description": "<p>New Password to replace forgotten password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Notifies the User that his password is changed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n{\n  \"ReturnMsg\": \"Update Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "InvalidNewPassword-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\": \"\\\"NewUserPassword\\\" length must be at least 6 characters long\"\n}",
          "type": "json"
        },
        {
          "title": "NonExistingEmail-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\":\"User Doesn't Exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/api/users/verify",
    "title": "Verifies User From Email",
    "name": "EmailVerify",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Notifies that User is Confirmed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n{\n  \"ReturnMsg\": \"User Confirmed\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoTokenMatch-Response:",
          "content": "  HTTP/1.1 400\n{\n \"ReturnMsg\":\"User Doesn't Exist\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/users/follow",
    "title": "Follow a user",
    "name": "Follow_user",
    "group": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>userId_tobefollowed</code> was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n\"success\": false,\n\"Message\":\"User Id not  found !\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Follow",
            "description": "<p>Successful or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n   {\n      \"success\": true,\n      \"Message\":\"Successfully done\"\n   }",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "myuserId",
            "description": "<p>GoodReads User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId_tobefollowed",
            "description": "<p>GoodReads User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/users/ForgotPassword",
    "title": "Sends email to change forgotten password",
    "name": "ForgotPassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserEmail",
            "description": "<p>User Email to Sign Up.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Notifies the User an Email to change his password was sent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n{\n  \"ReturnMsg\":\"ReturnMsg\":\"An Email has been Sent to change your Forgotten Password UserEmail\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "InvalidEmail-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\": \"\\\"UserEmail\\\" must be a valid email\"\n}",
          "type": "json"
        },
        {
          "title": "NonExistingEmail-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\":\"User Doesn't Exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "api/users/GetUserById",
    "title": "Gets Information of  User by Id",
    "name": "GetUserById",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserName",
            "description": "<p>UserName of Current User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>Id of Current User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserEmail",
            "description": "<p>Email of Current User</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "NoOfFollowings",
            "description": "<p>No. of Followings</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "NoOfFollowers",
            "description": "<p>No. of Followers</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Photo",
            "description": "<p>Profile Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "UserBirthDate",
            "description": "<p>User Birth Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "IsFollowing",
            "description": "<p>tells if Current User is Following this User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "    HTTP/1.1 200 OK\n  {\n      \"NoOfFollowings\": 1,\n      \"NoOfFollowers\": 0,\n      \"UserId\":\"5cc5df8c2e9c5800172864c9\",\n      \"UserEmail\": \"samersosta@gmail.com\",\n      \"UserName\": \"Ashraaaaaaaaaaaaaf\",\n      \"Photo\": \"\",\n      \"UserBirthDate\": \"2000-01-01T00:00:00.000Z\",\n      \"IsFollowing\": \"True\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoTokenMatch-Response:",
          "content": "  HTTP/1.1 400\n{\n \"ReturnMsg\":\"User Doesn't Exist\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidUserId-Response:",
          "content": "   HTTP/1.1 401\n{\n   \"ReturnMsg\":\"User Doesn't Exist\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/users/getfollowing",
    "title": "Get People a user is following",
    "name": "Get_People_a_user_is_following",
    "group": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>user_id</code> was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n\"success\": false,\n\"Message\":\"User Id not  found !\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Request",
            "description": "<p>Successful or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n   {\n   [\n    \"5c9132dd2b1afd02f4f8c909\",\n    \"5c9132dd3bd70fb83625a86a\"\n    ]\n   }",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>GoodReads User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/users/getfollowers",
    "title": "Get User's Followers",
    "name": "Get_User_s_Followers",
    "group": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>user_id</code> was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n\"success\": false,\n\"Message\":\"User Id not  found !\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Request",
            "description": "<p>Successful or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n   {\n   [\n    \"5c9132dd2b1afd02f4f8c909\",\n    \"5c9132dd3bd70fb83625a86a\"\n    ]\n   }",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>GoodReads User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "User"
  },
  {
    "type": "Get",
    "url": "/api/users/Notifications",
    "title": "Get User Status",
    "version": "0.0.0",
    "name": "Get_User_s_Notification",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "NotificationType",
            "description": "<p>Wheather  it is CommentLike or ReviewLike or Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "NotificationId",
            "description": "<p>status id</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "Seen",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>User id the user who must be notified</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "UserPhoto",
            "description": "<p>photo of the user who must be notifed in case of Commentlike/reviewlike He will be the maker of the review or the comment in case of comment he would be the maker of the reviwe and the Maker is the maker of the commnet</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "UserName",
            "description": "<p>name of the same pervious User</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "CommentId",
            "description": "<p>comment id if the type is comment <code>(optional)</code></p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "CommentBody",
            "description": "<p>Comment the comment body</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "CommentDate",
            "description": "<p>The date of the comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CommentLikesCount",
            "description": "<p>number of people liked this comment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "BookId",
            "description": "<p>the Id of the book rated or reviewed</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "BookName",
            "description": "<p>the name (title) of the book rated or reviewed</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "BookPhoto",
            "description": "<p>the URL of the cover Photo of the book rated or revied</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ReviewId",
            "description": "<p>review Id  alawys exisit weather the type is comment or review</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ReviewBody",
            "description": "<p>Review Body in case of comment on review or reviews a book</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "ReviewDate",
            "description": "<p>the date of the review</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ReviewLikesCount",
            "description": "<p>numbr of the people who liked the the review</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MakerId",
            "description": "<p>the id of the user who made the status( Commented or rated or reviewd)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MakerPhoto",
            "description": "<p>the URL of the Photo of the User who did the thing ( Commented or rated or reviewd)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MakerName",
            "description": "<p>the Name of the User Who made the status ( Commented or rated or reviewd)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Expected Data on Success",
          "content": "{\n\n StatusType : Review\n\"StatusId\" : \"82978363763\"\n\"MakerId\" : \"shjfhghdsg\"\n\"UserId\" : \"82sdfd8363763\"\n\"ReviewId\" : \"82gf8363763\"\n\"ReviewLikesCount\": 11,\n          \"body\": \"Hello World !\",\n\n\n},\n{\n\ntype : Comment\nCommentId : \"hisadsfjhdld\"\nStatusId : \"82978363763\"\nMakerId : \"shjfhghdsg\"\nUserId : \"82sdfd8363763\"\nReviewId : \"82gf8363763\"\n.......\n},.....",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NotFound statuses:",
          "content": "   HTTP/1.1 400\n{\n  \"ReturnMsg\":\"No statuses were found\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User-Not-Found",
            "description": "<p>The <code>User</code> was not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Status-Not-Found",
            "description": "<p>The <code>Status</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Users.js",
    "groupTitle": "User"
  },
  {
    "type": "Post",
    "url": "/api/users/Notification/seen",
    "title": "",
    "version": "0.0.0",
    "name": "Set_the_notification_to_seen",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "NotificationId",
            "description": "<p>the id of the notification seen</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "SeenSuccess",
            "description": "<p>wheather is was updated in the database or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Expected Data on Success",
          "content": "{\n\"SeenSucces\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Notification-Not-Found",
            "description": "<p>The <code>Notification</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Users.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/auth/signin",
    "title": "Signing in by Email and Password",
    "name": "SignIn",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserEmail",
            "description": "<p>Email of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserPassword",
            "description": "<p>Password of User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Return Message Log in Successful.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>Id of User after Successfully Signing in</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Authentication Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "    HTTP/1.1 200 OK\n{\n       \"ReturnMsg\": \"Log in Successful.\",\n       \"UserId\": \"5ca23e81783e981f88e1618c\",\n       \"Token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EyM2U4MTc4M2U5ODFmODhlMTYxOGMiLCJpYXQiOjE1NTQxMzcxMjJ9.rUfROgeq1wgmsUxljg_ZLI2UbFMQubHQEYLKz2zd29Q\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "InvalidEmailorPassword-Response:",
          "content": "   HTTP/1.1 400\n{\n  \"ReturnMsg\":\"Invalid email or password.\"\n}",
          "type": "json"
        },
        {
          "title": "UnConfirmedUser-Response:",
          "content": "   HTTP/1.1 401\n{\n  \"ReturnMsg\" :'Your account has not been verified.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Auth.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/auth/signin",
    "title": "Signing in by Email and Password",
    "name": "SignIn",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserEmail",
            "description": "<p>Email of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserPassword",
            "description": "<p>Password of User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Return Message Log in Successful.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>Id of User after Successfully Signing in</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "    HTTP/1.1 200 OK\n{\n       \"ReturnMsg\": \"Log in Successful.\",\n       \"UserId\": \"5ca23e81783e981f88e1618c\",\n       \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EyM2U4MTc4M2U5ODFmODhlMTYxOGMiLCJpYXQiOjE1NTQxMzcxMjJ9.rUfROgeq1wgmsUxljg_ZLI2UbFMQubHQEYLKz2zd29Q\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "InvalidEmailorPassword-Response:",
          "content": "   HTTP/1.1 400\n{\n  \"ReturnMsg\":\"Invalid email or password.\"\n}",
          "type": "json"
        },
        {
          "title": "UnConfirmedUser-Response:",
          "content": "   HTTP/1.1 401\n{\n  \"ReturnMsg\" :'Your account has not been verified.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/users/UpdateUserInfo",
    "title": "Update User Information (UserName, Photo, Date).",
    "name": "SignIn",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "NewUserName",
            "description": "<p>New User Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "NewUserPhoto",
            "description": "<p>New User Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "NewUserBirthDate",
            "description": "<p>New User BirthDate</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Return Message Update is Successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "    HTTP/1.1 200 OK\n{\n       \"ReturnMsg\": \"Update Successful\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "InvalidName-Response:",
          "content": "   HTTP/1.1 400\n{\n  \"ReturnMsg\":\"Error Detail\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidPhoto-Response:",
          "content": "   HTTP/1.1 400\n{\n  \"ReturnMsg\":\"Error Detail\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidDate-Response:",
          "content": "   HTTP/1.1 400\n{\n  \"ReturnMsg\":\"Error Detail\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/users/update",
    "title": "Update User Information (UserName, Photo, Date).",
    "name": "SignIn",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "NewUserName",
            "description": "<p>New User Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "NewUserPhoto",
            "description": "<p>New User Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "NewUserBirthDate",
            "description": "<p>New User BirthDate</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Return Message Update is Successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "    HTTP/1.1 200 OK\n{\n       \"ReturnMsg\": \"Update Successful\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "InvalidName-Response:",
          "content": "   HTTP/1.1 400\n{\n  \"ReturnMsg\":\"Error Detail\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidPhoto-Response:",
          "content": "   HTTP/1.1 400\n{\n  \"ReturnMsg\":\"Error Detail\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidDate-Response:",
          "content": "   HTTP/1.1 400\n{\n  \"ReturnMsg\":\"Error Detail\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/users/SignOut",
    "title": "Signs User Out",
    "name": "SignOut",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Notifies the User that he signed out</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"ReturnMsg\": \"Signed out Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoTokenMatch-Response:",
          "content": "  HTTP/1.1 400\n{\n \"ReturnMsg\":\"User Doesn't Exist\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/users/signup",
    "title": "Signs User Up and Sends Verification Email",
    "name": "SignUp",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserName",
            "description": "<p>User Name to Sign Up.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserEmail",
            "description": "<p>User Email to Sign Up.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserPassword",
            "description": "<p>User Password to Sign Up.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Notifies that User a verification Email is sent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n{\n  \"ReturnMsg\":\"A verification email has been sent to UserEmail.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "InvalidName-Response:",
          "content": "  HTTP/1.1 400\n{\n \"ReturnMsg\": \"\\\"UserName\\\" length must be at least 3 characters long\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidEmail-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\": \"\\\"UserEmail\\\" must be a valid email\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidPassword-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\": \"\\\"UserPassword\\\" length must be at least 6 characters long\"\n}",
          "type": "json"
        },
        {
          "title": "ExistingEmail-Response:",
          "content": "    HTTP/1.1 400\n{\n  \"ReturnMsg\":\"User already registered.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/users/unfollow",
    "title": "Unfollow a user",
    "name": "Unfollow_user",
    "group": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>userId_tobefollowed</code> was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": " HTTP/1.1 404 Not Found\n{\n\"success\": false,\n\"Message\":\"User Id not  found !\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "UNFollow",
            "description": "<p>Successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n   {\n      \"success\": true,\n      \"Message\":\"Successfully done\"\n   }",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "myuserId",
            "description": "<p>GoodReads User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId_tobefollowed",
            "description": "<p>GoodReads User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/users/UpdateUserPassword",
    "title": "Update User Password.",
    "name": "UpdateUserPassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "NewUserPassword",
            "description": "<p>New User Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OldUserPassword",
            "description": "<p>Old User Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReturnMsg",
            "description": "<p>Return Message Update is Successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "    HTTP/1.1 200 OK\n{\n       \"ReturnMsg\": \"Update Successful\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "InvalidNewPassword-Response:",
          "content": "   HTTP/1.1 400\n{\n  \"ReturnMsg\":\"Error Detail\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidOldPassword-Response:",
          "content": "   HTTP/1.1 400\n{\n  \"ReturnMsg\":\"Error Detail\"\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/users/me",
    "title": "Gets Information of Current User",
    "name": "User",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserName",
            "description": "<p>UserName of Current User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>Id of Current User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserEmail",
            "description": "<p>Email of Current User</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "NoOfFollowings",
            "description": "<p>No. of Followings</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "NoOfFollowers",
            "description": "<p>No. of Followers</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Photo",
            "description": "<p>Profile Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "UserBirthDate",
            "description": "<p>User Birth Date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "    HTTP/1.1 200 OK\n  {\n      \"NoOfFollowings\": 1,\n      \"NoOfFollowers\": 0,\n      \"UserId\":\"5cc5df8c2e9c5800172864c9\",\n      \"UserEmail\": \"samersosta@gmail.com\",\n      \"UserName\": \"Ashraaaaaaaaaaaaaf\",\n      \"Photo\": \"\",\n      \"UserBirthDate\": \"2000-01-01T00:00:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "NoTokenMatch-Response:",
          "content": "  HTTP/1.1 400\n{\n \"ReturnMsg\":\"User Doesn't Exist\"\n}",
          "type": "json"
        },
        {
          "title": "UnConfirmedUser-Response:",
          "content": "   HTTP/1.1 401\n{\n   \"ReturnMsg\" :'Your account has not been verified.'\n}",
          "type": "json"
        },
        {
          "title": "Invalidtoken-Response:",
          "content": "  HTTP/1.1 400\n{\n   \"ReturnMsg\":'Invalid token.'\n}",
          "type": "json"
        },
        {
          "title": "NoTokenSent-Response:",
          "content": "    HTTP/1.1 401\n{\n  \"ReturnMsg\":'Access denied. No token provided.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Users.js",
    "groupTitle": "User"
  }
] });