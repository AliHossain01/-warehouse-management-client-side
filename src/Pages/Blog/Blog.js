import React from 'react';

const Blog = () => {
    return (
        <div className="p-5 ml-0 mt-2 mr-0 mx-auto">
            <h1 className='text-center'><u>This About QA</u></h1>

            <h5>1. Difference between authorization and authentication ?</h5>
            <p>Answer: Authentication verifies who the user is. Authorization determines what resources a user can access. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. Authorization works through settings that are implemented and maintained by the organization. Authentication is the first step of a good identity and access management process. Authorization always takes place after authentication. </p>

            <h5>2. Why are you using firebase? What other options do you have to implement authentication ?</h5>
            <p>Answer: I am using firebase for authentication of users in a website. We can also implement authentication using Okta, Auth0, Microsoft Azure Active Directory, IBM, SecureAuth etc.</p>

            <h5>3. What other services does firebase provide other than authentication ?</h5>
            <p>Answer: Firebase provides many services like Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config. </p>

        </div>
    );
};

export default Blog;