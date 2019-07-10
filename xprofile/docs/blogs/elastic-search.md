---
title: ElasticSearch and Node.js getting started tutorial
category: ElasticSearch
createdOn: 2019-07-09
---
#### This is a simple tutorial from scratch for setting up ElasticSearch, index the ElasticSearch from node.js and do full text query using Postman. No prior knowledge of ElasticSearch is required.
<br></br>
<img src='/static/images/blogs/elasticsearch.jpeg' width='100%' alt='getting started with elasticSearch and Node.js' />

#### Motivation
While working on an e-commerce project I came across the requirement of searching a product by its name, category, model number or specification on all available fields in database. The search would need to be fast enough to cater a typeahead product box or auto fill suggestion box. After some research I decided to learn and implement ElasticSearch in this context. At first ElasticSearch appeared to be overwhelming with scattered and insufficient tutorials. But after some playing around it appeared to be a manageable beast. After achieving success I thought of sharing my experience with opensource community. I will try to keep this tutorial very simple and informative.

#### Some minimum background in ElasticSearch
At this point of time the latest version of ElasticSearch is version 7.2. For understanding sake we can think of ElasticSearch as somewhat analogous to a relational database. Indexing in ElasticSearch can be treated as creation of tables in relational database. An index in ElasticSearch can be considered as a table in datatabase. You index JSON objects in ElasticSearch. In one index you basically assign several JSON objects. 

ElasticSearch expects same JSON fields of all JSON objects in one index. Actually this is the difference which is incorporated in 7.x version of ElasticSearch, wherein 'mapping types' have been deprecated. In earlier versions you were able to assign multiple types with one index. One type has same fields for all json objects. From version 7.x one index can have only one type. In other words in one index of ElasticSearch you should always assign homogenous JSON objects (objects having same fields). If you don't follow this concept for now there is no problem, you can still carry on with this tutorial.

#### What we will do in this tutorial
1) We will install ElasticSearch and node.js in windows platform.

2) We will download some test data from public domain.

3) By using node.js we will index test data in the ElasticSearch.

4) By using Postman we will make some adhoc query on ElasticSearch.


#### Environment Setup
### 1. <a href="http://www.elastic.co/downloads/elasticsearch" target='_blank'> Download and Install ElasticSearch</a>
Start the ElasticSearch. In windows you can start the ElasticSearch by running the elasticsearch.bat file in the 'bin' folder of your installation. For example if your ElasticSearch is installed in 'C:\elasticsearch-7.2.0' then give the following commands:
```
> cd C:\elasticsearch-7.2.0\bin
> elasticsearch
```
Above will start ElasticSearch instance in Windows. To checkup the correct installation of ElasticSearch, browse at http://localhost:9200. You will see similar to following in browser screen
```
{
  "name" : "ADMIN-PC",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "U0qX119mQhONScxxtq-jsQ",
  "version" : {
    "number" : "7.2.0",
    "build_flavor" : "default",
    "build_type" : "zip",
    "build_hash" : "508c38a",
    "build_date" : "2019-06-20T15:54:18.811730Z",
    "build_snapshot" : false,
    "lucene_version" : "8.0.0",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
```
### 2. <a href='https://www.guru99.com/download-install-node-js.html' target='_blank'> Download and Install node.js </a>
If you have correctly installed node.js then giving the command ```node --version``` at command prompt will output the installed node version.

### 3. <a href='https://www.getpostman.com/' target='_blank'>Install Postman</a>. You can also install postman as Google Chrome extension if you are using Google Chrome.

