var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 场景切换管理器
 */
var SceneManager = (function () {
    function SceneManager() {
    }
    Object.defineProperty(SceneManager, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new SceneManager();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 初始化场景管理器
     * @param r 根场景
     * @param s home场景
     */
    SceneManager.prototype.init = function (r, s) {
        this.rootLayer = r;
        this.firstScene = s;
        this.currentScene = this.firstScene;
        this.stretch(this.firstScene);
        this.rootLayer.addChild(this.firstScene);
    };
    /**
     * 压入场景
     * @param s 要压入的场景
     */
    SceneManager.prototype.pushScene = function (s) {
        this.checking();
        this.stretch(s);
        if (this.rootLayer.contains(s)) {
            this.rootLayer.removeChild(s);
        }
        this.rootLayer.addChild(s);
        this.currentScene = s;
    };
    /**
     * 替换场景
     * @param s 要替换的场景
     */
    SceneManager.prototype.changeScene = function (s) {
        this.checking();
        this.stretch(s);
        if (this.firstScene == s) {
            console.log("首场景无法替换。。。");
            throw new Error("无法更换界面。。。");
        }
        if (this.rootLayer.contains(s)) {
            this.rootLayer.removeChild(s);
        }
        this.rootLayer.removeChild(this.currentScene);
        this.rootLayer.addChild(s);
        this.currentScene = s;
    };
    /**
     * 弹出当前场景
     */
    SceneManager.prototype.popScene = function () {
        this.checking();
        var index = this.rootLayer.getChildIndex(this.currentScene);
        this.rootLayer.removeChild(this.currentScene);
        this.currentScene = this.rootLayer.getChildAt(index - 1);
    };
    /**
     * 检查场景管理器是否正常
     */
    SceneManager.prototype.checking = function () {
        if (this.rootLayer == null || this.firstScene == null) {
            console.log("创建管理器未初始化。。。");
            throw new Error("软件发生错误，请联系管理员。。。");
        }
        if (this.currentScene == null) {
            console.log("当前场景不存在。。。");
            throw new Error("软件发生错误，请联系管理员。。。");
        }
    };
    /**
     * 拉伸场景至根场景一样大小
     * @param s 场景
     */
    SceneManager.prototype.stretch = function (s) {
        s.width = this.rootLayer.width;
        s.height = this.rootLayer.height;
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map