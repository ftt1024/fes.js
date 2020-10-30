(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{340:function(t,e,l){},398:function(t,e,l){"use strict";var i=l(340);l.n(i).a},435:function(t,e,l){"use strict";l.r(e);var i={data:function(){return{primaryTime:""}},methods:{disabledHours:function(){return[2]},disabledMinutes:function(t){if("03"===t)return[3,4,5]},disabledSeconds:function(t,e){if("04"===t&&"05"===e)return[3,4]}}},a=(l(398),l(46)),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"timepicker-时间选择"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#timepicker-时间选择"}},[t._v("#")]),t._v(" TimePicker 时间选择")]),t._v(" "),l("h2",{attrs:{id:"概述"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),l("p",[t._v("基础组件，用于选择小时、分钟、秒。")]),t._v(" "),l("h2",{attrs:{id:"代码示例"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),l("ClientOnly",[l("row",[l("cell",{staticClass:"pr-20",attrs:{span:"12"}},[l("componetTemplate",{attrs:{title:"基础用法",template:"ui/templates/timePicker/1.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("time-picker",{attrs:{clearable:""},model:{value:t.primaryTime,callback:function(e){t.primaryTime=e},expression:"primaryTime"}})]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("基础用法")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"时间间隔",template:"ui/templates/timePicker/2.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("time-picker",{attrs:{"hour-step":2,"minute-step":2,"second-step":2}})]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("设置小时选项间隔、分钟选项间隔、秒选项间隔")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"附加内容",template:"ui/templates/timePicker/3.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("time-picker",[l("template",{slot:"addon"},[l("p",[t._v("hello world")])])],2)]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("在 TimePicker 选择框底部显示自定义的内容。")])]},proxy:!0}])})],1),t._v(" "),l("cell",{staticClass:"pl-20",attrs:{span:"12"}},[l("componetTemplate",{attrs:{title:"时间类型",template:"ui/templates/timePicker/4.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("time-picker",{attrs:{format:"HH:mm:ss"}}),t._v(" "),l("time-picker",{attrs:{format:"HH:mm"}}),t._v(" "),l("time-picker",{attrs:{format:"mm:ss"}})]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("通过 format 控制时间类型： ")]),t._v(" "),l("p",[t._v("默认为 HH:mm:ss，可配置为其他格式，HH:mm、mm:ss 等等")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"禁用部分时间",template:"ui/templates/timePicker/5.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("time-picker",{attrs:{"disabled-hours":t.disabledHours,"disabled-minutes":t.disabledMinutes,"disabled-seconds":t.disabledSeconds}})]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("通过disabledHours，disabledMinutes，disabledSeconds设置禁止的部分时间")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"禁用",template:"ui/templates/timePicker/6.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("time-picker",{attrs:{disabled:""}})]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("设置disabled 禁用")])]},proxy:!0}])})],1)],1)],1),t._v(" "),l("h2",{attrs:{id:"api"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),l("h3",{attrs:{id:"timepicker-props"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#timepicker-props"}},[t._v("#")]),t._v(" TimePicker Props")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("日期的值，可以使用v-model实现数据的双向绑定")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("placeholder")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("未选择时间时的提示语")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("请选择时间")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("readonly")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否只读")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入框左边的 icon")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("clock-circle-o")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("format")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("时间格式：HH:mm:ss")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("HH:mm:ss")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("clearable")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示清除 icon")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("hourStep")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("小时选项间隔")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("minuteStep")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("分钟选项间隔")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("secondStep")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("秒选项间隔")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("disabledHours")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("禁止选择部分小时选项, function()")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("disabledMinutes")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("禁止选择部分分钟选项, function(selectedHour)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("disabledMinutes")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("禁止选择部分秒选项, function(selectedHour, selectedMinute)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("null")])])])]),t._v(" "),l("h3",{attrs:{id:"timepicker-events"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#timepicker-events"}},[t._v("#")]),t._v(" TimePicker Events")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("选择后触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(value) => void")])])])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);