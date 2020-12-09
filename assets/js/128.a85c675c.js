(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{663:function(t,e,a){"use strict";a.r(e);var s=a(9),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[t._v("#")]),t._v(" Query")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.gcp.bigquery.Query"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Execute BigQuery SQL query in a specific BigQuery database")])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("blockquote",[a("p",[t._v("Create a table with a custom query")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"query"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.gcp.bigquery.Query"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("destinationTable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_project.my_dataset.my_table"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("writeDisposition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" WRITE_APPEND\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n  SELECT \n    "hello" as string,\n    NULL AS `nullable`,\n    1 as int,\n    1.25 AS float,\n    DATE("2008-12-25") AS date,\n    DATETIME "2008-12-25 15:30:00.123456" AS datetime,\n    TIME(DATETIME "2008-12-25 15:30:00.123456") AS time,\n    TIMESTAMP("2008-12-25 15:30:00.123456") AS timestamp,\n    ST_GEOGPOINT(50.6833, 2.9) AS geopoint,\n    ARRAY(SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3) AS `array`,\n    STRUCT(4 AS x, 0 AS y, ARRAY(SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3) AS z) AS `struct`')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Execute a query and fetch results sets on another task")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fetch\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.task.gcp.bigquery.Query\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n    SELECT 1 as id, "John" as name\n    UNION ALL\n    SELECT 2 as id, "Doe" as name')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fetched"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.tasks.debugs.Return\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    {{#each outputs.fetch.rows}}\n    id : {{ this.id }}, name: {{ this.name }}\n    {{/each}}")]),t._v("\n")])])]),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("h3",{attrs:{id:"clusteringfields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clusteringfields"}},[t._v("#")]),t._v(" "),a("code",[t._v("clusteringFields")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The clustering specification for the destination table")])]),t._v(" "),a("h3",{attrs:{id:"createdisposition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createdisposition"}},[t._v("#")]),t._v(" "),a("code",[t._v("createDisposition")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Whether the job is allowed to create tables")])]),t._v(" "),a("h3",{attrs:{id:"destinationtable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destinationtable"}},[t._v("#")]),t._v(" "),a("code",[t._v("destinationTable")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The table where to put query results")])]),t._v(" "),a("p",[t._v("If not provided a new table is created.")]),t._v(" "),a("h3",{attrs:{id:"fetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[t._v("#")]),t._v(" "),a("code",[t._v("fetch")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Whether to Fetch the data from the query result to the task output")])]),t._v(" "),a("h3",{attrs:{id:"fetchone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetchone"}},[t._v("#")]),t._v(" "),a("code",[t._v("fetchOne")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Whether to Fetch only one data row from the query result to the task output")])]),t._v(" "),a("h3",{attrs:{id:"legacysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#legacysql"}},[t._v("#")]),t._v(" "),a("code",[t._v("legacySql")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Whether to use BigQuery's legacy SQL dialect for this query")])]),t._v(" "),a("p",[t._v("By default this property is set to false.")]),t._v(" "),a("h3",{attrs:{id:"location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[t._v("#")]),t._v(" "),a("code",[t._v("location")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The geographic location where the dataset should reside")])]),t._v(" "),a("p",[t._v("This property is experimental and might be subject to change or removed.")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://cloud.google.com/bigquery/docs/reference/v2/datasets#location"}},[t._v("Dataset Location")])]),t._v(" "),a("h3",{attrs:{id:"projectid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#projectid"}},[t._v("#")]),t._v(" "),a("code",[t._v("projectId")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The GCP project id")])]),t._v(" "),a("h3",{attrs:{id:"retryauto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retryauto"}},[t._v("#")]),t._v(" "),a("code",[t._v("retryAuto")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" ====")]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("h3",{attrs:{id:"retrymessages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrymessages"}},[t._v("#")]),t._v(" "),a("code",[t._v("retryMessages")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("[due to concurrent update]")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The message that are valid for a automatic retry.")])]),t._v(" "),a("p",[t._v("Message is tested as a substring of the full message and case insensitive")]),t._v(" "),a("h3",{attrs:{id:"retryreasons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retryreasons"}},[t._v("#")]),t._v(" "),a("code",[t._v("retryReasons")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("[rateLimitExceeded, jobBackendError]")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The reason that are valid for a automatic retry.")])]),t._v(" "),a("h3",{attrs:{id:"schemaupdateoptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schemaupdateoptions"}},[t._v("#")]),t._v(" "),a("code",[t._v("schemaUpdateOptions")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("[Experimental] Options allowing the schema of the destination table to be updated as a side effect of the query job")])]),t._v(" "),a("p",[t._v("Schema update options are supported in two cases: * when writeDisposition is WRITE_APPEND;")]),t._v(" "),a("ul",[a("li",[t._v("when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators."),a("br"),t._v("\nFor normal tables, WRITE_TRUNCATE will always overwrite the schema.")])]),t._v(" "),a("h3",{attrs:{id:"scopes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scopes"}},[t._v("#")]),t._v(" "),a("code",[t._v("scopes")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("[https://www.googleapis.com/auth/cloud-platform]")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The GCP scopes to used")])]),t._v(" "),a("h3",{attrs:{id:"serviceaccount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serviceaccount"}},[t._v("#")]),t._v(" "),a("code",[t._v("serviceAccount")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The GCP service account key")])]),t._v(" "),a("h3",{attrs:{id:"sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[t._v("#")]),t._v(" "),a("code",[t._v("sql")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The sql query to run")])]),t._v(" "),a("h3",{attrs:{id:"store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store"}},[t._v("#")]),t._v(" "),a("code",[t._v("store")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Whether to store the data from the query result into an ion serialized data file")])]),t._v(" "),a("h3",{attrs:{id:"timepartitioningfield"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timepartitioningfield"}},[t._v("#")]),t._v(" "),a("code",[t._v("timePartitioningField")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The time partitioning specification for the destination table")])]),t._v(" "),a("h3",{attrs:{id:"writedisposition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writedisposition"}},[t._v("#")]),t._v(" "),a("code",[t._v("writeDisposition")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The action that should occur if the destination table already exists")])]),t._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),a("h3",{attrs:{id:"jobid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jobid"}},[t._v("#")]),t._v(" "),a("code",[t._v("jobId")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The job id")])]),t._v(" "),a("h3",{attrs:{id:"row"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row"}},[t._v("#")]),t._v(" "),a("code",[t._v("row")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Map containing the first row of fetched data")])]),t._v(" "),a("p",[t._v("Only populated if 'fetchOne' parameter is set to true.")]),t._v(" "),a("h3",{attrs:{id:"rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rows"}},[t._v("#")]),t._v(" "),a("code",[t._v("rows")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("object")])])]),t._v(" "),a("blockquote",[a("p",[t._v("List containing the fetched data")])]),t._v(" "),a("p",[t._v("Only populated if 'fetch' parameter is set to true.")]),t._v(" "),a("h3",{attrs:{id:"size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#size"}},[t._v("#")]),t._v(" "),a("code",[t._v("size")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The size of the rows fetch")])]),t._v(" "),a("h3",{attrs:{id:"uri"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[t._v("#")]),t._v(" "),a("code",[t._v("uri")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The uri of store result")])]),t._v(" "),a("p",[t._v("Only populated if 'store' is set to true.")])])}),[],!1,null,null,null);e.default=r.exports}}]);