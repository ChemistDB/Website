// Created by iWeb 3.0.4 local-build-20120917

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,160),url:'Outreach_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Outreach_files/stroke_1.png'},{rect:new IWRect(5,-5,216,10),url:'Outreach_files/stroke_2.png'},{rect:new IWRect(221,-5,11,10),url:'Outreach_files/stroke_3.png'},{rect:new IWRect(221,5,11,160),url:'Outreach_files/stroke_4.png'},{rect:new IWRect(221,165,11,10),url:'Outreach_files/stroke_5.png'},{rect:new IWRect(5,165,216,10),url:'Outreach_files/stroke_6.png'},{rect:new IWRect(-5,165,10,10),url:'Outreach_files/stroke_7.png'}],new IWSize(227,170))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Outreach_files/OutreachMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
