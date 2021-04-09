
class FirstScene extends Scene {
    
    /**
     * 计时器 Timer 每秒一次
     */
    private timer: egret.Timer = new egret.Timer(1000, 0);
    private labelTest: eui.Label;
    private LabelN: eui.Label = new eui.Label;
    private LabelX: eui.Label = new eui.Label;
    private LabelAC: eui.Label = new eui.Label;
    private LabelLC: eui.Label = new eui.Label;

    public constructor() {
        super();
        this.skinName = "resource/euiscene/firstScene.exml";
        this.createComponents();
    }
    public onComplete() {
        egret.log("第一个场景加载完成");
    }
    private comeBack(e: egret.TouchEvent) {
        SceneManager.instance.popScene();
    }
    // private createBitmapByName(name: string): egret.Bitmap {
    //     let result = new egret.Bitmap();
    //     let texture: egret.Texture = RES.getRes(name);
    //     result.texture = texture;
    //     return result;
    // }
    /**
     * 创建firstScene所需组件
     */
    private createComponents() {

        let group: eui.Group = new eui.Group();
        group.left = 150;
        group.top = 200;
        group.layout = new eui.VerticalLayout();
        this.addChild(group);

        // group.layout = hLayout;


        let comeBackButton = new eui.Button();
        comeBackButton.label = "返回";
        //位置
        comeBackButton.horizontalCenter = -250;
        comeBackButton.verticalCenter = 200;
        //尺寸
        comeBackButton.height = 50;
        comeBackButton.width = 120;
        this.addChild(comeBackButton);
        comeBackButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.comeBack, this);

        this.labelTest = new eui.Label();
        this.labelTest.text = "这是一个文本";
        this.labelTest.textColor = 0x000000;
        this.labelTest.border = true;
        this.labelTest.borderColor = 0x0000ff;
        // this.labelTest.textAlign = egret.HorizontalAlign.CENTER;
        // this.labelTest.verticalAlign = egret.VerticalAlign.MIDDLE;
        //设置描边属性
        // this.labelTest.strokeColor = 0x0000ff;
        // this.labelTest.stroke = 1;
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timeFlies, this);
        this.timer.start();
        group.addChild(this.labelTest);


        group.addChild(this.oneLine(this.LabelN, "实际人数峰值： ", this.format(GlobalVariable.N)));
        group.addChild(this.oneLine(this.LabelX, "现场人数： ", this.format(GlobalVariable.X)));
        group.addChild(this.oneLine(this.LabelAC, "增加人数： ", this.format(GlobalVariable.AC)));
        group.addChild(this.oneLine(this.LabelLC, "离开人数： ", this.format(GlobalVariable.LC)));

        group.addChild(this.inputLabel());
    }
    private timeFlies() {
        this.labelTest.text = egret.getTimer() + "";
        GlobalVariable.AC = this.acCount();
        GlobalVariable.LC = this.lcCount();
        GlobalVariable.X = GlobalVariable.X + GlobalVariable.AC + GlobalVariable.LC;
        console.log(GlobalVariable.AC + "   " + GlobalVariable.LC);
        this.LabelAC.text = this.format(GlobalVariable.AC);
        this.LabelLC.text = this.format(GlobalVariable.LC);
        this.LabelX.text = this.format(GlobalVariable.X);
    }

    private oneLine(label: eui.Label, p1: string, p2: string) {
        let group = new eui.Group;
        group.layout = new eui.HorizontalLayout;
        let textLabel = new eui.Label;
        textLabel.text = p1;
        textLabel.border = true;
        textLabel.borderColor = 0x0000ff;
        textLabel.textColor = 0x000000;
        label.text = p2==="NaN"||p2==="undefined"?"0":p2;
        label.textColor = 0x000000;
        group.addChild(textLabel);
        group.addChild(label);
        return group;
    }
    private inputLabel() {
        let group = new eui.Group;
        let input = new eui.TextInput;
        let button = new eui.Button;
        let start = new eui.Button;
        button.label = "确认";
        start.label = "开始";
        group.layout = new eui.HorizontalLayout;
        group.addChild(input);
        group.addChild(button);
        group.addChild(start);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { this.updateN(input.text) }, this);
        start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.start, this);
        input.width = 282;
        input.height = 43;
        input.textColor = 0x000000;
        return group;
    }
    private updateN(text: string) {
        this.timer.stop();
        console.log(text);
        GlobalVariable.PN = Number(text);
        GlobalVariable.N = GlobalVariable.PN * (0.97 + Math.random() * 0.06);
        GlobalVariable.X = 0;
        this.LabelN.text = this.format(GlobalVariable.N);
    }
    private start() {
        this.timer.reset();
        this.timer.start();
    }

    private format(count: number) {
        var result: string;
        if (Math.abs(count) >= 10000) {
            result = (count / 10000).toFixed(4) + "万";
        } else if (Math.abs(count) >= 1000) {
            result = (count / 1000).toFixed(3) + "千";
        } else {
            result = count+"";
        }
        return result;
    }
    private acCount() {
        let diff = GlobalVariable.N - GlobalVariable.X;
        let temp = Math.floor(diff) == 0 ? 1 : Math.floor(diff);
        let sign = temp / Math.abs(temp);
        return (0.03 * diff + sign * 0.005 * GlobalVariable.N) * (Math.random() + 1) * 0.5;
    }
    private lcCount() {
        let diff = GlobalVariable.X - GlobalVariable.N;
        let temp = Math.floor(diff) == 0 ? 1 : Math.floor(diff);
        let sign = temp / Math.abs(temp);
        return (0.01 * diff + sign * 0.005 * GlobalVariable.N) * (Math.random() + 1) * 0.5;
    }
}
