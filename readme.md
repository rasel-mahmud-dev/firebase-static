## Firebase static app (can be react, preact, vue, or vanila html).

Link:  [https://fir-static-hosting-site.web.app/](https://fir-static-hosting-site.web.app/)

In this project i use firestore to store application data with CRUD Operation

Firestore is a nosql database like mongodb







### initial firebase project

```sh
firebase init 
```

create new one, 

or you can select existing project

then select Which Firebase features do you want to set up for this directory.

```sh
(*) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys  
```

What do you want to use as your public directory? your build directory [dist or build or other]

### Now initialized firebase project



### now you can build your single page application to run

```sh
yarn build or npm run build
```



### To deploy your site on live 

 ```sh
 firebase deploy
 ```

=== Deploying to 'firebase-static-hosting-site'...



After few second you should this message

Deploy complete!