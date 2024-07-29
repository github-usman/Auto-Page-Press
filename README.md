## backend
list_of_states, list_of_cities, title, content, customFields, mainTitle
```bash
routes |--/user/
            |--/register
            |--/login
            |--/wp-template                 #// dynamic input for template               
                 |--/create[dynamic]     #[title] (x)           
                 |--/read                #[body] (x)               
                 |--/delete[dynamic]     #[advance] (x)                   
                 |--/update              #    (+) 
                                         # mandatory  
                                         #[list of dynamic data in array format]
                                         #[username]  ***     
                                         #[password]  ***      
                                         #[baseurl]   ***     
            |--/delete
            |--/update
       |--/admin/
            |--/register #hidden
            |--/login
            |--/delete #hidden
            |--/update
```
## Frontend
```bash
routes  |--/landing/
               |--/#Navbar
               |--/#Hero
               |--/#clients-
               |--/#demo-video
               |--/#FAQ
               |--/#Get-in-touch-with-us
               |--/#Footer
        |--/user/
               |--/register
               |--/login/
                    |--/wp-template/
                        ## ***mandatory***
                            #[list of dynamic data in array format]
                            #[username]  ***     
                            #[password]  ***      
                            #[baseurl]   ***   
                        ## dynamic data
                            #[title]   (x)           
                            #[body]    (x)               
                            #[advance] (x)                   
                            #    (+)   
                    |--/profile
               |--/delete
               |--/update
        |--/admin/
            |--/login
                |--/profile/
                    |--/update
                |--/users  #search, filter(date),
                |--/user/
                     |--/register
                     |--/:id/
                          |--/get
                          |--/delete
                          |--/update