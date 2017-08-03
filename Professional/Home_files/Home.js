// Created by iWeb 3.0.4 local-build-20130601

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,184),url:'Home_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Home_files/stroke_1.png'},{rect:new IWRect(5,-5,378,10),url:'Home_files/stroke_2.png'},{rect:new IWRect(383,-5,10,10),url:'Home_files/stroke_3.png'},{rect:new IWRect(383,5,10,184),url:'Home_files/stroke_4.png'},{rect:new IWRect(383,189,10,10),url:'Home_files/stroke_5.png'},{rect:new IWRect(5,189,378,10),url:'Home_files/stroke_6.png'},{rect:new IWRect(-5,189,10,10),url:'Home_files/stroke_7.png'}],new IWSize(388,194))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id5');applyEffects()}
function onPageUnload()
{Widget.onunload();}
