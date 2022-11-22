# momoKinde backend overly simple backend design

momoKinde : degraded version of buymeamomo.com

# API Documentation

## Endpoints

### POST `auth/signup`

Expects `{email, password,userSlug}` on `req.body` <br />

<hr />

On Success sends `token` <br />
On Failure sends `{error}`

<hr />
<hr />

### POST `auth/login`

Expects `{email, password}` on `req.body` <br />

<hr />

On Success sends `token` <br />
On Failure sends `{error}`

<hr />
<hr />

### PATCH `/campaign`

Expects _Bearer [token]_ on `req.header.Authorization` <br />
Expects `{campaignName, campaignDescription}` on `req.body` <br />

<hr />

On Success `{message: {campaign}}` on `res.body` <br />
On Failure sends `{error}`

<hr />
<hr />

### PATCH `/user/password`

Expects _Bearer [token]_ on `req.header.Authorization` <br />
Expects `{currentPassword,newPassword}` on `req.body` <br />

<hr />

> you get the idea this endpoint changes the password

<hr />
<hr />

### PATCH `/user/userSlug`

Expects _Bearer [token]_ on `req.header.Authorization` <br />
Expects `{userSlug}` on `req.body` <br />

<hr />

> you get the idea this endpoint changes the userSlug

<hr />
<hr />

### TODO

- [x] update wallet
- [x] update campaign
- [x] login
- [x] signup
- [x] change password
- [x] change userslug
