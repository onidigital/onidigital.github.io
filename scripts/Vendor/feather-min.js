function Feather(a){function c(a,b){for(var c in b.settings)b.settings.hasOwnProperty(c)&&(a.settings[c]=b.settings[c]);for(var c in b.expressions)b.expressions.hasOwnProperty(c)&&(a.expressions[c]=b.expressions[c])}function i(a,b,d){function r(){if(q){var a=g;if(c(f,d),g=f.settings["validation-event"],h=f.settings.error,i=f.settings.hide,tooltip=f.settings.tooltip,k=f.settings.success,l=e.querySelectorAll("input[feather-type]"),m=e.querySelector("input[type=submit]"),a!==g)for(n=0;o>n;n++)l[n].removeEventListener(s),l[n].addEventListener(g,s);q=!1}}function s(a){this!==window&&(a=this);var b=a.getAttribute("feather-type"),c=f.expressions[b].expression;if(f.expressions[b].message,j)var e=a.parentNode.querySelector("[feather-tooltip]");return c.test(a.value)?(a.classList.remove(h),j&&e.classList.add(i),!0):(a.classList.add(h),j&&e.classList.remove(i),a.hasAttribute("feather-optional")?!0:!1)}function t(a){a.preventDefault();for(var b=0,c=l.length,d=!1,e=!0;c>b;b++)d=s(l[b]),d||(e=!1);e&&k()}function u(a){var b=a.getAttribute("feather-type"),c=f.expressions[b].message,d=p.createElement("div"),e=p.createElement("div"),g=p.createElement("p");a.parentNode.insertBefore(d,a),d.appendChild(a),d.appendChild(e),d.setAttribute("feather-tooltip-container",""),e.appendChild(g),e.classList.add(i),e.setAttribute("feather-tooltip",""),g.innerHTML=c}var e=a,f=b,g=f.settings["validation-event"],h=f.settings.error,i=f.settings.hide,j=f.settings.tooltip,k=f.settings.success,l=e.querySelectorAll("input[feather-type]"),m=e.querySelector("input[type=submit]"),n=0,o=l.length,p=document,q=!0;if("submit"!==g)for(;o>n;n++)l[n].addEventListener(g,s);if(j)for(n=0;o>n;n++)u(l[n]);m.addEventListener("click",t),d&&q&&m.addEventListener("click",r)}a=a||{};var b={expressions:{password:{expression:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,message:"The password must be at least eight digits long, with upper case and lower case, and numbers."},number:{expression:/^[0-9]+$/,message:"This input will accept only non-decimal numbers."},phone:{expression:/^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/,message:"Please enter a phone number with one of the following formats: 65 12345678, 65 123-45678, +65-12345678."},email:{expression:/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/,message:"Please enter a valid e-mail."},url:{expression:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,message:"Please enter a valid url."}},settings:{error:"feather-error",success:{},hide:"feather-hide","validation-event":"change",tooltip:!0}};c(b,a);for(var d=document,e=d.querySelectorAll("form[feather-validate]"),f=[],g=0,h=e.length;h>g;g++)f.push(new i(e[g],b,a["after-validate"]))}