
class GlobalVariable{
    /**
     * 现场预估人数峰值
     */
    public static PN: number;
    /**
     * 实际现场人数峰值
     * N = PN ± Random(PN * 0.03)
     */
    public static N: number;
    /**
     * 现场人数
     */
    public static X: number;
     /**
      * 人数指标
      * 代表当前现场人数变化趋势
      * n1 = 人数指标  = N*0.8
      */
    public static N1: number;
    /**
     * 每分钟人数增加量
     * 0.03*(X-n)*(random*(0.5,1))
     */
    public static AC: number;
    /**
     * 每分钟人数离开量
     * 0.01*|X-n|*(random*(0.5,1))
     */
    public static LC: number;
    
}