Merge request
Title: Fix error handling in /api/users endpoint
Description:
Improves error handling in the /api/users endpoint to provide a more user-friendly response when an error occurs.
Changes:
- Updated the error handling logic to return a 500 status code and a detailed error message instead of a vague 500 error.
- Added tests to verify the new error handling behavior.
