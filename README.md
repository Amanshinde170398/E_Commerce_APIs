# Ecommerce APIs

Using our ecommerce API you can manage your product inventory.
we allow you to add, delete, update & retrieve all product.

## API Reference

### Base Path

http://localhost:8080

#### Get all products

```http
  GET /api/v1/products
```

#### Create product

```http
  POST /api/v1/products/create
```

#### Update product

```http
    PUT /api/v1/products/:id/update_quantity/?number=
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `id`      | `string` | **Required**. Id of product to update |
| `number`  | `number` | **Required**. quantity of product     |

### Delete product

```http
DELETE /api/v1/products/:id
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `id`      | `string` | **Required**. Id of product to delete |

## Run Locally

Clone the project

```bash
  git clone https://github.com/Amanshinde170398/E_Commerce_APIs.git
```

Go to the project directory

```bash
  cd E_Commerce_APIs
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGO_DB_URL`

## Authors

- [@Amanshinde170398](https://github.com/Amanshinde170398
