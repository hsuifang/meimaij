import{_ as g}from"./AppTable.55cbcbef.js";import{J as y,r as f,o as r,a as l,b as t,h as v,y as s,a4 as x,i as N,t as a,F as P,e as k,j as d,C as w}from"./index.b4d69f2f.js";const C={class:"container pt-4 pb-4 pt-lg-7 pb-lg-7"},O={class:"card"},V={class:"card-body"},B={class:"d-flex justify-content-md-between pr-3 mb-4"},L=t("h2",{class:"h6 text-info"},"\u8A02\u55AE\u6E05\u55AE",-1),T={key:0,class:"text-end mb-2"},j=t("button",{type:"button",class:"btn btn-outline-secondary py-2 px-3"},"\u522A\u9664\u5168\u90E8",-1),E=[j],F={class:"list-unstyled"},$={class:"text-secondary"},q=t("button",{type:"button",class:"btn btn-sm btn-outline-info me-1","data-action":"remove"}," \u7DE8\u8F2F ",-1),A=t("button",{type:"button",class:"btn btn-sm btn-danger text-white","data-action":"remove"}," \u522A\u9664 ",-1),D=d(" \u76EE\u524D\u6709 "),G=d(" \u9805\u8A02\u55AE "),z={__name:"TheOrders",setup(I){const{toggleLoading:_}=w(),b=[{name:"create_at",label:"\u8CFC\u8CB7\u6642\u9593"},{name:"name",label:"\u59D3\u540D"},{name:"product",label:"\u8CFC\u8CB7\u6B3E\u9805"},{name:"total",label:"\u4ED8\u6B3E\u91D1\u984D"},{name:"is_paid",label:"\u662F\u5426\u4ED8\u6B3E"},{name:"action",label:"\u529F\u80FD"}],c=y({data:[]}),p=f({currentPage:1,totalPages:1}),u=async(m=1)=>{try{_(!0);const n=await x(m),{orders:i,pagination:e,success:o}=n.data;o&&(c.data=i,p.value={currentPage:e.current_page,totalPages:e.total_pages})}catch{this.$vErrorNotice()}finally{_(!1)}};return u(),(m,n)=>{const i=g;return r(),l("div",C,[t("div",O,[t("div",V,[v(i,{columns:b,values:c.data,pages:p.value,onChangePage:n[0]||(n[0]=e=>u(e))},{header:s(()=>[t("div",B,[L,c.length>0?(r(),l("div",T,E)):N("",!0)])]),name:s(({data:e})=>[t("p",null,a(e.user.name),1)]),product:s(({data:e})=>[t("ul",F,[(r(!0),l(P,null,k(e.products,(o,h)=>(r(),l("li",{key:h},[d(a(o.product.title)+" ",1),t("span",$,"\u6578\u91CF\uFF1A"+a(o.qty)+" "+a(o.product.unit),1)]))),128))])]),is_paid:s(({data:e})=>[t("p",null,a(e.is_paid?"\u5DF2\u4ED8\u6B3E":"\u672A\u4ED8\u6B3E"),1)]),action:s(()=>[q,A]),caption:s(()=>[t("p",null,[D,t("span",null,a(c.length),1),G])]),_:1},8,["values","pages"])])])])}}};export{z as default};
