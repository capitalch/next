---
title: ElasticSearch and Node.js getting started tutorial
category: ElasticSearch
createdOn: 2019-07-09
---
#### This is a simple tutorial from scratch for setting up ElasticSearch, index the ElasticSearch from node.js and do full text query using Postman. No prior knowledge of ElasticSearch is required.

<img src='/static/images/blogs/elasticsearch.jpeg' width='100%' alt='getting started with elasticSearch and Node.js' />

#### Motivation
While working on an e-commerce project I came across the requirement of searching a product by its name, category, model number or specification on all available fields in database. The search would need to be fast enough to cater a typeahead product box or auto fill suggestion box. After some research I decided to learn and implement ElasticSearch in this context. At first ElasticSearch appeared to be overwhelming with scattered and insufficient tutorials. But after some playing around it appeared to be a manageable beast. After achieving success I thought of sharing my experience with opensource community. I will try to keep this tutorial very simple and informative.

#### Some minimal basics of ElasticSearch
At this point of time the latest version of ElasticSearch is version 7.2. For understanding sake we can think of ElasticSearch as somewhat analogous to a relational database. Indexing in ElasticSearch can be treated as creation of tables in relational database. An index in ElasticSearch can be considered as a table in datatabase. You index JSON objects in ElasticSearch. In one index you basically assign several JSON objects. 

ElasticSearch expects same JSON fields in one index. Actually this is the difference which is incorporated in 7.x version of ElasticSearch, wherein 'types' have been deprecated. In earlier versions you were able to assign multiple types with one index. One type has same fields for all json objects. In earlier versions you were allowed to have multiple types in one index, but from version 7.x one index can have only one type. So basically 'type' is deprecated and in other words in one index of ElasticSearch you should always assign homogenous JSON objects (objects having same fields). If tou don't follow this for now there is no problem, you can still carry on with this tutorial.

#### What we will do in this tutorial
1) We will install ElasticSearch and node.js in windows platform.

2) We will download some test data from public domain.

3) By using node.js we will index test data in the ElasticSearch.

4) By using Postman we will make some adhoc query on ElasticSearch.


#### Setup

### Step 1: Download data

### Step 2: Index the data in ElasticSearch using node.js

### Step 3: Query the data using query api

<style>
h4 {
    color: darkgreen;
    margin:1rem 0 0 0;
}
p {
    margin:0.5rem 0 0 0;
}

h3 {
    color: blue;
    font-size: 1.2rem;
}
</style>