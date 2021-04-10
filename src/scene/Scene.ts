abstract class Scene extends eui.Component{
	public constructor() {
		super();
		this.addEventListener(egret.Event.COMPLETE,this.onComplete,this);
	}

	//皮肤加载完成的回调
	public abstract onComplete():void;

}
