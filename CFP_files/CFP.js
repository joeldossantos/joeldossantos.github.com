// Created by iWeb 3.0.4 local-build-20130404

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:1.00}),shadow_0:new IWShadow({blurRadius:6,offset:new IWPoint(3.5355,3.5355),color:'#c0c0c0',opacity:0.500000}),shadow_1:new IWShadow({blurRadius:6,offset:new IWPoint(3.5355,3.5355),color:'#c0c0c0',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('CFP_files/CFPMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixupAllIEPNGBGs();Widget.onload();fixAllIEPNGs('Media/transparent.gif');IMpreload('CFP_files','shapeimage_6','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}
