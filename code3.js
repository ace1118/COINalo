gdjs.LeaderBoardCode = {};


gdjs.LeaderBoardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "fa1cf690-a09d-4a84-9165-b8df7614e703", false);
}}

}


};

gdjs.LeaderBoardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.LeaderBoardCode.eventsList0(runtimeScene);

return;

}

gdjs['LeaderBoardCode'] = gdjs.LeaderBoardCode;
