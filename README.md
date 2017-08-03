### Running

* `yarn install`
* `yarn start`
* `open localhost:3000`

### Deployment

If you haven't configure your aws client yet make sure you do before trying to deploy.

To do so, install `aws-cli` from npm with `npm install -g aws-cli`

Configure your credentials through the command `aws configure`. Get/Generate your Access Key ID and your Secret Access Key from the AWS IAM service.

You should now be able to deploy the site using ```yarn run deploy```.

