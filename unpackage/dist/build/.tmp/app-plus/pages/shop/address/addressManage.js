(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/address/addressManage"],{"0cd2":function(e,a,t){"use strict";t.r(a);var i=t("0d23"),s=t.n(i);for(var l in i)"default"!==l&&function(e){t.d(a,e,function(){return i[e]})}(l);a["default"]=s.a},"0d23":function(e,a,t){"use strict";(function(e,i){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=r(t("7d65")),l=r(t("ea2d")),u=r(t("b8f7"));function r(e){return e&&e.__esModule?e:{default:e}}var n={data:function(){return{addressData:{name:"",mobile:"",data:{},addressName:"在地图选择",address:"",area:"",default:!1},itemHeight:"height: ".concat(e.upx2px(88),"px;"),showPicker:!1,pickerValue:[0,0,0],OKcss:!1,NowAddress:"点击这里选择地址~",provinceDataList:[{label:"北京市",value:"1"},{label:"天津市",value:"2"},{label:"南京",value:"3"},{label:"清新市",value:"4"}],cityDataList:[{label:"清远市",value:"5"},{label:"江门市",value:"6"}],areaDataList:[{label:"广州市",value:"7"},{label:"深圳市",value:"8"}]}},created:function(){this.init()},props:{pickerValueDefault:{type:Array,default:function(){return[0,0,0]}},themeColor:"red"},watch:{pickerValueDefault:function(){this.init()}},onLoad:function(a){var t="新增收货地址";"edit"===a.type&&(t="编辑收货地址",this.addressData=JSON.parse(a.data)),this.manageType=a.type,e.setNavigationBarTitle({title:t})},methods:{init:function(){this.handPickValueDefault(),this.provinceDataList=s.default,this.cityDataList=l.default[this.pickerValueDefault[0]],this.areaDataList=u.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]],this.pickerValue=this.pickerValueDefault},handPickValueDefault:function(){this.pickerValueDefault!==[0,0,0]&&(this.pickerValueDefault[0]>s.default.length-1&&(this.pickerValueDefault[0]=s.default.length-1),this.pickerValueDefault[1]>l.default[this.pickerValueDefault[0]].length-1&&(this.pickerValueDefault[1]=l.default[this.pickerValueDefault[0]].length-1),this.pickerValueDefault[2]>u.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length-1&&(this.pickerValueDefault[2]=u.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length-1))},pickerChange:function(e){var a=e.mp.detail.value;if(this.pickerValue[0]!==a[0]){this.cityDataList=[],this.areaDataList=[];var t=l.default[a[0]],i=u.default[a[0]][0];a[1]=0,a[2]=0;for(var s=0;s<t.length;s++)this.cityDataList.push(t[s]);for(var r=0;r<i.length;r++)this.areaDataList.push(i[r])}else if(this.pickerValue[1]!==a[1]){var n=u.default[a[0]][a[1]];a[2]=0,this.areaDataList=n}this.pickerValue=a},maskTap:function(){this.showPicker=!1},pickerCancel:function(){this.showPicker=!1},pickerConfirm:function(){var e=this.pickerValue[0],a=this.pickerValue[1],t=this.pickerValue[2];this.NowAddress=this.provinceDataList[e].label+"-"+this.cityDataList[a].label+"-"+this.areaDataList[t].label,this.OKcss=!0,this.addressData.addressName=this.NowAddress,this.showPicker=!1},showOpen:function(){this.showPicker=!0},confirm:function(){var a=this.addressData;console.log(i("111"," at pages\\shop\\address\\addressManage.vue:218")),a.name?/(^1[3|4|5|7|8][0-9]{9}$)/.test(a.mobile)?a.address?a.area?(console.log(i("222"," at pages\\shop\\address\\addressManage.vue:235")),e.showLoading({title:"正在提交"}),console.log(i("333"," at pages\\shop\\address\\addressManage.vue:239")),console.log(i(a," at pages\\shop\\address\\addressManage.vue:241")),e.setStorage({key:"saveAddress",data:a,success:function(){e.hideLoading(),e.navigateBack()}})):this.$api.msg("请填写门牌号信息"):this.$api.msg("请在地图选择所在位置"):this.$api.msg("请输入正确的手机号码"):this.$api.msg("请填写收货人姓名")}}};a.default=n}).call(this,t("6e42")["default"],t("0de9")["default"])},"1b08":function(e,a,t){},"3c5e":function(e,a,t){"use strict";t.r(a);var i=t("4170"),s=t("0cd2");for(var l in s)"default"!==l&&function(e){t.d(a,e,function(){return s[e]})}(l);t("7ca9");var u=t("2877"),r=Object(u["a"])(s["default"],i["a"],i["b"],!1,null,null,null);a["default"]=r.exports},4170:function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement;e._self._c},s=[];t.d(a,"a",function(){return i}),t.d(a,"b",function(){return s})},"74f1":function(e,a,t){"use strict";(function(e){t("8b92"),t("921b");i(t("66fd"));var a=i(t("3c5e"));function i(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("6e42")["createPage"])},"7ca9":function(e,a,t){"use strict";var i=t("1b08"),s=t.n(i);s.a}},[["74f1","common/runtime","common/vendor"]]]);