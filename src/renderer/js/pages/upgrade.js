import { icon } from '../icons.js';
import { S, loginFlow } from '../app.js';

// Woof Tweaks is free for everyone: this page only explains that, and offers sign-in when needed.
export function render() {
  const total = S.tweaks.filter((t) => !t.hidden && t.status !== 'na').length;
  return `<div class="page">
    <div class="page-head"><div><h1>Free for everyone</h1><p>Every tweak, game profile and tool in Woof Tweaks is included with your free Woof account — no plans, no payments, no subscription.</p></div></div>
    ${S.session.signedIn ? '' : `<div class="note info" style="margin-bottom:16px">${icon('user')}<div style="flex:1">Sign in with your free Woof account to start using tweaks.</div><button class="btn sm primary" id="login">Log in</button></div>`}
    <div class="card pad"><div class="row wrap" style="gap:14px"><span class="icon-wrap" style="width:40px;height:40px;border-radius:12px;display:grid;place-items:center;background:rgba(var(--accent-rgb),.14);color:var(--accent)">${icon('check')}</span><div style="flex:1;min-width:240px"><b>${total} tweaks available on this PC</b><div class="muted small">Every change is backed up first and can be reverted in one click. A restore point is created before system changes.</div></div></div></div>
  </div>`;
}
export function mount(root) {
  const l = root.querySelector('#login'); if (l) l.onclick = loginFlow;
}
