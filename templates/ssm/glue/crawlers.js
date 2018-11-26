var _=require('lodash')

module.exports={
    "InventoryCrawler":{
        "Type" : "AWS::Glue::Crawler",
        "Properties" : {
            Role:{"Fn::GetAtt":["CrawlerRole","Arn"]},
            DatabaseName:{"Ref":"DataCatalog"},
            Targets:{
                S3Targets:[{
                    Path:{"Fn::Sub":"${LogsBucket}/data"}
                }]
            }
        }
    }
}
