import json
import boto3

# INITIALIZE THE DYNAMODB CLIENT
client = boto3.client("dynamodb")

def lambda_handler(event, context):
    return Get_Visitor_Count()

def Get_Visitor_Count():
    try:
        response = client.update_item(
            TableName="VisitorCountTable",
            Key={
                "visitor_count_id": {
                    "N": "1"
                }
            },
            ExpressionAttributeNames={
                "#VC": "visitor_count"
            },
            ExpressionAttributeValues={
                ":inc": {"N": "1"},
                ":start": {"N": "0"}
            },
            UpdateExpression="SET #VC = if_not_exists(#VC, :start) + :inc",
            ReturnValues="UPDATED_NEW"
        )

        updated_count = int(response["Attributes"]["visitor_count"]["N"])

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
            },
            'body': json.dumps({'visitorcount': updated_count})
        }

    except Exception as e:
        print(f"Error handling DynamoDB: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Internal server error tracking visitor count'})
        }