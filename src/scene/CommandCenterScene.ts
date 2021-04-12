
class CommandCenterScene extends Scene {
    /**
     * 分五个区域 
     * A区 B区 C区（三区联合） D区（美食区） E区（西湖区）
     */
    public partA: ActivityAreaPart;
    public partB: ActivityAreaPart;
    public partC: ActivityAreaPart;
    public partD: ActivityAreaPart;
    public partE: ActivityAreaPart;
    /**
     * 计时器 Timer 每秒一次
     */
    private timer: egret.Timer = new egret.Timer(1000, 0);
    public constructor() {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE, this.createComponents, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timeFlies, this);
        this.timer.start();
        this.skinName = "resource/euiscene/defaultScene.exml";
    }
    public onComplete() {
        egret.log("指挥中心界面加载完成");
    }
    /**
     * 组件都放在这里
     */
    private createComponents() {
        this.initPart();
    }
    /**
     * 初始化各个区域
     */
    private initPart(){
        this.partA = new ActivityAreaPart(100, 100, ColorHexadecimal.Orange);
        this.partA.x = 200;
        this.partA.y = 200;
        this.partA.ellipseHeight = 0;
        this.partA.ellipseWidth = 0;
        this.partA.fillAlpha = 0.2;
        this.partA.strokeWeight = 1;
        this.partA.strokeColor = ColorHexadecimal.Brown;
        this.addChild(this.partA);
        this.partB = new ActivityAreaPart(100,100,ColorHexadecimal.Aqua);
        this.partC = new ActivityAreaPart(100,100,ColorHexadecimal.Aqua);
        this.partD = new ActivityAreaPart(100,100,ColorHexadecimal.Aqua);
        this.partE = new ActivityAreaPart(100,100,ColorHexadecimal.Aqua);
    }
    private timeFlies(){
        this.partA.crowdChange(10,10);
    }
}