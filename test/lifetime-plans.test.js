const test=require('node:test'),assert=require('node:assert/strict');
const {canUse,PLAN_ORDER,PLAN_PRICES}=require('../src/core/plans');
const tiers=require('../src/config/tiers');
test('unpaid and unknown plans cannot run even a core tweak',()=>{
 for(const plan of ['free','fake',null])for(const required of ['good','plus','pro','ultra','lifetime','free'])assert.equal(canUse(plan,required),false);
 assert.equal(canUse('lifetime','fake'),false);
});
test('each purchased tier adds features and Max includes the complete catalogue',()=>{
 let previous=0;
 for(const plan of PLAN_ORDER.filter(p=>p!=='free')){
  const count=Object.values(tiers.TWEAKS).filter(required=>canUse(plan,required)).length;
  assert.ok(count>previous,plan+' should add tweaks'); previous=count;
 }
 assert.equal(previous,Object.keys(tiers.TWEAKS).length);
});
test('Woof Tweaks is free: no plan shows a price',()=>{
 for(const p of PLAN_ORDER.filter(p=>p!=='free'))assert.equal(PLAN_PRICES[p],'Free');
 assert.doesNotMatch(Object.values(PLAN_PRICES).join(' '),/\$|USD|once/);
});
