(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{435:function(t,e,n){t.exports=n.p+"img/home.89db1fa.svg"},452:function(t,e,n){"use strict";n.r(e);n(168),n(26),n(62),n(60),n(78),n(58),n(59);var r={head:function(){return{title:this.$i18n.t("home.title")}},data:function(){var t=this;return{showeye:!1,cyrInput:null,cyrRules:[function(e){return!e||(t.cyrstr.test(e)||t.$i18n.t("msg.pass_example"))}]}},computed:{cyrstr:function(){return this.$store.state.cyrstr}},methods:{autoKeyboardLang:function(t){for(var e=["й","ц","у","к","е","н","г","ш","щ","з","х","ъ","ф","ы","в","а","п","р","о","л","д","ж","э","я","ч","с","м","и","т","ь","б","ю","ї","і","є"],n=["q","w","e","r","t","y","u","i","o","p","\\[","\\]","a","s","d","f","g","h","j","k","l",";","'","z","x","c","v","b","n","m",",","\\.","\\]","s","'"],r=function(i){var r=new RegExp(e[i],"mig");t=t.replace(r,(function(a){return a==a.toLowerCase()?n[i]:n[i].toUpperCase()}))},i=0;i<e.length;i++)r(i);return t},convert:function(){var t=this;if(this.cyrInput&&this.cyrstr.test(this.cyrInput)){var e=this.cyrInput.split("").map((function(e){return t.autoKeyboardLang(e)})).join("");try{this.$clipboard(e),this.cyrInput=null,this.showeye=!1,this.$toast.success(this.$i18n.t("msg.pass_clipboard"))}catch(t){this.$toast.error(this.$i18n.t("msg.pass_clipboard_error"))}}else this.$toast.error(this.$i18n.t("msg.pass_undefined"))}}},o=n(133),c=n(134),l=n.n(c),h=n(285),d=n(412),y=n(413),m=n(166),f=n(414),v=n(449),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"pa-3",attrs:{"fill-height":"",fluid:""}},[r("v-row",{attrs:{align:"center",justify:"space-around"}},[r("v-col",{attrs:{cols:"10",xl:"5",lg:"5",md:"5",sm:"8"}},[r("v-img",{staticClass:"d-block ml-auto mr-auto",attrs:{contain:"",src:n(435)}})],1),t._v(" "),r("v-col",{attrs:{cols:"10",xl:"3",lg:"4",md:"5",sm:"8"}},[r("h1",{staticClass:"font-weight-light display-1"},[r("strong",[t._v(" "+t._s(t.$t("home.caption"))+" ")])]),t._v(" "),r("h3",{staticClass:"subtitle-2 my-2"},[t._v("\n        "+t._s(t.$t("home.comment"))+"\n      ")]),t._v(" "),r("v-text-field",{staticClass:"my-5",attrs:{filled:"",rounded:"",clearable:"","persistent-placeholder":"",placeholder:t.$t("home.placeholder"),type:t.showeye?"text":"password","append-icon":t.showeye?"mdi-eye-outline":"mdi-eye-off-outline",rules:t.cyrRules},on:{"click:append":function(e){t.showeye=!t.showeye}},nativeOn:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.convert()}},model:{value:t.cyrInput,callback:function(e){t.cyrInput="string"==typeof e?e.trim():e},expression:"cyrInput"}}),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-btn",{attrs:{depressed:"",rounded:"",outlined:""},on:{click:function(e){return t.convert()}}},[t._v("\n            "+t._s(t.$t("home.button"))+"\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:h.a,VCol:d.a,VContainer:y.a,VImg:m.a,VRow:f.a,VTextField:v.a})}}]);