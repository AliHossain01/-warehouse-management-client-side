import React from 'react';

const Blog = () => {
    return (
        <div className="p-5 ml-0 mt-2 mr-0 mx-auto">
            <h1 className='text-center'><u>This About QA</u></h1>

            <h5>1. Difference between Javascript and Node JS ?</h5>
            <p>Answer: Javascript is an open-source, cross-platform, interpreted, lightweight scripting programming language that is used to develop dynamic and web applications.Node JS is a cross-platform, open-source JavaScript runtime environment that allows JavaScript to be run on the server. Javascript is generally used on the client-side server.  Node JS is generally used on the server-side. Javascript is a programming language. It works in any browser that has a proper browser engine.  Node JS is  a JavaScript interpreter and environment with some valuable libraries that JavaScript programming can use separately. JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML. JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.</p>

            <h5>2.  Differences between SQL and  NoSQL databases ?</h5>
            <p>Answer: SQL is RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). NoSQL is  Non-relational or distributed database system. SQL databases have fixed or static or predefined schema. NoSQL have dynamic schema. SQL databases are not suited for hierarchical data storage. NoSQL databases are best suited for hierarchical data storage. SQL databases are best suited for complex queries. NoSQL databases are not so good for complex queries</p>

            <h5>3.  What is the purpose of JWT and how does it work ?</h5>
            <p>Answer: JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.Once decoded, we will get two JSON strings: 1. The header and the payload. 2.The signature. The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.

            </p>

        </div>
    );
};

export default Blog;