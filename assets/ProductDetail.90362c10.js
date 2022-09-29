var j=Object.defineProperty,z=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var $=(c,a,i)=>a in c?j(c,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):c[a]=i,P=(c,a)=>{for(var i in a||(a={}))E.call(a,i)&&$(c,i,a[i]);if(C)for(var i of C(a))G.call(a,i)&&$(c,i,a[i]);return c},B=(c,a)=>z(c,R(a));import{u as O,l as H,r as y,m as J,p as K,q as Q,s as N,o as m,a as u,b as t,g as b,t as r,F as x,e as V,h as n,j as W,w as p,v as X,f as _,x as v,i as Y,n as I,y as S,z as Z,A as tt,B as et,C as st,D as ot,_ as at,k as nt}from"./index.e493b80b.js";const it={class:"container py-5"},lt={class:"mb-5"},rt={"aria-label":"breadcrumb"},ct={class:"breadcrumb"},dt={class:"breadcrumb-item"},mt={class:"breadcrumb-item active","aria-current":"page"},ut={class:"product-detail mb-3"},pt={class:"product-detail-main mb-3 mb-lg-5"},_t={class:"product-detail-cover"},ht={class:"product-detail-image mb-2"},bt=["src"],vt={class:"product-detail-thumbnails"},gt=["onClick"],ft=["src"],wt={class:"product-detail-content"},yt={class:"py-5 ps-lg-5 border-bottom"},xt={class:"mb-1"},kt={class:"mb-3"},Ct={class:"text-primary mb-3 mb-lg-4"},$t={class:"fs-5 text-info"},Pt={class:"text-info mb-4"},Bt={class:"d-lg-flex"},Nt={class:"d-flex align-items-center mb-3 mb-lg-0"},Vt=t("label",{for:"input-quantity",class:"me-2"},"\u6578\u91CF",-1),It={class:"ps-lg-5 py-4"},St={class:"py-1 text-gray-500 fs-7"},Tt={class:"py-1 text-gray-500 fs-7"},Dt={key:0,class:"py-1 text-gray-500 fs-7"},Ft={class:"product-detail-sub"},Ut={class:"d-flex mb-3 mb-lg-5 border-bottom"},qt=t("p",{class:"py-3 fw-bold"},"\u8AAA\u660E ---",-1),At=t("p",{class:"py-3 fw-bold"},"\u5167\u5BB9 ---",-1),Lt=t("p",{class:"py-3 fw-bold"},"\u898F\u683C ---",-1),Mt={class:"py-4 d-flex border-bottom"},jt=t("img",{src:"https://mdbcdn.b-cdn.net/img/new/avatars/1.webp",class:"rounded-circle",style:{width:"80px"},alt:"Avatar"},null,-1),zt={class:"ms-3"},Rt={class:"d-flex align-items-center mb-2"},Et=t("p",{class:"fw-bold"},"\u53F0\u4E2D\u9673\u5C0F\u59D0",-1),Gt={class:"px-2"},Ot=t("p",{class:"mb-1"},"\u904E\u5F80\u6C92\u6709\u4F7F\u7528\u904E\u8A72\u7522\u54C1\uFF0C\u60F3\u8AAA\u8A66\u8A66\u770B\uFF0C\u6C92\u60F3\u5230\u6211\u5BB6\u7684\u81ED\u5BF6\u8C9D\u8D85\u559C\u6B61\uFF01",-1),Ht=t("p",{class:"text-info"},"2021/03/06",-1),Jt={class:"py-4 d-flex border-bottom"},Kt=t("img",{src:"https://mdbcdn.b-cdn.net/img/new/avatars/1.webp",class:"rounded-circle",style:{width:"80px"},alt:"Avatar"},null,-1),Qt={class:"ms-3"},Wt={class:"d-flex align-items-center mb-2"},Xt=t("p",{class:"fw-bold"},"\u53F0\u4E2D\u738B\u5C0F\u59D0",-1),Yt={class:"px-2"},Zt=t("p",{class:"mb-1"},"\u63A8\u85A6\u7D66\u60F3\u8CFC\u8CB7\u7684\u4E86\uFF0C\u6211\u5BB6\u5BF6\u8C9D\u662F\u898B\u8B49\u8005 :)",-1),te=t("p",{class:"text-info"},"2021/05/06",-1),ee={class:"py-5 py-lg-8 bg-light"},se={class:"container"},oe=t("h2",{class:"border-start border-primary border-4 mb-3 mb-lg-4 ps-3"},"\u4F60\u53EF\u80FD\u6709\u8208\u8DA3",-1),le={__name:"ProductDetail",setup(c){const{toggleLoading:a}=st(),{addNotifications:i}=ot(),g=O(),T=H(),d=y("discript");g.products.length||g.fetchValidProducts();const D=J(),f=y(1),s=y({}),F=async h=>{a(!0);try{const e=await Z(h),{success:w,product:o}=e.data;w?s.value=B(P({},o),{imagesUrl:[o.imageUrl,...o.imagesUrl],mainImage:o.imageUrl}):i({message,type:"danger"})}catch(e){i({message:e.response.message,type:"danger"})}a(!1)},{toggleFavorite:U,initFavorite:q,isFavorite:k}=K();return Q(()=>{q(s.id)}),F(D.params.id),(h,e)=>{const w=tt,o=at,A=nt,L=N("swiper-slide"),M=N("swiper");return m(),u(x,null,[t("section",it,[t("div",lt,[t("nav",rt,[t("ol",ct,[t("li",dt,[t("a",{href:"#",onClick:e[0]||(e[0]=b(l=>h.$router.push("/"),["prevent"]))},"\u9996\u9801")]),t("li",mt,r(h.$route.meta.title),1)])])]),t("div",ut,[t("div",pt,[t("div",_t,[t("div",ht,[t("img",{alt:"mainImage",src:s.value.mainImage},null,8,bt)]),t("ul",vt,[(m(!0),u(x,null,V(s.value.imagesUrl,l=>(m(),u("li",{class:"product-detail-thumbnail cursor-pointer",key:l,onClick:ae=>s.value.mainImage=l},[t("img",{src:l,class:"obj-fit-contain",alt:"thumbnailImg"},null,8,ft)],8,gt))),128))])]),t("div",wt,[t("div",yt,[t("h2",xt,r(s.value.title),1),t("div",kt,[n(w,{rate:+s.value.rate||0},null,8,["rate"])]),t("h3",Ct,[W(" NT$ "+r(s.value.price)+" ",1),t("del",$t,"NT$ "+r(s.value.origin_price),1)]),t("p",Pt,r(s.value.content),1),t("div",Bt,[t("div",Nt,[Vt,p(t("input",{type:"number",name:"quantity",min:"1",id:"input-quantity",class:"form-control w-auto me-2","onUpdate:modelValue":e[1]||(e[1]=l=>f.value=l)},null,512),[[X,f.value]])]),t("button",{type:"button",class:"btn btn-primary text-white me-2",onClick:e[2]||(e[2]=l=>_(T).addToCart({productId:s.value.id,qty:f.value}))}," \u52A0\u5165\u8CFC\u7269\u8ECA"),t("button",{type:"button",class:"btn btn-outline-info",onClick:e[3]||(e[3]=b(l=>_(U)(s.value),["stop"]))},[p(n(o,{name:"favorite-fill",width:"24",height:"24",normal:"#ea8484"},null,512),[[v,_(k)]]),p(n(o,{name:"favorite",width:"24",height:"24"},null,512),[[v,!_(k)]])])])]),t("ul",It,[t("li",St,"\u7DE8\u865F:"+r(s.value.id),1),t("li",Tt,"\u5206\u985E: "+r(s.value.category),1),s.value.statusType?(m(),u("li",Dt," \u6A19\u7C64: "+r(s.value.statusType),1)):Y("",!0)])])]),t("div",Ft,[t("nav",null,[t("ul",Ut,[t("li",{onClick:e[5]||(e[5]=l=>d.value="discript"),class:I(["h4 me-6 pb-3 fw-bold border-bottom border-4",d.value==="discript"?"border-primary":"border-transparent"])},[t("a",{href:"#",class:"text-info",onClick:e[4]||(e[4]=b(()=>{},["prevent"]))},"\u7522\u54C1\u8AAA\u660E")],2),t("li",{class:I(["h4 pb-3 fw-bold border-bottom border-4",d.value==="comment"?"border-primary":"border-transparent"]),onClick:e[7]||(e[7]=l=>d.value="comment")},[t("a",{href:"#",class:"text-info",onClick:e[6]||(e[6]=b(()=>{},["prevent"]))},"\u5546\u54C1\u8A55\u50F9")],2)])]),p(t("div",null,[qt,t("p",null,r(s.value.description),1),At,t("p",null,r(s.value.content),1),Lt,t("p",null,r(s.value.spec),1)],512),[[v,d.value==="discript"]]),p(t("ul",null,[t("li",Mt,[jt,t("div",zt,[t("div",Rt,[Et,t("div",Gt,[n(o,{name:"star",width:"16",height:"16",normal:"orange"}),n(o,{name:"star",width:"16",height:"16",normal:"orange"}),n(o,{name:"star",width:"16",height:"16",normal:"orange"}),n(o,{name:"star",width:"16",height:"16",normal:"orange"}),n(o,{name:"star",width:"16",height:"16",normal:"orange"})])]),Ot,Ht])]),t("li",Jt,[Kt,t("div",Qt,[t("div",Wt,[Xt,t("div",Yt,[n(o,{name:"star",width:"16",height:"16",normal:"orange"}),n(o,{name:"star",width:"16",height:"16",normal:"orange"}),n(o,{name:"star",width:"16",height:"16",normal:"orange"}),n(o,{name:"star",width:"16",height:"16",normal:"orange"}),n(o,{name:"star",width:"16",height:"16",normal:"orange"})])]),Zt,te])])],512),[[v,d.value==="comment"]])])])]),t("section",ee,[t("div",se,[oe,n(M,{autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0,breakpoints:{320:{slidesPerView:2,spaceBetween:20},480:{slidesPerView:3,spaceBetween:20},640:{slidesPerView:4,spaceBetween:20},800:{slidesPerView:4,spaceBetween:20}}},{default:S(()=>[(m(!0),u(x,null,V(_(g).randomProductsByNum(9),l=>(m(),et(L,{key:l},{default:S(()=>[n(A,{product:l},null,8,["product"])]),_:2},1024))),128))]),_:1})])])],64)}}};export{le as default};
