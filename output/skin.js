// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: virtualtour.ggsk
// Generated 2021-04-06T23:56:59

function pano2vrSkin(player,base) {
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('opt_hotspot_preview', 2, true);
	player.addVariable('vis_userdata', 2, false);
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('vis_video_popup_file', 2, false);
	player.addVariable('vis_video_popup_url', 2, false);
	player.addVariable('vis_video_popup_vimeo', 2, false);
	player.addVariable('vis_video_popup_youtube', 2, false);
	player.addVariable('vis_website', 2, false);
	player.addVariable('vis_timer', 2, false);
	player.addVariable('opt_zoom', 2, true);
	player.addVariable('opt_autorotate', 2, true);
	player.addVariable('opt_info', 2, false);
	player.addVariable('opt_thumbnail', 2, true);
	player.addVariable('vis_thumbnail_menu_show', 2, false);
	player.addVariable('opt_projection', 2, true);
	player.addVariable('opt_gyro', 2, true);
	player.addVariable('opt_fullscreen', 2, true);
	player.addVariable('opt_autohide', 2, false);
	player.addVariable('vis_thumbnail_menu_mobile', 2, false);
	player.addVariable('pos_autorotate', 1, 0);
	player.addVariable('pos_information', 1, 0);
	player.addVariable('pos_thumbnail', 1, 0);
	player.addVariable('pos_projection', 1, 0);
	player.addVariable('pos_gyro', 1, 0);
	player.addVariable('pos_fullscreen', 1, 0);
	player.addVariable('pos_controller', 1, 0);
	player.addVariable('pos_enter_vr', 1, 0);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._screentint_info=document.createElement('div');
		el.ggId="screentint_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_info.style[domTransition]='';
				if (me._screentint_info.ggCurrentLogicStateVisible == 0) {
					me._screentint_info.style.visibility=(Number(me._screentint_info.style.opacity)>0||!me._screentint_info.style.opacity)?'inherit':'hidden';
					me._screentint_info.ggVisible=true;
				}
				else {
					me._screentint_info.style.visibility="hidden";
					me._screentint_info.ggVisible=false;
				}
			}
		}
		me._screentint_info.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
		}
		me._screentint_info.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_info);
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=-18;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 36px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 288px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_website') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_userdata') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._controller.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._controller.style.bottom='-100px';
					me._controller.ggUpdatePosition(true);
				}
				else {
					me._controller.ggDx=-18;
					me._controller.style.bottom='36px';
					me._controller.ggUpdatePosition(true);
				}
			}
		}
		me._controller.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._controller.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._controller.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._controller.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._controller.ggCurrentLogicStateAlpha == 0) {
					me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
					me._controller.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._controller.style.opacity == 0.0) { me._controller.style.visibility="hidden"; } }, 505);
					me._controller.style.opacity=0;
				}
			}
		}
		me._controller.onmouseover=function (e) {
			me.elementMouseOver['controller']=true;
		}
		me._controller.onmouseout=function (e) {
			me.elementMouseOver['controller']=false;
		}
		me._controller.ontouchend=function (e) {
			me.elementMouseOver['controller']=false;
		}
		me._controller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._controller_slider=document.createElement('div');
		el.ggId="controller_slider";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller_slider.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_slider.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_controller') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_controller') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_controller') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_controller') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_controller') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_controller') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('pos_controller') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('pos_controller') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('pos_controller') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller_slider.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller_slider.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller_slider.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._controller_slider.ggCurrentLogicStatePosition == 0) {
					me._controller_slider.style.left='128px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 1) {
					me._controller_slider.style.left='112px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 2) {
					me._controller_slider.style.left='96px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 3) {
					me._controller_slider.style.left='80px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 4) {
					me._controller_slider.style.left='64px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 5) {
					me._controller_slider.style.left='48px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 6) {
					me._controller_slider.style.left='32px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 7) {
					me._controller_slider.style.left='16px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 8) {
					me._controller_slider.style.left='0px';
					me._controller_slider.style.top='0px';
				}
				else {
					me._controller_slider.style.left='0px';
					me._controller_slider.style.top='0px';
				}
			}
		}
		me._controller_slider.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._controller_slider.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._controller_slider.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._controller_slider.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._controller_slider.ggCurrentLogicStateAlpha == 0) {
					me._controller_slider.style.visibility=me._controller_slider.ggVisible?'inherit':'hidden';
					me._controller_slider.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._controller_slider.style.opacity == 0.0) { me._controller_slider.style.visibility="hidden"; } }, 505);
					me._controller_slider.style.opacity=0;
				}
			}
		}
		me._controller_slider.ggUpdatePosition=function (useTransition) {
		}
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIGVuYWJsZS1iYWNrZ3JvdW'+
			'5kPSJuZXcgLTMzNDUuMjUgLTI2MDYgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4PSIwcHgiIHZpZXdCb3g9Ii0zMzQ1LjI1IC0yNjA2IDMyIDMyIj4KIDxnIGlkPSJMYXllcl8xIi8+CiA8ZyBpZD0iRWJlbmVfMSI+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iIzFBMTcxQiIgZD0iTS0zMzI5LjI0OS0yNjAyLjVjLTYuODkyLDAtMTIuNSw1LjYwNy0xMi41LDEyLjVzNS42MDcsMTIuNSwxMi41LDEyLjVjNi44OTMsMCwxMi41LTUuNjA3LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5'+
			'O1MtMzMyMi4zNTUtMjYwMi41LTMzMjkuMjQ5LTI2MDIuNXogTS0zMzI5LjI0OS0yNTgwLjEzMmMtNS40NDEsMC05Ljg3LTQuNDI3LTkuODctOS44NjhjMC01LjQ0Miw0LjQyOS05Ljg2OSw5Ljg3LTkuODY5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzUuNDQyLDAsOS44Nyw0LjQyOCw5Ljg3LDkuODY5Qy0zMzE5LjM3OC0yNTg0LjU2LTMzMjMuODA1LTI1ODAuMTMyLTMzMjkuMjQ5LTI1ODAuMTMyeiIvPgogICAgPHBhdGggZmlsbD0iIzFBMTcxQiIgZD0iTS0zMzIxLjU4OS0yNTkzLjgwOGMtMC45LTEuMjYtMi4zOTktMS40MjItMy42MDQtMS40MjJoLTEuNzA0di0xLjY0NmMwLTAuNj'+
			'Y4LTAuNTQyLTEuMjA5LTEuMjEtMS4yMDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoLTIuMjgxYy0wLjY2OCwwLTEuMjEsMC41NDEtMS4yMSwxLjIwOXYxLjY0NmgtMS43MDJjLTEuMjA1LDAtMi43MDQsMC4xNjItMy42MDYsMS40MjJjLTAuNjg4LDAuOTYxLTEuMDA3LDIuMjItMS4wMDcsMy45NjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwyLjEsMC42MDEsMy44MTcsMS42MDksNC41OTNjMC44ODEsMC42NzksMS41MDYsMC43OTMsMi41NzMsMC43OTNjMS4yNTgsMCwyLjIxNC0wLjQ5LDIuOTgyLTAuODgzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNTc5'+
			'LTAuMjk3LDEuMDM2LTAuNTMxLDEuNTAxLTAuNTMxczAuOTIzLDAuMjM0LDEuNTAyLDAuNTMyYzAuNzY3LDAuMzkzLDEuNzI0LDAuODgyLDIuOTgyLDAuODgyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMDY1LDAsMS42OS0wLjExNCwyLjU3Mi0wLjc5MmMxLjAwOS0wLjc3NiwxLjYxMS0yLjQ5MywxLjYxMS00LjU5NUMtMzMyMC41ODEtMjU5MS41ODgtMzMyMC45MDItMjU5Mi44NDgtMzMyMS41ODktMjU5My44MDh6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0tMzMyMy42NjctMjU4Ny4xNjhjLTAuMzM1LDAuMjU5LTAuMzc4LDAuMjkyLTEuMDk3LDAuMjkyYy0wLjY3NS'+
			'wwLTEuMjMzLTAuMjg3LTEuODc5LTAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcyOS0wLjM3My0xLjU1Ny0wLjc5Ni0yLjYwNS0wLjc5NnMtMS44NzUsMC40MjMtMi42MDQsMC43OTZjLTAuNjQ2LDAuMzMyLTEuMjA0LDAuNjE4LTEuODc5LDAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcxOSwwLTAuNzYyLTAuMDMzLTEuMDk2LTAuMjkyYy0wLjE0Mi0wLjExMi0wLjY2OC0wLjg5My0wLjY2OC0yLjY3N2MwLTEuMTk3LDAuMTgxLTIuMDMzLDAuNTU1LTIuNTU1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTI2LTAuMTc2LDAuNDM0LTAu'+
			'NDExLDEuNjQtMC40MTFoOC4xMDdjMS4yMDUsMCwxLjUxMiwwLjIzNCwxLjYzOCwwLjQxMWMwLjM3NCwwLjUyMiwwLjU1NiwxLjM1OCwwLjU1NiwyLjU1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMy0yNTg4LjA2LTMzMjMuNTI3LTI1ODcuMjgtMzMyMy42NjctMjU4Ny4xNjh6Ii8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTS0zMzI5LjI0OS0yNjAyLjVjLTYuODkyLDAtMTIuNSw1LjYwNy0xMi41LDEyLjVzNS42MDcsMTIuNSwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Ji'+
			'N4OTtjNi44OTMsMCwxMi41LTUuNjA3LDEyLjUtMTIuNVMtMzMyMi4zNTUtMjYwMi41LTMzMjkuMjQ5LTI2MDIuNXogTS0zMzI5LjI0OS0yNTgwLjEzMmMtNS40NDEsMC05Ljg3LTQuNDI3LTkuODctOS44NjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC01LjQ0Miw0LjQyOS05Ljg2OSw5Ljg3LTkuODY5YzUuNDQyLDAsOS44Nyw0LjQyOCw5Ljg3LDkuODY5Qy0zMzE5LjM3OC0yNTg0LjU2LTMzMjMuODA1LTI1ODAuMTMyLTMzMjkuMjQ5LTI1ODAuMTMyeiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTS0zMzIxLjU4'+
			'OS0yNTkzLjgwOGMtMC45LTEuMjYtMi4zOTktMS40MjItMy42MDQtMS40MjJoLTEuNzA0di0xLjY0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTAuNjY4LTAuNTQyLTEuMjA5LTEuMjEtMS4yMDloLTIuMjgxYy0wLjY2OCwwLTEuMjEsMC41NDEtMS4yMSwxLjIwOXYxLjY0NmgtMS43MDJjLTEuMjA1LDAtMi43MDQsMC4xNjItMy42MDYsMS40MjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjg4LDAuOTYxLTEuMDA3LDIuMjItMS4wMDcsMy45NjNjMCwyLjEsMC42MDEsMy44MTcsMS42MDksNC41OTNjMC44ODEsMC42NzksMS41MDYsMC43OTMsMi41NzMsMC43OTMmI3'+
			'hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4yNTgsMCwyLjIxNC0wLjQ5LDIuOTgyLTAuODgzYzAuNTc5LTAuMjk3LDEuMDM2LTAuNTMxLDEuNTAxLTAuNTMxczAuOTIzLDAuMjM0LDEuNTAyLDAuNTMyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNzY3LDAuMzkzLDEuNzI0LDAuODgyLDIuOTgyLDAuODgyYzEuMDY1LDAsMS42OS0wLjExNCwyLjU3Mi0wLjc5MmMxLjAwOS0wLjc3NiwxLjYxMS0yLjQ5MywxLjYxMS00LjU5NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMC41ODEtMjU5MS41ODgtMzMyMC45MDItMjU5Mi44NDgtMzMyMS41ODktMjU5My44MDh6'+
			'IE0tMzMyMy42NjctMjU4Ny4xNjhjLTAuMzM1LDAuMjU5LTAuMzc4LDAuMjkyLTEuMDk3LDAuMjkyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY3NSwwLTEuMjMzLTAuMjg3LTEuODc5LTAuNjE4Yy0wLjcyOS0wLjM3My0xLjU1Ny0wLjc5Ni0yLjYwNS0wLjc5NnMtMS44NzUsMC40MjMtMi42MDQsMC43OTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjQ2LDAuMzMyLTEuMjA0LDAuNjE4LTEuODc5LDAuNjE4Yy0wLjcxOSwwLTAuNzYyLTAuMDMzLTEuMDk2LTAuMjkyYy0wLjE0Mi0wLjExMi0wLjY2OC0wLjg5My0wLjY2OC0yLjY3NyYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7JiN4OTsmI3g5O2MwLTEuMTk3LDAuMTgxLTIuMDMzLDAuNTU1LTIuNTU1YzAuMTI2LTAuMTc2LDAuNDM0LTAuNDExLDEuNjQtMC40MTFoOC4xMDdjMS4yMDUsMCwxLjUxMiwwLjIzNCwxLjYzOCwwLjQxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM3NCwwLjUyMiwwLjU1NiwxLjM1OCwwLjU1NiwyLjU1NUMtMzMyMy0yNTg4LjA2LTMzMjMuNTI3LTI1ODcuMjgtMzMyMy42NjctMjU4Ny4xNjh6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zMzI5LjI0OS0yNjAyLjVjLTYuODkyLDAtMTIuNSw1LjYwNy0x'+
			'Mi41LDEyLjVzNS42MDcsMTIuNSwxMi41LDEyLjVjNi44OTMsMCwxMi41LTUuNjA3LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1MtMzMyMi4zNTUtMjYwMi41LTMzMjkuMjQ5LTI2MDIuNXogTS0zMzI5LjI0OS0yNTgwLjEzMmMtNS40NDEsMC05Ljg3LTQuNDI3LTkuODctOS44NjhjMC01LjQ0Miw0LjQyOS05Ljg2OSw5Ljg3LTkuODY5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzUuNDQyLDAsOS44Nyw0LjQyOCw5Ljg3LDkuODY5Qy0zMzE5LjM3OC0yNTg0LjU2LTMzMjMuODA1LTI1ODAuMTMyLTMzMjkuMjQ5LTI1ODAuMTMyeiIvPgogICAgPHBhdGggZmlsbD'+
			'0iI0ZGRkZGRiIgZD0iTS0zMzIxLjU4OS0yNTkzLjgwOGMtMC45LTEuMjYtMi4zOTktMS40MjItMy42MDQtMS40MjJoLTEuNzA0di0xLjY0NmMwLTAuNjY4LTAuNTQyLTEuMjA5LTEuMjEtMS4yMDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoLTIuMjgxYy0wLjY2OCwwLTEuMjEsMC41NDEtMS4yMSwxLjIwOXYxLjY0NmgtMS43MDJjLTEuMjA1LDAtMi43MDQsMC4xNjItMy42MDYsMS40MjJjLTAuNjg4LDAuOTYxLTEuMDA3LDIuMjItMS4wMDcsMy45NjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwyLjEsMC42MDEsMy44MTcsMS42MDksNC41OTNjMC44ODEsMC42NzksMS41'+
			'MDYsMC43OTMsMi41NzMsMC43OTNjMS4yNTgsMCwyLjIxNC0wLjQ5LDIuOTgyLTAuODgzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNTc5LTAuMjk3LDEuMDM2LTAuNTMxLDEuNTAxLTAuNTMxczAuOTIzLDAuMjM0LDEuNTAyLDAuNTMyYzAuNzY3LDAuMzkzLDEuNzI0LDAuODgyLDIuOTgyLDAuODgyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMDY1LDAsMS42OS0wLjExNCwyLjU3Mi0wLjc5MmMxLjAwOS0wLjc3NiwxLjYxMS0yLjQ5MywxLjYxMS00LjU5NUMtMzMyMC41ODEtMjU5MS41ODgtMzMyMC45MDItMjU5Mi44NDgtMzMyMS41ODktMjU5My44MDh6JiN4ZDsmI3'+
			'hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0tMzMyMy42NjctMjU4Ny4xNjhjLTAuMzM1LDAuMjU5LTAuMzc4LDAuMjkyLTEuMDk3LDAuMjkyYy0wLjY3NSwwLTEuMjMzLTAuMjg3LTEuODc5LTAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcyOS0wLjM3My0xLjU1Ny0wLjc5Ni0yLjYwNS0wLjc5NnMtMS44NzUsMC40MjMtMi42MDQsMC43OTZjLTAuNjQ2LDAuMzMyLTEuMjA0LDAuNjE4LTEuODc5LDAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcxOSwwLTAuNzYyLTAuMDMzLTEuMDk2LTAuMjkyYy0wLjE0Mi0wLjExMi0wLjY2OC0wLjg5My0wLjY2OC0y'+
			'LjY3N2MwLTEuMTk3LDAuMTgxLTIuMDMzLDAuNTU1LTIuNTU1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTI2LTAuMTc2LDAuNDM0LTAuNDExLDEuNjQtMC40MTFoOC4xMDdjMS4yMDUsMCwxLjUxMiwwLjIzNCwxLjYzOCwwLjQxMWMwLjM3NCwwLjUyMiwwLjU1NiwxLjM1OCwwLjU1NiwyLjU1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMy0yNTg4LjA2LTMzMjMuNTI3LTI1ODcuMjgtMzMyMy42NjctMjU4Ny4xNjh6Ii8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0tMzMyOS4yNDktMjYwMi41Yy02Lj'+
			'g5MiwwLTEyLjUsNS42MDctMTIuNSwxMi41czUuNjA3LDEyLjUsMTIuNSwxMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzYuODkzLDAsMTIuNS01LjYwNywxMi41LTEyLjVTLTMzMjIuMzU1LTI2MDIuNS0zMzI5LjI0OS0yNjAyLjV6IE0tMzMyOS4yNDktMjU4MC4xMzJjLTUuNDQxLDAtOS44Ny00LjQyNy05Ljg3LTkuODY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtNS40NDIsNC40MjktOS44NjksOS44Ny05Ljg2OWM1LjQ0MiwwLDkuODcsNC40MjgsOS44Nyw5Ljg2OUMtMzMxOS4zNzgtMjU4NC41Ni0zMzIzLjgwNS0yNTgwLjEzMi0zMzI5LjI0OS0yNTgwLjEzMnoi'+
			'IHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0tMzMyMS41ODktMjU5My44MDhjLTAuOS0xLjI2LTIuMzk5LTEuNDIyLTMuNjA0LTEuNDIyaC0xLjcwNHYtMS42NDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0wLjY2OC0wLjU0Mi0xLjIwOS0xLjIxLTEuMjA5aC0yLjI4MWMtMC42NjgsMC0xLjIxLDAuNTQxLTEuMjEsMS4yMDl2MS42NDZoLTEuNzAyYy0xLjIwNSwwLTIuNzA0LDAuMTYyLTMuNjA2LDEuNDIyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY4OCwwLjk2MS0xLjAwNywyLjIyLTEuMDA3LD'+
			'MuOTYzYzAsMi4xLDAuNjAxLDMuODE3LDEuNjA5LDQuNTkzYzAuODgxLDAuNjc5LDEuNTA2LDAuNzkzLDIuNTczLDAuNzkzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMjU4LDAsMi4yMTQtMC40OSwyLjk4Mi0wLjg4M2MwLjU3OS0wLjI5NywxLjAzNi0wLjUzMSwxLjUwMS0wLjUzMXMwLjkyMywwLjIzNCwxLjUwMiwwLjUzMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjc2NywwLjM5MywxLjcyNCwwLjg4MiwyLjk4MiwwLjg4MmMxLjA2NSwwLDEuNjktMC4xMTQsMi41NzItMC43OTJjMS4wMDktMC43NzYsMS42MTEtMi40OTMsMS42MTEtNC41OTUmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5OyYjeDk7JiN4OTtDLTMzMjAuNTgxLTI1OTEuNTg4LTMzMjAuOTAyLTI1OTIuODQ4LTMzMjEuNTg5LTI1OTMuODA4eiBNLTMzMjMuNjY3LTI1ODcuMTY4Yy0wLjMzNSwwLjI1OS0wLjM3OCwwLjI5Mi0xLjA5NywwLjI5MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NzUsMC0xLjIzMy0wLjI4Ny0xLjg3OS0wLjYxOGMtMC43MjktMC4zNzMtMS41NTctMC43OTYtMi42MDUtMC43OTZzLTEuODc1LDAuNDIzLTIuNjA0LDAuNzk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY0NiwwLjMzMi0xLjIwNCwwLjYxOC0xLjg3OSwwLjYxOGMtMC43MTksMC0wLjc2Mi'+
			'0wLjAzMy0xLjA5Ni0wLjI5MmMtMC4xNDItMC4xMTItMC42NjgtMC44OTMtMC42NjgtMi42NzcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0xLjE5NywwLjE4MS0yLjAzMywwLjU1NS0yLjU1NWMwLjEyNi0wLjE3NiwwLjQzNC0wLjQxMSwxLjY0LTAuNDExaDguMTA3YzEuMjA1LDAsMS41MTIsMC4yMzQsMS42MzgsMC40MTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4zNzQsMC41MjIsMC41NTYsMS4zNTgsMC41NTYsMi41NTVDLTMzMjMtMjU4OC4wNi0zMzIzLjUyNy0yNTg3LjI4LTMzMjMuNjY3LTI1ODcuMTY4eiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgPC9nPgog'+
			'IDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIi8+Cjwvc3ZnPgo=';
		me._enter_vr__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._enter_vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIGVuYWJsZS1iYWNrZ3JvdW'+
			'5kPSJuZXcgLTMzNDUuMjUgLTI1NzEuMzMzIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeD0iMHB4IiB2aWV3Qm94PSItMzM0NS4yNSAtMjU3MS4zMzMgMzIgMzIiPgogPGcgaWQ9IkxheWVyXzEiLz4KIDxnIGlkPSJFYmVuZV8xIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjMUExNzFCIiBkPSJNLTMzMjkuMjUtMjU2OS4wODNjLTcuNTgxLDAtMTMuNzUsNi4xNjgtMTMuNzUsMTMuNzQ5YzAsNy41ODMsNi4xNjgsMTMuNzUsMTMuNzUsMTMuNzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNy41'+
			'ODMsMCwxMy43NS02LjE2NywxMy43NS0xMy43NUMtMzMxNS41LTI1NjIuOTE1LTMzMjEuNjY3LTI1NjkuMDgzLTMzMjkuMjUtMjU2OS4wODN6IE0tMzMyOS4yNS0yNTQ0LjQ3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtNS45ODUsMC0xMC44NTctNC44NjktMTAuODU3LTEwLjg1NWMwLTUuOTg2LDQuODcyLTEwLjg1NSwxMC44NTctMTAuODU1YzUuOTg3LDAsMTAuODU3LDQuODcxLDEwLjg1NywxMC44NTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTMzMTguMzkzLTI1NDkuMzQ5LTMzMjMuMjYyLTI1NDQuNDc5LTMzMjkuMjUtMjU0NC40Nzl6Ii8+CiAgICA8cGF0aCBmaW'+
			'xsPSIjMUExNzFCIiBkPSJNLTMzMjAuODI1LTI1NTkuNTIxYy0wLjk5LTEuMzg3LTIuNjM5LTEuNTY0LTMuOTY1LTEuNTY0aC0xLjg3NXYtMS44MTJjMC0wLjczNC0wLjU5Ni0xLjMzLTEuMzMxLTEuMzMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoLTIuNTA5Yy0wLjczNSwwLTEuMzMxLDAuNTk2LTEuMzMxLDEuMzN2MS44MTJoLTEuODczYy0xLjMyNSwwLTIuOTc0LDAuMTc4LTMuOTY3LDEuNTY0Yy0wLjc1NiwxLjA1Ny0xLjEwNywyLjQ0Mi0xLjEwNyw0LjM1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDIuMzEsMC42NjIsNC4xOTksMS43Nyw1LjA1M2MwLjk2OSwwLjc0'+
			'NywxLjY1NywwLjg3MywyLjgzMSwwLjg3M2MxLjM4NCwwLDIuNDM2LTAuNTM5LDMuMjgxLTAuOTcxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNjM3LTAuMzI3LDEuMTQtMC41ODQsMS42NTEtMC41ODRjMC41MTIsMCwxLjAxNSwwLjI1NywxLjY1MiwwLjU4NGMwLjg0NCwwLjQzMiwxLjg5NywwLjk3LDMuMjgxLDAuOTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4xNzEsMCwxLjg1OS0wLjEyNSwyLjgzLTAuODcxYzEuMTA5LTAuODU0LDEuNzcyLTIuNzQzLDEuNzcyLTUuMDU0Qy0zMzE5LjcxNS0yNTU3LjA4MS0zMzIwLjA2OC0yNTU4LjQ2Ni0zMzIwLjgyNS0yNTU5Lj'+
			'UyMXomI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTS0zMzIzLjExMS0yNTUyLjIxOGMtMC4zNjksMC4yODUtMC40MTYsMC4zMjEtMS4yMDYsMC4zMjFjLTAuNzQyLDAtMS4zNTctMC4zMTUtMi4wNjctMC42NzkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuODAyLTAuNDExLTEuNzEyLTAuODc2LTIuODY2LTAuODc2Yy0xLjE1MywwLTIuMDYyLDAuNDY1LTIuODY1LDAuODc2Yy0wLjcxLDAuMzY0LTEuMzI1LDAuNjc5LTIuMDY3LDAuNjc5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjc5MSwwLTAuODM4LTAuMDM2LTEuMjA1LTAuMzJjLTAuMTU2LTAuMTIzLTAu'+
			'NzM1LTAuOTgxLTAuNzM1LTIuOTQ1YzAtMS4zMTcsMC4yLTIuMjM2LDAuNjEtMi44MTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xMzgtMC4xOTQsMC40NzctMC40NTIsMS44MDMtMC40NTJoOC45MThjMS4zMjYsMCwxLjY2MywwLjI1NywxLjgwMSwwLjQ1MmMwLjQxMiwwLjU3NSwwLjYxMSwxLjQ5NCwwLjYxMSwyLjgxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMi4zNzctMjU1My4xOTktMzMyMi45NTYtMjU1Mi4zNDEtMzMyMy4xMTEtMjU1Mi4yMTh6Ii8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT'+
			'0iIzFBMTcxQiIgZD0iTS0zMzI5LjI1LTI1NjkuMDgzYy03LjU4MSwwLTEzLjc1LDYuMTY4LTEzLjc1LDEzLjc0OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDcuNTgzLDYuMTY4LDEzLjc1LDEzLjc1LDEzLjc1YzcuNTgzLDAsMTMuNzUtNi4xNjcsMTMuNzUtMTMuNzVDLTMzMTUuNS0yNTYyLjkxNS0zMzIxLjY2Ny0yNTY5LjA4My0zMzI5LjI1LTI1NjkuMDgzeiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyBNLTMzMjkuMjUtMjU0NC40NzljLTUuOTg1LDAtMTAuODU3LTQuODY5LTEwLjg1Ny0xMC44NTVjMC01Ljk4Niw0Ljg3Mi0xMC44NTUsMTAuODU3LTEwLjg1NSYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2M1Ljk4NywwLDEwLjg1Nyw0Ljg3MSwxMC44NTcsMTAuODU1Qy0zMzE4LjM5My0yNTQ5LjM0OS0zMzIzLjI2Mi0yNTQ0LjQ3OS0zMzI5LjI1LTI1NDQuNDc5eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTS0zMzIwLjgyNS0yNTU5LjUyMWMtMC45OS0xLjM4Ny0yLjYzOS0xLjU2NC0zLjk2NS0xLjU2NGgtMS44NzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTt2LTEuODEyYzAtMC43MzQtMC41OTYtMS4zMy0xLjMzMS0xLjMzaC0yLjUwOWMtMC43MzUsMC0xLjMzMSwwLjU5Ni'+
			'0xLjMzMSwxLjMzdjEuODEyaC0xLjg3M2MtMS4zMjUsMC0yLjk3NCwwLjE3OC0zLjk2NywxLjU2NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43NTYsMS4wNTctMS4xMDcsMi40NDItMS4xMDcsNC4zNTljMCwyLjMxLDAuNjYyLDQuMTk5LDEuNzcsNS4wNTNjMC45NjksMC43NDcsMS42NTcsMC44NzMsMi44MzEsMC44NzMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4zODQsMCwyLjQzNi0wLjUzOSwzLjI4MS0wLjk3MWMwLjYzNy0wLjMyNywxLjE0LTAuNTg0LDEuNjUxLTAuNTg0YzAuNTEyLDAsMS4wMTUsMC4yNTcsMS42NTIsMC41ODQmI3hkOyYjeGE7JiN4OTsmI3g5'+
			'OyYjeDk7JiN4OTtjMC44NDQsMC40MzIsMS44OTcsMC45NywzLjI4MSwwLjk3YzEuMTcxLDAsMS44NTktMC4xMjUsMi44My0wLjg3MWMxLjEwOS0wLjg1NCwxLjc3Mi0yLjc0MywxLjc3Mi01LjA1NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMxOS43MTUtMjU1Ny4wODEtMzMyMC4wNjgtMjU1OC40NjYtMzMyMC44MjUtMjU1OS41MjF6IE0tMzMyMy4xMTEtMjU1Mi4yMThjLTAuMzY5LDAuMjg1LTAuNDE2LDAuMzIxLTEuMjA2LDAuMzIxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjc0MiwwLTEuMzU3LTAuMzE1LTIuMDY3LTAuNjc5Yy0wLjgwMi0wLjQxMS0xLjcxMi'+
			'0wLjg3Ni0yLjg2Ni0wLjg3NmMtMS4xNTMsMC0yLjA2MiwwLjQ2NS0yLjg2NSwwLjg3NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43MSwwLjM2NC0xLjMyNSwwLjY3OS0yLjA2NywwLjY3OWMtMC43OTEsMC0wLjgzOC0wLjAzNi0xLjIwNS0wLjMyYy0wLjE1Ni0wLjEyMy0wLjczNS0wLjk4MS0wLjczNS0yLjk0NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTEuMzE3LDAuMi0yLjIzNiwwLjYxLTIuODExYzAuMTM4LTAuMTk0LDAuNDc3LTAuNDUyLDEuODAzLTAuNDUyaDguOTE4YzEuMzI2LDAsMS42NjMsMC4yNTcsMS44MDEsMC40NTImI3hkOyYjeGE7JiN4OTsmI3g5'+
			'OyYjeDk7JiN4OTtjMC40MTIsMC41NzUsMC42MTEsMS40OTQsMC42MTEsMi44MTFDLTMzMjIuMzc3LTI1NTMuMTk5LTMzMjIuOTU2LTI1NTIuMzQxLTMzMjMuMTExLTI1NTIuMjE4eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzMyOS4yNS0yNTY5LjA4M2MtNy41ODEsMC0xMy43NSw2LjE2OC0xMy43NSwxMy43NDljMCw3LjU4Myw2LjE2OCwxMy43NSwxMy43NSwxMy43NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2M3LjU4MywwLDEzLjc1LTYuMTY3LDEzLjc1LTEzLjc1Qy0zMzE1LjUtMjU2Mi45MTUtMzMyMS'+
			'42NjctMjU2OS4wODMtMzMyOS4yNS0yNTY5LjA4M3ogTS0zMzI5LjI1LTI1NDQuNDc5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy01Ljk4NSwwLTEwLjg1Ny00Ljg2OS0xMC44NTctMTAuODU1YzAtNS45ODYsNC44NzItMTAuODU1LDEwLjg1Ny0xMC44NTVjNS45ODcsMCwxMC44NTcsNC44NzEsMTAuODU3LDEwLjg1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMxOC4zOTMtMjU0OS4zNDktMzMyMy4yNjItMjU0NC40NzktMzMyOS4yNS0yNTQ0LjQ3OXoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzMyMC44MjUtMjU1OS41MjFjLTAuOTktMS4zODctMi42'+
			'MzktMS41NjQtMy45NjUtMS41NjRoLTEuODc1di0xLjgxMmMwLTAuNzM0LTAuNTk2LTEuMzMtMS4zMzEtMS4zMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2gtMi41MDljLTAuNzM1LDAtMS4zMzEsMC41OTYtMS4zMzEsMS4zM3YxLjgxMmgtMS44NzNjLTEuMzI1LDAtMi45NzQsMC4xNzgtMy45NjcsMS41NjRjLTAuNzU2LDEuMDU3LTEuMTA3LDIuNDQyLTEuMTA3LDQuMzU5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMi4zMSwwLjY2Miw0LjE5OSwxLjc3LDUuMDUzYzAuOTY5LDAuNzQ3LDEuNjU3LDAuODczLDIuODMxLDAuODczYzEuMzg0LDAsMi40MzYtMC41MzksMy4yOD'+
			'EtMC45NzEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC42MzctMC4zMjcsMS4xNC0wLjU4NCwxLjY1MS0wLjU4NGMwLjUxMiwwLDEuMDE1LDAuMjU3LDEuNjUyLDAuNTg0YzAuODQ0LDAuNDMyLDEuODk3LDAuOTcsMy4yODEsMC45NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxLjE3MSwwLDEuODU5LTAuMTI1LDIuODMtMC44NzFjMS4xMDktMC44NTQsMS43NzItMi43NDMsMS43NzItNS4wNTRDLTMzMTkuNzE1LTI1NTcuMDgxLTMzMjAuMDY4LTI1NTguNDY2LTMzMjAuODI1LTI1NTkuNTIxeiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyBNLTMzMjMuMTExLTI1NTIu'+
			'MjE4Yy0wLjM2OSwwLjI4NS0wLjQxNiwwLjMyMS0xLjIwNiwwLjMyMWMtMC43NDIsMC0xLjM1Ny0wLjMxNS0yLjA2Ny0wLjY3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC44MDItMC40MTEtMS43MTItMC44NzYtMi44NjYtMC44NzZjLTEuMTUzLDAtMi4wNjIsMC40NjUtMi44NjUsMC44NzZjLTAuNzEsMC4zNjQtMS4zMjUsMC42NzktMi4wNjcsMC42NzkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzkxLDAtMC44MzgtMC4wMzYtMS4yMDUtMC4zMmMtMC4xNTYtMC4xMjMtMC43MzUtMC45ODEtMC43MzUtMi45NDVjMC0xLjMxNywwLjItMi4yMzYsMC42MS0yLjgxMS'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjEzOC0wLjE5NCwwLjQ3Ny0wLjQ1MiwxLjgwMy0wLjQ1Mmg4LjkxOGMxLjMyNiwwLDEuNjYzLDAuMjU3LDEuODAxLDAuNDUyYzAuNDEyLDAuNTc1LDAuNjExLDEuNDk0LDAuNjExLDIuODExJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zMzIyLjM3Ny0yNTUzLjE5OS0zMzIyLjk1Ni0yNTUyLjM0MS0zMzIzLjExMS0yNTUyLjIxOHoiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTS0zMzI5LjI1LTI1NjkuMDgzYy03LjU4MSwwLTEzLjc1LDYuMTY4LTEzLjc1LDEzLjc0'+
			'OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDcuNTgzLDYuMTY4LDEzLjc1LDEzLjc1LDEzLjc1YzcuNTgzLDAsMTMuNzUtNi4xNjcsMTMuNzUtMTMuNzVDLTMzMTUuNS0yNTYyLjkxNS0zMzIxLjY2Ny0yNTY5LjA4My0zMzI5LjI1LTI1NjkuMDgzeiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyBNLTMzMjkuMjUtMjU0NC40NzljLTUuOTg1LDAtMTAuODU3LTQuODY5LTEwLjg1Ny0xMC44NTVjMC01Ljk4Niw0Ljg3Mi0xMC44NTUsMTAuODU3LTEwLjg1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2M1Ljk4NywwLDEwLjg1Nyw0Ljg3MSwxMC44NTcsMTAuODU1Qy0zMz'+
			'E4LjM5My0yNTQ5LjM0OS0zMzIzLjI2Mi0yNTQ0LjQ3OS0zMzI5LjI1LTI1NDQuNDc5eiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTS0zMzIwLjgyNS0yNTU5LjUyMWMtMC45OS0xLjM4Ny0yLjYzOS0xLjU2NC0zLjk2NS0xLjU2NGgtMS44NzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTt2LTEuODEyYzAtMC43MzQtMC41OTYtMS4zMy0xLjMzMS0xLjMzaC0yLjUwOWMtMC43MzUsMC0xLjMzMSwwLjU5Ni0xLjMzMSwxLjMzdjEuODEyaC0xLjg3M2MtMS4zMjUsMC0yLjk3NCwwLjE3OC0zLjk2NywxLjU2NCYjeGQ7JiN4'+
			'YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43NTYsMS4wNTctMS4xMDcsMi40NDItMS4xMDcsNC4zNTljMCwyLjMxLDAuNjYyLDQuMTk5LDEuNzcsNS4wNTNjMC45NjksMC43NDcsMS42NTcsMC44NzMsMi44MzEsMC44NzMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4zODQsMCwyLjQzNi0wLjUzOSwzLjI4MS0wLjk3MWMwLjYzNy0wLjMyNywxLjE0LTAuNTg0LDEuNjUxLTAuNTg0YzAuNTEyLDAsMS4wMTUsMC4yNTcsMS42NTIsMC41ODQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC44NDQsMC40MzIsMS44OTcsMC45NywzLjI4MSwwLjk3YzEuMTcxLDAsMS44NTktMC4xMj'+
			'UsMi44My0wLjg3MWMxLjEwOS0wLjg1NCwxLjc3Mi0yLjc0MywxLjc3Mi01LjA1NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMxOS43MTUtMjU1Ny4wODEtMzMyMC4wNjgtMjU1OC40NjYtMzMyMC44MjUtMjU1OS41MjF6IE0tMzMyMy4xMTEtMjU1Mi4yMThjLTAuMzY5LDAuMjg1LTAuNDE2LDAuMzIxLTEuMjA2LDAuMzIxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjc0MiwwLTEuMzU3LTAuMzE1LTIuMDY3LTAuNjc5Yy0wLjgwMi0wLjQxMS0xLjcxMi0wLjg3Ni0yLjg2Ni0wLjg3NmMtMS4xNTMsMC0yLjA2MiwwLjQ2NS0yLjg2NSwwLjg3NiYjeGQ7JiN4YTsmI3g5'+
			'OyYjeDk7JiN4OTsmI3g5O2MtMC43MSwwLjM2NC0xLjMyNSwwLjY3OS0yLjA2NywwLjY3OWMtMC43OTEsMC0wLjgzOC0wLjAzNi0xLjIwNS0wLjMyYy0wLjE1Ni0wLjEyMy0wLjczNS0wLjk4MS0wLjczNS0yLjk0NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTEuMzE3LDAuMi0yLjIzNiwwLjYxLTIuODExYzAuMTM4LTAuMTk0LDAuNDc3LTAuNDUyLDEuODAzLTAuNDUyaDguOTE4YzEuMzI2LDAsMS42NjMsMC4yNTcsMS44MDEsMC40NTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC40MTIsMC41NzUsMC42MTEsMS40OTQsMC42MTEsMi44MTFDLTMzMjIuMzc3LTI1NTMuMT'+
			'k5LTMzMjIuOTU2LTI1NTIuMzQxLTMzMjMuMTExLTI1NTIuMjE4eiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIi8+Cjwvc3ZnPgo=';
		me._enter_vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="enter_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 256px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._enter_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._enter_vr.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_enter_vr') == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == 1))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == 2))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == 3))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == 4))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == 5))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == 6))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == 7))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == 8))
			)
			{
				newLogicStatePosition = 8;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._enter_vr.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._enter_vr.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._enter_vr.style[domTransition]='left 0s, top 0s';
				if (me._enter_vr.ggCurrentLogicStatePosition == 0) {
					me._enter_vr.style.left='0px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 1) {
					me._enter_vr.style.left='32px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 2) {
					me._enter_vr.style.left='64px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 3) {
					me._enter_vr.style.left='96px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 4) {
					me._enter_vr.style.left='128px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 5) {
					me._enter_vr.style.left='160px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 6) {
					me._enter_vr.style.left='192px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 7) {
					me._enter_vr.style.left='224px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 8) {
					me._enter_vr.style.left='256px';
					me._enter_vr.style.top='0px';
				}
				else {
					me._enter_vr.style.left='256px';
					me._enter_vr.style.top='0px';
				}
			}
		}
		me._enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enter_vr.style[domTransition]='left 0s, top 0s';
				if (me._enter_vr.ggCurrentLogicStateVisible == 0) {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
				else {
					me._enter_vr.style.visibility="hidden";
					me._enter_vr.ggVisible=false;
				}
			}
		}
		me._enter_vr.onclick=function (e) {
			player.enterVR();
		}
		me._enter_vr.onmouseover=function (e) {
			me._enter_vr__img.style.visibility='hidden';
			me._enter_vr__imgo.style.visibility='inherit';
			me.elementMouseOver['enter_vr']=true;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.onmouseout=function (e) {
			me._enter_vr__img.style.visibility='inherit';
			me._enter_vr__imgo.style.visibility='hidden';
			me.elementMouseOver['enter_vr']=false;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.ontouchend=function (e) {
			me.elementMouseOver['enter_vr']=false;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_enter_vr=document.createElement('div');
		els=me._tt_enter_vr__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_vr";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Enter VR";
		el.appendChild(els);
		me._tt_enter_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_vr.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_enter_vr.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_enter_vr.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_enter_vr.style[domTransition]='left 0s, top 0s';
				if (me._tt_enter_vr.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_enter_vr.style.top='-25px';
					me._tt_enter_vr.ggUpdatePosition(true);
				}
				else {
					me._tt_enter_vr.ggDx=0;
					me._tt_enter_vr.style.top='32px';
					me._tt_enter_vr.ggUpdatePosition(true);
				}
			}
		}
		me._tt_enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['enter_vr'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_enter_vr.style[domTransition]='left 0s, top 0s';
				if (me._tt_enter_vr.ggCurrentLogicStateVisible == 0) {
					me._tt_enter_vr.style.visibility=(Number(me._tt_enter_vr.style.opacity)>0||!me._tt_enter_vr.style.opacity)?'inherit':'hidden';
					me._tt_enter_vr.ggVisible=true;
				}
				else {
					me._tt_enter_vr.style.visibility="hidden";
					me._tt_enter_vr.ggVisible=false;
				}
			}
		}
		me._tt_enter_vr.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._enter_vr.appendChild(me._tt_enter_vr);
		me._controller_slider.appendChild(me._enter_vr);
		el=me._fullscreen_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="fullscreen_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 224px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_buttons.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_fullscreen') == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == 1))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == 2))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == 3))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == 4))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == 5))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == 6))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == 7))
			)
			{
				newLogicStatePosition = 7;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._fullscreen_buttons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._fullscreen_buttons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._fullscreen_buttons.style[domTransition]='left 0s, top 0s';
				if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 0) {
					me._fullscreen_buttons.style.left='0px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 1) {
					me._fullscreen_buttons.style.left='32px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 2) {
					me._fullscreen_buttons.style.left='64px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 3) {
					me._fullscreen_buttons.style.left='96px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 4) {
					me._fullscreen_buttons.style.left='128px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 5) {
					me._fullscreen_buttons.style.left='160px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 6) {
					me._fullscreen_buttons.style.left='192px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 7) {
					me._fullscreen_buttons.style.left='224px';
					me._fullscreen_buttons.style.top='0px';
				}
				else {
					me._fullscreen_buttons.style.left='224px';
					me._fullscreen_buttons.style.top='0px';
				}
			}
		}
		me._fullscreen_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getOS() != 4))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_buttons.style[domTransition]='left 0s, top 0s';
				if (me._fullscreen_buttons.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_buttons.style.visibility=(Number(me._fullscreen_buttons.style.opacity)>0||!me._fullscreen_buttons.style.opacity)?'inherit':'hidden';
					me._fullscreen_buttons.ggVisible=true;
				}
				else {
					me._fullscreen_buttons.style.visibility="hidden";
					me._fullscreen_buttons.ggVisible=false;
				}
			}
		}
		me._fullscreen_buttons.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen_buttons.onmouseover=function (e) {
			me.elementMouseOver['fullscreen_buttons']=true;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._fullscreen_buttons.onmouseout=function (e) {
			me.elementMouseOver['fullscreen_buttons']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._fullscreen_buttons.ontouchend=function (e) {
			me.elementMouseOver['fullscreen_buttons']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._fullscreen_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen=document.createElement('div');
		els=me._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOn'+
			'NwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTEmI3hkOyYjeGE7JiN4OTsmI3g5O1MzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0Niww'+
			'LjM1MWgyMi42MDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTFjMC4yMjctMC4yMjYsMC4zNTEtMC41MjYsMC4zNTEtMC44NDZWNy44OEMyOC41LDcuNTY1LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzR6IE01Ljg5MywyMi45MjQmI3hkOyYjeGE7JiN4OTsmI3g5O1Y5LjA3NmgyMC4yMTV2MTMuODQ4SDUuODkzeiBNMTYsMTkuMjRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZ2MC40NDhjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC'+
			'40NDhDMTcuMTk2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTIuODY2LDE1LjMzOSwxMi4zMzEsMTQuODA0LDExLjY3LDE0LjgwNHogTTguMTk1LDE0LjgwNEg3Ljg1NGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NjEsMC41MzYsMS4x'+
			'OTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzkuMzkyLDE1LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMiYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0wLjIyMiwwLjE0OGMtMC40MjcsMC4yODUtMC41NDEsMC44NjMtMC4yNTYsMS4yOWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7bDAuMjIxLTAuMTQ4YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjlDMTkuMjkzLDEzLjI0MiwxOC43MTUsMTMuMTI2LD'+
			'E4LjI4NywxMy40MTJ6IE0yMy44MTMsOS43MmwtMC4yMjIsMC4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjctMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFDMjQuODE4LDkuNTQ5LDI0LjI0MSw5LjQzNCwyMy44MTMsOS43MnogTTE2LDE0LjgwNGgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsm'+
			'I3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OCwwLjQ3NSwwLjQxMywwLjc3NCwwLjQxM2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LT'+
			'AuMTU3bDAuMjIxLTAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFTMjEuNDc4LDExLjI4LDIxLjA1LDExLjU2NXoiLz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgogIDxwYXRoIGQ9Ik0yOC4xNDksNy4wMzRjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxJiN4ZDsmI3hhOyYjeDk7JiN4OTtTMy41LDcuNTY1LDMuNSw3Ljg4djE2LjI0YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEs'+
			'MC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMjIuNjA3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NSwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDM0eiBNNS44OTMsMjIuOTI0JiN4ZDsmI3hhOyYjeDk7JiN4OTtWOS4wNzZoMjAuMjE1djEzLjg0OEg1Ljg5M3ogTTE2LDE5LjI0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2djAuNDQ4YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5O2MwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZ2LTAuNDQ4QzE3LjE5NiwxOS43NzUsMTYuNjYxLDE5LjI0LDE2LDE5LjI0eiBNMTEuNjcsMTQuODA0aC0wLjM0MiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzEyLjg2NiwxNS4zMzksMTIuMzMxLDE0LjgwNCwxMS42NywxNC44MDR6IE04LjE5NSwxNC44MDRINy44NTRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTYm'+
			'I3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQxYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkM5LjM5MiwxNS4zMzksOC44NTUsMTQuODA0LDguMTk1LDE0LjgwNHogTTE4LjI4NywxMy40MTImI3hkOyYjeGE7JiN4OTsmI3g5O2wtMC4yMjIsMC4xNDhjLTAuNDI3LDAuMjg1LTAuNTQxLDAuODYzLTAuMjU2LDEuMjljMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTcmI3hkOyYjeGE7JiN4OTsmI3g5O2wwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLj'+
			'I1Ny0xLjI5QzE5LjI5MywxMy4yNDIsMTguNzE1LDEzLjEyNiwxOC4yODcsMTMuNDEyeiBNMjMuODEzLDkuNzJsLTAuMjIyLDAuMTQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODY0LTAuMjU2LDEuMjkxYzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDI3LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkxQzI0LjgxOCw5LjU0OSwyNC4yNDEsOS40MzQsMjMuODEzLDkuNzJ6IE0xNiwxNC44MDRoLTEuMTk2Yy0wLjY2MSwwLTEu'+
			'MTk2LDAuNTM2LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjMxNS0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzEsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0yMS4wNSwxMS41NjVsLTAuMjIxLDAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjgsMC40NzUsMC40MTMsMC'+
			'43NzQsMC40MTNjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxUzIxLjQ3OCwxMS4yOCwyMS4wNSwxMS41NjV6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOn'+
			'NwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MSYjeGQ7JiN4YTsmI3g5OyYjeDk7UzMuNSw3LjU2NSwzLjUsNy44OHYxNi4yNGMwLDAu'+
			'MzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIyLjYwNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMzE5LDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MWMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjUsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTUuODkzLDIyLjkyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7VjkuMDc2aDIwLjIxNXYxMy44NDhINS44OTN6IE0xNiwxOS4yNGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NnYwLjQ0OGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LD'+
			'EuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2di0wLjQ0OEMxNy4xOTYsMTkuNzc1LDE2LjY2MSwxOS4yNCwxNiwxOS4yNHogTTExLjY3LDE0LjgwNGgtMC4zNDImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O0MxMi44NjYsMTUuMzM5LDEyLjMzMSwxNC44MDQsMTEuNjcsMTQuODA0eiBNOC4xOTUsMTQuODA0SDcuODU0Yy0wLjY2MSwwLTEu'+
			'MTk3LDAuNTM1LTEuMTk3LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MWMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDOS4zOTIsMTUuMzM5LDguODU1LDE0LjgwNCw4LjE5NSwxNC44MDR6IE0xOC4yODcsMTMuNDEyJiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTAuMjIyLDAuMTQ4Yy0wLjQyNywwLjI4NS0wLjU0MSwwLjg2My0wLjI1NiwxLjI5YzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMC4yMjEtMC4xNDhjMC40Mj'+
			'gtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOUMxOS4yOTMsMTMuMjQyLDE4LjcxNSwxMy4xMjYsMTguMjg3LDEzLjQxMnogTTIzLjgxMyw5LjcybC0wLjIyMiwwLjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2NC0wLjI1NiwxLjI5MWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyNy0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ni0xLjI5MUMyNC44MTgsOS41NDksMjQuMjQxLDkuNDM0LDIzLjgxMyw5LjcyeiBNMTYsMTQu'+
			'ODA0aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlYxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMxLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMjEuMDUsMTEuNTY1bC0wLjIyMSwwLjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLj'+
			'E4LDAuMjY4LDAuNDc1LDAuNDEzLDAuNzc0LDAuNDEzYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MVMyMS40NzgsMTEuMjgsMjEuMDUsMTEuNTY1eiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0'+
			'Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MSYjeGQ7JiN4YTsmI3g5OyYjeDk7UzMuNSw3LjU2NSwzLjUsNy44OHYxNi4yNGMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIyLjYwNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMzE5LDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MWMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjUsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTUuODkzLDIyLjkyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7VjkuMDc2aD'+
			'IwLjIxNXYxMy44NDhINS44OTN6IE0xNiwxOS4yNGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NnYwLjQ0OGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2di0wLjQ0OEMxNy4xOTYsMTkuNzc1LDE2LjY2MSwxOS4yNCwxNiwxOS4yNHogTTExLjY3LDE0LjgwNGgtMC4zNDImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4x'+
			'OTYmI3hkOyYjeGE7JiN4OTsmI3g5O0MxMi44NjYsMTUuMzM5LDEyLjMzMSwxNC44MDQsMTEuNjcsMTQuODA0eiBNOC4xOTUsMTQuODA0SDcuODU0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MWMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDOS4zOTIsMTUuMzM5LDguODU1LDE0LjgwNCw4LjE5NSwxNC44MDR6IE0xOC4yODcsMTMuNDEyJiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTAuMjIyLDAuMTQ4Yy0wLjQyNywwLjI4NS0wLjU0MSwwLjg2My0wLjI1NiwxLjI5YzAuMTgsMC'+
			'4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMC4yMjEtMC4xNDhjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOUMxOS4yOTMsMTMuMjQyLDE4LjcxNSwxMy4xMjYsMTguMjg3LDEzLjQxMnogTTIzLjgxMyw5LjcybC0wLjIyMiwwLjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2NC0wLjI1NiwxLjI5MWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgmI3hkOyYj'+
			'eGE7JiN4OTsmI3g5O2MwLjQyNy0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ni0xLjI5MUMyNC44MTgsOS41NDksMjQuMjQxLDkuNDM0LDIzLjgxMyw5LjcyeiBNMTYsMTQuODA0aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlYxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMxLDE2LjMxNCwxNC44MDQsMT'+
			'YsMTQuODA0eiBNMjEuMDUsMTEuNTY1bC0wLjIyMSwwLjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY4LDAuNDc1LDAuNDEzLDAuNzc0LDAuNDEzYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MVMyMS40NzgsMTEuMjgsMjEuMDUsMTEuNTY1eiIvPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen.style[domTransition]='opacity 500ms ease 0ms';
				if (me._fullscreen.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._fullscreen.style.opacity == 0.0) { me._fullscreen.style.visibility="hidden"; } }, 505);
					me._fullscreen.style.opacity=0;
				}
				else {
					me._fullscreen.style.visibility=me._fullscreen.ggVisible?'inherit':'hidden';
					me._fullscreen.style.opacity=1;
				}
			}
		}
		me._fullscreen.onmouseover=function (e) {
			me._fullscreen__img.style.visibility='hidden';
			me._fullscreen__imgo.style.visibility='inherit';
		}
		me._fullscreen.onmouseout=function (e) {
			me._fullscreen__img.style.visibility='inherit';
			me._fullscreen__imgo.style.visibility='hidden';
		}
		me._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_buttons.appendChild(me._fullscreen);
		el=me._fullscreen_off=document.createElement('div');
		els=me._fullscreen_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOn'+
			'NwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4NiwzLjUsMTZ2OC4xMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0'+
			'Ni0wLjM1MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMjI2LTAuMjI2LDAuMzUtMC41MjUsMC4zNS0wLjg0NlYxNmMwLTAuMzE0LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMiwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTE0LjgwNCwyMi45MjQmI3hkOyYjeGE7JiN4OTsmI3g5O0g1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLjUzNi0xLjE5NS0xLjE5Ni0xLjE5NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMz'+
			'A4QzMuNSwxMy40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDAmI3hkOyYjeGE7JiN4OTsmI3g5O1Y5LjA3NmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2YzAtMC42Ni0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5Nkg0LjY5N2MtMC4zMTUsMC0wLjYyMywwLjEyNy0wLjg0NiwwLjM1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwx'+
			'LjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjUzNS0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnMwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0M2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2UzE2Ljc4Miw2LjY4NCwxNi4xMjIsNi42ODR6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTIyLjY5OCw5LjA3NmgwLjI0M2'+
			'MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NlM4LjM5OSw5LjA3Niw5LjA2LDkuMDc2eiBNMTIuNDY5LDkuMDc2aDAuMjQzYzAuNjYxLDAsMS4xOTYtMC41MzYs'+
			'MS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOC41LDExLjY0NiwyNy45NjQsMTEuMTExLDI3LjMwNCwxMS4xMTF6IE0yNy4zMDQsMT'+
			'QuNjVjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7aC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCww'+
			'Ljg0Ni0wLjM1MSYjeGQ7JiN4YTsmI3g5OyYjeDk7czAuMzUxLTAuNTMsMC4zNTEtMC44NDZ2LTEuMTk2QzI4LjUsMjIuMjY0LDI3Ljk2NCwyMS43MjgsMjcuMzA0LDIxLjcyOHogTTI3LjMwNCwxOC4xODljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MC4zMDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yMjMtMC4yMjItMC41Mz'+
			'EtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWNy44OEMyOC41LDcuNTY0LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzN6IE0yMS44NjMsMTMuMjYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMC4yMjEtMC4xNDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0w'+
			'LjIyMSwwLjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0xOS4zMjksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LD'+
			'E5LjMyOSwyMi45MjR6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTcuOTg5LDE1LjExOSwxOC4yODMsMTUuMjY0LDE4LjU4NCwxNS4yNjR6IE0yMi43MzksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi45MjR6IE0yNS4xMDQsOS45NzYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNi0wLjE1NmwwLj'+
			'IyMi0wLjE0OEMyNS4yNzQsMTAuOTgxLDI1LjM4OSwxMC40MDMsMjUuMTA0LDkuOTc2eiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiI+CiAgPHBhdGggZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4NiwzLjUsMTZ2OC4xMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MSYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7YzAuMjI2LTAuMjI2LDAuMzUtMC41MjUsMC4zNS0wLjg0NlYxNmMwLTAuMzE0LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMiwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTE0LjgwNCwyMi45MjQmI3hkOyYjeGE7JiN4OTsmI3g5O0g1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLjUzNi0xLjE5NS0xLjE5Ni0xLjE5NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4QzMuNSwxMy40Nj'+
			'IsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDAmI3hkOyYjeGE7JiN4OTsmI3g5O1Y5LjA3NmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2YzAtMC42Ni0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5Nkg0LjY5N2MtMC4zMTUsMC0wLjYyMywwLjEyNy0wLjg0NiwwLjM1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNiwx'+
			'LjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjUzNS0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnMwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0M2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2UzE2Ljc4Miw2LjY4NCwxNi4xMjIsNi42ODR6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTIyLjY5OCw5LjA3NmgwLjI0M2MwLjY2LDAsMS4xOT'+
			'YtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NlM4LjM5OSw5LjA3Niw5LjA2LDkuMDc2eiBNMTIuNDY5LDkuMDc2aDAuMjQzYzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTYm'+
			'I3hkOyYjeGE7JiN4OTsmI3g5O3MtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOC41LDExLjY0NiwyNy45NjQsMTEuMTExLDI3LjMwNCwxMS4xMTF6IE0yNy4zMDQsMTQuNjVjLTAuNjYxLD'+
			'AtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7aC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MSYj'+
			'eGQ7JiN4YTsmI3g5OyYjeDk7czAuMzUxLTAuNTMsMC4zNTEtMC44NDZ2LTEuMTk2QzI4LjUsMjIuMjY0LDI3Ljk2NCwyMS43MjgsMjcuMzA0LDIxLjcyOHogTTI3LjMwNCwxOC4xODljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MC4zMDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni'+
			'0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWNy44OEMyOC41LDcuNTY0LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzN6IE0yMS44NjMsMTMuMjYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMC4yMjEtMC4xNDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0NiYj'+
			'eGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0xOS4zMjksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LDE5LjMyOSwyMi45Mj'+
			'R6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTcuOTg5LDE1LjExOSwxOC4yODMsMTUuMjY0LDE4LjU4NCwxNS4yNjR6IE0yMi43MzksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi45MjR6IE0yNS4xMDQsOS45NzYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNi0wLjE1NmwwLjIyMi0wLjE0OEMyNS'+
			'4yNzQsMTAuOTgxLDI1LjM4OSwxMC40MDMsMjUuMTA0LDkuOTc2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOn'+
			'NwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMTYsMTQuODA0SDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxQzMuNjI3LDE1LjM3NywzLjUsMTUuNjg2LDMuNSwxNnY4LjEyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjMxNSwwLjEyNywwLjYyNCwwLjM1LDAuODQ2YzAu'+
			'MjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxSDE2YzAuMzIsMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yMjYtMC4yMjYsMC4zNS0wLjUyNSwwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7SDUuODkzdi01LjcyOGg4LjkxMVYyMi45MjR6IE00LjY5NywxMy45OThjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhjMC0wLjY2LTAuNTM2LTEuMTk1LTEuMTk2LTEuMT'+
			'k1JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTV2MC4zMDhDMy41LDEzLjQ2Miw0LjAzNiwxMy45OTgsNC42OTcsMTMuOTk4eiBNNC42OTcsMTAuNDc3YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTdoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7VjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUmI3hkOyYjeGE7JiN4OTsmI3g5O0MzLjYyOCw3LjI1NywzLjUsNy41NjQsMy41LDcuODh2MS4zOTlDMy41LDku'+
			'OTQsNC4wMzYsMTAuNDc3LDQuNjk3LDEwLjQ3N3ogTTE5LjI4OSw5LjA3NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuNTM1LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0MmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NlMxOC42MjgsOS4wNzYsMTkuMjg5LDkuMDc2eiBNMTYuMTIyLDYuNjg0aC0wLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLD'+
			'YuNjg0LDE2LjEyMiw2LjY4NHomI3hkOyYjeGE7JiN4OTsmI3g5OyBNMjIuNjk4LDkuMDc2aDAuMjQzYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O1MyMi4wMzgsOS4wNzYsMjIuNjk4LDkuMDc2eiBNOS4wNiw5LjA3NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZTOS45NjIsNi42ODQsOS4zMDIsNi42ODRIOS4wNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5'+
			'LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZTMTEuODA4LDkuMDc2LDEyLjQ2OSw5LjA3NnogTTI3LjMwNCwxMS4xMTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOCYjeGQ7JiN4YTsmI3'+
			'g5OyYjeDk7QzI4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTUuMTg2LDI3Ljk2NCwxNC42NSwyNy4zMDQsMTQuNjV6IE0yNy4zMDQsMjEuNzI4Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtoLTAuMjM0Yy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZj'+
			'MCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxLjQzMWMwLjMxNCwwLDAuNjIzLTAuMTI4LDAuODQ2LTAuMzUxJiN4ZDsmI3hhOyYjeDk7JiN4OTtzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTguNzI2LDI3Ljk2NCwxOC4xODksMjcuMzA0LD'+
			'E4LjE4OXogTTI4LjE0OSw3LjAzMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjIyMy0wLjIyMi0wLjUzMS0wLjM1LTAuODQ2LTAuMzVoLTEuMTk2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2wwLjIyMS0wLjE0N2MwLjQyOC0wLjI4NSwwLjU0'+
			'Mi0wLjg2MywwLjI1Ny0xLjI5MWMtMC4yODYtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRDMjEuNTI0LDEzLjQxOCwyMS43MDQsMTMuMzY3LDIxLjg2MywxMy4yNjF6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNS'+
			'wxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIwLjUyNSwyMy40NiwxOS45OSwyMi45MjQsMTkuMzI5LDIyLjkyNHogTTE4LjU4NCwxNS4yNjRjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjljLTAuMjg1LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU3bC0wLjIyMiwwLjE0N2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTYsMS4yOTEmI3hkOyYjeGE7JiN4OTsmI3g5O0MxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHog'+
			'TTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDMjMuOTM2LDIzLjQ2LDIzLjM5OSwyMi45MjQsMjIuNzM5LDIyLjkyNHogTTI1LjEwNCw5Ljk3NiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjI4NS0wLjQyNy0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDdjLTAuNDI4LDAuMjg1LTAuNTQyLDAuODYzLTAuMjU2LDEuMjljMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC'+
			'40MTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgogIDxwYXRoIGQ9Ik0xNiwxNC44MDRINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTFDMy42MjcsMTUuMzc3LDMuNSwxNS42ODYsMy41LDE2djguMTImI3hkOyYj'+
			'eGE7JiN4OTsmI3g5O2MwLDAuMzE1LDAuMTI3LDAuNjI0LDAuMzUsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMC4zMiwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIyNi0wLjIyNiwwLjM1LTAuNTI1LDAuMzUtMC44NDZWMTZjMC0wLjMxNC0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzIsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0xNC44MDQsMjIuOTI0JiN4ZDsmI3hhOyYjeDk7JiN4OTtINS44OTN2LTUuNzI4aDguOTExVjIyLjkyNHogTTQuNjk3LDEzLjk5OGMwLjY2MSwwLDEuMTk2LTAuNTM2LD'+
			'EuMTk2LTEuMTk2di0wLjMwOGMwLTAuNjYtMC41MzYtMS4xOTUtMS4xOTYtMS4xOTUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NXYwLjMwOEMzLjUsMTMuNDYyLDQuMDM2LDEzLjk5OCw0LjY5NywxMy45OTh6IE00LjY5NywxMC40NzdjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5N2gwJiN4ZDsmI3hhOyYjeDk7JiN4OTtWOS4wNzZjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NmMwLTAuNjYtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZINC42OTdjLTAuMzE1LDAtMC42MjMsMC4xMjctMC44NDYsMC4zNSYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7QzMuNjI4LDcuMjU3LDMuNSw3LjU2NCwzLjUsNy44OHYxLjM5OUMzLjUsOS45NCw0LjAzNiwxMC40NzcsNC42OTcsMTAuNDc3eiBNMTkuMjg5LDkuMDc2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC41MzUtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQyYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzE4LjYyOCw5LjA3NiwxOS4yODksOS4wNzZ6IE0xNi4xMjIsNi42ODRoLTAuMjQzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZzMC41MzYsMS4xOTYsMS4xOTYsMS4xOT'+
			'ZoMC4yNDNjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NlMxNi43ODIsNi42ODQsMTYuMTIyLDYuNjg0eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0yMi42OTgsOS4wNzZoMC4yNDNjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2cy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7UzIyLjAzOCw5LjA3NiwyMi42OTgsOS4wNzZ6IE05LjA2LDkuMDc2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NlM5Ljk2Miw2LjY4NCw5LjMwMiw2LjY4NEg5LjA2JiN4ZDsmI3hhOyYj'+
			'eDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTOC4zOTksOS4wNzYsOS4wNiw5LjA3NnogTTEyLjQ2OSw5LjA3NmgwLjI0M2MwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NlMxMS44MDgsOS4wNzYsMTIuNDY5LDkuMDc2eiBNMjcuMzA0LDExLjExMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLj'+
			'Y2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjguNSwxMS42NDYsMjcuOTY0LDExLjExMSwyNy4zMDQsMTEuMTExeiBNMjcuMzA0LDE0LjY1Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxNS4xODYsMjcuOTY0LDE0LjY1LDI3LjMwNCwxNC42NXogTTI3LjMwNCwyMS43MjhjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2gtMC4yMzRjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDEuNDMxYzAuMzE0LDAsMC42MjMtMC4xMjgsMC44NDYtMC4zNTEmI3hkOyYjeGE7JiN4OTsmI3g5O3MwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di0xLjE5NkMyOC41LDIyLjI2NCwyNy45NjQsMjEuNzI4LDI3LjMwNCwyMS43Mjh6IE0yNy4zMDQsMTguMTg5Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djAuMzA4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni'+
			'0xLjE5NnYtMC4zMDhDMjguNSwxOC43MjYsMjcuOTY0LDE4LjE4OSwyNy4zMDQsMTguMTg5eiBNMjguMTQ5LDcuMDMzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMjIzLTAuMjIyLTAuNTMxLTAuMzUtMC44NDYtMC4zNWgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDMzeiBNMjEuODYzLDEzLjI2MSYj'+
			'eGQ7JiN4YTsmI3g5OyYjeDk7bDAuMjIxLTAuMTQ3YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxYy0wLjI4Ni0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNEMyMS41MjQsMTMuNDE4LDIxLjcwNCwxMy4zNjcsMjEuODYzLDEzLjI2MXomI3hkOyYjeGE7JiN4OTsmI3g5OyBNMTkuMzI5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLj'+
			'UzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjAuNTI1LDIzLjQ2LDE5Ljk5LDIyLjkyNCwxOS4zMjksMjIuOTI0eiBNMTguNTg0LDE1LjI2NGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOWMtMC4yODUtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5MSYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7QzE3Ljk4OSwxNS4xMTksMTguMjgzLDE1LjI2NCwxOC41ODQsMTUuMjY0eiBNMjIuNzM5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkMyMy45MzYsMjMuNDYsMjMuMzk5LDIyLjkyNCwyMi43MzksMjIuOTI0eiBNMjUuMTA0LDkuOTc2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMjg1LTAuNDI3LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0N2MtMC40MjgsMC4yODUtMC41NDIsMC'+
			'44NjMtMC4yNTYsMS4yOWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTYtMC4xNTZsMC4yMjItMC4xNDhDMjUuMjc0LDEwLjk4MSwyNS4zODksMTAuNDAzLDI1LjEwNCw5Ljk3NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._fullscreen_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="fullscreen_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen_off.style[domTransition]='opacity 500ms ease 0ms';
				if (me._fullscreen_off.ggCurrentLogicStateAlpha == 0) {
					me._fullscreen_off.style.visibility=me._fullscreen_off.ggVisible?'inherit':'hidden';
					me._fullscreen_off.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._fullscreen_off.style.opacity == 0.0) { me._fullscreen_off.style.visibility="hidden"; } }, 505);
					me._fullscreen_off.style.opacity=0;
				}
			}
		}
		me._fullscreen_off.onmouseover=function (e) {
			me._fullscreen_off__img.style.visibility='hidden';
			me._fullscreen_off__imgo.style.visibility='inherit';
		}
		me._fullscreen_off.onmouseout=function (e) {
			me._fullscreen_off__img.style.visibility='inherit';
			me._fullscreen_off__imgo.style.visibility='hidden';
		}
		me._fullscreen_off.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_buttons.appendChild(me._fullscreen_off);
		el=me._tt_fullscreen=document.createElement('div');
		els=me._tt_fullscreen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_fullscreen";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_fullscreen.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_fullscreen.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_fullscreen.style.top='-25px';
					me._tt_fullscreen.ggUpdatePosition(true);
				}
				else {
					me._tt_fullscreen.ggDx=0;
					me._tt_fullscreen.style.top='32px';
					me._tt_fullscreen.ggUpdatePosition(true);
				}
			}
		}
		me._tt_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['fullscreen_buttons'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_fullscreen.style.visibility=(Number(me._tt_fullscreen.style.opacity)>0||!me._tt_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_fullscreen.ggVisible=true;
				}
				else {
					me._tt_fullscreen.style.visibility="hidden";
					me._tt_fullscreen.ggVisible=false;
				}
			}
		}
		me._tt_fullscreen.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getIsFullscreen() == false))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_fullscreen.ggCurrentLogicStateText = newLogicStateText;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateText == 0) {
					me._tt_fullscreen.ggText="Exit Fullscreen";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Exit Fullscreen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else if (me._tt_fullscreen.ggCurrentLogicStateText == 1) {
					me._tt_fullscreen.ggText="Enter Fullscreen";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Enter Fullscreen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else {
					me._tt_fullscreen.ggText="";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._fullscreen_buttons.appendChild(me._tt_fullscreen);
		me._controller_slider.appendChild(me._fullscreen_buttons);
		el=me._gyro=document.createElement('div');
		el.ggId="gyro";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 192px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_gyro') == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_gyro') == 1))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_gyro') == 2))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_gyro') == 3))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_gyro') == 4))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_gyro') == 5))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('pos_gyro') == 6))
			)
			{
				newLogicStatePosition = 6;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._gyro.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._gyro.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._gyro.style[domTransition]='left 0s, top 0s';
				if (me._gyro.ggCurrentLogicStatePosition == 0) {
					me._gyro.style.left='0px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 1) {
					me._gyro.style.left='32px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 2) {
					me._gyro.style.left='64px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 3) {
					me._gyro.style.left='96px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 4) {
					me._gyro.style.left='128px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 5) {
					me._gyro.style.left='160px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 6) {
					me._gyro.style.left='192px';
					me._gyro.style.top='0px';
				}
				else {
					me._gyro.style.left='192px';
					me._gyro.style.top='0px';
				}
			}
		}
		me._gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro.style[domTransition]='left 0s, top 0s';
				if (me._gyro.ggCurrentLogicStateVisible == 0) {
					me._gyro.style.visibility=(Number(me._gyro.style.opacity)>0||!me._gyro.style.opacity)?'inherit':'hidden';
					me._gyro.ggVisible=true;
				}
				else {
					me._gyro.style.visibility="hidden";
					me._gyro.ggVisible=false;
				}
			}
		}
		me._gyro.onclick=function (e) {
			player.stopAutorotate();
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._gyro.onmouseover=function (e) {
			me.elementMouseOver['gyro']=true;
			me._tt_gyro.logicBlock_visible();
		}
		me._gyro.onmouseout=function (e) {
			me.elementMouseOver['gyro']=false;
			me._tt_gyro.logicBlock_visible();
		}
		me._gyro.ontouchend=function (e) {
			me.elementMouseOver['gyro']=false;
			me._tt_gyro.logicBlock_visible();
		}
		me._gyro.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_on=document.createElement('div');
		els=me._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjAvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZlcnNpb249IjEuMCIgZW5hYmxlLW'+
			'JhY2tncm91bmQ9Im5ldyAtMzUwNi42NjcgLTI2MDYgMzIgMzIiIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeT0iMHB4IiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeD0iMHB4IiB2aWV3Qm94PSItMzUwNi42Njcg'+
			'LTI2MDYgMzIgMzIiPgogPGcgaWQ9IkxheWVyXzEiLz4KIDxnIGlkPSJFYmVuZV8xIj4KICA8Zz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTS0zNDkyLjA4MS0yNTkwLjM1YzAuMTcyLDAuNTAyLDAuNjQyLDAuODE3LDEuMTQ1LDAuODE3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTMsMCwwLjI2Mi0wLjAyMSwwLjM5Mi0wLjA2NWMwLjYzMi0wLjIxNiwwLjk2OS0wLjkwNCwwLjc1Mi0xLjUzN2wtMi4wODMtNi4wOGMtMC4yMTYtMC42MzEtMC45MDYtMC45NjYtMS41MzYtMC43NTImI3hkOyYjeGE7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjLTAuNjMzLDAuMjE2LTAuOTY5LDAuOTA0LTAuNzUzLDEuNTM2TC0zNDkyLjA4MS0yNTkwLjM1eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTS0zNDkwLjY2Ny0yNjAyLjVjLTYuODkyLDAtMTIuNDk5LDUuNjA3LTEyLjQ5OSwxMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7czUuNjA3LDEyLjUsMTIuNDk5LDEyLjVzMTIuNS01LjYwNywxMi41LTEyLjVTLTM0ODMuNzc1LTI2MDIuNS0zNDkwLjY2Ny0yNjAyLjV6IE0tMzQ5MC42NjctMjU3OS45MTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7'+
			'JiN4OTtjLTUuNTU4LDAtMTAuMDgtNC41MjEtMTAuMDgtMTAuMDgxYzAtNS41NTksNC41MjItMTAuMDgsMTAuMDgtMTAuMDhjNS41NTksMCwxMC4wODEsNC41MjEsMTAuMDgxLDEwLjA4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zNDgwLjU4Ni0yNTg0LjQ0MS0zNDg1LjEwOC0yNTc5LjkxOS0zNDkwLjY2Ny0yNTc5LjkxOXoiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0tMzQ4Mi40NDEtMjU5Mi45NTdjLTAuNjcyLTEuOTYxLTIuODQ3LTMuMTMyLTUuODE3LTMuMTMyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5Oy'+
			'YjeDk7Yy0wLjc2NCwwLTEuNTYyLDAuMDg5LTIuMzY1LDAuMjQ2bDAuNzkyLDIuMzExYzAuNTM2LTAuMDg4LDEuMDY1LTAuMTM4LDEuNTczLTAuMTM4YzEuODMyLDAsMy4yMTYsMC41ODgsMy41MjgsMS40OTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC40NzYsMS4zODctMS40NDksMy43NzYtNC45NzEsNC45ODNjLTEuMTY0LDAuMzk4LTIuMzU5LDAuNjEtMy40NTYsMC42MWMtMS44MzIsMC0zLjIxNi0wLjU4OC0zLjUyOC0xLjQ5NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4zODYtMS4xMjksMC44MTEtMi45MTcsMy4xNjMtNC4xOTVsLTAuNzkxLTIuMzA5Yy0zLjUz'+
			'LDEuNzkyLTUuNTI1LDQuNzY0LTQuNjYxLDcuMjg4YzAuNjcyLDEuOTYxLDIuODQ3LDMuMTMyLDUuODE3LDMuMTMyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuOTg1LDAsMi4wMjUtMC4xMzgsMy4wNjEtMC4zOTZsMC41OTgsMS43NDNjMC4xNzIsMC41MDIsMC42NDIsMC44MTgsMS4xNDUsMC44MThjMC4xMywwLDAuMjYzLTAuMDIxLDAuMzkzLTAuMDY1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNjMxLTAuMjE3LDAuOTY5LTAuOTA0LDAuNzUxLTEuNTM3bC0wLjU5Ny0xLjc0MUMtMzQ4My44NDMtMjU4Ny4wNzctMzQ4MS41MjItMjU5MC4yNzEtMzQ4Mi40NDEtMjU5Mi'+
			'45NTd6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNLTM0OTIuMDgxLTI1OTAuMzVjMC4xNzIsMC41MDIsMC42NDIsMC44MTcsMS4xNDUsMC44MTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xMywwLDAuMjYyLTAuMDIxLDAuMzkyLTAuMDY1YzAuNjMyLTAuMjE2LDAuOTY5LTAuOTA0LDAuNzUyLTEuNTM3bC0yLjA4My02LjA4Yy0wLjIxNi0wLjYzMS0wLjkwNi0wLjk2Ni0xLjUzNi0wLjc1MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42MzMsMC4yMTYtMC45Njks'+
			'MC45MDQtMC43NTMsMS41MzZMLTM0OTIuMDgxLTI1OTAuMzV6IiBzdHJva2Utd2lkdGg9IjAuMiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNLTM0OTAuNjY3LTI2MDIuNWMtNi44OTIsMC0xMi40OTksNS42MDctMTIuNDk5LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtzNS42MDcsMTIuNSwxMi40OTksMTIuNXMxMi41LTUuNjA3LDEyLjUtMTIuNVMtMzQ4My43NzUtMjYwMi41LTM0OTAuNjY3LTI2MDIuNXogTS0zNDkwLjY2Ny0yNTc5LjkxOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtNS41NTgsMC0xMC4wOC00LjUyMS0xMC'+
			'4wOC0xMC4wODFjMC01LjU1OSw0LjUyMi0xMC4wOCwxMC4wOC0xMC4wOGM1LjU1OSwwLDEwLjA4MSw0LjUyMSwxMC4wODEsMTAuMDgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTM0ODAuNTg2LTI1ODQuNDQxLTM0ODUuMTA4LTI1NzkuOTE5LTM0OTAuNjY3LTI1NzkuOTE5eiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTS0zNDgyLjQ0MS0yNTkyLjk1N2MtMC42NzItMS45NjEtMi44NDctMy4xMzItNS44MTctMy4xMzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzY0LDAtMS41NjIsMC4wODkt'+
			'Mi4zNjUsMC4yNDZsMC43OTIsMi4zMTFjMC41MzYtMC4wODgsMS4wNjUtMC4xMzgsMS41NzMtMC4xMzhjMS44MzIsMCwzLjIxNiwwLjU4OCwzLjUyOCwxLjQ5OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQ3NiwxLjM4Ny0xLjQ0OSwzLjc3Ni00Ljk3MSw0Ljk4M2MtMS4xNjQsMC4zOTgtMi4zNTksMC42MS0zLjQ1NiwwLjYxYy0xLjgzMiwwLTMuMjE2LTAuNTg4LTMuNTI4LTEuNDk3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjM4Ni0xLjEyOSwwLjgxMS0yLjkxNywzLjE2My00LjE5NWwtMC43OTEtMi4zMDljLTMuNTMsMS43OTItNS41MjUsNC43NjQtNC42NjEsNy'+
			'4yODhjMC42NzIsMS45NjEsMi44NDcsMy4xMzIsNS44MTcsMy4xMzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC45ODUsMCwyLjAyNS0wLjEzOCwzLjA2MS0wLjM5NmwwLjU5OCwxLjc0M2MwLjE3MiwwLjUwMiwwLjY0MiwwLjgxOCwxLjE0NSwwLjgxOGMwLjEzLDAsMC4yNjMtMC4wMjEsMC4zOTMtMC4wNjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC42MzEtMC4yMTcsMC45NjktMC45MDQsMC43NTEtMS41MzdsLTAuNTk3LTEuNzQxQy0zNDgzLjg0My0yNTg3LjA3Ny0zNDgxLjUyMi0yNTkwLjI3MS0zNDgyLjQ0MS0yNTkyLjk1N3oiIHN0cm9rZS13aWR0aD0iMC4yIi8+'+
			'CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiIvPgo8L3N2Zz4K';
		me._gyro_on__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjAvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZlcnNpb249IjEuMCIgZW5hYmxlLW'+
			'JhY2tncm91bmQ9Im5ldyAtMzUwNi42NjcgLTI1NzEuMzMzIDMyIDMyIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4bWxuczppPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iIHk9IjBweCIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHg9IjBweCIgdmlld0JveD0iLTM1MDYu'+
			'NjY3IC0yNTcxLjMzMyAzMiAzMiI+CiA8ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiPgogIDxnPgogICA8ZyBvcGFjaXR5PSIwLjQiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBkPSJNLTM0OTIuMjIzLTI1NTUuNzE4YzAuMTg5LDAuNTUyLDAuNzA2LDAuODk5LDEuMjU5LDAuODk5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTQzLDAsMC4yODktMC4wMjMsMC40MzEtMC4wNzJjMC42OTYtMC4yMzgsMS4wNjUtMC45OTUsMC44MjgtMS42OWwtMi4yOTEtNi42ODhjLTAuMjM4LTAuNjk0LTAuOTk3LTEuMDYzLTEuNjg5LTAuODI3JiN4ZDsmI3'+
			'hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY5NiwwLjIzOC0xLjA2NSwwLjk5NC0wLjgyOCwxLjY4OUwtMzQ5Mi4yMjMtMjU1NS43MTh6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBkPSJNLTM0OTAuNjY3LTI1NjkuMDgzYy03LjU4MSwwLTEzLjc0OSw2LjE2OC0xMy43NDksMTMuNzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCw3LjU4Miw2LjE2OCwxMy43NSwxMy43NDksMTMuNzVjNy41ODIsMCwxMy43NS02LjE2NywxMy43NS0xMy43NUMtMzQ3Ni45MTctMjU2Mi45MTYtMzQ4My4wODUtMjU2OS4wODMtMzQ5MC42'+
			'NjctMjU2OS4wODN6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0tMzQ5MC42NjctMjU0NC4yNDVjLTYuMTEzLDAtMTEuMDg3LTQuOTc0LTExLjA4Ny0xMS4wODljMC02LjExNCw0Ljk3NC0xMS4wODgsMTEuMDg3LTExLjA4OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2M2LjExNCwwLDExLjA4OSw0Ljk3NCwxMS4wODksMTEuMDg4Qy0zNDc5LjU3OC0yNTQ5LjIxOS0zNDg0LjU1My0yNTQ0LjI0NS0zNDkwLjY2Ny0yNTQ0LjI0NXoiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0tMzQ4MS42MTktMjU1OC41OD'+
			'ZjLTAuNzQtMi4xNTgtMy4xMzItMy40NDYtNi4zOTktMy40NDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuODQsMC0xLjcxOCwwLjA5OC0yLjYwMSwwLjI3bDAuODcxLDIuNTQyYzAuNTktMC4wOTcsMS4xNzItMC4xNTEsMS43My0wLjE1MWMyLjAxNSwwLDMuNTM4LDAuNjQ3LDMuODgxLDEuNjQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNTIzLDEuNTI2LTEuNTk0LDQuMTU0LTUuNDY4LDUuNDgxYy0xLjI4LDAuNDM4LTIuNTk1LDAuNjcxLTMuODAxLDAuNjcxYy0yLjAxNSwwLTMuNTM4LTAuNjQ3LTMuODgtMS42NDcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4'+
			'OTtjLTAuNDI1LTEuMjQyLDAuODkyLTMuMjA4LDMuNDc5LTQuNjE1bC0wLjg3LTIuNTRjLTMuODgzLDEuOTcxLTYuMDc3LDUuMjQtNS4xMjcsOC4wMTdjMC43MzksMi4xNTcsMy4xMzIsMy40NDUsNi4zOTgsMy40NDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4wODMsMCwyLjIyOC0wLjE1MiwzLjM2Ny0wLjQzNmwwLjY1NywxLjkxN2MwLjE5LDAuNTUzLDAuNzA2LDAuODk5LDEuMjU5LDAuODk5YzAuMTQzLDAsMC4yODktMC4wMjMsMC40MzItMC4wNzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC42OTQtMC4yMzksMS4wNjYtMC45OTUsMC44MjctMS42OWwtMC42NTYtMS'+
			'45MTVDLTM0ODMuMTYxLTI1NTIuMTE4LTM0ODAuNjA3LTI1NTUuNjMxLTM0ODEuNjE5LTI1NTguNTg2eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTS0zNDkyLjIyMy0yNTU1LjcxOGMwLjE4OSwwLjU1MiwwLjcwNiwwLjg5OSwxLjI1OSwwLjg5OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjE0MywwLDAuMjg5LTAuMDIzLDAuNDMxLTAuMDcyYzAuNjk2LTAuMjM4LDEuMDY1LTAuOTk1LDAuODI4LTEuNjlsLTIuMjkxLTYuNjg4Yy0wLjIzOC0wLjY5NC0wLjk5Ny0xLjA2My0xLjY4'+
			'OS0wLjgyNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42OTYsMC4yMzgtMS4wNjUsMC45OTQtMC44MjgsMS42ODlMLTM0OTIuMjIzLTI1NTUuNzE4eiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTS0zNDkwLjY2Ny0yNTY5LjA4M2MtNy41ODEsMC0xMy43NDksNi4xNjgtMTMuNzQ5LDEzLjc1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsNy41ODIsNi4xNjgsMTMuNzUsMTMuNzQ5LDEzLjc1YzcuNTgyLDAsMTMuNzUtNi4xNjcsMTMuNzUtMTMuNzVDLTM0NzYuOTE3LTI1NjIuOTE2LTM0ODMuMD'+
			'g1LTI1NjkuMDgzLTM0OTAuNjY3LTI1NjkuMDgzeiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyBNLTM0OTAuNjY3LTI1NDQuMjQ1Yy02LjExMywwLTExLjA4Ny00Ljk3NC0xMS4wODctMTEuMDg5YzAtNi4xMTQsNC45NzQtMTEuMDg4LDExLjA4Ny0xMS4wODgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNi4xMTQsMCwxMS4wODksNC45NzQsMTEuMDg5LDExLjA4OEMtMzQ3OS41NzgtMjU0OS4yMTktMzQ4NC41NTMtMjU0NC4yNDUtMzQ5MC42NjctMjU0NC4yNDV6IiBzdHJva2Utd2lkdGg9IjAuMiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBk'+
			'PSJNLTM0ODEuNjE5LTI1NTguNTg2Yy0wLjc0LTIuMTU4LTMuMTMyLTMuNDQ2LTYuMzk5LTMuNDQ2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjg0LDAtMS43MTgsMC4wOTgtMi42MDEsMC4yN2wwLjg3MSwyLjU0MmMwLjU5LTAuMDk3LDEuMTcyLTAuMTUxLDEuNzMtMC4xNTFjMi4wMTUsMCwzLjUzOCwwLjY0NywzLjg4MSwxLjY0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjUyMywxLjUyNi0xLjU5NCw0LjE1NC01LjQ2OCw1LjQ4MWMtMS4yOCwwLjQzOC0yLjU5NSwwLjY3MS0zLjgwMSwwLjY3MWMtMi4wMTUsMC0zLjUzOC0wLjY0Ny0zLjg4LTEuNjQ3JiN4ZDsmI3'+
			'hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjQyNS0xLjI0MiwwLjg5Mi0zLjIwOCwzLjQ3OS00LjYxNWwtMC44Ny0yLjU0Yy0zLjg4MywxLjk3MS02LjA3Nyw1LjI0LTUuMTI3LDguMDE3YzAuNzM5LDIuMTU3LDMuMTMyLDMuNDQ1LDYuMzk4LDMuNDQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMDgzLDAsMi4yMjgtMC4xNTIsMy4zNjctMC40MzZsMC42NTcsMS45MTdjMC4xOSwwLjU1MywwLjcwNiwwLjg5OSwxLjI1OSwwLjg5OWMwLjE0MywwLDAuMjg5LTAuMDIzLDAuNDMyLTAuMDcyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNjk0LTAuMjM5LDEuMDY2LTAuOTk1'+
			'LDAuODI3LTEuNjlsLTAuNjU2LTEuOTE1Qy0zNDgzLjE2MS0yNTUyLjExOC0zNDgwLjYwNy0yNTU1LjYzMS0zNDgxLjYxOS0yNTU4LjU4NnoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiIvPgo8L3N2Zz4K';
		me._gyro_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gyro_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_on.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_on.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_on.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_on.style[domTransition]='opacity 500ms ease 0ms';
				if (me._gyro_on.ggCurrentLogicStateAlpha == 0) {
					me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
					me._gyro_on.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._gyro_on.style.opacity == 0.0) { me._gyro_on.style.visibility="hidden"; } }, 505);
					me._gyro_on.style.opacity=0;
				}
			}
		}
		me._gyro_on.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._gyro_on.style[domTransition]='none';
			} else {
				me._gyro_on.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_on.style.opacity='0';
			me._gyro_on.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._gyro_off.style[domTransition]='none';
			} else {
				me._gyro_off.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_off.style.opacity='1';
			me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
		}
		me._gyro_on.onmouseover=function (e) {
			me._gyro_on__img.style.visibility='hidden';
			me._gyro_on__imgo.style.visibility='inherit';
		}
		me._gyro_on.onmouseout=function (e) {
			me._gyro_on__img.style.visibility='inherit';
			me._gyro_on__imgo.style.visibility='hidden';
		}
		me._gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_on);
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjAvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZlcnNpb249IjEuMCIgZW5hYmxlLW'+
			'JhY2tncm91bmQ9Im5ldyAtMzQ2OS4yNSAtMjYwNiAzMiAzMiIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB5PSIwcHgiIHhtbG5zOng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vRXh0ZW5zaWJpbGl0eS8xLjAvIiB4PSIwcHgiIHZpZXdCb3g9Ii0zNDY5LjI1IC0y'+
			'NjA2IDMyIDMyIj4KIDxnIGlkPSJMYXllcl8xIj4KICA8Zz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTS0zNDU0LjYwNi0yNTkwLjI4M2MwLjE3LDAuNDk4LDAuNjM2LDAuODEsMS4xMzQsMC44MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjEyOCwwLDAuMjYtMC4wMjEsMC4zODktMC4wNjVjMC42MjYtMC4yMTUsMC45NTktMC44OTYsMC43NDUtMS41MjJsLTIuMDY0LTYuMDIzYy0wLjIxNC0wLjYyNi0wLjg5NC0wLjk1OC0xLjUyMi0wLjc0NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42MjYsMC'+
			'4yMTUtMC45NTksMC44OTYtMC43NDUsMS41MjFMLTM0NTQuNjA2LTI1OTAuMjgzeiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTS0zNDUzLjI1LTI2MDIuNDk5Yy02Ljg5MiwwLTEyLjUsNS42MDctMTIuNSwxMi40OTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCw2Ljg5Myw1LjYwNywxMi41LDEyLjUsMTIuNXMxMi41LTUuNjA3LDEyLjUtMTIuNUMtMzQ0MC43NS0yNTk2Ljg5Mi0zNDQ2LjM1Ny0yNjAyLjQ5OS0zNDUzLjI1LTI2MDIuNDk5eiBNLTM0NTMuMjUtMjU4MC4xMzEmI3hkOyYjeGE7JiN4OTsmI3g5OyYj'+
			'eDk7JiN4OTtjLTUuNDQyLDAtOS44Ny00LjQyNy05Ljg3LTkuODY5czQuNDI4LTkuODY5LDkuODctOS44NjlzOS44Nyw0LjQyOCw5Ljg3LDkuODY5Uy0zNDQ3LjgwNy0yNTgwLjEzMS0zNDUzLjI1LTI1ODAuMTMxeiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTS0zNDQ4Ljc0OS0yNTg1LjQ2MWwtMS44NzktMC45NDFsMC45NDEtMS44NzgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4yMjktMC40NiwwLjA0My0xLjAxOS0wLjQxNS0xLjI0OWMtMC40NTktMC4yMjktMS4wMi0wLjA0My0xLjI0OSwwLjQxNmwtMC45NC'+
			'wxLjg3N2wtMS44NzgtMC45NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC40Ni0wLjIyOS0xLjAxOS0wLjA0NC0xLjI1LDAuNDE2Yy0wLjIyOSwwLjQ2LTAuMDQyLDEuMDIsMC40MTYsMS4yNDlsMS44NzgsMC45NGwtMC45NDEsMS44NzgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMjI5LDAuNDU4LTAuMDQzLDEuMDE4LDAuNDE1LDEuMjQ4YzAuMjMsMC4xMTUsMC40ODYsMC4xMjUsMC43MTEsMC4wNWMwLjIyNS0wLjA3NSwwLjQyNC0wLjIzNiwwLjUzOS0wLjQ2NWwwLjk0LTEuODc4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bDEuODc4LDAuOTQxYzAuMjI5'+
			'LDAuMTE2LDAuNDgzLDAuMTI2LDAuNzA4LDAuMDUxYzAuMjI2LTAuMDc1LDAuNDI1LTAuMjM3LDAuNTQtMC40NjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTM0NDguMTA0LTI1ODQuNjcyLTM0NDguMjktMjU4NS4yMzItMzQ0OC43NDktMjU4NS40NjF6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBkPSJNLTM0NTUuMzMyLTI1ODUuODU2Yy0wLjI5Ni0wLjE0OC0wLjUyNi0wLjM3Ni0wLjY4NC0wLjY0MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMS42NDEtMC4wNjktMi44NjYtMC42MjYtMy4xNTMtMS40Nj'+
			'ljLTAuMjIyLTAuNjQ3LDAuMDktMS41MTgsMC44NTQtMi4zODhjMC41NzctMC42NTgsMS4zNzUtMS4yNjgsMi4zLTEuNzczbC0wLjc4NC0yLjI5MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMS4zMjUsMC42NjktMi40NzIsMS41MTgtMy4zMTgsMi40ODJjLTEuMzY2LDEuNTU3LTEuODM1LDMuMjQyLTEuMzIsNC43NDZjMC42NjUsMS45NDIsMi44MiwzLjEwMiw1Ljc2MiwzLjEwMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjMzMSwwLDAuNjY4LTAuMDE2LDEuMDA5LTAuMDQ2bDAuNTU3LTEuMTA5TC0zNDU1LjMzMi0yNTg1Ljg1NnoiIHN0cm9rZS13aWR0aD0iMS41Ii8+'+
			'CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0tMzQ0NS4wNTgtMjU5Mi44MDJjLTAuNjY2LTEuOTQzLTIuODItMy4xMDMtNS43NjItMy4xMDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzUxLDAtMS41MzQsMC4wODYtMi4zMjIsMC4yMzlsMC43ODYsMi4yOTFjMC41MjQtMC4wODUsMS4wNDItMC4xMzQsMS41MzctMC4xMzRjMS44MTUsMCwzLjE4NywwLjU4MywzLjQ5NSwxLjQ4NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjIyMiwwLjY0Ni0wLjA5LDEuNTE2LTAuODU0LDIuMzg2Yy0wLjIwNiwwLjIzNS0wLjQ0NCwwLjQ2Mi0wLjcwMi'+
			'wwLjY4MmMwLjA1NCwwLjMzMiwwLjAxMiwwLjY4My0wLjE1LDEuMDA1bC0wLjYxMiwxLjIyMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2wxLjA1NywwLjUyOWMwLjg1OC0wLjU0NiwxLjYwOC0xLjE3NCwyLjIwOC0xLjg1N0MtMzQ0NS4wMTItMjU4OS42MTQtMzQ0NC41NDMtMjU5MS4yOTktMzQ0NS4wNTgtMjU5Mi44MDJ6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNLTM0NTQuNjA2LTI1OTAuMjgzYzAuMTcsMC40OTgsMC42MzYsMC44MSwxLjEzNCwwLjgxJiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsmI3g5OyYjeDk7YzAuMTI4LDAsMC4yNi0wLjAyMSwwLjM4OS0wLjA2NWMwLjYyNi0wLjIxNSwwLjk1OS0wLjg5NiwwLjc0NS0xLjUyMmwtMi4wNjQtNi4wMjNjLTAuMjE0LTAuNjI2LTAuODk0LTAuOTU4LTEuNTIyLTAuNzQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjYyNiwwLjIxNS0wLjk1OSwwLjg5Ni0wLjc0NSwxLjUyMUwtMzQ1NC42MDYtMjU5MC4yODN6IiBzdHJva2Utd2lkdGg9IjAuMiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNLTM0NTMuMjUtMjYwMi40OTljLTYuODkyLDAtMTIuNSw1LjYwNy0xMi41LDEyLjQ5OS'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDYuODkzLDUuNjA3LDEyLjUsMTIuNSwxMi41czEyLjUtNS42MDcsMTIuNS0xMi41Qy0zNDQwLjc1LTI1OTYuODkyLTM0NDYuMzU3LTI2MDIuNDk5LTM0NTMuMjUtMjYwMi40OTl6IE0tMzQ1My4yNS0yNTgwLjEzMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtNS40NDIsMC05Ljg3LTQuNDI3LTkuODctOS44NjlzNC40MjgtOS44NjksOS44Ny05Ljg2OXM5Ljg3LDQuNDI4LDkuODcsOS44NjlTLTM0NDcuODA3LTI1ODAuMTMxLTM0NTMuMjUtMjU4MC4xMzF6IiBzdHJva2Utd2lkdGg9IjAuMiIvPgogICAgPHBhdGggZmlsbD0iI0ZG'+
			'RkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNLTM0NDguNzQ5LTI1ODUuNDYxbC0xLjg3OS0wLjk0MWwwLjk0MS0xLjg3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjIyOS0wLjQ2LDAuMDQzLTEuMDE5LTAuNDE1LTEuMjQ5Yy0wLjQ1OS0wLjIyOS0xLjAyLTAuMDQzLTEuMjQ5LDAuNDE2bC0wLjk0LDEuODc3bC0xLjg3OC0wLjk0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ2LTAuMjI5LTEuMDE5LTAuMDQ0LTEuMjUsMC40MTZjLTAuMjI5LDAuNDYtMC4wNDIsMS4wMiwwLjQxNiwxLjI0OWwxLjg3OCwwLjk0bC0wLjk0MSwxLjg3OCYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7JiN4OTsmI3g5O2MtMC4yMjksMC40NTgtMC4wNDMsMS4wMTgsMC40MTUsMS4yNDhjMC4yMywwLjExNSwwLjQ4NiwwLjEyNSwwLjcxMSwwLjA1YzAuMjI1LTAuMDc1LDAuNDI0LTAuMjM2LDAuNTM5LTAuNDY1bDAuOTQtMS44NzgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsMS44NzgsMC45NDFjMC4yMjksMC4xMTYsMC40ODMsMC4xMjYsMC43MDgsMC4wNTFjMC4yMjYtMC4wNzUsMC40MjUtMC4yMzcsMC41NC0wLjQ2NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzQ0OC4xMDQtMjU4NC42NzItMzQ0OC4yOS0yNTg1LjIzMi0zNDQ4Ljc0OS0yNTg1LjQ2MXoiIHN0cm9rZS13'+
			'aWR0aD0iMC4yIi8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0tMzQ1NS4zMzItMjU4NS44NTZjLTAuMjk2LTAuMTQ4LTAuNTI2LTAuMzc2LTAuNjg0LTAuNjQyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjY0MS0wLjA2OS0yLjg2Ni0wLjYyNi0zLjE1My0xLjQ2OWMtMC4yMjItMC42NDcsMC4wOS0xLjUxOCwwLjg1NC0yLjM4OGMwLjU3Ny0wLjY1OCwxLjM3NS0xLjI2OCwyLjMtMS43NzNsLTAuNzg0LTIuMjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjMyNSwwLjY2OS0yLjQ3MiwxLjUxOC0zLjMxOCwyLjQ4MmMtMS4zNj'+
			'YsMS41NTctMS44MzUsMy4yNDItMS4zMiw0Ljc0NmMwLjY2NSwxLjk0MiwyLjgyLDMuMTAyLDUuNzYyLDMuMTAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMzMxLDAsMC42NjgtMC4wMTYsMS4wMDktMC4wNDZsMC41NTctMS4xMDlMLTM0NTUuMzMyLTI1ODUuODU2eiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTS0zNDQ1LjA1OC0yNTkyLjgwMmMtMC42NjYtMS45NDMtMi44Mi0zLjEwMy01Ljc2Mi0zLjEwMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43NTEsMC0xLjUzNCwwLjA4Ni0yLjMy'+
			'MiwwLjIzOWwwLjc4NiwyLjI5MWMwLjUyNC0wLjA4NSwxLjA0Mi0wLjEzNCwxLjUzNy0wLjEzNGMxLjgxNSwwLDMuMTg3LDAuNTgzLDMuNDk1LDEuNDg0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMjIyLDAuNjQ2LTAuMDksMS41MTYtMC44NTQsMi4zODZjLTAuMjA2LDAuMjM1LTAuNDQ0LDAuNDYyLTAuNzAyLDAuNjgyYzAuMDU0LDAuMzMyLDAuMDEyLDAuNjgzLTAuMTUsMS4wMDVsLTAuNjEyLDEuMjIzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bDEuMDU3LDAuNTI5YzAuODU4LTAuNTQ2LDEuNjA4LTEuMTc0LDIuMjA4LTEuODU3Qy0zNDQ1LjAxMi0yNTg5LjYxNC0zND'+
			'Q0LjU0My0yNTkxLjI5OS0zNDQ1LjA1OC0yNTkyLjgwMnoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iRWJlbmVfMSIvPgogPGcgaWQ9IkxheWVyXzIiLz4KPC9zdmc+Cg==';
		me._gyro_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjAvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZlcnNpb249IjEuMCIgZW5hYmxlLW'+
			'JhY2tncm91bmQ9Im5ldyAtMzQ2OS4yNSAtMjU3MS4zMzMgMzIgMzIiIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeT0iMHB4IiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeD0iMHB4IiB2aWV3Qm94PSItMzQ2OS4y'+
			'NSAtMjU3MS4zMzMgMzIgMzIiPgogPGcgaWQ9IkxheWVyXzEiPgogIDxnPgogICA8ZyBvcGFjaXR5PSIwLjQiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBkPSJNLTM0NTQuNzQyLTI1NTUuNjQ1YzAuMTg4LDAuNTQ3LDAuNywwLjg5MSwxLjI0OCwwLjg5MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjE0MSwwLDAuMjg2LTAuMDIyLDAuNDI3LTAuMDcxYzAuNjg4LTAuMjM2LDEuMDU1LTAuOTg2LDAuODE5LTEuNjc0bC0yLjI3MS02LjYyNWMtMC4yMzUtMC42ODktMC45ODMtMS4wNTQtMS42NzUtMC44MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2'+
			'MtMC42ODgsMC4yMzYtMS4wNTUsMC45ODYtMC44MTksMS42NzRMLTM0NTQuNzQyLTI1NTUuNjQ1eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTS0zNDUzLjI1LTI1NjkuMDgzYy03LjU4MSwwLTEzLjc1LDYuMTY4LTEzLjc1LDEzLjc0OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDcuNTgyLDYuMTY4LDEzLjc1LDEzLjc1LDEzLjc1YzcuNTgyLDAsMTMuNzUtNi4xNjcsMTMuNzUtMTMuNzVDLTM0MzkuNS0yNTYyLjkxNS0zNDQ1LjY2OC0yNTY5LjA4My0zNDUzLjI1LTI1NjkuMDgzeiYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7JiN4OTsmI3g5OyBNLTM0NTMuMjUtMjU0NC40NzljLTUuOTg2LDAtMTAuODU3LTQuODctMTAuODU3LTEwLjg1NWMwLTUuOTg1LDQuODcxLTEwLjg1NiwxMC44NTctMTAuODU2YzUuOTg3LDAsMTAuODU2LDQuODcxLDEwLjg1NiwxMC44NTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTM0NDIuMzkzLTI1NDkuMzQ4LTM0NDcuMjYzLTI1NDQuNDc5LTM0NTMuMjUtMjU0NC40Nzl6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBkPSJNLTM0NDguMjk4LTI1NTAuMzQxbC0yLjA2Ny0xLjAzNWwxLjAzNi0yLjA2NiYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjI1Mi0wLjUwNiwwLjA0OC0xLjEyLTAuNDU3LTEuMzc0Yy0wLjUwNS0wLjI1Mi0xLjEyMi0wLjA0OC0xLjM3NCwwLjQ1N2wtMS4wMzQsMi4wNjVsLTIuMDY2LTEuMDM0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUwNi0wLjI1Mi0xLjEyMS0wLjA0OC0xLjM3NSwwLjQ1N2MtMC4yNTIsMC41MDYtMC4wNDcsMS4xMjIsMC40NTcsMS4zNzRsMi4wNjYsMS4wMzRsLTEuMDM2LDIuMDY2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjI1MiwwLjUwNC0wLjA0NywxLjExOSwwLjQ1NywxLjM3M2MwLjI1MywwLjEyNiwwLjUzNCww'+
			'LjEzOCwwLjc4MywwLjA1NWMwLjI0OC0wLjA4MywwLjQ2Ny0wLjI2LDAuNTkyLTAuNTEybDEuMDM1LTIuMDY2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bDIuMDY2LDEuMDM1YzAuMjUyLDAuMTI3LDAuNTMxLDAuMTM5LDAuNzc5LDAuMDU2YzAuMjQ5LTAuMDgzLDAuNDY4LTAuMjYxLDAuNTk0LTAuNTEzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zNDQ3LjU5LTI1NDkuNDc0LTM0NDcuNzk0LTI1NTAuMDg5LTM0NDguMjk4LTI1NTAuMzQxeiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTS0zNDU1LjU0LT'+
			'I1NTAuNzc2Yy0wLjMyNi0wLjE2NC0wLjU3OS0wLjQxNC0wLjc1Mi0wLjcwNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMS44MDUtMC4wNzYtMy4xNTItMC42ODktMy40NjktMS42MTVjLTAuMjQ1LTAuNzEyLDAuMDk5LTEuNjY5LDAuOTM5LTIuNjI2YzAuNjM1LTAuNzI0LDEuNTEyLTEuMzk1LDIuNTMtMS45NTFsLTAuODYyLTIuNTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuNDU3LDAuNzM2LTIuNzE5LDEuNjctMy42NDksMi43MzFjLTEuNTAzLDEuNzEyLTIuMDE5LDMuNTY2LTEuNDUyLDUuMjJjMC43MzEsMi4xMzYsMy4xMDIsMy40MTIsNi4zMzgsMy40MTImI3hk'+
			'OyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4zNjMsMCwwLjczNC0wLjAxOCwxLjEwOS0wLjA1MWwwLjYxMi0xLjIyTC0zNDU1LjU0LTI1NTAuNzc2eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTS0zNDQ0LjIzOC0yNTU4LjQxNmMtMC43MzMtMi4xMzgtMy4xMDItMy40MTMtNi4zMzgtMy40MTMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuODI2LDAtMS42ODcsMC4wOTUtMi41NTUsMC4yNjNsMC44NjQsMi41MmMwLjU3Ni0wLjA5MywxLjE0Ni0wLjE0NywxLjY5LTAuMTQ3YzEuOTk2LDAsMy41MDUsMC42ND'+
			'EsMy44NDQsMS42MzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4yNDUsMC43MS0wLjA5OSwxLjY2Ny0wLjkzOSwyLjYyNGMtMC4yMjcsMC4yNTgtMC40ODgsMC41MDgtMC43NzIsMC43NWMwLjA1OSwwLjM2NSwwLjAxMywwLjc1MS0wLjE2NSwxLjEwNmwtMC42NzMsMS4zNDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsMS4xNjMsMC41ODJjMC45NDQtMC42MDEsMS43NjktMS4yOTEsMi40MjktMi4wNDNDLTM0NDQuMTg4LTI1NTQuOTA5LTM0NDMuNjcyLTI1NTYuNzYzLTM0NDQuMjM4LTI1NTguNDE2eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgPC9nPgogICA8Zz4KICAg'+
			'IDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTS0zNDU0Ljc0Mi0yNTU1LjY0NWMwLjE4OCwwLjU0NywwLjcsMC44OTEsMS4yNDgsMC44OTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xNDEsMCwwLjI4Ni0wLjAyMiwwLjQyNy0wLjA3MWMwLjY4OC0wLjIzNiwxLjA1NS0wLjk4NiwwLjgxOS0xLjY3NGwtMi4yNzEtNi42MjVjLTAuMjM1LTAuNjg5LTAuOTgzLTEuMDU0LTEuNjc1LTAuODImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjg4LDAuMjM2LTEuMDU1LDAuOTg2LTAuODE5LDEuNjc0TC0zNDU0Ljc0Mi0yNTU1LjY0NXoiIHN0cm9rZS'+
			'13aWR0aD0iMC4yIi8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0tMzQ1My4yNS0yNTY5LjA4M2MtNy41ODEsMC0xMy43NSw2LjE2OC0xMy43NSwxMy43NDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCw3LjU4Miw2LjE2OCwxMy43NSwxMy43NSwxMy43NWM3LjU4MiwwLDEzLjc1LTYuMTY3LDEzLjc1LTEzLjc1Qy0zNDM5LjUtMjU2Mi45MTUtMzQ0NS42NjgtMjU2OS4wODMtMzQ1My4yNS0yNTY5LjA4M3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTS0zNDUzLjI1LTI1NDQuNDc5Yy01Ljk4NiwwLTEwLjg1Ny00Ljg3LTEwLjg1Ny0x'+
			'MC44NTVjMC01Ljk4NSw0Ljg3MS0xMC44NTYsMTAuODU3LTEwLjg1NmM1Ljk4NywwLDEwLjg1Niw0Ljg3MSwxMC44NTYsMTAuODU2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zNDQyLjM5My0yNTQ5LjM0OC0zNDQ3LjI2My0yNTQ0LjQ3OS0zNDUzLjI1LTI1NDQuNDc5eiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTS0zNDQ4LjI5OC0yNTUwLjM0MWwtMi4wNjctMS4wMzVsMS4wMzYtMi4wNjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4yNTItMC41MDYsMC4wNDgtMS4xMi0wLjQ1Ny0xLjM3NG'+
			'MtMC41MDUtMC4yNTItMS4xMjItMC4wNDgtMS4zNzQsMC40NTdsLTEuMDM0LDIuMDY1bC0yLjA2Ni0xLjAzNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MDYtMC4yNTItMS4xMjEtMC4wNDgtMS4zNzUsMC40NTdjLTAuMjUyLDAuNTA2LTAuMDQ3LDEuMTIyLDAuNDU3LDEuMzc0bDIuMDY2LDEuMDM0bC0xLjAzNiwyLjA2NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4yNTIsMC41MDQtMC4wNDcsMS4xMTksMC40NTcsMS4zNzNjMC4yNTMsMC4xMjYsMC41MzQsMC4xMzgsMC43ODMsMC4wNTVjMC4yNDgtMC4wODMsMC40NjctMC4yNiwwLjU5Mi0wLjUxMmwxLjAzNS0y'+
			'LjA2NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2wyLjA2NiwxLjAzNWMwLjI1MiwwLjEyNywwLjUzMSwwLjEzOSwwLjc3OSwwLjA1NmMwLjI0OS0wLjA4MywwLjQ2OC0wLjI2MSwwLjU5NC0wLjUxMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzQ0Ny41OS0yNTQ5LjQ3NC0zNDQ3Ljc5NC0yNTUwLjA4OS0zNDQ4LjI5OC0yNTUwLjM0MXoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0tMzQ1NS41NC0yNTUwLjc3NmMtMC4zMjYtMC4xNjQtMC41NzktMC40MTQtMC43NTItMC43MDcmI3hkOyYjeGE7Ji'+
			'N4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODA1LTAuMDc2LTMuMTUyLTAuNjg5LTMuNDY5LTEuNjE1Yy0wLjI0NS0wLjcxMiwwLjA5OS0xLjY2OSwwLjkzOS0yLjYyNmMwLjYzNS0wLjcyNCwxLjUxMi0xLjM5NSwyLjUzLTEuOTUxbC0wLjg2Mi0yLjUyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjQ1NywwLjczNi0yLjcxOSwxLjY3LTMuNjQ5LDIuNzMxYy0xLjUwMywxLjcxMi0yLjAxOSwzLjU2Ni0xLjQ1Miw1LjIyYzAuNzMxLDIuMTM2LDMuMTAyLDMuNDEyLDYuMzM4LDMuNDEyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMzYzLDAsMC43MzQtMC4wMTgsMS4xMDktMC4w'+
			'NTFsMC42MTItMS4yMkwtMzQ1NS41NC0yNTUwLjc3NnoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0tMzQ0NC4yMzgtMjU1OC40MTZjLTAuNzMzLTIuMTM4LTMuMTAyLTMuNDEzLTYuMzM4LTMuNDEzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjgyNiwwLTEuNjg3LDAuMDk1LTIuNTU1LDAuMjYzbDAuODY0LDIuNTJjMC41NzYtMC4wOTMsMS4xNDYtMC4xNDcsMS42OS0wLjE0N2MxLjk5NiwwLDMuNTA1LDAuNjQxLDMuODQ0LDEuNjMyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMjQ1LDAuNz'+
			'EtMC4wOTksMS42NjctMC45MzksMi42MjRjLTAuMjI3LDAuMjU4LTAuNDg4LDAuNTA4LTAuNzcyLDAuNzVjMC4wNTksMC4zNjUsMC4wMTMsMC43NTEtMC4xNjUsMS4xMDZsLTAuNjczLDEuMzQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bDEuMTYzLDAuNTgyYzAuOTQ0LTAuNjAxLDEuNzY5LTEuMjkxLDIuNDI5LTIuMDQzQy0zNDQ0LjE4OC0yNTU0LjkwOS0zNDQzLjY3Mi0yNTU2Ljc2My0zNDQ0LjIzOC0yNTU4LjQxNnoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iRWJlbmVfMSIvPgogPGcgaWQ9IkxheWVyXzIiLz4KPC9zdmc+Cg==';
		me._gyro_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gyro_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_off.style[domTransition]='opacity 500ms ease 0ms';
				if (me._gyro_off.ggCurrentLogicStateAlpha == 0) {
					me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
					me._gyro_off.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._gyro_off.style.opacity == 0.0) { me._gyro_off.style.visibility="hidden"; } }, 505);
					me._gyro_off.style.opacity=0;
				}
			}
		}
		me._gyro_off.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._gyro_off.style[domTransition]='none';
			} else {
				me._gyro_off.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_off.style.opacity='0';
			me._gyro_off.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._gyro_on.style[domTransition]='none';
			} else {
				me._gyro_on.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_on.style.opacity='1';
			me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
		}
		me._gyro_off.onmouseover=function (e) {
			me._gyro_off__img.style.visibility='hidden';
			me._gyro_off__imgo.style.visibility='inherit';
		}
		me._gyro_off.onmouseout=function (e) {
			me._gyro_off__img.style.visibility='inherit';
			me._gyro_off__imgo.style.visibility='hidden';
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_off);
		el=me._tt_gyro=document.createElement('div');
		els=me._tt_gyro__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_gyro";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_gyro.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_gyro.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_gyro.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_gyro.style[domTransition]='left 0s, top 0s';
				if (me._tt_gyro.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_gyro.style.top='-25px';
					me._tt_gyro.ggUpdatePosition(true);
				}
				else {
					me._tt_gyro.ggDx=0;
					me._tt_gyro.style.top='32px';
					me._tt_gyro.ggUpdatePosition(true);
				}
			}
		}
		me._tt_gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['gyro'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_gyro.style[domTransition]='left 0s, top 0s';
				if (me._tt_gyro.ggCurrentLogicStateVisible == 0) {
					me._tt_gyro.style.visibility=(Number(me._tt_gyro.style.opacity)>0||!me._tt_gyro.style.opacity)?'inherit':'hidden';
					me._tt_gyro.ggVisible=true;
				}
				else {
					me._tt_gyro.style.visibility="hidden";
					me._tt_gyro.ggVisible=false;
				}
			}
		}
		me._tt_gyro.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_gyro.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_gyro.ggCurrentLogicStateText = newLogicStateText;
				me._tt_gyro.style[domTransition]='left 0s, top 0s';
				if (me._tt_gyro.ggCurrentLogicStateText == 0) {
					me._tt_gyro.ggText="Gyroscope Off";
					me._tt_gyro__text.innerHTML=me._tt_gyro.ggText;
					if (me._tt_gyro.ggUpdateText) {
					me._tt_gyro.ggUpdateText=function() {
						var hs="Gyroscope Off";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_gyro.ggUpdatePosition) me._tt_gyro.ggUpdatePosition();
					}
				}
				else if (me._tt_gyro.ggCurrentLogicStateText == 1) {
					me._tt_gyro.ggText="Gyroscope On";
					me._tt_gyro__text.innerHTML=me._tt_gyro.ggText;
					if (me._tt_gyro.ggUpdateText) {
					me._tt_gyro.ggUpdateText=function() {
						var hs="Gyroscope On";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_gyro.ggUpdatePosition) me._tt_gyro.ggUpdatePosition();
					}
				}
				else {
					me._tt_gyro.ggText="";
					me._tt_gyro__text.innerHTML=me._tt_gyro.ggText;
					if (me._tt_gyro.ggUpdateText) {
					me._tt_gyro.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_gyro.ggUpdatePosition) me._tt_gyro.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_gyro.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._gyro.appendChild(me._tt_gyro);
		me._controller_slider.appendChild(me._gyro);
		el=me._projection_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="projection_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._projection_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._projection_buttons.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_projection') == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_projection') == 1))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_projection') == 2))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_projection') == 3))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_projection') == 4))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_projection') == 5))
			)
			{
				newLogicStatePosition = 5;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._projection_buttons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._projection_buttons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._projection_buttons.style[domTransition]='left 0s, top 0s';
				if (me._projection_buttons.ggCurrentLogicStatePosition == 0) {
					me._projection_buttons.style.left='0px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 1) {
					me._projection_buttons.style.left='32px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 2) {
					me._projection_buttons.style.left='64px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 3) {
					me._projection_buttons.style.left='96px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 4) {
					me._projection_buttons.style.left='128px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 5) {
					me._projection_buttons.style.left='160px';
					me._projection_buttons.style.top='0px';
				}
				else {
					me._projection_buttons.style.left='160px';
					me._projection_buttons.style.top='0px';
				}
			}
		}
		me._projection_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_projection') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._projection_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._projection_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._projection_buttons.style[domTransition]='left 0s, top 0s';
				if (me._projection_buttons.ggCurrentLogicStateVisible == 0) {
					me._projection_buttons.style.visibility=(Number(me._projection_buttons.style.opacity)>0||!me._projection_buttons.style.opacity)?'inherit':'hidden';
					me._projection_buttons.ggVisible=true;
				}
				else {
					me._projection_buttons.style.visibility="hidden";
					me._projection_buttons.ggVisible=false;
				}
			}
		}
		me._projection_buttons.onclick=function (e) {
			if (
				(
					((player.getProjection() == 4))
				)
			) {
				player.changeProjectionEx(9,1);
			}
			if (
				(
					((player.getProjection() == 9))
				)
			) {
				player.changeProjectionEx(12,1);
			}
			if (
				(
					((player.getProjection() == 12))
				)
			) {
				player.changeProjectionEx(4,1);
			}
		}
		me._projection_buttons.onmouseover=function (e) {
			me.elementMouseOver['projection_buttons']=true;
			me._tt_projection.logicBlock_visible();
		}
		me._projection_buttons.onmouseout=function (e) {
			me.elementMouseOver['projection_buttons']=false;
			me._tt_projection.logicBlock_visible();
		}
		me._projection_buttons.ontouchend=function (e) {
			me.elementMouseOver['projection_buttons']=false;
			me._tt_projection.logicBlock_visible();
		}
		me._projection_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._stereographic=document.createElement('div');
		els=me._stereographic__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIGVuYWJsZS1iYWNrZ3JvdW'+
			'5kPSJuZXcgMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogPGcgaWQ9IkxheWVyXzEiPgogIDxnIGlkPSJMYXllcl8xXzFfIiBkaXNwbGF5PSJub25lIi8+CiA8L2c+CiA8ZyBpZD0iRWJlbmVfMV8xXyI+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iIzFBMTcxQiIgZD0iTTE2LDMuNUM5LjEwNywzLjUsMy41LDkuMTA3LDMuNSwxNlM5LjEwNywyOC40OTksMTYsMjguNDk5UzI4LjUsMjIuODkzLDI4LjUsMTZTMjIuODkzLDMuNSwxNiwzLjV6JiN4ZDsm'+
			'I3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0xNiwyNi4wODFjLTUuNTU5LDAtMTAuMDgtNC41MjItMTAuMDgtMTAuMDgxUzEwLjQ0MSw1LjkxOSwxNiw1LjkxOVMyNi4wOCwxMC40NDEsMjYuMDgsMTZTMjEuNTU5LDI2LjA4MSwxNiwyNi4wODF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMUExNzFCIiBkPSJNMjMuMjIxLDEwLjk4NWMtMC4zMTgtMC4yMjctMC43MjctMC4yODUtMS4wOTgtMC4xNTlDMjIuMDkyLDEwLjgzNywxOS4wMSwxMS44OSwxNiwxMS44OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMi45OTYsMC02LjA5NC0xLjA1My02LjEyMy0xLjA2M2MtMC4zNzEtMC4xMjctMC43Nz'+
			'ktMC4wNjgtMS4wOTgsMC4xNTljLTAuMzE4LDAuMjI4LTAuNTA4LDAuNTk0LTAuNTA4LDAuOTg0djguMDAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC40MDQsMC4yMDMsMC43ODMsMC41MzksMS4wMDZjMC4yMDEsMC4xMzUsMC40MzYsMC4yMDMsMC42NzIsMC4yMDNjMC4xNTYsMCwwLjMxNi0wLjAyOSwwLjQ2NS0wLjA5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjAyOS0wLjAxMywzLjA2MS0xLjI2Miw2LjA1My0xLjI2MmMyLjk3NywwLDYuMDIzLDEuMjUsNi4wNTMsMS4yNjNjMC4zNzUsMC4xNTQsMC44MDEsMC4xMTIsMS4xMzctMC4xMTEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5OyYjeDk7JiN4OTtjMC4zMzYtMC4yMjUsMC41MzktMC42MDIsMC41MzktMS4wMDZWMTEuOTdDMjMuNzI5LDExLjU3OSwyMy41MzksMTEuMjEyLDIzLjIyMSwxMC45ODV6IE0yMS4zMDksMTguMjcyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjMzNC0wLjQwMi0zLjMwNS0wLjg2NS01LjMwOS0wLjg2NXMtMy45NzUsMC40NjMtNS4zMDksMC44NjV2LTQuNjkzQzEyLjAxOCwxMy45MTUsMTQsMTQuMzA5LDE2LDE0LjMwOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O3MzLjk4Mi0wLjM5NCw1LjMwOS0wLjcyOVYxOC4yNzJ6Ii8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT'+
			'0iMC40Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTE2LDMuNUM5LjEwNywzLjUsMy41LDkuMTA3LDMuNSwxNlM5LjEwNywyOC40OTksMTYsMjguNDk5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7UzI4LjUsMjIuODkzLDI4LjUsMTZTMjIuODkzLDMuNSwxNiwzLjV6IE0xNiwyNi4wODFjLTUuNTU5LDAtMTAuMDgtNC41MjItMTAuMDgtMTAuMDgxUzEwLjQ0MSw1LjkxOSwxNiw1LjkxOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1MyNi4wOCwxMC40NDEsMjYuMDgsMTZTMjEuNTU5LDI2LjA4MSwxNiwyNi4wODF6IiBzdHJva2Utd2lkdGg9IjEu'+
			'NSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjMuMjIxLDEwLjk4NWMtMC4zMTgtMC4yMjctMC43MjctMC4yODUtMS4wOTgtMC4xNTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMjIuMDkyLDEwLjgzNywxOS4wMSwxMS44OSwxNiwxMS44OWMtMi45OTYsMC02LjA5NC0xLjA1My02LjEyMy0xLjA2M2MtMC4zNzEtMC4xMjctMC43NzktMC4wNjgtMS4wOTgsMC4xNTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMzE4LDAuMjI4LTAuNTA4LDAuNTk0LTAuNTA4LDAuOTg0djguMDAyYzAsMC40MDQsMC4yMDMsMC43ODMsMC41MzksMS4wMD'+
			'ZjMC4yMDEsMC4xMzUsMC40MzYsMC4yMDMsMC42NzIsMC4yMDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xNTYsMCwwLjMxNi0wLjAyOSwwLjQ2NS0wLjA5M2MwLjAyOS0wLjAxMywzLjA2MS0xLjI2Miw2LjA1My0xLjI2MmMyLjk3NywwLDYuMDIzLDEuMjUsNi4wNTMsMS4yNjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4zNzUsMC4xNTQsMC44MDEsMC4xMTIsMS4xMzctMC4xMTFjMC4zMzYtMC4yMjUsMC41MzktMC42MDIsMC41MzktMS4wMDZWMTEuOTdDMjMuNzI5LDExLjU3OSwyMy41MzksMTEuMjEyLDIzLjIyMSwxMC45ODV6JiN4ZDsmI3hhOyYjeDk7JiN4OTsm'+
			'I3g5OyYjeDk7IE0yMS4zMDksMTguMjcyYy0xLjMzNC0wLjQwMi0zLjMwNS0wLjg2NS01LjMwOS0wLjg2NXMtMy45NzUsMC40NjMtNS4zMDksMC44NjV2LTQuNjkzQzEyLjAxOCwxMy45MTUsMTQsMTQuMzA5LDE2LDE0LjMwOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O3MzLjk4Mi0wLjM5NCw1LjMwOS0wLjcyOVYxOC4yNzJ6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE2LDMuNUM5LjEwNywzLjUsMy41LDkuMTA3LDMuNSwxNlM5LjEwNywyOC40OTksMTYsMjguNDk5UzI4LjUsMjIuODkzLDI4LjUsMTZTMjIuOD'+
			'kzLDMuNSwxNiwzLjV6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0xNiwyNi4wODFjLTUuNTU5LDAtMTAuMDgtNC41MjItMTAuMDgtMTAuMDgxUzEwLjQ0MSw1LjkxOSwxNiw1LjkxOVMyNi4wOCwxMC40NDEsMjYuMDgsMTZTMjEuNTU5LDI2LjA4MSwxNiwyNi4wODF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjMuMjIxLDEwLjk4NWMtMC4zMTgtMC4yMjctMC43MjctMC4yODUtMS4wOTgtMC4xNTlDMjIuMDkyLDEwLjgzNywxOS4wMSwxMS44OSwxNiwxMS44OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMi45OTYsMC02LjA5NC0xLjA1My02LjEyMy0xLjA2'+
			'M2MtMC4zNzEtMC4xMjctMC43NzktMC4wNjgtMS4wOTgsMC4xNTljLTAuMzE4LDAuMjI4LTAuNTA4LDAuNTk0LTAuNTA4LDAuOTg0djguMDAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC40MDQsMC4yMDMsMC43ODMsMC41MzksMS4wMDZjMC4yMDEsMC4xMzUsMC40MzYsMC4yMDMsMC42NzIsMC4yMDNjMC4xNTYsMCwwLjMxNi0wLjAyOSwwLjQ2NS0wLjA5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjAyOS0wLjAxMywzLjA2MS0xLjI2Miw2LjA1My0xLjI2MmMyLjk3NywwLDYuMDIzLDEuMjUsNi4wNTMsMS4yNjNjMC4zNzUsMC4xNTQsMC44MDEsMC4xMTIsMS4xMz'+
			'ctMC4xMTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4zMzYtMC4yMjUsMC41MzktMC42MDIsMC41MzktMS4wMDZWMTEuOTdDMjMuNzI5LDExLjU3OSwyMy41MzksMTEuMjEyLDIzLjIyMSwxMC45ODV6IE0yMS4zMDksMTguMjcyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjMzNC0wLjQwMi0zLjMwNS0wLjg2NS01LjMwOS0wLjg2NXMtMy45NzUsMC40NjMtNS4zMDksMC44NjV2LTQuNjkzQzEyLjAxOCwxMy45MTUsMTQsMTQuMzA5LDE2LDE0LjMwOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O3MzLjk4Mi0wLjM5NCw1LjMwOS0wLjcyOVYxOC4yNzJ6Ii8+CiAg'+
			'IDwvZz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0xNiwzLjVDOS4xMDcsMy41LDMuNSw5LjEwNywzLjUsMTZTOS4xMDcsMjguNDk5LDE2LDI4LjQ5OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1MyOC41LDIyLjg5MywyOC41LDE2UzIyLjg5MywzLjUsMTYsMy41eiBNMTYsMjYuMDgxYy01LjU1OSwwLTEwLjA4LTQuNTIyLTEwLjA4LTEwLjA4MVMxMC40NDEsNS45MTksMTYsNS45MTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtTMjYuMDgsMTAuNDQxLDI2LjA4LDE2UzIxLjU1OSwyNi4wODEsMTYsMjYuMDgxeiIgc3Ryb2tlLXdpZH'+
			'RoPSIwLjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTTIzLjIyMSwxMC45ODVjLTAuMzE4LTAuMjI3LTAuNzI3LTAuMjg1LTEuMDk4LTAuMTU5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzIyLjA5MiwxMC44MzcsMTkuMDEsMTEuODksMTYsMTEuODljLTIuOTk2LDAtNi4wOTQtMS4wNTMtNi4xMjMtMS4wNjNjLTAuMzcxLTAuMTI3LTAuNzc5LTAuMDY4LTEuMDk4LDAuMTU5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjMxOCwwLjIyOC0wLjUwOCwwLjU5NC0wLjUwOCwwLjk4NHY4LjAwMmMwLDAuNDA0LDAuMjAzLDAuNzgzLDAuNTM5'+
			'LDEuMDA2YzAuMjAxLDAuMTM1LDAuNDM2LDAuMjAzLDAuNjcyLDAuMjAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTU2LDAsMC4zMTYtMC4wMjksMC40NjUtMC4wOTNjMC4wMjktMC4wMTMsMy4wNjEtMS4yNjIsNi4wNTMtMS4yNjJjMi45NzcsMCw2LjAyMywxLjI1LDYuMDUzLDEuMjYzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMzc1LDAuMTU0LDAuODAxLDAuMTEyLDEuMTM3LTAuMTExYzAuMzM2LTAuMjI1LDAuNTM5LTAuNjAyLDAuNTM5LTEuMDA2VjExLjk3QzIzLjcyOSwxMS41NzksMjMuNTM5LDExLjIxMiwyMy4yMjEsMTAuOTg1eiYjeGQ7JiN4YTsmI3g5Oy'+
			'YjeDk7JiN4OTsmI3g5OyBNMjEuMzA5LDE4LjI3MmMtMS4zMzQtMC40MDItMy4zMDUtMC44NjUtNS4zMDktMC44NjVzLTMuOTc1LDAuNDYzLTUuMzA5LDAuODY1di00LjY5M0MxMi4wMTgsMTMuOTE1LDE0LDE0LjMwOSwxNiwxNC4zMDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtzMy45ODItMC4zOTQsNS4zMDktMC43MjlWMTguMjcyeiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._stereographic__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stereographic__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIGVuYWJsZS1iYWNrZ3JvdW'+
			'5kPSJuZXcgMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogPGcgaWQ9IkxheWVyXzEiPgogIDxnIGlkPSJMYXllcl8xXzFfIiBkaXNwbGF5PSJub25lIi8+CiA8L2c+CiA8ZyBpZD0iRWJlbmVfMV8xXyI+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iIzFBMTcxQiIgZD0iTTE2LDIuMjVDOC40MTgsMi4yNSwyLjI1LDguNDE4LDIuMjUsMTZTOC40MTgsMjkuNzQ5LDE2LDI5Ljc0OVMyOS43NSwyMy41ODIsMjkuNzUsMTYmI3hkOyYjeGE7JiN4OTsmI3g5'+
			'OyYjeDk7JiN4OTtTMjMuNTgyLDIuMjUsMTYsMi4yNXogTTE2LDI3LjA4OUM5Ljg4NiwyNy4wODksNC45MTIsMjIuMTE0LDQuOTEyLDE2UzkuODg2LDQuOTExLDE2LDQuOTExUzI3LjA4OCw5Ljg4NiwyNy4wODgsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtTMjIuMTE0LDI3LjA4OSwxNiwyNy4wODl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMUExNzFCIiBkPSJNMjMuOTQyLDEwLjQ4M2MtMC4zNS0wLjI1LTAuNzk5LTAuMzEzLTEuMjA3LTAuMTc1Yy0wLjAzNCwwLjAxMi0zLjQyNSwxLjE3LTYuNzM1LDEuMTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTMuMjk2LDAtNi43MD'+
			'MtMS4xNTgtNi43MzUtMS4xN2MtMC40MDgtMC4xNDEtMC44NTctMC4wNzQtMS4yMDgsMC4xNzVjLTAuMzUsMC4yNTEtMC41NTksMC42NTMtMC41NTksMS4wODN2OC44MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjQ0NCwwLjIyNCwwLjg2MSwwLjU5NCwxLjEwNmMwLjIyMSwwLjE0NywwLjQ3OSwwLjIyMywwLjczOCwwLjIyM2MwLjE3MiwwLDAuMzQ5LTAuMDMyLDAuNTEyLTAuMTAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMDMyLTAuMDE0LDMuMzY2LTEuMzg4LDYuNjU4LTEuMzg4YzMuMjc0LDAsNi42MjYsMS4zNzUsNi42NTgsMS4zODljMC40MTIsMC4xNyww'+
			'Ljg4MSwwLjEyMywxLjI1LTAuMTIyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMzY5LTAuMjQ3LDAuNTkzLTAuNjYyLDAuNTkzLTEuMTA2di04LjgwM0MyNC41MDEsMTEuMTM3LDI0LjI5MywxMC43MzIsMjMuOTQyLDEwLjQ4M3ogTTIxLjgzOSwxOC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjQ2Ny0wLjQ0My0zLjYzNS0wLjk1Mi01LjgzOS0wLjk1MnMtNC4zNzIsMC41MDktNS44NCwwLjk1MnYtNS4xNjNjMS40NTksMC4zNjksMy42NCwwLjgwMyw1Ljg0LDAuODAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7czQuMzgxLTAuNDM0LDUuODM5LTAuODAzVj'+
			'E4LjV6Ii8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTE2LDIuMjVDOC40MTgsMi4yNSwyLjI1LDguNDE4LDIuMjUsMTZTOC40MTgsMjkuNzQ5LDE2LDI5Ljc0OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1MyOS43NSwyMy41ODIsMjkuNzUsMTZTMjMuNTgyLDIuMjUsMTYsMi4yNXogTTE2LDI3LjA4OUM5Ljg4NiwyNy4wODksNC45MTIsMjIuMTE0LDQuOTEyLDE2UzkuODg2LDQuOTExLDE2LDQuOTExJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7UzI3LjA4OCw5Ljg4NiwyNy4wODgsMTZTMjIu'+
			'MTE0LDI3LjA4OSwxNiwyNy4wODl6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjMuOTQyLDEwLjQ4M2MtMC4zNS0wLjI1LTAuNzk5LTAuMzEzLTEuMjA3LTAuMTc1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjAzNCwwLjAxMi0zLjQyNSwxLjE3LTYuNzM1LDEuMTdjLTMuMjk2LDAtNi43MDMtMS4xNTgtNi43MzUtMS4xN2MtMC40MDgtMC4xNDEtMC44NTctMC4wNzQtMS4yMDgsMC4xNzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMzUsMC4yNTEtMC41NTksMC42NTMtMC41NTksMS4wODN2OC'+
			'44MDNjMCwwLjQ0NCwwLjIyNCwwLjg2MSwwLjU5NCwxLjEwNmMwLjIyMSwwLjE0NywwLjQ3OSwwLjIyMywwLjczOCwwLjIyMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjE3MiwwLDAuMzQ5LTAuMDMyLDAuNTEyLTAuMTAyYzAuMDMyLTAuMDE0LDMuMzY2LTEuMzg4LDYuNjU4LTEuMzg4YzMuMjc0LDAsNi42MjYsMS4zNzUsNi42NTgsMS4zODkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC40MTIsMC4xNywwLjg4MSwwLjEyMywxLjI1LTAuMTIyYzAuMzY5LTAuMjQ3LDAuNTkzLTAuNjYyLDAuNTkzLTEuMTA2di04LjgwM0MyNC41MDEsMTEuMTM3LDI0LjI5MywxMC43MzIs'+
			'MjMuOTQyLDEwLjQ4M3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTTIxLjgzOSwxOC41Yy0xLjQ2Ny0wLjQ0My0zLjYzNS0wLjk1Mi01LjgzOS0wLjk1MnMtNC4zNzIsMC41MDktNS44NCwwLjk1MnYtNS4xNjNjMS40NTksMC4zNjksMy42NCwwLjgwMyw1Ljg0LDAuODAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7czQuMzgxLTAuNDM0LDUuODM5LTAuODAzVjE4LjV6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE2LDIuMjVDOC40MTgsMi4yNSwyLjI1LDguNDE4LDIuMjUsMTZTOC40MTgsMjkuNzQ5LD'+
			'E2LDI5Ljc0OVMyOS43NSwyMy41ODIsMjkuNzUsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtTMjMuNTgyLDIuMjUsMTYsMi4yNXogTTE2LDI3LjA4OUM5Ljg4NiwyNy4wODksNC45MTIsMjIuMTE0LDQuOTEyLDE2UzkuODg2LDQuOTExLDE2LDQuOTExUzI3LjA4OCw5Ljg4NiwyNy4wODgsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtTMjIuMTE0LDI3LjA4OSwxNiwyNy4wODl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjMuOTQyLDEwLjQ4M2MtMC4zNS0wLjI1LTAuNzk5LTAuMzEzLTEuMjA3LTAuMTc1Yy0wLjAzNCwwLjAxMi0zLjQyNSwxLjE3LTYuNzM1'+
			'LDEuMTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTMuMjk2LDAtNi43MDMtMS4xNTgtNi43MzUtMS4xN2MtMC40MDgtMC4xNDEtMC44NTctMC4wNzQtMS4yMDgsMC4xNzVjLTAuMzUsMC4yNTEtMC41NTksMC42NTMtMC41NTksMS4wODN2OC44MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjQ0NCwwLjIyNCwwLjg2MSwwLjU5NCwxLjEwNmMwLjIyMSwwLjE0NywwLjQ3OSwwLjIyMywwLjczOCwwLjIyM2MwLjE3MiwwLDAuMzQ5LTAuMDMyLDAuNTEyLTAuMTAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMDMyLTAuMDE0LDMuMzY2LTEuMzg4LDYuNjU4LT'+
			'EuMzg4YzMuMjc0LDAsNi42MjYsMS4zNzUsNi42NTgsMS4zODljMC40MTIsMC4xNywwLjg4MSwwLjEyMywxLjI1LTAuMTIyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMzY5LTAuMjQ3LDAuNTkzLTAuNjYyLDAuNTkzLTEuMTA2di04LjgwM0MyNC41MDEsMTEuMTM3LDI0LjI5MywxMC43MzIsMjMuOTQyLDEwLjQ4M3ogTTIxLjgzOSwxOC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjQ2Ny0wLjQ0My0zLjYzNS0wLjk1Mi01LjgzOS0wLjk1MnMtNC4zNzIsMC41MDktNS44NCwwLjk1MnYtNS4xNjNjMS40NTksMC4zNjksMy42NCwwLjgwMyw1Ljg0LDAuODAzJiN4ZDsm'+
			'I3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7czQuMzgxLTAuNDM0LDUuODM5LTAuODAzVjE4LjV6Ii8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0xNiwyLjI1QzguNDE4LDIuMjUsMi4yNSw4LjQxOCwyLjI1LDE2UzguNDE4LDI5Ljc0OSwxNiwyOS43NDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtTMjkuNzUsMjMuNTgyLDI5Ljc1LDE2UzIzLjU4MiwyLjI1LDE2LDIuMjV6IE0xNiwyNy4wODlDOS44ODYsMjcuMDg5LDQuOTEyLDIyLjExNCw0LjkxMiwxNlM5Ljg4Niw0LjkxMSwxNiw0LjkxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Ji'+
			'N4OTsmI3g5O1MyNy4wODgsOS44ODYsMjcuMDg4LDE2UzIyLjExNCwyNy4wODksMTYsMjcuMDg5eiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTTIzLjk0MiwxMC40ODNjLTAuMzUtMC4yNS0wLjc5OS0wLjMxMy0xLjIwNy0wLjE3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMzQsMC4wMTItMy40MjUsMS4xNy02LjczNSwxLjE3Yy0zLjI5NiwwLTYuNzAzLTEuMTU4LTYuNzM1LTEuMTdjLTAuNDA4LTAuMTQxLTAuODU3LTAuMDc0LTEuMjA4LDAuMTc1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0w'+
			'LjM1LDAuMjUxLTAuNTU5LDAuNjUzLTAuNTU5LDEuMDgzdjguODAzYzAsMC40NDQsMC4yMjQsMC44NjEsMC41OTQsMS4xMDZjMC4yMjEsMC4xNDcsMC40NzksMC4yMjMsMC43MzgsMC4yMjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xNzIsMCwwLjM0OS0wLjAzMiwwLjUxMi0wLjEwMmMwLjAzMi0wLjAxNCwzLjM2Ni0xLjM4OCw2LjY1OC0xLjM4OGMzLjI3NCwwLDYuNjI2LDEuMzc1LDYuNjU4LDEuMzg5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNDEyLDAuMTcsMC44ODEsMC4xMjMsMS4yNS0wLjEyMmMwLjM2OS0wLjI0NywwLjU5My0wLjY2MiwwLjU5My0xLjEwNn'+
			'YtOC44MDNDMjQuNTAxLDExLjEzNywyNC4yOTMsMTAuNzMyLDIzLjk0MiwxMC40ODN6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0yMS44MzksMTguNWMtMS40NjctMC40NDMtMy42MzUtMC45NTItNS44MzktMC45NTJzLTQuMzcyLDAuNTA5LTUuODQsMC45NTJ2LTUuMTYzYzEuNDU5LDAuMzY5LDMuNjQsMC44MDMsNS44NCwwLjgwMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O3M0LjM4MS0wLjQzNCw1LjgzOS0wLjgwM1YxOC41eiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._stereographic__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="stereographic";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stereographic.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stereographic.onmouseover=function (e) {
			me._stereographic__img.style.visibility='hidden';
			me._stereographic__imgo.style.visibility='inherit';
		}
		me._stereographic.onmouseout=function (e) {
			me._stereographic__img.style.visibility='inherit';
			me._stereographic__imgo.style.visibility='hidden';
		}
		me._stereographic.ggUpdatePosition=function (useTransition) {
		}
		me._projection_buttons.appendChild(me._stereographic);
		el=me._tt_projection=document.createElement('div');
		els=me._tt_projection__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_projection";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_projection.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_projection.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_projection.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_projection.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_projection.style[domTransition]='left 0s, top 0s';
				if (me._tt_projection.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_projection.style.top='-25px';
					me._tt_projection.ggUpdatePosition(true);
				}
				else {
					me._tt_projection.ggDx=0;
					me._tt_projection.style.top='32px';
					me._tt_projection.ggUpdatePosition(true);
				}
			}
		}
		me._tt_projection.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['projection_buttons'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_projection.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_projection.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_projection.style[domTransition]='left 0s, top 0s';
				if (me._tt_projection.ggCurrentLogicStateVisible == 0) {
					me._tt_projection.style.visibility=(Number(me._tt_projection.style.opacity)>0||!me._tt_projection.style.opacity)?'inherit':'hidden';
					me._tt_projection.ggVisible=true;
				}
				else {
					me._tt_projection.style.visibility="hidden";
					me._tt_projection.ggVisible=false;
				}
			}
		}
		me._tt_projection.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getProjection() == 4))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getProjection() == 9))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getProjection() == 12))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_projection.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_projection.ggCurrentLogicStateText = newLogicStateText;
				me._tt_projection.style[domTransition]='left 0s, top 0s';
				if (me._tt_projection.ggCurrentLogicStateText == 0) {
					me._tt_projection.ggText="Change to Sterographic";
					me._tt_projection__text.innerHTML=me._tt_projection.ggText;
					if (me._tt_projection.ggUpdateText) {
					me._tt_projection.ggUpdateText=function() {
						var hs="Change to Sterographic";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_projection.ggUpdatePosition) me._tt_projection.ggUpdatePosition();
					}
				}
				else if (me._tt_projection.ggCurrentLogicStateText == 1) {
					me._tt_projection.ggText="Change to Fisheye";
					me._tt_projection__text.innerHTML=me._tt_projection.ggText;
					if (me._tt_projection.ggUpdateText) {
					me._tt_projection.ggUpdateText=function() {
						var hs="Change to Fisheye";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_projection.ggUpdatePosition) me._tt_projection.ggUpdatePosition();
					}
				}
				else if (me._tt_projection.ggCurrentLogicStateText == 2) {
					me._tt_projection.ggText="Change to Rectilinear";
					me._tt_projection__text.innerHTML=me._tt_projection.ggText;
					if (me._tt_projection.ggUpdateText) {
					me._tt_projection.ggUpdateText=function() {
						var hs="Change to Rectilinear";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_projection.ggUpdatePosition) me._tt_projection.ggUpdatePosition();
					}
				}
				else {
					me._tt_projection.ggText="";
					me._tt_projection__text.innerHTML=me._tt_projection.ggText;
					if (me._tt_projection.ggUpdateText) {
					me._tt_projection.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_projection.ggUpdatePosition) me._tt_projection.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_projection.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._projection_buttons.appendChild(me._tt_projection);
		me._controller_slider.appendChild(me._projection_buttons);
		el=me._thumbnail=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_thumbnail') == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_thumbnail') == 1))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_thumbnail') == 2))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_thumbnail') == 3))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_thumbnail') == 4))
			)
			{
				newLogicStatePosition = 4;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail.style[domTransition]='left 0s, top 0s';
				if (me._thumbnail.ggCurrentLogicStatePosition == 0) {
					me._thumbnail.style.left='0px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 1) {
					me._thumbnail.style.left='32px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 2) {
					me._thumbnail.style.left='64px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 3) {
					me._thumbnail.style.left='96px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 4) {
					me._thumbnail.style.left='128px';
					me._thumbnail.style.top='0px';
				}
				else {
					me._thumbnail.style.left='128px';
					me._thumbnail.style.top='0px';
				}
			}
		}
		me._thumbnail.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_thumbnail') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail.style[domTransition]='left 0s, top 0s';
				if (me._thumbnail.ggCurrentLogicStateVisible == 0) {
					me._thumbnail.style.visibility=(Number(me._thumbnail.style.opacity)>0||!me._thumbnail.style.opacity)?'inherit':'hidden';
					me._thumbnail.ggVisible=true;
				}
				else {
					me._thumbnail.style.visibility="hidden";
					me._thumbnail.ggVisible=false;
				}
			}
		}
		me._thumbnail.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width <= 450))
				)
			) {
				player.setVariableValue('vis_thumbnail_menu_mobile', !player.getVariableValue('vis_thumbnail_menu_mobile'));
			}
			if (
				(
					((player.getViewerSize().width > 450))
				)
			) {
				player.setVariableValue('vis_thumbnail_menu_show', !player.getVariableValue('vis_thumbnail_menu_show'));
			}
		}
		me._thumbnail.onmouseover=function (e) {
			me.elementMouseOver['thumbnail']=true;
			me._tt_thumbnail_open.logicBlock_visible();
		}
		me._thumbnail.onmouseout=function (e) {
			me.elementMouseOver['thumbnail']=false;
			me._tt_thumbnail_open.logicBlock_visible();
		}
		me._thumbnail.ontouchend=function (e) {
			me.elementMouseOver['thumbnail']=false;
			me._tt_thumbnail_open.logicBlock_visible();
		}
		me._thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_show_button_show=document.createElement('div');
		els=me._thumbnail_show_button_show__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIGVuYWJsZS1iYWNrZ3JvdW'+
			'5kPSJuZXcgMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogPGcgaWQ9IkxheWVyXzEiPgogIDxnIGlkPSJMYXllcl8xXzFfIi8+CiA8L2c+CiA8ZyBpZD0iRWJlbmVfMV8xXyI+CiAgPGc+CiAgIDxnIG9wYWNpdHk9IjAuNCI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzQzNDM0MiIGQ9Ik0xNiwzLjUwMUM5LjEwNywzLjUwMSwzLjUsOS4xMDgsMy41LDE2UzkuMTA3LDI4LjQ5OSwxNiwyOC40OTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4'+
			'OTtjNi44OTMsMCwxMi40OTktNS42MDcsMTIuNDk5LTEyLjQ5OVMyMi44OTMsMy41MDEsMTYsMy41MDF6IE0xNiwyNi4wNzljLTUuNTU4LDAtMTAuMDgtNC41MjEtMTAuMDgtMTAuMDc5UzEwLjQ0Miw1LjkyLDE2LDUuOTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNS41NTcsMCwxMC4wODEsNC41MjIsMTAuMDgxLDEwLjA4UzIxLjU1NywyNi4wNzksMTYsMjYuMDc5eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTExLjI3MSwxMy41MjFIOC44NzVjLTAuNzA3LDAtMS4yOCwwLjU3My0xLjI4LDEuMjh2Mi4zOTYmI3'+
			'hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjcwNywwLjU3MywxLjI4LDEuMjgsMS4yOGgyLjM5NmMwLjcwNywwLDEuMjgtMC41NzMsMS4yOC0xLjI4di0yLjM5NkMxMi41NTEsMTQuMDk1LDExLjk3OCwxMy41MjEsMTEuMjcxLDEzLjUyMXoiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzQzNDM0MiIGQ9Ik0xNy4xNTIsMTMuNTIxaC0yLjM5NmMtMC43MDcsMC0xLjI4LDAuNTczLTEuMjgsMS4yOHYyLjM5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNzA3LDAuNTczLDEuMjc5LDEuMjgsMS4yNzloMi4zOTZjMC43MDcs'+
			'MCwxLjI3OS0wLjU3MiwxLjI3OS0xLjI3OXYtMi4zOTZDMTguNDMyLDE0LjA5NSwxNy44NTksMTMuNTIxLDE3LjE1MiwxMy41MjF6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjMuMDM1LDEzLjUyMWgtMi4zOTZjLTAuNzA3LDAtMS4yODEsMC41NzMtMS4yODEsMS4yOHYyLjM5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNzA3LDAuNTc0LDEuMjc5LDEuMjgxLDEuMjc5aDIuMzk2YzAuNzA3LDAsMS4yODEtMC41NzIsMS4yODEtMS4yNzl2LTIuMzk2QzI0LjMxNiwxNC4wOTUsMjMuNzQyLDEzLjUyMSwyMy'+
			'4wMzUsMTMuNTIxeiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNiwzLjUwMUM5LjEwNywzLjUwMSwzLjUsOS4xMDgsMy41LDE2UzkuMTA3LDI4LjQ5OSwxNiwyOC40OTljNi44OTMsMCwxMi40OTktNS42MDcsMTIuNDk5LTEyLjQ5OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1MyMi44OTMsMy41MDEsMTYsMy41MDF6IE0xNiwyNi4wNzljLTUuNTU4LDAtMTAuMDgtNC41MjEtMTAuMDgtMTAuMDc5UzEwLjQ0Miw1LjkyLDE2LDUuOTJjNS41NTcsMCwxMC4wODEsNC41MjIsMTAuMDgxLDEwLjA4JiN4ZDsmI3hhOyYj'+
			'eDk7JiN4OTsmI3g5OyYjeDk7UzIxLjU1NywyNi4wNzksMTYsMjYuMDc5eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTExLjI3MSwxMy41MjFIOC44NzVjLTAuNzA3LDAtMS4yOCwwLjU3My0xLjI4LDEuMjh2Mi4zOTZjMCwwLjcwNywwLjU3MywxLjI4LDEuMjgsMS4yOGgyLjM5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjcwNywwLDEuMjgtMC41NzMsMS4yOC0xLjI4di0yLjM5NkMxMi41NTEsMTQuMDk1LDExLjk3OCwxMy41MjEsMTEuMjcxLDEzLjUyMXoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNy4xNTIsMTMuNTIxaC0yLjM5NmMtMC43MDcsMC'+
			'0xLjI4LDAuNTczLTEuMjgsMS4yOHYyLjM5NmMwLDAuNzA3LDAuNTczLDEuMjc5LDEuMjgsMS4yNzloMi4zOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC43MDcsMCwxLjI3OS0wLjU3MiwxLjI3OS0xLjI3OXYtMi4zOTZDMTguNDMyLDE0LjA5NSwxNy44NTksMTMuNTIxLDE3LjE1MiwxMy41MjF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjMuMDM1LDEzLjUyMWgtMi4zOTZjLTAuNzA3LDAtMS4yODEsMC41NzMtMS4yODEsMS4yOHYyLjM5NmMwLDAuNzA3LDAuNTc0LDEuMjc5LDEuMjgxLDEuMjc5aDIuMzk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAu'+
			'NzA3LDAsMS4yODEtMC41NzIsMS4yODEtMS4yNzl2LTIuMzk2QzI0LjMxNiwxNC4wOTUsMjMuNzQyLDEzLjUyMSwyMy4wMzUsMTMuNTIxeiIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMTYsMy41MDFDOS4xMDcsMy41MDEsMy41LDkuMTA4LDMuNSwxNlM5LjEwNywyOC40OTksMTYsMjguNDk5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzYuODkzLDAsMTIuNDk5LTUuNjA3LDEyLjQ5OS0xMi40OTlTMjIuODkzLDMuNTAxLDE2LDMuNTAxeiBNMTYsMjYuMDc5Yy01LjU1OCwwLTEwLjA4LTQuNTIxLTEwLjA4LTEwLjA3OVMxMC'+
			'40NDIsNS45MiwxNiw1LjkyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzUuNTU3LDAsMTAuMDgxLDQuNTIyLDEwLjA4MSwxMC4wOFMyMS41NTcsMjYuMDc5LDE2LDI2LjA3OXoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0xMS4yNzEsMTMuNTIxSDguODc1Yy0wLjcwNywwLTEuMjgsMC41NzMtMS4yOCwxLjI4djIuMzk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC43MDcsMC41NzMsMS4yOCwxLjI4LDEuMjhoMi4zOTZjMC43MDcsMCwxLjI4LTAuNTczLDEuMjgtMS4yOHYtMi4zOTZDMTIuNTUxLDE0'+
			'LjA5NSwxMS45NzgsMTMuNTIxLDExLjI3MSwxMy41MjF6IiBzdHJva2Utd2lkdGg9IjAuMiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMTcuMTUyLDEzLjUyMWgtMi4zOTZjLTAuNzA3LDAtMS4yOCwwLjU3My0xLjI4LDEuMjh2Mi4zOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjcwNywwLjU3MywxLjI3OSwxLjI4LDEuMjc5aDIuMzk2YzAuNzA3LDAsMS4yNzktMC41NzIsMS4yNzktMS4yNzl2LTIuMzk2QzE4LjQzMiwxNC4wOTUsMTcuODU5LDEzLjUyMSwxNy4xNTIsMTMuNTIxeiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgIDxwYXRoIG'+
			'ZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTIzLjAzNSwxMy41MjFoLTIuMzk2Yy0wLjcwNywwLTEuMjgxLDAuNTczLTEuMjgxLDEuMjh2Mi4zOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjcwNywwLjU3NCwxLjI3OSwxLjI4MSwxLjI3OWgyLjM5NmMwLjcwNywwLDEuMjgxLTAuNTcyLDEuMjgxLTEuMjc5di0yLjM5NkMyNC4zMTYsMTQuMDk1LDIzLjc0MiwxMy41MjEsMjMuMDM1LDEzLjUyMXoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._thumbnail_show_button_show__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_show_button_show__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIGVuYWJsZS1iYWNrZ3JvdW'+
			'5kPSJuZXcgMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogPGcgaWQ9IkxheWVyXzEiPgogIDxnIGlkPSJMYXllcl8xXzFfIi8+CiA8L2c+CiA8ZyBpZD0iRWJlbmVfMV8xXyI+CiAgPGc+CiAgIDxnIG9wYWNpdHk9IjAuNCI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzQzNDM0MiIGQ9Ik0xNS45OTksMi4yNTFDOC40MTcsMi4yNTEsMi4yNSw4LjQxOSwyLjI1LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7czYuMTY3LDEzLjc0OSwx'+
			'My43NDksMTMuNzQ5YzcuNTgzLDAsMTMuNzQ5LTYuMTY4LDEzLjc0OS0xMy43NDlTMjMuNTgyLDIuMjUxLDE1Ljk5OSwyLjI1MXogTTE1Ljk5OSwyNy4wODcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDOS44ODYsMjcuMDg3LDQuOTExLDIyLjExMyw0LjkxMSwxNlM5Ljg4Niw0LjkxMiwxNS45OTksNC45MTJTMjcuMDg4LDkuODg3LDI3LjA4OCwxNlMyMi4xMTIsMjcuMDg3LDE1Ljk5OSwyNy4wODd6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMTAuNzk4LDEzLjI3M0g4LjE2MmMtMC43NzgsMC0xLjQwOCwwLjYzMS'+
			'0xLjQwOCwxLjQwOHYyLjYzNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNzc3LDAuNjMsMS40MDgsMS40MDgsMS40MDhoMi42MzZjMC43NzcsMCwxLjQwOC0wLjYzMSwxLjQwOC0xLjQwOHYtMi42MzdDMTIuMjA2LDEzLjkwNCwxMS41NzUsMTMuMjczLDEwLjc5OCwxMy4yNzN6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMTcuMjY4LDEzLjI3M2gtMi42MzZjLTAuNzc3LDAtMS40MDgsMC42MzEtMS40MDgsMS40MDh2Mi42MzcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjc3NywwLjYzMSwx'+
			'LjQwNywxLjQwOCwxLjQwN2gyLjYzNmMwLjc3NywwLDEuNDA3LTAuNjMsMS40MDctMS40MDd2LTIuNjM3QzE4LjY3NSwxMy45MDQsMTguMDQ1LDEzLjI3MywxNy4yNjgsMTMuMjczeiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTIzLjczOCwxMy4yNzNoLTIuNjM2Yy0wLjc3OCwwLTEuNDA5LDAuNjMxLTEuNDA5LDEuNDA4djIuNjM3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC43NzcsMC42MzEsMS40MDcsMS40MDksMS40MDdoMi42MzZjMC43NzgsMCwxLjQwOS0wLjYzLDEuNDA5LTEuNDA3di0yLjYzN0MyNS'+
			'4xNDcsMTMuOTA0LDI0LjUxNywxMy4yNzMsMjMuNzM4LDEzLjI3M3oiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTUuOTk5LDIuMjUxQzguNDE3LDIuMjUxLDIuMjUsOC40MTksMi4yNSwxNnM2LjE2NywxMy43NDksMTMuNzQ5LDEzLjc0OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2M3LjU4MywwLDEzLjc0OS02LjE2OCwxMy43NDktMTMuNzQ5UzIzLjU4MiwyLjI1MSwxNS45OTksMi4yNTF6IE0xNS45OTksMjcuMDg3QzkuODg2LDI3LjA4Nyw0LjkxMSwyMi4xMTMsNC45MTEsMTYmI3hkOyYjeGE7JiN4OTsmI3g5'+
			'OyYjeDk7JiN4OTtTOS44ODYsNC45MTIsMTUuOTk5LDQuOTEyUzI3LjA4OCw5Ljg4NywyNy4wODgsMTZTMjIuMTEyLDI3LjA4NywxNS45OTksMjcuMDg3eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEwLjc5OCwxMy4yNzNIOC4xNjJjLTAuNzc4LDAtMS40MDgsMC42MzEtMS40MDgsMS40MDh2Mi42MzdjMCwwLjc3NywwLjYzLDEuNDA4LDEuNDA4LDEuNDA4aDIuNjM2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNzc3LDAsMS40MDgtMC42MzEsMS40MDgtMS40MDh2LTIuNjM3QzEyLjIwNiwxMy45MDQsMTEuNTc1LDEzLjI3MywxMC43OTgsMTMuMjczeiIvPgogICAgPH'+
			'BhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE3LjI2OCwxMy4yNzNoLTIuNjM2Yy0wLjc3NywwLTEuNDA4LDAuNjMxLTEuNDA4LDEuNDA4djIuNjM3YzAsMC43NzcsMC42MzEsMS40MDcsMS40MDgsMS40MDdoMi42MzYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC43NzcsMCwxLjQwNy0wLjYzLDEuNDA3LTEuNDA3di0yLjYzN0MxOC42NzUsMTMuOTA0LDE4LjA0NSwxMy4yNzMsMTcuMjY4LDEzLjI3M3oiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMy43MzgsMTMuMjczaC0yLjYzNmMtMC43NzgsMC0xLjQwOSwwLjYzMS0xLjQwOSwxLjQwOHYyLjYzN2MwLDAuNzc3LDAuNjMx'+
			'LDEuNDA3LDEuNDA5LDEuNDA3aDIuNjM2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNzc4LDAsMS40MDktMC42MywxLjQwOS0xLjQwN3YtMi42MzdDMjUuMTQ3LDEzLjkwNCwyNC41MTcsMTMuMjczLDIzLjczOCwxMy4yNzN6Ii8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0xNS45OTksMi4yNTFDOC40MTcsMi4yNTEsMi4yNSw4LjQxOSwyLjI1LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7czYuMTY3LDEzLjc0OSwxMy43NDksMTMuNzQ5YzcuNTgzLDAsMTMuNzQ5LTYuMTY4LDEzLjc0OS0xMy43NDlTMjMuNT'+
			'gyLDIuMjUxLDE1Ljk5OSwyLjI1MXogTTE1Ljk5OSwyNy4wODcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDOS44ODYsMjcuMDg3LDQuOTExLDIyLjExMyw0LjkxMSwxNlM5Ljg4Niw0LjkxMiwxNS45OTksNC45MTJTMjcuMDg4LDkuODg3LDI3LjA4OCwxNlMyMi4xMTIsMjcuMDg3LDE1Ljk5OSwyNy4wODd6IiBzdHJva2Utd2lkdGg9IjAuMiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMTAuNzk4LDEzLjI3M0g4LjE2MmMtMC43NzgsMC0xLjQwOCwwLjYzMS0xLjQwOCwxLjQwOHYyLjYzNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAu'+
			'Nzc3LDAuNjMsMS40MDgsMS40MDgsMS40MDhoMi42MzZjMC43NzcsMCwxLjQwOC0wLjYzMSwxLjQwOC0xLjQwOHYtMi42MzdDMTIuMjA2LDEzLjkwNCwxMS41NzUsMTMuMjczLDEwLjc5OCwxMy4yNzN6IiBzdHJva2Utd2lkdGg9IjAuMiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMTcuMjY4LDEzLjI3M2gtMi42MzZjLTAuNzc3LDAtMS40MDgsMC42MzEtMS40MDgsMS40MDh2Mi42MzcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjc3NywwLjYzMSwxLjQwNywxLjQwOCwxLjQwN2gyLjYzNmMwLjc3NywwLDEuNDA3LTAuNjMsMS40MDctMS40MD'+
			'd2LTIuNjM3QzE4LjY3NSwxMy45MDQsMTguMDQ1LDEzLjI3MywxNy4yNjgsMTMuMjczeiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTIzLjczOCwxMy4yNzNoLTIuNjM2Yy0wLjc3OCwwLTEuNDA5LDAuNjMxLTEuNDA5LDEuNDA4djIuNjM3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC43NzcsMC42MzEsMS40MDcsMS40MDksMS40MDdoMi42MzZjMC43NzgsMCwxLjQwOS0wLjYzLDEuNDA5LTEuNDA3di0yLjYzN0MyNS4xNDcsMTMuOTA0LDI0LjUxNywxMy4yNzMsMjMuNzM4LDEzLjI3M3oiIHN0cm9rZS13aWR0'+
			'aD0iMC4yIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._thumbnail_show_button_show__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="thumbnail_show_button_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_show_button_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_show_button_show.onmouseover=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='hidden';
			me._thumbnail_show_button_show__imgo.style.visibility='inherit';
		}
		me._thumbnail_show_button_show.onmouseout=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='inherit';
			me._thumbnail_show_button_show__imgo.style.visibility='hidden';
		}
		me._thumbnail_show_button_show.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail.appendChild(me._thumbnail_show_button_show);
		el=me._tt_thumbnail_open=document.createElement('div');
		els=me._tt_thumbnail_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_thumbnail_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_thumbnail_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_thumbnail_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_thumbnail_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_thumbnail_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_thumbnail_open.style.top='-25px';
					me._tt_thumbnail_open.ggUpdatePosition(true);
				}
				else {
					me._tt_thumbnail_open.ggDx=0;
					me._tt_thumbnail_open.style.top='32px';
					me._tt_thumbnail_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_thumbnail_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_thumbnail_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_thumbnail_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStateVisible == 0) {
					me._tt_thumbnail_open.style.visibility=(Number(me._tt_thumbnail_open.style.opacity)>0||!me._tt_thumbnail_open.style.opacity)?'inherit':'hidden';
					me._tt_thumbnail_open.ggVisible=true;
				}
				else {
					me._tt_thumbnail_open.style.visibility="hidden";
					me._tt_thumbnail_open.ggVisible=false;
				}
			}
		}
		me._tt_thumbnail_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu_show') == true)) && 
				((player.getViewerSize().width > 450))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('vis_thumbnail_menu_mobile') == true)) && 
				((player.getViewerSize().width <= 450))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('vis_thumbnail_menu_show') == false)) && 
				((player.getViewerSize().width > 450))
			)
			{
				newLogicStateText = 2;
			}
			else if (
				((player.getVariableValue('vis_thumbnail_menu_mobile') == false)) && 
				((player.getViewerSize().width <= 450))
			)
			{
				newLogicStateText = 3;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_thumbnail_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_thumbnail_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStateText == 0) {
					me._tt_thumbnail_open.ggText="Hide Thumbnail Menu";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="Hide Thumbnail Menu";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else if (me._tt_thumbnail_open.ggCurrentLogicStateText == 1) {
					me._tt_thumbnail_open.ggText="Hide Thumbnail Menu";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="Hide Thumbnail Menu";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else if (me._tt_thumbnail_open.ggCurrentLogicStateText == 2) {
					me._tt_thumbnail_open.ggText="Show Thumbnail Menu";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="Show Thumbnail Menu";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else if (me._tt_thumbnail_open.ggCurrentLogicStateText == 3) {
					me._tt_thumbnail_open.ggText="Show Thumbnail Menu";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="Show Thumbnail Menu";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_thumbnail_open.ggText="";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_thumbnail_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._thumbnail.appendChild(me._tt_thumbnail_open);
		me._controller_slider.appendChild(me._thumbnail);
		el=me._info=document.createElement('div');
		els=me._info__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOn'+
			'NwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTAzLTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4'+
			'Ljg1MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MyMS4zMTMsNy4wMj'+
			'IsMTguNzk1LDUuODkzLDE2LDUuODkybDAsMEMxMy4yMDUsNS44OTMsMTAuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0iTTE0Ljk2MywxMC4wNVY5LjUyMWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk3LTEuMTk2bDAsMGMwLjY2LDAsMS4xOTYsMC41MzYsMS4xOTYsMS4xOTZsMCwwdjAuNTI5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC42NjEtMC41MzYsMS4xOTYtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4KICAgPGc+CiAgICA8'+
			'cGF0aCBkPSJNMTguNTMyLDIwLjM5MWgtMS4xNzZ2LTYuNDczYzAtMC4wMjEtMC4wMDUtMC4wNDItMC4wMDYtMC4wNjNjMC0wLjAxNCwwLjAwNC0wLjAyNiwwLjAwNC0wLjA0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0wLjY2MS0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMi4yMjZjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDEuMDMxdjUuMzc5aC0xLjIwNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNi'+
			'wxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MxOS43MjksMjAuOTI2LDE5LjE5MiwyMC4zOTEsMTguNTMyLDIwLjM5MXoiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgogIDxnPgogICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUsMTYsMy41bDAsMGM2LjkwMywwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0w'+
			'LjAwMSw2LjkwMy01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMC4wMDEsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMCwwYzEuODMyLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bD'+
			'AsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMjEuMzEzLDcuMDIyLDE4Ljc5NSw1Ljg5MywxNiw1Ljg5MmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNC45NjMsMTAuMDVWOS41MjFjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ny0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM2LDEuMTk2LDEuMTk2bDAsMHYwLjUyOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNjYxLTAuNTM2LDEuMTk2'+
			'LTEuMTk2LDEuMTk2bDAsMEMxNS41LDExLjI0NywxNC45NjMsMTAuNzExLDE0Ljk2MywxMC4wNUwxNC45NjMsMTAuMDV6Ii8+CiAgIDxnPgogICAgPHBhdGggZD0iTTE4LjUzMiwyMC4zOTFoLTEuMTc2di02LjQ3M2MwLTAuMDIxLTAuMDA1LTAuMDQyLTAuMDA2LTAuMDYzYzAtMC4wMTQsMC4wMDQtMC4wMjYsMC4wMDQtMC4wNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS'+
			'4yMDcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoNC43NzVjMC42NiwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMTkuNzI5LDIwLjkyNiwxOS4xOTIsMjAuMzkxLDE4LjUzMiwyMC4zOTF6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._info__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOn'+
			'NwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEy'+
			'LjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMGMxLjgzMiwxLjgzMSw0LjM1MiwyLjk2LDcuMTQ2LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMz'+
			'E0LTIuOTYtNy4xNDdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNMTQuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC41MjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjY2MS0wLjUzNiwxLjE5Ni0xLjE5NiwxLjE5NmwwLDBDMTUuNSwxMS4y'+
			'NDcsMTQuOTYzLDEwLjcxMSwxNC45NjMsMTAuMDVMMTQuOTYzLDEwLjA1eiIvPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0xOC41MzIsMjAuMzkxaC0xLjE3NnYtNi40NzNjMC0wLjAyMS0wLjAwNS0wLjA0Mi0wLjAwNi0wLjA2M2MwLTAuMDE0LDAuMDA0LTAuMDI2LDAuMDA0LTAuMDQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTAuNjYxLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7QzE5LjcyOSwyMC45MjYsMTkuMTkyLDIwLjM5MSwxOC41MzIsMjAuMzkxeiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8Zz4K'+
			'ICAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMGMxLjgzMiwxLjgzMSw0LjM1MiwyLj'+
			'k2LDcuMTQ2LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNMTQuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEs'+
			'MC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC41MjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjY2MS0wLjUzNiwxLjE5Ni0xLjE5NiwxLjE5NmwwLDBDMTUuNSwxMS4yNDcsMTQuOTYzLDEwLjcxMSwxNC45NjMsMTAuMDVMMTQuOTYzLDEwLjA1eiIvPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0xOC41MzIsMjAuMzkxaC0xLjE3NnYtNi40NzNjMC0wLjAyMS0wLjAwNS0wLjA0Mi0wLjAwNi0wLjA2M2MwLTAuMDE0LDAuMDA0LTAuMDI2LDAuMDA0LTAuMDQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O2'+
			'MwLTAuNjYxLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7QzE5LjcyOSwyMC45MjYsMTkuMTkyLDIwLjM5MSwxOC41MzIsMjAuMzkxeiIv'+
			'PgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._info__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_information') == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_information') == 1))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_information') == 2))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_information') == 3))
			)
			{
				newLogicStatePosition = 3;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._info.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._info.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._info.style[domTransition]='left 0s, top 0s';
				if (me._info.ggCurrentLogicStatePosition == 0) {
					me._info.style.left='0px';
					me._info.style.top='0px';
				}
				else if (me._info.ggCurrentLogicStatePosition == 1) {
					me._info.style.left='32px';
					me._info.style.top='0px';
				}
				else if (me._info.ggCurrentLogicStatePosition == 2) {
					me._info.style.left='64px';
					me._info.style.top='0px';
				}
				else if (me._info.ggCurrentLogicStatePosition == 3) {
					me._info.style.left='96px';
					me._info.style.top='0px';
				}
				else {
					me._info.style.left='96px';
					me._info.style.top='0px';
				}
			}
		}
		me._info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info.style[domTransition]='left 0s, top 0s';
				if (me._info.ggCurrentLogicStateVisible == 0) {
					me._info.style.visibility=(Number(me._info.style.opacity)>0||!me._info.style.opacity)?'inherit':'hidden';
					me._info.ggVisible=true;
				}
				else {
					me._info.style.visibility="hidden";
					me._info.ggVisible=false;
				}
			}
		}
		me._info.onclick=function (e) {
			player.setVariableValue('vis_userdata', true);
		}
		me._info.onmouseover=function (e) {
			me._info__img.style.visibility='hidden';
			me._info__imgo.style.visibility='inherit';
			me.elementMouseOver['info']=true;
			me._tt_userdata.logicBlock_visible();
		}
		me._info.onmouseout=function (e) {
			me._info__img.style.visibility='inherit';
			me._info__imgo.style.visibility='hidden';
			me.elementMouseOver['info']=false;
			me._tt_userdata.logicBlock_visible();
		}
		me._info.ontouchend=function (e) {
			me.elementMouseOver['info']=false;
			me._tt_userdata.logicBlock_visible();
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_userdata=document.createElement('div');
		els=me._tt_userdata__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_userdata";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show User Data";
		el.appendChild(els);
		me._tt_userdata.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_userdata.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_userdata.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_userdata.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_userdata.style[domTransition]='left 0s, top 0s';
				if (me._tt_userdata.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_userdata.style.top='-25px';
					me._tt_userdata.ggUpdatePosition(true);
				}
				else {
					me._tt_userdata.ggDx=0;
					me._tt_userdata.style.top='32px';
					me._tt_userdata.ggUpdatePosition(true);
				}
			}
		}
		me._tt_userdata.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['info'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_userdata.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_userdata.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_userdata.style[domTransition]='left 0s, top 0s';
				if (me._tt_userdata.ggCurrentLogicStateVisible == 0) {
					me._tt_userdata.style.visibility=(Number(me._tt_userdata.style.opacity)>0||!me._tt_userdata.style.opacity)?'inherit':'hidden';
					me._tt_userdata.ggVisible=true;
				}
				else {
					me._tt_userdata.style.visibility="hidden";
					me._tt_userdata.ggVisible=false;
				}
			}
		}
		me._tt_userdata.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._info.appendChild(me._tt_userdata);
		me._controller_slider.appendChild(me._info);
		el=me._autorotate_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="autorotate_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotate_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate_buttons.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_autorotate') == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_autorotate') == 1))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_autorotate') == 2))
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._autorotate_buttons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._autorotate_buttons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._autorotate_buttons.style[domTransition]='left 0s, top 0s';
				if (me._autorotate_buttons.ggCurrentLogicStatePosition == 0) {
					me._autorotate_buttons.style.left='0px';
					me._autorotate_buttons.style.top='0px';
				}
				else if (me._autorotate_buttons.ggCurrentLogicStatePosition == 1) {
					me._autorotate_buttons.style.left='32px';
					me._autorotate_buttons.style.top='0px';
				}
				else if (me._autorotate_buttons.ggCurrentLogicStatePosition == 2) {
					me._autorotate_buttons.style.left='64px';
					me._autorotate_buttons.style.top='0px';
				}
				else {
					me._autorotate_buttons.style.left='64px';
					me._autorotate_buttons.style.top='0px';
				}
			}
		}
		me._autorotate_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_autorotate') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._autorotate_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._autorotate_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._autorotate_buttons.style[domTransition]='left 0s, top 0s';
				if (me._autorotate_buttons.ggCurrentLogicStateVisible == 0) {
					me._autorotate_buttons.style.visibility=(Number(me._autorotate_buttons.style.opacity)>0||!me._autorotate_buttons.style.opacity)?'inherit':'hidden';
					me._autorotate_buttons.ggVisible=true;
				}
				else {
					me._autorotate_buttons.style.visibility="hidden";
					me._autorotate_buttons.ggVisible=false;
				}
			}
		}
		me._autorotate_buttons.onclick=function (e) {
			player.setUseGyro(false);
			player.toggleAutorotate();
		}
		me._autorotate_buttons.onmouseover=function (e) {
			me.elementMouseOver['autorotate_buttons']=true;
			me._tt_rotate.logicBlock_visible();
		}
		me._autorotate_buttons.onmouseout=function (e) {
			me.elementMouseOver['autorotate_buttons']=false;
			me._tt_rotate.logicBlock_visible();
		}
		me._autorotate_buttons.ontouchend=function (e) {
			me.elementMouseOver['autorotate_buttons']=false;
			me._tt_rotate.logicBlock_visible();
		}
		me._autorotate_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._autorotate_start=document.createElement('div');
		els=me._autorotate_start__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOn'+
			'NwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi41LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUz'+
			'LDguODU0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMSwxLjgzMy0yLjk2LDQuMzUyLTIuOTYsNy4xNDdsMCwwYzAsMi43OTQsMS4xMjksNS4zMTQsMi45Niw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODMzLTEuODMyLTQuMz'+
			'UzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1NEw4Ljg1Myw4Ljg1NHoiLz4KICA8L2c+CiAgPHBhdGggZD0iTTE4LjA3LDIwLjAwMWMtMC4xNzQtMC42MzgsMC4yMDMtMS4yOTUsMC44NDEtMS40NjlsMCwwYzEuMTM0LTAuMzA2LDIuMDU1LTAuNzg5LDIuNjMzLTEuMzA1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41ODQtMC41MjYsMC43OTctMS4wMDgsMC43OTgtMS40NDRsMCwwYy0wLjAwMi0wLjMxLTAuMTAyLTAuNjE3LTAuMzU5LTAuOTdsMCwwYy0wLjI1Ni0wLjM1LTAuNjc4LTAuNzIxLTEuMjQ3LTEuMDQ1bDAsMCYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMTM3LTAuNjU2LTIuODQtMS4xMS00LjczNS0xLjEwNmwwLDBjLTEuNDIyLTAuMDAxLTIuNzM1LDAuMjUtMy43ODMsMC42NTdsMCwwYy0xLjA1MSwwLjQwMi0xLjgxOSwwLjk2OS0yLjIwMSwxLjQ5NWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjI1NywwLjM1NC0wLjM1NiwwLjY2MS0wLjM1OCwwLjk3bDAsMGMwLjAwMSwwLjI4OCwwLjA4NywwLjU3MSwwLjMwNiwwLjg5NWwwLDBjMC4yMTcsMC4zMjEsMC41NzUsMC42NjYsMS4wNjUsMC45NzhsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2gwLjAwMWMwLjU1NywwLjM1NiwwLjcyLDEuMD'+
			'k2LDAuMzY0LDEuNjUybDAsMGMtMC4zNTUsMC41NTctMS4wOTUsMC43Mi0xLjY1MiwwLjM2NGwwLDBjLTAuNzA2LTAuNDUxLTEuMzEtMC45OTQtMS43NTUtMS42NDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40NDQtMC42NDctMC43MjMtMS40MjMtMC43MjItMi4yNDNsMCwwYy0wLjAwMS0wLjg4MywwLjMyMS0xLjcxMiwwLjgyNy0yLjM5MmwwLDBjMC41MDctMC42ODQsMS4xODgtMS4yNDQsMS45ODMtMS43bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS41OTItMC45MDcsMy42NTctMS40MTksNS45MjUtMS40MjNsMCwwYzEuNywwLDMuMjg4LDAuMjkzLDQuNjQ2LDAuODE4'+
			'bDAsMGMxLjM1NSwwLjUyOSwyLjQ5OCwxLjI4MSwzLjI2MSwyLjMwNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNTA2LDAuNjgsMC44MjksMS41MDgsMC44MjYsMi4zOTJsMCwwYzAuMDAxLDEuMjg4LTAuNjY4LDIuNDEzLTEuNjAyLDMuMjMzbDAsMGMtMC45NDIsMC44MzItMi4xNzgsMS40MzgtMy41OTQsMS44MjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xMDQsMC4wMjgtMC4yMTEsMC4wNDItMC4zMTQsMC4wNDJsMCwwQzE4LjY5NiwyMC44ODQsMTguMjE0LDIwLjUzMywxOC4wNywyMC4wMDFMMTguMDcsMjAuMDAxeiIvPgogIDxwYXRoIGQ9Ik0xNi4zOTYsMjMuNj'+
			'IxbC0zLjM3My0zLjAzOWMtMC4yNTEtMC4yMjYtMC4zOTYtMC41NTEtMC4zOTYtMC44ODlsMCwwYzAtMC4zMzcsMC4xNDYtMC42NjMsMC4zOTYtMC44ODkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAsMGwzLjM3NC0zLjAzOWMwLjQ5MS0wLjQ0MiwxLjI0Ny0wLjQwMywxLjY4OSwwLjA4OGwwLDBjMC40NDIsMC40OTEsMC40MDIsMS4yNDctMC4wODgsMS42ODlsMCwwbC0yLjM4NiwyLjE1bDIuMzg2LDIuMTQ5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQ5LDAuNDQyLDAuNTMsMS4xOTksMC4wODgsMS42OWwwLDBjLTAuMjM2LDAuMjYyLTAuNTYyLDAuMzk1LTAuODksMC4zOTVsMCwwQzE2'+
			'LjkxMiwyMy45MjgsMTYuNjI1LDIzLjgyNiwxNi4zOTYsMjMuNjIxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wxNi4zOTYsMjMuNjIxeiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi41LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LD'+
			'E2TDMuNSwxNnogTTguODUzLDguODU0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMSwxLjgzMy0yLjk2LDQuMzUyLTIuOTYsNy4xNDdsMCwwYzAsMi43OTQsMS4xMjksNS4zMTQsMi45Niw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtj'+
			'LTEuODMzLTEuODMyLTQuMzUzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1NEw4Ljg1Myw4Ljg1NHoiLz4KICA8L2c+CiAgPHBhdGggZD0iTTE4LjA3LDIwLjAwMWMtMC4xNzQtMC42MzgsMC4yMDMtMS4yOTUsMC44NDEtMS40NjlsMCwwYzEuMTM0LTAuMzA2LDIuMDU1LTAuNzg5LDIuNjMzLTEuMzA1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41ODQtMC41MjYsMC43OTctMS4wMDgsMC43OTgtMS40NDRsMCwwYy0wLjAwMi0wLjMxLTAuMTAyLTAuNjE3LTAuMzU5LTAuOTdsMCwwYy0wLjI1Ni0wLjM1LTAuNjc4LTAuNzIxLTEuMj'+
			'Q3LTEuMDQ1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMTM3LTAuNjU2LTIuODQtMS4xMS00LjczNS0xLjEwNmwwLDBjLTEuNDIyLTAuMDAxLTIuNzM1LDAuMjUtMy43ODMsMC42NTdsMCwwYy0xLjA1MSwwLjQwMi0xLjgxOSwwLjk2OS0yLjIwMSwxLjQ5NWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjI1NywwLjM1NC0wLjM1NiwwLjY2MS0wLjM1OCwwLjk3bDAsMGMwLjAwMSwwLjI4OCwwLjA4NywwLjU3MSwwLjMwNiwwLjg5NWwwLDBjMC4yMTcsMC4zMjEsMC41NzUsMC42NjYsMS4wNjUsMC45NzhsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2gwLjAwMWMwLjU1'+
			'NywwLjM1NiwwLjcyLDEuMDk2LDAuMzY0LDEuNjUybDAsMGMtMC4zNTUsMC41NTctMS4wOTUsMC43Mi0xLjY1MiwwLjM2NGwwLDBjLTAuNzA2LTAuNDUxLTEuMzEtMC45OTQtMS43NTUtMS42NDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40NDQtMC42NDctMC43MjMtMS40MjMtMC43MjItMi4yNDNsMCwwYy0wLjAwMS0wLjg4MywwLjMyMS0xLjcxMiwwLjgyNy0yLjM5MmwwLDBjMC41MDctMC42ODQsMS4xODgtMS4yNDQsMS45ODMtMS43bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS41OTItMC45MDcsMy42NTctMS40MTksNS45MjUtMS40MjNsMCwwYzEuNywwLDMuMjg4LD'+
			'AuMjkzLDQuNjQ2LDAuODE4bDAsMGMxLjM1NSwwLjUyOSwyLjQ5OCwxLjI4MSwzLjI2MSwyLjMwNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNTA2LDAuNjgsMC44MjksMS41MDgsMC44MjYsMi4zOTJsMCwwYzAuMDAxLDEuMjg4LTAuNjY4LDIuNDEzLTEuNjAyLDMuMjMzbDAsMGMtMC45NDIsMC44MzItMi4xNzgsMS40MzgtMy41OTQsMS44MjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xMDQsMC4wMjgtMC4yMTEsMC4wNDItMC4zMTQsMC4wNDJsMCwwQzE4LjY5NiwyMC44ODQsMTguMjE0LDIwLjUzMywxOC4wNywyMC4wMDFMMTguMDcsMjAuMDAxeiIvPgogIDxwYXRo'+
			'IGQ9Ik0xNi4zOTYsMjMuNjIxbC0zLjM3My0zLjAzOWMtMC4yNTEtMC4yMjYtMC4zOTYtMC41NTEtMC4zOTYtMC44ODlsMCwwYzAtMC4zMzcsMC4xNDYtMC42NjMsMC4zOTYtMC44ODkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAsMGwzLjM3NC0zLjAzOWMwLjQ5MS0wLjQ0MiwxLjI0Ny0wLjQwMywxLjY4OSwwLjA4OGwwLDBjMC40NDIsMC40OTEsMC40MDIsMS4yNDctMC4wODgsMS42ODlsMCwwbC0yLjM4NiwyLjE1bDIuMzg2LDIuMTQ5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQ5LDAuNDQyLDAuNTMsMS4xOTksMC4wODgsMS42OWwwLDBjLTAuMjM2LDAuMjYyLTAuNTYyLDAuMzk1LT'+
			'AuODksMC4zOTVsMCwwQzE2LjkxMiwyMy45MjgsMTYuNjI1LDIzLjgyNiwxNi4zOTYsMjMuNjIxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wxNi4zOTYsMjMuNjIxeiIvPgogPC9nPgo8L3N2Zz4K';
		me._autorotate_start__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate_start__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOn'+
			'NwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjUsMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTkt'+
			'MTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODMxLDEuODMzLTIuOTYsNC4zNTItMi45Niw3LjE0N2wwLDBjMCwyLjc5NCwxLjEyOSw1LjMxNCwyLjk2LDcuMTQ3bDAsMGMxLjgzMiwxLjgzLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMCw1LjMxNC0xLjEzLDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMzLDIuOTU5LTQuMzUzLDIuOTYtNy4xNDdsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLj'+
			'k2LTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMS44MzMtMS44MzItNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODU0TDguODUzLDguODU0eiIvPgogIDwvZz4KICA8cGF0aCBkPSJNMTguMDcsMjAuMDAxYy0wLjE3NC0wLjYzOCwwLjIwMy0xLjI5NSwwLjg0MS0xLjQ2OWwwLDBjMS4xMzQtMC4zMDYsMi4wNTUtMC43ODksMi42MzMtMS4zMDVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjU4NC0wLjUyNiwwLjc5Ny0xLjAwOCwwLjc5OC0xLjQ0NGwwLDBjLTAuMDAyLTAuMzEtMC4xMDItMC42MTct'+
			'MC4zNTktMC45N2wwLDBjLTAuMjU2LTAuMzUtMC42NzgtMC43MjEtMS4yNDctMS4wNDVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS4xMzctMC42NTYtMi44NC0xLjExLTQuNzM1LTEuMTA2bDAsMGMtMS40MjItMC4wMDEtMi43MzUsMC4yNS0zLjc4MywwLjY1N2wwLDBjLTEuMDUxLDAuNDAyLTEuODE5LDAuOTY5LTIuMjAxLDEuNDk1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMjU3LDAuMzU0LTAuMzU2LDAuNjYxLTAuMzU4LDAuOTdsMCwwYzAuMDAxLDAuMjg4LDAuMDg3LDAuNTcxLDAuMzA2LDAuODk1bDAsMGMwLjIxNywwLjMyMSwwLjU3NSwwLjY2NiwxLjA2NSwwLj'+
			'k3OGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aDAuMDAxYzAuNTU3LDAuMzU2LDAuNzIsMS4wOTYsMC4zNjQsMS42NTJsMCwwYy0wLjM1NSwwLjU1Ny0xLjA5NSwwLjcyLTEuNjUyLDAuMzY0bDAsMGMtMC43MDYtMC40NTEtMS4zMS0wLjk5NC0xLjc1NS0xLjY0NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ0NC0wLjY0Ny0wLjcyMy0xLjQyMy0wLjcyMi0yLjI0M2wwLDBjLTAuMDAxLTAuODgzLDAuMzIxLTEuNzEyLDAuODI3LTIuMzkybDAsMGMwLjUwNy0wLjY4NCwxLjE4OC0xLjI0NCwxLjk4My0xLjdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjU5Mi0wLjkw'+
			'NywzLjY1Ny0xLjQxOSw1LjkyNS0xLjQyM2wwLDBjMS43LDAsMy4yODgsMC4yOTMsNC42NDYsMC44MThsMCwwYzEuMzU1LDAuNTI5LDIuNDk4LDEuMjgxLDMuMjYxLDIuMzA1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41MDYsMC42OCwwLjgyOSwxLjUwOCwwLjgyNiwyLjM5MmwwLDBjMC4wMDEsMS4yODgtMC42NjgsMi40MTMtMS42MDIsMy4yMzNsMCwwYy0wLjk0MiwwLjgzMi0yLjE3OCwxLjQzOC0zLjU5NCwxLjgyNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjEwNCwwLjAyOC0wLjIxMSwwLjA0Mi0wLjMxNCwwLjA0MmwwLDBDMTguNjk2LDIwLjg4NCwxOC4yMTQsMj'+
			'AuNTMzLDE4LjA3LDIwLjAwMUwxOC4wNywyMC4wMDF6Ii8+CiAgPHBhdGggZD0iTTE2LjM5NiwyMy42MjFsLTMuMzczLTMuMDM5Yy0wLjI1MS0wLjIyNi0wLjM5Ni0wLjU1MS0wLjM5Ni0wLjg4OWwwLDBjMC0wLjMzNywwLjE0Ni0wLjY2MywwLjM5Ni0wLjg4OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMCwwbDMuMzc0LTMuMDM5YzAuNDkxLTAuNDQyLDEuMjQ3LTAuNDAzLDEuNjg5LDAuMDg4bDAsMGMwLjQ0MiwwLjQ5MSwwLjQwMiwxLjI0Ny0wLjA4OCwxLjY4OWwwLDBsLTIuMzg2LDIuMTVsMi4zODYsMi4xNDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDksMC40NDIsMC41MywxLjE5'+
			'OSwwLjA4OCwxLjY5bDAsMGMtMC4yMzYsMC4yNjItMC41NjIsMC4zOTUtMC44OSwwLjM5NWwwLDBDMTYuOTEyLDIzLjkyOCwxNi42MjUsMjMuODI2LDE2LjM5NiwyMy42MjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TDE2LjM5NiwyMy42MjF6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgogIDxnPgogICA8cGF0aCBkPSJNMy41LDE2YzAtNi45MDQsNS41OTYtMTIuNSwxMi41LTEyLjVsMCwwYzYuOTA0LDAsMTIuNDk5LD'+
			'UuNTk2LDEyLjUsMTIuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTA0LTUuNTk2LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4Ljg1NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMS44MzEsMS44MzMtMi45Niw0LjM1Mi0yLjk2LDcuMTQ3bDAsMGMwLDIuNzk0LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDdsMCwwYzEuODMyLDEuODMsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MyLjc5NSwwLDUuMzE0LTEuMTMsNy4xNDct'+
			'Mi45NmwwLDBjMS44MzEtMS44MzMsMi45NTktNC4zNTMsMi45Ni03LjE0N2wwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMy0xLjgzMi00LjM1My0yLjk2LTcuMTQ3LTIuOTZsMCwwQzEzLjIwNSw1Ljg5NCwxMC42ODYsNy4wMjIsOC44NTMsOC44NTRMOC44NTMsOC44NTR6Ii8+CiAgPC9nPgogIDxwYXRoIGQ9Ik0xOC4wNywyMC4wMDFjLTAuMTc0LTAuNjM4LDAuMjAzLTEuMjk1LDAuODQxLTEuNDY5bDAsMGMxLjEzNC0wLjMwNiwyLjA1NS0wLjc4OSwyLjYzMy0xLjMwNWwwLDAmI3hkOyYjeGE7JiN4OT'+
			'smI3g5OyYjeDk7YzAuNTg0LTAuNTI2LDAuNzk3LTEuMDA4LDAuNzk4LTEuNDQ0bDAsMGMtMC4wMDItMC4zMS0wLjEwMi0wLjYxNy0wLjM1OS0wLjk3bDAsMGMtMC4yNTYtMC4zNS0wLjY3OC0wLjcyMS0xLjI0Ny0xLjA0NWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjEzNy0wLjY1Ni0yLjg0LTEuMTEtNC43MzUtMS4xMDZsMCwwYy0xLjQyMi0wLjAwMS0yLjczNSwwLjI1LTMuNzgzLDAuNjU3bDAsMGMtMS4wNTEsMC40MDItMS44MTksMC45NjktMi4yMDEsMS40OTVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4yNTcsMC4zNTQtMC4zNTYsMC42NjEtMC4zNTgsMC45N2ww'+
			'LDBjMC4wMDEsMC4yODgsMC4wODcsMC41NzEsMC4zMDYsMC44OTVsMCwwYzAuMjE3LDAuMzIxLDAuNTc1LDAuNjY2LDEuMDY1LDAuOTc4bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtoMC4wMDFjMC41NTcsMC4zNTYsMC43MiwxLjA5NiwwLjM2NCwxLjY1MmwwLDBjLTAuMzU1LDAuNTU3LTEuMDk1LDAuNzItMS42NTIsMC4zNjRsMCwwYy0wLjcwNi0wLjQ1MS0xLjMxLTAuOTk0LTEuNzU1LTEuNjQ2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNDQ0LTAuNjQ3LTAuNzIzLTEuNDIzLTAuNzIyLTIuMjQzbDAsMGMtMC4wMDEtMC44ODMsMC4zMjEtMS43MTIsMC44MjctMi4zOTJsMC'+
			'wwYzAuNTA3LTAuNjg0LDEuMTg4LTEuMjQ0LDEuOTgzLTEuN2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuNTkyLTAuOTA3LDMuNjU3LTEuNDE5LDUuOTI1LTEuNDIzbDAsMGMxLjcsMCwzLjI4OCwwLjI5Myw0LjY0NiwwLjgxOGwwLDBjMS4zNTUsMC41MjksMi40OTgsMS4yODEsMy4yNjEsMi4zMDVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjUwNiwwLjY4LDAuODI5LDEuNTA4LDAuODI2LDIuMzkybDAsMGMwLjAwMSwxLjI4OC0wLjY2OCwyLjQxMy0xLjYwMiwzLjIzM2wwLDBjLTAuOTQyLDAuODMyLTIuMTc4LDEuNDM4LTMuNTk0LDEuODI1bDAsMCYjeGQ7JiN4YTsmI3g5'+
			'OyYjeDk7JiN4OTtjLTAuMTA0LDAuMDI4LTAuMjExLDAuMDQyLTAuMzE0LDAuMDQybDAsMEMxOC42OTYsMjAuODg0LDE4LjIxNCwyMC41MzMsMTguMDcsMjAuMDAxTDE4LjA3LDIwLjAwMXoiLz4KICA8cGF0aCBkPSJNMTYuMzk2LDIzLjYyMWwtMy4zNzMtMy4wMzljLTAuMjUxLTAuMjI2LTAuMzk2LTAuNTUxLTAuMzk2LTAuODg5bDAsMGMwLTAuMzM3LDAuMTQ2LTAuNjYzLDAuMzk2LTAuODg5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wwLDBsMy4zNzQtMy4wMzljMC40OTEtMC40NDIsMS4yNDctMC40MDMsMS42ODksMC4wODhsMCwwYzAuNDQyLDAuNDkxLDAuNDAyLDEuMjQ3LTAuMDg4LDEuNj'+
			'g5bDAsMGwtMi4zODYsMi4xNWwyLjM4NiwyLjE0OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40OSwwLjQ0MiwwLjUzLDEuMTk5LDAuMDg4LDEuNjlsMCwwYy0wLjIzNiwwLjI2Mi0wLjU2MiwwLjM5NS0wLjg5LDAuMzk1bDAsMEMxNi45MTIsMjMuOTI4LDE2LjYyNSwyMy44MjYsMTYuMzk2LDIzLjYyMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMMTYuMzk2LDIzLjYyMXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._autorotate_start__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="autorotate_start";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotate_start.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate_start.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._autorotate_start.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._autorotate_start.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._autorotate_start.style[domTransition]='opacity 500ms ease 0ms';
				if (me._autorotate_start.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._autorotate_start.style.opacity == 0.0) { me._autorotate_start.style.visibility="hidden"; } }, 505);
					me._autorotate_start.style.opacity=0;
				}
				else {
					me._autorotate_start.style.visibility=me._autorotate_start.ggVisible?'inherit':'hidden';
					me._autorotate_start.style.opacity=1;
				}
			}
		}
		me._autorotate_start.onmouseover=function (e) {
			me._autorotate_start__img.style.visibility='hidden';
			me._autorotate_start__imgo.style.visibility='inherit';
		}
		me._autorotate_start.onmouseout=function (e) {
			me._autorotate_start__img.style.visibility='inherit';
			me._autorotate_start__imgo.style.visibility='hidden';
		}
		me._autorotate_start.ggUpdatePosition=function (useTransition) {
		}
		me._autorotate_buttons.appendChild(me._autorotate_start);
		el=me._autorotate_stop=document.createElement('div');
		els=me._autorotate_stop__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOn'+
			'NwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjUsMTIuNSwxMi41YzYuOTAzLDAsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI4LjQ5OCw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDdjLTEuODMzLDEuODMxLTQuMzUyLDIuOTU5LTcuMTQ2LDIuOTYx'+
			'Yy0yLjc5Ni0wLjAwMi01LjMxNS0xLjEzLTcuMTQ3LTIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtDNy4wMjEsMjEuMzE0LDUuODkzLDE4Ljc5NSw1Ljg5MiwxNmMwLjAwMS0yLjc5NSwxLjEzLTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTU5LDcuMTQ3LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTZjMS44MzEsMS44MzMsMi45Niw0LjM1MiwyLjk2LDcuMTQ3UzI0Ljk3OCwyMS4zMTQsMjMuMTQ2LDIzLjE0N3ogTTIzLjkwNywxMy4zOTImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43NjMtMS4wMjQtMS45MDYtMS43Nz'+
			'YtMy4yNjItMi4zMDVDMTkuMjg3LDEwLjU2MiwxNy43LDEwLjI3LDE2LDEwLjI2OWMtMi4yNjgsMC4wMDMtNC4zMzMsMC41MTYtNS45MjUsMS40MjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43OTUsMC40NTYtMS40NzcsMS4wMTYtMS45ODMsMS43Yy0wLjUwNSwwLjY4LTAuODI4LDEuNTA4LTAuODI2LDIuMzkyYy0wLjAwMiwwLjgxOSwwLjI3NiwxLjU5NSwwLjcyMiwyLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDQ1LDAuNjUxLDEuMDQ5LDEuMTk0LDEuNzU1LDEuNjQ2YzAuMTk5LDAuMTI4LDAuNDIzLDAuMTg4LDAuNjQzLDAuMTg4YzAuMzk1LDAsMC43ODEtMC4xOTUsMS4wMDktMC41NTMm'+
			'I3hkOyYjeGE7JiN4OTsmI3g5O2MwLjM1Ni0wLjU1NywwLjE5My0xLjI5Ni0wLjM2My0xLjY1MWwtMC4wMDEtMC4wMDFjLTAuNDktMC4zMTItMC44NDgtMC42NTUtMS4wNjUtMC45NzdjLTAuMjE4LTAuMzI0LTAuMzA0LTAuNjA4LTAuMzA2LTAuODk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4wMDItMC4zMSwwLjEwMi0wLjYxNywwLjM1OC0wLjk3MWMwLjM4MS0wLjUyNSwxLjE1LTEuMDkyLDIuMi0xLjQ5NWMxLjA0OC0wLjQwNiwyLjM2MS0wLjY1OCwzLjc4My0wLjY1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuODk1LTAuMDAzLDMuNTk5LDAuNDUxLDQuNzM0LDEuMTA3YzAuNTY5LDAuMzI1LDAuOT'+
			'kyLDAuNjk2LDEuMjQ4LDEuMDQ1YzAuMjU4LDAuMzU0LDAuMzU2LDAuNjYxLDAuMzU4LDAuOTcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4wMDUsMC41MDMtMC4zMDUsMS4xMDUtMS4xMzUsMS43MTJjLTAuNTM2LDAuMzg3LTAuNjU2LDEuMTM1LTAuMjcxLDEuNjcxYzAuMzg3LDAuNTM1LDEuMTM1LDAuNjU2LDEuNjcxLDAuMjcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4yMTItMC44NjcsMi4xMjMtMi4xMywyLjEyNy0zLjY1M0MyNC43MzUsMTQuOSwyNC40MTIsMTQuMDcyLDIzLjkwNywxMy4zOTJ6IE0xOS4zNjQsMTYuMTgyYy0wLjQ2OC0wLjQ2Ny0xLjIyNi0wLjQ2Ny0xLjY5MiwwJiN4ZDsmI3hh'+
			'OyYjeDk7JiN4OTtsLTEuNTU3LDEuNTU4bC0xLjU1OC0xLjU1OGMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMGMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MmwxLjU1NywxLjU1N2wtMS41NTcsMS41NTcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjgtMC40NjcsMS4yMjYsMCwxLjY5MmMwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC42MTItMC4xMTcsMC44NDYtMC4zNTFsMS41NTgtMS41NThsMS41NTcsMS41NTgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC'+
			'42MTItMC4xMTcsMC44NDctMC4zNTFjMC40NjctMC40NjcsMC40NjctMS4yMjUsMC0xLjY5MmwtMS41NTgtMS41NTdsMS41NTgtMS41NTcmI3hkOyYjeGE7JiN4OTsmI3g5O0MxOS44MzEsMTcuNDA2LDE5LjgzMSwxNi42NDgsMTkuMzY0LDE2LjE4MnoiLz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgogIDxwYXRoIGQ9Ik0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwNCw1LjU5NiwxMi41LDEyLjUsMTIuNWM2LjkwMywwLDEyLjQ5OS01LjU5NiwxMi41LTEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOC40'+
			'OTgsOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ3Yy0xLjgzMywxLjgzMS00LjM1MiwyLjk1OS03LjE0NiwyLjk2MWMtMi43OTYtMC4wMDItNS4zMTUtMS4xMy03LjE0Ny0yLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzcuMDIxLDIxLjMxNCw1Ljg5MywxOC43OTUsNS44OTIsMTZjMC4wMDEtMi43OTUsMS4xMy01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk1OSw3LjE0Ny0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLjk2YzEuODMxLDEuODMzLDIuOTYsNC4zNTIsMi45Niw3LjE0N1MyNC45NzgsMj'+
			'EuMzE0LDIzLjE0NiwyMy4xNDd6IE0yMy45MDcsMTMuMzkyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNzYzLTEuMDI0LTEuOTA2LTEuNzc2LTMuMjYyLTIuMzA1QzE5LjI4NywxMC41NjIsMTcuNywxMC4yNywxNiwxMC4yNjljLTIuMjY4LDAuMDAzLTQuMzMzLDAuNTE2LTUuOTI1LDEuNDI0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNzk1LDAuNDU2LTEuNDc3LDEuMDE2LTEuOTgzLDEuN2MtMC41MDUsMC42OC0wLjgyOCwxLjUwOC0wLjgyNiwyLjM5MmMtMC4wMDIsMC44MTksMC4yNzYsMS41OTUsMC43MjIsMi4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQ0NSwwLjY1MSwxLjA0OSwxLjE5NCwx'+
			'Ljc1NSwxLjY0NmMwLjE5OSwwLjEyOCwwLjQyMywwLjE4OCwwLjY0MywwLjE4OGMwLjM5NSwwLDAuNzgxLTAuMTk1LDEuMDA5LTAuNTUzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zNTYtMC41NTcsMC4xOTMtMS4yOTYtMC4zNjMtMS42NTFsLTAuMDAxLTAuMDAxYy0wLjQ5LTAuMzEyLTAuODQ4LTAuNjU1LTEuMDY1LTAuOTc3Yy0wLjIxOC0wLjMyNC0wLjMwNC0wLjYwOC0wLjMwNi0wLjg5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMDAyLTAuMzEsMC4xMDItMC42MTcsMC4zNTgtMC45NzFjMC4zODEtMC41MjUsMS4xNS0xLjA5MiwyLjItMS40OTVjMS4wNDgtMC40MDYsMi4zNjEtMC42NTgsMy43OD'+
			'MtMC42NTcmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjg5NS0wLjAwMywzLjU5OSwwLjQ1MSw0LjczNCwxLjEwN2MwLjU2OSwwLjMyNSwwLjk5MiwwLjY5NiwxLjI0OCwxLjA0NWMwLjI1OCwwLjM1NCwwLjM1NiwwLjY2MSwwLjM1OCwwLjk3MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMDA1LDAuNTAzLTAuMzA1LDEuMTA1LTEuMTM1LDEuNzEyYy0wLjUzNiwwLjM4Ny0wLjY1NiwxLjEzNS0wLjI3MSwxLjY3MWMwLjM4NywwLjUzNSwxLjEzNSwwLjY1NiwxLjY3MSwwLjI3MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMjEyLTAuODY3LDIuMTIzLTIuMTMsMi4xMjctMy42NTNDMjQuNzM1LDE0LjksMjQuNDEy'+
			'LDE0LjA3MiwyMy45MDcsMTMuMzkyeiBNMTkuMzY0LDE2LjE4MmMtMC40NjgtMC40NjctMS4yMjYtMC40NjctMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xLjU1NywxLjU1OGwtMS41NTgtMS41NThjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJsMS41NTcsMS41NTdsLTEuNTU3LDEuNTU3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY4LTAuNDY3LDEuMjI2LDAsMS42OTJjMC4yMzMsMC4yMzMsMC41NCwwLjM1MSwwLjg0NiwwLjM1MWMwLjMwNywwLDAuNjEyLTAuMTE3LDAuODQ2LTAuMzUxbDEuNTU4LTEuNT'+
			'U4bDEuNTU3LDEuNTU4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yMzMsMC4yMzMsMC41NCwwLjM1MSwwLjg0NiwwLjM1MWMwLjMwNywwLDAuNjEyLTAuMTE3LDAuODQ3LTAuMzUxYzAuNDY3LTAuNDY3LDAuNDY3LTEuMjI1LDAtMS42OTJsLTEuNTU4LTEuNTU3bDEuNTU4LTEuNTU3JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTkuODMxLDE3LjQwNiwxOS44MzEsMTYuNjQ4LDE5LjM2NCwxNi4xODJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate_stop__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate_stop__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOn'+
			'NwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNSwxMi41LDEyLjVjNi45MDMsMCwxMi40OTktNS41OTYsMTIuNS0xMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjguNDk4LDkuMDk2LDIyLjkwMywzLjUs'+
			'MTYsMy41eiBNMjMuMTQ2LDIzLjE0N2MtMS44MzMsMS44MzEtNC4zNTIsMi45NTktNy4xNDYsMi45NjFjLTIuNzk2LTAuMDAyLTUuMzE1LTEuMTMtNy4xNDctMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5O0M3LjAyMSwyMS4zMTQsNS44OTMsMTguNzk1LDUuODkyLDE2YzAuMDAxLTIuNzk1LDEuMTMtNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45NTksNy4xNDctMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NmMxLjgzMSwxLjgzMywyLjk2LDQuMzUyLDIuOTYsNy4xNDdTMjQuOTc4LDIxLjMxNCwyMy4xNDYsMjMuMTQ3ei'+
			'BNMjMuOTA3LDEzLjM5MiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjc2My0xLjAyNC0xLjkwNi0xLjc3Ni0zLjI2Mi0yLjMwNUMxOS4yODcsMTAuNTYyLDE3LjcsMTAuMjcsMTYsMTAuMjY5Yy0yLjI2OCwwLjAwMy00LjMzMywwLjUxNi01LjkyNSwxLjQyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjc5NSwwLjQ1Ni0xLjQ3NywxLjAxNi0xLjk4MywxLjdjLTAuNTA1LDAuNjgtMC44MjgsMS41MDgtMC44MjYsMi4zOTJjLTAuMDAyLDAuODE5LDAuMjc2LDEuNTk1LDAuNzIyLDIuMjQzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NDUsMC42NTEsMS4wNDksMS4xOTQsMS43NTUsMS42NDZjMC4xOTksMC4x'+
			'MjgsMC40MjMsMC4xODgsMC42NDMsMC4xODhjMC4zOTUsMCwwLjc4MS0wLjE5NSwxLjAwOS0wLjU1MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMzU2LTAuNTU3LDAuMTkzLTEuMjk2LTAuMzYzLTEuNjUxbC0wLjAwMS0wLjAwMWMtMC40OS0wLjMxMi0wLjg0OC0wLjY1NS0xLjA2NS0wLjk3N2MtMC4yMTgtMC4zMjQtMC4zMDQtMC42MDgtMC4zMDYtMC44OTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjAwMi0wLjMxLDAuMTAyLTAuNjE3LDAuMzU4LTAuOTcxYzAuMzgxLTAuNTI1LDEuMTUtMS4wOTIsMi4yLTEuNDk1YzEuMDQ4LTAuNDA2LDIuMzYxLTAuNjU4LDMuNzgzLTAuNjU3JiN4ZDsmI3hhOyYjeD'+
			'k7JiN4OTtjMS44OTUtMC4wMDMsMy41OTksMC40NTEsNC43MzQsMS4xMDdjMC41NjksMC4zMjUsMC45OTIsMC42OTYsMS4yNDgsMS4wNDVjMC4yNTgsMC4zNTQsMC4zNTYsMC42NjEsMC4zNTgsMC45NzEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjAwNSwwLjUwMy0wLjMwNSwxLjEwNS0xLjEzNSwxLjcxMmMtMC41MzYsMC4zODctMC42NTYsMS4xMzUtMC4yNzEsMS42NzFjMC4zODcsMC41MzUsMS4xMzUsMC42NTYsMS42NzEsMC4yNzEmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjIxMi0wLjg2NywyLjEyMy0yLjEzLDIuMTI3LTMuNjUzQzI0LjczNSwxNC45LDI0LjQxMiwxNC4wNzIsMjMuOTA3LDEzLjM5'+
			'MnogTTE5LjM2NCwxNi4xODJjLTAuNDY4LTAuNDY3LTEuMjI2LTAuNDY3LTEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMS41NTcsMS41NThsLTEuNTU4LTEuNTU4Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkybDEuNTU3LDEuNTU3bC0xLjU1NywxLjU1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2OC0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuMjMzLDAuMjMzLDAuNTQsMC4zNTEsMC44NDYsMC4zNTFjMC4zMDcsMCwwLjYxMi0wLjExNywwLjg0Ni0wLjM1MWwxLjU1OC0xLjU1OGwxLjU1NywxLjU1OCYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7YzAuMjMzLDAuMjMzLDAuNTQsMC4zNTEsMC44NDYsMC4zNTFjMC4zMDcsMCwwLjYxMi0wLjExNywwLjg0Ny0wLjM1MWMwLjQ2Ny0wLjQ2NywwLjQ2Ny0xLjIyNSwwLTEuNjkybC0xLjU1OC0xLjU1N2wxLjU1OC0xLjU1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE5LjgzMSwxNy40MDYsMTkuODMxLDE2LjY0OCwxOS4zNjQsMTYuMTgyeiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8cGF0aCBkPSJN'+
			'MTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNSwxMi41LDEyLjVjNi45MDMsMCwxMi40OTktNS41OTYsMTIuNS0xMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjguNDk4LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0N2MtMS44MzMsMS44MzEtNC4zNTIsMi45NTktNy4xNDYsMi45NjFjLTIuNzk2LTAuMDAyLTUuMzE1LTEuMTMtNy4xNDctMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5O0M3LjAyMSwyMS4zMTQsNS44OTMsMTguNzk1LDUuODkyLDE2YzAuMDAxLTIuNzk1LDEuMTMtNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC'+
			'4zNTItMi45NTksNy4xNDctMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NmMxLjgzMSwxLjgzMywyLjk2LDQuMzUyLDIuOTYsNy4xNDdTMjQuOTc4LDIxLjMxNCwyMy4xNDYsMjMuMTQ3eiBNMjMuOTA3LDEzLjM5MiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjc2My0xLjAyNC0xLjkwNi0xLjc3Ni0zLjI2Mi0yLjMwNUMxOS4yODcsMTAuNTYyLDE3LjcsMTAuMjcsMTYsMTAuMjY5Yy0yLjI2OCwwLjAwMy00LjMzMywwLjUxNi01LjkyNSwxLjQyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjc5NSwwLjQ1Ni0xLjQ3NywxLjAxNi0xLjk4MywxLjdj'+
			'LTAuNTA1LDAuNjgtMC44MjgsMS41MDgtMC44MjYsMi4zOTJjLTAuMDAyLDAuODE5LDAuMjc2LDEuNTk1LDAuNzIyLDIuMjQzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NDUsMC42NTEsMS4wNDksMS4xOTQsMS43NTUsMS42NDZjMC4xOTksMC4xMjgsMC40MjMsMC4xODgsMC42NDMsMC4xODhjMC4zOTUsMCwwLjc4MS0wLjE5NSwxLjAwOS0wLjU1MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMzU2LTAuNTU3LDAuMTkzLTEuMjk2LTAuMzYzLTEuNjUxbC0wLjAwMS0wLjAwMWMtMC40OS0wLjMxMi0wLjg0OC0wLjY1NS0xLjA2NS0wLjk3N2MtMC4yMTgtMC4zMjQtMC4zMDQtMC42MDgtMC4zMDYtMC44OT'+
			'YmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjAwMi0wLjMxLDAuMTAyLTAuNjE3LDAuMzU4LTAuOTcxYzAuMzgxLTAuNTI1LDEuMTUtMS4wOTIsMi4yLTEuNDk1YzEuMDQ4LTAuNDA2LDIuMzYxLTAuNjU4LDMuNzgzLTAuNjU3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS44OTUtMC4wMDMsMy41OTksMC40NTEsNC43MzQsMS4xMDdjMC41NjksMC4zMjUsMC45OTIsMC42OTYsMS4yNDgsMS4wNDVjMC4yNTgsMC4zNTQsMC4zNTYsMC42NjEsMC4zNTgsMC45NzEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjAwNSwwLjUwMy0wLjMwNSwxLjEwNS0xLjEzNSwxLjcxMmMtMC41MzYsMC4zODctMC42NTYsMS4xMzUtMC4y'+
			'NzEsMS42NzFjMC4zODcsMC41MzUsMS4xMzUsMC42NTYsMS42NzEsMC4yNzEmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjIxMi0wLjg2NywyLjEyMy0yLjEzLDIuMTI3LTMuNjUzQzI0LjczNSwxNC45LDI0LjQxMiwxNC4wNzIsMjMuOTA3LDEzLjM5MnogTTE5LjM2NCwxNi4xODJjLTAuNDY4LTAuNDY3LTEuMjI2LTAuNDY3LTEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMS41NTcsMS41NThsLTEuNTU4LTEuNTU4Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkybDEuNTU3LDEuNTU3bC0xLjU1NywxLjU1NyYjeGQ7JiN4YTsmI3'+
			'g5OyYjeDk7Yy0wLjQ2NywwLjQ2OC0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuMjMzLDAuMjMzLDAuNTQsMC4zNTEsMC44NDYsMC4zNTFjMC4zMDcsMCwwLjYxMi0wLjExNywwLjg0Ni0wLjM1MWwxLjU1OC0xLjU1OGwxLjU1NywxLjU1OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMjMzLDAuMjMzLDAuNTQsMC4zNTEsMC44NDYsMC4zNTFjMC4zMDcsMCwwLjYxMi0wLjExNywwLjg0Ny0wLjM1MWMwLjQ2Ny0wLjQ2NywwLjQ2Ny0xLjIyNSwwLTEuNjkybC0xLjU1OC0xLjU1N2wxLjU1OC0xLjU1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE5LjgzMSwxNy40MDYsMTkuODMxLDE2LjY0OCwxOS4zNjQsMTYuMTgy'+
			'eiIvPgogPC9nPgo8L3N2Zz4K';
		me._autorotate_stop__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="autorotate_stop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotate_stop.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate_stop.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._autorotate_stop.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._autorotate_stop.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._autorotate_stop.style[domTransition]='opacity 500ms ease 0ms';
				if (me._autorotate_stop.ggCurrentLogicStateAlpha == 0) {
					me._autorotate_stop.style.visibility=me._autorotate_stop.ggVisible?'inherit':'hidden';
					me._autorotate_stop.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._autorotate_stop.style.opacity == 0.0) { me._autorotate_stop.style.visibility="hidden"; } }, 505);
					me._autorotate_stop.style.opacity=0;
				}
			}
		}
		me._autorotate_stop.onmouseover=function (e) {
			me._autorotate_stop__img.style.visibility='hidden';
			me._autorotate_stop__imgo.style.visibility='inherit';
		}
		me._autorotate_stop.onmouseout=function (e) {
			me._autorotate_stop__img.style.visibility='inherit';
			me._autorotate_stop__imgo.style.visibility='hidden';
		}
		me._autorotate_stop.ggUpdatePosition=function (useTransition) {
		}
		me._autorotate_buttons.appendChild(me._autorotate_stop);
		el=me._tt_rotate=document.createElement('div');
		els=me._tt_rotate__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_rotate";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_rotate.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_rotate.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_rotate.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_rotate.style[domTransition]='left 0s, top 0s';
				if (me._tt_rotate.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_rotate.style.top='-25px';
					me._tt_rotate.ggUpdatePosition(true);
				}
				else {
					me._tt_rotate.ggDx=0;
					me._tt_rotate.style.top='32px';
					me._tt_rotate.ggUpdatePosition(true);
				}
			}
		}
		me._tt_rotate.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['autorotate_buttons'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_rotate.style[domTransition]='left 0s, top 0s';
				if (me._tt_rotate.ggCurrentLogicStateVisible == 0) {
					me._tt_rotate.style.visibility=(Number(me._tt_rotate.style.opacity)>0||!me._tt_rotate.style.opacity)?'inherit':'hidden';
					me._tt_rotate.ggVisible=true;
				}
				else {
					me._tt_rotate.style.visibility="hidden";
					me._tt_rotate.ggVisible=false;
				}
			}
		}
		me._tt_rotate.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getIsAutorotating() == false))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_rotate.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_rotate.ggCurrentLogicStateText = newLogicStateText;
				me._tt_rotate.style[domTransition]='left 0s, top 0s';
				if (me._tt_rotate.ggCurrentLogicStateText == 0) {
					me._tt_rotate.ggText="Stop Auto Rotate";
					me._tt_rotate__text.innerHTML=me._tt_rotate.ggText;
					if (me._tt_rotate.ggUpdateText) {
					me._tt_rotate.ggUpdateText=function() {
						var hs="Stop Auto Rotate";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_rotate.ggUpdatePosition) me._tt_rotate.ggUpdatePosition();
					}
				}
				else if (me._tt_rotate.ggCurrentLogicStateText == 1) {
					me._tt_rotate.ggText="Start Auto Rotate";
					me._tt_rotate__text.innerHTML=me._tt_rotate.ggText;
					if (me._tt_rotate.ggUpdateText) {
					me._tt_rotate.ggUpdateText=function() {
						var hs="Start Auto Rotate";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_rotate.ggUpdatePosition) me._tt_rotate.ggUpdatePosition();
					}
				}
				else {
					me._tt_rotate.ggText="";
					me._tt_rotate__text.innerHTML=me._tt_rotate.ggText;
					if (me._tt_rotate.ggUpdateText) {
					me._tt_rotate.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_rotate.ggUpdatePosition) me._tt_rotate.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_rotate.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._autorotate_buttons.appendChild(me._tt_rotate);
		me._controller_slider.appendChild(me._autorotate_buttons);
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOn'+
			'NwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwz'+
			'LjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi'+
			'45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiI+CiAgPHBhdGggZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5'+
			'NiwxLjE5NmgxMS41MTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LT'+
			'cuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOn'+
			'NwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMjEuNzU4LDE0LjgwNEgxMC4yNDFjLTAuNjYsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDExLjUxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC42NjEsMCwxLjE5Ny0wLjUzNiwx'+
			'LjE5Ny0xLjE5NkMyMi45NTUsMTUuMzM5LDIyLjQxOSwxNC44MDQsMjEuNzU4LDE0LjgwNHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LD'+
			'UuODkzLDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZT0i'+
			'IzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgogIDxwYXRoIGQ9Ik0yMS43NTgsMTQuODA0SDEwLjI0MWMtMC42NiwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMTEuNTE3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2QzIyLjk1NSwxNS4zMzksMjIuNDE5LDE0LjgwNCwyMS43NTgsMTQuODA0eiBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMT'+
			'IuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7'+
			'JiN4OTtjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_zoom') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoomout.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoomout.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoomout.style[domTransition]='';
				if (me._zoomout.ggCurrentLogicStateVisible == 0) {
					me._zoomout.style.visibility=(Number(me._zoomout.style.opacity)>0||!me._zoomout.style.opacity)?'inherit':'hidden';
					me._zoomout.ggVisible=true;
				}
				else {
					me._zoomout.style.visibility="hidden";
					me._zoomout.ggVisible=false;
				}
			}
		}
		me._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomout']=true;
			me._tt_zoomout.logicBlock_visible();
		}
		me._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
			me._tt_zoomout.logicBlock_visible();
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
			me._tt_zoomout.logicBlock_visible();
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomout=document.createElement('div');
		els=me._tt_zoomout__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomout";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Zoom Out";
		el.appendChild(els);
		me._tt_zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomout.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_zoomout.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_zoomout.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_zoomout.style[domTransition]='left 0s, top 0s';
				if (me._tt_zoomout.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_zoomout.style.top='-25px';
					me._tt_zoomout.ggUpdatePosition(true);
				}
				else {
					me._tt_zoomout.ggDx=0;
					me._tt_zoomout.style.top='32px';
					me._tt_zoomout.ggUpdatePosition(true);
				}
			}
		}
		me._tt_zoomout.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['zoomout'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomout.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomout.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomout.style[domTransition]='left 0s, top 0s';
				if (me._tt_zoomout.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomout.style.visibility=(Number(me._tt_zoomout.style.opacity)>0||!me._tt_zoomout.style.opacity)?'inherit':'hidden';
					me._tt_zoomout.ggVisible=true;
				}
				else {
					me._tt_zoomout.style.visibility="hidden";
					me._tt_zoomout.ggVisible=false;
				}
			}
		}
		me._tt_zoomout.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._zoomout.appendChild(me._tt_zoomout);
		me._controller_slider.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOn'+
			'NwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTIyLjA2MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtIOS45MzhjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTdjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDQuODY2'+
			'djQuODY1YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtNC44NjVoNC44NjRjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NkMyMy4yNTcsMTUuMzM5LDIyLjcyMiwxNC44MDMsMjIuMDYxLDE0LjgwM3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzI4Lj'+
			'Q5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDZjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4'+
			'Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8cGF0aCBkPSJNMjIuMDYxLDE0LjgwM2gtNC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3djQuODY1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0g5LjkzOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMT'+
			'k2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBN'+
			'MjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLj'+
			'E0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOn'+
			'NwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMjIuMDYxLDE0LjgwM2gtNC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3djQuODY1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0g5LjkzOGMtMC42NjEsMC0x'+
			'LjE5NiwwLjUzNi0xLjE5NiwxLjE5N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MD'+
			'MtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAuMDAxLDUuMzEzLDEu'+
			'MTMsNy4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiI+CiAgPHBhdGggZD0iTTIyLjA2MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NSYjeGQ7JiN4YTsmI3'+
			'g5OyYjeDk7JiN4OTtIOS45MzhjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTdjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDQuODY2djQuODY1YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtNC44NjVoNC44NjRjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NkMyMy4yNTcsMTUuMzM5LDIyLjcyMiwxNC44MDMsMjIuMDYxLDE0LjgwM3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2Ljkw'+
			'Myw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDZjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxJiN4ZDsmI3hhOyYjeDk7Ji'+
			'N4OTsmI3g5O2MyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_zoom') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoomin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoomin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoomin.style[domTransition]='';
				if (me._zoomin.ggCurrentLogicStateVisible == 0) {
					me._zoomin.style.visibility=(Number(me._zoomin.style.opacity)>0||!me._zoomin.style.opacity)?'inherit':'hidden';
					me._zoomin.ggVisible=true;
				}
				else {
					me._zoomin.style.visibility="hidden";
					me._zoomin.ggVisible=false;
				}
			}
		}
		me._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomin']=true;
			me._tt_zoomin.logicBlock_visible();
		}
		me._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
			me._tt_zoomin.logicBlock_visible();
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
			me._tt_zoomin.logicBlock_visible();
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomin=document.createElement('div');
		els=me._tt_zoomin__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomin";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Zoom In";
		el.appendChild(els);
		me._tt_zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomin.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_zoomin.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_zoomin.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_zoomin.style[domTransition]='left 0s, top 0s';
				if (me._tt_zoomin.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_zoomin.style.top='-25px';
					me._tt_zoomin.ggUpdatePosition(true);
				}
				else {
					me._tt_zoomin.ggDx=0;
					me._tt_zoomin.style.top='32px';
					me._tt_zoomin.ggUpdatePosition(true);
				}
			}
		}
		me._tt_zoomin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['zoomin'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomin.style[domTransition]='left 0s, top 0s';
				if (me._tt_zoomin.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomin.style.visibility=(Number(me._tt_zoomin.style.opacity)>0||!me._tt_zoomin.style.opacity)?'inherit':'hidden';
					me._tt_zoomin.ggVisible=true;
				}
				else {
					me._tt_zoomin.style.visibility="hidden";
					me._tt_zoomin.ggVisible=false;
				}
			}
		}
		me._tt_zoomin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._zoomin.appendChild(me._tt_zoomin);
		me._controller_slider.appendChild(me._zoomin);
		el=me._key_up=document.createElement('div');
		el.ggId="key_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._key_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_up.onmouseout=function (e) {
			me.elementMouseDown['key_up']=false;
		}
		me._key_up.onmousedown=function (e) {
			me.elementMouseDown['key_up']=true;
		}
		me._key_up.onmouseup=function (e) {
			me.elementMouseDown['key_up']=false;
		}
		me._key_up.ontouchend=function (e) {
			me.elementMouseDown['key_up']=false;
		}
		me._key_up.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._key_up);
		el=me._key_down=document.createElement('div');
		el.ggId="key_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._key_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_down.onmouseout=function (e) {
			me.elementMouseDown['key_down']=false;
		}
		me._key_down.onmousedown=function (e) {
			me.elementMouseDown['key_down']=true;
		}
		me._key_down.onmouseup=function (e) {
			me.elementMouseDown['key_down']=false;
		}
		me._key_down.ontouchend=function (e) {
			me.elementMouseDown['key_down']=false;
		}
		me._key_down.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._key_down);
		el=me._key_left=document.createElement('div');
		el.ggId="key_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._key_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_left.onmouseout=function (e) {
			me.elementMouseDown['key_left']=false;
		}
		me._key_left.onmousedown=function (e) {
			me.elementMouseDown['key_left']=true;
		}
		me._key_left.onmouseup=function (e) {
			me.elementMouseDown['key_left']=false;
		}
		me._key_left.ontouchend=function (e) {
			me.elementMouseDown['key_left']=false;
		}
		me._key_left.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._key_left);
		el=me._key_right=document.createElement('div');
		el.ggId="key_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._key_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_right.onmouseout=function (e) {
			me.elementMouseDown['key_right']=false;
		}
		me._key_right.onmousedown=function (e) {
			me.elementMouseDown['key_right']=true;
		}
		me._key_right.onmouseup=function (e) {
			me.elementMouseDown['key_right']=false;
		}
		me._key_right.ontouchend=function (e) {
			me.elementMouseDown['key_right']=false;
		}
		me._key_right.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._key_right);
		me._controller.appendChild(me._controller_slider);
		el=me._element_alpha_timer=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1000;
		el.ggId="element_alpha_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._element_alpha_timer.ggIsActive=function() {
			return (me._element_alpha_timer.ggTimestamp + me._element_alpha_timer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._element_alpha_timer.ggDeactivate=function () {
			player.setVariableValue('vis_timer', true);
		}
		me._element_alpha_timer.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._element_alpha_timer);
		me.divSkin.appendChild(me._controller);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=5.9;
		el.ggDy=-7.78;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._information_bg=document.createElement('div');
		el.ggId="information_bg";
		el.ggDx=-71;
		el.ggDy=43;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #bebebe;';
		hs+='cursor : default;';
		hs+='height : 481px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 750px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._information_bg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._information.appendChild(me._information_bg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 390px;';
		hs+='left : -270px;';
		hs+='position : absolute;';
		hs+='top : -11px;';
		hs+='visibility : inherit;';
		hs+='width : 694px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 694px;';
		hs+='height: 390px;';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.196078);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: rgba(51,51,51,1);';
		hs+='text-align: justify;';
		hs+='white-space: normal;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._popup=document.createElement('div');
		els=me._popup__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : -58px;';
		hs+='visibility : inherit;';
		hs+='width : 271px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 271px;';
		hs+='height: 33px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,193,7,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._popup);
		el=me._info_popup_close=document.createElement('div');
		els=me._info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiB3aWR0aD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxwYXRoIGZpbGw9IiNGRkMxMDciIGQ9Ik0xMC43MiAxNi4wMDFMMC44MjAzNTQgNi4xMDEzOUMtMC4yNzM0NTMgNS4wMDc1OCAtMC4yNzM0NTMgMy4yMzQyNSAwLjgyMDM1NCAyLjE0MjE1TDIuMTQwMSAwLjgyMjQwNkMzLjIzNDI1IC0wLjI3MTc0MyA1LjAwNzU4IC0wLjI3MTc0MyA2LjA5OTY4IDAuODIyNDA2TDE1Ljk5OSAxMC43MjE3TDI1Ljg5ODYgMC44MjAzNTVDMjYuOTkyNCAtMC4yNzM0NTIgMjguNzY1OCAtMC4yNz'+
			'M0NTIgMjkuODU3OCAwLjgyMDM1NUwzMS4xNzk2IDIuMTQwMUMzMi4yNzM1IDMuMjM0MjUgMzIuMjczNSA1LjAwNzU4IDMxLjE3OTYgNi4wOTk2OEwyMS4yNzgzIDE2LjAwMUwzMS4xNzc2IDI1LjkwMDNDMzIuMjcxNyAyNi45OTQ1IDMyLjI3MTcgMjguNzY3OCAzMS4xNzc2IDI5Ljg1OTlMMjkuODU3OCAzMS4xNzk2QzI4Ljc2NCAzMi4yNzM1IDI2Ljk5MDcgMzIuMjczNSAyNS44OTg2IDMxLjE3OTZMMTUuOTk5IDIxLjI4TDYuMDk5NjggMzEuMTc5NkM1LjAwNTUzIDMyLjI3MzUgMy4yMzIyIDMyLjI3MzUgMi4xNDAxIDMxLjE3OTZMMC44MjAzNTQgMjkuODU5OUMtMC4yNzM0NTMgMjguNzY1OCAt'+
			'MC4yNzM0NTMgMjYuOTkyNCAwLjgyMDM1NCAyNS45MDAzTDEwLjcyIDE2LjAwMVoiLz4KPC9zdmc+Cg==';
		me._info_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiB3aWR0aD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxwYXRoIGZpbGw9IiNGRjhEMDciIGQ9Ik0xMC43MiAxNi4wMDFMMC44MjAzNTQgNi4xMDEzOUMtMC4yNzM0NTMgNS4wMDc1OCAtMC4yNzM0NTMgMy4yMzQyNSAwLjgyMDM1NCAyLjE0MjE1TDIuMTQwMSAwLjgyMjQwNkMzLjIzNDI1IC0wLjI3MTc0MyA1LjAwNzU4IC0wLjI3MTc0MyA2LjA5OTY4IDAuODIyNDA2TDE1Ljk5OSAxMC43MjE3TDI1Ljg5ODYgMC44MjAzNTVDMjYuOTkyNCAtMC4yNzM0NTIgMjguNzY1OCAtMC4yNz'+
			'M0NTIgMjkuODU3OCAwLjgyMDM1NUwzMS4xNzk2IDIuMTQwMUMzMi4yNzM1IDMuMjM0MjUgMzIuMjczNSA1LjAwNzU4IDMxLjE3OTYgNi4wOTk2OEwyMS4yNzgzIDE2LjAwMUwzMS4xNzc2IDI1LjkwMDNDMzIuMjcxNyAyNi45OTQ1IDMyLjI3MTcgMjguNzY3OCAzMS4xNzc2IDI5Ljg1OTlMMjkuODU3OCAzMS4xNzk2QzI4Ljc2NCAzMi4yNzM1IDI2Ljk5MDcgMzIuMjczNSAyNS44OTg2IDMxLjE3OTZMMTUuOTk5IDIxLjI4TDYuMDk5NjggMzEuMTc5NkM1LjAwNTUzIDMyLjI3MzUgMy4yMzIyIDMyLjI3MzUgMi4xNDAxIDMxLjE3OTZMMC44MjAzNTQgMjkuODU5OUMtMC4yNzM0NTMgMjguNzY1OCAt'+
			'MC4yNzM0NTMgMjYuOTkyNCAwLjgyMDM1NCAyNS45MDAzTDEwLjcyIDE2LjAwMVoiLz4KPC9zdmc+Cg==';
		me._info_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='position : absolute;';
		hs+='right : -131px;';
		hs+='top : -52px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
		}
		me._info_popup_close.onmouseover=function (e) {
			me._info_popup_close__img.style.visibility='hidden';
			me._info_popup_close__imgo.style.visibility='inherit';
		}
		me._info_popup_close.onmouseout=function (e) {
			me._info_popup_close__img.style.visibility='inherit';
			me._info_popup_close__imgo.style.visibility='hidden';
		}
		me._info_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_popup_close);
		me.divSkin.appendChild(me._information);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 72px;';
		hs+='position : absolute;';
		hs+='top : 107px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.onclick=function (e) {
			me._info_text_body.ggText=player.hotspot.description;
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs=player.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup', true);
		}
		me._container_1.onmouseover=function (e) {
			me.elementMouseOver['container_1']=true;
		}
		me._container_1.onmouseout=function (e) {
			me._container_1.style[domTransition]='none';
			me._container_1.style.opacity='0';
			me._container_1.style.visibility='hidden';
			me.elementMouseOver['container_1']=false;
		}
		me._container_1.ontouchend=function (e) {
			me.elementMouseOver['container_1']=false;
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._container_1);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('playerstatechanged', function() {
			player.setVariableValue('pos_controller', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom') == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info') == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true)) && 
					((player.getIsTour() == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_projection') == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_gyro') == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_fullscreen') == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			player.setVariableValue('pos_enter_vr', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom') == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info') == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true)) && 
					((player.getIsTour() == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_projection') == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_gyro') == true)) && 
					((player.getGyroAvailable() == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_fullscreen') == true)) && 
					((player.hasVR() == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			player.setVariableValue('pos_fullscreen', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom') == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info') == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true)) && 
					((player.getIsTour() == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_projection') == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_gyro') == true)) && 
					((player.getGyroAvailable() == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			player.setVariableValue('pos_gyro', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom') == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info') == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true)) && 
					((player.getIsTour() == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_projection') == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			player.setVariableValue('pos_projection', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom') == true))
				)
			) {
				player.setVariableValue('pos_projection', player.getVariableValue('pos_projection') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true))
				)
			) {
				player.setVariableValue('pos_projection', player.getVariableValue('pos_projection') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info') == true))
				)
			) {
				player.setVariableValue('pos_projection', player.getVariableValue('pos_projection') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true)) && 
					((player.getIsTour() == true))
				)
			) {
				player.setVariableValue('pos_projection', player.getVariableValue('pos_projection') + Number("1"));
			}
			player.setVariableValue('pos_thumbnail', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom') == true))
				)
			) {
				player.setVariableValue('pos_thumbnail', player.getVariableValue('pos_thumbnail') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true))
				)
			) {
				player.setVariableValue('pos_thumbnail', player.getVariableValue('pos_thumbnail') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info') == true))
				)
			) {
				player.setVariableValue('pos_thumbnail', player.getVariableValue('pos_thumbnail') + Number("1"));
			}
			player.setVariableValue('pos_information', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom') == true))
				)
			) {
				player.setVariableValue('pos_information', player.getVariableValue('pos_information') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true))
				)
			) {
				player.setVariableValue('pos_information', player.getVariableValue('pos_information') + Number("1"));
			}
			player.setVariableValue('pos_autorotate', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom') == true))
				)
			) {
				player.setVariableValue('pos_autorotate', player.getVariableValue('pos_autorotate') + Number("2"));
			}
		});
	};
	this.hotspotProxyClick=function(id, url) {
		if (id=='popup') {
			me._container_1.onclick();
		}
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
		if (id=='popup') {
			me._container_1.onmouseover();
		}
	}
	me.hotspotProxyOut=function(id, url) {
		if (id=='popup') {
			me._container_1.onmouseout();
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_changenode = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_image && hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_configloaded = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_mouseover = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_hastouch = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image_image && hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hsimage && hotspotTemplates['ht_node'][i]._hsimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hsimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hotspot_preview && hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_tooltip && hotspotTemplates['ht_node'][i]._ht_tooltip.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_tooltip.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hotspot_preview && hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hotspot_preview && hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_active = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_checkmark_tick && hotspotTemplates['ht_node'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changevisitednodes = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_checkmark_tick && hotspotTemplates['ht_node'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_hastouch = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hsimage && hotspotTemplates['ht_node'][i]._hsimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hsimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_tooltip && hotspotTemplates['ht_node'][i]._ht_tooltip.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_tooltip.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hotspot_preview && hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseOver['controller']) {
			if (
				(
					((player.getVariableValue('opt_autohide') == true))
				)
			) {
			}
		}
		if (me.elementMouseDown['zoomout']) {
			player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomin']) {
			player.changeFovLog(-0.5,true);
		}
		if (me.elementMouseDown['key_up']) {
			player.changeTiltLog(0.5,true);
		}
		if (me.elementMouseDown['key_down']) {
			player.changeTiltLog(-0.5,true);
		}
		if (me.elementMouseDown['key_left']) {
			player.changePanLog(0.5,true);
		}
		if (me.elementMouseDown['key_right']) {
			player.changePanLog(-0.5,true);
		}
		if (me._element_alpha_timer.ggLastIsActive!=me._element_alpha_timer.ggIsActive()) {
			me._element_alpha_timer.ggLastIsActive=me._element_alpha_timer.ggIsActive();
			if (me._element_alpha_timer.ggLastIsActive) {
			} else {
				player.setVariableValue('vis_timer', true);
			}
		}
		if (me.elementMouseOver['container_1']) {
			me._container_1.style[domTransition]='none';
			me._container_1.style.opacity='1';
			me._container_1.style.visibility=me._container_1.ggVisible?'inherit':'hidden';
		}
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressed) {
				case 37:
					player.changePanLog(0.5,true);
					break;
				case 38:
					player.changeTiltLog(0.5,true);
					break;
				case 39:
					player.changePanLog(-0.5,true);
					break;
				case 40:
					player.changeTiltLog(-0.5,true);
					break;
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
				else {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
			}
		}
		me._ht_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateAlpha == 0) {
					me._ht_image.style.visibility=me._ht_image.ggVisible?'inherit':'hidden';
					me._ht_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image.style.opacity == 0.0) { me._ht_image.style.visibility="hidden"; } }, 505);
					me._ht_image.style.opacity=0;
				}
			}
		}
		me._ht_image.onclick=function (e) {
			player.setVariableValue('vis_image_popup', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._tt_ht_image.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ontouchend=function (e) {
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_image=document.createElement('div');
		els=me._ht_image_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOn'+
			'NwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTEzLjcxMiwxMy40MDljMS4wMDUsMCwxLjgyLTAuODE1LDEuODItMS44MjFjMC0xLjAwNS0wLjgxNS0xLjgyMS0xLjgyLTEuODIxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuMDA2LDAtMS44MjEsMC44MTUtMS44MjEsMS44MjFDMTEuODkyLDEyLjU5NCwxMi43MDcsMTMuNDA5LDEzLjcxMiwxMy40MDl6IE0yOC4zMDQsNy4zMTkmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2MtMC4xMjUtMC4xMjUtMC4yOTctMC4xOTYtMC40NzMtMC4xOTZINC4xNjljLTAuMTc2LDAtMC4zNDksMC4wNzEtMC40NzQsMC4xOTZDMy41NzEsNy40NDQsMy41LDcuNjE3LDMuNSw3Ljc5M3YxNi40MTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuMTc2LDAuMDcxLDAuMzQ4LDAuMTk2LDAuNDczYzAuMTI1LDAuMTI1LDAuMjk3LDAuMTk3LDAuNDczLDAuMTk3aDIzLjY2MmMwLjE3NiwwLDAuMzQ4LTAuMDcyLDAuNDczLTAuMTk3JiN4ZDsmI3hhOyYjeDk7JiN4OTtzMC4xOTYtMC4yOTcsMC4xOTYtMC40NzNWNy43OTNDMjguNSw3LjYxNywyOC40MjksNy40NDQsMjguMzA0LDcuMzE5ei'+
			'BNNC44MzksOC40NjJIMjcuMTZsMC4wMDEsNy4xODQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC41NTctMC4zNzgtMS4yOS0wLjg3NS0yLjA5NS0xLjQyMWMtMS4wMDEtMC42NzYtMi4yNTQtMC45ODYtMy41MDMtMC45ODljLTEuMjY2LDAuMDAyLTIuNTQsMC4zMjEtMy41NiwxLjAwOWwtMy41NzUsMi40MjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMjktMC4yMjMtMC44MTMtMC41NTItMS4zNTMtMC45MThjLTAuNTE0LTAuMzQ0LTEuMTI5LTAuNDY2LTEuNzc0LTAuNDY5Yy0xLjE1NiwwLjAwNC0yLjQ1NCwwLjQwNy0zLjU1OCwxLjE1bC0yLjkwNSwxLjk3MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Vjgu'+
			'NDYyeiBNNC44MzksMjMuNTM3di0zLjUxMmwzLjY1OC0yLjQ4MmMwLjg2Ny0wLjU5NCwxLjk3Mi0wLjkyMywyLjgwNS0wLjkxOWMwLjQ2Ni0wLjAwMiwwLjgzMSwwLjEwMywxLjAyMiwwLjIzOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMzMzLDAuMjI2LDAuNjQ1LDAuNDM3LDAuOTEzLDAuNjE5bC0zLjg2OSwyLjYyN2MtMC4zMDYsMC4yMDctMC4zODYsMC42MjMtMC4xNzksMC45M2MwLjEzLDAuMTg5LDAuMzQsMC4yOTMsMC41NTUsMC4yOTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEyOSwwLDAuMjYtMC4wMzcsMC4zNzUtMC4xMTVsOC42MzgtNS44NjFjMC43MzQtMC41MDIsMS43Ny0wLjc4LDIuOD'+
			'A3LTAuNzc4YzEuMDIzLTAuMDAyLDIuMDM2LDAuMjY5LDIuNzUxLDAuNzU3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4yNTgsMC44NTMsMi4zNDYsMS41OTEsMi44NDcsMS45MzF2Ni4yNzNINC44Mzl6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8cGF0aCBkPSJNMTMuNzEyLDEzLjQwOWMxLjAwNSwwLDEuODItMC44MTUsMS44Mi0xLjgyMWMwLTEuMDA1LTAuODE1LTEuODIxLTEuODItMS44MjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS4wMDYsMC0xLjgyMSwwLjgxNS0xLjgyMSwxLjgyMUMxMS44OTIsMTIuNTk0LDEyLjcw'+
			'NywxMy40MDksMTMuNzEyLDEzLjQwOXogTTI4LjMwNCw3LjMxOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjEyNS0wLjEyNS0wLjI5Ny0wLjE5Ni0wLjQ3My0wLjE5Nkg0LjE2OWMtMC4xNzYsMC0wLjM0OSwwLjA3MS0wLjQ3NCwwLjE5NkMzLjU3MSw3LjQ0NCwzLjUsNy42MTcsMy41LDcuNzkzdjE2LjQxNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC4xNzYsMC4wNzEsMC4zNDgsMC4xOTYsMC40NzNjMC4xMjUsMC4xMjUsMC4yOTcsMC4xOTcsMC40NzMsMC4xOTdoMjMuNjYyYzAuMTc2LDAsMC4zNDgtMC4wNzIsMC40NzMtMC4xOTcmI3hkOyYjeGE7JiN4OTsmI3g5O3MwLjE5Ni0wLjI5NywwLjE5Ni'+
			'0wLjQ3M1Y3Ljc5M0MyOC41LDcuNjE3LDI4LjQyOSw3LjQ0NCwyOC4zMDQsNy4zMTl6IE00LjgzOSw4LjQ2MkgyNy4xNmwwLjAwMSw3LjE4NCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjU1Ny0wLjM3OC0xLjI5LTAuODc1LTIuMDk1LTEuNDIxYy0xLjAwMS0wLjY3Ni0yLjI1NC0wLjk4Ni0zLjUwMy0wLjk4OWMtMS4yNjYsMC4wMDItMi41NCwwLjMyMS0zLjU2LDEuMDA5bC0zLjU3NSwyLjQyNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMyOS0wLjIyMy0wLjgxMy0wLjU1Mi0xLjM1My0wLjkxOGMtMC41MTQtMC4zNDQtMS4xMjktMC40NjYtMS43NzQtMC40NjljLTEuMTU2LDAuMDA0LTIuNDU0LDAu'+
			'NDA3LTMuNTU4LDEuMTVsLTIuOTA1LDEuOTcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtWOC40NjJ6IE00LjgzOSwyMy41Mzd2LTMuNTEybDMuNjU4LTIuNDgyYzAuODY3LTAuNTk0LDEuOTcyLTAuOTIzLDIuODA1LTAuOTE5YzAuNDY2LTAuMDAyLDAuODMxLDAuMTAzLDEuMDIyLDAuMjM4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zMzMsMC4yMjYsMC42NDUsMC40MzcsMC45MTMsMC42MTlsLTMuODY5LDIuNjI3Yy0wLjMwNiwwLjIwNy0wLjM4NiwwLjYyMy0wLjE3OSwwLjkzYzAuMTMsMC4xODksMC4zNCwwLjI5MywwLjU1NSwwLjI5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMTI5LDAsMC4yNi0wLjAzNy'+
			'wwLjM3NS0wLjExNWw4LjYzOC01Ljg2MWMwLjczNC0wLjUwMiwxLjc3LTAuNzgsMi44MDctMC43NzhjMS4wMjMtMC4wMDIsMi4wMzYsMC4yNjksMi43NTEsMC43NTcmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjI1OCwwLjg1MywyLjM0NiwxLjU5MSwyLjg0NywxLjkzMXY2LjI3M0g0LjgzOXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_image_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOn'+
			'NwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHg9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMTMuNzEyLDEzLjQwOWMxLjAwNSwwLDEuODItMC44MTUsMS44Mi0xLjgyMWMwLTEuMDA1LTAuODE1LTEuODIxLTEuODItMS44MjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS4wMDYsMC0xLjgyMSwwLjgxNS0xLjgyMSwxLjgyMUMxMS44OTIsMTIu'+
			'NTk0LDEyLjcwNywxMy40MDksMTMuNzEyLDEzLjQwOXogTTI4LjMwNCw3LjMxOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjEyNS0wLjEyNS0wLjI5Ny0wLjE5Ni0wLjQ3My0wLjE5Nkg0LjE2OWMtMC4xNzYsMC0wLjM0OSwwLjA3MS0wLjQ3NCwwLjE5NkMzLjU3MSw3LjQ0NCwzLjUsNy42MTcsMy41LDcuNzkzdjE2LjQxNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC4xNzYsMC4wNzEsMC4zNDgsMC4xOTYsMC40NzNjMC4xMjUsMC4xMjUsMC4yOTcsMC4xOTcsMC40NzMsMC4xOTdoMjMuNjYyYzAuMTc2LDAsMC4zNDgtMC4wNzIsMC40NzMtMC4xOTcmI3hkOyYjeGE7JiN4OTsmI3g5O3MwLjE5Ni0wLj'+
			'I5NywwLjE5Ni0wLjQ3M1Y3Ljc5M0MyOC41LDcuNjE3LDI4LjQyOSw3LjQ0NCwyOC4zMDQsNy4zMTl6IE00LjgzOSw4LjQ2MkgyNy4xNmwwLjAwMSw3LjE4NCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjU1Ny0wLjM3OC0xLjI5LTAuODc1LTIuMDk1LTEuNDIxYy0xLjAwMS0wLjY3Ni0yLjI1NC0wLjk4Ni0zLjUwMy0wLjk4OWMtMS4yNjYsMC4wMDItMi41NCwwLjMyMS0zLjU2LDEuMDA5bC0zLjU3NSwyLjQyNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMyOS0wLjIyMy0wLjgxMy0wLjU1Mi0xLjM1My0wLjkxOGMtMC41MTQtMC4zNDQtMS4xMjktMC40NjYtMS43NzQtMC40NjljLTEuMTU2LDAuMDA0'+
			'LTIuNDU0LDAuNDA3LTMuNTU4LDEuMTVsLTIuOTA1LDEuOTcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtWOC40NjJ6IE00LjgzOSwyMy41Mzd2LTMuNTEybDMuNjU4LTIuNDgyYzAuODY3LTAuNTk0LDEuOTcyLTAuOTIzLDIuODA1LTAuOTE5YzAuNDY2LTAuMDAyLDAuODMxLDAuMTAzLDEuMDIyLDAuMjM4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zMzMsMC4yMjYsMC42NDUsMC40MzcsMC45MTMsMC42MTlsLTMuODY5LDIuNjI3Yy0wLjMwNiwwLjIwNy0wLjM4NiwwLjYyMy0wLjE3OSwwLjkzYzAuMTMsMC4xODksMC4zNCwwLjI5MywwLjU1NSwwLjI5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMTI5LDAsMC'+
			'4yNi0wLjAzNywwLjM3NS0wLjExNWw4LjYzOC01Ljg2MWMwLjczNC0wLjUwMiwxLjc3LTAuNzgsMi44MDctMC43NzhjMS4wMjMtMC4wMDIsMi4wMzYsMC4yNjksMi43NTEsMC43NTcmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjI1OCwwLjg1MywyLjM0NiwxLjU5MSwyLjg0NywxLjkzMXY2LjI3M0g0LjgzOXoiLz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiI+CiAgPHBhdGggZD0iTTEzLjcxMiwxMy40MDljMS4wMDUsMCwxLjgyLTAu'+
			'ODE1LDEuODItMS44MjFjMC0xLjAwNS0wLjgxNS0xLjgyMS0xLjgyLTEuODIxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuMDA2LDAtMS44MjEsMC44MTUtMS44MjEsMS44MjFDMTEuODkyLDEyLjU5NCwxMi43MDcsMTMuNDA5LDEzLjcxMiwxMy40MDl6IE0yOC4zMDQsNy4zMTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4xMjUtMC4xMjUtMC4yOTctMC4xOTYtMC40NzMtMC4xOTZINC4xNjljLTAuMTc2LDAtMC4zNDksMC4wNzEtMC40NzQsMC4xOTZDMy41NzEsNy40NDQsMy41LDcuNjE3LDMuNSw3Ljc5M3YxNi40MTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuMTc2LDAuMDcxLDAuMzQ4LDAuMTk2LD'+
			'AuNDczYzAuMTI1LDAuMTI1LDAuMjk3LDAuMTk3LDAuNDczLDAuMTk3aDIzLjY2MmMwLjE3NiwwLDAuMzQ4LTAuMDcyLDAuNDczLTAuMTk3JiN4ZDsmI3hhOyYjeDk7JiN4OTtzMC4xOTYtMC4yOTcsMC4xOTYtMC40NzNWNy43OTNDMjguNSw3LjYxNywyOC40MjksNy40NDQsMjguMzA0LDcuMzE5eiBNNC44MzksOC40NjJIMjcuMTZsMC4wMDEsNy4xODQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC41NTctMC4zNzgtMS4yOS0wLjg3NS0yLjA5NS0xLjQyMWMtMS4wMDEtMC42NzYtMi4yNTQtMC45ODYtMy41MDMtMC45ODljLTEuMjY2LDAuMDAyLTIuNTQsMC4zMjEtMy41NiwxLjAwOWwtMy41NzUsMi40'+
			'MjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMjktMC4yMjMtMC44MTMtMC41NTItMS4zNTMtMC45MThjLTAuNTE0LTAuMzQ0LTEuMTI5LTAuNDY2LTEuNzc0LTAuNDY5Yy0xLjE1NiwwLjAwNC0yLjQ1NCwwLjQwNy0zLjU1OCwxLjE1bC0yLjkwNSwxLjk3MSYjeGQ7JiN4YTsmI3g5OyYjeDk7VjguNDYyeiBNNC44MzksMjMuNTM3di0zLjUxMmwzLjY1OC0yLjQ4MmMwLjg2Ny0wLjU5NCwxLjk3Mi0wLjkyMywyLjgwNS0wLjkxOWMwLjQ2Ni0wLjAwMiwwLjgzMSwwLjEwMywxLjAyMiwwLjIzOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMzMzLDAuMjI2LDAuNjQ1LDAuNDM3LDAuOTEzLDAuNjE5bC0zLj'+
			'g2OSwyLjYyN2MtMC4zMDYsMC4yMDctMC4zODYsMC42MjMtMC4xNzksMC45M2MwLjEzLDAuMTg5LDAuMzQsMC4yOTMsMC41NTUsMC4yOTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEyOSwwLDAuMjYtMC4wMzcsMC4zNzUtMC4xMTVsOC42MzgtNS44NjFjMC43MzQtMC41MDIsMS43Ny0wLjc4LDIuODA3LTAuNzc4YzEuMDIzLTAuMDAyLDIuMDM2LDAuMjY5LDIuNzUxLDAuNzU3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4yNTgsMC44NTMsMi4zNDYsMS41OTEsMi44NDcsMS45MzF2Ni4yNzNINC44Mzl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_image_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_image_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_image.style[domTransition]='';
				if (me._ht_image_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image_image.style.visibility="hidden";
					me._ht_image_image.ggVisible=false;
				}
				else {
					me._ht_image_image.style.visibility=(Number(me._ht_image_image.style.opacity)>0||!me._ht_image_image.style.opacity)?'inherit':'hidden';
					me._ht_image_image.ggVisible=true;
				}
			}
		}
		me._ht_image_image.onmouseover=function (e) {
			me._ht_image_image__img.style.visibility='hidden';
			me._ht_image_image__imgo.style.visibility='inherit';
		}
		me._ht_image_image.onmouseout=function (e) {
			me._ht_image_image__img.style.visibility='inherit';
			me._ht_image_image__imgo.style.visibility='hidden';
		}
		me._ht_image_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image.appendChild(me._ht_image_image);
		el=me._tt_ht_image=document.createElement('div');
		els=me._tt_ht_image__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_image.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_image.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_image.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_image.style.top='-47px';
					me._tt_ht_image.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_image.ggDx=0;
					me._tt_ht_image.style.top='24px';
					me._tt_ht_image.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_image.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_image.style.visibility=(Number(me._tt_ht_image.style.opacity)>0||!me._tt_ht_image.style.opacity)?'inherit':'hidden';
					me._tt_ht_image.ggVisible=true;
				}
				else {
					me._tt_ht_image.style.visibility="hidden";
					me._tt_ht_image.ggVisible=false;
				}
			}
		}
		me._tt_ht_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_image.appendChild(me._tt_ht_image);
		el=me._ht_image_customimage=document.createElement('div');
		els=me._ht_image_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_image_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_customimage.style[domTransition]='';
				if (me._ht_image_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_image_customimage.style.visibility="hidden";
					me._ht_image_customimage__img.src = '';
					me._ht_image_customimage.ggVisible=false;
				}
				else {
					me._ht_image_customimage.style.visibility=(Number(me._ht_image_customimage.style.opacity)>0||!me._ht_image_customimage.style.opacity)?'inherit':'hidden';
					me._ht_image_customimage.ggSubElement.src=me._ht_image_customimage.ggText;
					me._ht_image_customimage.ggVisible=true;
				}
			}
		}
		me._ht_image_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_image_customimage.clientWidth;
			var parentHeight = me._ht_image_customimage.clientHeight;
			var img = me._ht_image_customimage__img;
			var aspectRatioDiv = me._ht_image_customimage.clientWidth / me._ht_image_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_image.appendChild(me._ht_image_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
				else {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
			}
		}
		me._ht_node.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_node.ggCurrentLogicStateAlpha == 0) {
					me._ht_node.style.visibility=me._ht_node.ggVisible?'inherit':'hidden';
					me._ht_node.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node.style.opacity == 0.0) { me._ht_node.style.visibility="hidden"; } }, 505);
					me._ht_node.style.opacity=0;
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._hsimage=document.createElement('div');
		els=me._hsimage__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjU4IiBmaWxsPSJub25lIiB3aWR0aD0iNTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDU4IDU4Ij4KIDxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KICA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTI5IDIuNUMxNS40ODk1IDIuNSA0LjUgMTMuNDg5NSA0LjUgMjdDNC41IDQwLjUxMDUgMTUuNDg5NSA1MS41IDI5IDUxLjVDNDIuNTEwNiA1MS41IDUzLjUgNDAuNTA4NiA1My41IDI3QzUzLjUgMTMuNDkxNCA0Mi41MTA2IDIuNSAyOSAyLjVaTTI5IDQ2Ljc4MkMxOC4wOTQxIDQ2Ljc4MiA5LjIxODAzIDM3LjkwNzcgOS4yMTgwMy'+
			'AyN0M5LjIxODAzIDE2LjA5MjMgMTguMDk0MSA3LjIxODAzIDI5IDcuMjE4MDNDMzkuOTA3OCA3LjIxODAzIDQ4Ljc4MiAxNi4wOTIyIDQ4Ljc4MiAyN0M0OC43ODIgMzcuOTA3NyAzOS45MDU5IDQ2Ljc4MiAyOSA0Ni43ODJaIiBzdHJva2U9IndoaXRlIi8+CiAgPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0zOS45Njk1IDI5LjIxMjhMMzkuOTY4NiAyOS4yMTE5TDMwLjY3MzUgMTkuOTE2OEwzMC42NzI1IDE5LjkxNTlDMjkuNzUyNCAxOS4wMDA1IDI4LjI2NjEgMTkuMDAwNSAyNy4zNDYgMTkuOTE1OUwyNy4zNDUxIDE5LjkxNjhMMTguMDUgMjkuMjExOUwxOC4wMzY1IDI5LjIyNTRMMTguMDI0MSAy'+
			'OS4yMzk4QzE3LjI2NjYgMzAuMTIyNCAxNy4yNjY2IDMxLjQyNzEgMTguMDI0MSAzMi4zMDk3QzE4Ljg3MTEgMzMuMjk3OSAyMC4zNjE0IDMzLjQxMzQgMjEuMzUwMSAzMi41NjYzTDIxLjM2NDcgMzIuNTUzOEwyMS4zNzgzIDMyLjU0MDJMMjkuMDAwNCAyNC45MTgyTDM2LjY0MDYgMzIuNTQwN0wzNi42NDExIDMyLjU0MTJDMzcuNTYxMyAzMy40NTY1IDM5LjA0NzYgMzMuNDU2NSAzOS45Njc3IDMyLjU0MTJMMzkuOTY5NSAzMi41MzkzQzQwLjg4NDggMzEuNjE5MiA0MC44ODQ5IDMwLjEzMjggMzkuOTY5NSAyOS4yMTI4WiIgc3Ryb2tlPSJ3aGl0ZSIvPgogPC9nPgogPGRlZnM+CiAgPGZpbHRlci'+
			'BpZD0iZmlsdGVyMF9kIiBoZWlnaHQ9IjU4IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI1OCIgeT0iMCIgeD0iMCIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KICAgPGZlRmxvb2QgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIGZsb29kLW9wYWNpdHk9IjAiLz4KICAgPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KICAgPGZlT2Zmc2V0IGR5PSIyIi8+CiAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4K'+
			'ICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMTUgMCIvPgogICA8ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciIG1vZGU9Im5vcm1hbCIvPgogICA8ZmVCbGVuZCBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogPC9kZWZzPgo8L3N2Zz4K';
		me._hsimage__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hsimage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hsimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hsimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hsimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hsimage.style[domTransition]='';
				if (me._hsimage.ggCurrentLogicStateVisible == 0) {
					me._hsimage.style.visibility="hidden";
					me._hsimage.ggVisible=false;
				}
				else {
					me._hsimage.style.visibility=(Number(me._hsimage.style.opacity)>0||!me._hsimage.style.opacity)?'inherit':'hidden';
					me._hsimage.ggVisible=true;
				}
			}
		}
		me._hsimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._hsimage);
		el=me._hotspot_preview=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 103px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview.style[domTransition]='';
				if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
					me._hotspot_preview.ggVisible=true;
				}
				else {
					me._hotspot_preview.style.visibility="hidden";
					me._hotspot_preview.ggVisible=false;
				}
			}
		}
		me._hotspot_preview.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._preview_picture_frame_=document.createElement('div');
		el.ggId="preview_picture_frame ";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 99px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 149px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_picture_frame_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._preview_picture_frame_.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._preview_picture_frame_);
		el=me._preview_nodeimage=document.createElement('div');
		els=me._preview_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/preview_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview NodeImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._preview_nodeimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._preview_nodeimage);
		el=me._ht_tooltip=document.createElement('div');
		els=me._ht_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_tooltip";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._ht_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tooltip.style[domTransition]='';
				if (me._ht_tooltip.ggCurrentLogicStateVisible == 0) {
					me._ht_tooltip.style.visibility="hidden";
					me._ht_tooltip.ggVisible=false;
				}
				else {
					me._ht_tooltip.style.visibility=(Number(me._ht_tooltip.style.opacity)>0||!me._ht_tooltip.style.opacity)?'inherit':'hidden';
					me._ht_tooltip.ggVisible=true;
				}
			}
		}
		me._ht_tooltip.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._ht_tooltip);
		el=me._ht_checkmark_tick=document.createElement('div');
		els=me._ht_checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjEiIGVuYWJsZS1iYWNrZ3JvdW'+
			'5kPSJuZXcgLTM3MjIgLTI2MDYgMzIgMzIiIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeT0iMHB4IiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeD0iMHB4IiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5'+
			'NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGcgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJtdWx0aXBseSIgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibm9ybWFsIiBzdHJva2U9IiMxQTE3MUIiIGQ9IiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O00tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNT'+
			'E5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9r'+
			'ZS13aWR0aD0iMS41Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgc3Ryb2tlPSIjMUExNzFCIiBkPSImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LD'+
			'EuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAy'+
			'Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOC'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2Mt'+
			'MC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMjkxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5YzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIHN0cm9rZS'+
			'1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43'+
			'MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_checkmark_tick.ggElementNodeId()) == true)) || 
				((me._ht_checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick.style[domTransition]='';
				if (me._ht_checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick.style.visibility=(Number(me._ht_checkmark_tick.style.opacity)>0||!me._ht_checkmark_tick.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick.style.visibility="hidden";
					me._ht_checkmark_tick.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_checkmark_tick);
		me._ht_node.appendChild(me._hotspot_preview);
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_node.style.top='-47px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_node.ggDx=0;
					me._tt_ht_node.style.top='24px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
			}
		}
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._tt_ht_node);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style[domTransition]='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage__img.src = '';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 212px;';
		hs+='position : absolute;';
		hs+='top : 185px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjU4IiBmaWxsPSJub25lIiB3aWR0aD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwIDU4Ij4KIDxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KICA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTI1LjA5MzUgMTguODgyOEMyMy41NTI1IDE4Ljg4MjggMjIuNDU2OCAxOS41MTg0IDIyLjQ1NjggMjAuNDU1VjMzLjE5OTVDMjIuNDU2OCAzNC4wMDIzIDIzLjU1MjcgMzQuODA1MSAyNS4wOTM1IDM0LjgwNTFDMjYuNTY1OSAzNC44MDUxIDI3Ljc2NDMgMzQuMDAyMyAyNy43NjQzIDMzLjE5OTVWMjAuNDU1QzI3Ljc2NDMgMTkuNT'+
			'E4NCAyNi41NjU5IDE4Ljg4MjggMjUuMDkzNSAxOC44ODI4WiIvPgogIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMjUuMDE2OSAxMS4xNDI4QzIzLjQ1NjcgMTEuMTQyOCAyMi4yMzU3IDEyLjI2NTUgMjIuMjM1NyAxMy41NTgzQzIyLjIzNTcgMTQuODUxMSAyMy40NTY3IDE2LjAwNzkgMjUuMDE2OSAxNi4wMDc5QzI2LjU0MzMgMTYuMDA3OSAyNy43NjQzIDE0Ljg1MTEgMjcuNzY0MyAxMy41NTgzQzI3Ljc2NDMgMTIuMjY1NiAyNi41NDMxIDExLjE0MjggMjUuMDE2OSAxMS4xNDI4WiIvPgogIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMjUgMi41MTgxOUMxMy4zOTI1IDIuNTE4MTkgNCAxMS45MDYg'+
			'NCAyMy41MDYxQzQgMzIuOTc4MSAxMC4yMzYzIDQwLjg0MzEgMTguNjQ0NCA0My41MTQyTDIzLjQyMDEgNTAuNTUzN0MyMy43NzU0IDUxLjA3NzMgMjQuMzY3MSA1MS4zOTA5IDI1IDUxLjM5MDlDMjUuNjMyOSA1MS4zOTA5IDI2LjIyNDYgNTEuMDc3MyAyNi41Nzk5IDUwLjU1MzdMMzEuMzU1NyA0My41MTQyQzM5Ljc2NzQgNDAuODQxOSA0NiAzMi45NzQgNDYgMjMuNTA2MUM0NiAxMS44OTg2IDM2LjU5OTkgMi41MTgxOSAyNSAyLjUxODE5Wk0yOS42NDM0IDQwLjA0MTNDMjkuMjA4NiA0MC4xNjI5IDI4LjgzMTEgNDAuNDM0NSAyOC41Nzc2IDQwLjgwODFMMjUgNDYuMDgxNEwyMS40MjI1IDQwLj'+
			'gwODJDMjEuMTY4OSA0MC40MzQ2IDIwLjc5MTQgNDAuMTYyOSAyMC4zNTY2IDQwLjA0MTRDMTMuMTk5NiAzOC4wNDAyIDcuODE4MTggMzEuNDU4MiA3LjgxODE4IDIzLjUwNjFDNy44MTgxOCAxNC4wMzg2IDE1LjUyNTkgNi4zMzYzNyAyNSA2LjMzNjM3QzM0LjQ3NDEgNi4zMzYzNyA0Mi4xODE4IDE0LjAzODYgNDIuMTgxOCAyMy41MDYxQzQyLjE4MTggMzEuNDY2MSAzNi43OTI1IDM4LjA0MjQgMjkuNjQzNCA0MC4wNDEzWiIvPgogPC9nPgogPGRlZnM+CiAgPGZpbHRlciBpZD0iZmlsdGVyMF9kIiBoZWlnaHQ9IjU2Ljg3MjciIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjUw'+
			'IiB5PSIwLjUxODE4OCIgeD0iMCIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KICAgPGZlRmxvb2QgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIGZsb29kLW9wYWNpdHk9IjAiLz4KICAgPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KICAgPGZlT2Zmc2V0IGR5PSIyIi8+CiAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwID'+
			'AgMCAwIDAgMCAwIDAgMCAwIDAuMTUgMCIvPgogICA8ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciIG1vZGU9Im5vcm1hbCIvPgogICA8ZmVCbGVuZCBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogPC9kZWZzPgo8L3N2Zz4K';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -9px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._svg_1);
		me.__div = me._ht_info;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_image') {
			hotspot.skinid = 'ht_image';
			hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_image_changenode();;
			me.callChildLogicBlocksHotspot_ht_image_configloaded();;
			me.callChildLogicBlocksHotspot_ht_image_mouseover();;
			me.callChildLogicBlocksHotspot_ht_image_hastouch();;
			me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_timer();;
		} else
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_active();;
			me.callChildLogicBlocksHotspot_ht_node_changevisitednodes();;
			me.callChildLogicBlocksHotspot_ht_node_hastouch();;
			me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_timer();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview();;
		} else
		{
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				hotspotTemplates['ht_image'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._tt_thumbnail_open.logicBlock_text();
	me._fullscreen.logicBlock_alpha();
	me._fullscreen_off.logicBlock_alpha();
	me._tt_fullscreen.logicBlock_text();
	me._screentint_info.logicBlock_visible();
	me._controller.logicBlock_position();
	me._controller.logicBlock_alpha();
	me._controller_slider.logicBlock_position();
	me._controller_slider.logicBlock_alpha();
	me._enter_vr.logicBlock_position();
	me._fullscreen_buttons.logicBlock_position();
	me._fullscreen_buttons.logicBlock_visible();
	me._gyro.logicBlock_position();
	me._gyro.logicBlock_visible();
	me._gyro_on.logicBlock_alpha();
	me._gyro_off.logicBlock_alpha();
	me._tt_gyro.logicBlock_text();
	me._projection_buttons.logicBlock_position();
	me._projection_buttons.logicBlock_visible();
	me._thumbnail.logicBlock_position();
	me._thumbnail.logicBlock_visible();
	me._info.logicBlock_position();
	me._info.logicBlock_visible();
	me._autorotate_buttons.logicBlock_position();
	me._autorotate_buttons.logicBlock_visible();
	me._autorotate_start.logicBlock_alpha();
	me._autorotate_stop.logicBlock_alpha();
	me._tt_rotate.logicBlock_text();
	me._zoomout.logicBlock_visible();
	me._zoomin.logicBlock_visible();
	me._information.logicBlock_visible();
	me._tt_enter_vr.logicBlock_position();
	me._tt_fullscreen.logicBlock_position();
	me._tt_gyro.logicBlock_position();
	me._tt_projection.logicBlock_position();
	me._tt_thumbnail_open.logicBlock_position();
	me._tt_userdata.logicBlock_position();
	me._tt_rotate.logicBlock_position();
	me._tt_zoomout.logicBlock_position();
	me._tt_zoomin.logicBlock_position();
	me._tt_projection.logicBlock_text();
	me._enter_vr.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._tt_thumbnail_open.logicBlock_text(); });
	player.addListener('fullscreenenter', function(args) { me._fullscreen.logicBlock_alpha();me._fullscreen_off.logicBlock_alpha();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('fullscreenexit', function(args) { me._fullscreen.logicBlock_alpha();me._fullscreen_off.logicBlock_alpha();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('changenode', function(args) { me._screentint_info.logicBlock_visible();me._controller.logicBlock_position();me._controller.logicBlock_alpha();me._controller_slider.logicBlock_position();me._controller_slider.logicBlock_alpha();me._enter_vr.logicBlock_position();me._fullscreen_buttons.logicBlock_position();me._fullscreen_buttons.logicBlock_visible();me._gyro.logicBlock_position();me._gyro.logicBlock_visible();me._gyro_on.logicBlock_alpha();me._gyro_off.logicBlock_alpha();me._tt_gyro.logicBlock_text();me._projection_buttons.logicBlock_position();me._projection_buttons.logicBlock_visible();me._thumbnail.logicBlock_position();me._thumbnail.logicBlock_visible();me._tt_thumbnail_open.logicBlock_text();me._info.logicBlock_position();me._info.logicBlock_visible();me._autorotate_buttons.logicBlock_position();me._autorotate_buttons.logicBlock_visible();me._autorotate_start.logicBlock_alpha();me._autorotate_stop.logicBlock_alpha();me._tt_rotate.logicBlock_text();me._zoomout.logicBlock_visible();me._zoomin.logicBlock_visible();me._information.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._tt_enter_vr.logicBlock_position();me._fullscreen_buttons.logicBlock_visible();me._tt_fullscreen.logicBlock_position();me._gyro.logicBlock_visible();me._tt_gyro.logicBlock_position();me._tt_projection.logicBlock_position();me._thumbnail.logicBlock_visible();me._tt_thumbnail_open.logicBlock_position();me._tt_userdata.logicBlock_position();me._tt_rotate.logicBlock_position();me._tt_zoomout.logicBlock_position();me._tt_zoomin.logicBlock_position(); });
	player.addListener('projectionchanged', function(args) { me._tt_projection.logicBlock_text(); });
	player.addListener('autorotatechanged', function(args) { me._autorotate_start.logicBlock_alpha();me._autorotate_stop.logicBlock_alpha();me._tt_rotate.logicBlock_text(); });
	player.addListener('gyroavailable', function(args) { me._gyro.logicBlock_visible(); });
	player.addListener('gyrochanged', function(args) { me._gyro_on.logicBlock_alpha();me._gyro_off.logicBlock_alpha();me._tt_gyro.logicBlock_text(); });
	player.addListener('vrchanged', function(args) { me._enter_vr.logicBlock_visible(); });
	player.addListener('hastouch', function(args) { me._tt_enter_vr.logicBlock_position();me._tt_fullscreen.logicBlock_position();me._tt_gyro.logicBlock_position();me._tt_projection.logicBlock_position();me._tt_thumbnail_open.logicBlock_position();me._tt_userdata.logicBlock_position();me._tt_rotate.logicBlock_position();me._tt_zoomout.logicBlock_position();me._tt_zoomin.logicBlock_position(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._screentint_info.logicBlock_visible();me._controller.logicBlock_position();me._information.logicBlock_visible(); });
	player.addListener('varchanged_vis_userdata', function(args) { me._controller.logicBlock_position(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me._controller.logicBlock_position(); });
	player.addListener('varchanged_vis_video_popup_file', function(args) { me._controller.logicBlock_position(); });
	player.addListener('varchanged_vis_video_popup_url', function(args) { me._controller.logicBlock_position(); });
	player.addListener('varchanged_vis_video_popup_vimeo', function(args) { me._controller.logicBlock_position(); });
	player.addListener('varchanged_vis_video_popup_youtube', function(args) { me._controller.logicBlock_position(); });
	player.addListener('varchanged_vis_website', function(args) { me._controller.logicBlock_position(); });
	player.addListener('varchanged_vis_timer', function(args) { me._controller.logicBlock_alpha();me._controller_slider.logicBlock_alpha(); });
	player.addListener('varchanged_pos_controller', function(args) { me._controller_slider.logicBlock_position(); });
	player.addListener('varchanged_pos_enter_vr', function(args) { me._enter_vr.logicBlock_position(); });
	player.addListener('varchanged_pos_fullscreen', function(args) { me._fullscreen_buttons.logicBlock_position(); });
	player.addListener('varchanged_opt_fullscreen', function(args) { me._fullscreen_buttons.logicBlock_visible(); });
	player.addListener('varchanged_pos_gyro', function(args) { me._gyro.logicBlock_position(); });
	player.addListener('varchanged_opt_gyro', function(args) { me._gyro.logicBlock_visible(); });
	player.addListener('varchanged_pos_projection', function(args) { me._projection_buttons.logicBlock_position(); });
	player.addListener('varchanged_opt_projection', function(args) { me._projection_buttons.logicBlock_visible(); });
	player.addListener('varchanged_pos_thumbnail', function(args) { me._thumbnail.logicBlock_position(); });
	player.addListener('varchanged_opt_thumbnail', function(args) { me._thumbnail.logicBlock_visible(); });
	player.addListener('varchanged_opt_info', function(args) { me._info.logicBlock_visible(); });
	player.addListener('varchanged_pos_information', function(args) { me._info.logicBlock_position(); });
	player.addListener('varchanged_opt_autorotate', function(args) { me._autorotate_buttons.logicBlock_visible(); });
	player.addListener('varchanged_pos_autorotate', function(args) { me._autorotate_buttons.logicBlock_position(); });
	player.addListener('varchanged_opt_zoom', function(args) { me._zoomout.logicBlock_visible();me._zoomin.logicBlock_visible(); });
	player.addListener('varchanged_vis_thumbnail_menu_show', function(args) { me._tt_thumbnail_open.logicBlock_text(); });
	player.addListener('varchanged_vis_thumbnail_menu_mobile', function(args) { me._tt_thumbnail_open.logicBlock_text(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_image_changenode();me.callChildLogicBlocksHotspot_ht_node_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_image_configloaded();me.callChildLogicBlocksHotspot_ht_node_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_image_mouseover();me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_active(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_ht_node_changevisitednodes(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_ht_image_hastouch();me.callChildLogicBlocksHotspot_ht_node_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_info_popup(); });
	player.addListener('varchanged_vis_userdata', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_userdata(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_image_popup(); });
	player.addListener('varchanged_vis_video_popup_file', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_file(); });
	player.addListener('varchanged_vis_video_popup_url', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_url(); });
	player.addListener('varchanged_vis_video_popup_vimeo', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_vimeo(); });
	player.addListener('varchanged_vis_video_popup_youtube', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_youtube(); });
	player.addListener('varchanged_vis_website', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_website(); });
	player.addListener('varchanged_vis_timer', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_timer(); });
	player.addListener('varchanged_opt_hotspot_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = key;
	});
	document.addEventListener('keyup', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = 0;
	});
	me.skinTimerEvent();
};