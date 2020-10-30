(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{343:function(t,e,l){},401:function(t,e,l){"use strict";var a=l(343);l.n(a).a},420:function(t,e,l){"use strict";l.r(e);var a={data:function(){return{text1:"",text2:"",text3:"",text4:"",text5:"",text6:"",text7:"",text8:"",text9:"",text10:"",text11:"",text12:"",text13:"",text14:"",text15:"",text16:""}},methods:{change:function(){console.log(this.text4)}}},n=(l(401),l(46)),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"input-输入框"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#input-输入框"}},[t._v("#")]),t._v(" Input 输入框")]),t._v(" "),l("h2",{attrs:{id:"概述"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),l("p",[t._v("基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。")]),t._v(" "),l("h2",{attrs:{id:"代码示例"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),l("ClientOnly",[l("row",[l("cell",{staticClass:"pr-20",attrs:{span:"12"}},[l("componetTemplate",{attrs:{title:"基础用法",template:"ui/templates/input/1.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Wb-input",{attrs:{placeholder:"type默认为text"},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}}),t._v(" "),l("Wb-input",{attrs:{maxlength:10,placeholder:"通过maxlength设置最大输入长度"},model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}}),t._v(" "),l("Wb-input",{attrs:{placeholder:"通过width设置宽度",width:"200px"},model:{value:t.text3,callback:function(e){t.text3=e},expression:"text3"}})]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("type默认为text")]),t._v(" "),l("p",[t._v("通过placeholder设置未输入时的提示文字")]),t._v(" "),l("p",[t._v("通过maxlength设置最大输入长度")]),t._v(" "),l("p",[t._v("通过width设置宽度, 宽度默认宽度是100%")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"Number 输入框",template:"ui/templates/input/2.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Wb-input",{attrs:{placeholder:"请输入数字",type:"number"},model:{value:t.text4,callback:function(e){t.text4=e},expression:"text4"}})]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("设置type为number即为number输入框，只能输入数字。")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"Icon 按钮",template:"ui/templates/input/3.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Wb-input",{attrs:{placeholder:"请输入文本",icon:"md-calendar"},model:{value:t.text5,callback:function(e){t.text5=e},expression:"text5"}})]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("通过 icon 属性可以在输入框右边加一个图标。")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"文本域",template:"ui/templates/input/4.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Wb-input",{attrs:{type:"textarea",placeholder:"请输入文本"},model:{value:t.text6,callback:function(e){t.text6=e},expression:"text6"}}),t._v(" "),l("Wb-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入文本"},model:{value:t.text7,callback:function(e){t.text7=e},expression:"text7"}})]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("通过设置属性 type 为 textarea 来使用文本域，用于多行输入。")]),t._v(" "),l("p",[t._v("通过设置属性 rows 控制文本域的行数，默认是2行。")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"清空输入框",template:"ui/templates/input/5.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Wb-input",{attrs:{clearable:"",placeholder:"type默认为text"},model:{value:t.text10,callback:function(e){t.text10=e},expression:"text10"}})]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("设置属性 clearable，鼠标悬浮在Input组件上时，显示清除按钮，点击则清空输入框。")])]},proxy:!0}])})],1),t._v(" "),l("cell",{staticClass:"pl-20",attrs:{span:"12"}},[l("componetTemplate",{attrs:{title:"Password 输入框",template:"ui/templates/input/6.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Wb-input",{attrs:{placeholder:"请输入密码",type:"password"},model:{value:t.text11,callback:function(e){t.text11=e},expression:"text11"}})]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("设置type为password即为password输入框，支持切换显示隐藏输入内容。")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"文件选择器",template:"ui/templates/input/7.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Wb-input",{attrs:{type:"file"},on:{"on-change":t.change},model:{value:t.text12,callback:function(e){t.text12=e},expression:"text12"}})]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("设置type为file即为文件选择器，从系统中选择文件。")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"复合型输入",template:"ui/templates/input/8.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Wb-input",{attrs:{placeholder:"请输入网址"},model:{value:t.text13,callback:function(e){t.text13=e},expression:"text13"}},[l("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("http://")]),t._v(" "),l("span",{attrs:{slot:"append"},slot:"append"},[t._v(".com")])]),t._v(" "),l("Wb-input",{attrs:{placeholder:"日活"},model:{value:t.text14,callback:function(e){t.text14=e},expression:"text14"}},[l("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("http://")]),t._v(" "),l("span",{attrs:{slot:"append"},slot:"append"},[l("Icon",{attrs:{type:"md-search"}})],1)])]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("通过前置prepend和后置append的 slot 可以实现复合型的输入框。")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"适应文本高度的文本域",template:"ui/templates/input/9.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("wb-input",{attrs:{type:"textarea",autosize:"",placeholder:"请输入文本"},model:{value:t.text8,callback:function(e){t.text8=e},expression:"text8"}}),t._v(" "),l("wb-input",{attrs:{type:"textarea",autosize:{min:4,max:6},placeholder:"请输入文本"},model:{value:t.text9,callback:function(e){t.text9=e},expression:"text9"}})]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("设置属性 autosize，文本域会自动适应高度的变化。")]),t._v(" "),l("p",[t._v("autosize也可以设定为一个对象，指定最小行数和最大行数。")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"禁用状态/只读状态",template:"ui/templates/input/10.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("wb-input",{attrs:{placeholder:"请输入文本",disabled:""}}),t._v(" "),l("wb-input",{attrs:{type:"textarea",placeholder:"请输入文本",disabled:""}}),t._v(" "),l("wb-input",{attrs:{placeholder:"请输入文本",readonly:""}}),t._v(" "),l("wb-input",{attrs:{type:"textarea",placeholder:"请输入文本",readonly:""}})]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("设置属性 disabled，文本域会禁止输入，不能获取到焦点，并且显示为disabled状态。")]),t._v(" "),l("p",[t._v("设置属性 readonly，文本域会不能输入。")])]},proxy:!0}])})],1)],1)],1),t._v(" "),l("h2",{attrs:{id:"api"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),l("h3",{attrs:{id:"props"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入的值, 可以使用v-model实现数据的双向绑定")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number, String, File")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("类型，可选值有"),l("code",[t._v("password")]),t._v("、"),l("code",[t._v("number")]),t._v("、"),l("code",[t._v("text")]),t._v("、"),l("code",[t._v("textarea")]),t._v("、"),l("code",[t._v("file")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("text")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("placeholder")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("提示语")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("maxlength")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("限制输入的内容长度")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("右侧的小图标")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁止输入")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("readonly")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否只读")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("clearable")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示清空按钮")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("rows")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("文本域的行数")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("accept")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("过滤选择的文件类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("autocomplete")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否阻止浏览器自动填充，可选值有on/off")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("原生的name属性")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("''")])])])]),t._v(" "),l("h3",{attrs:{id:"events"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("on-click")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("点击icon时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(event) => void")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("on-enter")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("焦点在input, 按下enter键触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(event) => void")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("on-focus")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("获取焦点时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(event) => void")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("on-blur")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("失去焦点时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(event) => void")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("on-input")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("输入时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(value, event) => void")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("on-change")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("值改变时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(value, event) => void")])])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);