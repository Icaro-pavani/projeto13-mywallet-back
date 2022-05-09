# MyWallet Back-End

## Introduction

This API get the requests from the MyWallet front-end and respond accordingly.

## Requests

### Route post (/sign-up) :

- body : <code>
  {
  name,
  email,
  password,
  repeat_password
  }
  </code>

- response : code 201

### Route post (/sign-in) :

- body : <code>
  {
  email,
  password
  }
  </code>

- response : <code>
  {
  token
  }
  </code>

### Route get (/entry) :

- headers : <code>
  {
  Authorization : "Bearer {token's value}
  }
  </code>

- response : <code>
  {
  [entries]
  }
  </code>

  ### Route post (/entry) :

- headers : <code>
  {
  Authorization : "Bearer {token's value}
  }
  </code>

- body : <code>
  {
  value, description, entryType
  }
  </code>

- response : code 201

  ### Route delete (/entry/:entryId) :

- headers : <code>
  {
  Authorization : "Bearer {token's value}
  }
  </code>

- response : code 200

### Route put (/entry/:entryId) :

- headers : <code>
  {
  Authorization : "Bearer {token's value}
  }
  </code>

- body : <code>
  {
  value, description, entryType
  }
  </code>

- response : code 200

Obs: entryType must "credit" or "debit"