#### Here we go for actual implementation
### Step 1: Download data freely available in public domain
You can download sample data for <a href='http://api.nobelprize.org/v1/prize.json' target='_blank'>Nobel Prize winners</a>. If the download does not start and data is visible in browser screen then you can select all data in browser screen, copy and paste to a local file named as 'nobelprize.json'. We are going to use this data for indexing and querying in ElasticSearch installed as above. Whatever it is, make sure that you have all the JSON data for Nobel prize winners in your 'nobelprize.json' file. Create a folder by name 'data' and put the above file in 'data' folder. The format of the file is as below:
```
{
    "prizes": [
        {
            "year": "2018",
            "category": "physics",
            "overallMotivation": "\"for groundbreaking inventions 
            in the field of laser physics\"",
            "laureates": [
                {
                    "id": "960",
                    "firstname": "Arthur",
                    "surname": "Ashkin",
                    "motivation": "\"for the optical tweezers 
                    and their application to biological systems\"",
                    "share": "2"
                },
                {
                    "id": "961",
                    "firstname": "G\u00e9rard",
                    "surname": "Mourou",
                    "motivation": "\"for their method of generating 
                    high-intensity, ultra-short optical pulses\"",
                    "share": "4"
                },
                {
                    "id": "962",
                    "firstname": "Donna",
                    "surname": "Strickland",
                    "motivation": "\"for their method of generating 
                    high-intensity, ultra-short optical pulses\"",
                    "share": "4"
                }
            ]
        },
        {
            "year": "2018",
            "category": "chemistry",
            "laureates": [
                {
                    "id": "963",
                    "firstname": "Frances H.",
                    "surname": "Arnold",
                    "motivation": "\"for the directed evolution of enzymes\"",
                    "share": "2"
                },
                {
                    "id": "964",
                    "firstname": "George P.",
                    "surname": "Smith",
                    "motivation": "\"for the phage display of 
                    peptides and antibodies\"",
                    "share": "4"
                },
                {
                    "id": "965",
                    "firstname": "Sir Gregory P.",
                    "surname": "Winter",
                    "motivation": "\"for the phage display of 
                    peptides and antibodies\"",
                    "share": "4"
                }
            ]
        },
        ...
```

### Step 2: Node.js project for indexing the data in ElasticSearch
a) Give following command in command prompt and follow the instructions.
```
npm init
npm install @elastic/elasticsearch --save
```
The above commands will setup a node.js project and download the npm module for ElasticSearch.

b) Create server.js file with following code

server.js
```javascript
const es = require('@elastic/elasticsearch');
const nobelPrizeWinners = require('./data/nobelprize.json');
const client = new es.Client({
    node: 'http://localhost:9200'
})
const dataArray = nobelPrizeWinners.prizes;
const getIndexTemplate = (i) => `{"index":{"_id":${i + 1}}}`
function doIndex(arr, template) {
    const bulk = []
    arr.forEach((x, i) => {
        const j = JSON.parse(template(i));
        bulk.push(j);
        bulk.push(x);
    })
    return bulk;
}
const bulk = doIndex(dataArray, getIndexTemplate);
client.bulk(
    {
        index: 'nobel',
        body: bulk
    }, function (err, resp) {
        if (err) {
            console.log(err);
        } else {
            console.log('success:', resp);
        }
    });
```
Explaination for
```javascript
const nobelPrizeWinners = require('./data/nobelprize.json');
const client = new es.Client({
    node: 'http://localhost:9200'
})
``` 
load the json data in nobelPrizeWinners and instantiate the ElasticSearch client in client variable.

Explaination for
```javascript
const dataArray = nobelPrizeWinners.prizes;
const getIndexTemplate = (i) => `{"index":{"_id":${i + 1}}}`
function doIndex(arr, template) {
    const bulk = []
    arr.forEach((x, i) => {
        const j = JSON.parse(template(i));
        bulk.push(j);
        bulk.push(x);
    })
    return bulk;
}
```
```dataArray``` is an array consisting of all the prizes. This contains all the data for Nobel Prize winners. ```getindexTemplate``` is <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals' target='_blank'>template literal</a>, a new feature in ES6. The function ```doIndex``` creates an array 'bulk' , which contains actual data preceded by data required for bulk index api of ElasticSearch. In fact you need to provide the 'index' metadata and 'id' for each JSON object you are required to index. I used ```getIndexTemplate``` for generating such metadata. For more information You can refer to ElasticSearch <a target='_blank' href='https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html'>Bulk API</a>.

Explaination for
```javascript
const bulk = doIndex(dataArray, getIndexTemplate);
client.bulk(
    {
        index: 'nobel',
        body: bulk
    }, function (err, resp) {
        if (err) {
            console.log(err);
        } else {
            console.log('success:', resp);
        }
    });
```
This code at first executes the ```doIndex``` function to get the ```bulk``` array. Then the bulk API of ElasticSearch is executed through ```client.bulk```. If everything is fine then you get the index generated in the running instance of ElasticSearch. The name of index is ```nobel```

You can test whether the index is correctly created in ElasticSearch or not by using following procedure.
Start Postman. Give the command ```http://localhost:9200/_cat/indices``` as get request in Postman. **Remember to use Header Content-Type as application/json in all queries for ElasticSearch**. This is your first query to ElasticSearch using cat api. You will see something like 
```
health status index                uuid                   pri rep 
yellow open   nobel                CHJkNCgJTNGbDH2QKw5bdg   1   1
``` 
as response. Don't worry about health as yellow. If you don't see nobel as index, then something is wrong and you need to checkup your process so far.

