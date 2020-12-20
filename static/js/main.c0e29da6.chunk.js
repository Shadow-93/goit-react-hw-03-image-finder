(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{20:function(e,t,a){e.exports=a(65)},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),c=a.n(r),l=a(7),i=a(3),s=a(4),u=a(6),m=a(5),h=a(1),p=a.n(h),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={inputValue:""},e.searchChange=function(t){t.preventDefault(),e.setState({inputValue:t.target.value})},e.searchSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("header",{className:"Searchbar"},o.a.createElement("form",{className:"SearchForm",onSubmit:this.searchSubmit},o.a.createElement("button",{type:"submit",className:"SearchForm-button"},o.a.createElement("span",{className:"SearchForm-button-label"},"Search")),o.a.createElement("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.inputValue,onChange:this.searchChange})))}}]),a}(n.Component);g.props={onSubmit:p.a.func.isRequired};var d=g,f=function(e){var t=e.tags,a=e.webformatURL,n=e.imgId,r=e.onClickItem;return console.log(n),o.a.createElement("li",{className:"ImageGalleryItem"},o.a.createElement("img",{src:a,alt:t,className:"ImageGalleryItem-image",onClick:function(){return r(n)}}))},y=function(e){var t=e.items,a=e.onItemClick;return o.a.createElement("ul",{className:"ImageGallery"},t.map((function(e){var t=e.id,n=e.tags,r=e.webformatURL;return o.a.createElement(f,{key:t,imgId:t,tags:n,webformatURL:r,onClickItem:a})})))};var b=function(e){var t=e.onClickBtn;return o.a.createElement("button",{className:"Button",type:"button",onClick:t},"Load More")},v=a(18),I=a.n(v),w=(a(46),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"spinner"},o.a.createElement(I.a,{type:"Oval",color:"#00BFFF",height:40,width:40,timeout:3e3}))}}]),a}(o.a.Component)),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onCloseItem()},e.backdropClose=function(t){t.currentTarget===t.target&&e.props.onCloseItem()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return o.a.createElement("div",{className:"Overlay",onClick:this.backdropClose},o.a.createElement("div",{className:"Modal"},o.a.createElement("img",{src:this.props.largeImageURL,alt:""}),";"))}}]),a}(n.Component),S=a(19),E=a.n(S),C=function(e,t){return E.a.get("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("17751267-16ded02a741af1cdfc94a2144","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data}))},O=(a(64),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={searchQuery:"",loading:!1,galleryItems:[],page:1,showModal:!1,largeImageURL:"",totalHits:0},e.onScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.nextPage=function(){e.setState((function(e){return{page:e.page+1}}))},e.fetchItems=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({loading:!0}),C(a,n).then((function(t){var a=t.hits,n=t.totalHits;e.setState((function(e){return{galleryItems:[].concat(Object(l.a)(e.galleryItems),Object(l.a)(a)),totalHits:n}}))})).catch((function(e){console.log(e)})).finally((function(){e.setState({loading:!1}),e.onScroll()}))},e.handleSearchApi=function(t){e.setState({searchQuery:t,page:1,galleryItems:[]})},e.openModal=function(t){var a=e.state.galleryItems.find((function(e){return e.id===t}));e.setState({largeImageURL:a.largeImageURL,showModal:!e.state.showModal})},e.closeModal=function(){e.setState({showModal:!e.state.showModal,largeImageURL:""})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery===this.state.searchQuery&&t.page===this.state.page||this.fetchItems()}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.galleryItems,n=e.showModal,r=e.largeImageURL;return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,{onSubmit:this.handleSearchApi}),n&&o.a.createElement(k,{onCloseItem:this.closeModal,onBackdroppClick:this.backdropClose,largeImageURL:r}),a.length>0&&o.a.createElement(y,{items:a,onItemClick:this.openModal}),t&&o.a.createElement(w,null),a.length>0&&!t&&this.state.galleryItems.length!==this.state.totalHits&&o.a.createElement(b,{onClickBtn:this.nextPage}))}}]),a}(n.Component));c.a.render(o.a.createElement(O,{className:"App"}),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.c0e29da6.chunk.js.map