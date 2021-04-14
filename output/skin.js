// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: cs.ggsk
// Generated 2021-04-14T23:34:08

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
	player.addVariable('op_gallery', 2, false);
	player.addVariable('op_website', 2, true);
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
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 69px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 274px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
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
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 25px;';
		hs+='border-radius : 25px;';
		hs+='background : rgba(255,255,255,0.607843);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 57px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 247px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
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
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._rectangle_1);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgNDAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KICA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIwIDM0QzExLjE1MzkgMzQgNCAyNi44NTM1IDQgMThDNCA5LjE1NDA2IDExLjE0NjUgMiAyMCAyQzI4Ljg0NjEgMiAzNiA5LjE0NjUgMzYgMThDMzYgMjYuODQ1OSAyOC44NTM1IDM0IDIwIDM0WiIvPgogPC9nPgogPHBhdGggZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZD0iTTI4Ljc0MzIgOS4xNDIzOEMyOC41ODc2IDkuMD'+
			'c3NjggMjguNDA4NSA5LjExMzQ2IDI4LjI4OTcgOS4yMzI2N0wyNi41NTk2IDEwLjk2MjhDMjQuNzAzMiA5LjA1MjA5IDIyLjIyMzEgOCAxOS41NzU1IDhDMTkuMDE1NCA4IDE4LjQ1MDYgOC4wNDg4OSAxNy44OTcgOC4xNDUwMUMxNC4xMjg2IDguNzk5OTQgMTEuMDc1MyAxMS42MjEgMTAuMTE4NyAxNS4zMzI0QzEwLjA4NjUgMTUuNDU3IDEwLjExNCAxNS41ODkzIDEwLjE5MjYgMTUuNjkxQzEwLjI3MTUgMTUuNzkyOCAxMC4zOTI3IDE1Ljg1MjMgMTAuNTIxNSAxNS44NTIzSDEzLjE3MTZDMTMuMzQ2MiAxNS44NTIzIDEzLjUwMjQgMTUuNzQzMyAxMy41NjIzIDE1LjU3OTFDMTQuMzM4MSAxMy40'+
			'NTg1IDE2LjI2NTMgMTEuODQwMyAxOC40NzE4IDExLjQ1NjlDMTguODM1MiAxMS4zOTM5IDE5LjIwNTIgMTEuMzYyIDE5LjU3MTkgMTEuMzYyQzIxLjMyNTMgMTEuMzYyIDIyLjk2MjkgMTIuMDY0IDI0LjE4MzkgMTMuMzM4NUwyMi40MjcgMTUuMDk1MkMyMi4zMDgyIDE1LjIxNDIgMjIuMjcyNiAxNS4zOTMxIDIyLjMzNjcgMTUuNTQ4NUMyMi40MDE0IDE1LjcwNDEgMjIuNTUyOCAxNS44MDU1IDIyLjcyMTEgMTUuODA1NUgyOC41ODQxQzI4LjgxMzggMTUuODA1NSAyOS4wMDAyIDE1LjYxOTEgMjkuMDAwMiAxNS4zODk0VjkuNTI2NjRDMjkuMDAwMiA5LjM1ODU0IDI4Ljg5ODQgOS4yMDY4NyAyOC'+
			'43NDMyIDkuMTQyMzhaIi8+CiA8cGF0aCBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIiBkPSJNMjguNDc4MiAxOS43MTg4SDI1LjgyODNDMjUuNjUzOCAxOS43MTg4IDI1LjQ5NzUgMTkuODI3NiAyNS40Mzc2IDE5Ljk5MThDMjQuNjYxOCAyMi4xMTI0IDIyLjczNDcgMjMuNzMwOCAyMC41MjgyIDI0LjExNEMyMC4xNjQ1IDI0LjE3NyAxOS43OTQ4IDI0LjIwODggMTkuNDI4IDI0LjIwODhDMTcuNjc0NiAyNC4yMDg4IDE2LjAzNjkgMjMuNTA2OSAxNC44MTYxIDIyLjIzMjRMMTYuNTcyOCAyMC40NzU3QzE2LjY5MTggMjAuMzU2NyAxNi43Mjc0IDIwLjE3NzcgMTYuNjYzMSAyMC4wMjIzQzE2LjU5'+
			'ODYgMTkuODY2NyAxNi40NDY5IDE5Ljc2NTQgMTYuMjc4NiAxOS43NjU0SDEwLjQxNjFDMTAuMTg2NCAxOS43NjU0IDEwIDE5Ljk1MTggMTAgMjAuMTgxNVYyNi4wNDQ0QzEwIDI2LjIxMjcgMTAuMTAxMyAyNi4zNjQ0IDEwLjI1NjkgMjYuNDI4OUMxMC40MTIxIDI2LjQ5MzQgMTAuNTkxMyAyNi40NTc2IDEwLjcxMDMgMjYuMzM4NEwxMi40NDA0IDI0LjYwODVDMTQuMjk2NiAyNi41MTkgMTYuNzc2NyAyNy41NzEzIDE5LjQyNDMgMjcuNTcxM0MxOS45ODQ1IDI3LjU3MTMgMjAuNTQ5NCAyNy41MjI0IDIxLjEwMyAyNy40MjYzQzI0Ljg3MTEgMjYuNzcxOCAyNy45MjQ2IDIzLjk1MDIgMjguODgxMi'+
			'AyMC4yMzg5QzI4LjkxMzUgMjAuMTE0MSAyOC44ODYgMTkuOTgyMiAyOC44MDc2IDE5Ljg4QzI4LjcyODUgMTkuNzc4NSAyOC42MDcgMTkuNzE4OCAyOC40NzgyIDE5LjcxODhaIi8+CiA8ZGVmcz4KICA8ZmlsdGVyIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgaWQ9ImZpbHRlcjBfZCIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiB5PSIwIiB4PSIwIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICA8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgogICA8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHZhbHVl'+
			'cz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHR5cGU9Im1hdHJpeCIvPgogICA8ZmVPZmZzZXQgZHk9IjIiLz4KICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIvPgogICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMTUgMCIgdHlwZT0ibWF0cml4Ii8+CiAgIDxmZUJsZW5kIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIgbW9kZT0ibm9ybWFsIi8+CiAgIDxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcF'+
			'NoYWRvdyIgcmVzdWx0PSJzaGFwZSIgbW9kZT0ibm9ybWFsIi8+CiAgPC9maWx0ZXI+CiAgPGxpbmVhckdyYWRpZW50IHkxPSI4IiBpZD0icGFpbnQwX2xpbmVhciIgeDI9IjE5LjU1MjgiIHgxPSIxOS41NTI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTI9IjE1Ljg1MjMiPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZBNjhEIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRDNBODQiIG9mZnNldD0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IHkxPSIxOS43MTg4IiBpZD0icGFpbnQxX2xpbmVhciIgeDI9IjE5LjQ0NzIiIHgxPSIxOS40NDcyIiBn'+
			'cmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTI9IjI3LjU3MTMiPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZBNjhEIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRDNBODQiIG9mZnNldD0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+Cjwvc3ZnPgo=';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgNDAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KICA8cGF0aCBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIiBkPSJNMjAgMzRDMTEuMTUzOSAzNCA0IDI2Ljg1MzUgNCAxOEM0IDkuMTU0MDYgMTEuMTQ2NSAyIDIwIDJDMjguODQ2MSAyIDM2IDkuMTQ2NSAzNiAxOEMzNiAyNi44NDU5IDI4Ljg1MzUgMzQgMjAgMzRaIi8+CiA8L2c+CiA8cGF0aCBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIiBkPSJNMjguNzQzMiA5LjE0Mj'+
			'M4QzI4LjU4NzYgOS4wNzc2OCAyOC40MDg1IDkuMTEzNDYgMjguMjg5NyA5LjIzMjY3TDI2LjU1OTYgMTAuOTYyOEMyNC43MDMyIDkuMDUyMDkgMjIuMjIzMSA4IDE5LjU3NTUgOEMxOS4wMTU0IDggMTguNDUwNiA4LjA0ODg5IDE3Ljg5NyA4LjE0NTAxQzE0LjEyODYgOC43OTk5NCAxMS4wNzUzIDExLjYyMSAxMC4xMTg3IDE1LjMzMjRDMTAuMDg2NSAxNS40NTcgMTAuMTE0IDE1LjU4OTMgMTAuMTkyNiAxNS42OTFDMTAuMjcxNSAxNS43OTI4IDEwLjM5MjcgMTUuODUyMyAxMC41MjE1IDE1Ljg1MjNIMTMuMTcxNkMxMy4zNDYyIDE1Ljg1MjMgMTMuNTAyNCAxNS43NDMzIDEzLjU2MjMgMTUuNTc5'+
			'MUMxNC4zMzgxIDEzLjQ1ODUgMTYuMjY1MyAxMS44NDAzIDE4LjQ3MTggMTEuNDU2OUMxOC44MzUyIDExLjM5MzkgMTkuMjA1MiAxMS4zNjIgMTkuNTcxOSAxMS4zNjJDMjEuMzI1MyAxMS4zNjIgMjIuOTYyOSAxMi4wNjQgMjQuMTgzOSAxMy4zMzg1TDIyLjQyNyAxNS4wOTUyQzIyLjMwODIgMTUuMjE0MiAyMi4yNzI2IDE1LjM5MzEgMjIuMzM2NyAxNS41NDg1QzIyLjQwMTQgMTUuNzA0MSAyMi41NTI4IDE1LjgwNTUgMjIuNzIxMSAxNS44MDU1SDI4LjU4NDFDMjguODEzOCAxNS44MDU1IDI5LjAwMDIgMTUuNjE5MSAyOS4wMDAyIDE1LjM4OTRWOS41MjY2NEMyOS4wMDAyIDkuMzU4NTQgMjguOD'+
			'k4NCA5LjIwNjg3IDI4Ljc0MzIgOS4xNDIzOFoiLz4KIDxwYXRoIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcikiIGQ9Ik0yOC40NzgyIDE5LjcxODhIMjUuODI4M0MyNS42NTM4IDE5LjcxODggMjUuNDk3NSAxOS44Mjc2IDI1LjQzNzYgMTkuOTkxOEMyNC42NjE4IDIyLjExMjQgMjIuNzM0NyAyMy43MzA4IDIwLjUyODIgMjQuMTE0QzIwLjE2NDUgMjQuMTc3IDE5Ljc5NDggMjQuMjA4OCAxOS40MjggMjQuMjA4OEMxNy42NzQ2IDI0LjIwODggMTYuMDM2OSAyMy41MDY5IDE0LjgxNjEgMjIuMjMyNEwxNi41NzI4IDIwLjQ3NTdDMTYuNjkxOCAyMC4zNTY3IDE2LjcyNzQgMjAuMTc3NyAxNi42NjMx'+
			'IDIwLjAyMjNDMTYuNTk4NiAxOS44NjY3IDE2LjQ0NjkgMTkuNzY1NCAxNi4yNzg2IDE5Ljc2NTRIMTAuNDE2MUMxMC4xODY0IDE5Ljc2NTQgMTAgMTkuOTUxOCAxMCAyMC4xODE1VjI2LjA0NDRDMTAgMjYuMjEyNyAxMC4xMDEzIDI2LjM2NDQgMTAuMjU2OSAyNi40Mjg5QzEwLjQxMjEgMjYuNDkzNCAxMC41OTEzIDI2LjQ1NzYgMTAuNzEwMyAyNi4zMzg0TDEyLjQ0MDQgMjQuNjA4NUMxNC4yOTY2IDI2LjUxOSAxNi43NzY3IDI3LjU3MTMgMTkuNDI0MyAyNy41NzEzQzE5Ljk4NDUgMjcuNTcxMyAyMC41NDk0IDI3LjUyMjQgMjEuMTAzIDI3LjQyNjNDMjQuODcxMSAyNi43NzE4IDI3LjkyNDYgMj'+
			'MuOTUwMiAyOC44ODEyIDIwLjIzODlDMjguOTEzNSAyMC4xMTQxIDI4Ljg4NiAxOS45ODIyIDI4LjgwNzYgMTkuODhDMjguNzI4NSAxOS43Nzg1IDI4LjYwNyAxOS43MTg4IDI4LjQ3ODIgMTkuNzE4OFoiLz4KIDxkZWZzPgogIDxmaWx0ZXIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBpZD0iZmlsdGVyMF9kIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIHk9IjAiIHg9IjAiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CiAgIDxmZUNvbG9yTWF0cml4IGluPSJTb3Vy'+
			'Y2VBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgdHlwZT0ibWF0cml4Ii8+CiAgIDxmZU9mZnNldCBkeT0iMiIvPgogICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIi8+CiAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNSAwIiB0eXBlPSJtYXRyaXgiLz4KICAgPGZlQmxlbmQgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93IiBtb2RlPSJub3JtYWwiLz4KICAgPGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj'+
			'0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIiBtb2RlPSJub3JtYWwiLz4KICA8L2ZpbHRlcj4KICA8bGluZWFyR3JhZGllbnQgeTE9IjIiIGlkPSJwYWludDBfbGluZWFyIiB4Mj0iMjAiIHgxPSIyMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkyPSIzNCI+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkE2OEQiLz4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZEM0E4NCIgb2Zmc2V0PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8bGluZWFyR3JhZGllbnQgeTE9IjgiIGlkPSJwYWludDFfbGluZWFyIiB4Mj0iMTkuNTUyOCIgeDE9IjE5LjU1MjgiIGdyYWRpZW50'+
			'VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5Mj0iMTUuODUyMyI+CiAgIDxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkE2OEQiIG9mZnNldD0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IHkxPSIxOS43MTg4IiBpZD0icGFpbnQyX2xpbmVhciIgeDI9IjE5LjQ0NzIiIHgxPSIxOS40NDcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTI9IjI3LjU3MTMiPgogICA8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZBNjhEIiBvZmZzZXQ9IjEiLz4KICA8L2xpbmVhckdyYW'+
			'RpZW50PgogPC9kZWZzPgo8L3N2Zz4K';
		me._svg_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me._svg_1__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgNDAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KICA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIwIDM0QzExLjE1MzkgMzQgNCAyNi44NTM1IDQgMThDNCA5LjE1NDA2IDExLjE0NjUgMiAyMCAyQzI4Ljg0NjEgMiAzNiA5LjE0NjUgMzYgMThDMzYgMjYuODQ1OSAyOC44NTM1IDM0IDIwIDM0WiIvPgogPC9nPgogPHBhdGggZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZD0iTTI4Ljc0MzIgOS4xNDIzOEMyOC41ODc2IDkuMD'+
			'c3NjggMjguNDA4NSA5LjExMzQ2IDI4LjI4OTcgOS4yMzI2N0wyNi41NTk2IDEwLjk2MjhDMjQuNzAzMiA5LjA1MjA5IDIyLjIyMzEgOCAxOS41NzU1IDhDMTkuMDE1NCA4IDE4LjQ1MDYgOC4wNDg4OSAxNy44OTcgOC4xNDUwMUMxNC4xMjg2IDguNzk5OTQgMTEuMDc1MyAxMS42MjEgMTAuMTE4NyAxNS4zMzI0QzEwLjA4NjUgMTUuNDU3IDEwLjExNCAxNS41ODkzIDEwLjE5MjYgMTUuNjkxQzEwLjI3MTUgMTUuNzkyOCAxMC4zOTI3IDE1Ljg1MjMgMTAuNTIxNSAxNS44NTIzSDEzLjE3MTZDMTMuMzQ2MiAxNS44NTIzIDEzLjUwMjQgMTUuNzQzMyAxMy41NjIzIDE1LjU3OTFDMTQuMzM4MSAxMy40'+
			'NTg1IDE2LjI2NTMgMTEuODQwMyAxOC40NzE4IDExLjQ1NjlDMTguODM1MiAxMS4zOTM5IDE5LjIwNTIgMTEuMzYyIDE5LjU3MTkgMTEuMzYyQzIxLjMyNTMgMTEuMzYyIDIyLjk2MjkgMTIuMDY0IDI0LjE4MzkgMTMuMzM4NUwyMi40MjcgMTUuMDk1MkMyMi4zMDgyIDE1LjIxNDIgMjIuMjcyNiAxNS4zOTMxIDIyLjMzNjcgMTUuNTQ4NUMyMi40MDE0IDE1LjcwNDEgMjIuNTUyOCAxNS44MDU1IDIyLjcyMTEgMTUuODA1NUgyOC41ODQxQzI4LjgxMzggMTUuODA1NSAyOS4wMDAyIDE1LjYxOTEgMjkuMDAwMiAxNS4zODk0VjkuNTI2NjRDMjkuMDAwMiA5LjM1ODU0IDI4Ljg5ODQgOS4yMDY4NyAyOC'+
			'43NDMyIDkuMTQyMzhaIi8+CiA8cGF0aCBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIiBkPSJNMjguNDc4MiAxOS43MTg4SDI1LjgyODNDMjUuNjUzOCAxOS43MTg4IDI1LjQ5NzUgMTkuODI3NiAyNS40Mzc2IDE5Ljk5MThDMjQuNjYxOCAyMi4xMTI0IDIyLjczNDcgMjMuNzMwOCAyMC41MjgyIDI0LjExNEMyMC4xNjQ1IDI0LjE3NyAxOS43OTQ4IDI0LjIwODggMTkuNDI4IDI0LjIwODhDMTcuNjc0NiAyNC4yMDg4IDE2LjAzNjkgMjMuNTA2OSAxNC44MTYxIDIyLjIzMjRMMTYuNTcyOCAyMC40NzU3QzE2LjY5MTggMjAuMzU2NyAxNi43Mjc0IDIwLjE3NzcgMTYuNjYzMSAyMC4wMjIzQzE2LjU5'+
			'ODYgMTkuODY2NyAxNi40NDY5IDE5Ljc2NTQgMTYuMjc4NiAxOS43NjU0SDEwLjQxNjFDMTAuMTg2NCAxOS43NjU0IDEwIDE5Ljk1MTggMTAgMjAuMTgxNVYyNi4wNDQ0QzEwIDI2LjIxMjcgMTAuMTAxMyAyNi4zNjQ0IDEwLjI1NjkgMjYuNDI4OUMxMC40MTIxIDI2LjQ5MzQgMTAuNTkxMyAyNi40NTc2IDEwLjcxMDMgMjYuMzM4NEwxMi40NDA0IDI0LjYwODVDMTQuMjk2NiAyNi41MTkgMTYuNzc2NyAyNy41NzEzIDE5LjQyNDMgMjcuNTcxM0MxOS45ODQ1IDI3LjU3MTMgMjAuNTQ5NCAyNy41MjI0IDIxLjEwMyAyNy40MjYzQzI0Ljg3MTEgMjYuNzcxOCAyNy45MjQ2IDIzLjk1MDIgMjguODgxMi'+
			'AyMC4yMzg5QzI4LjkxMzUgMjAuMTE0MSAyOC44ODYgMTkuOTgyMiAyOC44MDc2IDE5Ljg4QzI4LjcyODUgMTkuNzc4NSAyOC42MDcgMTkuNzE4OCAyOC40NzgyIDE5LjcxODhaIi8+CiA8ZGVmcz4KICA8ZmlsdGVyIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgaWQ9ImZpbHRlcjBfZCIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiB5PSIwIiB4PSIwIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICA8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgogICA8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHZhbHVl'+
			'cz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHR5cGU9Im1hdHJpeCIvPgogICA8ZmVPZmZzZXQgZHk9IjIiLz4KICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIvPgogICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMTUgMCIgdHlwZT0ibWF0cml4Ii8+CiAgIDxmZUJsZW5kIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIgbW9kZT0ibm9ybWFsIi8+CiAgIDxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcF'+
			'NoYWRvdyIgcmVzdWx0PSJzaGFwZSIgbW9kZT0ibm9ybWFsIi8+CiAgPC9maWx0ZXI+CiAgPGxpbmVhckdyYWRpZW50IHkxPSI4IiBpZD0icGFpbnQwX2xpbmVhciIgeDI9IjE5LjU1MjgiIHgxPSIxOS41NTI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTI9IjE1Ljg1MjMiPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZBNjhEIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRDNBODQiIG9mZnNldD0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IHkxPSIxOS43MTg4IiBpZD0icGFpbnQxX2xpbmVhciIgeDI9IjE5LjQ0NzIiIHgxPSIxOS40NDcyIiBn'+
			'cmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTI9IjI3LjU3MTMiPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZBNjhEIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRDNBODQiIG9mZnNldD0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+Cjwvc3ZnPgo=';
		me._svg_1__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="Svg 1";
		el.ggDx=29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 12px;';
		hs+='height : 42px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		hs+='cursor: pointer;';
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
			return player.getCurrentNode();
		}
		me._svg_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_1.style[domTransition]='';
				if (me._svg_1.ggCurrentLogicStateVisible == 0) {
					me._svg_1.style.visibility="hidden";
					me._svg_1.ggVisible=false;
				}
				else {
					me._svg_1.style.visibility=(Number(me._svg_1.style.opacity)>0||!me._svg_1.style.opacity)?'inherit':'hidden';
					me._svg_1.ggVisible=true;
				}
			}
		}
		me._svg_1.onclick=function (e) {
			player.startAutorotate("0");
		}
		me._svg_1.onmouseover=function (e) {
			me._svg_1__img.style.visibility='hidden';
			me._svg_1__imgo.style.visibility='inherit';
		}
		me._svg_1.onmouseout=function (e) {
			me._svg_1__img.style.visibility='inherit';
			me._svg_1__imgo.style.visibility='hidden';
			me._svg_1__imga.style.visibility='hidden';
		}
		me._svg_1.onmousedown=function (e) {
			me._svg_1__imga.style.visibility='inherit';
			me._svg_1__imgo.style.visibility='hidden';
		}
		me._svg_1.onmouseup=function (e) {
			me._svg_1__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me._svg_1__img.style.visibility='inherit';
			} else {
				me._svg_1__imgo.style.visibility='inherit';
			}
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
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
		me._controller.appendChild(me._svg_1);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgNDAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KICA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIwIDM0QzExLjE1MzkgMzQgNCAyNi44NTM1IDQgMThDNCA5LjE1NDA2IDExLjE0NjUgMiAyMCAyQzI4Ljg0NjEgMiAzNiA5LjE0NjUgMzYgMThDMzYgMjYuODQ1OSAyOC44NTM1IDM0IDIwIDM0WiIvPgogPC9nPgogPHBhdGggZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZD0iTTI4Ljc0MzIgOS4xNDIzOEMyOC41ODc2IDkuMD'+
			'c3NjggMjguNDA4NSA5LjExMzQ2IDI4LjI4OTcgOS4yMzI2N0wyNi41NTk2IDEwLjk2MjhDMjQuNzAzMiA5LjA1MjA5IDIyLjIyMzEgOCAxOS41NzU1IDhDMTkuMDE1NCA4IDE4LjQ1MDYgOC4wNDg4OSAxNy44OTcgOC4xNDUwMUMxNC4xMjg2IDguNzk5OTQgMTEuMDc1MyAxMS42MjEgMTAuMTE4NyAxNS4zMzI0QzEwLjA4NjUgMTUuNDU3IDEwLjExNCAxNS41ODkzIDEwLjE5MjYgMTUuNjkxQzEwLjI3MTUgMTUuNzkyOCAxMC4zOTI3IDE1Ljg1MjMgMTAuNTIxNSAxNS44NTIzSDEzLjE3MTZDMTMuMzQ2MiAxNS44NTIzIDEzLjUwMjQgMTUuNzQzMyAxMy41NjIzIDE1LjU3OTFDMTQuMzM4MSAxMy40'+
			'NTg1IDE2LjI2NTMgMTEuODQwMyAxOC40NzE4IDExLjQ1NjlDMTguODM1MiAxMS4zOTM5IDE5LjIwNTEgMTEuMzYyIDE5LjU3MTkgMTEuMzYyQzIxLjMyNTMgMTEuMzYyIDIyLjk2MjkgMTIuMDY0IDI0LjE4MzkgMTMuMzM4NUwyMi40MjY5IDE1LjA5NTJDMjIuMzA4MiAxNS4yMTQyIDIyLjI3MjYgMTUuMzkzMSAyMi4zMzY3IDE1LjU0ODVDMjIuNDAxNCAxNS43MDQxIDIyLjU1MjggMTUuODA1NSAyMi43MjExIDE1LjgwNTVIMjguNTg0MUMyOC44MTM3IDE1LjgwNTUgMjkuMDAwMiAxNS42MTkxIDI5LjAwMDIgMTUuMzg5NFY5LjUyNjY0QzI5LjAwMDIgOS4zNTg1NCAyOC44OTg0IDkuMjA2ODcgMj'+
			'guNzQzMiA5LjE0MjM4WiIvPgogPHBhdGggZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIgZD0iTTI4LjQ3ODIgMTkuNzE4OEgyNS44MjgzQzI1LjY1MzggMTkuNzE4OCAyNS40OTc1IDE5LjgyNzYgMjUuNDM3NiAxOS45OTE4QzI0LjY2MTggMjIuMTEyNCAyMi43MzQ3IDIzLjczMDggMjAuNTI4MiAyNC4xMTRDMjAuMTY0NSAyNC4xNzcgMTkuNzk0OCAyNC4yMDg4IDE5LjQyOCAyNC4yMDg4QzE3LjY3NDYgMjQuMjA4OCAxNi4wMzY5IDIzLjUwNjkgMTQuODE2MSAyMi4yMzI0TDE2LjU3MjggMjAuNDc1N0MxNi42OTE4IDIwLjM1NjcgMTYuNzI3NCAyMC4xNzc3IDE2LjY2MzEgMjAuMDIyM0MxNi41'+
			'OTg2IDE5Ljg2NjcgMTYuNDQ2OSAxOS43NjU0IDE2LjI3ODYgMTkuNzY1NEgxMC40MTYxQzEwLjE4NjQgMTkuNzY1NCAxMCAxOS45NTE4IDEwIDIwLjE4MTVWMjYuMDQ0NEMxMCAyNi4yMTI3IDEwLjEwMTMgMjYuMzY0NCAxMC4yNTY5IDI2LjQyODlDMTAuNDEyMSAyNi40OTM0IDEwLjU5MTMgMjYuNDU3NiAxMC43MTAzIDI2LjMzODRMMTIuNDQwNCAyNC42MDg1QzE0LjI5NjYgMjYuNTE5IDE2Ljc3NjcgMjcuNTcxMyAxOS40MjQzIDI3LjU3MTNDMTkuOTg0NSAyNy41NzEzIDIwLjU0OTQgMjcuNTIyNCAyMS4xMDMgMjcuNDI2M0MyNC44NzExIDI2Ljc3MTggMjcuOTI0NiAyMy45NTAyIDI4Ljg4MT'+
			'IgMjAuMjM4OUMyOC45MTM1IDIwLjExNDEgMjguODg2IDE5Ljk4MjIgMjguODA3NiAxOS44OEMyOC43Mjg1IDE5Ljc3ODUgMjguNjA3IDE5LjcxODggMjguNDc4MiAxOS43MTg4WiIvPgogPHJlY3Qgd2lkdGg9IjIyIiBoZWlnaHQ9IjUuMTgwODMiIHN0cm9rZS13aWR0aD0iMiIgcng9IjIuNTkwNDIiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcikiIHRyYW5zZm9ybT0icm90YXRlKDYwLjYxNTUgMTYuMTUyMyA2LjYzNzk5KSIgeT0iNi42Mzc5OSIgeD0iMTYuMTUyMyIgc3Ryb2tlPSJ3aGl0ZSIvPgogPGRlZnM+CiAgPGZpbHRlciB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGlkPSJmaWx0ZXIwX2Qi'+
			'IGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeT0iMCIgeD0iMCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KICAgPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiB0eXBlPSJtYXRyaXgiLz4KICAgPGZlT2Zmc2V0IGR5PSIyIi8+CiAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMC'+
			'AwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjE1IDAiIHR5cGU9Im1hdHJpeCIvPgogICA8ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciIG1vZGU9Im5vcm1hbCIvPgogICA8ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiIG1vZGU9Im5vcm1hbCIvPgogIDwvZmlsdGVyPgogIDxsaW5lYXJHcmFkaWVudCB5MT0iOCIgaWQ9InBhaW50MF9saW5lYXIiIHgyPSIxOS41NTI4IiB4MT0iMTkuNTUyOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkyPSIxNS44'+
			'NTIzIj4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGQTY4RCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjRkQzQTg0IiBvZmZzZXQ9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCB5MT0iMTkuNzE4OCIgaWQ9InBhaW50MV9saW5lYXIiIHgyPSIxOS40NDcyIiB4MT0iMTkuNDQ3MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkyPSIyNy41NzEzIj4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGQTY4RCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjRkQzQTg0IiBvZmZzZXQ9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCB5MT'+
			'0iNi4zNDYwNyIgaWQ9InBhaW50Ml9saW5lYXIiIHgyPSIzMi44Nzc3IiB4MT0iMTguOTkxMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkyPSIxNS4zMTM0Ij4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGQTY4RCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjRkQzQTg0IiBvZmZzZXQ9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogPC9kZWZzPgo8L3N2Zz4K';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgNDAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KICA8cGF0aCBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIiBkPSJNMjAgMzRDMTEuMTUzOSAzNCA0IDI2Ljg1MzUgNCAxOEM0IDkuMTU0MDYgMTEuMTQ2NSAyIDIwIDJDMjguODQ2MSAyIDM2IDkuMTQ2NSAzNiAxOEMzNiAyNi44NDU5IDI4Ljg1MzUgMzQgMjAgMzRaIi8+CiA8L2c+CiA8cGF0aCBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIiBkPSJNMjguNzQzMiA5LjE0Mj'+
			'M4QzI4LjU4NzYgOS4wNzc2OCAyOC40MDg1IDkuMTEzNDYgMjguMjg5NyA5LjIzMjY3TDI2LjU1OTYgMTAuOTYyOEMyNC43MDMyIDkuMDUyMDkgMjIuMjIzMSA4IDE5LjU3NTUgOEMxOS4wMTU0IDggMTguNDUwNiA4LjA0ODg5IDE3Ljg5NyA4LjE0NTAxQzE0LjEyODYgOC43OTk5NCAxMS4wNzUzIDExLjYyMSAxMC4xMTg3IDE1LjMzMjRDMTAuMDg2NSAxNS40NTcgMTAuMTE0IDE1LjU4OTMgMTAuMTkyNiAxNS42OTFDMTAuMjcxNSAxNS43OTI4IDEwLjM5MjcgMTUuODUyMyAxMC41MjE1IDE1Ljg1MjNIMTMuMTcxNkMxMy4zNDYyIDE1Ljg1MjMgMTMuNTAyNCAxNS43NDMzIDEzLjU2MjMgMTUuNTc5'+
			'MUMxNC4zMzgxIDEzLjQ1ODUgMTYuMjY1MyAxMS44NDAzIDE4LjQ3MTggMTEuNDU2OUMxOC44MzUyIDExLjM5MzkgMTkuMjA1MSAxMS4zNjIgMTkuNTcxOSAxMS4zNjJDMjEuMzI1MyAxMS4zNjIgMjIuOTYyOSAxMi4wNjQgMjQuMTgzOSAxMy4zMzg1TDIyLjQyNjkgMTUuMDk1MkMyMi4zMDgyIDE1LjIxNDIgMjIuMjcyNiAxNS4zOTMxIDIyLjMzNjcgMTUuNTQ4NUMyMi40MDE0IDE1LjcwNDEgMjIuNTUyOCAxNS44MDU1IDIyLjcyMTEgMTUuODA1NUgyOC41ODQxQzI4LjgxMzcgMTUuODA1NSAyOS4wMDAyIDE1LjYxOTEgMjkuMDAwMiAxNS4zODk0VjkuNTI2NjRDMjkuMDAwMiA5LjM1ODU0IDI4Lj'+
			'g5ODQgOS4yMDY4NyAyOC43NDMyIDkuMTQyMzhaIi8+CiA8cGF0aCBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXIpIiBkPSJNMjguNDc4MiAxOS43MTg4SDI1LjgyODNDMjUuNjUzOCAxOS43MTg4IDI1LjQ5NzUgMTkuODI3NiAyNS40Mzc2IDE5Ljk5MThDMjQuNjYxOCAyMi4xMTI0IDIyLjczNDcgMjMuNzMwOCAyMC41MjgyIDI0LjExNEMyMC4xNjQ1IDI0LjE3NyAxOS43OTQ4IDI0LjIwODggMTkuNDI4IDI0LjIwODhDMTcuNjc0NiAyNC4yMDg4IDE2LjAzNjkgMjMuNTA2OSAxNC44MTYxIDIyLjIzMjRMMTYuNTcyOCAyMC40NzU3QzE2LjY5MTggMjAuMzU2NyAxNi43Mjc0IDIwLjE3NzcgMTYuNjYz'+
			'MSAyMC4wMjIzQzE2LjU5ODYgMTkuODY2NyAxNi40NDY5IDE5Ljc2NTQgMTYuMjc4NiAxOS43NjU0SDEwLjQxNjFDMTAuMTg2NCAxOS43NjU0IDEwIDE5Ljk1MTggMTAgMjAuMTgxNVYyNi4wNDQ0QzEwIDI2LjIxMjcgMTAuMTAxMyAyNi4zNjQ0IDEwLjI1NjkgMjYuNDI4OUMxMC40MTIxIDI2LjQ5MzQgMTAuNTkxMyAyNi40NTc2IDEwLjcxMDMgMjYuMzM4NEwxMi40NDA0IDI0LjYwODVDMTQuMjk2NiAyNi41MTkgMTYuNzc2NyAyNy41NzEzIDE5LjQyNDMgMjcuNTcxM0MxOS45ODQ1IDI3LjU3MTMgMjAuNTQ5NCAyNy41MjI0IDIxLjEwMyAyNy40MjYzQzI0Ljg3MTEgMjYuNzcxOCAyNy45MjQ2ID'+
			'IzLjk1MDIgMjguODgxMiAyMC4yMzg5QzI4LjkxMzUgMjAuMTE0MSAyOC44ODYgMTkuOTgyMiAyOC44MDc2IDE5Ljg4QzI4LjcyODUgMTkuNzc4NSAyOC42MDcgMTkuNzE4OCAyOC40NzgyIDE5LjcxODhaIi8+CiA8cmVjdCB3aWR0aD0iMjIiIGhlaWdodD0iNS4xODA4MyIgc3Ryb2tlLXdpZHRoPSIyIiByeD0iMi41OTA0MiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyKSIgdHJhbnNmb3JtPSJyb3RhdGUoNjAuNjE1NSAxNi4xNTIzIDYuNjM3OTkpIiB5PSI2LjYzNzk5IiB4PSIxNi4xNTIzIiBzdHJva2U9InVybCgjcGFpbnQ0X2xpbmVhcikiLz4KIDxkZWZzPgogIDxmaWx0ZXIgd2lkdGg9IjQw'+
			'IiBoZWlnaHQ9IjQwIiBpZD0iZmlsdGVyMF9kIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIHk9IjAiIHg9IjAiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CiAgIDxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgdHlwZT0ibWF0cml4Ii8+CiAgIDxmZU9mZnNldCBkeT0iMiIvPgogICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIi8+CiAgIDxmZUNvbG'+
			'9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNSAwIiB0eXBlPSJtYXRyaXgiLz4KICAgPGZlQmxlbmQgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93IiBtb2RlPSJub3JtYWwiLz4KICAgPGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIiBtb2RlPSJub3JtYWwiLz4KICA8L2ZpbHRlcj4KICA8bGluZWFyR3JhZGllbnQgeTE9IjIiIGlkPSJwYWludDBfbGluZWFyIiB4Mj0iMjAiIHgxPSIyMCIgZ3JhZGllbnRVbml0cz0idXNlclNw'+
			'YWNlT25Vc2UiIHkyPSIzNCI+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkE2OEQiLz4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZEM0E4NCIgb2Zmc2V0PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8bGluZWFyR3JhZGllbnQgeTE9IjgiIGlkPSJwYWludDFfbGluZWFyIiB4Mj0iMTkuNTUyOCIgeDE9IjE5LjU1MjgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5Mj0iMTUuODUyMyI+CiAgIDxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkE2OEQiIG9mZnNldD0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW'+
			'50IHkxPSIxOS43MTg4IiBpZD0icGFpbnQyX2xpbmVhciIgeDI9IjE5LjQ0NzIiIHgxPSIxOS40NDcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTI9IjI3LjU3MTMiPgogICA8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZBNjhEIiBvZmZzZXQ9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCB5MT0iNi4zNDYwNyIgaWQ9InBhaW50M19saW5lYXIiIHgyPSIzMi44Nzc3IiB4MT0iMTguOTkxMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkyPSIxNS4zMTM0Ij4KICAgPHN0b3Agc3RvcC1jb2xv'+
			'cj0id2hpdGUiLz4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGQTY4RCIgb2Zmc2V0PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8bGluZWFyR3JhZGllbnQgeTE9IjQuMjA1NjEiIGlkPSJwYWludDRfbGluZWFyIiB4Mj0iMzcuMzk2NiIgeDE9IjE1LjYxMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkyPSIxNi40NzIzIj4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGQTA4RCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjRkQzQTg0IiBvZmZzZXQ9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogPC9kZWZzPgo8L3N2Zz4K';
		me._svg_2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me._svg_2__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgNDAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KICA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIwIDM0QzExLjE1MzkgMzQgNCAyNi44NTM1IDQgMThDNCA5LjE1NDA2IDExLjE0NjUgMiAyMCAyQzI4Ljg0NjEgMiAzNiA5LjE0NjUgMzYgMThDMzYgMjYuODQ1OSAyOC44NTM1IDM0IDIwIDM0WiIvPgogPC9nPgogPHBhdGggZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZD0iTTI4Ljc0MzIgOS4xNDIzOEMyOC41ODc2IDkuMD'+
			'c3NjggMjguNDA4NSA5LjExMzQ2IDI4LjI4OTcgOS4yMzI2N0wyNi41NTk2IDEwLjk2MjhDMjQuNzAzMiA5LjA1MjA5IDIyLjIyMzEgOCAxOS41NzU1IDhDMTkuMDE1NCA4IDE4LjQ1MDYgOC4wNDg4OSAxNy44OTcgOC4xNDUwMUMxNC4xMjg2IDguNzk5OTQgMTEuMDc1MyAxMS42MjEgMTAuMTE4NyAxNS4zMzI0QzEwLjA4NjUgMTUuNDU3IDEwLjExNCAxNS41ODkzIDEwLjE5MjYgMTUuNjkxQzEwLjI3MTUgMTUuNzkyOCAxMC4zOTI3IDE1Ljg1MjMgMTAuNTIxNSAxNS44NTIzSDEzLjE3MTZDMTMuMzQ2MiAxNS44NTIzIDEzLjUwMjQgMTUuNzQzMyAxMy41NjIzIDE1LjU3OTFDMTQuMzM4MSAxMy40'+
			'NTg1IDE2LjI2NTMgMTEuODQwMyAxOC40NzE4IDExLjQ1NjlDMTguODM1MiAxMS4zOTM5IDE5LjIwNTEgMTEuMzYyIDE5LjU3MTkgMTEuMzYyQzIxLjMyNTMgMTEuMzYyIDIyLjk2MjkgMTIuMDY0IDI0LjE4MzkgMTMuMzM4NUwyMi40MjY5IDE1LjA5NTJDMjIuMzA4MiAxNS4yMTQyIDIyLjI3MjYgMTUuMzkzMSAyMi4zMzY3IDE1LjU0ODVDMjIuNDAxNCAxNS43MDQxIDIyLjU1MjggMTUuODA1NSAyMi43MjExIDE1LjgwNTVIMjguNTg0MUMyOC44MTM3IDE1LjgwNTUgMjkuMDAwMiAxNS42MTkxIDI5LjAwMDIgMTUuMzg5NFY5LjUyNjY0QzI5LjAwMDIgOS4zNTg1NCAyOC44OTg0IDkuMjA2ODcgMj'+
			'guNzQzMiA5LjE0MjM4WiIvPgogPHBhdGggZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIgZD0iTTI4LjQ3ODIgMTkuNzE4OEgyNS44MjgzQzI1LjY1MzggMTkuNzE4OCAyNS40OTc1IDE5LjgyNzYgMjUuNDM3NiAxOS45OTE4QzI0LjY2MTggMjIuMTEyNCAyMi43MzQ3IDIzLjczMDggMjAuNTI4MiAyNC4xMTRDMjAuMTY0NSAyNC4xNzcgMTkuNzk0OCAyNC4yMDg4IDE5LjQyOCAyNC4yMDg4QzE3LjY3NDYgMjQuMjA4OCAxNi4wMzY5IDIzLjUwNjkgMTQuODE2MSAyMi4yMzI0TDE2LjU3MjggMjAuNDc1N0MxNi42OTE4IDIwLjM1NjcgMTYuNzI3NCAyMC4xNzc3IDE2LjY2MzEgMjAuMDIyM0MxNi41'+
			'OTg2IDE5Ljg2NjcgMTYuNDQ2OSAxOS43NjU0IDE2LjI3ODYgMTkuNzY1NEgxMC40MTYxQzEwLjE4NjQgMTkuNzY1NCAxMCAxOS45NTE4IDEwIDIwLjE4MTVWMjYuMDQ0NEMxMCAyNi4yMTI3IDEwLjEwMTMgMjYuMzY0NCAxMC4yNTY5IDI2LjQyODlDMTAuNDEyMSAyNi40OTM0IDEwLjU5MTMgMjYuNDU3NiAxMC43MTAzIDI2LjMzODRMMTIuNDQwNCAyNC42MDg1QzE0LjI5NjYgMjYuNTE5IDE2Ljc3NjcgMjcuNTcxMyAxOS40MjQzIDI3LjU3MTNDMTkuOTg0NSAyNy41NzEzIDIwLjU0OTQgMjcuNTIyNCAyMS4xMDMgMjcuNDI2M0MyNC44NzExIDI2Ljc3MTggMjcuOTI0NiAyMy45NTAyIDI4Ljg4MT'+
			'IgMjAuMjM4OUMyOC45MTM1IDIwLjExNDEgMjguODg2IDE5Ljk4MjIgMjguODA3NiAxOS44OEMyOC43Mjg1IDE5Ljc3ODUgMjguNjA3IDE5LjcxODggMjguNDc4MiAxOS43MTg4WiIvPgogPHJlY3Qgd2lkdGg9IjIyIiBoZWlnaHQ9IjUuMTgwODMiIHN0cm9rZS13aWR0aD0iMiIgcng9IjIuNTkwNDIiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcikiIHRyYW5zZm9ybT0icm90YXRlKDYwLjYxNTUgMTYuMTUyMyA2LjYzNzk5KSIgeT0iNi42Mzc5OSIgeD0iMTYuMTUyMyIgc3Ryb2tlPSJ3aGl0ZSIvPgogPGRlZnM+CiAgPGZpbHRlciB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGlkPSJmaWx0ZXIwX2Qi'+
			'IGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeT0iMCIgeD0iMCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KICAgPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiB0eXBlPSJtYXRyaXgiLz4KICAgPGZlT2Zmc2V0IGR5PSIyIi8+CiAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMC'+
			'AwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjE1IDAiIHR5cGU9Im1hdHJpeCIvPgogICA8ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciIG1vZGU9Im5vcm1hbCIvPgogICA8ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiIG1vZGU9Im5vcm1hbCIvPgogIDwvZmlsdGVyPgogIDxsaW5lYXJHcmFkaWVudCB5MT0iOCIgaWQ9InBhaW50MF9saW5lYXIiIHgyPSIxOS41NTI4IiB4MT0iMTkuNTUyOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkyPSIxNS44'+
			'NTIzIj4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGQTY4RCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjRkQzQTg0IiBvZmZzZXQ9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCB5MT0iMTkuNzE4OCIgaWQ9InBhaW50MV9saW5lYXIiIHgyPSIxOS40NDcyIiB4MT0iMTkuNDQ3MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkyPSIyNy41NzEzIj4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGQTY4RCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjRkQzQTg0IiBvZmZzZXQ9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCB5MT'+
			'0iNi4zNDYwNyIgaWQ9InBhaW50Ml9saW5lYXIiIHgyPSIzMi44Nzc3IiB4MT0iMTguOTkxMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkyPSIxNS4zMTM0Ij4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGQTY4RCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjRkQzQTg0IiBvZmZzZXQ9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogPC9kZWZzPgo8L3N2Zz4K';
		me._svg_2__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="Svg 2";
		el.ggDx=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 12px;';
		hs+='height : 42px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		hs+='cursor: pointer;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
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
		me._svg_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_2.style[domTransition]='';
				if (me._svg_2.ggCurrentLogicStateVisible == 0) {
					me._svg_2.style.visibility=(Number(me._svg_2.style.opacity)>0||!me._svg_2.style.opacity)?'inherit':'hidden';
					me._svg_2.ggVisible=true;
				}
				else {
					me._svg_2.style.visibility="hidden";
					me._svg_2.ggVisible=false;
				}
			}
		}
		me._svg_2.onclick=function (e) {
			player.stopAutorotate();
		}
		me._svg_2.onmouseover=function (e) {
			me._svg_2__img.style.visibility='hidden';
			me._svg_2__imgo.style.visibility='inherit';
		}
		me._svg_2.onmouseout=function (e) {
			me._svg_2__img.style.visibility='inherit';
			me._svg_2__imgo.style.visibility='hidden';
			me._svg_2__imga.style.visibility='hidden';
		}
		me._svg_2.onmousedown=function (e) {
			me._svg_2__imga.style.visibility='inherit';
			me._svg_2__imgo.style.visibility='hidden';
		}
		me._svg_2.onmouseup=function (e) {
			me._svg_2__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me._svg_2__img.style.visibility='inherit';
			} else {
				me._svg_2__imgo.style.visibility='inherit';
			}
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
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
		me._controller.appendChild(me._svg_2);
		el=me._buttonzoomout=document.createElement('div');
		els=me._buttonzoomout__img=document.createElement('img');
		els.className='ggskin ggskin_buttonzoomout';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._buttonzoomout__img.ggOverSrc=hs;
		hs='data:image/png;base64,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';
		me._buttonzoomout__img.ggDownSrc=hs;
		el.ggId="ButtonZoomOut";
		el.ggDx=-22;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 12px;';
		hs+='height : 42px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		hs+='cursor: pointer;transition:.3s ease;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._buttonzoomout.ggIsActive=function() {
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
		me._buttonzoomout.onmouseover=function (e) {
			me._buttonzoomout__img.src=me._buttonzoomout__img.ggOverSrc;
		}
		me._buttonzoomout.onmouseout=function (e) {
			me._buttonzoomout__img.src=me._buttonzoomout__img.ggNormalSrc;
			me.elementMouseDown['buttonzoomout']=false;
		}
		me._buttonzoomout.onmousedown=function (e) {
			me._buttonzoomout__img.src=me._buttonzoomout__img.ggDownSrc;
			me.elementMouseDown['buttonzoomout']=true;
		}
		me._buttonzoomout.onmouseup=function (e) {
			if (skin.player.getHasTouch()) {
				me._buttonzoomout__img.src = me._buttonzoomout__img.ggNormalSrc;
			} else {
				me._buttonzoomout__img.src = me._buttonzoomout__img.ggOverSrc;
			}
			me.elementMouseDown['buttonzoomout']=false;
		}
		me._buttonzoomout.ontouchend=function (e) {
			me.elementMouseDown['buttonzoomout']=false;
		}
		me._buttonzoomout.ggUpdatePosition=function (useTransition) {
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
		me._controller.appendChild(me._buttonzoomout);
		el=me._buttonzoomin=document.createElement('div');
		els=me._buttonzoomin__img=document.createElement('img');
		els.className='ggskin ggskin_buttonzoomin';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._buttonzoomin__img.ggOverSrc=hs;
		hs='data:image/png;base64,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';
		me._buttonzoomin__img.ggDownSrc=hs;
		el.ggId="ButtonZoomIn";
		el.ggDx=-72;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 12px;';
		hs+='height : 42px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		hs+='cursor: pointer;transition:.3s ease;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._buttonzoomin.ggIsActive=function() {
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
		me._buttonzoomin.onmouseover=function (e) {
			me._buttonzoomin__img.src=me._buttonzoomin__img.ggOverSrc;
		}
		me._buttonzoomin.onmouseout=function (e) {
			me._buttonzoomin__img.src=me._buttonzoomin__img.ggNormalSrc;
			me.elementMouseDown['buttonzoomin']=false;
		}
		me._buttonzoomin.onmousedown=function (e) {
			me._buttonzoomin__img.src=me._buttonzoomin__img.ggDownSrc;
			me.elementMouseDown['buttonzoomin']=true;
		}
		me._buttonzoomin.onmouseup=function (e) {
			if (skin.player.getHasTouch()) {
				me._buttonzoomin__img.src = me._buttonzoomin__img.ggNormalSrc;
			} else {
				me._buttonzoomin__img.src = me._buttonzoomin__img.ggOverSrc;
			}
			me.elementMouseDown['buttonzoomin']=false;
		}
		me._buttonzoomin.ontouchend=function (e) {
			me.elementMouseDown['buttonzoomin']=false;
		}
		me._buttonzoomin.ggUpdatePosition=function (useTransition) {
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
		me._controller.appendChild(me._buttonzoomin);
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg_3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._svg_3__img.ggOverSrc=hs;
		hs='data:image/png;base64,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';
		me._svg_3__img.ggDownSrc=hs;
		el.ggId="Svg 3";
		el.ggDx=81;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 12px;';
		hs+='height : 42px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		hs+='cursor: pointer;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
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
		me._svg_3.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._svg_3.onmouseover=function (e) {
			me._svg_3__img.src=me._svg_3__img.ggOverSrc;
		}
		me._svg_3.onmouseout=function (e) {
			me._svg_3__img.src=me._svg_3__img.ggNormalSrc;
		}
		me._svg_3.onmousedown=function (e) {
			me._svg_3__img.src=me._svg_3__img.ggDownSrc;
		}
		me._svg_3.onmouseup=function (e) {
			if (skin.player.getHasTouch()) {
				me._svg_3__img.src = me._svg_3__img.ggNormalSrc;
			} else {
				me._svg_3__img.src = me._svg_3__img.ggOverSrc;
			}
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
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
		me._controller.appendChild(me._svg_3);
		me.divSkin.appendChild(me._controller);
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
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggDx=-2.19;
		el.ggDy=-2.71;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup.style[domTransition]='';
				if (me._image_popup.ggCurrentLogicStateVisible == 0) {
					me._image_popup.style.visibility=(Number(me._image_popup.style.opacity)>0||!me._image_popup.style.opacity)?'inherit':'hidden';
					me._image_popup.ggVisible=true;
				}
				else {
					me._image_popup.style.visibility="hidden";
					me._image_popup.ggVisible=false;
				}
			}
		}
		me._image_popup.ggUpdatePosition=function (useTransition) {
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
		el=me._loading_image=document.createElement('div');
		els=me._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0id2hpdGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMTYiPgogIDxhbmltYXRlIGJlZ2luPSIwIiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMT'+
			'YiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSI+CiAgPGFuaW1hdGUgYmVnaW49IjAuMTI1cyIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiPgogIDxhbmltYXRlIGJlZ2luPSIwLjI1cyIgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDsw'+
			'IiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIj4KICA8YW5pbWF0ZSBiZWdpbj0iMC4zNzVzIiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3'+
			'VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiPgogIDxhbmltYXRlIGJlZ2luPSIwLjVzIiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAx'+
			'NiAxNikiPgogIDxhbmltYXRlIGJlZ2luPSIwLjYyNXMiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSI+CiAgPGFuaW1hdGUgYmVnaW49IjAuNzVzIiBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIGtleV'+
			'NwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiPgogIDxhbmltYXRlIGJlZ2luPSIwLjg3NXMiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFz'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSI+CiAgPGFuaW1hdGUgYmVnaW49IjAuNXMiIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
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
		me._loading_image.ggUpdatePosition=function (useTransition) {
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
		me._image_popup.appendChild(me._loading_image);
		el=me._popup_image=document.createElement('div');
		els=me._popup_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._popup_image.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="popup_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
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
		me._popup_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_image.style[domTransition]='';
				if (me._popup_image.ggCurrentLogicStateVisible == 0) {
					me._popup_image.style.visibility=(Number(me._popup_image.style.opacity)>0||!me._popup_image.style.opacity)?'inherit':'hidden';
					me._popup_image.ggSubElement.src=me._popup_image.ggText;
					me._popup_image.ggVisible=true;
				}
				else {
					me._popup_image.style.visibility="hidden";
					me._popup_image__img.src = '';
					me._popup_image.ggVisible=false;
				}
			}
		}
		me._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var img = me._popup_image__img;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = parentHeight * aspectRatioImg;
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = parentWidth / aspectRatioImg;
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._image_popup.appendChild(me._popup_image);
		me.divSkin.appendChild(me._image_popup);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
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
		me._information.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width >= 1024))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._information.ggCurrentLogicStateSize != newLogicStateSize) {
				me._information.ggCurrentLogicStateSize = newLogicStateSize;
				me._information.style[domTransition]='width 0s, height 0s';
				if (me._information.ggCurrentLogicStateSize == 0) {
					me._information.style.width='800px';
					me._information.style.height='600px';
					skin.updateSize(me._information);
				}
				else {
					me._information.style.width='300px';
					me._information.style.height='250px';
					skin.updateSize(me._information);
				}
			}
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
				me._information.style[domTransition]='width 0s, height 0s';
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
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 3px;';
		hs+='border-radius : 3px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 400px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
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
		me._information_bg.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width >= 1024))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._information_bg.ggCurrentLogicStateSize != newLogicStateSize) {
				me._information_bg.ggCurrentLogicStateSize = newLogicStateSize;
				me._information_bg.style[domTransition]='width 0s, height 0s';
				if (me._information_bg.ggCurrentLogicStateSize == 0) {
					me._information_bg.style.width='800px';
					me._information_bg.style.height='600px';
					skin.updateSize(me._information_bg);
				}
				else {
					me._information_bg.style.width='300px';
					me._information_bg.style.height='400px';
					skin.updateSize(me._information_bg);
				}
			}
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
		hs+='height : 333px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : -29px;';
		hs+='visibility : inherit;';
		hs+='width : 260px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 260px;';
		hs+='height: 333px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(51,51,51,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 20px 21px 20px 21px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_body.ggUpdateText=function() {
			var hs=player.hotspot.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._info_text_body.ggUpdateText();
		});
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
		me._info_text_body.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width >= 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._info_text_body.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._info_text_body.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._info_text_body.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._info_text_body.ggCurrentLogicStatePosition == 0) {
					me._info_text_body.style.left='20px';
					me._info_text_body.style.top='50px';
				}
				else {
					me._info_text_body.style.left='20px';
					me._info_text_body.style.top='-29px';
				}
			}
		}
		me._info_text_body.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width >= 1024))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._info_text_body.ggCurrentLogicStateSize != newLogicStateSize) {
				me._info_text_body.ggCurrentLogicStateSize = newLogicStateSize;
				me._info_text_body__text.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._info_text_body.ggCurrentLogicStateSize == 0) {
					me._info_text_body__text.style.width='700px';
					me._info_text_body__text.style.height='500px';
					skin.updateSize(me._info_text_body);
				}
				else {
					me._info_text_body__text.style.width='260px';
					me._info_text_body__text.style.height='333px';
					skin.updateSize(me._info_text_body);
				}
			}
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_popup_close=document.createElement('div');
		els=me._info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0x'+
			'LjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMt'+
			'MC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._info_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40'+
			'LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAu'+
			'NC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 11px;';
		hs+='top : -66px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
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
		me._info_popup_close.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width >= 1024))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._info_popup_close.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._info_popup_close.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._info_popup_close.style[domTransition]='right 0s, top 0s';
				if (me._info_popup_close.ggCurrentLogicStatePosition == 0) {
					me._info_popup_close.style.right='11px';
					me._info_popup_close.style.top='20px';
				}
				else {
					me._info_popup_close.style.right='11px';
					me._info_popup_close.style.top='-66px';
				}
			}
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
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 214px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.ggActivate=function () {
			player.setVariableValue('vis_timer', true);
		}
		me._timer_1.ggDeactivate=function () {
			player.setVariableValue('vis_timer', false);
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('imagesready', function() {
			me._timer_1.ggTimestamp=me.ggCurrentTime;
			me._timer_1.ggTimeout=500;
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
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
				if (hotspotTemplates['ht_node'][i]._nodeicon && hotspotTemplates['ht_node'][i]._nodeicon.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._nodeicon.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node'][i]._nodeicon && hotspotTemplates['ht_node'][i]._nodeicon.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._nodeicon.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._hotspot_preview && hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible();
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
	me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_tooltip && hotspotTemplates['ht_node'][i]._ht_tooltip.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_tooltip.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._nodeicon && hotspotTemplates['ht_node'][i]._nodeicon.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._nodeicon.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node'][i]._nodeicon && hotspotTemplates['ht_node'][i]._nodeicon.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._nodeicon.logicBlock_alpha();
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
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['buttonzoomout']) {
			player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['buttonzoomin']) {
			player.changeFovLog(-1,true);
		}
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('vis_timer', true);
			} else {
				player.setVariableValue('vis_timer', false);
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
			skin._popup_image.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._popup_image.ggSubElement.style.width = '0px';
			skin._popup_image.ggSubElement.style.height = '0px';
			skin._popup_image.ggSubElement.src='';
			skin._popup_image.ggSubElement.src=skin._popup_image.ggText;
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDUgMzQiIHdpZHRoPSI0NSIgaGVpZ2h0PSIzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxyZWN0IHdpZHRoPSI0NSIgaGVpZ2h0PSIzNCIgcng9IjQiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KIDxwYXRoIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiIGQ9Ik0zNC4yODU3IDZIMTAuNzE0M0M5Ljc2NzYgNiA5IDYuNzY3NTUgOSA3LjcxNDI3VjI1LjI4NThDOSAyNi4yMzI0IDkuNzY3NiAyNyAxMC43MTQzIDI3SDM0LjI4NTdDMzUuMjMyNSAyNyAzNi4wMDAxIDI2LjIzMjQgMzYuMDAwMSAyNS4yODU3Vj'+
			'cuNzE0MjdDMzYuMDAwMSA2Ljc2NzU1IDM1LjIzMjYgNiAzNC4yODU3IDZaTTM0LjI4NTcgNy43MTQyN1YyMC4xODE4TDMwLjkwNzMgMTcuMTEwM0MzMC4zOTk1IDE2LjY0ODcgMjkuNjE4NiAxNi42NjcxIDI5LjEzMzUgMTcuMTUyN0wyNS43MTQzIDIwLjU3MTRMMTguOTcyNSAxMi41MTg1QzE4LjQ2MjkgMTEuOTEgMTcuNTI5NCAxMS45MDQgMTcuMDEyMiAxMi41MDUzTDEwLjcxNDMgMTkuODI0NFY3LjcxNDI3SDM0LjI4NTdaTTI3LjAwMDEgMTIuMjE0M0MyNy4wMDAxIDEwLjkxMjMgMjguMDU1MSA5Ljg1NzEyIDI5LjM1NzIgOS44NTcxMkMzMC42NTkyIDkuODU3MTIgMzEuNzE0MyAxMC45MTIz'+
			'IDMxLjcxNDMgMTIuMjE0M0MzMS43MTQzIDEzLjUxNjMgMzAuNjU5MyAxNC41NzE0IDI5LjM1NzIgMTQuNTcxNEMyOC4wNTUyIDE0LjU3MTQgMjcuMDAwMSAxMy41MTYzIDI3LjAwMDEgMTIuMjE0M1oiLz4KIDxkZWZzPgogIDxsaW5lYXJHcmFkaWVudCB5MT0iMCIgaWQ9InBhaW50MF9saW5lYXIiIHgyPSIyMi41IiB4MT0iMjIuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkyPSIzNCI+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiM5Q0VGQTAiLz4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzQ0QjU4QyIgb2Zmc2V0PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8bGluZWFyR3JhZG'+
			'llbnQgeTE9IjYiIGlkPSJwYWludDFfbGluZWFyIiB4Mj0iMjIuNTAwMSIgeDE9IjIyLjUwMDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5Mj0iMjciPgogICA8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjOTdFQzlGIiBvZmZzZXQ9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogPC9kZWZzPgo8L3N2Zz4K';
		me._ht_image_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDUgMzQiIHdpZHRoPSI0NSIgaGVpZ2h0PSIzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxyZWN0IHdpZHRoPSI0NSIgaGVpZ2h0PSIzNCIgcng9IjQiIGZpbGw9IndoaXRlIi8+CiA8cGF0aCBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIiBkPSJNMzQuMjg1NyA2SDEwLjcxNDNDOS43Njc2IDYgOSA2Ljc2NzU1IDkgNy43MTQyN1YyNS4yODU4QzkgMjYuMjMyNCA5Ljc2NzYgMjcgMTAuNzE0MyAyN0gzNC4yODU3QzM1LjIzMjUgMjcgMzYuMDAwMSAyNi4yMzI0IDM2LjAwMDEgMjUuMjg1N1Y3LjcxNDI3QzM2LjAwMD'+
			'EgNi43Njc1NSAzNS4yMzI2IDYgMzQuMjg1NyA2Wk0zNC4yODU3IDcuNzE0MjdWMjAuMTgxOEwzMC45MDczIDE3LjExMDNDMzAuMzk5NSAxNi42NDg3IDI5LjYxODYgMTYuNjY3MSAyOS4xMzM1IDE3LjE1MjdMMjUuNzE0MyAyMC41NzE0TDE4Ljk3MjUgMTIuNTE4NUMxOC40NjI5IDExLjkxIDE3LjUyOTQgMTEuOTA0IDE3LjAxMjIgMTIuNTA1M0wxMC43MTQzIDE5LjgyNDRWNy43MTQyN0gzNC4yODU3Wk0yNy4wMDAxIDEyLjIxNDNDMjcuMDAwMSAxMC45MTIzIDI4LjA1NTEgOS44NTcxMiAyOS4zNTcyIDkuODU3MTJDMzAuNjU5MiA5Ljg1NzEyIDMxLjcxNDMgMTAuOTEyMyAzMS43MTQzIDEyLjIx'+
			'NDNDMzEuNzE0MyAxMy41MTYzIDMwLjY1OTMgMTQuNTcxNCAyOS4zNTcyIDE0LjU3MTRDMjguMDU1MiAxNC41NzE0IDI3LjAwMDEgMTMuNTE2MyAyNy4wMDAxIDEyLjIxNDNaIi8+CiA8ZGVmcz4KICA8bGluZWFyR3JhZGllbnQgeTE9IjYiIGlkPSJwYWludDBfbGluZWFyIiB4Mj0iMjIuNTAwMSIgeDE9IjIyLjUwMDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5Mj0iMjciPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjOUJFRUEwIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiM0QUI4OEUiIG9mZnNldD0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+Cjwvc3ZnPgo=';
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
		hs+='cursor: pointer;';
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
		el.ggDx=-4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 109px;';
		hs+='visibility : inherit;';
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
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._hotspot_preview.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodeicon=document.createElement('div');
		els=me._nodeicon__img=document.createElement('img');
		els.className='ggskin ggskin_nodeicon';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._nodeicon__img.ggOverSrc=hs;
		hs='data:image/png;base64,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';
		me._nodeicon__img.ggDownSrc=hs;
		el.ggId="nodeIcon";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.75,sy:0.75 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : -64px;';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		hs+='cursor:pointer; animation: myfirst 1s linear 1s infinite; @keyframes myfirst { 0% { transform: scale(1); } 100% { transform: scale(1.4); } }';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._nodeicon.ggIsActive=function() {
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
		me._nodeicon.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeicon.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeicon.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeicon.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._nodeicon.ggCurrentLogicStateScaling == 0) {
					me._nodeicon.ggParameter.sx = 1;
					me._nodeicon.ggParameter.sy = 1;
					me._nodeicon.style[domTransform]=parameterToTransform(me._nodeicon.ggParameter);
				}
				else {
					me._nodeicon.ggParameter.sx = 0.75;
					me._nodeicon.ggParameter.sy = 0.75;
					me._nodeicon.style[domTransform]=parameterToTransform(me._nodeicon.ggParameter);
				}
			}
		}
		me._nodeicon.logicBlock_alpha = function() {
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
			if (me._nodeicon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeicon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeicon.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._nodeicon.ggCurrentLogicStateAlpha == 0) {
					me._nodeicon.style.visibility=me._nodeicon.ggVisible?'inherit':'hidden';
					me._nodeicon.style.opacity=0.5;
				}
				else {
					me._nodeicon.style.visibility=me._nodeicon.ggVisible?'inherit':'hidden';
					me._nodeicon.style.opacity=1;
				}
			}
		}
		me._nodeicon.onmouseover=function (e) {
			me._nodeicon__img.src=me._nodeicon__img.ggOverSrc;
		}
		me._nodeicon.onmouseout=function (e) {
			me._nodeicon__img.src=me._nodeicon__img.ggNormalSrc;
		}
		me._nodeicon.onmousedown=function (e) {
			me._nodeicon__img.src=me._nodeicon__img.ggDownSrc;
		}
		me._nodeicon.onmouseup=function (e) {
			if (skin.player.getHasTouch()) {
				me._nodeicon__img.src = me._nodeicon__img.ggNormalSrc;
			} else {
				me._nodeicon__img.src = me._nodeicon__img.ggOverSrc;
			}
		}
		me._nodeicon.ggUpdatePosition=function (useTransition) {
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
		me._ht_node.appendChild(me._nodeicon);
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
		hs+='top : -100px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0zNzIyIC0yNjA2IDMyIDMyIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLy'+
			'IgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgdmVyc2lvbj0iMS4xIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4PSIwcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTM3MjIgLTI2MDYgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5'+
			'NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5Ij4KICAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIGQ9IiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O00tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuOD'+
			'c5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgc3Ry'+
			'b2tlPSIjMUExNzFCIi8+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBkPSImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aD'+
			'E0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibm9ybWFsIiBzdHJva2U9IiMxQTE3MUIiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAy'+
			'Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOC'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYmI3hkOyYj'+
			'eGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMz'+
			'Y5NS40NzMtMjU5OC4xNDZ6IiBzdHJva2U9IiMxQTE3MUIiLz4KICAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNjYsMC41'+
			'MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgc3Ryb2tlPSIjMUExNzFCIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		el.ggDx=101;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
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
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup', true);
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
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg_4';
		hs='data:image/png;base64,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'+
			'Jggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAEkklEQVRogd2bwWtcVRSHvzPzalCnqYkNCCbSRSXpugoBq9LgykLT6h8gulOsLkXoLgVT60YqunTRvWkkzaqIGhcptCvFNCg0JCkINlEz02BnJvNzcd+kycvMe8PMvY7mgwOZeZd37i/33ffOO+eM4RlJB4DngReAY8AwMAgcBArxsBJQBFaARWAB+AG4aWZV33PqGEk9kl6XdFVSSe1TlDQl6TVJPd3WhaQBSRckrXUgqhlr8bkHuiGsIOmipM0AwpLclzQpqZA9Mz/izkpa/ReEJVmWdDqksLykS10QluQjSXnf4g5Jmu2ysJ3MSOr1Je5ZSQtdFtSInyUdzZq/ZYkD5oF+L/8t/6wDo2b2S7MBuWYHJB0CpvEoTrF5pB+YjufakIYrKLeJp4FTPm'+
			'ax9CfM34XfSu7zUwUYfRqOPOHj7ADMAqfNbCt5oJnASeADH57nfnXWiBePOvPEx2a2Z857BEoaB6768LhyD778Jv2ifHPMGDrswxsAZ81s19x37UG5aOEzX95u/CiqG6TajZ+87srLSkQ8yZvMeVzk74XlJaj+lW7Ld3x5A9zcz+/8Iqr/IRfUvufTW74MlY2MMf4jzHOSPjGze7B7Bd8HHvXpafBw+uVZ3XBjPPMYTgsQC5R793rbt6exk0a+LKobjS1fFmMnU2ONdnkn1rS9gqcIEK309cMbbxk9W3v3Xs+WO9YXJkbqJ36GG4CkKeBMEFfAxh/w/axYWnSfjwzDS68avX2hPAIwbWZnTC6Hss7DfMl+oQT054Dj7D9x4DQ9lwNOdHsmATkR4VJ7QVhYg+9WoVprfDzKwcuDcOzJUDNgJMLlLYPw7R0oPsgeE1Dg'+
			'cAQMhTp7+W+oVTLGeH5BTDAU4TLOQaiVswXWwgosRAS8g9YqTmTqmFDOHQej7DHto7Kz1DEhJ4B7mygBQWKKWkXZK2iQkfvqhGKEq/IEEahy9iWqYNqAWOAq8EyIs7e0B5vm9bywksPV54JQ34NZFpDFCFd8DEKthUs08ArejnCV1SDUylDLiGQCC5yLgJvAfeBx32dvaQX91ol2UgRu5cysAlwP4UGVFvZgRqTTAdfNrFq/QK6E8FB/TKRZwJvMFXiYNpzBvdV7zZC09Jg44NPjNuvANYiTTmb2APjCt5es1Wtlj7bJ52ZWht150U+BTZ9eVBEqZ1jFezS6idMC7BBoZr/jsS4BXVvBy/WsNuytTUwAd315qu/BVPN7F10BLuz8YpdAMysB53x5qz1ozTzybqxhmz1xhJlNAZd8eMsr+zmY97cFJ83s6+SXzQKlD3'+
			'Fl4Y54ZdygmrL3qvGYzpkhUTar0/TscWF/HhjpxHO1AltN+gfzEUSdPwcXcJ0WDQt1//c2kjWcuCZdACltJABx/8koAV+pOqC+ck3FtYykXrn2qf8K15TSG9OuyLxcI1y3uSjfzXgJoeOSVrogbEVSsBpmUmRBrkl1/zXEJoQOSJpQuJbmCXWjpbmB0EfkOoG/kmssb5eiXGO7t6Z072lXuZL4cVxhdQRXnhvCFXnqhZ4iLqNe/1nBbWAOuBWnULzxD4d7TyXjmXYMAAAAAElFTkSuQmCC';
		me._svg_4__img.ggOverSrc=hs;
		hs='data:image/png;base64,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'+
			'Jggg==';
		me._svg_4__img.ggDownSrc=hs;
		el.ggId="Svg 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : -66px;';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		hs+='cursor: pointer;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_4.ggIsActive=function() {
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
		me._svg_4.onclick=function (e) {
			skin._information.style[domTransition]='none';
			skin._information.style.visibility=(Number(skin._information.style.opacity)>0||!skin._information.style.opacity)?'inherit':'hidden';
			skin._information.ggVisible=true;
		}
		me._svg_4.onmouseover=function (e) {
			me._svg_4__img.src=me._svg_4__img.ggOverSrc;
		}
		me._svg_4.onmouseout=function (e) {
			me._svg_4__img.src=me._svg_4__img.ggNormalSrc;
		}
		me._svg_4.onmousedown=function (e) {
			me._svg_4__img.src=me._svg_4__img.ggDownSrc;
		}
		me._svg_4.onmouseup=function (e) {
			if (skin.player.getHasTouch()) {
				me._svg_4__img.src = me._svg_4__img.ggNormalSrc;
			} else {
				me._svg_4__img.src = me._svg_4__img.ggOverSrc;
			}
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
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
		me._ht_info.appendChild(me._svg_4);
		el=me._text=document.createElement('div');
		els=me._text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="text";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 89px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #999999;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(51,51,51,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 11px 12px 11px 12px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text.ggIsActive=function() {
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
		me._text.ggUpdatePosition=function (useTransition) {
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
		me._ht_info.appendChild(me._text);
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
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup();;
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
			me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();;
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
	me._information.logicBlock_size();
	me._information_bg.logicBlock_size();
	me._info_text_body.logicBlock_position();
	me._info_text_body.logicBlock_size();
	me._info_popup_close.logicBlock_position();
	me._svg_1.logicBlock_visible();
	me._svg_2.logicBlock_visible();
	me._screentint_info.logicBlock_visible();
	me._image_popup.logicBlock_visible();
	me._popup_image.logicBlock_visible();
	me._information.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._information.logicBlock_size();me._information_bg.logicBlock_size();me._info_text_body.logicBlock_position();me._info_text_body.logicBlock_size();me._info_popup_close.logicBlock_position(); });
	player.addListener('changenode', function(args) { me._svg_1.logicBlock_visible();me._svg_2.logicBlock_visible();me._screentint_info.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._information.logicBlock_visible(); });
	player.addListener('autorotatechanged', function(args) { me._svg_1.logicBlock_visible();me._svg_2.logicBlock_visible(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._screentint_info.logicBlock_visible();me._information.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_image_changenode();me.callChildLogicBlocksHotspot_ht_node_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_image_configloaded();me.callChildLogicBlocksHotspot_ht_node_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_image_mouseover();me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_active(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_ht_node_changevisitednodes(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_ht_image_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged(); });
	player.addListener('varchanged_vis_userdata', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup(); });
	player.addListener('varchanged_vis_video_popup_file', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file(); });
	player.addListener('varchanged_vis_video_popup_url', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url(); });
	player.addListener('varchanged_vis_video_popup_vimeo', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo(); });
	player.addListener('varchanged_vis_video_popup_youtube', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube(); });
	player.addListener('varchanged_vis_website', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website(); });
	player.addListener('varchanged_vis_timer', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_timer(); });
	player.addListener('varchanged_opt_hotspot_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};