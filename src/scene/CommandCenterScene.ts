
class CommandCenterScene extends Scene {
    /**
     * 计时器 Timer 每秒一次
     */
    private timer: egret.Timer = new egret.Timer(1000, 0);
    public constructor() {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE, this.createComponents, this);
        this.skinName = "resource/euiscene/defaultScene.exml";
    }
    public onComplete() {
        egret.log("指挥中心界面加载完成");
    }
    /**
     * 组件都放在这里
     */
    private createComponents() {
        let part1 = new ActivityAreaPart(100, 100, ColorHexadecimal.Orange);
        part1.x = 200;
        part1.y = 200;
        part1.ellipseHeight = 0;
        part1.ellipseWidth = 0;
        part1.fillAlpha = 0.2;
        part1.strokeWeight = 1;
        part1.strokeColor = ColorHexadecimal.Brown;
        this.addChild(part1);
    }
}