(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"1kZA":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var a=n("E/Ix"),r=n("hhGP");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/method/audio.getRecommendations.mdx"}});var c={_frontmatter:i},l=r.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(l,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"audiogetrecommendations"},"audio.getRecommendations"),Object(a.b)("p",null,"Get suggested audios"),Object(a.b)("p",null,"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Value"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"user_id (optional)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"User id for which similar audios will be returned")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"target_audio (optional)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Audio (owner and id) for which similar audios will be returned, if not specified, then recommendations for the specified user will be returned")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"count (optional)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Maximum number of audios to return")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"offset (optional)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Offset to skip that number of audios")))),Object(a.b)("p",null,"Example (Kate):"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-php"}),'\n$targetAudio = "371745461_456289486";\n\ncurl_setopt(\n    $ch,\n    CURLOPT_URL,\n    "https://api.vk.com/method/audio.getRecommendations?access_token=".TOKEN.\n    "&target_audio=$targetAudio&count=10&offset=20&v=5.95"\n);\n\n')),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-php"}),"<?php\n\ninclude __DIR__.'/../../autoloader.php';\n\nuse Vodka2\\VKAudioToken\\SupportedClients;\n\n//Token obtained by example_microg.php script\ndefine('TOKEN', $argv[1]);\ndefine('USER_AGENT', SupportedClients::Kate()->getUserAgent());\n$ch = curl_init();\n\ncurl_setopt($ch,CURLOPT_HTTPHEADER, array('User-Agent: '.USER_AGENT));\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n\n$targetAudio = \"371745461_456289486\";\n\ncurl_setopt(\n    $ch,\n    CURLOPT_URL,\n    \"https://api.vk.com/method/audio.getRecommendations?access_token=\".TOKEN.\n    \"&target_audio=$targetAudio&count=10&offset=20&v=5.95\"\n);\n\necho json_encode(json_decode(curl_exec($ch)), JSON_PRETTY_PRINT).\"\\n\\n\";\n")))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/method/audio.getRecommendations.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-method-audio-get-recommendations-mdx-5026a796d2a82d9f88a1.js.map