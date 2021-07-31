#  Mr Shop Project
#  _abstract_

> In this project I design a simple shop website named MrShop . It contain some base concept such routing ,
> SPA , CRUD , third party servers and etc . Libraries such React , Material-Ui , Axios  used as main libraries .
> three main colors  orange , purple and white  used also as base colors .
> It has 4 pages  for customers and 3 pages for managers ( in front end application ) 1 bank page in bank server
> embed in assets . another sever is our backend ( created with json server )  in assets folder 
#  _how we can use it_
> open your terminal and write  
```
git clone https://github.com/RasoulKordestani21/maktab47-project-rasoul-kordestani.git
```
> then in your terminal open   maktab47-project-rasoul-kordestani/shopping-project directory . but here we 
> we have a big problem . it just run our front end app . in orther to have bank and backend server go to 
> maktab47-project-rasoul-kordestani/shopping-project/assets/servers so you can find them there . continue 
> above route and to run this two . at first copy ./assets/server in another folder and also seperate ./bank_page
>and backend_json_server . now find their folder in your terminal and write 
```
npm install 
```
> then in bank_page use below command to run it 
```
http-server ./
```
> At last you should go to  /backend_json_server directory and run the following command 
```
npm run backend:dev 
```

