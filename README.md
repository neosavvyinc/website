### Running

* `yarn install`
* `yarn start`
* `open localhost:3000`

### Deployment

If you haven't configure your aws client yet make sure you do before trying to deploy.

Install PIP (required to install the awscli from Amazon)

`https://pip.pypa.io/en/stable/installing/`

`wget https://bootstrap.pypa.io/get-pip.py`
`sudo python get-pip.py`

To do so, install `awscli` with `sudo pip install awscli` or on El Capitan `sudo pip install --ignore-installed six awscli` because El Capitan comes with an unremovable pre-installation of the `six` package dependency

Configure your credentials through the command `aws configure`. Get/Generate your Access Key ID and your Secret Access Key from the AWS IAM service.

You should now be able to deploy the site using ```yarn run deploy```.

