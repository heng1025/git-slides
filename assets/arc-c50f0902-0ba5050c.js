import{c as Q,p as sn}from"./constant-b644328d-6af51708.js";import{bq as en,br as y,aQ as ln,bs as F,bt as P,bu as J,bv as k,bw as rn,bx as un,by as t,bz as an,bA as on,bB as tn}from"./index-81d44306.js";function fn(l){return l.innerRadius}function cn(l){return l.outerRadius}function yn(l){return l.startAngle}function gn(l){return l.endAngle}function mn(l){return l&&l.padAngle}function pn(l,x,z,q,h,v,S,r){var i=z-l,n=q-x,m=S-h,s=r-v,u=s*i-m*n;if(!(u*u<y))return u=(m*(x-v)-s*(l-h))/u,[l+u*i,x+u*n]}function U(l,x,z,q,h,v,S){var r=l-z,i=x-q,n=(S?v:-v)/J(r*r+i*i),m=n*i,s=-n*r,u=l+m,f=x+s,c=z+m,B=q+s,o=(u+c)/2,D=(f+B)/2,p=c-u,g=B-f,A=p*p+g*g,E=h-v,T=u*B-c*f,I=(g<0?-1:1)*J(tn(0,E*E*A-T*T)),O=(T*g-p*I)/A,d=(-T*p-g*I)/A,R=(T*g+p*I)/A,b=(-T*p+g*I)/A,e=O-o,a=d-D,j=R-o,C=b-D;return e*e+a*a>j*j+C*C&&(O=R,d=b),{cx:O,cy:d,x01:-m,y01:-s,x11:O*(h/E-1),y11:d*(h/E-1)}}function hn(){var l=fn,x=cn,z=Q(0),q=null,h=yn,v=gn,S=mn,r=null;function i(){var n,m,s=+l.apply(this,arguments),u=+x.apply(this,arguments),f=h.apply(this,arguments)-en,c=v.apply(this,arguments)-en,B=rn(c-f),o=c>f;if(r||(r=n=sn()),u<s&&(m=u,u=s,s=m),!(u>y))r.moveTo(0,0);else if(B>ln-y)r.moveTo(u*F(f),u*P(f)),r.arc(0,0,u,f,c,!o),s>y&&(r.moveTo(s*F(c),s*P(c)),r.arc(0,0,s,c,f,o));else{var D=f,p=c,g=f,A=c,E=B,T=B,I=S.apply(this,arguments)/2,O=I>y&&(q?+q.apply(this,arguments):J(s*s+u*u)),d=k(rn(u-s)/2,+z.apply(this,arguments)),R=d,b=d,e,a;if(O>y){var j=an(O/s*P(I)),C=an(O/u*P(I));(E-=j*2)>y?(j*=o?1:-1,g+=j,A-=j):(E=0,g=A=(f+c)/2),(T-=C*2)>y?(C*=o?1:-1,D+=C,p-=C):(T=0,D=p=(f+c)/2)}var G=u*F(D),H=u*P(D),K=s*F(A),L=s*P(A);if(d>y){var M=u*F(p),N=u*P(p),V=s*F(g),W=s*P(g),w;if(B<un&&(w=pn(G,H,V,W,M,N,K,L))){var X=G-w[0],Y=H-w[1],Z=M-w[0],$=N-w[1],_=1/P(on((X*Z+Y*$)/(J(X*X+Y*Y)*J(Z*Z+$*$)))/2),nn=J(w[0]*w[0]+w[1]*w[1]);R=k(d,(s-nn)/(_-1)),b=k(d,(u-nn)/(_+1))}}T>y?b>y?(e=U(V,W,G,H,u,b,o),a=U(M,N,K,L,u,b,o),r.moveTo(e.cx+e.x01,e.cy+e.y01),b<d?r.arc(e.cx,e.cy,b,t(e.y01,e.x01),t(a.y01,a.x01),!o):(r.arc(e.cx,e.cy,b,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,u,t(e.cy+e.y11,e.cx+e.x11),t(a.cy+a.y11,a.cx+a.x11),!o),r.arc(a.cx,a.cy,b,t(a.y11,a.x11),t(a.y01,a.x01),!o))):(r.moveTo(G,H),r.arc(0,0,u,D,p,!o)):r.moveTo(G,H),!(s>y)||!(E>y)?r.lineTo(K,L):R>y?(e=U(K,L,M,N,s,-R,o),a=U(G,H,V,W,s,-R,o),r.lineTo(e.cx+e.x01,e.cy+e.y01),R<d?r.arc(e.cx,e.cy,R,t(e.y01,e.x01),t(a.y01,a.x01),!o):(r.arc(e.cx,e.cy,R,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(a.cy+a.y11,a.cx+a.x11),o),r.arc(a.cx,a.cy,R,t(a.y11,a.x11),t(a.y01,a.x01),!o))):r.arc(0,0,s,A,g,o)}if(r.closePath(),n)return r=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +x.apply(this,arguments))/2,m=(+h.apply(this,arguments)+ +v.apply(this,arguments))/2-un/2;return[F(m)*n,P(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:Q(+n),i):l},i.outerRadius=function(n){return arguments.length?(x=typeof n=="function"?n:Q(+n),i):x},i.cornerRadius=function(n){return arguments.length?(z=typeof n=="function"?n:Q(+n),i):z},i.padRadius=function(n){return arguments.length?(q=n==null?null:typeof n=="function"?n:Q(+n),i):q},i.startAngle=function(n){return arguments.length?(h=typeof n=="function"?n:Q(+n),i):h},i.endAngle=function(n){return arguments.length?(v=typeof n=="function"?n:Q(+n),i):v},i.padAngle=function(n){return arguments.length?(S=typeof n=="function"?n:Q(+n),i):S},i.context=function(n){return arguments.length?(r=n??null,i):r},i}export{hn as d};
