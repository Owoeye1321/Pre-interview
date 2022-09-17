# HD-Group
This a user page with authentication.

## Authentication
All new user are to provide details which include email, password, and a valid image.

### Checking user Validity

```
// This request check if the user is logged in the main page and it redirect the user bact to login page if otherwise
   await axios.post('check',{email:"user@gmail.com"})

```
This request returns success if the user is logged in or otherwise return failed