# MyStore

This project is a simple product storefront made with Angular. A visitor to the site can browse products, view details of a product, and add items to a cart to complete a purchase.

## Running the application
This store gets its products from an API. 

Follow these steps to set up and start the API locally: 
1. Clone the repo located at [here](https://github.com/shaneoston/storefront-backend).
2. Run `yarn` to install dependencies.
3. Find the file `full_stack_dev.tar` in the root of the api project . This is a backup of the database that 
   contains products for the store. Restore this file via `psql` or if you are on a Mav, via pgAdmin. Instructions for restoring a dump can be found 
   [here](https://www.postgresql.org/docs/8.1/backup.html#BACKUP-DUMP-RESTORE).  **Be sure you name your database 
   `full_stack_dev` or the app will not work.**
4. Once restored and your postgres server is running, start the API with `yarn start dev`.

After starting the API, clone this repo, run `yarn` and `ng serve`. Navigate to `http://localhost:4200/`.
