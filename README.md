# HD-Group
This a user page with authentication.

## Authentication
All new user are to provide details which include email, password, and a valid image.

```
// This request check if the user is logged in the main page and it redirect the user bact to login page if otherwise
   await axios.post('check',{email:"user@gmail.com"})

```