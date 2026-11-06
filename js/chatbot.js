// DocsBot chat widget, included on every page.
// The loader below is DocsBot's official embed code
// (https://docsbot.ai/documentation/developer/embeddable-chat-widget);
// the bot answers from course-facts.html. The id is "teamId/botId" from the DocsBot dashboard.

window.DocsBotAI=window.DocsBotAI||{},DocsBotAI.init=function(e){return new Promise((t,r)=>{var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://widget.docsbot.ai/chat.js";let o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o),n.addEventListener("load",()=>{let n;Promise.all([new Promise((t,r)=>{window.DocsBotAI.mount(Object.assign({}, e)).then(t).catch(r)}),(n=function e(t){return new Promise(e=>{if(document.querySelector(t))return e(document.querySelector(t));let r=new MutationObserver(n=>{if(document.querySelector(t))return e(document.querySelector(t)),r.disconnect()});r.observe(document.body,{childList:!0,subtree:!0})})})("#docsbotai-root"),]).then(()=>t()).catch(r)}),n.addEventListener("error",e=>{r(e.message)})})};

DocsBotAI.init({ id: "3wPrSpYf5T37KXaitDcp/3BYebRS2muIW17KviFSA" });
