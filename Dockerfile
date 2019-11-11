FROM lambci/lambda:build-nodejs10.x

ARG FUNCTION_NAME

COPY . .

RUN npm i && zip -9qyr lambda.zip node_modules index.js

CMD aws --region ${AWS_REGION} lambda update-function-code --function-name ${FUNCTION_NAME} --publish --zip-file fileb://lambda.zip
