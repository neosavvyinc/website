### Neosavvy Homepage

This is where our home page lives - simple and easy to edit. 

If you are looking to join us, why don't your fork our repository and submit a PR jazzing up our home page with 
a brief BIO about you. 

Email Adam @ aparrish@neosavvy.com or Trevor tewen@neosavvy.com to let us know you did it. 

### Running

* `yarn install`
* `yarn start`
* `open localhost:3000`

### Deployment

You can deploy the site using the ```npm run deploy``` task. Naturally, the server is secure, so you will need to request the .pem file from Adam or Trevor.

The deploy script assumes the .pem file is in your ~/.ssh directory, so we recommend you place it there. You will likely need to change the permissions once it lands there.

```
sudo chmod 400 ~/.ssh/neosavvy_website.pem
```