### Step 3: Query the data using query api
Now we will do a series of queries using Postman. Always remember to use Content-Type as application/json in one of the headers.

Query 1: GET request in Postman:  http://localhost:9200/nobel/_search

This will return all data for index nobel. You can check the value of 'hits'. By default only 10 records are physically returned although the available records as indicated by value of 'hits' property is 590. If you modify the query by appending ```?size=1000``` in the query string then all the 590 records will be returned.

Query 2: GET request: http://localhost:9200/nobel/_search?size=1000

Give Body for get request as
```
{
    "query": {
        "query_string" : {
            "query" : "litratur~"
        }
    }
}
```
Notice the fuzzy character '~' at the end of ```litratur```. There is spelling mistake in the query for actual spelling 'literature'. The '~' character at the end takes care of that and all records having the word 'literature' in any of the fields are returned. At present there are 110 such hits as you will see in the value for ```hits``` in response of Postman as follows.
```
{
    "took": 59,
    "timed_out": false,
    "_shards": {
        "total": 1,
        "successful": 1,
        "skipped": 0,
        "failed": 0
    },
    "hits": {
        "total": {
            "value": 110,
            "relation": "eq"
        },
        "max_score": 3.8908901,
        "hits": [
            {
                "_index": "nobel",
                "_type": "_doc",
                "_id": "273",
                "_score": 3.8908901,
                "_source": {
                    "year": "1973",
                    "category": "literature",
                    "laureates": [
                        {
                            "id": "648",
                            "firstname": "Patrick",
                            "surname": "White",
                            "motivation": "\"for an epic and 
                            psychological narrative 
                            art which has introduced a new 
                            continent into literature\"",
                            "share": "1"
                        }
                    ]
                }
            },
            ...
```

Query 3: GET request: 
Request body is
```
{
    "query": {
        "query_string" : {
            "query" : "raman~"
        }
    }
}
```
Output is single record for Nobel Prize in Physics.
Similarly you can play with several queries by changing the ```query``` field in the request body and you will get several different responses.

### Installing Elasticsearch as Docker container in cloud and make it available universally
Up above I explained how to install ElasticSearch locally, but what about production deployment of ElasticSearch in cloud so that you can create several indices in one cloud instance of ElasticSearch and use it in several applications all over the globe. Its very easy. I did it successfully with 'app.cloudjiffy.com' the paas provider for Docker containers. Same thing is possible with Azure, AWS and Google cloud. You simply have to install the Docker image of ElasticSearch which is available at docker hub. You can make search at <a href='https://hub.docker.com/' target='_blank'>Docker Hub</a> for 'ElasticSearch' and you need to install that docker image in any of the cloud service providers who support Docker containers. Once it is deployed on cloud you get a URL where to do the indexing and search. The procedure for <a href='https://jelastic.com/' target='_blank'>Jelastic</a> with <a href='https://app.cloudjiffy.com/' target='_blank'>Cloudjiffy</a> as their service provider is as follows:

1. Create a new Docker environment and select latest version of 'elasticsearch' as docker image.
2. Provide a static IP to the application server. An alternative is to provide an end point instead of permanent static IP
3. When you start the docker based application server you will see errors in log files and default query of http://your-environment:9200 will not work. In **/usr/share/elasticsearch/config/elasticsearch.yml** add this line:
**cluster.initial_master_nodes: node18391-elastic.cloudjiffy.net**. You can check exact the node name in the log file itself.
4. You can now successfully browse at your static IP or Cloudjiffy end point. Remember to append ':9200' at end of url in case you use static IP. The final url will be something like http://xxx.xxx.xxx.xxx:9200. But in case you prefer to use Cloudjiffy end point, you need not append the url with ':9200'
5. You can index and make queries at the ElasticSearch URL in the same manner as explained above, just by replacing the localhost:9200 with the actual cloud URL.

The above project is available at my github url at <a target='_blank' href='https://github.com/capitalch/elastic-search'>ElasticSearch implementation by Sushant</a>

In case you face any trouble please feel free to put comments below. I can also be contacted at capitalch@gmail.com

Happy coding!!!

<style>
h4 {
    color: darkgreen;
    font-size: 1.4rem;
    margin:1rem 0 0 0;
}
p {
    margin:0.5rem 0 0 0;
}

h3 {
    color: maroon;
    font-size: 1.2rem;
    /* margin:0; */
}
div {
    margin:0;
}
</style>