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
At this point of time the latest version of ElasticSearch is version 7.2. One significant difference in this version is 'type' in ElasticSearch is deprecated.

#### What we will do in this tutorial
1) We will install ElasticSearch and node.js in windows platform.

2) We will download some test data from public domain.

3) By using node.js we will index data in the ElasticSearch.

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
    margin:0;
}

h3 {
    color: blue;
    font-size: 1.2rem;
}
</style>