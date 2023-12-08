gdjs.ScoreCode = {};
gdjs.ScoreCode.GDTile_95951Objects1= [];
gdjs.ScoreCode.GDTile_95951Objects2= [];
gdjs.ScoreCode.GDtile_95952Objects1= [];
gdjs.ScoreCode.GDtile_95952Objects2= [];
gdjs.ScoreCode.GDSkeletObjects1= [];
gdjs.ScoreCode.GDSkeletObjects2= [];
gdjs.ScoreCode.GDNewTiledSpriteObjects1= [];
gdjs.ScoreCode.GDNewTiledSpriteObjects2= [];
gdjs.ScoreCode.GDright_9595arrowObjects1= [];
gdjs.ScoreCode.GDright_9595arrowObjects2= [];
gdjs.ScoreCode.GDLeft_9595arrowObjects1= [];
gdjs.ScoreCode.GDLeft_9595arrowObjects2= [];
gdjs.ScoreCode.GDCoinObjects1= [];
gdjs.ScoreCode.GDCoinObjects2= [];
gdjs.ScoreCode.GDbackgroundObjects1= [];
gdjs.ScoreCode.GDbackgroundObjects2= [];
gdjs.ScoreCode.GDCoin2Objects1= [];
gdjs.ScoreCode.GDCoin2Objects2= [];
gdjs.ScoreCode.GDNameObjects1= [];
gdjs.ScoreCode.GDNameObjects2= [];
gdjs.ScoreCode.GDcongratsObjects1= [];
gdjs.ScoreCode.GDcongratsObjects2= [];
gdjs.ScoreCode.GDtimer_9595iconObjects1= [];
gdjs.ScoreCode.GDtimer_9595iconObjects2= [];
gdjs.ScoreCode.GDtimer_9595icon2Objects1= [];
gdjs.ScoreCode.GDtimer_9595icon2Objects2= [];
gdjs.ScoreCode.GDplayObjects1= [];
gdjs.ScoreCode.GDplayObjects2= [];
gdjs.ScoreCode.GDyou_9595collectedObjects1= [];
gdjs.ScoreCode.GDyou_9595collectedObjects2= [];
gdjs.ScoreCode.GDcoinsObjects1= [];
gdjs.ScoreCode.GDcoinsObjects2= [];


gdjs.ScoreCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "bg_music.mp3", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.ScoreCode.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ScoreCode.GDplayObjects1.length;i<l;++i) {
    if ( gdjs.ScoreCode.GDplayObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ScoreCode.GDplayObjects1[k] = gdjs.ScoreCode.GDplayObjects1[i];
        ++k;
    }
}
gdjs.ScoreCode.GDplayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameplay", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.ScoreCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.ScoreCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("coins"), gdjs.ScoreCode.GDcoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("congrats"), gdjs.ScoreCode.GDcongratsObjects1);
gdjs.copyArray(runtimeScene.getObjects("you_collected"), gdjs.ScoreCode.GDyou_9595collectedObjects1);
{for(var i = 0, len = gdjs.ScoreCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.ScoreCode.GDCoinObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.ScoreCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.ScoreCode.GDNameObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.ScoreCode.GDcongratsObjects1.length ;i < len;++i) {
    gdjs.ScoreCode.GDcongratsObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.ScoreCode.GDyou_9595collectedObjects1.length ;i < len;++i) {
    gdjs.ScoreCode.GDyou_9595collectedObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.ScoreCode.GDcoinsObjects1.length ;i < len;++i) {
    gdjs.ScoreCode.GDcoinsObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.ScoreCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.ScoreCode.GDNameObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))) + " !");
}
}{for(var i = 0, len = gdjs.ScoreCode.GDcoinsObjects1.length ;i < len;++i) {
    gdjs.ScoreCode.GDcoinsObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) + " Coins");
}
}}

}


};

gdjs.ScoreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ScoreCode.GDTile_95951Objects1.length = 0;
gdjs.ScoreCode.GDTile_95951Objects2.length = 0;
gdjs.ScoreCode.GDtile_95952Objects1.length = 0;
gdjs.ScoreCode.GDtile_95952Objects2.length = 0;
gdjs.ScoreCode.GDSkeletObjects1.length = 0;
gdjs.ScoreCode.GDSkeletObjects2.length = 0;
gdjs.ScoreCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.ScoreCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.ScoreCode.GDright_9595arrowObjects1.length = 0;
gdjs.ScoreCode.GDright_9595arrowObjects2.length = 0;
gdjs.ScoreCode.GDLeft_9595arrowObjects1.length = 0;
gdjs.ScoreCode.GDLeft_9595arrowObjects2.length = 0;
gdjs.ScoreCode.GDCoinObjects1.length = 0;
gdjs.ScoreCode.GDCoinObjects2.length = 0;
gdjs.ScoreCode.GDbackgroundObjects1.length = 0;
gdjs.ScoreCode.GDbackgroundObjects2.length = 0;
gdjs.ScoreCode.GDCoin2Objects1.length = 0;
gdjs.ScoreCode.GDCoin2Objects2.length = 0;
gdjs.ScoreCode.GDNameObjects1.length = 0;
gdjs.ScoreCode.GDNameObjects2.length = 0;
gdjs.ScoreCode.GDcongratsObjects1.length = 0;
gdjs.ScoreCode.GDcongratsObjects2.length = 0;
gdjs.ScoreCode.GDtimer_9595iconObjects1.length = 0;
gdjs.ScoreCode.GDtimer_9595iconObjects2.length = 0;
gdjs.ScoreCode.GDtimer_9595icon2Objects1.length = 0;
gdjs.ScoreCode.GDtimer_9595icon2Objects2.length = 0;
gdjs.ScoreCode.GDplayObjects1.length = 0;
gdjs.ScoreCode.GDplayObjects2.length = 0;
gdjs.ScoreCode.GDyou_9595collectedObjects1.length = 0;
gdjs.ScoreCode.GDyou_9595collectedObjects2.length = 0;
gdjs.ScoreCode.GDcoinsObjects1.length = 0;
gdjs.ScoreCode.GDcoinsObjects2.length = 0;

gdjs.ScoreCode.eventsList0(runtimeScene);

return;

}

gdjs['ScoreCode'] = gdjs.ScoreCode;
