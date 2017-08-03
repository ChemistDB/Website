// Created by iWeb 3.0.4 local-build-20130601

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id9" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="259" height="212" style="height: 212px; left: 15px; position: absolute; top: 429px; width: 259px; z-index: 1; "><param name="src" value="Media/testpov.mpg" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id9" type="video/quicktime" width="259" height="212" style="height: 212px; left: 15px; position: absolute; top: 429px; width: 259px; z-index: 1; "><param name="src" value="Research_files/testpov.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/testpov.mpg"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id9" type="video/quicktime" width="259" height="212" data="Media/testpov.mpg" style="height: 212px; left: 15px; position: absolute; top: 429px; width: 259px; z-index: 1; "><param name="src" value="Media/testpov.mpg"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
function writeMovie2()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id10" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="300" height="185" style="height: 185px; left: 390px; position: absolute; top: 1290px; width: 300px; z-index: 1; "><param name="src" value="Media/BigBangLawsOfPhysics.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id10" type="video/quicktime" width="300" height="185" style="height: 185px; left: 390px; position: absolute; top: 1290px; width: 300px; z-index: 1; "><param name="src" value="Research_files/BigBangLawsOfPhysics.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/BigBangLawsOfPhysics.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id10" type="video/quicktime" width="300" height="185" data="Media/BigBangLawsOfPhysics.mov" style="height: 185px; left: 390px; position: absolute; top: 1290px; width: 300px; z-index: 1; "><param name="src" value="Media/BigBangLawsOfPhysics.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,226),url:'Research_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Research_files/stroke_1.png'},{rect:new IWRect(5,-5,249,10),url:'Research_files/stroke_2.png'},{rect:new IWRect(254,-5,10,10),url:'Research_files/stroke_3.png'},{rect:new IWRect(254,5,10,226),url:'Research_files/stroke_4.png'},{rect:new IWRect(254,231,10,11),url:'Research_files/stroke_5.png'},{rect:new IWRect(5,231,249,11),url:'Research_files/stroke_6.png'},{rect:new IWRect(-5,231,10,11),url:'Research_files/stroke_7.png'}],new IWSize(259,236))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Research_files/ResearchMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id11');adjustFontSizeIfTooBig('id11');adjustLineHeightIfTooBig('id12');adjustFontSizeIfTooBig('id12');adjustLineHeightIfTooBig('id13');adjustFontSizeIfTooBig('id13');adjustLineHeightIfTooBig('id14');adjustFontSizeIfTooBig('id14');adjustLineHeightIfTooBig('id15');adjustFontSizeIfTooBig('id15');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id16');applyEffects()}
function onPageUnload()
{Widget.onunload();}
