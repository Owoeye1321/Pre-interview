# HD-Group
This a user page with authentication.

## Authentication
All new user are to provide details which include email, password, and a valid image.

### Checking user Validity

```

   await axios.post('check',{email:"user@gmail.com"})

```
This request returns success if the user is logged in or otherwise return failed