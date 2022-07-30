import type { AWS } from "@serverless/typescript";

const configuration: AWS = {
  service: "talk-serverless",
  frameworkVersion: ">=2",
  functions: {
    "hello": {
      handler: "src/functions/hello.handler",
      timeout: 30,
      events: [
        {
          http: {
            method: "GET",
            path: "/hello"
          }
        },
      ],
      memorySize: 2048,
      
    },
  },
  provider: {
    name: "aws",
    stackName: "${self:service}-${self:custom.stage}-stack",
    runtime: "nodejs14.x",
    stage: "${self:custom.stage}",
    region: "us-east-1",
    versionFunctions: false,
    timeout: 40,
    tracing: {
      apiGateway: false,
      lambda: true
    },
    environment: {
      STAGE: "${self:custom.stage}",
      AWS_ACCOUNT_REGION: "${aws:region}",
      AWS_ACCOUNT_ID: "${aws:accountId}"
    },
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: [
          "dynamodb:Query",
          "dynamodb:Scan",
          "dynamodb:GetItem",
          "dynamodb:PutItem",
          "dynamodb:UpdateItem",
          "dynamodb:DeleteItem",
          "dynamodb:BatchWriteItem"
        ],
        Resource: "*"
      },
      {
        Effect: "Allow",
        Action: ["sqs:SendMessage", "sqs:GetQueueUrl", "sqs:DeleteMessage"],
        Resource: "*"
      },

      {
        Effect: "Allow",
        Action: ["sns:Publish"],
        Resource: "*"
      }
    ]
  },
  custom: {
    stage: "${opt:stage,'dev'}",
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
      forceExclude: ["aws-sdk"],
      packager: "yarn",
      packagerOptions: {
        scripts: [
          "yarn autoclean --init",
          "yarn autoclean --force",
          "rm -rf node_modules/aws-sdk"
        ]
      }
    }
  },
  // Add this line to create a stack with the resources using aws cloud formation
  // resources: {},
  resources: {
    Resources: {
      // DynamoDB Resources
      MyTrable: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          TableName: "MyTrable",
          AttributeDefinitions: [
            {
              AttributeName: "id",
              AttributeType: "S"
            }
          ],
          KeySchema: [
            {
              AttributeName: "id",
              KeyType: "HASH"
            },

          ],
          BillingMode: "PAY_PER_REQUEST"
        }
      }
    }
  },
  package: {
    individually: true,
    excludeDevDependencies: true
  },
  plugins: [
    "serverless-webpack",
    "serverless-offline",
  ]
};

module.exports = configuration;
