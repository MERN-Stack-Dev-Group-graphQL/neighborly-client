



create cloudformation stack
```
aws cloudformation create-stack --stack-name neighborly-staging --template-body file:///Users/dmml/Documents/neighborly-project/neighborly-client/ci/s3.yml --parameters ParameterKey=BucketName,ParameterValue=staging.neighborly.tools --capabilities CAPABILITY_NAMED_IAM
```