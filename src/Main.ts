
class Main extends eui.UILayer {
    public static root: eui.UILayer;
    public static home: Scene;

    protected createChildren(): void {
        super.createChildren();
        // this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddedToStage, this);
		// this.addEventListener(egret.Event.COMPLETE,this.onSkinLoaded,this);
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;
        Main.root = this;
        Main.home = new HomeScene();
        //装载场景管理器,跳转到Home界面,此前需装载Main.home和Main.root
        SceneManager.instance.init(Main.root,Main.home);
    }


    
}
