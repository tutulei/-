
//活动分区

class ActivityAreaPart extends eui.Rect {
    /**
     * 区域吸引力Attraction 
     * 最大值为1
     */
    public A: number;
    /**
     * 区域额定容量max count 
     */
    public MC: number;
    /**
     * 现场人数
     */
    public X: number;
    /**
     * 每分钟人数增加量add count 
     * 0.03*(X-n)*(random*(0.5,1))
     */
    public AC: number;
    /**
     * 每分钟人数离开量leave count 
     * 0.01*|X-n|*(random*(0.5,1))
     */
    public LC: number;
    /**
     * 事故发生数event count 
     */
    public EC: number;
    /**
     * 该区域人群列表
     */
    public crowdList: Array<egret.Shape> = new Array();

    /**
     * 计时器 Timer 每秒一次
     */
    private timer: egret.Timer = new egret.Timer(1000, 0);

    public constructor(width: number, height: number, fillColor: number) {
        super(width, height, fillColor);
        this.changePeople(100000);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timeFlies, this);
        this.timer.start();
    }
    /**
     * 创建区域中的小黑点，整个活动最多一千个黑点(每个点代表 活动总人数峰值N/1000 人)
     * @param count 要增加的人数 负数时为减少
     * @returns 创建成功返回true
     */
    public changePeople(count: number): boolean {
        if (this.MC < this.X + count) {
            return false;
        }
        this.X = this.X + count;
        let c = this.X / (GlobalVariable.N / 1000);
        if(count<0){
            for (let i = 0; i <= Math.abs(c - length); i++) {
                let point = this.crowdList.pop();   
                this.removeChild(point);
            }
        }else{
            for (let i = 0; i <= Math.abs(c - length); i++) {
                let point: egret.Shape = new egret.Shape();
                point.graphics.beginFill(ColorHexadecimal.Black);
                point.graphics.drawCircle(0, 0, 3);
                this.addChild(point);
                this.crowdList.push(point);
            }
        }
        return true;
    }

    private timeFlies() {
        let size = this.crowdList.length;
        for (let i = 0; i < size; i++) {
            let point = this.crowdList[i];
            //伪随机运动（贴墙概率大）
            this.moveByself(point);
        }
    }

    public moveByself(point: egret.Shape) {
        let oldX = point.x;
        let oldY = point.y;
        let newX = oldX + (Math.random() - 0.5) * this.width * 3 / 5;
        let newY = oldY + (Math.random() - 0.5) * this.height * 3 / 5;
        newX = newX <= 0 ? 1 : newX;
        newX = newX >= this.height ? this.height - 1 : newX;
        newY = newY <= 0 ? 1 : newY;
        newY = newY >= this.width ? this.width - 1 : newY;
        point.x = newX;
        point.y = newY;
    }
    public crowdChange(ac:number,lc:number){
        //来人（活动会场外来人+活动会场内其他区域来人）
        this.AC = ac;
        //去人（离开会场+离开本区域去其他区域）
        this.LC = lc;
        //添人
        this.changePeople(this.AC+this.LC);
    }

}