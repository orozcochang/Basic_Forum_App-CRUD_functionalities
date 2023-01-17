# project_4

Full-stack forum app that implements CRUD operations for categories and posts under those categories.  
The technical stack is:  
&emsp; -Frontend: JavaScript/React  
&emsp; -Backend: Python/Django  
&emsp; -Database: PostgreSQL  
  
### Main Page

<img width="1121" alt="Screen Shot 2023-01-17 at 8 47 38 AM" src="https://user-images.githubusercontent.com/100933440/212782394-6b206b47-66f1-453e-a137-f9a4120e8341.png">

### Categories Page
On this page we see the categories already creted and stored in the database. We can also see the rest of the CRUD functionality in the buttons available to the user. Clicking on the category title itself will make a GET request to the server and display all post under that category.

<img width="1246" alt="Screen Shot 2023-01-17 at 8 48 39 AM" src="https://user-images.githubusercontent.com/100933440/212782707-7bf9d38d-638d-4e9c-a2c9-dbb41f4fe3c4.png">
<img width="1179" alt="Screen Shot 2023-01-17 at 8 49 48 AM" src="https://user-images.githubusercontent.com/100933440/212782999-78a4c4f3-b0ab-46e6-8794-dda9507f1c97.png">
<img width="1018" alt="Screen Shot 2023-01-17 at 9 22 44 AM" src="https://user-images.githubusercontent.com/100933440/212784131-b4fce893-0749-41ef-9ba4-c82317993410.png">

### Individual Category Page
By linking the pimary key for each category to its related posts, we get all posts created under each category by clicking on the link. On this page we have the create, read, and delete functionality, once the post is opened the update functionality is seen.
<img width="1203" alt="Screen Shot 2023-01-17 at 8 52 35 AM" src="https://user-images.githubusercontent.com/100933440/212783945-20729a83-cf99-4838-ad21-a8a49eff62be.png">
