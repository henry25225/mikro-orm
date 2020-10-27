(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{485:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var a=r(1),n=r(6),c=(r(0),r(806)),b={id:"referenceoptions",title:"Interface: ReferenceOptions<T, O>",sidebar_label:"ReferenceOptions"},o={unversionedId:"api/interfaces/referenceoptions",id:"api/interfaces/referenceoptions",isDocsHomePage:!1,title:"Interface: ReferenceOptions<T, O>",description:"Type parameters",source:"@site/docs/api/interfaces/referenceoptions.md",slug:"/api/interfaces/referenceoptions",permalink:"/docs/next/api/interfaces/referenceoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/interfaces/referenceoptions.md",version:"current",sidebar_label:"ReferenceOptions",sidebar:"API",previous:{title:"Interface: QueryResult",permalink:"/docs/next/api/interfaces/queryresult"},next:{title:"Interface: SerializedPrimaryKeyOptions<T>",permalink:"/docs/next/api/interfaces/serializedprimarykeyoptions"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"cascade",id:"cascade",children:[]},{value:"columnType",id:"columntype",children:[]},{value:"comment",id:"comment",children:[]},{value:"customType",id:"customtype",children:[]},{value:"default",id:"default",children:[]},{value:"defaultRaw",id:"defaultraw",children:[]},{value:"eager",id:"eager",children:[]},{value:"entity",id:"entity",children:[]},{value:"fieldName",id:"fieldname",children:[]},{value:"fieldNames",id:"fieldnames",children:[]},{value:"formula",id:"formula",children:[]},{value:"hidden",id:"hidden",children:[]},{value:"index",id:"index",children:[]},{value:"lazy",id:"lazy",children:[]},{value:"length",id:"length",children:[]},{value:"name",id:"name",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"onCreate",id:"oncreate",children:[]},{value:"onUpdate",id:"onupdate",children:[]},{value:"persist",id:"persist",children:[]},{value:"primary",id:"primary",children:[]},{value:"serializedName",id:"serializedname",children:[]},{value:"serializedPrimaryKey",id:"serializedprimarykey",children:[]},{value:"serializer",id:"serializer",children:[]},{value:"strategy",id:"strategy",children:[]},{value:"type",id:"type",children:[]},{value:"unique",id:"unique",children:[]},{value:"unsigned",id:"unsigned",children:[]},{value:"version",id:"version",children:[]}]}],i={rightToc:p};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"T"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"O"))))),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"{ columnType?: string ; comment?: string ; customType?: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/type"}),"Type"),"<","any> ; default?: string ","|"," string[] ","|"," number ","|"," number[] ","|"," boolean ","|"," null ; defaultRaw?: string ; fieldName?: string ; fieldNames?: string[] ; formula?: string ","|"," (alias: string) => string ; hidden?: boolean ; index?: boolean ","|"," string ; lazy?: boolean ; length?: number ; name?: string ; nullable?: boolean ; onCreate?: (entity: T) => any ; onUpdate?: (entity: T) => any ; persist?: boolean ; primary?: boolean ; serializedName?: string ; serializedPrimaryKey?: boolean ; serializer?: (value: any) => any ; type?: ",'"',"string",'"'," ","|"," ",'"',"number",'"'," ","|"," ",'"',"boolean",'"'," ","|"," ",'"',"bigint",'"'," ","|"," ",'"',"ObjectId",'"'," ","|"," string ","|"," unknown ","|"," bigint ","|"," Date ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api#constructor"}),"Constructor"),"<",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/type"}),"Type"),"<","any>> ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/type"}),"Type"),"<","any> ; unique?: boolean ","|"," string ; unsigned?: boolean ; version?: boolean  }"),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"ReferenceOptions")),Object(c.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/interfaces/manytooneoptions"}),"ManyToOneOptions")),Object(c.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/interfaces/manytomanyoptions"}),"ManyToManyOptions")))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"cascade"},"cascade"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"cascade"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/enums/cascade"}),"Cascade"),"[]"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L67"}),"packages/core/src/decorators/Property.ts:67"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"columntype"},"columnType"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"columnType"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.columnType")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L42"}),"packages/core/src/decorators/Property.ts:42"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"comment"},"comment"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"comment"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.comment")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L62"}),"packages/core/src/decorators/Property.ts:62"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"customtype"},"customType"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"customType"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/type"}),"Type"),"<","any>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.customType")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L41"}),"packages/core/src/decorators/Property.ts:41"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"default"},"default"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"default"),": string ","|"," string[] ","|"," number ","|"," number[] ","|"," boolean ","|"," null"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.default")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L47"}),"packages/core/src/decorators/Property.ts:47"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"defaultraw"},"defaultRaw"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"defaultRaw"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.defaultRaw")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L48"}),"packages/core/src/decorators/Property.ts:48"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"eager"},"eager"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"eager"),": boolean"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L68"}),"packages/core/src/decorators/Property.ts:68"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"entity"},"entity"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"entity"),": string ","|"," () => ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api#entityname"}),"EntityName"),"<","T>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L66"}),"packages/core/src/decorators/Property.ts:66"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"fieldname"},"fieldName"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"fieldName"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.fieldName")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L39"}),"packages/core/src/decorators/Property.ts:39"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"fieldnames"},"fieldNames"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"fieldNames"),": string[]"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.fieldNames")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L40"}),"packages/core/src/decorators/Property.ts:40"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"formula"},"formula"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"formula"),": string ","|"," (alias: string) => string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.formula")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L49"}),"packages/core/src/decorators/Property.ts:49"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"hidden"},"hidden"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"hidden"),": boolean"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.hidden")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L53"}),"packages/core/src/decorators/Property.ts:53"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"index"},"index"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"index"),": boolean ","|"," string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.index")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L55"}),"packages/core/src/decorators/Property.ts:55"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"lazy"},"lazy"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"lazy"),": boolean"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.lazy")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L57"}),"packages/core/src/decorators/Property.ts:57"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"length"},"length"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"length"),": number"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.length")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L44"}),"packages/core/src/decorators/Property.ts:44"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"name"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.name")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L38"}),"packages/core/src/decorators/Property.ts:38"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"nullable"},"nullable"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"nullable"),": boolean"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.nullable")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L50"}),"packages/core/src/decorators/Property.ts:50"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"oncreate"},"onCreate"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"onCreate"),": (entity: T) => any"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.onCreate")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L45"}),"packages/core/src/decorators/Property.ts:45"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onupdate"},"onUpdate"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"onUpdate"),": (entity: T) => any"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.onUpdate")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L46"}),"packages/core/src/decorators/Property.ts:46"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"persist"},"persist"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"persist"),": boolean"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.persist")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L52"}),"packages/core/src/decorators/Property.ts:52"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"primary"},"primary"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"primary"),": boolean"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.primary")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L58"}),"packages/core/src/decorators/Property.ts:58"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"serializedname"},"serializedName"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"serializedName"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.serializedName")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L61"}),"packages/core/src/decorators/Property.ts:61"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"serializedprimarykey"},"serializedPrimaryKey"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"serializedPrimaryKey"),": boolean"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.serializedPrimaryKey")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L59"}),"packages/core/src/decorators/Property.ts:59"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"serializer"},"serializer"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"serializer"),": (value: any) => any"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.serializer")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L60"}),"packages/core/src/decorators/Property.ts:60"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"strategy"},"strategy"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"strategy"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/enums/loadstrategy"}),"LoadStrategy")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L69"}),"packages/core/src/decorators/Property.ts:69"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"type"},"type"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"type"),": ",'"',"string",'"'," ","|"," ",'"',"number",'"'," ","|"," ",'"',"boolean",'"'," ","|"," ",'"',"bigint",'"'," ","|"," ",'"',"ObjectId",'"'," ","|"," string ","|"," unknown ","|"," bigint ","|"," Date ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api#constructor"}),"Constructor"),"<",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/type"}),"Type"),"<","any>> ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/type"}),"Type"),"<","any>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.type")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L43"}),"packages/core/src/decorators/Property.ts:43"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"unique"},"unique"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"unique"),": boolean ","|"," string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.unique")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L56"}),"packages/core/src/decorators/Property.ts:56"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"unsigned"},"unsigned"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"unsigned"),": boolean"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.unsigned")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L51"}),"packages/core/src/decorators/Property.ts:51"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"version"},"version"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"version"),": boolean"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from __type.version")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c7efc54/packages/core/src/decorators/Property.ts#L54"}),"packages/core/src/decorators/Property.ts:54"))))}l.isMDXComponent=!0},806:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=l(r),O=a,d=m["".concat(b,".").concat(O)]||m[O]||s[O]||c;return r?n.a.createElement(d,o(o({ref:t},i),{},{components:r})):n.a.createElement(d,o({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,b=new Array(c);b[0]=O;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,b[1]=o;for(var i=2;i<c;i++)b[i]=r[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);