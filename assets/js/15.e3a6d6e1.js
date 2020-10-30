(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{342:function(t,e,a){},400:function(t,e,a){"use strict";var l=a(342);a.n(l).a},422:function(t,e,a){"use strict";a.r(e);var l={data:function(){return{value:null}},methods:{disabledDate:function(t){if(3===t.getDate())return!0}}},i=(a(400),a(46)),v=Object(i.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"datepicker-日期选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datepicker-日期选择器"}},[t._v("#")]),t._v(" DatePicker 日期选择器")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。")]),t._v(" "),a("h2",{attrs:{id:"代码示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),a("ClientOnly",[a("row",[a("cell",{staticClass:"pr-20",attrs:{span:"12"}},[a("componetTemplate",{attrs:{title:"基础用法",template:"ui/templates/datePicker/1.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-input-date-picker",{model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("选个单个日期")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"单选+多选+区间选择",template:"ui/templates/datePicker/2.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-input-date-picker"),t._v(" "),a("Wb-input-date-picker",{attrs:{model:"multiple"}}),t._v(" "),a("Wb-input-date-picker",{attrs:{model:"range"}})]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("可以选择单选single、多选multiple、区间选择range，默认为 single。 ")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"日期面板弹出的朝向",template:"ui/templates/datePicker/3.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-input-date-picker",{attrs:{position:"bottomLeft"}}),t._v(" "),a("Wb-input-date-picker",{attrs:{position:"bottomRight"}}),t._v(" "),a("Wb-input-date-picker",{attrs:{position:"topLeft"}}),t._v(" "),a("Wb-input-date-picker",{attrs:{position:"topRight"}})]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("设置position，可以选择单选bottomLeft、bottomRight、topLeft、topRight，默认为 bottomLeft。 ")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"行内模式",template:"ui/templates/datePicker/4.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("div",{staticClass:"flex"},[a("date-picker"),t._v(" "),a("date-picker",{attrs:{format:"YYYY-MM-DD HH:mm",model:"multiple"}}),t._v(" "),a("date-picker",{attrs:{model:"range"}})],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("同样支持v-model、range、format等配置")])]},proxy:!0}])})],1),t._v(" "),a("cell",{staticClass:"pl-20",attrs:{span:"12"}},[a("componetTemplate",{attrs:{title:"日期类型",template:"ui/templates/datePicker/5.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-input-date-picker",{attrs:{format:"YYYY",placeholder:"请选择年份"}}),t._v(" "),a("Wb-input-date-picker",{attrs:{format:"YYYY-MM",placeholder:"请选择月份"}}),t._v(" "),a("Wb-input-date-picker",{attrs:{placeholder:"请选择日期"}}),t._v(" "),a("Wb-input-date-picker",{attrs:{format:"YYYY-MM-DD HH:mm",placeholder:"请选择时间"}}),t._v(" "),a("Wb-input-date-picker",{attrs:{format:"YYYY-MM-DD HH:mm:ss",placeholder:"请选择时间"}})]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("通过 format 控制日期类型： ")]),t._v(" "),a("p",[t._v("YYYY 年份、YYYY-MM 月份、YYYY-MM-DD 日期、 YYYY-MM-DD HH:mm 时间精确到分钟、YYYY-MM-DD HH:mm:ss 时间精确到秒。")]),t._v(" "),a("p",[t._v("默认为 YYYY-MM-DD。")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"禁用部分时间",template:"ui/templates/datePicker/6.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("div",{staticClass:"mt-20 first"},[t._v("可选择的时间范围为：2020-7-1 到 2020-8-31")]),t._v(" "),a("Wb-input-date-picker",{attrs:{"min-date":new Date(2020,7,1),"max-date":new Date(2020,8,31)}}),t._v(" "),a("div",{staticClass:"mt-20"},[t._v("选择的时间范围不超过3天：")]),t._v(" "),a("Wb-input-date-picker",{attrs:{"max-range":"3D",model:"range"}}),t._v(" "),a("div",{staticClass:"mt-20"},[t._v("今天不能被选择：")]),t._v(" "),a("Wb-input-date-picker",{attrs:{disable:[new Date]}}),t._v(" "),a("div",{staticClass:"mt-20"},[t._v("只能选择今天：")]),t._v(" "),a("Wb-input-date-picker",{attrs:{enable:[new Date]}}),t._v(" "),a("div",{staticClass:"mt-20"},[t._v("禁止每个月 3 号：")]),t._v(" "),a("Wb-input-date-picker",{attrs:{"disabled-date":t.disabledDate}})]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("可以通过多种方式实现时间禁用。")]),t._v(" "),a("p",[t._v("minDate可选的最小时间，maxDate可选的最大时间。")]),t._v(" "),a("p",[t._v("maxRange：需要配合range使用，设置可选时间范围，格式为 2D（2天）、2M（2个月）、2Y（2年）")]),t._v(" "),a("p",[t._v("disable和enable: 子项可以是时间（Date对象）、函数、对象的数组。")]),t._v(" "),a("p",[t._v("以disable举例：")]),t._v(" "),a("p",[t._v("当子项是Date对象时，禁用此日期；")]),t._v(" "),a("p",[t._v("当子项是函数时，参数为日期，通过函数执行结果判断是否禁用；")]),t._v(" "),a("p",[t._v("当子项是{from, to} 格式的对象时，表示从from日期到to日期都禁用")]),t._v(" "),a("p",[t._v("disabledDate: 禁用函数，参数为日期，通过函数执行结果判断是否禁用")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"禁用和只读",template:"ui/templates/datePicker/7.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-input-date-picker",{attrs:{value:new Date,disabled:""}}),t._v(" "),a("Wb-input-date-picker",{attrs:{value:new Date,readonly:""}})]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("设置readonly 只读")]),t._v(" "),a("p",[t._v("设置disabled 禁用")])]},proxy:!0}])})],1)],1)],1),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"inputdatepicker-和-datepicker-共有的-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputdatepicker-和-datepicker-共有的-props"}},[t._v("#")]),t._v(" InputDatePicker 和 DatePicker 共有的 Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("日期的值，可以使用v-model实现数据的双向绑定")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Date、Array、Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("model")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("模式，可选值有"),a("code",[t._v("single")]),t._v("、"),a("code",[t._v("range")]),t._v("、 "),a("code",[t._v("multiple")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("single")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("format")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("时间格式：YYYY-MM-DD HH:mm:ss")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("YYYY-MM-DD")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("maxDate")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最大可选时间")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("minDate")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最小可选时间")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("maxRange")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最大可选区间，格式为 /\\d+[DMY]/")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disable")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("禁止的时间，格式可以为：[Date, Function, {from: Date, to: Date}]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("enable")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("可用的时间，格式可以为：[Date, Function, {from: Date, to: Date}]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabledDate")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("禁止时间函数，参数为对应的时间 Date，执行结果为true则禁止")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rangeSeparator")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("区间选择中间的分割符号,只在 model 为 range 时生效")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("～")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("showConfirm")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示确认按钮，在多选强制为true，其他情况默认为 false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onlyMonth")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否只选择月份(兼容老的API，尽量使用 format代替)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("enableTime")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示时间(兼容老的API，尽量使用 format代替)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("enableSeconds")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示秒(兼容老的API，尽量使用 format代替)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])]),t._v(" "),a("h3",{attrs:{id:"inputdatepicker-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputdatepicker-props"}},[t._v("#")]),t._v(" InputDatePicker Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("placeholder")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("未选择时间时的提示语")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("请选择日期")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入框左边的 icon")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("calendar")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("clearable")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示清除 icon")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("position")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("弹窗的位置，会根据窗口大小自适应，可选值"),a("code",[t._v("bottomLeft")]),t._v(" "),a("code",[t._v("bottomRight")]),t._v(" "),a("code",[t._v("topLeft")]),t._v(" "),a("code",[t._v("topRight")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("bottomLeft")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("readonly")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否只读")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])]),t._v(" "),a("h3",{attrs:{id:"inputdatepicker-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputdatepicker-events"}},[t._v("#")]),t._v(" InputDatePicker Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-input")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(value) => void")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-change")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("值改变时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(value) => void")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-enter")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("焦点在input, 按下enter键触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(event) => void")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-focus")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("获取焦点时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(event) => void")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-blur")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("失去焦点时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(event) => void")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-blur")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("失去焦点时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(event) => void")])])])]),t._v(" "),a("h3",{attrs:{id:"datepicker-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datepicker-props"}},[t._v("#")]),t._v(" DatePicker Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("inline")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否脱离文档流，ture则用relative定位，false则用absolute定位")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])])])]),t._v(" "),a("h3",{attrs:{id:"datepicker-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datepicker-events"}},[t._v("#")]),t._v(" DatePicker Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-change")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("值改变时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(value) => void")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-finish")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选择结束触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("() => void")])])])])],1)}),[],!1,null,null,null);e.default=v.exports}}]);